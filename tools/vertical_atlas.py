"""Render a subject's vertical landing page using its own packaged assets and data."""
from pathlib import Path
import html
import json
import shutil


def apply_vertical(app, *, library_url=None, projects_url=None, book_url=None):
    app = Path(app)
    config_path = app / 'assets/vertical-links.json'
    config = json.loads(config_path.read_text()) if config_path.exists() else {}
    for key, value in [('library', library_url), ('projects', projects_url), ('book', book_url)]:
        if value is not None:
            config[key] = value
    if set(config) != {'library', 'projects', 'book'}:
        raise ValueError('Missing vertical atlas navigation: ' + str(app))
    graph = json.loads((app / 'graph.json').read_text())
    template = (app / 'assets/vertical.template').read_text()
    tokens = {'__SUBJECT__': graph['subject']['title'], '__LIBRARY_URL__': config['library'],
              '__PROJECTS_URL__': config['projects'], '__BOOK_URL__': config['book']}
    for token, value in tokens.items():
        template = template.replace(token, html.escape(value, quote=True))
    index, classic = app / 'index.html', app / 'classic.html'
    if not classic.exists() and index.exists():
        if 'class="vertical-atlas"' in index.read_text():
            raise ValueError('Missing retained canvas page: ' + str(app))
        shutil.copyfile(index, classic)
    index.write_text(template)
    config_path.write_text(json.dumps(config, indent=2) + '\n')
