#!/usr/bin/env python3
"""Verify this website's routes, local dependencies and isolated graph packages."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote,urlsplit
import argparse,json,hashlib,datetime,graphlib
ROOT=Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--source-root',type=Path);args=p.parse_args()
subjects=json.loads((ROOT/'subjects.json').read_text());provenance=json.loads((ROOT/'source-manifest.json').read_text());errors=[];checked=0
assert len(subjects)==17 and len({s['subjectId'] for s in subjects})==17
assert (ROOT/'.nojekyll').is_file()
class Links(HTMLParser):
 def handle_starttag(self,tag,attrs):
  global checked
  for k,v in attrs:
   if k not in ('href','src') or not v:continue
   u=urlsplit(v)
   if u.scheme in ('http','https','data','mailto'):continue
   assert not u.scheme and not v.startswith('/'), 'Nonportable link: '+v
   if not u.path:continue
   target=(self.file.parent/unquote(u.path)).resolve();checked+=1
   assert target.is_relative_to(ROOT) and target.is_file(),f'Broken or escaping link in {self.file.relative_to(ROOT)}: {v}'
for file in ROOT.rglob('*.html'):
 parser=Links();parser.file=file;parser.feed(file.read_text())
counts={'subjects':17,'mathematicalObjects':0,'mathematicalConnections':0,'bookEntries':0}
for s in subjects:
 app=ROOT/'subjects'/s['slug'];g=json.loads((app/'graph.json').read_text());assert g['subject']['id']==s['subjectId']
 assert (app/g['libraryUrl']).resolve()==ROOT/'index.html'
 assert (ROOT/s['path']).is_file() and (ROOT/s['preview']).is_file()
 ids={n['id'] for n in g['nodes']};assert len(ids)==len(g['nodes']);byid={n['id']:n for n in g['nodes']}
 for e in g['edges']:
  assert e['source'] in ids and e['target'] in ids
  assert byid[e['source']]['layer']==byid[e['target']]['layer']
  assert e.get('subjectId',s['subjectId'])==s['subjectId']
 assert all(n.get('subjectId',s['subjectId'])==s['subjectId'] for n in g['nodes'])
 assert not any('faculties' in n for n in g['nodes'])
 bootstrap=(app/'graph-data.js').read_text().split('window.META_GRAPH = ',1)[1].strip().removesuffix(';');assert json.loads(bootstrap)==g
 assert s['nodes']==sum(n['layer']=='global' for n in g['nodes']);assert s['edges']==sum(e['type']!='contains' for e in g['edges'])
 js=(app/'assets/explorer.js').read_text();assert "'meta-math.website.graph.v1.'" in js and 'another subject' in js
 if args.source_root:
  raw=(args.source_root/provenance[s['slug']]['sourceSubject']/'meta-graph/graph.json').read_bytes();source=json.loads(raw)
  assert hashlib.sha256(raw).hexdigest()==provenance[s['slug']]['sourceGraphSha256']
  for field in ('nodes','edges','groups','subject'):assert source[field]==g[field],'Mathematical content changed during collection'
 counts['mathematicalObjects']+=s['nodes'];counts['mathematicalConnections']+=s['edges'];counts['bookEntries']+=s['bookNodes']
projects=json.loads((ROOT/'project-manifest.json').read_text());counts.update(projects=0,localAgents=0,projectDownloads=0)
for s in subjects:
 folder=ROOT/'subjects'/s['slug']/'projects';d=json.loads((folder/'data.json').read_text())
 assert d['subject']==s['title'] and len(d['projects'])==s['projectCount']==5
 assert json.loads((folder/'data.js').read_text().split('window.META_MATH = ',1)[1].strip().removesuffix(';'))==d
 assert (ROOT/s['projectPath']).resolve()==folder/'index.html'
 assert (folder.parent/'index.html').read_text().count('class="project-bridge"')==1
 ids={p['id'] for p in d['projects']};assert len(ids)==5
 assert all(e['source'] in ids and e['target'] in ids for e in d['links'])
 graphlib.TopologicalSorter({i:{e['source'] for e in d['links'] if e['target']==i} for i in ids}).prepare()
 for p in d['projects']:
  nodes={n['id'] for n in p['nodes']};assert len(nodes)==len(p['nodes'])
  assert all(e['source'] in nodes and e['target'] in nodes for e in p['edges'])
  graphlib.TopologicalSorter({i:{e['source'] for e in p['edges'] if e['target']==i} for i in nodes}).prepare()
  for n in p['nodes']:assert set(n['faculties'])=={'Ego','Memory','Intellect','Sense','Action'}
  for key in ['pdf','tex','markdown']:
   f=(folder/p[key]).resolve();assert f.is_relative_to(folder) and f.is_file()
   if key=='pdf':assert f.read_bytes().startswith(b'%PDF-')
   counts['projectDownloads']+=1
  # The proof data contain HTML as well as plain metadata; check embedded links too.
  def embedded(value):
   if isinstance(value,str):
    parser=Links();parser.file=folder/'index.html';parser.feed(value)
   elif isinstance(value,list):
    for v in value:embedded(v)
   elif isinstance(value,dict):
    for v in value.values():embedded(v)
  embedded(p)
  counts['projects']+=1;counts['localAgents']+=len(nodes)
 for f in projects[s['slug']]['files']:
  assert hashlib.sha256((folder/f['path']).read_bytes()).hexdigest()==f['sha256']
  if args.source_root:assert hashlib.sha256((args.source_root/f['source']).read_bytes()).hexdigest()==f['sha256']
 assert s['projectAgents']==sum(len(p['nodes']) for p in d['projects'])
report=dict(passed=True,date=datetime.datetime.now(datetime.timezone.utc).isoformat(),counts=counts,internalLinksAndAssetsChecked=checked,sourceFidelityChecked=bool(args.source_root),checks=['All 17 independent subject packages present','All internal HTML links and assets stay inside META-GRAPH','All global and local graph endpoints belong to their own subject or project','No book/global dependency mixing','Graph JSON and offline bootstraps agree','Subject identities and website draft keys are independent','All dashboard counts match graph data','Five faculties appear only inside local project agents','All 85 project DAGs and theorem-import maps are acyclic','All 255 project downloads match their source checksums','Relative dashboard return links and GitHub Pages marker present'])
(ROOT/'reports').mkdir(exist_ok=True);(ROOT/'reports/validation.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
