"""Refresh global-atlas presentation from backend subjects, preserving all graph/project data."""
from pathlib import Path
import argparse
import json
import shutil
from vertical_atlas import apply_vertical
from integrate_projects import integrate

SITE = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-root', type=Path, default=SITE.parent)
    root = parser.parse_args().source_root.resolve()
    origins = json.loads((SITE / 'source-manifest.json').read_text())
    subjects = json.loads((SITE / 'subjects.json').read_text())
    prepared = []
    for subject in subjects:
        src = root / origins[subject['slug']]['sourceSubject'] / 'meta-graph'
        dst = SITE / 'subjects' / subject['slug']
        source_graph = json.loads((src / 'graph.json').read_text())
        website_graph = json.loads((dst / 'graph.json').read_text())
        assert source_graph['subject']['id'] == website_graph['subject']['id'] == subject['subjectId']
        for name in ['vertical.template', 'vertical.css', 'vertical.js']:
            assert (src / 'assets' / name).is_file()
        prepared.append((src, dst))
    for src, dst in prepared:
        for name in ['vertical.template', 'vertical.css', 'vertical.js']:
            shutil.copyfile(src / 'assets' / name, dst / 'assets' / name)
        apply_vertical(dst, library_url='../../index.html', projects_url='projects/index.html',
                       book_url='resources/book.html')
    integrate()
    print('Updated', len(prepared), 'website global atlases; graph data and local project pages preserved.')


if __name__ == '__main__':
    main()
