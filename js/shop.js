/* ===================================================
   MIASHOP – Shop Logic
   =================================================== */

let cart = [];
let wishlist = new Set();
let currentCat = 'all';
let currentSort = 'default';
let visibleCount = 12;
let filteredList = [];

const catTitles = {
  all: 'Alle Produkte',
  damen: 'Damen',
  herren: 'Herren',
  schuhe: 'Schuhe',
  taschen: 'Taschen',
  accessoires: 'Accessoires',
  sale: 'SALE – Bis zu 60% Rabatt'
};

/* ===== INIT ===== */
function init() {
  applyCategory('all');
  window.addEventListener('scroll', onScroll);
}

function onScroll() {
  const h = document.getElementById('mainHeader');
  h.classList.toggle('scrolled', window.scrollY > 10);
}

/* ===== CATEGORY ===== */
function showCategory(cat) {
  currentCat = cat;
  currentSort = 'default';
  visibleCount = 12;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.chip')?.classList.add('active');
  applyCategory(cat);
  document.getElementById('shopMain').scrollIntoView({ behavior: 'smooth', block: 'start' });
  // hide hero+tiles on category change for cleaner look
  const hero = document.getElementById('heroSection');
  const tiles = document.getElementById('catTilesSection');
  if (cat !== 'all') {
    if (hero) hero.style.display = 'none';
    if (tiles) tiles.style.display = 'none';
  } else {
    if (hero) hero.style.display = '';
    if (tiles) tiles.style.display = '';
  }
}

function applyCategory(cat) {
  const base = cat === 'all' ? products : products.filter(p => p.cat === cat);
  filteredList = sortProducts(base, currentSort);
  document.getElementById('sectionTitle').textContent = catTitles[cat] || 'Produkte';
  renderProductGrid();
}

/* ===== SORT ===== */
function setSort(sort) {
  currentSort = sort;
  visibleCount = 12;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  const base = currentCat === 'all' ? products : products.filter(p => p.cat === currentCat);
  filteredList = sortProducts(base, sort);
  renderProductGrid();
}

function sortProducts(list, sort) {
  const arr = [...list];
  if (sort === 'price-asc') arr.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') arr.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') arr.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
  else if (sort === 'new') arr.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
  return arr;
}

/* ===== RENDER GRID ===== */
function renderProductGrid() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productCount');
  const loadWrap = document.getElementById('loadMoreWrap');
  const visible = filteredList.slice(0, visibleCount);
  countEl.textContent = filteredList.length + ' Artikel';

  if (filteredList.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:5rem 0;color:#aaa">
      <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
      <p style="font-size:1rem;font-weight:500">Keine Produkte gefunden</p>
    </div>`;
    loadWrap.style.display = 'none';
    return;
  }

  grid.innerHTML = visible.map(p => cardHTML(p)).join('');
  loadWrap.style.display = filteredList.length > visibleCount ? 'block' : 'none';
}

function cardHTML(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const badgeMap = { new: 'badge-new', sale: 'badge-sale', hot: 'badge-hot', top: 'badge-top' };
  const badgeLbl = { new: 'NEU', sale: `-${discount}%`, hot: 'TOP', top: '⭐ BELIEBT' };
  const isWished = wishlist.has(p.id);

  const colorDots = (p.colorDots || []).slice(0, 4).map((c, i) =>
    `<span class="color-dot" style="background:${c}" title="${(p.colors||[])[i]||''}"></span>`
  ).join('');
  const extraColors = (p.colorDots || []).length > 4
    ? `<span class="p-colors-more">+${p.colorDots.length - 4}</span>` : '';

  const sizePills = (p.sizes || []).slice(0, 4).map(s =>
    `<button class="size-pill" onclick="event.stopPropagation();quickAddToCart(${p.id},'${s}')">${s}</button>`
  ).join('');

  return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="p-img-wrap">
        <div class="p-bg" style="--bg:${p.bg}"></div>
        <span class="p-emoji">${p.emoji}</span>
        ${p.badge ? `<span class="p-badge ${badgeMap[p.badge]}">${badgeLbl[p.badge]}</span>` : ''}
        <button class="p-wishlist ${isWished ? 'active' : ''}" onclick="event.stopPropagation();toggleWishlist(${p.id},this)" title="Wunschliste">
          ${isWished ? '❤️' : '🤍'}
        </button>
        <div class="p-overlay"></div>
        <div class="p-quick-add">
          ${sizePills}
          <button class="quick-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})" title="Zum Warenkorb">🛒</button>
        </div>
      </div>
      <div class="p-info">
        <div class="p-brand">${p.brand}</div>
        <div class="p-name">${p.name}</div>
        <div class="p-colors">${colorDots}${extraColors}</div>
        <div class="p-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-val">${p.rating}</span>
          <span class="rating-count">(${p.reviews.toLocaleString('de')})</span>
        </div>
        <div class="p-price-row">
          <span class="p-price${p.oldPrice ? ' sale' : ''}">${fmtPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="p-price-old">${fmtPrice(p.oldPrice)}</span>` : ''}
          ${discount ? `<span class="p-discount">-${discount}%</span>` : ''}
        </div>
      </div>
    </div>`;
}

/* ===== LOAD MORE ===== */
function loadMore() {
  visibleCount += 12;
  renderProductGrid();
}

/* ===== SEARCH ===== */
function filterSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  if (!q) { applyCategory(currentCat); return; }
  const base = currentCat === 'all' ? products : products.filter(p => p.cat === currentCat);
  filteredList = base.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    (catTitles[p.cat] || '').toLowerCase().includes(q)
  );
  document.getElementById('sectionTitle').textContent = `Suchergebnis: „${q}"`;
  visibleCount = 24;
  renderProductGrid();
}

