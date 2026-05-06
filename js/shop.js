let cart = [];
let currentCategory = 'all';

const categoryTitles = {
  all: 'Alle Produkte',
  kleidung: 'Kleidung',
  schuhe: 'Schuhe',
  accessoires: 'Accessoires',
  handys: 'Handys & Zubehör',
  haushalt: 'Haushalt & Deko'
};

function init() {
  renderProducts(products);
  updateCartCount();
}

function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('productCount');
  count.textContent = list.length + ' Artikel';
  if (list.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:4rem;color:#aaa;font-size:1.1rem;">Keine Produkte gefunden 😔</div>';
    return;
  }
  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        <span class="product-emoji">${p.emoji}</span>
        ${p.badge ? `<span class="product-badge ${p.badge}">${badgeLabel(p.badge)}</span>` : ''}
        <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${p.id}, this)" title="Zur Wunschliste">🤍</button>
      </div>
      <div class="product-info">
        <div class="product-category">${categoryTitles[p.category]}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-rating">${renderStars(p.rating)} <span>${p.rating} (${p.reviews})</span></div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${p.id})">+ Warenkorb</button>
        </div>
      </div>
    </div>
  `).join('');
}

function badgeLabel(badge) {
  const labels = { new: 'NEU', sale: 'SALE', hot: '🔥 TOP' };
  return labels[badge] || badge.toUpperCase();
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function formatPrice(price) {
  return price.toFixed(2).replace('.', ',') + ' €';
}

function showCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const pill = document.getElementById('pill-' + cat);
  const nav = document.getElementById('nav-' + cat);
  if (pill) pill.classList.add('active');
  if (nav) nav.classList.add('active');
  const title = document.getElementById('sectionTitle');
  title.textContent = categoryTitles[cat] || 'Alle Produkte';
  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
  renderProducts(filtered);
  document.querySelector('.shop-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  if (!query) { showCategory(currentCategory); return; }
  const base = currentCategory === 'all' ? products : products.filter(p => p.category === currentCategory);
  const filtered = base.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.desc.toLowerCase().includes(query) ||
    categoryTitles[p.category].toLowerCase().includes(query)
  );
  document.getElementById('sectionTitle').textContent = `Suchergebnis: "${query}"`;
  renderProducts(filtered);
}

// ===== CART =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartCount();
  renderCartItems();
  showToast(`${product.emoji} ${product.name} wurde hinzugefügt!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartCount();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateCartCount(); renderCartItems(); }
}

function updateCartCount() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Dein Warenkorb ist leer</p>';
    totalEl.textContent = '0,00 €';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})" title="Entfernen">🗑️</button>
    </div>
  `).join('');
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  totalEl.textContent = formatPrice(total);
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function checkout() {
  if (cart.length === 0) { showToast('Dein Warenkorb ist leer 🛒'); return; }
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  showToast(`Danke für deinen Kauf! Gesamt: ${formatPrice(total)} 🎉`);
  cart = [];
  updateCartCount();
  renderCartItems();
  toggleCart();
}

// ===== WISHLIST =====
function toggleWishlist(id, btn) {
  const product = products.find(p => p.id === id);
  if (btn.textContent === '🤍') {
    btn.textContent = '❤️';
    showToast(`${product.emoji} ${product.name} zur Wunschliste hinzugefügt ❤️`);
  } else {
    btn.textContent = '🤍';
  }
}

// ===== MODAL =====
function openModal(id) {
  const p = products.find(pr => pr.id === id);
  const content = document.getElementById('modalContent');
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;
  content.innerHTML = `
    <div class="modal-emoji">${p.emoji}</div>
    <div class="modal-category">${categoryTitles[p.category]}</div>
    <div class="modal-name">${p.name}</div>
    <div class="modal-desc">${p.desc}</div>
    <div class="modal-rating">${renderStars(p.rating)} ${p.rating} von 5 (${p.reviews} Bewertungen)</div>
    ${p.colors ? `<div style="margin-bottom:1rem"><strong style="font-size:0.85rem">Farben:</strong><div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.4rem">${p.colors.map(c => `<span style="background:#f0f2ff;padding:0.3rem 0.7rem;border-radius:20px;font-size:0.78rem;font-weight:500">${c}</span>`).join('')}</div></div>` : ''}
    <div class="modal-price-row">
      <div class="modal-price">${formatPrice(p.price)}</div>
      ${p.oldPrice ? `<div class="modal-price-old">${formatPrice(p.oldPrice)}</div>` : ''}
      ${discount ? `<span class="product-badge sale">-${discount}%</span>` : ''}
    </div>
    <button class="modal-add-btn" onclick="addToCart(${p.id}); closeModal()">🛒 In den Warenkorb</button>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('productModal').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('productModal').classList.remove('open');
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart(); }
});

init();
