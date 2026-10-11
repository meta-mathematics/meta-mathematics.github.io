# Meta-Math · Mathematics Atlas

A standalone website for exploring **17 independent mathematical subjects** across six branches. Open **[index.html](index.html)** to choose a subject and enter its dependency graph.

## Research and development

Meta-Math research, development, and documentation by Super-learning Lab, [Mindverse Computing](https://mindversecomputing.com) LLC. The Meta-Math framework, interactive atlases, theorem walkthroughs, and accompanying documentation presented on this website form part of the company's research and development work. Mathematical results and external reference works retain their existing scholarly attributions.

All public HTML pages carry a consistent institutional credit in their footer. The shared credit is maintained in `tools/site_credit.py` and styled by `assets/site-credit.css`; the website builders and collectors preserve it automatically.

## License

Copyright 2026 **Mindverse Computing LLC**.

The Meta-Math project in this directory is licensed under the **Apache License, Version 2.0**. See [LICENSE](LICENSE) for the full terms and [NOTICE](NOTICE) for the project attribution. Research and development are conducted by Super-learning Lab, Mindverse Computing LLC.

The copyright claim covers the company's copyrightable contributions, not mathematical facts, principles, or theorems. Third-party materials retain their respective rights and license terms; linked external works are not relicensed. Trademark permissions are governed by Section 6 of the Apache License.

The collection contains 968 local mathematical objects, 1,190 selected relationships, and 1,594 book-outline entries. Shared ideas are counted separately when they appear in more than one subject. Each subject retains its own graph, references, local browser draft, and export. The website does not merge the subjects into one graph.

## Website contents

- Searchable landing page with branch filters and subject previews generated from the actual graphs.
- All 17 subject explorers, including the Number Theory gold standard.
- Definitions, theorems, lemmas, corollaries, methods, examples and selected dependencies.
- Region and object filters, directed paths, incoming/outgoing exploration, zoom, pan and minimap.
- Statements, scope notes, reading references and explanations of typed connections.
- Separate, browsable graduate book outlines and original Markdown resources.
- Local editing and JSON import/export. Imports from another subject are rejected.
- A prominent “Explore five selected theorems” banner in every global atlas.
- All 85 complete theorem projects in 17 subject-specific dashboards, with 257 local agents.
- Five-faculty walkthroughs, complete proofs, worked examples, failure/repair views, and 85 PDF reports.

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
│       ├── resources/         Book outline page and original Markdown resources
│       └── projects/
│           ├── index.html     Five-theorem project dashboard and local proof graphs
│           ├── data.json      Subject-local project data
│           ├── data.js        Offline project bootstrap
│           ├── assets/        Project styles and interaction code
│           └── reports/
│               └── pdf/       Five compiled reports
├── tools/                     Collection, rebuild and validation helpers
└── reports/                   Local verification reports and review screenshots
```

The root `/reports/` directory contains optional QA output and is ignored by the supplied `.gitignore`. Subject `projects/reports/` directories contain the public downloads and must be included when publishing. The serving files contain no links back to the original workspace directories. Original workspace subjects, books and the earlier library are retained unchanged.

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
python3 tools/collect_projects.py --source-root /path/to/W-Workspace
python3 tools/build_dashboard.py
python3 tools/validate.py
```

Collection replaces the managed website copies with the workspace versions. Preserve exported website edits before refreshing. The source manifest records the origin and checksum of each collected graph. Collection is an authoring convenience, not a hosting dependency. The collector reads its subject inventory from this folder's `subjects.json` and source locations from `source-manifest.json`; it does not require the earlier workspace library. Only an explicit refresh needs the original subject authoring folders supplied through `--source-root`.

## Verification

`tools/validate.py` checks every internal HTML link and asset, packaged paths, graph/bootstrap agreement, subject identities, endpoint closure, counts and the subject index. `tools/verify.cjs` runs browser checks using isolated fixtures at both a domain root and a repository subpath, including dashboard filters, all 17 subject routes, return navigation, local book pages and cross-subject import rejection. These optional development checks require Playwright and a local Chrome installation; visitors need neither.

Only the subject atlases and their selected project resources are bundled. The manuscript, source preprints, build logs, workspace tools, and user browser data are excluded. The graph references retain their existing external reading links. No new license is assigned to third-party reference works; those works are linked, not copied into the website.

## Global atlas → selected theorems → local proof

1. Choose a subject on the main website.
2. Its global dependency graph opens as before. Use the green **Explore five selected theorems** banner to open that subject’s project dashboard.
3. Select one of the five theorems to enter its local proof graph. Select an agent to inspect Ego, Memory, Intellect, Sense, Action, mathematical activities, exports and acceptance gates.
4. Switch among the complete proof, worked example and failure/repair views, or read the PDF report.
5. Use **All five theorems**, **Subject atlas**, or the breadcrumb links to return to the project dashboard, global graph or main website.

For example: `subjects/number-theory/index.html` → `subjects/number-theory/projects/index.html` → `subjects/number-theory/projects/index.html#NT-01/N1/agents`. These relative routes work at a domain root, a GitHub repository subpath, and directly from local files. Project agents remain separate from the global mathematical objects. Existing cross-subject reading references open the other subject’s project; they do not merge proof graphs.

`tools/collect_projects.py` refreshes only the packaged project copies from the workspace. It preserves mathematical content and records download checksums in `project-manifest.json`. Workspace originals are retained as the authoring sources. `tools/integrate_projects.py` maintains the banner and navigation counts; both atlas collection and the standalone website rebuild call it, so future updates retain the integration. No workspace folder is needed to serve the website.

`tools/validate.py --source-root /path/to/W-Workspace` additionally verifies original-source fidelity, all 85 local DAGs, subject separation, five-faculty contracts, and all 85 PDF download checksums. `tools/verify_projects.cjs` tests the complete navigation journey, every local node, all proof tabs, downloads and mobile layouts at both a domain root and repository subpath, plus a direct offline proof route. PDF files are copied from the already compiled reports; this integration does not rewrite or recompile them.

## Public project downloads

Selected project dashboards offer **Read PDF** only. Project LaTeX and Markdown sources remain in the original workspace subject folders for backend authoring and analysis. The collector packages the interactive proof content and PDF reports, omits source-download fields and controls, and removes its previously managed source copies. Future refreshes preserve this separation.
