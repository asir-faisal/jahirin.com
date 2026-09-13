// Running head tracks the section being read.
// On desktop, About and Contact share one grid row, so both can be in view at once:
// the link the visitor clicked wins; otherwise the first section in document order.
const links = [...document.querySelectorAll('.runhead a[href^="#"]')];
const ids = links.map((a) => a.hash.slice(1));
const visible = new Set();
let pinned = null;

function mark(id) {
  for (const a of links) {
    if (a.hash === '#' + id) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  }
}

function update() {
  if (pinned && visible.has(pinned)) return mark(pinned);
  pinned = null;
  const id = ids.find((i) => visible.has(i));
  if (id) mark(id);
}

for (const a of links) a.addEventListener('click', () => { pinned = a.hash.slice(1); mark(pinned); });

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id);
    update();
  }, { rootMargin: '-15% 0px -60% 0px' });
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  }
}
