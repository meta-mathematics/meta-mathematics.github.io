/* Compact, unscaled overview of a subject's selected theorem projects. */
window.renderTheoremOverview = function(data) {
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const cardWidth = 220, columnGap = 44, rowGap = 20, padding = 16;
  const measure = document.createElement('canvas').getContext('2d');
  measure.font = '14px Georgia';
  const titles = {};
  data.projects.forEach(project => {
    const lines = []; let line = '';
    project.title.split(/\s+/).forEach(word => {
      const next = line ? line + ' ' + word : word;
      if (line && measure.measureText(next).width > cardWidth - 28) {
        lines.push(line); line = word;
      } else line = next;
    });
    if (line) lines.push(line);
    titles[project.id] = lines;
  });
  const cardHeight = Math.max(84, 55 + 16 * Math.max(...Object.values(titles).map(lines => lines.length)));
  const levels = Object.fromEntries(data.projects.map(project => [project.id, 0]));
  for (let pass = 0; pass < data.projects.length; pass++) {
    data.links.forEach(link => { levels[link.target] = Math.max(levels[link.target], levels[link.source] + 1); });
  }
  const groups = {};
  data.projects.forEach(project => (groups[levels[project.id]] ||= []).push(project));
  const columns = data.links.length ? Math.max(...Object.values(levels)) + 1 : Math.min(3, data.projects.length);
  const rows = data.links.length ? Math.max(...Object.values(groups).map(group => group.length)) : Math.ceil(data.projects.length / columns);
  const width = padding * 2 + columns * cardWidth + (columns - 1) * columnGap;
  const height = padding * 2 + rows * cardHeight + (rows - 1) * rowGap;
  const positions = {};
  if (data.links.length) {
    Object.entries(groups).forEach(([level, projects]) => projects.forEach((project, i) => {
      positions[project.id] = [padding + Number(level) * (cardWidth + columnGap), padding + (rows - projects.length) * (cardHeight + rowGap) / 2 + i * (cardHeight + rowGap)];
    }));
  } else {
    data.projects.forEach((project, i) => { positions[project.id] = [padding + (i % columns) * (cardWidth + columnGap), padding + Math.floor(i / columns) * (cardHeight + rowGap)]; });
  }
  let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escape(data.subject)} theorem dependency graph"><defs><marker id="theorem-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#00529b"/></marker></defs>`;
  data.links.forEach(link => {
    const [x1,y1] = positions[link.source], [x2,y2] = positions[link.target];
    const start = x1 + cardWidth, middle1 = y1 + cardHeight / 2, middle2 = y2 + cardHeight / 2;
    svg += `<path class="edge" d="M${start} ${middle1} C${start + columnGap / 2} ${middle1},${x2 - columnGap / 2} ${middle2},${x2} ${middle2}" marker-end="url(#theorem-arrow)"><title>${escape(link.detail)}</title></path>`;
  });
  data.projects.forEach(project => {
    const [x,y] = positions[project.id];
    svg += `<a href="#${escape(project.id)}" class="graph-node" aria-label="Explore ${escape(project.title)}"><rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="6"/><text x="${x+14}" y="${y+19}" class="id">${escape(project.id)}</text>${titles[project.id].map((line,i) => `<text x="${x+14}" y="${y+40+i*16}" class="title">${escape(line)}</text>`).join('')}<text x="${x+14}" y="${y+cardHeight-12}" class="sub">${project.nodes.length} agents · ${project.edges.length} transfers</text></a>`;
  });
  const container = document.getElementById('overview-graph');
  container.innerHTML = svg + '</svg>';
  container.tabIndex = 0;
};
