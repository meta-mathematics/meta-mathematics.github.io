#!/usr/bin/env python3
"""Rebuild the static website using only its own graph.json files."""
from pathlib import Path
import json,subprocess,sys
from collect_subjects import preview,book_page
ROOT=Path(__file__).resolve().parents[1]
subjects=json.loads((ROOT/'subjects.json').read_text())
# Check the complete inventory before changing any generated files.
loaded=[]
for s in subjects:
 folder=ROOT/'subjects'/s['slug'];g=json.loads((folder/'graph.json').read_text())
 assert g['schemaVersion']==1 and g['subject']['id']==s['subjectId'],'Wrong subject graph: '+s['slug']
 ids={n['id'] for n in g['nodes']};assert len(ids)==len(g['nodes'])
 assert all(e['source'] in ids and e['target'] in ids for e in g['edges'])
 assert all(n.get('subjectId',s['subjectId'])==s['subjectId'] for n in g['nodes'])
 loaded.append((s,folder,g))
for s,folder,g in loaded:
 g['libraryUrl']='../../index.html'
 (folder/'graph.json').write_text(json.dumps(g,ensure_ascii=False,indent=2)+'\n')
 (folder/'graph-data.js').write_text('/* Subject-local offline graph bootstrap. */\nwindow.META_GRAPH = '+json.dumps(g,ensure_ascii=False)+';\n')
 (folder/'preview.svg').write_text(preview(g))
 (folder/'resources/book.html').write_text(book_page(g))
 s['title']=g['subject']['title'];s['nodes']=sum(n['layer']=='global' for n in g['nodes']);s['edges']=sum(e['type']!='contains' for e in g['edges']);s['bookNodes']=len(g['nodes'])-s['nodes'];s['regions']=[x['title'] for x in g['groups']]
(ROOT/'subjects.json').write_text(json.dumps(subjects,ensure_ascii=False,indent=2)+'\n')
subprocess.run([sys.executable,str(ROOT/'tools/build_dashboard.py')],check=True)
print('Rebuilt',len(subjects),'subject copies from local website data')
