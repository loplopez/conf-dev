/**
 * Floating networks — small clusters of linked nodes that drift slowly and
 * react to the mouse (nodes ease away from the pointer and brighten).
 *
 * Any <canvas data-network="dark|light"> on the page is animated:
 *   dark  → white links (for use over photos)
 *   light → navy links (for white sections)
 * Respects prefers-reduced-motion (static frame, no interaction) and pauses off-screen.
 */
type Node = { ox: number; oy: number; phase: number; dx: number; dy: number; r: number; hub: boolean };
type Cluster = { x: number; y: number; vx: number; vy: number; nodes: Node[]; edges: [number, number][] };

const RED = '209, 35, 42'; // NetSci red #D1232A
// `?motion=1` forces animation on (for previewing on machines with Reduce Motion enabled).
const forceMotion = new URLSearchParams(location.search).get('motion') === '1';
const reduce = !forceMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mouse = { x: -9999, y: -9999 };
window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
window.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });

function makeCluster(w: number, h: number): Cluster {
  const n = 10 + Math.floor(Math.random() * 15);
  const nodes: Node[] = Array.from({ length: n }, (_, i) => {
    const a = Math.random() * Math.PI * 2;
    const d = i === 0 ? 0 : 25 + Math.sqrt(Math.random()) * 120;
    return { ox: Math.cos(a) * d, oy: Math.sin(a) * d, phase: Math.random() * Math.PI * 2, dx: 0, dy: 0, r: i === 0 ? 4 : 1.8 + Math.random() * 1.6, hub: i === 0 };
  });
  // geometric graph inside the cluster: link each node to its 2 nearest neighbours
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  for (let i = 0; i < n; i++) {
    const near = nodes
      .map((m, j) => ({ j, d: Math.hypot(m.ox - nodes[i].ox, m.oy - nodes[i].oy) }))
      .filter((x) => x.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    for (const { j } of near) {
      const k = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(k)) { seen.add(k); edges.push([i, j]); }
    }
  }
  const speed = 0.08 + Math.random() * 0.1;
  const dir = Math.random() * Math.PI * 2;
  return { x: Math.random() * w, y: Math.random() * h, vx: Math.cos(dir) * speed, vy: Math.sin(dir) * speed, nodes, edges };
}

function animate(canvas: HTMLCanvasElement) {
  const dark = canvas.dataset.network === 'dark';
  const LINK = dark ? '255, 255, 255' : '0, 48, 99';
  const linkA = dark ? 0.2 : 0.1;
  const nodeA = dark ? 0.45 : 0.25;
  const ctx = canvas.getContext('2d')!;
  let w = 0, h = 0, clusters: Cluster[] = [], raf = 0, t = 0, visible = true;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    if (!w || !h) return;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(12, Math.max(4, (w * h) / 150000)));
    clusters = Array.from({ length: count }, () => makeCluster(w, h));
  }

  function frame() {
    t += 1;
    const rect = canvas.getBoundingClientRect();
    const mx = mouse.x - rect.left, my = mouse.y - rect.top;
    ctx.clearRect(0, 0, w, h);
    const pos: { x: number; y: number; near: number }[][] = [];

    for (const c of clusters) {
      if (!reduce) {
        c.x += c.vx; c.y += c.vy;
        if (c.x < -180) c.x = w + 180; if (c.x > w + 180) c.x = -180;
        if (c.y < -180) c.y = h + 180; if (c.y > h + 180) c.y = -180;
      }
      const ps = c.nodes.map((n) => {
        const wob = reduce ? 0 : 2.2;
        const bx = c.x + n.ox + Math.sin(t * 0.01 + n.phase) * wob;
        const by = c.y + n.oy + Math.cos(t * 0.012 + n.phase) * wob;
        // mouse interaction: ease away from the pointer within 130px
        let tx = 0, ty = 0, near = 0;
        if (!reduce) {
          const ddx = bx - mx, ddy = by - my, d = Math.hypot(ddx, ddy);
          if (d < 150 && d > 0.1) { near = 1 - d / 150; tx = (ddx / d) * near * 34; ty = (ddy / d) * near * 34; }
        }
        n.dx += (tx - n.dx) * 0.08; n.dy += (ty - n.dy) * 0.08;
        return { x: bx + n.dx, y: by + n.dy, near };
      });
      pos.push(ps);
      ctx.lineWidth = 0.9;
      for (const [a, b] of c.edges) {
        const glow = Math.max(ps[a].near, ps[b].near);
        ctx.strokeStyle = `rgba(${LINK}, ${(linkA + glow * 0.25).toFixed(3)})`;
        ctx.beginPath(); ctx.moveTo(ps[a].x, ps[a].y); ctx.lineTo(ps[b].x, ps[b].y); ctx.stroke();
      }
    }
    // faint links between nearby clusters' hubs
    ctx.lineWidth = 0.6;
    for (let i = 0; i < clusters.length; i++) for (let j = i + 1; j < clusters.length; j++) {
      const a = pos[i][0], b = pos[j][0], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 260) {
        ctx.strokeStyle = `rgba(${LINK}, ${(linkA * 0.45 * (1 - d / 260)).toFixed(3)})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    clusters.forEach((c, ci) => c.nodes.forEach((n, ni) => {
      const p = pos[ci][ni];
      ctx.fillStyle = `rgba(${RED}, ${Math.min(1, nodeA + (n.hub ? 0.1 : 0) + p.near * 0.35).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, n.r + p.near * 1.5, 0, Math.PI * 2); ctx.fill();
    }));

    if (!reduce && visible) raf = requestAnimationFrame(frame);
  }

  resize();
  frame();
  window.addEventListener('resize', () => { resize(); if (reduce) frame(); });
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (reduce) return;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(frame);
  }).observe(canvas);
}

document.querySelectorAll<HTMLCanvasElement>('canvas[data-network]').forEach(animate);
