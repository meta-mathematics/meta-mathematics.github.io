/* Meta-Math explorer — offline, dependency-free, schema version 1. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const TYPES = {definition:'Definition / language', ingredient:'Proof ingredient', consequence:'Direct consequence', bridge:'Conceptual bridge', conceptual:'Conceptual support', contains:'Contains', uses:'Proof dependency', feedback:'Workflow feedback', analogy:'Analogy only'};
  const COLORS = {definition:'#7d9c97', ingredient:'#3f739c', consequence:'#658d43', bridge:'#baa07f', conceptual:'#79a699', contains:'#c4ccc2', uses:'#6585b9', feedback:'#a17fb1', analogy:'#b79e70'};
  const KIND = {lemma:'Lemma', corollary:'Corollary', proposition:'Proposition', principle:'Principle', algorithm:'Algorithm', method:'Method', example:'Example', concept:'Concept / method', theorem:'Theorem', definition:'Definition', conjecture:'Conjecture', workflow:'Workflow', part:'Book part', chapter:'Chapter', section:'Section', subsection:'Subsection'};
  const STATUS = {planning:'Planning', draft:'Draft', 'source-backed':'Source backed', checked:'Checked (author reported)'};
  const clean = s => typeof s === 'string' ? s : '';
  const clone = x => JSON.parse(JSON.stringify(x));
  const base = clone(window.META_GRAPH);
  const storageKey = 'meta-math.website.graph.v1.' + base.subject.id;
  let data = base, dirty = false, selected = null, positions = new Map(), byId, outgoing, incoming;
  let visibleNodes = [], visibleEdges = [], visibleIds = new Set(), pathIds = new Set(), cyclicCount = 0;
  let camera = {x:0,y:0,k:1}, width = 1, height = 1, redrawPending = false, toastTimer;
  let routeLeft=0,routeRight=0,groupBoxes=[],miniTransform=null;
  let editorMode = null, editorId = null, resizeInitialized = false;
  const canvas = $('graph'), ctx = canvas.getContext('2d');
  const nodeWidth = 210, nodeHeight = 66;
  function el(tag, cls, text) { const e=document.createElement(tag); if(cls)e.className=cls; if(text!==undefined)e.textContent=text; return e; }
  function toast(message) { $('toast').textContent=message; $('toast').hidden=false; clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('toast').hidden=true,5000); }
  function validate(input) {
    if(!input || input.schemaVersion!==1 || !input.subject || typeof input.subject.id!=='string' || !input.subject.id || typeof input.subject.title!=='string') throw Error('Expected a Meta-Math graph with schemaVersion 1 and a subject ID and title.');
    if(input.subject.id!==base.subject.id || input.subject.prefix!==base.subject.prefix) throw Error('This file belongs to another subject. Open that subject’s own explorer.');
    if(!Array.isArray(input.nodes)||!Array.isArray(input.edges)) throw Error('The graph needs nodes and edges arrays.');
    if(input.nodes.length>20000||input.edges.length>100000) throw Error('This explorer accepts up to 20,000 nodes and 100,000 connections per file.');
    const ids=new Set(), edgeIds=new Set();
    for(const n of input.nodes) {
      if(!n||typeof n.id!=='string'||!n.id||typeof n.title!=='string'||!n.title.trim()) throw Error('Every node needs a nonempty string ID and title.');
      if(n.subjectId!==base.subject.id || !n.id.startsWith(base.subject.prefix+':')) throw Error('Node belongs to another subject or lacks its namespace: '+n.id);
      if(ids.has(n.id)) throw Error('Duplicate node ID: '+n.id); ids.add(n.id);
      if(!['global','overview','book'].includes(n.layer)||!Object.hasOwn(KIND,n.kind)||!Object.hasOwn(STATUS,n.status)) throw Error('Invalid layer, kind or status on '+n.id);
      if(!Number.isInteger(n.depth)||n.depth<0||n.depth>4) throw Error('Node depth must be an integer from 0 to 4: '+n.id);
      for(const field of ['description','statement','hypotheses','source','evidence']) if(n[field]!==undefined && typeof n[field]!=='string') throw Error('Node '+n.id+': '+field+' must be text.');
      if(n.position!==undefined&&(!n.position||!Number.isFinite(n.position.x)||!Number.isFinite(n.position.y)||Math.abs(n.position.x)>1e9||Math.abs(n.position.y)>1e9)) throw Error('Invalid saved position on '+n.id);
      if(n.status==='checked'&&(!clean(n.statement).trim()||!clean(n.evidence).trim())) throw Error('A checked node needs a statement and verification evidence: '+n.id);
    }
    for(const e of input.edges) {
      if(!e||typeof e.id!=='string'||!e.id||edgeIds.has(e.id)) throw Error('Connection IDs must be nonempty and unique.'); edgeIds.add(e.id);
      if(e.subjectId!==base.subject.id || !e.id.startsWith(base.subject.prefix+':')) throw Error('Connection belongs to another subject or lacks its namespace: '+e.id);
      if(!ids.has(e.source)||!ids.has(e.target)) throw Error('Unknown connection endpoint on '+e.id);
      if(!Object.hasOwn(TYPES,e.type)) throw Error('Unknown connection type: '+e.type);
      if(typeof e.reason!=='string') throw Error('Every connection needs a text reason.');
      if(e.type==='uses'&&(!e.reason.trim()||!clean(e.evidence).trim())) throw Error('Proof dependencies require a reason and a source or proof-step reference.');
    }
    if(input.groups!==undefined){
      if(!Array.isArray(input.groups)||input.groups.some(g=>!g||typeof g.id!=='string'||typeof g.title!=='string'||!/^#[0-9a-f]{6}$/i.test(g.color)||!Number.isInteger(g.column)||!Number.isInteger(g.row)||g.column<0||g.row<0||g.column>100||g.row>100))throw Error('Invalid subject-region metadata.');
      if(input.groups.some(g=>!g.id.startsWith(base.subject.prefix+':')))throw Error('Foreign subject region.');
      if(new Set(input.groups.map(g=>g.id)).size!==input.groups.length)throw Error('Duplicate subject-region IDs.');
    }
    for(const n of input.nodes){
      if(n.group!==undefined&&typeof n.group!=='string')throw Error('Node group must be text.');
      if(n.group && !(input.groups||[]).some(g=>g.id===n.group)) throw Error('Unknown subject region: '+n.group);
      if(n.references!==undefined&&(!Array.isArray(n.references)||n.references.some(r=>!r||typeof r.title!=='string'||typeof r.url!=='string'||!/^https?:\/\//.test(r.url))))throw Error('References need titles and HTTP(S) URLs.');
    }
    return input;
  }
  try { const saved=localStorage.getItem(storageKey); if(saved){data=validate(JSON.parse(saved));dirty=true;} } catch { toast('A saved browser draft could not be read. The original graph is displayed.'); }
  validate(data);
  function persist(){ dirty=true; try {localStorage.setItem(storageKey,JSON.stringify(data));$('saveStatus').textContent='Saved in this browser · Export to keep a file';}catch{$('saveStatus').textContent='Browser storage unavailable · Export to keep changes';toast('Export your graph to keep changes; browser storage is unavailable or full.');} }
  function indexData(){byId=new Map(data.nodes.map(n=>[n.id,n]));outgoing=new Map();incoming=new Map();for(const n of data.nodes){outgoing.set(n.id,[]);incoming.set(n.id,[]);}for(const e of data.edges){outgoing.get(e.source).push(e);incoming.get(e.target).push(e);}}
  function setup(){
    indexData();$('subjectTitle').textContent=data.subject.title;$('category').textContent=clean(data.subject.category);
    document.title='Meta-Math · '+data.subject.title;$('libraryLink').href='../../index.html';
    const oldGroup=$('region').value;$('region').replaceChildren();
    for(const [v,t] of [['all','Entire subject'],...(data.groups||[]).map(g=>[g.id,g.title])]){const o=el('option','',t);o.value=v;$('region').append(o);}
    if([...$('region').options].some(o=>o.value===oldGroup))$('region').value=oldGroup;
    const oldKind=$('kindFilter').value;$('kindFilter').replaceChildren();
    for(const [v,t] of [['all','All mathematical objects'],...Object.entries(KIND).filter(([k])=>data.nodes.some(n=>n.kind===k))]){const o=el('option','',t);o.value=v;$('kindFilter').append(o);}
    if([...$('kindFilter').options].some(o=>o.value===oldKind))$('kindFilter').value=oldKind;
    $('depthField').hidden=$('layer').value!=='book';
    $('layer').querySelector('option[value=overview]').hidden=!data.nodes.some(n=>n.layer==='overview');
    if(dirty)$('saveStatus').textContent='Browser draft · Export to keep a file';rebuild();renderSearch();renderDetails();
  }
  function edgeAllowed(e){const mode=$('edgeMode').value;return mode==='all'||(mode==='dependencies'?!['conceptual','bridge','analogy','feedback'].includes(e.type):e.type===mode);}
  function resetView(){selected=null;$('search').value='';$('layer').value=data.nodes.some(n=>n.layer==='global')?'global':data.nodes.some(n=>n.layer==='overview')?'overview':'book';$('focus').value='all';$('region').value='all';$('kindFilter').value='all';$('edgeMode').value='all';$('direction').value='atlas';}
  // Iterative Kosaraju + component DAG: cycles are supported without recursive stack limits.
  function layout(nodes,edges){
    const ids=nodes.map(n=>n.id), adj=new Map(ids.map(id=>[id,[]])),rev=new Map(ids.map(id=>[id,[]]));
    for(const e of edges)if(e.type!=='feedback'){adj.get(e.source).push(e.target);rev.get(e.target).push(e.source);}
    const seen=new Set(), finish=[];
    for(const id of ids){if(seen.has(id))continue;seen.add(id);const stack=[[id,0]];while(stack.length){const f=stack[stack.length-1], next=adj.get(f[0]);if(f[1]<next.length){const x=next[f[1]++];if(!seen.has(x)){seen.add(x);stack.push([x,0]);}}else{finish.push(f[0]);stack.pop();}}}
    const component=new Map(),groups=[];
    for(let i=finish.length-1;i>=0;i--){const id=finish[i];if(component.has(id))continue;const g=groups.length,group=[],stack=[id];component.set(id,g);while(stack.length){const x=stack.pop();group.push(x);for(const y of rev.get(x))if(!component.has(y)){component.set(y,g);stack.push(y);}}groups.push(group);}
    cyclicCount=groups.filter(g=>g.length>1).length + edges.filter(e=>e.source===e.target&&e.type!=='feedback').length;
    const dag=groups.map(()=>new Set()),degree=groups.map(()=>0),rank=groups.map(()=>0);
    for(const e of edges)if(e.type!=='feedback'){const a=component.get(e.source),b=component.get(e.target);if(a!==b&&!dag[a].has(b)){dag[a].add(b);degree[b]++;}}
    const queue=[];degree.forEach((d,i)=>{if(!d)queue.push(i);});for(let q=0;q<queue.length;q++){const a=queue[q];for(const b of dag[a]){rank[b]=Math.max(rank[b],rank[a]+1);if(--degree[b]===0)queue.push(b);}}
    const columns=new Map();for(const n of nodes){const r=rank[component.get(n.id)];if(!columns.has(r))columns.set(r,[]);columns.get(r).push(n);}
    groupBoxes=[];
    if($('direction').value==='atlas'&&$('focus').value==='all'&&nodes.length&&nodes.every(n=>n.layer==='global')&&(data.groups||[]).length){
      const result=new Map();const known=new Set(data.groups.map(g=>g.id));
      const groupList=[...data.groups,{id:'ungrouped',title:'Additional results',color:'#72857a',column:0,row:Math.max(...data.groups.map(g=>g.row))+1}];
      const rowHeights=new Map();for(const g of groupList){const count=nodes.filter(n=>n.group===g.id||g.id==='ungrouped'&&!known.has(n.group)).length;rowHeights.set(g.row,Math.max(rowHeights.get(g.row)||0,Math.ceil(count/3)*90+180));}
      for(const g of groupList){const members=nodes.filter(n=>n.group===g.id||g.id==='ungrouped'&&!known.has(n.group));if(!members.length)continue;
        const x=g.column*790,y=[...rowHeights].filter(([r])=>r<g.row).reduce((s,[r,h])=>s+h,0),cols=3;
        const box={...g,x:x-25,y:y-82,w:735,h:Math.ceil(members.length/cols)*90+100,count:members.length};
        members.forEach((n,i)=>result.set(n.id,n.position?{...n.position}:{x:x+(i%cols)*235,y:y+Math.floor(i/cols)*90}));groupBoxes.push(box);
      }return result;
    }
    const vertical=$('direction').value!=='horizontal';
    const result=new Map();for(const [r,col] of columns){col.forEach((n,j)=>result.set(n.id,n.position?{...n.position}:vertical?{x:(j-(col.length-1)/2)*250,y:r*130}:{x:r*290,y:(j-(col.length-1)/2)*98}));}return result;
  }
  function reach(id,direction,allowed){const result=new Set([id]),q=[id],map=direction==='in'?incoming:outgoing;for(let i=0;i<q.length;i++)for(const e of map.get(q[i])||[]){if(!edgeAllowed(e))continue;const next=direction==='in'?e.source:e.target;if(allowed.has(next)&&!result.has(next)){result.add(next);q.push(next);}}return result;}
  function findPath(start,end,allowed){const prev=new Map([[start,null]]),q=[start];for(let i=0;i<q.length;i++){if(q[i]===end)break;for(const e of outgoing.get(q[i])||[])if(edgeAllowed(e)&&allowed.has(e.target)&&!prev.has(e.target)){prev.set(e.target,q[i]);q.push(e.target);}}if(!prev.has(end))return [];const path=[];for(let p=end;p!==null;p=prev.get(p))path.push(p);return path.reverse();}
  function candidates(){const layer=$('layer').value,depth=+$('depth').value,region=$('region').value,kind=$('kindFilter').value;return data.nodes.filter(n=>(layer==='all'||n.layer===layer)&&(n.layer!=='book'||n.depth<=depth)&&(region==='all'||n.group===region)&&(kind==='all'||n.kind===kind));}
  function rebuild(shouldFit=true){
    let nodes=candidates(),allowed=new Set(nodes.map(n=>n.id)); const mode=$('focus').value;pathIds=new Set();
    const prevTarget=$('pathTarget').value; const frag=document.createDocumentFragment();for(const n of nodes){const o=el('option','',n.title);o.value=n.id;frag.append(o);}$('pathTarget').replaceChildren(frag);if(allowed.has(prevTarget))$('pathTarget').value=prevTarget;
    $('pathField').hidden=mode!=='path';let note='';
    if(selected&&allowed.has(selected)&&mode!=='all'){
      let keep;
      if(mode==='ancestors'||mode==='descendants')keep=reach(selected,mode==='ancestors'?'in':'out',allowed);
      else if(mode==='neighbors'){keep=new Set([selected]);for(const e of [...incoming.get(selected),...outgoing.get(selected)]){if(!edgeAllowed(e))continue;keep.add(e.source);keep.add(e.target);}}
      else {const path=findPath(selected,$('pathTarget').value,allowed);keep=new Set(path.length?path:[selected]);pathIds=new Set(path);if(!path.length)note='No directed path exists in this view. Try a different destination, map, or book detail.';}
      nodes=nodes.filter(n=>keep.has(n.id));
    }else if(mode!=='all')note='Select a node to explore its connections.';
    visibleNodes=nodes;visibleIds=new Set(nodes.map(n=>n.id));visibleEdges=data.edges.filter(e=>edgeAllowed(e)&&visibleIds.has(e.source)&&visibleIds.has(e.target));
    if(pathIds.size){const path=findPath(selected,$('pathTarget').value,allowed);const pairs=new Set(path.slice(1).map((id,i)=>JSON.stringify([path[i],id])));visibleEdges=visibleEdges.filter(e=>pairs.has(JSON.stringify([e.source,e.target])));}
    positions=layout(nodes,visibleEdges);
    routeLeft=Infinity;routeRight=-Infinity;for(const p of positions.values()){routeLeft=Math.min(routeLeft,p.x);routeRight=Math.max(routeRight,p.x+nodeWidth);}
    if(cyclicCount)note+=(note?' ':'')+'This view contains '+cyclicCount+' cycle group(s). Inspect the links before using it as a proof dependency DAG.';
    $('mapNotice').textContent=note;$('mapNotice').hidden=!note;$('emptyState').hidden=nodes.length>0;
    $('stats').textContent=nodes.length.toLocaleString()+' nodes · '+visibleEdges.length.toLocaleString()+' connections';
    $('viewLabel').textContent=$('layer').value==='book'?'BOOK STRUCTURE':$('layer').value==='all'?'COMPLETE SUBJECT INVENTORY':data.subject.title.toUpperCase()+' · GLOBAL DEPENDENCY ATLAS';
    $('viewSubtitle').textContent=$('layer').value==='book'?'Parts → chapters → sections → subsections. Arrows show containment.':'Definitions → lemmas → theorems → consequences. Explore '+(data.groups||[]).length+' subject regions; zoom in to read individual results.';
    if(shouldFit)fit();else draw();
  }
  function fit(){width=canvas.clientWidth||width;height=canvas.clientHeight||height;if(!positions.size){draw();return;}let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;for(const p of positions.values()){minX=Math.min(minX,p.x);maxX=Math.max(maxX,p.x+nodeWidth);minY=Math.min(minY,p.y);maxY=Math.max(maxY,p.y+nodeHeight);}for(const box of groupBoxes){minX=Math.min(minX,box.x);minY=Math.min(minY,box.y);maxX=Math.max(maxX,box.x+box.w);maxY=Math.max(maxY,box.y+box.h);}const w=maxX-minX,h=maxY-minY;camera.k=Math.max(.008,Math.min(1.15,(width-60)/w,(height-190)/h));camera.x=width/2-(minX+w/2)*camera.k;camera.y=(height+30)/2-(minY+h/2)*camera.k;draw();}
  function zoom(factor,x=width/2,y=height/2){const k=Math.max(.004,Math.min(3,camera.k*factor));camera.x=x-(x-camera.x)*k/camera.k;camera.y=y-(y-camera.y)*k/camera.k;camera.k=k;draw();}
  function draw(){if(redrawPending)return;redrawPending=true;requestAnimationFrame(paint);}
  function wrap(text,maxWidth){const words=text.split(/\s+/),lines=[];let line='';for(const w of words){if(ctx.measureText((line?line+' ':'')+w).width>maxWidth&&line){lines.push(line);line=w;}else line+=(line?' ':'')+w;}if(line)lines.push(line);return lines;}
  const lineCache=new Map();
  function paint(){redrawPending=false;const dpr=Math.min(window.devicePixelRatio||1,2);ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,width,height);ctx.translate(camera.x,camera.y);ctx.scale(camera.k,camera.k);const k=camera.k,margin=80/k,bounds={l:-camera.x/k-margin,r:(width-camera.x)/k+margin,t:-camera.y/k-margin,b:(height-camera.y)/k+margin};
    for(const g of groupBoxes){ctx.fillStyle=g.color+'0a';ctx.strokeStyle=g.color+'65';ctx.lineWidth=1/k;ctx.beginPath();ctx.roundRect(g.x,g.y,g.w,g.h,18);ctx.fill();ctx.stroke();ctx.fillStyle=g.color;ctx.font='600 '+Math.max(22,(k<.45?8:11)/k)+'px system-ui';ctx.fillText(g.title,g.x+20,g.y+Math.max(38,9/k),g.w-40);if(k>=.45){ctx.font=Math.max(12,8/k)+'px system-ui';ctx.fillStyle='#73817b';ctx.fillText(g.count+' mathematical objects',g.x+20,g.y+65);}}
    let skipIndex=0;
    for(const e of visibleEdges){const a=positions.get(e.source),b=positions.get(e.target);if(Math.max(a.x,b.x)+nodeWidth<bounds.l||Math.min(a.x,b.x)>bounds.r||Math.max(a.y,b.y)+nodeHeight<bounds.t||Math.min(a.y,b.y)>bounds.b)continue;
      const active=selected&&(e.source===selected||e.target===selected||$('focus').value!=='all'),color=COLORS[e.type];ctx.globalAlpha=selected&&!active?.09:(groupBoxes.length&&!selected?.28:.8);ctx.strokeStyle=color;ctx.lineWidth=(active?2:1.2)/Math.max(k,.45);ctx.setLineDash(['contains','feedback','bridge','analogy'].includes(e.type)?[5/k,4/k]:[]);
      const vertical=$('direction').value!=='horizontal';
      const x1=a.x+(vertical?nodeWidth/2:nodeWidth),y1=a.y+(vertical?nodeHeight:nodeHeight/2),x2=b.x+(vertical?nodeWidth/2:0),y2=b.y+(vertical?0:nodeHeight/2),dx=Math.max(45,Math.abs(x2-x1)*.45),dy=Math.max(32,Math.abs(y2-y1)*.45);ctx.beginPath();ctx.moveTo(x1,y1);
      if(e.source===e.target)ctx.bezierCurveTo(x1+120,y1+100,x2+180,y2-100,x2,y2);
      else if(vertical&&!groupBoxes.length&&visibleEdges.length<1000&&y2-y1>130){const lane=(x2<(routeLeft+routeRight)/2?routeLeft-36-(skipIndex%4)*15:routeRight+36+(skipIndex%4)*15);skipIndex++;ctx.bezierCurveTo(x1,y1+24,lane,y1+24,lane,y1+45);ctx.lineTo(lane,y2-45);ctx.bezierCurveTo(lane,y2-24,x2,y2-24,x2,y2);}
      else if(vertical)ctx.bezierCurveTo(x1,y1+dy,x2,y2-dy,x2,y2);else ctx.bezierCurveTo(x1+dx,y1,x2-dx,y2,x2,y2);ctx.stroke();ctx.setLineDash([]);
      if(k>.17){ctx.fillStyle=color;ctx.beginPath();if(vertical){ctx.moveTo(x2,y2-2);ctx.lineTo(x2-4,y2-9);ctx.lineTo(x2+4,y2-9);}else{ctx.moveTo(x2-2,y2);ctx.lineTo(x2-9,y2-4);ctx.lineTo(x2-9,y2+4);}ctx.closePath();ctx.fill();}
      if($('edgeLabels').checked&&k>.55&&(!selected||active)&&visibleEdges.length<600){ctx.font='9px system-ui';const label=TYPES[e.type],x=(x1+x2)/2,y=(y1+y2)/2;ctx.fillStyle='#f5f4ef';ctx.fillRect(x-ctx.measureText(label).width/2-4,y-8,ctx.measureText(label).width+8,15);ctx.textAlign='center';ctx.fillStyle=color;ctx.fillText(label,x,y+3);ctx.textAlign='left';}
    }
    ctx.globalAlpha=1;ctx.setLineDash([]);
    for(const n of visibleNodes){const p=positions.get(n.id);if(p.x+nodeWidth<bounds.l||p.x>bounds.r||p.y+nodeHeight<bounds.t||p.y>bounds.b)continue;const active=n.id===selected;const groupColor=(data.groups||[]).find(g=>g.id===n.group)?.color||'#a9c2ad';ctx.fillStyle=active?'#146959':n.layer==='book'?'#fcfcf9':'#fafff6';ctx.strokeStyle=active?'#146959':n.layer==='book'?'#cdd5c9':groupColor;ctx.lineWidth=(active?2:1)/Math.max(k,.4);ctx.setLineDash(n.kind==='conjecture'?[5/k,3/k]:[]);ctx.beginPath();ctx.roundRect(p.x,p.y,nodeWidth,nodeHeight,8);ctx.fill();ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=active?'#c6e3c2':groupColor;ctx.fillRect(p.x+1,p.y+12,3,nodeHeight-24);
      if(k>.42){ctx.fillStyle=active?'#d3e7bc':'#6c8478';ctx.font=Math.max(8,5.5/k)+'px system-ui';ctx.fillText((n.number?n.number+' · ':'')+(KIND[n.kind]||n.kind).toUpperCase(),p.x+13,p.y+16);ctx.font=Math.max(12,6.7/k)+'px system-ui';const key=n.title+':'+Math.round(k*100);let lines=lineCache.get(key);if(!lines){lines=wrap(n.title,nodeWidth-26);lineCache.set(key,lines);}ctx.fillStyle=active?'#ffffff':'#28463e';lines.slice(0,2).forEach((l,i)=>{let text=l;if(i===1&&lines.length>2)text=l.slice(0,27)+'…';while(ctx.measureText(text).width>nodeWidth-26)text=text.slice(0,-2)+'…';ctx.fillText(text,p.x+13,p.y+36+i*Math.max(16,7.5/k));});}
    }
    $('zoomLevel').textContent=Math.round(k*100)+'%';paintMini();
  }
  function paintMini(){
    const mini=$('minimap'),c=mini.getContext('2d');c.clearRect(0,0,180,115);if(!positions.size)return;
    let left=Infinity,top=Infinity,right=-Infinity,bottom=-Infinity;
    for(const p of positions.values()){left=Math.min(left,p.x);top=Math.min(top,p.y);right=Math.max(right,p.x+nodeWidth);bottom=Math.max(bottom,p.y+nodeHeight);}
    const k=Math.min(168/(right-left||1),103/(bottom-top||1)),ox=6-left*k,oy=6-top*k;miniTransform={k,ox,oy};
    for(const n of visibleNodes){const p=positions.get(n.id);c.fillStyle=n.id===selected?'#163c34':(data.groups||[]).find(g=>g.id===n.group)?.color||'#90a394';c.fillRect(ox+p.x*k,oy+p.y*k,Math.max(1,nodeWidth*k),Math.max(1,nodeHeight*k));}
    c.strokeStyle='#203b3b';c.lineWidth=1.5;c.strokeRect(ox-camera.x/camera.k*k,oy-camera.y/camera.k*k,width/camera.k*k,height/camera.k*k);
  }
  $('minimap').onclick=event=>{if(!miniTransform)return;const r=$('minimap').getBoundingClientRect(),{k,ox,oy}=miniTransform;camera.x=width/2-((event.clientX-r.left)*180/r.width-ox)/k*camera.k;camera.y=height/2-((event.clientY-r.top)*115/r.height-oy)/k*camera.k;draw();};
  function hit(x,y){const gx=(x-camera.x)/camera.k,gy=(y-camera.y)/camera.k;for(let i=visibleNodes.length-1;i>=0;i--){const n=visibleNodes[i],p=positions.get(n.id);if(gx>=p.x&&gx<=p.x+nodeWidth&&gy>=p.y&&gy<=p.y+nodeHeight)return n.id;}return null;}
  function select(id,center=false){selected=id;const n=byId.get(id);if(!n)return;if($('region').value!=='all'&&$('region').value!==n.group)$('region').value='all';if($('kindFilter').value!=='all'&&$('kindFilter').value!==n.kind)$('kindFilter').value='all';const layer=$('layer').value;if(layer!=='all'&&layer!==n.layer){$('layer').value=n.layer;$('focus').value='all';}$('depthField').hidden=$('layer').value!=='book';if(n.layer==='book'&&n.depth>+$('depth').value)$('depth').value=String(n.depth);if(!visibleIds.has(id)||$('focus').value!=='all')rebuild();renderDetails();if(center){const p=positions.get(id);if(p){requestAnimationFrame(()=>{const rect=canvas.getBoundingClientRect();camera.k=1;camera.x=rect.width/2-(p.x+nodeWidth/2);camera.y=rect.height/2-(p.y+nodeHeight/2);draw();});}}draw();}
  function renderSearch(){const query=$('search').value.trim().toLocaleLowerCase(),results=$('results');results.replaceChildren();if(!query)return;const matches=data.nodes.filter(n=>[n.title,n.id,n.description,n.statement,n.hypotheses].some(t=>clean(t).toLocaleLowerCase().includes(query)));results.append(el('p','',matches.length+' matches'+(matches.length>60?' · Showing the first 60. Refine your search.':'')));for(const n of matches.slice(0,60)){const b=el('button','result',n.title);b.append(el('small','',(n.number?n.number+' · ':'')+KIND[n.kind]+' · '+(n.layer==='book'?'Book structure':'Connections')));b.onclick=()=>{if(n.layer==='book'){$('layer').value='book';$('direction').value='vertical';$('focus').value='ancestors';}select(n.id,n.layer!=='book');};results.append(b);}}
  function section(title,text){const s=el('section','detail-section');s.append(el('h3','',title));if(text)s.append(el('p','',text));return s;}
  function renderDetails(){const root=$('details');root.replaceChildren();document.querySelector('.workspace').classList.toggle('has-selection',!!selected);const n=byId.get(selected);
    if(!n){root.append(el('span','eyebrow','A SUBJECT, SEEN AS CONNECTIONS'),el('div','welcome-number','01 → ∞'),el('h2','node-title','Ideas build on ideas.'),el('p','description','Select a node to see its role, its statement, incoming dependencies, downstream consequences, and reading references.'));const s=section('Two complementary maps','The global atlas connects individual mathematical objects across its subject regions. Arrow types distinguish definitions, selected proof ingredients, direct consequences and conceptual bridges. The separate book view records containment only.');root.append(s);const list=el('details','node-list');list.append(el('summary','','Browse nodes with the keyboard'));const show=()=>{for(const old of list.querySelectorAll('button,p'))old.remove();for(const x of visibleNodes.slice(0,200)){const b=el('button','',x.title);b.append(el('small','',KIND[x.kind]));b.onclick=()=>select(x.id,true);list.append(b);}if(visibleNodes.length>200)list.append(el('p','','First 200 nodes shown. Search any node by name or ID.'));};list.ontoggle=()=>{if(list.open)show();};root.append(list);return;}
    root.append(el('span','node-code',n.id),el('h2','node-title',n.title));const badges=el('div','badges');badges.append(el('span','badge green',KIND[n.kind]),el('span','badge',n.layer==='global'?'Atlas entry · '+(n.kind==='conjecture'?'open conjecture':'selected dependencies'):STATUS[n.status]));root.append(badges,el('p','description',n.description||'Describe the role of this node as the subject develops.'));
    const buttons=el('div','detail-tools'),edit=el('button','','Edit node'),clear=el('button','','Clear selection');edit.onclick=()=>openNode(n);clear.onclick=()=>{selected=null;$('focus').value='all';rebuild();renderDetails();};buttons.append(edit,clear);root.append(buttons);
    if(n.statement&&n.statement!==n.description)root.append(section(n.kind==='theorem'?'Theorem statement':'Statement / goal',n.statement));if(n.hypotheses)root.append(section('Scope',n.hypotheses));
    for(const [title,edges,isIncoming] of [['Incoming support',incoming.get(n.id),true],['Outgoing connections',outgoing.get(n.id),false]]){const s=section(title);if(!edges.length)s.append(el('p','','No connections recorded.'));for(const e of edges.slice(0,100)){const other=byId.get(isIncoming?e.source:e.target),box=el('div','connection');box.style.borderColor=COLORS[e.type];const b=el('button','',(isIncoming?'← ':'→ ')+other.title);b.onclick=()=>select(other.id,true);box.append(b,el('small','',TYPES[e.type]),el('p','',e.reason));if(e.evidence)box.append(el('p','','Evidence: '+e.evidence));const editEdge=el('button','quiet','Edit connection');editEdge.style.marginTop='6px';editEdge.onclick=()=>openEdge(e);box.append(editEdge);s.append(box);}if(edges.length>100)s.append(el('p','',edges.length+' total connections. Focus the map or export for the full list.'));root.append(s);}
    const source=section('Sources and verification',n.source||'No source recorded.');if(n.evidence)source.append(el('p','','Evidence: '+n.evidence));else source.append(el('p','','No completed proof or formal verification is recorded for this node.'));for(const ref of n.references||[]){const a=el('a','reference-link',ref.title+' ↗');a.href=ref.url;a.target='_blank';a.rel='noopener noreferrer';source.append(a);}root.append(source);
  }
  function field(name,label,value='',type='text',options=null){const box=el('div');const l=el('label','',label);l.htmlFor='field-'+name;let input;if(options){input=el('select');for(const [v,t] of options){const o=el('option','',t);o.value=v;input.append(o);}}else input=el(type==='textarea'?'textarea':'input');input.id='field-'+name;input.name=name;if(input.tagName==='INPUT')input.type=type;input.value=value;box.append(l,input);return box;}
  function beginEditor(title,mode,id){editorMode=mode;editorId=id;$('editorTitle').textContent=title;$('editorFields').replaceChildren();$('editorError').textContent='';}
  function openNode(n=null){beginEditor(n?'Edit node':'Add a node','node',n?.id);const f=$('editorFields');f.append(field('title','Title',n?.title||''),field('id','Stable ID',n?.id||base.subject.prefix+':node-'+Date.now().toString(36)));$('field-id').readOnly=!!n;const row=el('div','field-pair');row.append(field('kind','Node kind',n?.kind||'theorem','text',Object.entries(KIND)),field('status','Evidence status',n?.status||'draft','text',Object.entries(STATUS)));f.append(row,field('layer','Map',n?.layer||'global','text',[['global','Global mathematical atlas'],['overview','Legacy overview'],['book','Book structure']]),field('description','Role in the subject',n?.description||'','textarea'),field('statement','Exact statement / goal',n?.statement||'','textarea'),field('hypotheses','Hypotheses and scope',n?.hypotheses||'','textarea'),field('source','Source and location',n?.source||'','textarea'),field('evidence','Proof / verification evidence',n?.evidence||'','textarea'));f.append(field('group','Subject region',n?.group||'','text',[['','Ungrouped'],...(data.groups||[]).map(g=>[g.id,g.title])]),el('p','alert-note','Record the precise statement, hypotheses and sources. Browser edits are saved locally; export a file to retain your work.'));$('editor').showModal();}
  function openEdge(e=null){beginEditor(e?'Edit connection':'Add a connection','edge',e?.id);const opts=data.nodes.map(n=>[n.id,n.title+' · '+n.id]);const f=$('editorFields');f.append(field('source','From: supporting node',e?.source||selected||data.nodes[0]?.id,'text',opts),field('target','To: receiving node',e?.target||data.nodes.find(n=>n.id!==selected)?.id,'text',opts),field('type','Connection type',e?.type||'ingredient','text',Object.entries(TYPES)),field('reason','Why does this connection hold?',e?.reason||'','textarea'),field('evidence','Source / proof-step reference',e?.evidence||'','textarea'),el('p','alert-note','A proof dependency must name the supporting result and cite the proof step or source. Workflow feedback can form loops; a circular theorem dependency does not establish a proof.'));$('editor').showModal();}
  $('editForm').onsubmit=event=>{event.preventDefault();const values=Object.fromEntries(new FormData(event.target));try {const copy=clone(data);if(editorMode==='node'){const existing=copy.nodes.find(n=>n.id===editorId);const n={...(existing||{}),id:values.id.trim(),subjectId:base.subject.id,title:values.title.trim(),kind:values.kind,status:values.status,layer:values.layer,depth:existing?.depth??0,description:values.description,statement:values.statement,hypotheses:values.hypotheses,source:values.source,evidence:values.evidence,group:values.group};if(!existing&&copy.nodes.some(x=>x.id===n.id))throw Error('That node ID is already in use.');if(existing)copy.nodes[copy.nodes.indexOf(existing)]=n;else copy.nodes.push(n);validate(copy);data=copy;selected=n.id;$('layer').value=n.layer;$('focus').value='all';}else{const e={id:editorId||base.subject.prefix+':edge-'+Date.now().toString(36),subjectId:base.subject.id,source:values.source,target:values.target,type:values.type,reason:values.reason.trim(),evidence:values.evidence.trim()};if(!e.reason)throw Error('Explain the connection before saving it.');if(e.source===e.target&&e.type!=='feedback')throw Error('Self-connections are only supported as workflow feedback.');if(copy.edges.some(x=>x.id!==e.id&&x.source===e.source&&x.target===e.target&&x.type===e.type))throw Error('That connection already exists. Edit its explanation instead.');if(editorId)copy.edges[copy.edges.findIndex(x=>x.id===editorId)]=e;else copy.edges.push(e);validate(copy);data=copy;}persist();setup();$('editor').close();toast('Saved in this browser. Export to keep a portable copy.');}catch(error){$('editorError').textContent=error.message;}};
  $('addNode').onclick=()=>openNode();$('addEdge').onclick=()=>openEdge();$('closeEditor').onclick=$('cancelEditor').onclick=()=>$('editor').close();
  $('exportButton').onclick=()=>{const blob=new Blob([JSON.stringify({...data,exportedAt:new Date().toISOString()},null,2)+'\n'],{type:'application/json'}),url=URL.createObjectURL(blob),a=el('a');a.href=url;a.download=data.subject.id.replace(/[^a-z0-9_-]/gi,'-')+'-meta-graph.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Graph exported, including statements, typed dependencies, references and node positions.');};
  $('importButton').onclick=()=>$('importFile').click();$('importFile').onchange=async()=>{const file=$('importFile').files[0];if(!file)return;try{if(file.size>40*1024*1024)throw Error('Please use a graph file smaller than 40 MB.');const imported=validate(JSON.parse(await file.text()));if(dirty&&!window.confirm('Replace this browser draft with the imported graph? Export first if you need to keep your current changes.'))return;data=imported;resetView();lineCache.clear();persist();setup();toast('Imported '+data.nodes.length.toLocaleString()+' nodes and '+data.edges.length.toLocaleString()+' connections.');}catch(error){toast('Import rejected: '+error.message);}$('importFile').value='';};
  $('resetButton').onclick=()=>{if(!window.confirm('Restore the original subject graph and remove changes saved in this browser? Export first to keep your draft.'))return;data=clone(base);dirty=false;selected=null;try{localStorage.removeItem(storageKey);}catch{}$('saveStatus').textContent='Original subject data';resetView();setup();toast('Restored the original subject graph.');};
  $('search').oninput=renderSearch;$('layer').onchange=()=>{$('depthField').hidden=$('layer').value!=='book';$('direction').value=$('layer').value==='global'?'atlas':'horizontal';$('region').value='all';$('kindFilter').value='all';$('focus').value='all';selected=null;rebuild();renderDetails();};$('direction').onchange=()=>rebuild();for(const id of ['region','kindFilter','edgeMode'])$(id).onchange=()=>{selected=null;$('focus').value='all';rebuild();renderDetails();};$('depth').onchange=()=>{if(selected&&byId.get(selected)?.depth>+$('depth').value)selected=null;rebuild();renderDetails();};$('focus').onchange=()=>{rebuild();renderDetails();};$('pathTarget').onchange=()=>rebuild();$('edgeLabels').onchange=draw;$('fitButton').onclick=fit;$('zoomIn').onclick=()=>zoom(1.3);$('zoomOut').onclick=()=>zoom(1/1.3);
  $('arrangeButton').onclick=()=>{let changed=false;for(const n of visibleNodes)if(n.position){delete n.position;changed=true;}if(changed)persist();rebuild();};
  $('expandButton').onclick=()=>{document.body.classList.toggle('map-expanded');$('expandButton').textContent=document.body.classList.contains('map-expanded')?'Show panels':'Expand map';requestAnimationFrame(()=>fit());};
  $('globalButton').onclick=()=>{resetView();setup();};
  let pointer=null;
  canvas.addEventListener('pointerdown',event=>{if(event.button!==0)return;const r=canvas.getBoundingClientRect(),x=event.clientX-r.left,y=event.clientY-r.top;pointer={startX:x,startY:y,x,y,id:hit(x,y),moved:false};canvas.setPointerCapture(event.pointerId);});
  canvas.addEventListener('pointermove',event=>{if(!pointer){const r=canvas.getBoundingClientRect(),id=hit(event.clientX-r.left,event.clientY-r.top);canvas.title=id?KIND[byId.get(id).kind]+': '+byId.get(id).title:'';return;}const r=canvas.getBoundingClientRect(),x=event.clientX-r.left,y=event.clientY-r.top,dx=x-pointer.x,dy=y-pointer.y;if(Math.hypot(x-pointer.startX,y-pointer.startY)>4)pointer.moved=true;if(pointer.moved){if(pointer.id){const p=positions.get(pointer.id);p.x+=dx/camera.k;p.y+=dy/camera.k;}else{camera.x+=dx;camera.y+=dy;}draw();}pointer.x=x;pointer.y=y;});
  const release=()=>{if(!pointer)return;if(pointer.moved&&pointer.id){byId.get(pointer.id).position={...positions.get(pointer.id)};persist();}else if(!pointer.moved&&pointer.id)select(pointer.id);pointer=null;};canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);
  canvas.addEventListener('dblclick',event=>{const r=canvas.getBoundingClientRect(),id=hit(event.clientX-r.left,event.clientY-r.top);if(id){selected=id;$('focus').value='neighbors';rebuild();renderDetails();}});
  canvas.addEventListener('wheel',event=>{event.preventDefault();const r=canvas.getBoundingClientRect();zoom(Math.exp(-event.deltaY*.0015),event.clientX-r.left,event.clientY-r.top);},{passive:false});
  document.addEventListener('keydown',event=>{if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||$('editor').open)return;if(event.key.toLowerCase()==='f')fit();else if(event.key==='+')zoom(1.3);else if(event.key==='-')zoom(1/1.3);else if(event.key==='Escape'){selected=null;$('focus').value='all';rebuild();renderDetails();}else if(event.key==='/'){event.preventDefault();$('search').focus();}});
  new ResizeObserver(entries=>{const oldWidth=width,oldHeight=height,rect=entries[0].contentRect;width=rect.width;height=rect.height;const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);if(!resizeInitialized||(!selected&&$('focus').value==='all')){resizeInitialized=true;fit();}else{camera.x+=(width-oldWidth)/2;camera.y+=(height-oldHeight)/2;draw();}}).observe(canvas);
  setup();
})();
