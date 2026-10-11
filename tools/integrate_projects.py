#!/usr/bin/env python3
"""Maintain the atlas-to-proof navigation using only packaged website files."""
from pathlib import Path
import html,json,re
from site_credit import apply_credits
from compact_project_maps import compact_project_maps
ROOT=Path(__file__).resolve().parents[1]

def integrate():
    subjects=json.loads((ROOT/'subjects.json').read_text())
    for s in subjects:
        folder=ROOT/'subjects'/s['slug']; data=folder/'projects/data.json'
        if not data.exists():continue
        d=json.loads(data.read_text()); count=len(d['projects'])
        s.update(projectCount=count,projectPath=f"subjects/{s['slug']}/projects/index.html",projectAgents=sum(len(p['nodes']) for p in d['projects']))
        page=(folder/'index.html').read_text()
        page=re.sub(r'\s*<!-- PROJECT BRIDGE START -->.*?<!-- PROJECT BRIDGE END -->','',page,flags=re.S)
        css='<link rel="stylesheet" href="../../assets/integration.css">'
        if css not in page:page=page.replace('</head>',css+'\n</head>')
        page=page.replace('<body>','<body class="subject-atlas">')
        banner=f'''\n<!-- PROJECT BRIDGE START -->
<section class="project-bridge" aria-label="Explore selected theorem proofs">
  <div><span class="bridge-eyebrow">FROM THE SUBJECT MAP TO THE PROOF</span><h2>Explore five selected theorems</h2><p>Follow each proof through its local agents, five faculties, and mathematical activities.</p></div>
  <a class="project-bridge-link" href="projects/index.html">Open project dashboard <span aria-hidden="true">→</span><small>{count} complete walkthroughs · PDF reports</small></a>
</section>
<!-- PROJECT BRIDGE END -->'''
        page=page.replace('</header>','</header>'+banner,1)
        (folder/'index.html').write_text(page)
    (ROOT/'subjects.json').write_text(json.dumps(subjects,ensure_ascii=False,indent=2)+'\n')
    apply_credits()
    compact_project_maps()

if __name__=='__main__':integrate()
