/* Subject-local vertical atlas. Mathematical records are read without modification. */
(() => {
  'use strict';
  const graph = window.META_GRAPH;
  const nodes = graph.nodes.filter(node => node.layer === 'global');
  const byId = new Map(nodes.map(node => [node.id, node]));
  const edges = graph.edges.filter(edge => byId.has(edge.source) && byId.has(edge.target));
  const groups = graph.groups.filter(group => nodes.some(node => node.group === group.id));
  const colors = {definition:'#79988c', ingredient:'#467b9c', consequence:'#748f44', bridge:'#ad8351'};
  const types = {definition:'Definition / language', ingredient:'Selected proof ingredient', consequence:'Direct consequence', bridge:'Conceptual bridge'};
  const $ = id => document.getElementById(id);
  const escape = value => String(value || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const incoming = new Map(nodes.map(node => [node.id, edges.filter(edge => edge.target === node.id)]));
  const outgoing = new Map(nodes.map(node => [node.id, edges.filter(edge => edge.source === node.id)]));
  const isCross = edge => byId.get(edge.source).group !== byId.get(edge.target).group;
  const regionById = new Map(groups.map(group => [group.id, group]));
  const positions = new Map(), geometry = new Map(), regionPositions = new Map();
  const nodeWidth = 210, atlasWidth = 936;
  const measure = document.createElement('canvas').getContext('2d');
  measure.font = '14px Georgia';
  const lines = title => {
    let count = 1, line = '';
    for (const word of title.split(/\s+/)) {
      const next = line ? line + ' ' + word : word;
      if (line && measure.measureText(next).width > 180) { count++; line = word; } else line = next;
    }
    return count;
  };
  const titleLines = Math.max(...nodes.map(node => lines(node.title)));
  const densities = {
    compact: {nodeHeight:Math.max(72, Math.ceil(34 + 18 * titleLines)), gap:54, trackStart:10, trackStep:4},
    comfortable: {nodeHeight:Math.max(90, Math.ceil(55 + 18 * titleLines)), gap:98, trackStart:15, trackStep:6},
    spacious: {nodeHeight:Math.max(90, Math.ceil(55 + 18 * titleLines)), gap:140, trackStart:15, trackStep:6}
  };
  let nodeHeight = densities.compact.nodeHeight;
  const rowSpacing = () => nodeHeight + densities[$('spacing').value].gap;
  let selected = null, hovered = null, lastTrigger = null;
  const motion = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  function layout() {
    positions.clear(); regionPositions.clear();
    nodeHeight = densities[$('spacing').value].nodeHeight;
    $('atlas').dataset.density = $('spacing').value;
    const rowStep = rowSpacing();
    let top = 18;
    const cards = [], buttons = [];
    groups.forEach((group, index) => {
      const members = nodes.filter(node => node.group === group.id);
      const local = edges.filter(edge => !isCross(edge) && byId.get(edge.source).group === group.id);
      const degree = new Map(members.map(node => [node.id, 0]));
      const ranks = new Map(members.map(node => [node.id, 0]));
      local.forEach(edge => degree.set(edge.target, degree.get(edge.target) + 1));
      const queue = members.filter(node => degree.get(node.id) === 0).map(node => node.id);
      for (let i = 0; i < queue.length; i++) {
        local.filter(edge => edge.source === queue[i]).forEach(edge => {
          ranks.set(edge.target, Math.max(ranks.get(edge.target), ranks.get(edge.source) + 1));
          degree.set(edge.target, degree.get(edge.target) - 1);
          if (degree.get(edge.target) === 0) queue.push(edge.target);
        });
      }
      // The bundled graph is acyclic. Refuse a misleading downward layout if it changes.
      if (queue.length !== members.length) throw Error('A local cycle requires review in the original editor: ' + group.title);
      let row = 0;
      for (let rank = 0; rank <= Math.max(...ranks.values()); rank++) {
        const layer = members.filter(node => ranks.get(node.id) === rank);
        // Keep siblings near their predecessors without changing dependencies or ranks.
        const center = node => {
          const predecessors = local.filter(edge => edge.target === node.id).map(edge => positions.get(edge.source)).filter(Boolean);
          return predecessors.length ? predecessors.reduce((sum,p) => sum + p.x, 0) / predecessors.length : 468;
        };
        layer.sort((a,b) => center(a) - center(b));
        layer.forEach((node,i) => {
          const countInRow = Math.min(3, layer.length - Math.floor(i/3)*3);
          const column = i % 3 + (countInRow === 1 ? 1 : 0);
          const x = 96 + column * 264, y = top + 140 + (row + Math.floor(i/3)) * rowStep;
          positions.set(node.id, {x, y, column, region:group.id});
          const cross = [...incoming.get(node.id), ...outgoing.get(node.id)].filter(isCross).length;
          buttons.push(`<button class="math-node ${node.kind === 'conjecture' ? 'conjecture' : ''}" data-node="${escape(node.id)}" style="left:${x}px;top:${y}px;height:${nodeHeight}px;--color:${group.color}" aria-pressed="false" aria-label="${escape(node.title)}, ${escape(node.kind)}${cross ? ', '+cross+' cross-region connections' : ''}"><span class="kind">${escape(node.kind)}</span><span class="title">${escape(node.title)}</span><span class="cross" data-compact="${cross ? '↗ '+cross : ''}" title="${cross ? cross+' cross-region connections' : 'Within this region'}">${cross ? '↗ '+cross+' cross-region '+(cross === 1 ? 'link' : 'links') : 'Within this region'}</span></button>`);
        });
        row += Math.ceil(layer.length / 3);
      }
      const height = 140 + (row - 1) * rowStep + nodeHeight + 65;
      const crosses = edges.filter(edge => isCross(edge) && (byId.get(edge.source).group === group.id || byId.get(edge.target).group === group.id)).length;
      regionPositions.set(group.id, {top, height});
      cards.push(`<section class="region-card" id="region-${group.id}" style="top:${top}px;height:${height}px;--color:${group.color}" aria-label="${escape(group.title)}"><div class="region-heading"><span class="region-number">${String(index+1).padStart(2,'0')}</span><div><h2>${escape(group.title)}</h2><p>${members.length} mathematical objects · ${local.length} local connections</p></div><span class="region-connection-count">${crosses} links to other regions<br>Select a card to trace them</span></div><p class="region-footnote">↓ Supporting ideas above; dependent results below. Arrows record selected relationships.</p></section>`);
      top += height + 75;
    });
    $('atlas').style.height = top + 'px';
    $('edges').setAttribute('viewBox', `0 0 ${atlasWidth} ${top}`);
    $('region-cards').innerHTML = cards.join('');
    $('nodes').innerHTML = buttons.join('');
    prepareRoutes(); renderRoutes();
    $('nodes').querySelectorAll('[data-node]').forEach(button => {
      button.onclick = () => select(button.dataset.node, false, button);
      button.onmouseenter = () => { if (!selected) { hovered = button.dataset.node; renderRoutes(); } };
      button.onmouseleave = () => { hovered = null; renderRoutes(); };
      button.onfocus = () => { if (!selected) { hovered = button.dataset.node; renderRoutes(); } };
      button.onblur = () => { hovered = null; renderRoutes(); };
    });
    updateActiveRegion();
  }

  function port(edge, direction) {
    const list = direction === 'out' ? outgoing.get(edge.source) : incoming.get(edge.target);
    const sorted = [...list].sort((a,b) => {
      const pa = positions.get(direction === 'out' ? a.target : a.source);
      const pb = positions.get(direction === 'out' ? b.target : b.source);
      return pa.x - pb.x || pa.y - pb.y;
    });
    return 22 + (nodeWidth - 44) * (sorted.indexOf(edge) + 1) / (sorted.length + 1);
  }

  function prepareRoutes() {
    geometry.clear();
    const density = densities[$('spacing').value];
    edges.forEach((edge,index) => {
      const a = positions.get(edge.source), b = positions.get(edge.target);
      const x1 = a.x + port(edge,'out'), x2 = b.x + port(edge,'in');
      const y1 = a.y + nodeHeight + 2, y2 = b.y - 3;
      const outgoingTrack = a.y + nodeHeight + density.trackStart + (index % 5) * density.trackStep;
      const incomingTrack = b.y - density.trackStart - 1 - (index % 5) * density.trackStep;
      let points;
      if (isCross(edge)) {
        const lane = (a.column <= 1 ? 16 : atlasWidth - 16) + (a.column <= 1 ? 1 : -1) * (index % 6) * 6;
        points = [[x1,y1],[x1,outgoingTrack],[lane,outgoingTrack],[lane,incomingTrack],[x2,incomingTrack],[x2,y2]];
      } else if (b.y - a.y <= rowSpacing() + 1) {
        const track = outgoingTrack;
        points = [[x1,y1],[x1,track],[x2,track],[x2,y2]];
      } else {
        // Vertical trunks stay in the empty gutters, never through mathematical cards.
        const lane = a.x + nodeWidth + 12 + (index % 4) * 7;
        points = [[x1,y1],[x1,outgoingTrack],[lane,outgoingTrack],[lane,incomingTrack],[x2,incomingTrack],[x2,y2]];
      }
      geometry.set(edge.id, points);
    });
  }

  function routePath(points) {
    const clean = points.filter((p,i) => !i || p[0] !== points[i-1][0] || p[1] !== points[i-1][1]);
    let path = `M${clean[0].join(' ')}`;
    for (let i = 1; i < clean.length - 1; i++) {
      const a = clean[i-1], b = clean[i], c = clean[i+1];
      const before = Math.hypot(b[0]-a[0],b[1]-a[1]), after = Math.hypot(c[0]-b[0],c[1]-b[1]);
      const r = $('routing').value === 'rounded' ? Math.min(10, before/2, after/2) : 0;
      const p = [b[0]-(b[0]-a[0])*r/before,b[1]-(b[1]-a[1])*r/before];
      const q = [b[0]+(c[0]-b[0])*r/after,b[1]+(c[1]-b[1])*r/after];
      path += ` L${p.join(' ')} Q${b.join(' ')} ${q.join(' ')}`;
    }
    return path + ` L${clean[clean.length-1].join(' ')}`;
  }

  function renderRoutes() {
    const focus = selected || hovered, mode = $('connections').value;
    const incident = edge => focus && (edge.source === focus || edge.target === focus);
    const shown = edges.filter(edge => mode === 'all' || (mode === 'selected' ? incident(edge) : !isCross(edge) || incident(edge)));
    shown.sort((a,b) => Number(!!incident(a)) - Number(!!incident(b)));
    const defs = `<defs>${Object.entries(colors).map(([type,color]) => `<marker id="arrow-${type}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M1 1 L9 5 L1 9 Z" fill="${color}"/></marker>`).join('')}</defs>`;
    $('edges').innerHTML = defs + shown.map(edge => {
      const active = incident(edge), path = routePath(geometry.get(edge.id));
      const title = `${byId.get(edge.source).title} → ${byId.get(edge.target).title}: ${types[edge.type]}. ${edge.reason}`;
      return `${active ? '<path class="route-halo" d="'+path+'"/>' : ''}<path data-edge="${escape(edge.id)}" data-source="${escape(edge.source)}" data-target="${escape(edge.target)}" class="route ${edge.type}${isCross(edge) ? ' cross-route' : ''}${active ? ' active' : focus ? ' dim' : ''}" d="${path}" stroke="${colors[edge.type] || colors.definition}" marker-end="url(#arrow-${edge.type})"><title>${escape(title)}</title></path>`;
    }).join('');
    const related = new Set(focus ? edges.filter(incident).flatMap(edge => [edge.source, edge.target]) : []);
    $('nodes').querySelectorAll('[data-node]').forEach(button => {
      const id = button.dataset.node;
      button.classList.toggle('selected', id === selected);
      button.classList.toggle('related', !!focus && id !== focus && related.has(id));
      button.classList.toggle('dim', !!focus && id !== focus && !related.has(id));
      button.setAttribute('aria-pressed', String(id === selected));
    });
    $('connection-count').textContent = `${shown.length} / ${edges.length} connections drawn${mode === 'selected' && !focus ? ' · Select a node' : ''}`;
  }

  function jump(id) {
    const button = [...$('nodes').querySelectorAll('[data-node]')].find(button => button.dataset.node === id);
    button.scrollIntoView({block:'center',inline:'center',behavior:motion()});
    button.focus({preventScroll:true});
  }

  function select(id, shouldJump = false, trigger = null) {
    selected = id; hovered = null; lastTrigger = trigger || lastTrigger;
    $('clear').disabled = false;
    $('selection-bar').hidden = false;
    const node = byId.get(id);
    $('selection-label').textContent = node.title + ' · ' + incoming.get(id).length + ' incoming / ' + outgoing.get(id).length + ' outgoing';
    renderRoutes(); renderDetails();
    if (shouldJump) { $('inspector').hidden = true; jump(id); }
    else $('inspector').hidden = false;
  }

  function renderDetails() {
    if (!selected) return;
    const node = byId.get(selected), group = regionById.get(node.group);
    $('details').innerHTML = `<span class="eyebrow">${escape(node.kind)} / ${escape(group.title)}</span><h2 class="detail-title">${escape(node.title)}</h2><p class="statement">${escape(node.statement || node.description)}</p><h3>Scope & hypotheses</h3><p class="scope">${escape(node.hypotheses)}</p>`;
    for (const [label, list, isIncoming] of [['Incoming support',incoming.get(selected),true],['Outgoing connections',outgoing.get(selected),false]]) {
      const section = document.createElement('section');
      section.innerHTML = `<h3>${label} · ${list.length}</h3>`;
      if (!list.length) section.innerHTML += '<p class="scope">No connections recorded.</p>';
      list.forEach(edge => {
        const other = byId.get(isIncoming ? edge.source : edge.target), connection = document.createElement('div');
        connection.className = 'connection'; connection.style.setProperty('--color', colors[edge.type]);
        connection.innerHTML = `<button class="read-node">${isIncoming ? '← ' : '→ '}${escape(other.title)}</button><small>${types[edge.type]}${isCross(edge) ? ' · '+escape(regionById.get(other.group).title) : ''}</small><p>${escape(edge.reason)}</p><button class="follow">Locate in the map ↓</button>`;
        connection.querySelector('.read-node').onclick = event => select(other.id,false,event.currentTarget);
        connection.querySelector('.follow').onclick = () => select(other.id,true);
        section.append(connection);
      });
      $('details').append(section);
    }
    const heading = document.createElement('h3'); heading.textContent = 'Reading references'; $('details').append(heading);
    (node.references || []).forEach(reference => {
      const link = document.createElement('a'); link.className = 'reference';link.textContent = reference.title + ' ↗';
      if (/^https?:\/\//.test(reference.url)) { link.href = reference.url;link.target = '_blank';link.rel = 'noopener noreferrer'; }
      $('details').append(link);
    });
    const note = document.createElement('p');note.className = 'scope';note.textContent = node.evidence || ''; $('details').append(note);
    $('inspector').scrollTop = 0;
  }

  function clearSelection() {
    selected = null; hovered = null; $('clear').disabled = true;
    $('inspector').hidden = true; $('selection-bar').hidden = true; renderRoutes();
  }
  function updateActiveRegion() {
    const origin = $('atlas').getBoundingClientRect().top;
    let active = groups[0].id;
    for (const group of groups) if (origin + regionPositions.get(group.id).top <= 160) active = group.id;
    $('regions').querySelectorAll('a').forEach(link => {
      const on = link.dataset.region === active; link.classList.toggle('active', on);
      if (on) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');
    });
  }

  document.title = graph.subject.title + ' · Meta-Math';
  $('subjectTitle').textContent = graph.subject.title;
  $('region-summary').textContent = groups.length + ' connected regions in ' + graph.subject.title + '. Follow the itinerary or jump to a region.';
  $('inventory').textContent = `${nodes.length} objects · ${edges.length} connections · ${groups.length} regions`;
  $('regions').innerHTML = groups.map((group,i) => `<a href="#region-${group.id}" data-region="${group.id}" style="--color:${group.color}"><span>${String(i+1).padStart(2,'0')}</span>${escape(group.title)}</a>`).join('');
  $('regions').querySelectorAll('a').forEach(link => link.onclick = event => {
    event.preventDefault(); document.getElementById('region-'+link.dataset.region).scrollIntoView({block:'start',behavior:motion()});
  });
  $('search').oninput = () => {
    const normalize = text => text.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
    const query = normalize($('search').value.trim()); $('search-results').replaceChildren();
    if (!query) return;
    const results = nodes.filter(node => normalize(node.title+' '+node.id+' '+node.statement).includes(query));
    const summary = document.createElement('p');summary.textContent = results.length + ' results';$('search-results').append(summary);
    results.forEach(node => {
      const button = document.createElement('button');button.textContent = node.title;
      const small = document.createElement('small');small.textContent = regionById.get(node.group).title;button.append(small);
      button.onclick = () => select(node.id,true,button);$('search-results').append(button);
    });
  };
  $('clear').onclick = clearSelection;
  $('connections').onchange = renderRoutes; $('routing').onchange = renderRoutes;
  $('spacing').onchange = () => { layout(); if (selected) jump(selected); };
  $('close-details').onclick = () => { $('inspector').hidden = true; if (lastTrigger?.isConnected) lastTrigger.focus({preventScroll:true}); };
  $('open-details').onclick = () => { lastTrigger = $('open-details'); $('inspector').hidden = false; $('close-details').focus(); };
  $('top').onclick = () => $('map').scrollIntoView({behavior:motion()});
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape') { if (!$('inspector').hidden) $('close-details').click(); else clearSelection(); }
    if (event.key === '/' && !['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) {event.preventDefault();$('search').focus();}
  });
  let frame = null;
  window.addEventListener('scroll',() => {if (frame) return;frame = requestAnimationFrame(() => {frame = null;updateActiveRegion();});},{passive:true});
  layout();
})();
