"""Keep the institutional credit consistent across generated website pages."""
from pathlib import Path
import os
import re

ROOT = Path(__file__).resolve().parents[1]
CREDIT = 'Meta-Math research, development, and documentation by Super-learning Lab, <a href="https://mindversecomputing.com">Mindverse Computing</a> LLC.'


def credit_page(page, path):
    stylesheet = os.path.relpath(ROOT / 'assets/site-credit.css', path.parent)
    link = f'<link rel="stylesheet" href="{stylesheet}">'
    if link not in page:
        page = page.replace('</head>', link + '\n</head>')
    page = re.sub(r'\s*<p class="research-credit">.*?</p>', '', page, flags=re.S)
    credit = f'<p class="research-credit">{CREDIT}</p>'
    if '</footer>' in page:
        return page.replace('</footer>', credit + '</footer>', 1)
    return page.replace('</body>', '<footer class="research-footer">' + credit + '</footer>\n</body>')


def apply_credits():
    pages = [ROOT / 'index.html'] + sorted((ROOT / 'subjects').rglob('*.html'))
    for path in pages:
        if path.is_file():
            old = path.read_text()
            new = credit_page(old, path)
            if old != new:
                path.write_text(new)


if __name__ == '__main__':
    apply_credits()
