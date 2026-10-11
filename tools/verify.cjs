/* Browser QA for standalone serving at both / and /a-repository/.
   All requests are fulfilled from this website in an isolated browser context. */
const {chromium}=require('playwright'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),subjects=JSON.parse(fs.readFileSync(path.join(root,'subjects.json'),'utf8')),reports=path.join(root,'reports');fs.mkdirSync(reports,{recursive:true});
const count=(n,e)=>n.toLocaleString()+' nodes · '+e.toLocaleString()+' connections';
(async()=>{const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const report={checks:[],subjects:[],errors:[]};try{
 for(const prefix of ['/','/a-repository/']){
  const ctx=await browser.newContext({viewport:{width:1600,height:1000}});const misses=[];
  await ctx.route('**/*',async route=>{const url=new URL(route.request().url());if(url.origin!=='https://meta-math.test'||!url.pathname.startsWith(prefix)){misses.push(url.href);return route.abort();}const part=decodeURIComponent(url.pathname.slice(prefix.length))||'index.html',file=path.resolve(root,part);if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){misses.push(url.href);return route.abort();}await route.fulfill({status:200,contentType:({'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.md':'text/plain'})[path.extname(file)]||'text/plain',body:fs.readFileSync(file)});});
  const page=await ctx.newPage();page.on('pageerror',e=>report.errors.push(e.message));const home='https://meta-math.test'+prefix+'index.html';const frames=()=>page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  await page.goto(home);assert.equal(await page.locator('.subject-card:visible').count(),17);
  for(const cat of [...new Set(subjects.map(s=>s.category))]){await page.locator('[data-branch="'+cat+'"]').click();assert.equal(await page.locator('.subject-card:visible').count(),subjects.filter(s=>s.category===cat).length);}
  await page.locator('[data-branch=all]').click();await page.locator('#subject-search').fill('Lie');assert.equal(await page.locator('.subject-card:visible').count(),1);assert.match(await page.locator('.subject-card:visible h3').textContent(),/Representation/);
  await page.locator('#subject-search').fill('no-such-subject-1234');assert.equal(await page.locator('#empty').isVisible(),true);await page.locator('#empty-clear').click();assert.equal(await page.locator('.subject-card:visible').count(),17);await page.locator('#sort').selectOption('alphabetical');
  const order=await page.locator('#analysis .subject-card').evaluateAll(es=>es.map(e=>e.dataset.title));assert.deepEqual(order,[...order].sort((a,b)=>a.localeCompare(b)));
  report.checks.push(prefix+': landing page, all six branch filters, search, empty state, reset and alphabetical order');
  if(prefix==='/a-repository/'){
   await page.goto(home);await page.evaluate(async()=>{for(const i of document.images)i.loading='eager';await Promise.all([...document.images].map(i=>i.decode()));});await page.screenshot({path:path.join(reports,'dashboard-desktop.png')});await page.screenshot({path:path.join(reports,'dashboard-full.png'),fullPage:true});
  }
  for(let i=0;i<subjects.length;i++){
   const s=subjects[i];await page.goto(home);await page.locator('.subject-card[href="'+s.path+'"]').click();await page.locator('.compare').click();await frames();
   assert.equal(await page.locator('#subjectTitle').textContent(),s.title);assert.equal(await page.locator('#stats').textContent(),count(s.nodes,s.edges));assert.equal(await page.locator('.faculty').count(),0);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
   const other=subjects[(i+1)%subjects.length],foreign=fs.readFileSync(path.join(root,'subjects',other.slug,'graph.json'));
   await page.locator('#importFile').setInputFiles({name:'foreign.json',mimeType:'application/json',buffer:foreign});await page.locator('#toast').filter({hasText:'another subject'}).waitFor();assert.equal(await page.locator('#stats').textContent(),count(s.nodes,s.edges));
   if(prefix==='/a-repository/'&&['number-theory','algebraic-topology','mathematical-logic-and-set-theory'].includes(s.slug)){await page.reload();await frames();await page.screenshot({path:path.join(reports,s.slug+'.png')});}
   await page.locator('#bookLink').click();assert.match(await page.title(),/Book outline/);assert.equal(await page.locator('h1').textContent(),s.title);assert.ok(await page.locator('details details').count()>0);await page.locator('details details').first().locator('summary').click();assert.ok(await page.locator('.book-subsection:visible').count()>0);
   await page.locator('header a').first().click();await page.locator('.atlas-links a').first().click();assert.equal(new URL(page.url()).pathname,prefix+'index.html');
   if(prefix==='/a-repository/')report.subjects.push({subject:s.title,passed:true});
  }
  report.checks.push(prefix+': all 17 cards open the correct local graph, reject foreign imports, open local book pages and return to the dashboard');
  await page.goto(home);await page.setViewportSize({width:390,height:844});await frames();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await page.locator('[data-branch=algebra]').click();assert.equal(await page.locator('.subject-card:visible').count(),4);await page.locator('[data-branch=all]').click();
  if(prefix==='/a-repository/')await page.screenshot({path:path.join(reports,'dashboard-mobile.png')});
  await page.locator('.subject-card').first().click();await frames();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await page.locator('.atlas-links a').first().click();assert.equal(await page.locator('.subject-card:visible').count(),17);
  report.checks.push(prefix+': mobile layout, branch filtering, subject entry and return navigation');assert.deepEqual(misses,[]);report.checks.push(prefix+': all assets resolve locally without missing files or external requests');await ctx.close();console.log('PASS website at '+prefix);
 }
 assert.deepEqual(report.errors,[]);report.passed=true;report.browser=await browser.version();report.date=new Date().toISOString();fs.writeFileSync(path.join(reports,'browser-verification.json'),JSON.stringify(report,null,2)+'\n');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