function toggleSearch() {
  const bar = document.getElementById('searchBarFull');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
  } else {
    document.getElementById('searchInput').value = '';
    applyCategory(currentCat);
  }
}

/* ===== CART ===== */
function addToCart(id, size) {
  const p = products.find(x => x.id === id);
  const key = `${id}-${size || 'default'}`;
  const ex = cart.find(i => i.key === key);
  if (ex) { ex.qty++; }
  else { cart.push({ ...p, key, selectedSize: size || (p.sizes?.[0] || ''), qty: 1 }); }
  updateCart();
  toast(`${p.emoji} ${p.name} wurde hinzugefügt`, 'success');
}

function quickAddToCart(id, size) {
  addToCart(id, size);
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  updateCart();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(key);
  else updateCart();
}

function updateCart() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const countEl = document.getElementById('cartCount');
  const headEl = document.getElementById('cartHeadCount');
  countEl.textContent = total;
  headEl.textContent = `(${total})`;
  countEl.classList.toggle('visible', total > 0);

  // render items
  const body = document.getElementById('cartItems');
  const foot = document.getElementById('cartFoot');

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty-state"><span>🛍️</span><p>Dein Warenkorb ist noch leer</p><small>Füge Artikel hinzu, um sie hier zu sehen</small></div>`;
    foot.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(item => {
    const lineTotal = item.price * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-visual" style="background:${item.bg}">${item.emoji}</div>
        <div class="cart-item-details">
          <div class="cart-item-brand">${item.brand}</div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">Größe: ${item.selectedSize}</div>
          <div class="cart-item-row">
            <div class="cart-qty">
              <button onclick="changeQty('${item.key}',-1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeQty('${item.key}',1)">+</button>
            </div>
            <span class="cart-item-price">${fmtPrice(lineTotal)}</span>
            <button class="cart-item-remove" onclick="removeFromCart('${item.key}')">✕ Entfernen</button>
          </div>
        </div>
      </div>`;
  }).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 49 ? 'Gratis' : '3,99 €';
  const shippingNum = subtotal >= 49 ? 0 : 3.99;
  document.getElementById('cartSubtotal').textContent = fmtPrice(subtotal);
  document.getElementById('cartShipping').textContent = shipping;
  document.getElementById('cartTotal').textContent = fmtPrice(subtotal + shippingNum);
  foot.style.display = 'block';
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function checkout() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cart = [];
  updateCart();
  toggleCart();
  toast(`🎉 Vielen Dank für deine Bestellung! Gesamt: ${fmtPrice(total)}`, 'success');
}

/* ===== WISHLIST ===== */
function toggleWishlist(id, btn) {
  const p = products.find(x => x.id === id);
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.textContent = '🤍';
    btn.classList.remove('active');
  } else {
    wishlist.add(id);
    btn.textContent = '❤️';
    btn.classList.add('active');
    toast(`${p.emoji} ${p.name} zur Wunschliste hinzugefügt`, 'info');
  }
  const countEl = document.getElementById('wishlistCount');
  countEl.textContent = wishlist.size;
  countEl.classList.toggle('visible', wishlist.size > 0);
}

/* ===== MODAL ===== */
function openModal(id) {
  const p = products.find(x => x.id === id);
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const sizeBtns = (p.sizes || []).map((s, i) =>
    `<button class="modal-size${i === 0 ? ' active' : ''}" onclick="selectSize(this)">${s}</button>`
  ).join('');
  const colorBtns = (p.colors || []).map((c, i) =>
    `<button class="modal-color${i === 0 ? ' active' : ''}" onclick="selectColor(this)">${c}</button>`
  ).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-layout">
      <div class="modal-img" style="background:${p.bg}">
        <span style="font-size:8rem;filter:drop-shadow(0 12px 24px rgba(0,0,0,0.12))">${p.emoji}</span>
      </div>
      <div class="modal-details">
        <div class="modal-brand">${p.brand}</div>
        <h2 class="modal-name">${p.name}</h2>
        <div class="modal-rating-row">
          <span class="modal-stars">${renderStars(p.rating)}</span>
          <span class="modal-rval">${p.rating}</span>
          <span class="modal-rcnt">(${p.reviews.toLocaleString('de')} Bewertungen)</span>
        </div>
        <div class="modal-price-row">
          <span class="modal-price${p.oldPrice ? ' sale' : ''}">${fmtPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="modal-price-old">${fmtPrice(p.oldPrice)}</span>` : ''}
          ${discount ? `<span class="modal-discount">−${discount}% RABATT</span>` : ''}
        </div>
        ${colorBtns ? `<div class="modal-section-label">Farbe</div><div class="modal-colors">${colorBtns}</div>` : ''}
        ${sizeBtns ? `<div class="modal-section-label">Größe</div><div class="modal-sizes">${sizeBtns}</div>` : ''}
        <button class="modal-add-btn" onclick="modalAddToCart(${p.id})">In den Warenkorb</button>
        <div class="modal-desc">${p.desc}</div>
        <div style="display:flex;gap:1.5rem;font-size:0.78rem;color:#999;margin-top:0.5rem">
          <span>🚚 Kostenloser Versand ab 49 €</span>
          <span>↩️ 30 Tage Rückgabe</span>
        </div>
      </div>
    </div>`;
  document.getElementById('productModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
}

function selectSize(btn) {
  btn.closest('.modal-sizes').querySelectorAll('.modal-size').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectColor(btn) {
  btn.closest('.modal-colors').querySelectorAll('.modal-color').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function modalAddToCart(id) {
  const activeSize = document.querySelector('.modal-size.active')?.textContent || '';
  addToCart(id, activeSize);
  closeModal();
  toggleCart();
}

/* ===== NEWSLETTER ===== */
function newsletterSignup(btn) {
  const input = btn.previousElementSibling;
  if (!input.value.includes('@')) { toast('Bitte gib eine gültige E-Mail-Adresse ein', 'error'); return; }
  btn.textContent = '✓ Angemeldet!';
  btn.style.background = '#2ecc71';
  btn.style.color = '#fff';
  btn.disabled = true;
  input.value = '';
  toast('🎉 Willkommen! Dein 10%-Gutschein kommt per E-Mail', 'success');
}

/* ===== TOAST ===== */
function toast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = 'toast';
  el.style.borderLeft = `4px solid ${type === 'error' ? '#c0392b' : type === 'info' ? '#3498db' : '#2ecc71'}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* ===== HELPERS ===== */
function fmtPrice(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
function renderStars(r) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    s += i <= Math.floor(r) ? '★' : (i - r < 1 && i - r > 0 ? '½' : '☆');
  }
  return s;
}

/* ===== KEYBOARD ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
    const bar = document.getElementById('searchBarFull');
    if (bar.classList.contains('open')) toggleSearch();
  }
});

init();
