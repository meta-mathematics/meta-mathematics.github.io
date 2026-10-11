/* Browser checks for subject isolation, vertical routing, and retained project navigation. */
const {chromium}=require('playwright'), fs=require('node:fs'), path=require('node:path'), assert=require('node:assert/strict');
const ROOT=path.resolve(__dirname,'..'), website=fs.existsSync(path.join(ROOT,'source-manifest.json'));
const servingRoot=website?ROOT:path.dirname(ROOT), reportDir=path.join(ROOT,website?'reports':'review');
const entries=website?JSON.parse(fs.readFileSync(path.join(ROOT,'subjects.json'))).map(s=>({title:s.title,folder:'subjects/'+s.slug})):[{path:'1-Number-Theory'},...JSON.parse(fs.readFileSync(path.join(ROOT,'subjects.json')))].map(s=>({folder:s.path+'/meta-graph'}));
const report={subjects:[],errors:[],checks:[]};fs.mkdirSync(reportDir,{recursive:true});
(async()=>{const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});try{
 for(const prefix of website?['/','/a-repository/']:['/']){
  const ctx=await browser.newContext({viewport:{width:1512,height:1050},reducedMotion:'reduce'}),misses=[];
  await ctx.route('**/*',async route=>{
   const url=new URL(route.request().url()),file=path.resolve(servingRoot,decodeURIComponent(url.pathname.slice(prefix.length))||'index.html');
   if(url.origin!=='https://atlas.test'||!url.pathname.startsWith(prefix)||!file.startsWith(servingRoot+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){misses.push(url.href);return route.abort();}
   await route.fulfill({status:200,contentType:({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.md':'text/plain'})[path.extname(file)]||'text/plain',body:fs.readFileSync(file)});
  });
  const page=await ctx.newPage();page.on('pageerror',e=>report.errors.push(e.message));
  for(const entry of entries){
   const graph=JSON.parse(fs.readFileSync(path.join(servingRoot,entry.folder,'graph.json'))),nodes=graph.nodes.filter(n=>n.layer==='global'),ids=new Set(nodes.map(n=>n.id)),edges=graph.edges.filter(e=>ids.has(e.source)&&ids.has(e.target));
   const url='https://atlas.test'+prefix+entry.folder+'/index.html';await page.goto(url);await page.locator('.math-node').first().waitFor();
   assert.equal(await page.locator('#subjectTitle').textContent(),graph.subject.title);assert.equal(await page.locator('.math-node').count(),nodes.length);assert.equal(await page.locator('.region-card').count(),graph.groups.length);
   assert.deepEqual(await page.evaluate(()=>window.META_GRAPH),graph);assert.equal(await page.locator('.project-bridge').count(),1);
   await page.locator('#connections').selectOption('all');assert.equal(await page.locator('.route').count(),edges.length);
   assert.equal(await page.locator('#spacing').inputValue(),'compact');
   const densityGeometry={};
   for(const density of ['compact','comfortable','spacious']){
   await page.locator('#spacing').selectOption(density);
   const geometry=await page.evaluate(()=>{
    const ns=[...document.querySelectorAll('.math-node')].map(n=>({id:n.dataset.node,x:n.offsetLeft,y:n.offsetTop,w:n.offsetWidth,h:n.offsetHeight}));const collisions=[],clipped=[],wrongTips=[];
    for(const el of document.querySelectorAll('.math-node')){const box=el.getBoundingClientRect();for(const span of el.querySelectorAll('span')){const r=span.getBoundingClientRect();if(r.bottom>box.bottom-2||r.right>box.right-2)clipped.push(el.dataset.node);}}
    for(const edge of document.querySelectorAll('.route')){const len=edge.getTotalLength(),last=edge.getPointAtLength(len),target=ns.find(n=>n.id===edge.dataset.target);if(last.x<target.x||last.x>target.x+target.w||Math.abs(last.y-(target.y-3))>1)wrongTips.push(edge.dataset.edge);for(let d=0;d<len;d+=9){const p=edge.getPointAtLength(d),hit=ns.find(n=>p.x>n.x+1&&p.x<n.x+n.w-1&&p.y>n.y+1&&p.y<n.y+n.h-1);if(hit){collisions.push({edge:edge.dataset.edge,node:hit.id});break;}}}
    return {collisions,clipped,wrongTips,height:document.querySelector('#atlas').offsetHeight};
   });
   assert.deepEqual(geometry,{collisions:[],clipped:[],wrongTips:[],height:geometry.height},graph.subject.title);
   densityGeometry[density]=geometry;
   }
   assert.ok(densityGeometry.compact.height<densityGeometry.comfortable.height);
   assert.ok(densityGeometry.comfortable.height<densityGeometry.spacious.height);
   await page.locator('#spacing').selectOption('compact');
   const geometry=densityGeometry.compact;
   const node=nodes.find(n=>edges.some(e=>e.source===n.id||e.target===n.id));
   await page.locator('.math-node').filter({hasText:node.title}).first().click();assert.equal(await page.locator('.detail-title').textContent(),node.title);assert.equal(await page.locator('.statement').textContent(),node.statement||node.description);assert.equal(await page.locator('.route.active').count(),edges.filter(e=>e.source===node.id||e.target===node.id).length);
   await page.locator('#close-details').click();await page.locator('#connections').selectOption('selected');assert.equal(await page.locator('.route').count(),edges.filter(e=>e.source===node.id||e.target===node.id).length);
   const rounded=await page.locator('.route').first().getAttribute('d');await page.locator('#routing').selectOption('straight');assert.notEqual(await page.locator('.route').first().getAttribute('d'),rounded);
   await page.locator('#spacing').selectOption('spacious');assert.ok(await page.locator('#atlas').evaluate(el=>el.offsetHeight)>geometry.height);
   await page.locator('#clear').click();await page.locator('#search').fill(node.title);await page.locator('#search-results button').first().click();assert.equal(await page.locator('.math-node.selected').getAttribute('data-node'),node.id);
   await page.locator('.project-bridge-link').click();await page.locator('#project-cards').waitFor();assert.equal(await page.locator('.project-card').count(),5);
   await page.goto(url);await page.locator('.compare').click();await page.locator('#graph').waitFor();assert.equal(await page.locator('#subjectTitle').textContent(),graph.subject.title);
   await page.goto(url);await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);assert.ok(await page.locator('.map-scroll').evaluate(el=>el.scrollWidth>el.clientWidth));
   await page.locator('#search').fill(node.title);await page.locator('#search-results button').first().click();assert.equal(await page.locator('.math-node.selected').count(),1);
   if(['Number Theory','Real Analysis','Mathematical Logic and Set Theory'].includes(graph.subject.title)&&prefix==='/')await page.screenshot({path:path.join(reportDir,'vertical-'+graph.subject.id+'-mobile.png')});
   await page.setViewportSize({width:1512,height:1050});
   if(['Number Theory','Real Analysis','Mathematical Logic and Set Theory'].includes(graph.subject.title)&&prefix==='/'){await page.goto(url);await page.locator('#regions a').first().click();await page.screenshot({path:path.join(reportDir,'vertical-'+graph.subject.id+'-desktop.png')});}
   if(prefix==='/')report.subjects.push({title:graph.subject.title,nodes:nodes.length,edges:edges.length,densities:densityGeometry,passed:true});
   console.log('PASS',prefix,graph.subject.title);
  }
  assert.deepEqual(misses,[]);await ctx.close();report.checks.push(prefix+': every subject renders only its own data; all routes avoid cards, labels fit, arrow tips align in all three densities; selection, search, line style, spacing, mobile scrolling, project banners, and canvas navigation pass');
 }
 assert.deepEqual(report.errors,[]);report.passed=true;fs.writeFileSync(path.join(reportDir,'vertical-rollout-verification.json'),JSON.stringify(report,null,2)+'\n');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
