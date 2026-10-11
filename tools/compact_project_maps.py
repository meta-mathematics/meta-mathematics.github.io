"""Apply the shared compact theorem overview to packaged project dashboards."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def compact_project_maps():
    for page_path in (ROOT / 'subjects').glob('*/projects/index.html'):
        script_path = page_path.parent / 'assets/studio.js'
        script = script_path.read_text()
        updated, count = re.subn(
            r"function overview\(\)\{.*?(?= \$\('#imports'\))",
            'function overview(){\n window.renderTheoremOverview(DATA);\n',
            script, count=1, flags=re.S)
        if count != 1:
            raise ValueError('Unrecognized theorem overview: ' + str(script_path))
        if updated != script:
            script_path.write_text(updated)
        page = page_path.read_text()
        shared = '<script defer src="../../../assets/theorem-overview.js"></script>'
        marker = '<script defer src="assets/studio.js"></script>'
        if marker not in page:
            raise ValueError('Missing project viewer script: ' + str(page_path))
        if shared not in page:
            page_path.write_text(page.replace(marker, shared + marker))


if __name__ == '__main__':
    compact_project_maps()
