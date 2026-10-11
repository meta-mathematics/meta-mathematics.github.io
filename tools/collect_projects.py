#!/usr/bin/env python3
"""Package all subject proof studios and downloads; retain workspace originals."""
from pathlib import Path
import argparse,copy,hashlib,html,json,re,shutil,os
from integrate_projects import integrate
ROOT=Path(__file__).resolve().parents[1]

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-root',type=Path,default=ROOT.parent)
    args=parser.parse_args(); source=args.source_root.resolve()
    origins=json.loads((ROOT/'source-manifest.json').read_text())
    subjects=json.loads((ROOT/'subjects.json').read_text()); prepared=[]; routes={}
    # Retire only the unmodified backend-source copies recorded by the old collector.
    obsolete=[]
    old_manifest=ROOT/'project-manifest.json'
    if old_manifest.exists():
        for slug,record in json.loads(old_manifest.read_text()).items():
            folder=ROOT/'subjects'/slug/'projects'
            for f in record['files']:
                if f['kind'] not in ('tex','markdown'):continue
                target=(folder/f['path']).resolve()
                assert target.is_relative_to(folder.resolve()),target
                if target.exists():
                    assert hashlib.sha256(target.read_bytes()).hexdigest()==f['sha256'],'Modified website source: '+str(target)
                    obsolete.append(target)
    # Resolve and check all resources before writing the website copies.
    for s in subjects:
        src=source/origins[s['slug']]['sourceSubject']/'projects/meta-graph'
        raw=(src/'data.js').read_text().split('window.META_MATH = ',1)[1].strip().removesuffix(';')
        data=json.loads(raw); assert len(data['projects'])==5
        assert data.get('subject',s['title'])==s['title']
        files=[]
        for p in data['projects']:
            # Read source identity only to translate existing cross-project references.
            markdown=(src/p['markdown']).resolve()
            assert markdown.is_relative_to(source) and markdown.is_file()
            routes[str(markdown.relative_to(source))]=(ROOT/'subjects'/s['slug']/'projects/index.html',p['id'])
            for key,sub in [('pdf','reports/pdf')]:
                f=(src/p[key]).resolve(); assert f.is_relative_to(source) and f.is_file(),f
                dest=sub+'/'+f.name; files.append((p['id'],key,f,dest))
        prepared.append((s,src,data,files))
    def rewrite_links(value,dst):
        if isinstance(value,str):
            def link(match):
                url=match.group(1)
                if not url.startswith('../'):return match.group(0)
                clean=url
                while clean.startswith('../'):clean=clean[3:]
                if clean in routes:
                    page,pid=routes[clean]
                    return 'href="'+os.path.relpath(page,dst)+'#'+pid+'"'
                raise ValueError('Unmapped internal proof reference: '+url)
            return re.sub(r'href="([^"]+)"',link,value)
        if isinstance(value,list):return [rewrite_links(v,dst) for v in value]
        if isinstance(value,dict):return {k:rewrite_links(v,dst) for k,v in value.items()}
        return value
    manifest={}
    for s,src,data,files in prepared:
        dst=ROOT/'subjects'/s['slug']/'projects';(dst/'assets').mkdir(parents=True,exist_ok=True)
        checks=[]
        for pid,key,f,relative in files:
            target=dst/relative;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(f,target)
            next(p for p in data['projects'] if p['id']==pid)[key]=relative
            checks.append(dict(project=pid,kind=key,path=relative,source=str(f.relative_to(source)),sha256=hashlib.sha256(f.read_bytes()).hexdigest()))
        for p in data['projects']:
            for key in ['source','tex','markdown']:p.pop(key,None)
        data=rewrite_links(data,dst)
        data['subject']=s['title']
        (dst/'data.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
        (dst/'data.js').write_text('window.META_MATH = '+json.dumps(data,ensure_ascii=False)+';\n')
        for asset in ['studio.css','studio.js']:
            content=(src/'assets'/asset).read_text()
            if asset=='studio.js':
                content=re.sub(r"\$\('#(?:tex|md)-link'\)\.href=p\.(?:tex|markdown);",'',content)
                assert 'tex-link' not in content and 'md-link' not in content
            (dst/'assets'/asset).write_text(content)
        page=(src/'index.html').read_text()
        page=re.sub(r'<a\b[^>]*\bid="(?:tex|md)-link"[^>]*>.*?</a>','',page,flags=re.S)
        page=page.replace('<body>','<body class="proof-studio">')
        page=page.replace('</head>','<link rel="icon" href="../../../assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="../../../assets/integration.css"></head>')
        page=page.replace('href="../../meta-graph/index.html"','href="../index.html"')
        page=re.sub(r'<footer>.*?</footer>',f'<footer><a href="../../../index.html">All subjects ↗</a><a href="../index.html">{html.escape(s["title"])} global graph ↗</a><span>Dibakar Sigdel · Mindverse Computing LLC</span></footer>',page,flags=re.S)
        trail=f'<nav class="proof-breadcrumb" aria-label="Breadcrumb"><a href="../../../index.html">All subjects</a><span aria-hidden="true">/</span><a href="../index.html">{html.escape(s["title"])}</a><span aria-hidden="true">/</span><a href="#overview" aria-label="Return to the five selected theorems">Selected theorems</a></nav>'
        page=page.replace('</header>','</header>'+trail,1)
        (dst/'index.html').write_text(page)
        manifest[s['slug']]=dict(subject=s['title'],projects=len(data['projects']),agents=sum(len(p['nodes']) for p in data['projects']),files=checks)
    for target in obsolete:target.unlink()
    for s in subjects:
        folder=ROOT/'subjects'/s['slug']/'projects'
        for sub in ['markdown','reports/latex']:
            directory=folder/sub
            if directory.is_dir() and not any(directory.iterdir()):directory.rmdir()
    (ROOT/'project-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
    integrate()
    print(f'Packaged {len(prepared)} subject studios and {sum(len(d[2]["projects"]) for d in prepared)} projects.')

if __name__=='__main__':main()
