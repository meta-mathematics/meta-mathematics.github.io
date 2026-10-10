#!/usr/bin/env python3
"""Copy the seventeen subject atlases into this standalone website.
Run with --source-root PATH to the mathematics workspace. Existing workspace
sources are never changed. Website copies are refreshed; export browser drafts
before replacing them. Dashboard design assets are maintained separately.
"""
import argparse,copy,hashlib,html,json,re
from pathlib import Path
SITE=Path(__file__).resolve().parents[1]
CATEGORIES=[('1-Number-Theory','number-theory','Number Theory'),('2-Analysis','analysis','Analysis'),('3-Algebra','algebra','Algebra'),('4-Geometry-and-Topology','geometry-topology','Geometry & Topology'),('5-Applied-Mathematics','applied-mathematics','Applied Mathematics'),('6-Logic-and-Foundations','logic-foundations','Logic & Foundations')]
E=html.escape

def preview(graph):
    nodes=[n for n in graph['nodes'] if n['layer']=='global'];groups=copy.deepcopy(graph.get('groups',[]));known={g['id'] for g in groups}
    if any(n.get('group') not in known for n in nodes): groups.append(dict(id='_unassigned',title='Additional results',color='#72857a',column=0,row=max((g['row'] for g in groups),default=-1)+1))
    ids={n['id'] for n in nodes}
    cols=max((g['column'] for g in groups),default=0)+1;rows=max((g['row'] for g in groups),default=0)+1;cw=640/cols;ch=190/rows;pos={};colors={g['id']:g['color'] for g in groups};body=[]
    for g in groups:
        x=30+g['column']*cw;y=15+g['row']*ch;members=[n for n in nodes if n.get('group')==g['id'] or (g['id']=='_unassigned' and n.get('group') not in known)]
        body.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{cw-12:.1f}" height="{ch-12:.1f}" rx="5" fill="{g["color"]}0d" stroke="{g["color"]}55"/>')
        for i,n in enumerate(members):
            px=x+12+(i%3)*(cw-40)/3;py=y+12+(i//3)*(ch-35)/max(1,(len(members)+2)//3)
            pos[n['id']]=(px,py)
    for e in graph['edges']:
        if e['source'] not in ids or e['target'] not in ids:continue
        a,b=pos[e['source']],pos[e['target']]
        body.append(f'<path d="M{a[0]+6:.1f} {a[1]+3:.1f} Q{a[0]+6:.1f} {b[1]+3:.1f} {b[0]+6:.1f} {b[1]+3:.1f}" fill="none" stroke="#507f78" stroke-opacity=".19" stroke-width=".65"/>')
    for n in nodes:
        x,y=pos[n['id']];body.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{min(26,(cw-50)/3):.1f}" height="6" rx="1.4" fill="{colors.get(n.get("group"),"#72857a")}" fill-opacity=".78"/>')
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220"><title>'+E(graph['subject']['title'])+' dependency-map preview</title>'+''.join(body)+'</svg>'

def book_page(graph):
    book=[n for n in graph['nodes'] if n['layer']=='book'];byid={n['id']:n for n in book};children={n['id']:[] for n in book};targets=set()
    for e in graph['edges']:
        if e['type']=='contains':children[e['source']].append(e['target']);targets.add(e['target'])
    def render(n):
        num=(n.get('number','')+' · ') if n.get('number') else ''
        title=E(num+n['title']);desc=E(n.get('description',''))
        sub=''.join(render(byid[id]) for id in children[n['id']])
        if n['kind'] in ('part','chapter'):return '<details'+(' open' if n['kind']=='part' else '')+'><summary>'+title+'</summary><p>'+desc+'</p>'+sub+'</details>'
        return '<section class="book-'+n['kind']+'"><h'+('3' if n['kind']=='section' else '4')+'>'+title+'</h'+('3' if n['kind']=='section' else '4')+'><p>'+desc+'</p>'+sub+'</section>'
    content=''.join(render(n) for n in book if n['id'] not in targets)
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+E(graph['subject']['title'])+' · Book outline</title><link rel="stylesheet" href="../../../assets/documents.css"></head><body><header><a href="../index.html">← Return to '+E(graph['subject']['title'])+'</a><a href="../../../index.html">All subjects</a></header><main><span class="eyebrow">GRADUATE BOOK STRUCTURE</span><h1>'+E(graph['subject']['title'])+'</h1><p class="intro">The annotated syllabus accompanying this subject’s atlas. Expand a chapter to read its sections and subsections. This hierarchy records book organization.</p><a class="download" href="book-outline.md" download>Download the original outline ↓</a>'+content+'</main></body></html>\n'

def main():
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--source-root',type=Path,default=SITE.parent);args=p.parse_args();root=args.source_root.resolve()
    manifest=json.loads((root/'meta-graph-library/subjects.json').read_text());entries=[dict(path='1-Number-Theory',id='1-number-theory',title='Number Theory',prefix='nt')]+manifest
    audit={};published=[]
    for s in entries:
        src=root/s['path']/'meta-graph';slug='number-theory' if s['prefix']=='nt' else Path(s['path']).name.lower();dst=SITE/'subjects'/slug
        for folder in (dst/'assets',dst/'resources'):folder.mkdir(parents=True,exist_ok=True)
        raw=(src/'graph.json').read_bytes();g=json.loads(raw);original=copy.deepcopy(g)
        g['libraryUrl']='../../index.html'
        g['provenance']=dict(sourceSubject=s['path'],sourceGraphSha256=hashlib.sha256(raw).hexdigest(),graph='graph.json',book='resources/book-outline.md',map='resources/meta-graph.md',scope=original.get('provenance',{}).get('scope','Selected subject-level mathematical relationships.'),originalProvenance=original.get('provenance',{}))
        # Keep graph identity and every mathematical object and edge unchanged.
        (dst/'graph.json').write_text(json.dumps(g,ensure_ascii=False,indent=2)+'\n')
        (dst/'graph-data.js').write_text('/* Subject-local offline graph bootstrap. */\nwindow.META_GRAPH = '+json.dumps(g,ensure_ascii=False)+';\n')
        for name in ('explorer.js','explorer.css'):
            text=(src/'assets'/name).read_text()
            if name=='explorer.js':
                # Website drafts do not overwrite drafts from the workspace explorers.
                text=text.replace("'meta-math.graph.v2.global.'", "'meta-math.website.graph.v1.'")
                if s['prefix']=='nt':
                    text=text.replace("    if(!Array.isArray(input.nodes)","    if(input.subject.id!==base.subject.id) throw Error('This file belongs to another subject. Open that subject’s own explorer.');\n    if(!Array.isArray(input.nodes)")
                text=text.replace("base.libraryUrl||'#'","'../../index.html'")
            else:
                text+='\n.subject-trail{display:flex;align-items:center;gap:9px;font-size:10px}.subject-trail>a{font-weight:650}.subject-trail .eyebrow{font-size:8px}.subject-heading{min-width:0}@media(max-width:860px){.subject-trail .eyebrow{display:inline}.subject-trail{margin-bottom:7px}}\n'
            (dst/'assets'/name).write_text(text)
        page=(src/'index.html').read_text().replace('<title>Meta-Math · Subject explorer</title>','<title>'+E(s['title'])+' · Meta-Math</title>')
        page=page.replace('<span class="eyebrow" id="category"></span>','<div class="subject-trail"><a href="../../index.html">← All subjects</a><span aria-hidden="true">/</span><span class="eyebrow" id="category"></span></div>')
        page=page.replace('href="meta-graph.md"','href="resources/meta-graph.md"').replace('href="../book/outline.md"','href="resources/book.html"')
        page=page.replace('<head>','<head>\n  <meta name="description" content="Explore the '+E(s['title'])+' dependency atlas: mathematical statements, supporting results and consequences.">\n  <link rel="icon" href="../../assets/favicon.svg" type="image/svg+xml">')
        (dst/'index.html').write_text(page)
        originalmap=(src/'meta-graph.md').read_text().replace('../book/outline.md','book-outline.md')
        (dst/'resources/meta-graph.md').write_text(originalmap)
        (dst/'resources/book-outline.md').write_bytes((src.parent/'book/outline.md').read_bytes())
        (dst/'resources/book.html').write_text(book_page(g))
        (dst/'preview.svg').write_text(preview(g))
        cat=next(c for c in CATEGORIES if s['path'].split('/')[0]==c[0]);gn=sum(n['layer']=='global' for n in g['nodes']);ge=sum(e['type']!='contains' for e in g['edges'])
        published.append(dict(slug=slug,title=s['title'],subjectId=s['id'],category=cat[1],categoryTitle=cat[2],path='subjects/'+slug+'/index.html',preview='subjects/'+slug+'/preview.svg',nodes=gn,edges=ge,regions=[x['title'] for x in g['groups']],bookNodes=len(g['nodes'])-gn))
        audit[slug]=dict(sourceSubject=s['path'],sourceGraphSha256=hashlib.sha256(raw).hexdigest(),publishedGraphSha256=hashlib.sha256((dst/'graph.json').read_bytes()).hexdigest(),nodes=len(g['nodes']),edges=len(g['edges']))
        assert original['nodes']==g['nodes'] and original['edges']==g['edges']
    (SITE/'subjects.json').write_text(json.dumps(published,ensure_ascii=False,indent=2)+'\n')
    (SITE/'source-manifest.json').write_text(json.dumps(audit,indent=2)+'\n')
    print('Collected',len(published),'independent subjects;',sum(x['nodes'] for x in published),'mathematical objects;',sum(x['edges'] for x in published),'relationships')
if __name__=='__main__':main()
