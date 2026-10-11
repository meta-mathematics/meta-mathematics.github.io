/* Browser regression: hosted subpaths, atlas → studio → local proof, and downloads. */
const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),subjects=JSON.parse(fs.readFileSync(path.join(root,'subjects.json'))),reports=path.join(root,'reports');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 const result={routes:[],errors:[],missing:[]};
 try{
  for(const prefix of ['/','/mathematics/']){
   const context=await browser.newContext({viewport:{width:1440,height:1000}});
   await context.route('**/*',async route=>{
    const u=new URL(route.request().url()),f=path.resolve(root,decodeURIComponent(u.pathname.slice(prefix.length))||'index.html');
    if(u.origin!=='https://atlas.test'||!u.pathname.startsWith(prefix)||!f.startsWith(root+path.sep)||!fs.existsSync(f)||!fs.statSync(f).isFile()){result.missing.push(u.href);return route.abort();}
    await route.fulfill({status:200,contentType:({'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.pdf':'application/pdf','.md':'text/plain','.tex':'text/plain'})[path.extname(f)]||'application/octet-stream',body:fs.readFileSync(f)});
   });
   const page=await context.newPage();page.on('pageerror',e=>result.errors.push(e.message));const home='https://atlas.test'+prefix+'index.html';
   for(const s of subjects){
    await page.goto(home);await page.locator('.subject-card[href="'+s.path+'"]').click();
    assert.equal(await page.locator('#subjectTitle').textContent(),s.title);
    assert.equal(await page.locator('.project-bridge').count(),1);assert.equal(await page.locator('.faculty').count(),0);
    if(prefix==='/mathematics/'&&s.slug==='number-theory')await page.screenshot({path:path.join(reports,'integrated-number-theory-global.png')});
    await page.locator('.project-bridge-link').click();assert.equal(new URL(page.url()).pathname,prefix+s.projectPath);
    assert.equal(await page.locator('.project-card').count(),5);const d=await page.evaluate(()=>window.META_MATH);assert.equal(d.subject,s.title);
    if(prefix==='/mathematics/'&&s.slug==='number-theory')await page.screenshot({path:path.join(reports,'integrated-number-theory-projects.png'),fullPage:true});
    const base=page.url().split('#')[0];let visited=0;
    for(const p of d.projects){
     await page.locator('.project-card[href="#'+p.id+'"]').click();await page.waitForFunction(title=>document.getElementById('project-title').textContent===title,p.title);
     for(const n of p.nodes){await page.locator('[data-node="'+p.nodes.indexOf(n)+'"]').click();assert.equal(await page.locator('#node-detail .faculty').count(),5);visited++;}
     for(const tab of ['proof','example','repair','agents']){await page.locator('[data-tab="'+tab+'"]').click();assert.ok(await page.locator('#tab-'+tab).isVisible());}
     for(const [key,id] of [['pdf','pdf-link'],['tex','tex-link'],['markdown','md-link']]){
      const expected=new URL(p[key],base).href;assert.equal(await page.locator('#'+id).evaluate(el=>el.href),expected);
      const bytes=await page.evaluate(async u=>{const r=await fetch(u);if(!r.ok)throw Error('Download '+r.status);return (await r.arrayBuffer()).byteLength;},expected);assert.ok(bytes>100);
     }
     await page.locator('a.back').click();await page.locator('#overview').waitFor({state:'visible'});assert.ok(await page.locator('#overview').isVisible());
    }
    // Refresh a direct node/proof route, then exercise browser back and return links.
    const p=d.projects[0];await page.goto(base+'#'+p.id+'/'+p.nodes[0].id+'/proof');await page.reload();assert.ok(await page.locator('#tab-proof').isVisible());
    await page.locator('[data-tab="agents"]').click();
    if(prefix==='/mathematics/'&&s.slug==='number-theory')await page.screenshot({path:path.join(reports,'integrated-number-theory-agent.png'),fullPage:true});
    await page.setViewportSize({width:390,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'mobile '+s.slug);
    if(prefix==='/mathematics/'&&s.slug==='number-theory')await page.screenshot({path:path.join(reports,'integrated-number-theory-mobile.png')});
    await page.locator('.global-link').click();assert.equal(new URL(page.url()).pathname,prefix+s.path);assert.ok(await page.locator('.project-bridge-link').isVisible());
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'atlas mobile '+s.slug);
    await page.locator('.project-bridge-link').click();await page.locator('.proof-breadcrumb a').first().click();assert.equal(new URL(page.url()).pathname,prefix+'index.html');
    await page.setViewportSize({width:1440,height:1000});result.routes.push({prefix,subject:s.title,projects:5,nodesVisited:visited});console.log('PASS '+prefix+s.slug);
   }
   await context.close();
  }
  // Direct local-file use remains supported without fetching project data.
  const page=await browser.newPage();await page.goto('file://'+path.join(root,'subjects/number-theory/projects/index.html')+'#NT-01/N1/agents');assert.equal(await page.locator('#node-detail .faculty').count(),5);result.offline=true;
  assert.deepEqual(result.errors,[]);assert.deepEqual(result.missing,[]);result.passed=true;result.date=new Date().toISOString();fs.writeFileSync(path.join(reports,'project-browser-verification.json'),JSON.stringify(result,null,2)+'\n');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
