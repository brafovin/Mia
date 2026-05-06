/* =====================================================
   MIASHOP – Fortune Wheel (Drehrad)
   Spin to win coupon codes 5–100 €
   ===================================================== */

const WHEEL_SEGMENTS = [
  { label: '5 €',   value: 5,   color: '#ff6b6b' },
  { label: '10 €',  value: 10,  color: '#ffa94d' },
  { label: '15 €',  value: 15,  color: '#ffd43b' },
  { label: '20 €',  value: 20,  color: '#69db7c' },
  { label: '25 €',  value: 25,  color: '#74c0fc' },
  { label: '30 €',  value: 30,  color: '#da77f2' },
  { label: '50 €',  value: 50,  color: '#f783ac' },
  { label: '100 €', value: 100, color: '#a9e34b' },
];

let wheelRotation = 0;
let wheelSpinning = false;
let wheelSpunThisSession = false;
let wheelCanvas = null;
let wheelCtx = null;
let wheelAnimFrame = null;

/* ── DRAW ── */
function initWheel() {
  wheelCanvas = document.getElementById('wheelCanvas');
  if (!wheelCanvas) return;
  wheelCtx = wheelCanvas.getContext('2d');
  drawWheel(wheelRotation);
}

function drawWheel(rotation) {
  if (!wheelCanvas || !wheelCtx) return;
  const ctx = wheelCtx;
  const size = wheelCanvas.width;
  const cx = size / 2;
  const cy = size / 2;
  const r = cx - 10;
  const n = WHEEL_SEGMENTS.length;
  const seg = (2 * Math.PI) / n;

  ctx.clearRect(0, 0, size, size);

  // Outer glow
  ctx.beginPath();
  ctx.arc(cx, cy, r + 8, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(0,0,0,0.06)';
  ctx.fill();

  WHEEL_SEGMENTS.forEach((s, i) => {
    const a0 = rotation + i * seg - Math.PI / 2;
    const a1 = a0 + seg;

    // Segment
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, a0, a1);
    ctx.closePath();
    ctx.fillStyle = s.color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Label
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(a0 + seg / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.shadowColor = 'rgba(0,0,0,0.45)';
    ctx.shadowBlur = 5;
    ctx.font = `bold 15px Inter, sans-serif`;
    ctx.fillText(s.label, r - 12, 6);
    ctx.restore();
  });

  // Outer border
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 6;
  ctx.stroke();

  // Center hub
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, 2 * Math.PI);
  const hub = ctx.createRadialGradient(cx - 5, cy - 5, 2, cx, cy, 22);
  hub.addColorStop(0, '#fff');
  hub.addColorStop(1, '#f0f0f0');
  ctx.fillStyle = hub;
  ctx.fill();
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#c0392b';
  ctx.font = 'bold 9px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.shadowBlur = 0;
  ctx.fillText('MIA', cx, cy + 4);
}

/* ── OPEN / CLOSE ── */
function openWheelModal() {
  document.getElementById('wheelModal')?.classList.add('open');
  document.getElementById('wheelOverlay')?.classList.add('open');
  setTimeout(initWheel, 60);
  const btn = document.getElementById('wheelSpinBtn');
  if (btn) {
    if (wheelSpunThisSession) {
      btn.textContent = '✓ Bereits gedreht!';
      btn.disabled = true;
    } else {
      btn.textContent = '🎡 Jetzt Drehen!';
      btn.disabled = false;
    }
  }
  // hide win box if re-opening
  const win = document.getElementById('wheelWinBox');
  if (win && !wheelSpunThisSession) win.style.display = 'none';
}

function closeWheelModal() {
  document.getElementById('wheelModal')?.classList.remove('open');
  document.getElementById('wheelOverlay')?.classList.remove('open');
}

/* ── SPIN ── */
function spinWheel() {
  if (wheelSpinning || wheelSpunThisSession) return;
  const btn = document.getElementById('wheelSpinBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Dreht sich…'; }

  wheelSpinning = true;
  wheelSpunThisSession = true;

  const winIdx = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
  const segAngle = (2 * Math.PI) / WHEEL_SEGMENTS.length;

  // Target: center of winning segment points to top (−π/2)
  const winCenter = winIdx * segAngle + segAngle / 2;
  const target = -Math.PI / 2 - winCenter;
  const minEnd = wheelRotation + 6 * 2 * Math.PI;
  const spins = Math.ceil((minEnd - target) / (2 * Math.PI));
  const endRotation = target + spins * 2 * Math.PI;

  const startRot = wheelRotation;
  const duration = 5000;
  const startTime = performance.now();

  function animate(now) {
    const t = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 5);
    wheelRotation = startRot + (endRotation - startRot) * eased;
    drawWheel(wheelRotation);
    if (t < 1) {
      wheelAnimFrame = requestAnimationFrame(animate);
    } else {
      wheelRotation = endRotation;
      drawWheel(wheelRotation);
      wheelSpinning = false;
      setTimeout(() => showWheelWin(WHEEL_SEGMENTS[winIdx]), 600);
    }
  }
  wheelAnimFrame = requestAnimationFrame(animate);
}

/* ── WIN ── */
function showWheelWin(seg) {
  const code = genCouponCode();
  const value = seg.value;
  activeCoupons[code] = value;
  currentPopupCoupon = { code, value };

  document.getElementById('wheelWinCode').textContent = code;
  document.getElementById('wheelWinValue').textContent = `🎉 Du hast ${value} € gewonnen!`;
  const winBox = document.getElementById('wheelWinBox');
  if (winBox) winBox.style.display = 'flex';

  const btn = document.getElementById('wheelSpinBtn');
  if (btn) { btn.textContent = `🎉 +${value} € gewonnen!`; }
}

function copyWheelCode() {
  const code = document.getElementById('wheelWinCode')?.textContent;
  if (!code) return;
  navigator.clipboard.writeText(code).catch(() => {});
  const btn = document.getElementById('wheelCopyBtn');
  if (btn) { btn.textContent = '✓ Kopiert!'; setTimeout(() => { btn.textContent = 'Kopieren'; }, 2000); }
  toast(`Code ${code} kopiert!`, 'success');
}

function useWheelCoupon() {
  const code = document.getElementById('wheelWinCode')?.textContent;
  if (!code) return;
  document.getElementById('couponInput').value = code;
  closeWheelModal();
  if (!document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
  setTimeout(() => applyCoupon(), 300);
}
