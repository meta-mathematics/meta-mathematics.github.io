# Meta-Math · Mathematics Atlas

A standalone website for exploring **17 independent mathematical subjects** across six branches. Open **[index.html](index.html)** to choose a subject and enter its dependency graph.

The collection contains 968 local mathematical objects, 1,190 selected relationships, and 1,594 book-outline entries. Shared ideas are counted separately when they appear in more than one subject. Each subject retains its own graph, references, local browser draft, and export. The website does not merge the subjects into one graph.

## Website contents

- Searchable landing page with branch filters and subject previews generated from the actual graphs.
- All 17 subject explorers, including the Number Theory gold standard.
- Definitions, theorems, lemmas, corollaries, methods, examples and selected dependencies.
- Region and object filters, directed paths, incoming/outgoing exploration, zoom, pan and minimap.
- Statements, scope notes, reading references and explanations of typed connections.
- Separate, browsable graduate book outlines and original Markdown resources.
- Local editing and JSON import/export. Imports from another subject are rejected.
- Global subject maps only; local five-faculty agent workflows remain separate future projects.

The maps are curated and expandable. Their arrows describe selected mathematical relationships, not complete or formally verified proof certificates.

## Publish on GitHub Pages

1. Create a GitHub repository for this website.
2. Upload the **contents of this `META-GRAPH` folder** to the repository root. `index.html`, `assets/`, `subjects/` and `.nojekyll` should be at that root. Keep the complete folder structure and the `.nojekyll` file.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose your branch (typically `main`), and choose **`/(root)`**. Save.
5. Wait for GitHub Pages to report the published address. A project website normally appears at `https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/`.

All internal website links are relative, so the site supports a repository subpath and a custom-domain root without editing URLs. No build command, API key, backend, Node installation, CDN, or external font is required to serve it. Reading-reference links lead to their external sources when clicked.

This directory has been prepared locally; it has not been pushed to a GitHub repository or published. If you choose to host the entire mathematics workspace instead, publish this folder as the site artifact using your own Pages workflow, rather than uploading all workspace materials.

Official instructions: [GitHub Pages publishing-source configuration](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). The `.nojekyll` file selects static serving without Jekyll processing when publishing from a branch.

## Open locally

Double-click `index.html` or open it in a modern browser. The graph data are bundled in JavaScript, so viewing does not require local network requests. If you prefer HTTP preview, run this command from the website folder and open the printed address:

```sh
python3 -m http.server 8000
```

Browser draft storage on `file:` pages varies by browser. Export your graph to keep a durable copy. The website uses subject-specific keys beginning with `meta-math.website.graph.v1.` so it does not overwrite the original workspace explorers’ browser drafts. Exporting a graph downloads JSON; it does not publish or modify repository files.

## Folder structure

```text
META-GRAPH/
├── index.html                 Master subject dashboard
├── .nojekyll                  Static GitHub Pages serving
├── assets/                    Dashboard styles, behavior, document styles, icon
├── subjects.json              Navigation manifest and subject counts
├── source-manifest.json       Collection provenance and source checksums
├── subjects/
│   └── subject-name/
│       ├── index.html         Independent subject explorer
│       ├── graph.json         Editable portable mathematical graph
│       ├── graph-data.js      Offline browser bootstrap
│       ├── preview.svg        Preview derived from that graph
│       ├── assets/            Subject-local explorer code and styles
│       └── resources/         Book outline page and original Markdown resources
├── tools/                     Collection, rebuild and validation helpers
└── reports/                   Local verification reports and review screenshots
```

`reports/` is optional for hosting and is ignored by the supplied `.gitignore`. The serving files contain no links back to the original workspace directories. Original workspace subjects, books and the earlier library are retained unchanged.

## Update a subject

To publish an edited browser graph, export it and replace only the matching subject’s `graph.json`. Keep its subject identity and node namespaces. Then run:

```sh
python3 tools/build_site.py
python3 tools/validate.py
```

This rebuild uses only files already inside this website. It regenerates graph bootstraps, previews, book-outline pages, navigation counts and the landing page. It does not read or write a browser draft.

To refresh the website copies from the mathematics workspace instead, run:

```sh
python3 tools/collect_subjects.py --source-root /path/to/W-Workspace
python3 tools/build_dashboard.py
python3 tools/validate.py
```

Collection replaces the managed website copies with the workspace versions. Preserve exported website edits before refreshing. The source manifest records the origin and checksum of each collected graph. Collection is an authoring convenience, not a hosting dependency.

## Verification

`tools/validate.py` checks every internal HTML link and asset, packaged paths, graph/bootstrap agreement, subject identities, endpoint closure, counts and the subject index. `tools/verify.cjs` runs browser checks using isolated fixtures at both a domain root and a repository subpath, including dashboard filters, all 17 subject routes, return navigation, local book pages and cross-subject import rejection. These optional development checks require Playwright and a local Chrome installation; visitors need neither.

No manuscript, unrelated project files, preprint PDFs, user browser data, or runtime dependencies are bundled. The graph references retain their existing external reading links. No new license is assigned to third-party reference works; those works are linked, not copied into the website.
