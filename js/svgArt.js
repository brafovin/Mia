/* =====================================================
   MIASHOP – Product SVG Illustrations
   Fashion-figure style – clothing worn by a person
   ===================================================== */

function _adj(hex, amt) {
  let n = parseInt(hex.replace('#',''), 16);
  let r = Math.min(255, Math.max(0, (n >> 16) + amt));
  let g = Math.min(255, Math.max(0, ((n >> 8) & 0xff) + amt));
  let b = Math.min(255, Math.max(0, (n & 0xff) + amt));
  return `rgb(${r},${g},${b})`;
}
function _hex(hex) { return hex.startsWith('#') ? hex : '#' + hex; }
function _bg(hex) {
  // Auto-derive a soft background from the garment color
  let n = parseInt(_hex(hex).replace('#',''), 16);
  let r = Math.min(255, (n >> 16) + 90);
  let g = Math.min(255, ((n >> 8) & 0xff) + 90);
  let b = Math.min(255, (n & 0xff) + 90);
  return [`rgb(${r},${g},${b})`, `rgb(${r-15},${g-15},${b-15})`];
}

/* ── SHARED DEFS ── */
function _defs(id, c) {
  const h = _hex(c);
  return `<defs>
    <linearGradient id="fab${id}" x1="0.15" y1="0" x2="0.9" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0%"   stop-color="${_adj(h, 40)}"/>
      <stop offset="40%"  stop-color="${h}"/>
      <stop offset="100%" stop-color="${_adj(h,-50)}"/>
    </linearGradient>
    <linearGradient id="fab2${id}" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0%"   stop-color="${_adj(h, 55)}"/>
      <stop offset="100%" stop-color="${_adj(h, 10)}"/>
    </linearGradient>
    <filter id="drp${id}" x="-10%" y="-5%" width="130%" height="130%">
      <feDropShadow dx="0" dy="5" stdDeviation="7" flood-opacity="0.13"/>
    </filter>
  </defs>`;
}
function _wrap(viewBox, bg1, bg2, inner) {
  return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
  <defs>
    <linearGradient id="bgG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${bg1}"/><stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgG)"/>
  ${inner}
</svg>`;
}

/* ── HUMAN FIGURE HELPERS ── */

// Randomize skin + hair slightly for each render (visual variety)
function _figColors() {
  const skins = ['#f5c8a0','#edb888','#d4956a','#c07848','#8a5030'];
  const hairs = ['#1a0c06','#2e1808','#6b3a1f','#c8a030','#e0c878','#555555','#222222'];
  const s = skins[Math.floor(Math.random() * skins.length)];
  const h = hairs[Math.floor(Math.random() * hairs.length)];
  return { skin: s, hair: h };
}

// Head + neck + hair at top of image (head center ≈ y=52)
function _figHead(skin, hair, style) {
  // style: 'long' | 'bob' | 'bun' | 'short'
  const s = skin; const hc = hair;
  let hp = '';
  if (style === 'long') {
    hp = `<path d="M 113 52 C 107 70 105 98 107 130 L 111 158 C 120 150 130 146 140 146
               C 150 146 160 150 169 158 L 173 130 C 175 98 173 70 167 52
               C 159 36 121 36 113 52 Z" fill="${hc}"/>
          <ellipse cx="140" cy="38" rx="27" ry="21" fill="${hc}"/>`;
  } else if (style === 'bob') {
    hp = `<path d="M 114 50 C 110 66 110 88 113 110 L 167 110 C 170 88 170 66 166 50
               C 158 36 122 36 114 50 Z" fill="${hc}"/>
          <ellipse cx="140" cy="36" rx="27" ry="20" fill="${hc}"/>`;
  } else if (style === 'bun') {
    hp = `<ellipse cx="140" cy="24" rx="16" ry="14" fill="${hc}"/>
          <ellipse cx="140" cy="32" rx="22" ry="14" fill="${hc}"/>
          <path d="M 113 50 C 112 38 118 34 140 33 C 162 34 168 38 167 50 Z" fill="${hc}"/>`;
  } else {
    hp = `<ellipse cx="140" cy="36" rx="27" ry="19" fill="${hc}"/>
          <path d="M 113 52 Q 113 43 140 37 Q 167 43 167 52 Z" fill="${hc}"/>`;
  }
  return `${hp}
    <ellipse cx="140" cy="60" rx="25" ry="29" fill="${s}"/>
    <ellipse cx="131" cy="56" rx="3.8" ry="4.5" fill="#fff"/>
    <ellipse cx="149" cy="56" rx="3.8" ry="4.5" fill="#fff"/>
    <ellipse cx="131" cy="57" rx="2.3" ry="3.1" fill="#2a1008"/>
    <ellipse cx="149" cy="57" rx="2.3" ry="3.1" fill="#2a1008"/>
    <circle cx="132" cy="55" r="0.9" fill="rgba(255,255,255,0.85)"/>
    <circle cx="150" cy="55" r="0.9" fill="rgba(255,255,255,0.85)"/>
    <path d="M 123 49 Q 131 46 137 48" fill="none" stroke="${hc}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 143 48 Q 149 46 157 49" fill="none" stroke="${hc}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 137 66 Q 135 72 134 74 Q 140 76 146 74 Q 145 72 143 66" fill="none" stroke="${_adj(s,-28)}" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M 133 80 Q 140 77 147 80" fill="none" stroke="${_adj(s,-55)}" stroke-width="2" stroke-linecap="round"/>
    <path d="M 133 80 Q 140 85 147 80" fill="${_adj(s,-20)}" opacity="0.5"/>
    <ellipse cx="122" cy="72" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
    <ellipse cx="158" cy="72" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
    <path d="M 130 87 C 129 100 129 110 130 118 L 150 118 C 151 110 151 100 150 87 Z" fill="${s}"/>`;
}

// Bare arms (drawn after garment so they're at the sides)
function _figArmsBare(skin, topY) {
  const ty = topY || 148;
  return `<path d="M 82 ${ty} C 70 ${ty+16} 60 ${ty+48} 55 ${ty+82} C 51 ${ty+106} 51 ${ty+132} 54 ${ty+154} L 55 ${ty+170}" fill="none" stroke="${skin}" stroke-width="22" stroke-linecap="round"/>
    <ellipse cx="55" cy="${ty+182}" rx="11" ry="13" fill="${skin}"/>
    <path d="M 198 ${ty} C 210 ${ty+16} 220 ${ty+48} 225 ${ty+82} C 229 ${ty+106} 229 ${ty+132} 226 ${ty+154} L 225 ${ty+170}" fill="none" stroke="${skin}" stroke-width="22" stroke-linecap="round"/>
    <ellipse cx="225" cy="${ty+182}" rx="11" ry="13" fill="${skin}"/>`;
}

// Long sleeve arms (garment color)
function _figArmsLong(skin, color, topY) {
  const ty = topY || 148; const c2 = _hex(color || '#555');
  return `<path d="M 80 ${ty} C 68 ${ty+14} 57 ${ty+46} 51 ${ty+80} C 47 ${ty+105} 47 ${ty+130} 50 ${ty+153} L 51 ${ty+170}" fill="none" stroke="${c2}" stroke-width="26" stroke-linecap="round"/>
    <ellipse cx="51" cy="${ty+182}" rx="11" ry="13" fill="${skin}"/>
    <path d="M 200 ${ty} C 212 ${ty+14} 223 ${ty+46} 229 ${ty+80} C 233 ${ty+105} 233 ${ty+130} 230 ${ty+153} L 229 ${ty+170}" fill="none" stroke="${c2}" stroke-width="26" stroke-linecap="round"/>
    <ellipse cx="229" cy="${ty+182}" rx="11" ry="13" fill="${skin}"/>`;
}

// Visible legs (skin-colored, below garment hemline)
function _figLegs(skin, startY, endY) {
  const ey = endY || (startY + 70);
  return `<path d="M 117 ${startY} C 115 ${startY+22} 114 ${startY+45} 113 ${ey}" fill="none" stroke="${skin}" stroke-width="28" stroke-linecap="round"/>
    <path d="M 163 ${startY} C 165 ${startY+22} 166 ${startY+45} 167 ${ey}" fill="none" stroke="${skin}" stroke-width="28" stroke-linecap="round"/>`;
}

// Upper torso skin (for pants/shoes – shows bare shoulders+chest above garment)
function _figTorso(skin, topY, bottomY) {
  return `<path d="M 88 ${topY} C 76 ${topY+12} 70 ${topY+28} 68 ${topY+50} L 68 ${bottomY} L 212 ${bottomY} L 212 ${topY+50} C 210 ${topY+28} 204 ${topY+12} 192 ${topY} Q 170 ${topY-10} 140 ${topY-10} Q 110 ${topY-10} 88 ${topY} Z" fill="${skin}" opacity="0.9"/>`;
}

/* ══════════════════════════════════════════════
   BODYSUITS
   ══════════════════════════════════════════════ */

/* Tank / Spaghetti Strap Bodysuit */
function bodysuitTank(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsBare(fc.skin, 148)}
  ${_figLegs(fc.skin, 360, 450)}
  <g transform="translate(0,40)">
    <rect x="119" y="28" width="11" height="42" rx="5.5" fill="url(#fab${id})"/>
    <rect x="150" y="28" width="11" height="42" rx="5.5" fill="url(#fab${id})"/>
    <path d="M 121 66 Q 140 97 159 66 C 177 67 200 78 211 97 C 220 113 218 134 214 152
      L 207 192 L 200 242 L 196 296 C 194 312 188 321 182 323 L 140 325 L 98 323
      C 92 321 86 312 84 296 L 80 242 L 73 192 L 66 152 C 62 134 60 113 69 97
      C 80 78 103 67 121 66 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <path d="M 121 70 C 130 90 129 210 131 295 L 126 322 C 124 290 125 210 118 88 Z" fill="rgba(255,255,255,0.11)"/>
    <path d="M 140 99 L 140 322" stroke="rgba(0,0,0,0.05)" stroke-width="1" stroke-dasharray="3 4"/>
    <circle cx="132" cy="321" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="322" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="321" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'long')}
  `);
}

/* V-Neck Bodysuit */
function bodysuitVneck(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsBare(fc.skin, 150)}
  ${_figLegs(fc.skin, 362, 450)}
  <g transform="translate(0,40)">
    <path d="M 118 72 C 105 72 84 82 72 100 C 62 115 62 138 67 158
      L 73 198 L 78 248 L 82 298 C 83 314 88 322 94 324 L 140 326 L 186 324
      C 192 322 197 314 198 298 L 202 248 L 207 198 L 213 158 C 218 138 218 115
      208 100 C 196 82 175 72 162 72 L 140 130 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <path d="M 118 72 L 140 130 L 162 72 L 155 68 L 140 118 L 125 68 Z" fill="${_adj(h,-35)}"/>
    <path d="M 115 80 C 124 100 122 215 124 300 L 119 322 C 117 288 119 215 111 95 Z" fill="rgba(255,255,255,0.10)"/>
    <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'long')}
  `);
}

/* Long Sleeve Bodysuit */
function bodysuitLong(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsLong(fc.skin, h, 135)}
  ${_figLegs(fc.skin, 360, 450)}
  <g transform="translate(0,40)">
    <path d="M 80 95 C 70 100 58 118 50 148 C 44 170 43 200 45 225 C 46 240 50 255 55 262
      C 60 268 66 270 70 268 C 75 265 78 260 80 252 L 82 220 L 80 178 L 79 138 Z" fill="url(#fab${id})"/>
    <path d="M 60 115 C 55 135 52 175 53 225 L 49 225 C 48 175 51 135 57 112 Z" fill="rgba(255,255,255,0.10)"/>
    <path d="M 200 95 C 210 100 222 118 230 148 C 236 170 237 200 235 225 C 234 240 230 255 225 262
      C 220 268 214 270 210 268 C 205 265 202 260 200 252 L 198 220 L 200 178 L 201 138 Z" fill="url(#fab${id})"/>
    <path d="M 220 115 C 225 135 228 175 227 225 L 231 225 C 232 175 229 135 223 112 Z" fill="rgba(255,255,255,0.10)"/>
    <path d="M 120 68 Q 140 88 160 68 C 178 68 200 78 210 95
      L 200 138 L 198 190 L 196 245 L 193 295 C 192 313 186 322 180 324
      L 140 326 L 100 324 C 94 322 88 313 87 295 L 84 245 L 82 190 L 80 138
      L 70 95 C 80 78 102 68 120 68 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <path d="M 118 72 C 127 92 126 215 128 298 L 123 322 C 121 288 122 215 116 90 Z" fill="rgba(255,255,255,0.11)"/>
    <path d="M 118 68 Q 140 58 162 68 L 164 90 Q 152 83 140 82 Q 128 83 116 90 Z" fill="${_adj(h,-20)}" opacity="0.7"/>
    <path d="M 140 88 L 140 322" stroke="rgba(0,0,0,0.05)" stroke-width="1" stroke-dasharray="3 4"/>
    <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'bun')}
  `);
}

/* Ribbed Bodysuit */
function bodysuitRibbed(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  let ribs = '';
  for (let y = 100; y < 320; y += 8) {
    ribs += `<line x1="80" y1="${y}" x2="200" y2="${y}" stroke="rgba(0,0,0,0.06)" stroke-width="1.5"/>`;
  }
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsBare(fc.skin, 148)}
  ${_figLegs(fc.skin, 362, 450)}
  <g transform="translate(0,40)">
    <rect x="120" y="28" width="12" height="44" rx="6" fill="url(#fab${id})"/>
    <rect x="148" y="28" width="12" height="44" rx="6" fill="url(#fab${id})"/>
    <defs><clipPath id="cp${id}">
      <path d="M 122 68 Q 140 98 158 68 C 176 68 200 79 211 98 C 221 115 219 136 214 155
        L 207 195 L 200 244 L 196 296 C 194 312 188 322 182 324 L 140 326 L 98 324
        C 92 322 86 312 84 296 L 80 244 L 73 195 L 66 155 C 61 136 59 115 69 98
        C 80 79 104 68 122 68 Z"/>
    </clipPath></defs>
    <path d="M 122 68 Q 140 98 158 68 C 176 68 200 79 211 98 C 221 115 219 136 214 155
      L 207 195 L 200 244 L 196 296 C 194 312 188 322 182 324 L 140 326 L 98 324
      C 92 322 86 312 84 296 L 80 244 L 73 195 L 66 155 C 61 136 59 115 69 98
      C 80 79 104 68 122 68 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <g clip-path="url(#cp${id})">${ribs}</g>
    <path d="M 122 70 C 131 90 130 215 132 296 L 127 322 C 125 290 126 215 119 88 Z" fill="rgba(255,255,255,0.12)"/>
    <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'bob')}
  `);
}

/* Cut-Out Bodysuit */
function bodysuitCutout(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsBare(fc.skin, 148)}
  ${_figLegs(fc.skin, 360, 450)}
  <g transform="translate(0,40)">
    <path d="M 120 66 Q 140 95 160 66 C 178 67 202 78 212 97 C 222 116 220 138 215 157
      L 210 185 L 200 192 L 182 196 L 140 197 L 98 196 L 80 192 L 70 185 L 65 157
      C 60 138 58 116 68 97 C 78 78 102 67 120 66 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <path d="M 100 198 L 180 198 L 182 230 C 182 238 178 244 140 246 C 102 244 98 238 98 230 Z" fill="${fc.skin}" opacity="0.6"/>
    <path d="M 98 230 C 97 237 97 244 98 250 L 82 265 L 80 298 C 80 314 86 322 92 324
      L 140 326 L 188 324 C 194 322 200 314 200 298 L 198 265 L 182 250
      C 183 244 183 237 182 230 C 178 248 162 250 140 250 C 118 250 102 248 98 230 Z" fill="url(#fab${id})"/>
    <rect x="120" y="26" width="12" height="42" rx="6" fill="url(#fab${id})"/>
    <rect x="148" y="26" width="12" height="42" rx="6" fill="url(#fab${id})"/>
    <path d="M 118 70 C 127 90 126 180 128 192 L 124 195 C 122 182 123 90 116 88 Z" fill="rgba(255,255,255,0.11)"/>
    <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'long')}
  `);
}

/* Lace Bodysuit */
function bodysuitLace(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  let lace = '';
  for (let y = 85; y < 325; y += 16) {
    for (let x = 80; x < 205; x += 16) {
      const lcx = x + ((Math.floor((y - 85) / 16) % 2) * 8);
      lace += `<path d="M ${lcx} ${y} L ${lcx+5} ${y+8} L ${lcx} ${y+16} L ${lcx-5} ${y+8} Z" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="0.8"/>`;
    }
  }
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsBare(fc.skin, 148)}
  ${_figLegs(fc.skin, 362, 450)}
  <g transform="translate(0,40)">
    <rect x="121" y="30" width="9" height="44" rx="4.5" fill="url(#fab${id})"/>
    <rect x="150" y="30" width="9" height="44" rx="4.5" fill="url(#fab${id})"/>
    <defs><clipPath id="lcp${id}">
      <path d="M 122 70 Q 140 100 158 70 C 177 70 201 81 212 100 C 222 117 220 139 215 158
        L 208 198 L 201 248 L 197 298 C 195 314 189 323 183 325 L 140 327 L 97 325
        C 91 323 85 314 83 298 L 79 248 L 72 198 L 65 158 C 60 139 58 117 68 100
        C 79 81 103 70 122 70 Z"/>
    </clipPath></defs>
    <path d="M 122 70 Q 140 100 158 70 C 177 70 201 81 212 100 C 222 117 220 139 215 158
      L 208 198 L 201 248 L 197 298 C 195 314 189 323 183 325 L 140 327 L 97 325
      C 91 323 85 314 83 298 L 79 248 L 72 198 L 65 158 C 60 139 58 117 68 100
      C 79 81 103 70 122 70 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <g clip-path="url(#lcp${id})" opacity="0.85">${lace}</g>
    <path d="M 122 72 C 131 95 130 218 132 298 L 127 323 C 125 290 126 218 118 92 Z" fill="rgba(255,255,255,0.14)"/>
    <path d="M 122 70 Q 140 100 158 70" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="3" stroke-dasharray="2 3"/>
    <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'long')}
  `);
}

/* Square Neck Bodysuit */
function bodysuitSquare(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsBare(fc.skin, 150)}
  ${_figLegs(fc.skin, 362, 450)}
  <g transform="translate(0,40)">
    <rect x="114" y="28" width="16" height="50" rx="2" fill="url(#fab${id})"/>
    <rect x="150" y="28" width="16" height="50" rx="2" fill="url(#fab${id})"/>
    <path d="M 114 74 L 166 74 C 185 74 206 83 216 101 C 225 117 223 140 218 159
      L 212 198 L 205 248 L 200 298 C 198 314 192 323 186 325 L 140 327 L 94 325
      C 88 323 82 314 80 298 L 75 248 L 68 198 L 62 159 C 57 140 55 117 64 101
      C 74 83 95 74 114 74 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <path d="M 114 74 L 114 90 L 166 90 L 166 74" fill="none" stroke="${_adj(h,-30)}" stroke-width="1.5"/>
    <path d="M 112 78 C 122 100 120 218 122 298 L 117 323 C 115 288 116 218 108 96 Z" fill="rgba(255,255,255,0.11)"/>
    <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'bob')}
  `);
}

/* Wrap / Ruched Bodysuit */
function bodysuitWrap(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  let ruches = '';
  for (let i = 0; i < 8; i++) {
    const y1 = 80 + i * 30; const y2 = y1 + 18;
    ruches += `<path d="M 142 ${y1} C 146 ${y1+5} 148 ${y1+10} 144 ${y1+15} C 140 ${y1+20} 136 ${y1+15} 138 ${y2}" fill="none" stroke="rgba(0,0,0,0.07)" stroke-width="1.5"/>`;
  }
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsBare(fc.skin, 148)}
  ${_figLegs(fc.skin, 360, 450)}
  <g transform="translate(0,40)">
    <rect x="118" y="28" width="12" height="44" rx="6" fill="url(#fab${id})"/>
    <rect x="150" y="28" width="12" height="44" rx="6" fill="url(#fab${id})"/>
    <path d="M 120 68 Q 140 96 160 68 C 178 68 202 79 213 98 C 223 117 221 139 216 158
      L 209 198 L 202 248 L 198 298 C 196 314 190 323 184 325 L 140 327 L 96 325
      C 90 323 84 314 82 298 L 78 248 L 71 198 L 64 158 C 59 139 57 117 67 98
      C 78 79 102 68 120 68 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <path d="M 120 70 C 135 130 138 195 140 280" fill="none" stroke="${_adj(h,-25)}" stroke-width="2" opacity="0.5"/>
    <path d="M 160 70 C 145 130 142 195 140 280" fill="none" stroke="${_adj(h,-25)}" stroke-width="2" opacity="0.5"/>
    <g>${ruches}</g>
    <path d="M 118 72 C 128 92 127 218 129 298 L 124 322 C 122 288 123 218 116 90 Z" fill="rgba(255,255,255,0.11)"/>
    <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'long')}
  `);
}

/* Off-Shoulder Bodysuit */
function bodysuitOffShoulder(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 460', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="452" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Bare shoulders and upper arms visible above band -->
  <path d="M 52 155 C 48 172 47 195 50 215 L 51 230" fill="none" stroke="${fc.skin}" stroke-width="22" stroke-linecap="round"/>
  <ellipse cx="51" cy="242" rx="10" ry="12" fill="${fc.skin}"/>
  <path d="M 228 155 C 232 172 233 195 230 215 L 229 230" fill="none" stroke="${fc.skin}" stroke-width="22" stroke-linecap="round"/>
  <ellipse cx="229" cy="242" rx="10" ry="12" fill="${fc.skin}"/>
  <!-- Bare shoulder tops -->
  <path d="M 56 135 C 46 140 40 150 40 160 L 82 158 C 74 145 68 138 56 135 Z" fill="${fc.skin}"/>
  <path d="M 224 135 C 234 140 240 150 240 160 L 198 158 C 206 145 212 138 224 135 Z" fill="${fc.skin}"/>
  ${_figLegs(fc.skin, 360, 450)}
  <g transform="translate(0,40)">
    <path d="M 58 98 C 75 88 105 80 140 78 C 175 80 205 88 222 98 L 222 120 C 205 110 175 104 140 102 C 105 104 75 110 58 120 Z" fill="url(#fab${id})"/>
    <path d="M 58 118 C 75 108 105 102 140 100 C 175 102 205 108 222 118
      L 220 155 L 215 198 L 208 248 L 202 298 C 200 314 194 323 188 325
      L 140 327 L 92 325 C 86 323 80 314 78 298 L 72 248 L 65 198 L 60 155 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
    <path d="M 62 120 C 72 145 70 220 72 298 L 67 322 C 65 288 67 220 60 140 Z" fill="rgba(255,255,255,0.10)"/>
    <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
    <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'long')}
  `);
}

/* ── HANGER HELPER ── */
function _figHanger() {
  const metal = '#8a8a8a';
  const wood  = '#1e1810';
  const whl   = 'rgba(255,255,255,0.13)';
  return `
  <!-- Hook (metal) -->
  <path d="M 140 30 C 140 18 148 8 158 6 C 170 4 178 12 176 22 C 174 30 166 34 158 34 C 152 34 146 32 140 30"
    fill="none" stroke="${metal}" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Hook shadow -->
  <path d="M 141 32 C 141 20 149 10 159 8 C 171 6 179 14 177 24"
    fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="3" stroke-linecap="round"/>
  <!-- Hanger bar left arm -->
  <path d="M 140 30 C 128 30 108 34 86 44 C 66 52 50 60 46 66"
    fill="none" stroke="${wood}" stroke-width="11" stroke-linecap="round"/>
  <!-- Hanger bar right arm -->
  <path d="M 140 30 C 152 30 172 34 194 44 C 214 52 230 60 234 66"
    fill="none" stroke="${wood}" stroke-width="11" stroke-linecap="round"/>
  <!-- Sheen on left arm -->
  <path d="M 138 27 C 126 27 106 31 84 41 C 68 48 54 56 50 62"
    fill="none" stroke="${whl}" stroke-width="3" stroke-linecap="round"/>
  <!-- Sheen on right arm -->
  <path d="M 142 27 C 154 27 174 31 196 41 C 212 48 226 56 230 62"
    fill="none" stroke="${whl}" stroke-width="3" stroke-linecap="round"/>
  <!-- Center hub (where hook meets bar) -->
  <ellipse cx="140" cy="30" rx="10" ry="7" fill="${wood}"/>
  <ellipse cx="139" cy="28" rx="4" ry="2.5" fill="${whl}"/>`;
}

/* ══════════════════════════════════════════════
   DRESSES  (hanger / product-photo style)
   ══════════════════════════════════════════════ */

function dressMidi(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 425', b1, b2, `
  ${_defs(id, c)}
  <!-- Drop shadow under dress hem -->
  <ellipse cx="140" cy="418" rx="70" ry="7" fill="rgba(0,0,0,0.09)"/>
  ${_figHanger()}
  <!-- Dress: straps -->
  <rect x="120" y="26" width="10" height="42" rx="5" fill="url(#fab${id})"/>
  <rect x="150" y="26" width="10" height="42" rx="5" fill="url(#fab${id})"/>
  <!-- Bodice -->
  <path d="M 122 64 Q 140 92 158 64 C 174 64 198 76 209 94 C 218 110 216 132 212 150
    L 207 185 L 202 220 L 198 240 L 82 240 L 78 220 L 73 185 L 68 150
    C 64 132 62 110 71 94 C 82 76 106 64 122 64 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Skirt -->
  <path d="M 82 238 L 78 220 L 200 220 L 198 238
    C 196 260 192 290 186 320 C 180 350 174 375 170 400 L 110 400
    C 106 375 100 350 94 320 C 88 290 84 260 82 238 Z" fill="url(#fab${id})"/>
  <!-- Skirt sheen sides -->
  <path d="M 95 350 C 92 365 92 380 94 400 L 110 400 C 108 382 108 366 110 350 Z" fill="rgba(255,255,255,0.08)"/>
  <path d="M 185 350 C 188 365 188 380 186 400 L 170 400 C 172 382 172 366 170 350 Z" fill="rgba(255,255,255,0.08)"/>
  <!-- Sheen -->
  <path d="M 122 66 C 130 86 128 215 130 395 L 125 398 C 123 215 124 86 118 86 Z" fill="rgba(255,255,255,0.11)"/>
  <!-- Waist seam -->
  <line x1="82" y1="238" x2="198" y2="238" stroke="rgba(0,0,0,0.07)" stroke-width="1.5"/>
  `);
}

function dressMaxi(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 492', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="485" rx="80" ry="7" fill="rgba(0,0,0,0.09)"/>
  ${_figHanger()}
  <!-- Straps -->
  <rect x="121" y="27" width="11" height="43" rx="5.5" fill="url(#fab${id})"/>
  <rect x="148" y="27" width="11" height="43" rx="5.5" fill="url(#fab${id})"/>
  <!-- Bodice -->
  <path d="M 122 66 Q 140 94 158 66 C 175 66 198 77 209 95 C 218 111 216 133 212 151
    L 207 186 L 202 222 L 198 242 L 82 242 L 78 222 L 73 186 L 68 151
    C 64 133 62 111 71 95 C 82 77 105 66 122 66 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Long flowing skirt -->
  <path d="M 80 240 L 200 240 L 206 288 C 210 320 212 358 210 418 L 210 438
    L 70 438 L 70 418 C 68 358 70 320 74 288 Z" fill="url(#fab${id})"/>
  <!-- Skirt volume -->
  <path d="M 80 320 C 78 352 76 395 74 430 L 82 435 C 84 398 86 355 88 322 Z" fill="rgba(0,0,0,0.04)"/>
  <path d="M 200 320 C 202 352 204 395 206 430 L 198 435 C 196 398 194 355 192 322 Z" fill="rgba(0,0,0,0.04)"/>
  <!-- Sheen -->
  <path d="M 122 68 C 130 90 128 225 130 430 L 125 436 C 123 225 124 90 118 88 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Waist seam -->
  <line x1="82" y1="240" x2="198" y2="240" stroke="rgba(0,0,0,0.07)" stroke-width="1.5"/>
  `);
}

function dressShort(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 382', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="375" rx="65" ry="7" fill="rgba(0,0,0,0.09)"/>
  ${_figHanger()}
  <!-- Straps -->
  <rect x="122" y="28" width="11" height="40" rx="5.5" fill="url(#fab${id})"/>
  <rect x="147" y="28" width="11" height="40" rx="5.5" fill="url(#fab${id})"/>
  <!-- Bodice + A-line skirt -->
  <path d="M 122 64 Q 140 92 158 64 C 175 64 198 75 209 93 C 218 109 216 131 212 149
    L 207 180 L 202 210 L 200 230
    C 200 255 195 290 188 345 L 188 362 L 92 362 L 92 345
    C 85 290 80 255 80 230 L 78 210 L 73 180 L 68 149
    C 64 131 62 109 71 93 C 82 75 105 64 122 64 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Skirt volume sheen -->
  <path d="M 82 232 C 80 258 78 285 82 345 L 92 362 C 90 340 88 312 90 282 C 92 260 90 246 84 232 Z" fill="rgba(255,255,255,0.08)"/>
  <!-- Waist seam -->
  <line x1="82" y1="230" x2="198" y2="230" stroke="rgba(0,0,0,0.07)" stroke-width="1.5"/>
  <!-- Sheen -->
  <path d="M 122 66 C 130 86 129 210 130 355 L 125 360 C 123 210 124 86 118 84 Z" fill="rgba(255,255,255,0.11)"/>
  `);
}

// Sequin / Paillettenkleid (inspired by photo – sheer top, sparkle body, satin hem, bow belt)
function dressSequin(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  // Generate many glitter sparkle dots
  const sparkles = Array.from({length:120}, () => {
    const sx = 72 + Math.random()*136;
    const sy = 90 + Math.random()*210;
    const sr = 0.8 + Math.random()*2.2;
    const op = 0.3 + Math.random()*0.7;
    return `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${sr.toFixed(1)}" fill="rgba(255,255,255,${op.toFixed(2)})"/>`;
  }).join('');
  const crossSparkles = Array.from({length:30}, () => {
    const sx = 75 + Math.random()*130;
    const sy = 92 + Math.random()*205;
    return `<path d="M ${(sx-3).toFixed(0)} ${sy.toFixed(0)} L ${(sx+3).toFixed(0)} ${sy.toFixed(0)} M ${sx.toFixed(0)} ${(sy-3).toFixed(0)} L ${sx.toFixed(0)} ${(sy+3).toFixed(0)}" stroke="rgba(255,255,255,0.8)" stroke-width="1" stroke-linecap="round"/>`;
  }).join('');
  return _wrap('0 0 280 382', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="375" rx="62" ry="7" fill="rgba(0,0,0,0.10)"/>
  ${_figHanger()}
  <!-- Sheer / mesh neckline area (semi-transparent) -->
  <path d="M 106 66 C 100 66 88 72 80 82 L 80 96 L 200 96 L 200 82 C 192 72 180 66 174 66 L 140 68 Z"
    fill="${h}" opacity="0.38"/>
  <!-- Sheer mesh texture dots -->
  ${Array.from({length:24},(_,i)=>{const mx=88+Math.floor(i%8)*14; const my=70+(Math.floor(i/8))*10; return `<circle cx="${mx}" cy="${my}" r="1.2" fill="rgba(255,255,255,0.18)"/>`;}).join('')}
  <!-- Main sequin bodice -->
  <path d="M 80 94 C 72 108 68 124 68 142 L 70 180 L 72 220 L 80 240 L 200 240 L 208 220 L 210 180 L 212 142 C 212 124 208 108 200 94 Z"
    fill="${_adj(h,-15)}" filter="url(#drp${id})"/>
  <!-- Sequin sparkle layer on bodice -->
  ${sparkles}
  ${crossSparkles}
  <!-- Satin belt / bow -->
  <rect x="78" y="235" width="124" height="12" rx="3" fill="${_adj(h,-30)}" opacity="0.95"/>
  <!-- Bow left loop -->
  <path d="M 120 241 C 112 232 104 232 106 238 C 108 244 118 246 120 241 Z" fill="${_adj(h,-25)}"/>
  <!-- Bow right loop -->
  <path d="M 160 241 C 168 232 176 232 174 238 C 172 244 162 246 160 241 Z" fill="${_adj(h,-25)}"/>
  <!-- Bow center knot -->
  <ellipse cx="140" cy="241" rx="8" ry="6" fill="${_adj(h,-20)}"/>
  <!-- Bow tails -->
  <path d="M 136 244 C 130 252 126 260 124 268" fill="none" stroke="${_adj(h,-28)}" stroke-width="4" stroke-linecap="round"/>
  <path d="M 144 244 C 150 252 154 260 156 268" fill="none" stroke="${_adj(h,-28)}" stroke-width="4" stroke-linecap="round"/>
  <!-- Satin hem panel -->
  <path d="M 80 248 L 200 248 C 200 255 195 290 188 340 L 188 360 L 92 360 L 92 340 C 85 290 80 255 80 248 Z"
    fill="${_adj(h,-10)}" opacity="0.88"/>
  <!-- Satin hem sheen -->
  <path d="M 84 250 C 82 272 80 305 82 345 L 92 360 C 90 338 89 308 90 278 C 90 262 88 254 84 250 Z" fill="rgba(255,255,255,0.12)"/>
  <!-- Hem sparkle line -->
  ${Array.from({length:15},(_,i)=>`<circle cx="${92+i*8}" cy="250" r="1.8" fill="rgba(255,255,255,0.55)"/>`).join('')}
  `);
}

// Cocktail wrap dress (elegant)
function dressCocktail(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 400', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="393" rx="68" ry="7" fill="rgba(0,0,0,0.09)"/>
  ${_figHanger()}
  <!-- V-neck wrap bodice left panel -->
  <path d="M 80 72 C 72 82 68 96 66 112 L 68 155 L 72 195 L 78 230 L 140 230 L 140 90 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- V-neck wrap bodice right panel -->
  <path d="M 200 72 C 208 82 212 96 214 112 L 212 155 L 208 195 L 202 230 L 140 230 L 140 90 Z"
    fill="url(#fab2${id})"/>
  <!-- V-neck cutout shadow -->
  <path d="M 120 74 L 140 110 L 160 74 C 155 68 148 64 140 64 C 132 64 125 68 120 74 Z" fill="rgba(0,0,0,0.15)"/>
  <!-- Belt / sash tie -->
  <rect x="68" y="224" width="144" height="14" rx="4" fill="${_adj(h,-22)}" opacity="0.9"/>
  <!-- Sash knot left -->
  <path d="M 82 231 C 74 224 66 224 68 230 C 70 236 80 238 82 231 Z" fill="${_adj(h,-18)}"/>
  <!-- Sash tail -->
  <path d="M 78 236 C 72 246 68 260 66 276" fill="none" stroke="${_adj(h,-22)}" stroke-width="10" stroke-linecap="round" opacity="0.85"/>
  <!-- A-line skirt -->
  <path d="M 78 236 L 80 270 C 78 295 74 325 70 372 L 70 382 L 210 382 L 210 372 C 206 325 202 295 200 270 L 202 236 Z"
    fill="url(#fab${id})"/>
  <!-- Skirt left sheen -->
  <path d="M 78 242 C 76 270 74 320 72 372 L 80 380 C 82 330 84 282 84 255 C 84 248 82 244 78 242 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Skirt right shadow -->
  <path d="M 202 242 C 204 270 206 320 208 372 L 200 380 C 198 330 196 282 196 255 C 196 248 198 244 202 242 Z" fill="rgba(0,0,0,0.04)"/>
  <!-- Sheen on bodice -->
  <path d="M 74 80 C 72 105 70 150 72 222 L 68 224 C 66 150 68 104 72 78 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

// Bodycon Ruched Long-Sleeve Dress (high mock neck, side ruching, midi length)
function dressBodycon(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  // Side ruching – horizontal curved folds on both sides
  let ruching = '';
  for (let i = 0; i < 18; i++) {
    const ry = 155 + i * 16;
    const depth = 4 + (i % 3) * 2;
    ruching += `<path d="M 82 ${ry} C 78 ${ry + depth} 76 ${ry + depth + 4} 80 ${ry + 8}" fill="none" stroke="rgba(0,0,0,0.09)" stroke-width="1.2" stroke-linecap="round"/>`;
    ruching += `<path d="M 198 ${ry} C 202 ${ry + depth} 204 ${ry + depth + 4} 200 ${ry + 8}" fill="none" stroke="rgba(0,0,0,0.09)" stroke-width="1.2" stroke-linecap="round"/>`;
    ruching += `<path d="M 85 ${ry + 4} C 82 ${ry + 8} 81 ${ry + 12} 84 ${ry + 14}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.9" stroke-linecap="round"/>`;
    ruching += `<path d="M 195 ${ry + 4} C 198 ${ry + 8} 199 ${ry + 12} 196 ${ry + 14}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.9" stroke-linecap="round"/>`;
  }
  return _wrap('0 0 280 520', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="513" rx="55" ry="7" fill="rgba(0,0,0,0.09)"/>
  <!-- Long sleeves (drawn behind body) -->
  ${_figArmsLong(fc.skin, h, 133)}
  <g transform="translate(0,40)">
    <!-- Mock / high turtle neck -->
    <path d="M 118 36 C 118 26 126 20 140 20 C 154 20 162 26 162 36 L 162 58 L 118 58 Z"
      fill="url(#fab${id})"/>
    <path d="M 120 38 C 120 30 127 25 140 25 C 153 25 160 30 160 38 L 160 56 L 120 56 Z"
      fill="${_adj(h, -8)}" opacity="0.7"/>
    <!-- Neck seam line -->
    <line x1="118" y1="56" x2="162" y2="56" stroke="${_adj(h,-18)}" stroke-width="1.2" opacity="0.6"/>
    <!-- Fitted bodice (hugs the curves) -->
    <path d="M 118 56 C 104 58 88 68 80 84 C 74 96 72 112 72 130 L 74 160 L 78 200 L 80 240
      L 200 240 L 202 200 L 206 160 L 208 130 C 208 112 206 96 200 84
      C 192 68 176 58 162 56 Z"
      fill="url(#fab${id})" filter="url(#drp${id})"/>
    <!-- Hourglass waist tuck -->
    <path d="M 74 165 C 76 172 80 178 84 180 L 80 200" fill="none" stroke="${_adj(h,-12)}" stroke-width="2" opacity="0.4"/>
    <path d="M 206 165 C 204 172 200 178 196 180 L 200 200" fill="none" stroke="${_adj(h,-12)}" stroke-width="2" opacity="0.4"/>
    <!-- Bodycon skirt (fitted, follows hip/thigh curve) -->
    <path d="M 80 238 C 78 258 76 282 76 308 C 76 338 80 368 84 400 C 88 428 90 450 90 470
      L 190 470 C 190 450 192 428 196 400 C 200 368 204 338 204 308
      C 204 282 202 258 200 238 Z"
      fill="url(#fab${id})"/>
    <!-- Hip curve accent (dress fits body) -->
    <path d="M 76 268 C 72 280 72 298 76 316" fill="none" stroke="${_adj(h,-15)}" stroke-width="2.5" opacity="0.3"/>
    <path d="M 204 268 C 208 280 208 298 204 316" fill="none" stroke="${_adj(h,-15)}" stroke-width="2.5" opacity="0.3"/>
    <!-- Side ruching texture -->
    ${ruching}
    <!-- Center front sheen (vertical) -->
    <path d="M 138 60 C 136 100 135 200 136 465 L 140 468 C 141 200 142 100 142 60 Z"
      fill="rgba(255,255,255,0.07)"/>
    <!-- Highlight on fitted shoulder/chest area -->
    <path d="M 118 60 C 110 68 104 80 102 96 L 100 120 C 100 106 104 90 112 78 C 116 72 118 68 122 64 Z"
      fill="rgba(255,255,255,0.10)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'bun')}
  `);
}

/* ══════════════════════════════════════════════
   TOPS / SHIRTS
   ══════════════════════════════════════════════ */

function topCrop(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  const jeans = '#2a4a7a';
  return _wrap('0 0 280 470', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="463" rx="60" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figArmsBare(fc.skin, 148)}
  <!-- Jeans below crop top -->
  <path d="M 88 312 L 88 450 C 90 456 96 462 104 463 L 134 464 L 134 312 Z" fill="${jeans}"/>
  <path d="M 192 312 L 192 450 C 190 456 184 462 176 463 L 146 464 L 146 312 Z" fill="${_adj(jeans,-12)}"/>
  <line x1="140" y1="312" x2="140" y2="464" stroke="rgba(0,0,0,0.12)" stroke-width="1.5"/>
  <rect x="86" y="272" width="108" height="26" rx="4" fill="${_adj(jeans,-20)}"/>
  <g transform="translate(0,40)">
  <rect x="121" y="32" width="12" height="40" rx="6" fill="url(#fab${id})"/>
  <rect x="147" y="32" width="12" height="40" rx="6" fill="url(#fab${id})"/>
  <path d="M 122 68 Q 140 96 158 68 C 176 68 200 79 211 97 C 221 114 219 136 214 155
    L 208 190 L 202 235 L 78 235 L 72 190 L 66 155
    C 61 136 59 114 69 97 C 80 79 104 68 122 68 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <path d="M 80 233 L 200 233" stroke="${_adj(h,-20)}" stroke-width="1.5" opacity="0.4"/>
  <path d="M 122 70 C 131 90 130 190 131 230 L 126 233 C 125 188 126 90 118 88 Z" fill="rgba(255,255,255,0.11)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'long')}
  `);
}

// Off-Shoulder Maxi Dress – draped satin collar, fitted column silhouette, side slit
function dressOffShoulder(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c);
  const sheen = 'rgba(255,255,255,0.16)';
  const dark  = 'rgba(0,0,0,0.26)';
  return _wrap('0 0 280 490', b1, b2, `
    ${_figHanger()}

    <!-- Main dress body: off-shoulder neckline to floor -->
    <path d="M 56 80 C 70 70 102 64 140 64 C 178 64 210 70 224 80
             L 228 132 L 230 188 C 230 218 220 242 200 254
             C 184 263 163 268 140 268
             C 117 268 96 263 80 254
             C 60 242 50 218 50 188
             L 52 132 Z" fill="${h}"/>

    <!-- Skirt: fitted column to floor -->
    <path d="M 80 254 C 72 268 65 294 62 328 L 59 378 L 58 462
             L 140 464 L 222 462 L 221 378 L 218 328
             C 215 294 208 268 200 254
             C 183 266 163 272 140 272
             C 117 272 97 266 80 254 Z" fill="${h}"/>

    <!-- Side slit (right) – cut opening from knee to hem -->
    <path d="M 220 372 L 220 462 L 207 462 L 203 372 Z" fill="${b1}" opacity="0.92"/>
    <path d="M 203 370 Q 212 366 220 370" fill="none" stroke="${h}" stroke-width="1.5" stroke-linecap="round"/>

    <!-- Draped off-shoulder collar: sweeps from right shoulder across chest -->
    <path d="M 220 70 C 212 62 197 57 179 57
             C 163 57 146 61 131 68
             C 114 75 99 84 89 91
             C 83 95 79 99 81 104
             C 84 109 93 110 106 108
             C 120 105 134 97 147 92
             C 160 87 174 84 190 85
             C 206 86 218 91 224 97
             L 228 87 C 228 79 225 73 220 70 Z" fill="${h}"/>

    <!-- Satin sheen highlight on collar fold -->
    <path d="M 216 72 C 206 65 192 61 176 62
             C 160 63 143 68 128 76
             C 115 83 103 92 95 96
             C 108 92 123 84 138 78
             C 153 72 169 69 185 69
             C 200 69 212 74 218 80 Z" fill="${sheen}" opacity="0.75"/>

    <!-- Collar fold underside shadow -->
    <path d="M 83 102 C 91 104 102 104 114 102
             C 127 100 140 93 153 88
             C 167 83 181 80 195 81
             C 209 82 220 88 226 94
             L 227 89 C 219 83 207 79 193 78
             C 178 77 163 80 149 86
             C 135 92 121 99 107 101
             C 96 103 87 101 82 97 Z" fill="${dark}" opacity="0.5"/>

    <!-- Left bodice vertical sheen -->
    <path d="M 62 86 L 66 90 L 69 262 L 63 260 Z" fill="${sheen}" opacity="0.32"/>

    <!-- Right bodice shadow -->
    <path d="M 218 86 L 214 90 L 211 262 L 217 260 Z" fill="${dark}" opacity="0.28"/>

    <!-- Center skirt highlight -->
    <path d="M 127 272 C 125 342 124 402 125 462 L 155 462 C 154 402 153 342 151 272 Z" fill="${sheen}" opacity="0.22"/>

    <!-- Waist–hip contour shadow left -->
    <path d="M 52 192 C 51 212 51 228 52 244 C 54 254 58 262 62 268
             L 67 259 C 62 252 59 244 58 233 C 57 220 57 206 58 190 Z" fill="${dark}" opacity="0.32"/>

    <!-- Waist–hip contour shadow right -->
    <path d="M 228 192 C 229 212 229 228 228 244 C 226 254 222 262 218 268
             L 213 259 C 218 252 221 244 222 233 C 223 220 223 206 222 190 Z" fill="${dark}" opacity="0.32"/>
  `);
}

function topShirt(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  const jeans = '#2a4a7a';
  return _wrap('0 0 280 490', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="483" rx="60" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Jeans below shirt hem -->
  <path d="M 88 412 L 88 470 C 90 476 96 482 104 483 L 134 484 L 134 412 Z" fill="${jeans}"/>
  <path d="M 192 412 L 192 470 C 190 476 184 482 176 483 L 146 484 L 146 412 Z" fill="${_adj(jeans,-12)}"/>
  <line x1="140" y1="412" x2="140" y2="484" stroke="rgba(0,0,0,0.12)" stroke-width="1.5"/>
  <rect x="86" y="372" width="108" height="26" rx="4" fill="${_adj(jeans,-20)}"/>
  <g transform="translate(0,40)">
  <path d="M 80 90 C 70 95 56 115 48 140 C 42 158 42 178 46 195 C 48 204 54 210 60 209 C 66 207 70 202 72 193 L 75 168 L 78 138 L 80 110 Z" fill="url(#fab${id})"/>
  <path d="M 200 90 C 210 95 224 115 232 140 C 238 158 238 178 234 195 C 232 204 226 210 220 209 C 214 207 210 202 208 193 L 205 168 L 202 138 L 200 110 Z" fill="url(#fab${id})"/>
  <path d="M 120 64 Q 140 88 160 64 C 178 64 200 76 210 92 L 200 108 L 198 175 L 194 250 L 192 335 L 88 335 L 86 250 L 82 175 L 80 108 L 70 92 C 80 76 102 64 120 64 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <line x1="140" y1="72" x2="140" y2="328" stroke="rgba(0,0,0,0.07)" stroke-width="1"/>
  <circle cx="140" cy="105" r="3" fill="rgba(0,0,0,0.18)"/>
  <circle cx="140" cy="130" r="3" fill="rgba(0,0,0,0.18)"/>
  <circle cx="140" cy="155" r="3" fill="rgba(0,0,0,0.18)"/>
  <path d="M 118 68 C 128 90 126 250 128 330 L 123 333 C 121 250 122 90 114 88 Z" fill="rgba(255,255,255,0.10)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'bun')}
  `);
}

/* ══════════════════════════════════════════════
   PANTS / JEANS
   ══════════════════════════════════════════════ */

function pants(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 490', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="483" rx="60" ry="7" fill="rgba(0,0,0,0.07)"/>
  ${_figTorso(fc.skin, 118, 165)}
  <g transform="translate(0,40)">
  <rect x="72" y="42" width="136" height="32" rx="4" fill="${_adj(h,-20)}"/>
  <rect x="95" y="38" width="7" height="18" rx="2" fill="${_adj(h,-35)}"/>
  <rect x="137" y="38" width="7" height="18" rx="2" fill="${_adj(h,-35)}"/>
  <rect x="178" y="38" width="7" height="18" rx="2" fill="${_adj(h,-35)}"/>
  <line x1="140" y1="73" x2="140" y2="130" stroke="rgba(0,0,0,0.15)" stroke-width="2"/>
  <path d="M 72 72 L 72 180 C 72 220 74 260 78 300 C 82 340 88 370 90 440 L 140 440
    L 140 185 L 138 73 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <path d="M 208 72 L 208 180 C 208 220 206 260 202 300 C 198 340 192 370 190 440 L 140 440
    L 140 185 L 142 73 Z"
    fill="url(#fab2${id})"/>
  <line x1="112" y1="80" x2="106" y2="438" stroke="rgba(0,0,0,0.06)" stroke-width="1.5"/>
  <line x1="168" y1="80" x2="174" y2="438" stroke="rgba(0,0,0,0.06)" stroke-width="1.5"/>
  <path d="M 82 80 C 82 100 92 112 104 115 L 104 80 Z" fill="${_adj(h,-15)}" opacity="0.4"/>
  <path d="M 86 80 C 92 130 90 310 92 432 L 87 438 C 85 310 87 130 82 78 Z" fill="rgba(255,255,255,0.09)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'short')}
  `);
}

/* ══════════════════════════════════════════════
   JACKET / BLAZER
   ══════════════════════════════════════════════ */

function blazer(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  const jeans = '#1e3a5f';
  return _wrap('0 0 280 490', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="483" rx="62" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Trousers under blazer -->
  <path d="M 96 430 L 96 470 C 98 476 104 482 112 483 L 134 484 L 134 430 Z" fill="${jeans}"/>
  <path d="M 184 430 L 184 470 C 182 476 176 482 168 483 L 146 484 L 146 430 Z" fill="${_adj(jeans,-12)}"/>
  <line x1="140" y1="430" x2="140" y2="484" stroke="rgba(0,0,0,0.12)" stroke-width="1.5"/>
  <g transform="translate(0,40)">
  <path d="M 140 68 L 120 110 L 110 160 L 140 130 Z" fill="${_adj(h,15)}"/>
  <path d="M 140 68 L 160 110 L 170 160 L 140 130 Z" fill="${_adj(h,10)}"/>
  <path d="M 72 98 C 60 108 52 132 48 158 C 44 180 44 205 48 225 C 50 237 56 244 63 243 C 70 241 74 234 76 224 L 78 195 L 80 162 L 78 128 Z" fill="url(#fab${id})"/>
  <path d="M 208 98 C 220 108 228 132 232 158 C 236 180 236 205 232 225 C 230 237 224 244 217 243 C 210 241 206 234 204 224 L 202 195 L 200 162 L 202 128 Z" fill="url(#fab${id})"/>
  <path d="M 116 66 C 102 66 78 78 68 96 L 72 126 L 75 170 L 80 230 L 82 355 L 110 355 L 140 130
    L 170 355 L 198 355 L 200 230 L 205 170 L 208 126 L 212 96 C 202 78 178 66 164 66
    L 140 68 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Front button -->
  <circle cx="140" cy="175" r="4.5" fill="rgba(0,0,0,0.2)"/>
  <!-- Pocket left -->
  <rect x="88" y="220" width="38" height="22" rx="3" fill="${_adj(h,-25)}" opacity="0.5"/>
  <!-- Pocket right -->
  <rect x="154" y="220" width="38" height="22" rx="3" fill="${_adj(h,-25)}" opacity="0.5"/>
  <path d="M 114 70 C 124 95 122 240 124 348 L 119 353 C 117 240 118 95 110 92 Z" fill="rgba(255,255,255,0.10)"/>
  </g>
  ${_figHead(fc.skin, fc.hair, 'bun')}
  `);
}

/* ══════════════════════════════════════════════
   SHOES
   ══════════════════════════════════════════════ */

function shoeSneaker(c, bg) {
  const [b1,b2] = bg || ['#f5f5f5','#e8e8e8']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  const sock = '#f8f8f8';
  return _wrap('0 0 280 340', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="148" cy="330" rx="95" ry="8" fill="rgba(0,0,0,0.09)"/>
  <!-- Legs above sneaker -->
  <path d="M 110 18 C 108 50 106 80 108 115" fill="none" stroke="${fc.skin}" stroke-width="30" stroke-linecap="round"/>
  <path d="M 170 18 C 172 50 174 80 172 115" fill="none" stroke="${fc.skin}" stroke-width="30" stroke-linecap="round"/>
  <!-- Socks -->
  <path d="M 95 110 L 125 108 L 125 135 L 95 135 Z" fill="${sock}"/>
  <path d="M 185 110 L 155 108 L 155 135 L 185 135 Z" fill="${sock}"/>
  <g transform="translate(0,100)">
  <path d="M 40 195 C 40 210 55 222 90 224 L 220 224 C 248 222 255 210 255 198 C 255 188 248 182 238 180 L 55 180 C 46 182 40 188 40 195 Z" fill="${_adj(h,-50)}"/>
  <path d="M 42 190 C 42 196 56 202 90 203 L 220 203 C 246 201 252 196 252 190 C 252 185 246 181 238 180 L 55 180 C 48 181 42 185 42 190 Z" fill="${_adj(h,60)}"/>
  <path d="M 58 180 C 55 165 54 148 58 132 C 62 118 72 108 85 102
    L 115 90 C 128 86 142 84 155 85 L 188 90 C 210 96 235 108 245 128
    C 252 145 252 164 250 180 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <path d="M 58 180 C 55 165 54 148 58 132 C 62 118 72 108 85 102 L 100 96 C 84 112 75 132 74 160 L 72 180 Z" fill="${_adj(h,25)}" opacity="0.6"/>
  <rect x="110" y="92" width="80" height="62" rx="5" fill="${_adj(h,50)}" opacity="0.4"/>
  <line x1="118" y1="100" x2="182" y2="104" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <line x1="116" y1="112" x2="180" y2="116" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <line x1="114" y1="124" x2="178" y2="128" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <line x1="112" y1="136" x2="176" y2="140" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <path d="M 200 95 C 220 105 238 118 245 128 L 248 158 C 238 148 220 138 205 135 Z" fill="${_adj(h,-15)}" opacity="0.5"/>
  <path d="M 165 92 C 180 96 200 106 218 120 L 212 128 C 194 115 175 105 160 100 Z" fill="rgba(255,255,255,0.3)"/>
  <path d="M 90 106 C 80 125 78 155 79 175 L 75 178 C 74 155 76 124 87 104 Z" fill="rgba(255,255,255,0.12)"/>
  </g>
  `);
}

function shoeHeel(c, bg) {
  const [b1,b2] = bg || ['#f8f5f2','#ede8e2']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 360', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="130" cy="352" rx="75" ry="7" fill="rgba(0,0,0,0.08)"/>
  <!-- Legs above heel -->
  <path d="M 108 18 C 106 50 104 78 106 108" fill="none" stroke="${fc.skin}" stroke-width="28" stroke-linecap="round"/>
  <path d="M 172 18 C 174 50 176 78 174 108" fill="none" stroke="${fc.skin}" stroke-width="28" stroke-linecap="round"/>
  <g transform="translate(0,100)">
  <rect x="198" y="175" width="10" height="72" rx="5" fill="${_adj(h,-40)}"/>
  <ellipse cx="203" cy="248" rx="12" ry="4" fill="${_adj(h,-55)}"/>
  <path d="M 40 200 C 40 210 55 218 95 220 L 210 220 C 225 218 235 212 235 204 C 235 198 230 194 220 192 L 50 192 C 44 194 40 196 40 200 Z" fill="${_adj(h,-45)}"/>
  <path d="M 42 195 C 42 200 56 205 95 206 L 210 206 C 224 204 230 200 230 196 C 230 193 225 192 218 192 L 52 192 C 46 192 42 193 42 195 Z" fill="${_adj(h,25)}" opacity="0.5"/>
  <path d="M 42 193 C 40 178 44 160 58 142 C 72 124 96 112 118 108 L 148 105 L 162 108
    C 176 112 192 120 202 130 L 212 148 L 218 168 L 220 192 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <path d="M 198 175 L 200 135 C 194 125 180 116 165 112 L 218 168 Z" fill="${_adj(h,-20)}" opacity="0.5"/>
  <rect x="88" y="130" width="110" height="14" rx="7" fill="${_adj(h,-10)}" opacity="0.6"/>
  <rect x="190" y="128" width="12" height="18" rx="3" fill="${_adj(h,-40)}"/>
  <path d="M 42 193 C 40 178 44 160 58 142 L 78 148 C 68 162 65 178 66 193 Z" fill="${_adj(h,20)}" opacity="0.4"/>
  <path d="M 56 148 C 50 165 48 178 50 192 L 46 192 C 44 178 46 162 52 146 Z" fill="rgba(255,255,255,0.12)"/>
  </g>
  `);
}

function shoeBoots(c, bg) {
  const [b1,b2] = bg || ['#f2eee8','#e5e0d8']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 440', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="433" rx="65" ry="7" fill="rgba(0,0,0,0.08)"/>
  <!-- Legs visible above boot cuff -->
  <path d="M 110 18 C 108 48 107 68 108 90" fill="none" stroke="${fc.skin}" stroke-width="28" stroke-linecap="round"/>
  <path d="M 170 18 C 172 48 173 68 172 90" fill="none" stroke="${fc.skin}" stroke-width="28" stroke-linecap="round"/>
  <g transform="translate(0,80)">
  <path d="M 42 310 C 40 320 55 330 95 332 L 215 332 C 245 330 248 320 248 312 C 248 304 242 298 232 296 L 56 296 C 46 298 42 304 42 310 Z" fill="${_adj(h,-55)}"/>
  <rect x="192" y="252" width="42" height="46" rx="3" fill="${_adj(h,-40)}"/>
  <path d="M 44 305 C 44 310 58 315 95 316 L 215 316 C 242 314 246 310 246 306 C 246 302 242 298 232 296 L 56 296 C 48 298 44 302 44 305 Z" fill="${_adj(h,30)}" opacity="0.6"/>
  <path d="M 56 296 L 56 105 C 56 90 65 78 80 74 C 95 70 110 72 118 80 L 120 120 L 115 250 L 112 296 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <path d="M 224 296 L 222 250 L 216 120 L 218 80 C 226 72 242 70 255 74 C 268 78 274 90 274 105 L 274 296 Z" fill="url(#fab2${id})"/>
  <path d="M 120 80 L 116 296 L 168 296 L 164 80 C 152 74 132 74 120 80 Z" fill="url(#fab${id})"/>
  <line x1="140" y1="85" x2="140" y2="295" stroke="rgba(0,0,0,0.15)" stroke-width="2"/>
  <rect x="136" y="140" width="8" height="12" rx="2" fill="${_adj(h,-30)}" opacity="0.6"/>
  <path d="M 62 108 C 60 150 59 230 60 290 L 56 292 C 55 230 56 150 58 106 Z" fill="rgba(255,255,255,0.10)"/>
  <path d="M 56 105 C 56 90 65 78 80 74 L 120 80 L 164 80 L 200 74 C 215 78 222 90 222 105 L 220 115 C 205 108 180 105 140 104 C 100 105 75 108 60 115 Z" fill="${_adj(h,-15)}" opacity="0.7"/>
  </g>
  `);
}

/* ══════════════════════════════════════════════
   BAGS
   ══════════════════════════════════════════════ */

function bagTote(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 320', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="313" rx="75" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Handles -->
  <path d="M 95 68 C 90 40 90 28 100 22 C 108 17 116 20 120 28 C 122 35 120 50 118 68" fill="none" stroke="${_adj(h,-25)}" stroke-width="8" stroke-linecap="round"/>
  <path d="M 185 68 C 190 40 190 28 180 22 C 172 17 164 20 160 28 C 158 35 160 50 162 68" fill="none" stroke="${_adj(h,-25)}" stroke-width="8" stroke-linecap="round"/>
  <!-- Bag body -->
  <rect x="42" y="66" width="196" height="230" rx="6" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Magnetic snap -->
  <rect x="120" y="78" width="40" height="14" rx="7" fill="${_adj(h,-35)}" opacity="0.5"/>
  <!-- Front pocket -->
  <rect x="65" y="150" width="150" height="85" rx="5" fill="${_adj(h,-20)}" opacity="0.35"/>
  <!-- Pocket zipper -->
  <line x1="70" y1="160" x2="210" y2="160" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
  <rect x="136" y="155" width="8" height="10" rx="2" fill="${_adj(h,-40)}" opacity="0.5"/>
  <!-- Logo area -->
  <rect x="110" y="105" width="60" height="20" rx="4" fill="rgba(255,255,255,0.12)"/>
  <!-- Stitching detail -->
  <rect x="50" y="74" width="180" height="218" rx="5" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- Sheen -->
  <path d="M 48 72 C 56 110 55 200 56 290 L 50 294 C 49 200 50 110 44 70 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

function bagCrossbody(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 260', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="252" rx="62" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Strap -->
  <path d="M 52 55 C 45 65 42 90 42 118 L 44 128" fill="none" stroke="${_adj(h,-30)}" stroke-width="7" stroke-linecap="round"/>
  <path d="M 228 55 C 235 65 238 90 238 118 L 236 128" fill="none" stroke="${_adj(h,-30)}" stroke-width="7" stroke-linecap="round"/>
  <!-- Chain detail left -->
  <path d="M 52 55 L 78 48" fill="none" stroke="${_adj(h,-40)}" stroke-width="4" stroke-dasharray="4 3"/>
  <path d="M 228 55 L 202 48" fill="none" stroke="${_adj(h,-40)}" stroke-width="4" stroke-dasharray="4 3"/>
  <!-- Bag body -->
  <rect x="58" y="46" width="164" height="180" rx="10" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Flap -->
  <path d="M 58 46 C 58 100 82 140 140 142 C 198 140 222 100 222 46 Z" fill="${_adj(h,-15)}" opacity="0.7"/>
  <!-- Clasp -->
  <rect x="122" y="136" width="36" height="14" rx="7" fill="${_adj(h,-45)}"/>
  <circle cx="140" cy="143" r="4" fill="${_adj(h,-55)}"/>
  <!-- Quilting pattern -->
  <line x1="70" y1="80" x2="210" y2="80" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="70" y1="100" x2="210" y2="100" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="70" y1="120" x2="210" y2="120" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="100" y1="155" x2="100" y2="218" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="140" y1="152" x2="140" y2="218" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="180" y1="155" x2="180" y2="218" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <!-- Sheen -->
  <path d="M 62 52 C 70 90 68 165 69 218 L 64 222 C 63 165 64 90 58 50 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

/* ══════════════════════════════════════════════
   DESIGNER / LUXURY BAGS
   ══════════════════════════════════════════════ */

// Classic quilted flap bag (Chanel-style)
function bagDesignerFlap(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const gold = '#c8a838';
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="75" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Gold chain strap -->
  ${Array.from({length:18},(_,i)=>{const y=20+i*7; return `<rect x="127" y="${y}" width="10" height="5" rx="2.5" fill="${gold}" opacity="0.9"/><rect x="129" y="${y+3}" width="6" height="5" rx="2.5" fill="${gold}" opacity="0.7" transform="rotate(90,132,${y+5})"/>`}).join('')}
  <!-- Bag body -->
  <rect x="32" y="88" width="216" height="188" rx="10" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Quilting diamond pattern -->
  ${[0,1,2,3,4,5].map(row=>[0,1,2,3,4,5,6].map(col=>{
    const qx=46+col*26+(row%2)*13; const qy=100+row*28;
    return `<path d="M ${qx} ${qy+14} L ${qx+13} ${qy} L ${qx+26} ${qy+14} L ${qx+13} ${qy+28} Z" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="1"/>`;
  }).join('')).join('')}
  <!-- Flap -->
  <path d="M 32 88 C 32 144 56 180 140 182 C 224 180 248 144 248 88 Z" fill="${_adj(h,-12)}" opacity="0.82"/>
  <!-- Flap quilting -->
  ${[0,1,2].map(row=>[0,1,2,3,4,5,6].map(col=>{
    const qx=46+col*26+(row%2)*13; const qy=100+row*26;
    return `<path d="M ${qx} ${qy+12} L ${qx+13} ${qy} L ${qx+26} ${qy+12} L ${qx+13} ${qy+24} Z" fill="none" stroke="rgba(0,0,0,0.10)" stroke-width="0.9"/>`;
  }).join('')).join('')}
  <!-- CC logo clasp -->
  <ellipse cx="140" cy="180" rx="18" ry="14" fill="${gold}"/>
  <text x="140" y="185" text-anchor="middle" fill="${_adj(h,-40)}" font-size="13" font-weight="900" font-family="serif">CC</text>
  <!-- Gold trim border -->
  <rect x="32" y="88" width="216" height="188" rx="10" fill="none" stroke="${gold}" stroke-width="1.5" opacity="0.5"/>
  <path d="M 38 94 C 38 148 60 182 140 184 C 220 182 242 148 242 94" fill="none" stroke="${gold}" stroke-width="1" opacity="0.4"/>
  <!-- Sheen -->
  <path d="M 38 95 C 44 140 43 210 44 268 L 39 272 C 38 210 39 138 35 92 Z" fill="rgba(255,255,255,0.08)"/>
  `);
}

// Structured top-handle bag (Hermès Birkin-style)
function bagDesignerBirkin(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const gold = '#c8a838'; const pd = '#8a7060';
  return _wrap('0 0 280 320', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="313" rx="82" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Double top handles -->
  <path d="M 95 68 C 90 42 90 28 100 22 C 110 18 116 24 118 34 L 118 68" fill="none" stroke="${_adj(h,-30)}" stroke-width="9" stroke-linecap="round"/>
  <path d="M 162 68 C 162 34 164 18 174 22 C 184 28 190 42 185 68" fill="none" stroke="${_adj(h,-30)}" stroke-width="9" stroke-linecap="round"/>
  <!-- Palladium hardware handles -->
  <ellipse cx="95" cy="68" rx="7" ry="5" fill="${pd}"/>
  <ellipse cx="118" cy="68" rx="7" ry="5" fill="${pd}"/>
  <ellipse cx="162" cy="68" rx="7" ry="5" fill="${pd}"/>
  <ellipse cx="185" cy="68" rx="7" ry="5" fill="${pd}"/>
  <!-- Bag body -->
  <path d="M 38 72 C 34 76 32 84 32 96 L 32 276 C 32 290 42 302 58 304 L 140 306 L 222 304 C 238 302 248 290 248 276 L 248 96 C 248 84 246 76 242 72 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Togo grain texture lines -->
  ${Array.from({length:12},(_,i)=>`<path d="M 36 ${88+i*18} C 70 ${82+i*18} 140 ${80+i*18} 244 ${88+i*18}" fill="none" stroke="rgba(0,0,0,0.04)" stroke-width="1.5"/>`).join('')}
  <!-- Front flap/pocket top -->
  <path d="M 60 72 L 60 180 C 62 200 90 210 140 212 C 190 210 218 200 220 180 L 220 72 Z" fill="${_adj(h,-8)}" opacity="0.45"/>
  <!-- Lock clasp (turnlock) -->
  <ellipse cx="140" cy="210" rx="20" ry="16" fill="${pd}"/>
  <rect x="133" y="202" width="14" height="18" rx="7" fill="${_adj(h,-20)}" opacity="0.5"/>
  <ellipse cx="140" cy="208" rx="8" ry="6" fill="${pd}" opacity="0.8"/>
  <!-- Stitching detail -->
  <path d="M 40 80 L 40 278 C 40 288 48 298 58 299 L 140 301 L 222 299 C 232 298 240 288 240 278 L 240 80" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="3 3"/>
  <!-- Sheen -->
  <path d="M 38 84 C 44 140 43 228 44 296 L 39 299 C 38 228 39 138 35 82 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

// Monogram canvas tote (LV-style)
function bagDesignerMonogram(c, bg) {
  const [b1,b2] = bg || ['#e8d8b0','#d8c898']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const mono = _adj(h,-35); const gold = '#c8a030';
  return _wrap('0 0 280 320', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="313" rx="78" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Vachetta leather handles -->
  <path d="M 92 64 C 88 38 88 24 100 18 C 110 13 118 18 120 28 L 120 64" fill="none" stroke="#d4a870" stroke-width="8" stroke-linecap="round"/>
  <path d="M 160 64 C 160 28 162 13 172 18 C 184 24 192 38 188 64" fill="none" stroke="#d4a870" stroke-width="8" stroke-linecap="round"/>
  <!-- Bag body -->
  <rect x="36" y="62" width="208" height="236" rx="8" fill="${_adj(h,30)}" filter="url(#drp${id})"/>
  <!-- Monogram canvas pattern (LV-style repeated motifs) -->
  ${Array.from({length:6},(_,row)=>Array.from({length:5},(_,col)=>{
    const mx=52+col*38+(row%2)*19; const my=72+row*36;
    return `<text x="${mx}" y="${my}" text-anchor="middle" fill="${mono}" font-size="11" font-weight="700" font-family="serif" opacity="0.55">L</text>
    <text x="${mx+8}" y="${my+12}" text-anchor="middle" fill="${mono}" font-size="11" font-weight="700" font-family="serif" opacity="0.55">V</text>
    <circle cx="${mx+4}" cy="${my+6}" r="5" fill="none" stroke="${mono}" stroke-width="0.8" opacity="0.3"/>
    <rect x="${mx}" y="${my+18}" width="10" height="10" rx="2" fill="none" stroke="${mono}" stroke-width="0.8" opacity="0.25" transform="rotate(45,${mx+5},${my+23})"/>`;
  }).join('')).join('')}
  <!-- Leather trim top -->
  <rect x="36" y="62" width="208" height="26" rx="8" fill="#c8956a" opacity="0.85"/>
  <!-- Leather trim bottom -->
  <rect x="36" y="272" width="208" height="26" rx="5" fill="#c8956a" opacity="0.75"/>
  <!-- Gold zipper -->
  <line x1="60" y1="75" x2="220" y2="75" stroke="${gold}" stroke-width="2" opacity="0.6"/>
  <rect x="132" y="68" width="16" height="10" rx="3" fill="${gold}"/>
  <!-- Gold logo plate -->
  <rect x="108" y="282" width="64" height="10" rx="5" fill="${gold}" opacity="0.8"/>
  <!-- Sheen -->
  <path d="M 42 70 C 48 125 47 210 48 290 L 43 294 C 42 210 43 123 39 68 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

// Mini saddle bag (Dior-style)
function bagDesignerSaddle(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const gold = '#b8982a';
  return _wrap('0 0 280 280', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="272" rx="68" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Adjustable strap -->
  <path d="M 52 55 C 44 65 40 92 40 120 L 42 130" fill="none" stroke="${_adj(h,-28)}" stroke-width="6" stroke-linecap="round"/>
  <path d="M 228 55 C 236 65 240 92 240 120 L 238 130" fill="none" stroke="${_adj(h,-28)}" stroke-width="6" stroke-linecap="round"/>
  <!-- Saddle shape body -->
  <path d="M 52 130 C 44 138 40 150 40 165 L 40 228 C 40 248 58 264 82 266 L 140 268 L 198 266 C 222 264 240 248 240 228 L 240 165 C 240 150 236 138 228 130 C 210 118 178 112 140 112 C 102 112 70 118 52 130 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Saddle flap arch -->
  <path d="M 52 130 C 52 80 84 52 140 50 C 196 52 228 80 228 130 Z" fill="${_adj(h,-15)}" opacity="0.78"/>
  <!-- Oblique print on flap -->
  ${Array.from({length:5},(_,i)=>`<line x1="${76+i*24}" y1="56" x2="${60+i*24}" y2="126" stroke="rgba(255,255,255,0.12)" stroke-width="8"/>`).join('')}
  <!-- CD clasp -->
  <ellipse cx="140" cy="128" rx="22" ry="16" fill="${gold}"/>
  <text x="140" y="133" text-anchor="middle" fill="${_adj(h,-40)}" font-size="11" font-weight="900" font-family="serif">CD</text>
  <!-- Edge stitching -->
  <path d="M 60 135 C 52 145 48 158 48 170 L 48 228 C 48 244 62 258 80 259 L 140 261 L 200 259 C 218 258 232 244 232 228 L 232 170 C 232 158 228 145 220 135" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.2" stroke-dasharray="3 3"/>
  <path d="M 58 132 C 58 84 86 58 140 56 C 194 58 222 84 222 132" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.2" stroke-dasharray="3 3"/>
  <!-- Sheen -->
  <path d="M 46 142 C 48 180 47 230 48 260 L 43 262 C 42 230 43 178 44 140 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

// Structured mini bag (Prada-style)
function bagDesignerMini(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const silver = '#a8b0c0'; const gold = '#c8a838';
  return _wrap('0 0 280 260', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="253" rx="72" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Chain strap (silver) -->
  ${Array.from({length:16},(_,i)=>{const cx2=80+i*8; return `<ellipse cx="${cx2}" cy="38" rx="5" ry="3" fill="${silver}" opacity="0.9" transform="rotate(${i%2*90},${cx2},38)"/>`}).join('')}
  <!-- Bag body (trapezoid shape) -->
  <path d="M 48 68 C 48 62 56 56 68 56 L 212 56 C 224 56 232 62 232 68 L 236 220 C 236 236 222 246 204 248 L 140 250 L 76 248 C 58 246 44 236 44 220 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Saffiano texture cross-hatch -->
  ${Array.from({length:18},(_,i)=>`<line x1="${52+i*11}" y1="62" x2="${46+i*11}" y2="244" stroke="rgba(0,0,0,0.05)" stroke-width="1"/>`).join('')}
  ${Array.from({length:14},(_,i)=>`<line x1="48" y1="${72+i*13}" x2="232" y2="${68+i*13}" stroke="rgba(0,0,0,0.05)" stroke-width="1"/>`).join('')}
  <!-- Top clasp bar -->
  <rect x="96" y="52" width="88" height="12" rx="6" fill="${silver}"/>
  <!-- Logo triangle (Prada-style) -->
  <path d="M 118 108 L 140 88 L 162 108 Z" fill="${silver}" opacity="0.7"/>
  <rect x="108" y="108" width="64" height="14" rx="4" fill="${silver}" opacity="0.6"/>
  <text x="140" y="120" text-anchor="middle" fill="${_adj(h,-50)}" font-size="10" font-weight="700" font-family="sans-serif" opacity="0.8">PRADA</text>
  <!-- Side gusset hint -->
  <path d="M 48 68 L 44 220" stroke="rgba(0,0,0,0.08)" stroke-width="8" stroke-linecap="round"/>
  <path d="M 232 68 L 236 220" stroke="rgba(0,0,0,0.08)" stroke-width="8" stroke-linecap="round"/>
  <!-- Sheen -->
  <path d="M 54 64 C 58 120 57 188 58 240 L 53 243 C 52 188 53 118 50 62 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

// Bamboo top-handle (Gucci-style)
function bagDesignerBamboo(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const bamboo = '#8a6830'; const gold = '#c8a030';
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="74" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Bamboo handle left -->
  <path d="M 96 22 C 96 48 100 58 100 72" fill="none" stroke="${bamboo}" stroke-width="12" stroke-linecap="round"/>
  <ellipse cx="100" cy="32" rx="7" ry="4" fill="${_adj(bamboo,20)}" opacity="0.5"/>
  <ellipse cx="99" cy="50" rx="7" ry="4" fill="${_adj(bamboo,20)}" opacity="0.5"/>
  <!-- Bamboo handle right -->
  <path d="M 184 22 C 184 48 180 58 180 72" fill="none" stroke="${bamboo}" stroke-width="12" stroke-linecap="round"/>
  <ellipse cx="181" cy="32" rx="7" ry="4" fill="${_adj(bamboo,20)}" opacity="0.5"/>
  <ellipse cx="181" cy="50" rx="7" ry="4" fill="${_adj(bamboo,20)}" opacity="0.5"/>
  <!-- Gold hardware rings -->
  <circle cx="100" cy="72" r="8" fill="${gold}" opacity="0.9"/>
  <circle cx="100" cy="72" r="5" fill="${_adj(h,-20)}"/>
  <circle cx="180" cy="72" r="8" fill="${gold}" opacity="0.9"/>
  <circle cx="180" cy="72" r="5" fill="${_adj(h,-20)}"/>
  <!-- Bag body -->
  <rect x="38" y="70" width="204" height="212" rx="10" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Front flap -->
  <path d="M 38 70 C 38 134 68 168 140 170 C 212 168 242 134 242 70 Z" fill="${_adj(h,-15)}" opacity="0.7"/>
  <!-- GG logo -->
  <text x="132" y="162" text-anchor="middle" fill="${gold}" font-size="20" font-weight="900" font-family="serif" opacity="0.8">GG</text>
  <!-- Web stripe -->
  <rect x="38" y="188" width="204" height="10" rx="2" fill="#1a3a1a" opacity="0.5"/>
  <rect x="38" y="196" width="204" height="10" rx="2" fill="#c82828" opacity="0.5"/>
  <rect x="38" y="202" width="204" height="10" rx="2" fill="#1a3a1a" opacity="0.5"/>
  <!-- Top zip -->
  <line x1="60" y1="78" x2="220" y2="78" stroke="${gold}" stroke-width="1.5" opacity="0.5"/>
  <!-- Sheen -->
  <path d="M 44 78 C 50 132 49 210 50 274 L 45 277 C 44 210 45 130 41 76 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

/* ══════════════════════════════════════════════
   BEAUTY & HAIR PRODUCTS
   ══════════════════════════════════════════════ */

function beautyLipstick(c, bg) {
  const [b1,b2] = bg || ['#fde8f0','#fcd0e4']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="373" rx="32" ry="5" fill="rgba(0,0,0,0.07)"/>
  <!-- Base tube -->
  <rect x="104" y="245" width="72" height="120" rx="8" fill="${_adj(h,-55)}" filter="url(#drp${id})"/>
  <rect x="104" y="245" width="72" height="22" rx="5" fill="${_adj(h,-35)}"/>
  <line x1="140" y1="248" x2="140" y2="362" stroke="rgba(255,255,255,0.13)" stroke-width="1.5"/>
  <path d="M 108 252 L 108 360 L 113 360 L 113 252 Z" fill="rgba(255,255,255,0.10)" rx="3"/>
  <!-- Bullet sleeve -->
  <rect x="112" y="148" width="56" height="108" rx="5" fill="${_adj(h,-22)}" filter="url(#drp${id})"/>
  <!-- Bullet -->
  <path d="M 112 195 L 112 250 L 168 250 L 168 195 Q 168 162 152 144 Q 140 133 128 144 Q 112 162 112 195 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Bullet sheen -->
  <path d="M 116 196 L 116 248 L 121 248 L 121 196 Q 121 166 131 148 L 128 144 Q 113 162 116 196 Z" fill="rgba(255,255,255,0.2)"/>
  <!-- Bullet top highlight -->
  <ellipse cx="135" cy="170" rx="9" ry="5" fill="rgba(255,255,255,0.25)" transform="rotate(-15,135,170)"/>
  <!-- Gold band -->
  <rect x="108" y="240" width="64" height="8" rx="4" fill="#c8a030" opacity="0.8"/>
  `);
}

function beautyPalette(c, bg) {
  const [b1,b2] = bg || ['#f5e8f8','#ead0f0']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const sw = [_adj(h,60),_adj(h,40),_adj(h,20),h,_adj(h,-20),_adj(h,-40),'#f5c0c0','#c0a0e0','#e0c060','#a0d0c0','#e08090','#909090'];
  return _wrap('0 0 280 230', b1, b2, `
  ${_defs(id, c)}
  <!-- Compact body -->
  <rect x="24" y="42" width="232" height="162" rx="14" fill="${_adj(h,-50)}" filter="url(#drp${id})"/>
  <!-- Lid strip -->
  <rect x="24" y="42" width="232" height="28" rx="14" fill="${_adj(h,-35)}" opacity="0.9"/>
  <!-- Mirror on lid -->
  <rect x="55" y="48" width="170" height="16" rx="5" fill="rgba(200,225,245,0.35)"/>
  <rect x="60" y="51" width="160" height="10" rx="3" fill="rgba(180,215,240,0.22)"/>
  <!-- Inner tray -->
  <rect x="33" y="75" width="214" height="122" rx="9" fill="#faf7f7"/>
  <!-- 12 swatches 3×4 -->
  ${[0,1,2,3].map(col => [0,1,2].map(row => {
    const x = 42 + col * 52; const y = 82 + row * 36;
    return `<rect x="${x}" y="${y}" width="44" height="27" rx="6" fill="${sw[row*4+col]||'#ccc'}"/>
    <ellipse cx="${x+22}" cy="${y+7}" rx="11" ry="4" fill="rgba(255,255,255,0.2)"/>`;
  }).join('')).join('')}
  `);
}

function beautyMascara(c, bg) {
  const [b1,b2] = bg || ['#f0f0f0','#e0e0e0']; const id = Math.random().toString(36).slice(2,7);
  const accent = c && c !== '#555555' ? _hex(c) : '#c8a030';
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, '#1a1a1a')}
  <ellipse cx="140" cy="372" rx="28" ry="5" fill="rgba(0,0,0,0.08)"/>
  <!-- Tube -->
  <rect x="112" y="145" width="56" height="210" rx="28" fill="url(#fab1a1a1a)" filter="url(#drp1a1a1a)"/>
  <rect x="112" y="145" width="56" height="210" rx="28" fill="#1a1a1a" filter="url(#drp1a1a1a)"/>
  <path d="M 118 150 L 118 350 L 123 350 L 123 150 Z" fill="rgba(255,255,255,0.12)" rx="4"/>
  <!-- Cap -->
  <rect x="108" y="130" width="64" height="28" rx="14" fill="#2a2a2a"/>
  <!-- Accent band -->
  <rect x="110" y="150" width="60" height="7" rx="3.5" fill="${accent}" opacity="0.85"/>
  <!-- Wand handle -->
  <rect x="135" y="26" width="10" height="118" rx="5" fill="#2a2a2a"/>
  <!-- Brush head -->
  <ellipse cx="140" cy="24" rx="18" ry="9" fill="#333"/>
  <!-- Bristles -->
  ${[-16,-11,-6,-1,4,9,14,19].map((x,i) =>
    `<path d="M ${140+x} ${20} Q ${140+x+(i%2?2:-2)} ${14} ${140+x+(i%2?4:-4)} ${8}" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/>`
  ).join('')}
  `);
}

function beautyBottle(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="373" rx="52" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Cap -->
  <path d="M 124 52 C 124 38 130 28 140 26 C 150 28 156 38 156 52 L 156 76 L 124 76 Z" fill="${_adj(h,-30)}" filter="url(#drp${id})"/>
  <!-- Pump -->
  <rect x="136" y="8" width="8" height="24" rx="4" fill="${_adj(h,-40)}"/>
  <ellipse cx="140" cy="8" rx="10" ry="5" fill="${_adj(h,-28)}"/>
  <!-- Neck -->
  <rect x="122" y="68" width="36" height="28" rx="5" fill="${_adj(h,-18)}"/>
  <!-- Bottle body -->
  <path d="M 76 96 C 68 110 64 132 64 158 L 64 302 C 64 322 78 338 100 340 L 140 342 L 180 340 C 202 338 216 322 216 302 L 216 158 C 216 132 212 110 204 96 Q 178 88 140 86 Q 102 88 76 96 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Label -->
  <rect x="80" y="152" width="120" height="115" rx="7" fill="rgba(255,255,255,0.2)"/>
  <rect x="88" y="165" width="104" height="7" rx="3" fill="rgba(255,255,255,0.38)"/>
  <rect x="93" y="179" width="94" height="5" rx="2.5" fill="rgba(255,255,255,0.25)"/>
  <rect x="88" y="190" width="104" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
  <rect x="93" y="230" width="78" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
  <!-- Sheen -->
  <path d="M 70 104 C 68 164 68 248 70 334 L 66 337 C 64 248 64 162 68 102 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

function beautyLashes(c, bg) {
  const [b1,b2] = bg || ['#fdf0f8','#f8e0f4']; const id = Math.random().toString(36).slice(2,7);
  const accent = c && c !== '#555555' ? _hex(c) : '#d4609a';
  return _wrap('0 0 280 250', b1, b2, `
  ${_defs(id, accent)}
  <!-- Upper lash set 1 band -->
  <path d="M 28 130 Q 85 116 140 114 Q 195 116 252 130" fill="none" stroke="#0d0d0d" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Upper fibers -->
  ${[28,40,52,62,72,81,90,99,108,117,126,135,144,153,162,171,181,192,204,216,228,240,252].map((x,i) => {
    const yb = 130 - Math.abs(x-140)*0.07;
    const len = 24 + Math.sin(i*0.7)*8;
    const tilt = (x-140)*0.015;
    return `<path d="M ${x} ${yb} C ${x+tilt*len*3} ${yb-len*0.55} ${x+tilt*len*5} ${yb-len*0.85} ${x+tilt*len*6} ${yb-len}" fill="none" stroke="#0d0d0d" stroke-width="2" stroke-linecap="round"/>`;
  }).join('')}
  <!-- Lower lash set 2 band -->
  <path d="M 28 158 Q 85 172 140 174 Q 195 172 252 158" fill="none" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round"/>
  ${[28,44,62,80,100,119,138,158,176,196,216,236,252].map((x,i) => {
    const yb = 158 + Math.abs(x-140)*0.05;
    const len = 18 + Math.sin(i*0.85)*6;
    return `<path d="M ${x} ${yb} Q ${x+1} ${yb+len*0.55} ${x+2} ${yb+len}" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>`;
  }).join('')}
  <!-- Packaging box -->
  <rect x="32" y="196" width="216" height="38" rx="9" fill="${accent}" opacity="0.12"/>
  <rect x="32" y="196" width="216" height="38" rx="9" fill="none" stroke="${accent}" stroke-width="1.8"/>
  <text x="140" y="220" text-anchor="middle" fill="${accent}" font-size="11" font-weight="700" font-family="Inter,sans-serif">MIA LASHES – PREMIUM</text>
  `);
}

function beautyNailPolish(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="373" rx="36" ry="5" fill="rgba(0,0,0,0.07)"/>
  <!-- Cap -->
  <rect x="116" y="36" width="48" height="52" rx="11" fill="${_adj(h,-22)}" filter="url(#drp${id})"/>
  <!-- Brush handle -->
  <rect x="136" y="14" width="8" height="28" rx="4" fill="${_adj(h,-38)}"/>
  <!-- Neck -->
  <rect x="126" y="82" width="28" height="24" rx="5" fill="${_adj(h,-12)}"/>
  <!-- Hexagonal bottle body -->
  <path d="M 98 104 C 86 109 78 122 78 138 L 78 314 C 78 332 94 346 114 346 L 140 348 L 166 346 C 186 346 202 332 202 314 L 202 138 C 202 122 194 109 182 104 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <path d="M 86 114 C 82 148 82 248 86 336 L 82 338 C 78 248 78 146 84 112 Z" fill="rgba(255,255,255,0.12)"/>
  <ellipse cx="128" cy="190" rx="11" ry="28" fill="rgba(255,255,255,0.16)" transform="rotate(-8,128,190)"/>
  <!-- Label -->
  <rect x="84" y="200" width="112" height="82" rx="6" fill="rgba(255,255,255,0.14)"/>
  `);
}

function beautyHairOil(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="373" rx="38" ry="5" fill="rgba(0,0,0,0.07)"/>
  <!-- Dropper cap -->
  <rect x="128" y="12" width="24" height="36" rx="12" fill="${_adj(h,-15)}" filter="url(#drp${id})"/>
  <rect x="133" y="44" width="14" height="20" rx="4" fill="${_adj(h,-22)}"/>
  <!-- Neck -->
  <rect x="124" y="60" width="32" height="26" rx="5" fill="${_adj(h,-10)}"/>
  <!-- Elegant bottle (tapered) -->
  <path d="M 88 84 C 76 92 70 112 70 136 L 70 308 C 70 328 86 342 108 344 L 140 346 L 172 344 C 194 342 210 328 210 308 L 210 136 C 210 112 204 92 192 84 Q 168 78 140 76 Q 112 78 88 84 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Elegant label -->
  <rect x="82" y="142" width="116" height="120" rx="8" fill="rgba(255,255,255,0.18)"/>
  <!-- Leaf / botanical motif lines -->
  <path d="M 140 162 Q 128 178 122 194 Q 128 190 140 185 Q 152 190 158 194 Q 152 178 140 162 Z" fill="rgba(255,255,255,0.28)"/>
  <rect x="90" y="218" width="100" height="5" rx="2.5" fill="rgba(255,255,255,0.28)"/>
  <rect x="95" y="230" width="90" height="3.5" rx="1.75" fill="rgba(255,255,255,0.2)"/>
  <path d="M 76 96 C 74 148 74 238 76 334 L 72 337 C 70 238 70 146 74 94 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

function beautyHairSpray(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="373" rx="50" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Can body (cylindrical aerosol) -->
  <rect x="76" y="68" width="128" height="286" rx="20" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Top dome -->
  <path d="M 76 88 C 76 68 96 55 140 54 C 184 55 204 68 204 88 Z" fill="${_adj(h,-18)}"/>
  <!-- Nozzle cap area -->
  <rect x="104" y="38" width="72" height="28" rx="10" fill="${_adj(h,-25)}" filter="url(#drp${id})"/>
  <!-- Spray nozzle -->
  <rect x="132" y="18" width="16" height="26" rx="8" fill="${_adj(h,-35)}"/>
  <!-- Spray mist dots -->
  ${[0,1,2,3,4,5,6,7,8].map(i => {
    const angle = (i/8)*Math.PI*0.8 - 0.4;
    const dist = 38 + (i%3)*10;
    const px = 140 + Math.cos(angle - Math.PI/2) * dist;
    const py = 18 + Math.sin(angle - Math.PI/2) * dist;
    return `<circle cx="${px}" cy="${py}" r="${1.5 - i*0.1}" fill="${_adj(h,30)}" opacity="${0.5 - i*0.04}"/>`;
  }).join('')}
  <!-- Label -->
  <rect x="84" y="120" width="112" height="140" rx="7" fill="rgba(255,255,255,0.18)"/>
  <rect x="92" y="135" width="96" height="7" rx="3.5" fill="rgba(255,255,255,0.38)"/>
  <rect x="96" y="150" width="88" height="5" rx="2.5" fill="rgba(255,255,255,0.24)"/>
  <rect x="92" y="162" width="96" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
  <!-- Bottom label line -->
  <path d="M 76 352 L 204 352" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <!-- Sheen -->
  <path d="M 82 75 C 80 165 80 262 82 348 L 78 352 C 76 262 76 163 80 73 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

function beautyHairBrush(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="373" rx="44" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Handle -->
  <path d="M 122 220 C 118 250 116 290 117 330 C 118 350 126 362 140 364 C 154 362 162 350 163 330 C 164 290 162 250 158 220 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Handle sheen -->
  <path d="M 126 225 C 124 268 123 312 124 350 L 120 352 C 119 312 120 265 122 223 Z" fill="rgba(255,255,255,0.13)"/>
  <!-- Pad -->
  <rect x="86" y="74" width="108" height="155" rx="14" fill="${_adj(h,-18)}" filter="url(#drp${id})"/>
  <!-- Cushion pad -->
  <rect x="93" y="82" width="94" height="139" rx="10" fill="${_adj(h,25)}" opacity="0.7"/>
  <!-- Bristles grid -->
  ${[0,1,2,3,4,5,6].map(col => [0,1,2,3,4,5].map(row => {
    const x = 100 + col * 12;
    const y = 90 + row * 20;
    return `<line x1="${x}" y1="${y}" x2="${x+1}" y2="${y-18}" stroke="${_adj(h,-50)}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="${x}" cy="${y-19}" r="2.5" fill="${_adj(h,-40)}"/>`;
  }).join('')).join('')}
  `);
}

function beautyHairClip(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 260', b1, b2, `
  ${_defs(id, c)}
  <!-- Claw clip body - top jaw -->
  <path d="M 48 90 C 48 72 62 60 80 58 L 200 58 C 218 60 232 72 232 90 L 228 116 C 200 108 170 105 140 105 C 110 105 80 108 52 116 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Teeth on top jaw -->
  ${[70,90,110,130,150,170,190,210].map(x =>
    `<rect x="${x-4}" y="112" width="8" height="16" rx="4" fill="${_adj(h,-20)}"/>`
  ).join('')}
  <!-- Bottom jaw -->
  <path d="M 52 128 C 80 120 110 117 140 117 C 170 117 200 120 228 128 L 228 152 C 200 162 170 165 140 165 C 110 165 80 162 52 152 Z"
    fill="${_adj(h,-15)}" opacity="0.85"/>
  <!-- Hinge spring center -->
  <ellipse cx="140" cy="90" rx="16" ry="28" fill="${_adj(h,-30)}" opacity="0.6"/>
  <rect x="134" y="70" width="12" height="42" rx="6" fill="${_adj(h,-40)}" opacity="0.8"/>
  <!-- Sheen -->
  <path d="M 54 66 C 52 90 52 108 54 148 L 50 148 C 48 108 48 88 52 64 Z" fill="rgba(255,255,255,0.12)"/>
  <!-- Extra decorative pearl dots -->
  <circle cx="88" cy="80" r="5" fill="rgba(255,255,255,0.4)"/>
  <circle cx="140" cy="76" r="5" fill="rgba(255,255,255,0.4)"/>
  <circle cx="192" cy="80" r="5" fill="rgba(255,255,255,0.4)"/>
  `);
}

function beautyScrunchie(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 280', b1, b2, `
  ${_defs(id, c)}
  <!-- Scrunchie base ring -->
  <circle cx="140" cy="140" r="80" fill="none" stroke="${_adj(h,-10)}" stroke-width="40" filter="url(#drp${id})"/>
  <!-- Fabric ruffles - multiple lobes -->
  ${[0,1,2,3,4,5,6,7,8,9].map(i => {
    const angle = (i/10)*2*Math.PI;
    const ox = 140 + Math.cos(angle)*80;
    const oy = 140 + Math.sin(angle)*80;
    const ix = 140 + Math.cos(angle)*48;
    const iy = 140 + Math.sin(angle)*48;
    const cx1 = ox + Math.cos(angle+0.6)*28;
    const cy1 = oy + Math.sin(angle+0.6)*28;
    return `<path d="M ${ix} ${iy} Q ${cx1} ${cy1} ${ox} ${oy}" fill="none" stroke="${_adj(h, i%2===0 ? 30 : -20)}" stroke-width="24" stroke-linecap="round" opacity="0.85"/>`;
  }).join('')}
  <!-- Shine highlights on lobes -->
  ${[0,2,4,6,8].map(i => {
    const angle = (i/10)*2*Math.PI + 0.1;
    const hx = 140 + Math.cos(angle)*76;
    const hy = 140 + Math.sin(angle)*76;
    return `<circle cx="${hx}" cy="${hy}" r="6" fill="rgba(255,255,255,0.28)"/>`;
  }).join('')}
  <!-- Elastic knot -->
  <circle cx="140" cy="60" r="10" fill="${_adj(h,-35)}" filter="url(#drp${id})"/>
  <ellipse cx="140" cy="60" rx="5" ry="8" fill="${_adj(h,-25)}" opacity="0.7"/>
  `);
}

function beautyHairMask(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="72" ry="7" fill="rgba(0,0,0,0.06)"/>
  <!-- Wide jar body -->
  <rect x="52" y="100" width="176" height="178" rx="16" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Lid -->
  <rect x="44" y="68" width="192" height="42" rx="14" fill="${_adj(h,-20)}" filter="url(#drp${id})"/>
  <!-- Lid sheen -->
  <path d="M 52 74 C 50 92 50 100 52 106 L 48 108 C 46 100 46 90 50 72 Z" fill="rgba(255,255,255,0.12)"/>
  <!-- Lid grip lines -->
  ${[70,92,114,136,158,180,202,224].map(x =>
    `<line x1="${x}" y1="72" x2="${x}" y2="105" stroke="rgba(0,0,0,0.06)" stroke-width="2"/>`
  ).join('')}
  <!-- Label on body -->
  <rect x="62" y="135" width="156" height="108" rx="9" fill="rgba(255,255,255,0.2)"/>
  <rect x="70" y="150" width="140" height="8" rx="4" fill="rgba(255,255,255,0.38)"/>
  <rect x="75" y="166" width="130" height="5" rx="2.5" fill="rgba(255,255,255,0.26)"/>
  <rect x="70" y="178" width="140" height="5" rx="2.5" fill="rgba(255,255,255,0.22)"/>
  <!-- Leaf/floral accent in label -->
  <path d="M 140 200 Q 130 212 124 220 Q 132 218 140 214 Q 148 218 156 220 Q 150 212 140 200 Z" fill="rgba(255,255,255,0.3)"/>
  `);
}

/* ══════════════════════════════════════════════
   HÜTE & MÜTZEN
   ══════════════════════════════════════════════ */

// Beanie / Strickmütze – worn on head
function hatBeanie(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  let ribs = '';
  for (let i = 0; i < 10; i++) {
    const x = 70 + i * 14;
    ribs += `<line x1="${x}" y1="52" x2="${x+2}" y2="108" stroke="rgba(0,0,0,0.08)" stroke-width="4" stroke-linecap="round"/>`;
  }
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="52" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck -->
  <path d="M 130 170 C 129 185 129 198 130 210 L 150 210 C 151 198 151 185 150 170 Z" fill="${fc.skin}"/>
  <!-- Face -->
  <ellipse cx="140" cy="145" rx="30" ry="34" fill="${fc.skin}"/>
  <!-- Eyes, brows, nose, lips (same as _figHead) -->
  <ellipse cx="131" cy="140" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="149" cy="140" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="131" cy="141" rx="2.3" ry="3.1" fill="#2a1008"/>
  <ellipse cx="149" cy="141" rx="2.3" ry="3.1" fill="#2a1008"/>
  <circle cx="132" cy="139" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <circle cx="150" cy="139" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <path d="M 123 133 Q 131 130 137 132" fill="none" stroke="${fc.hair}" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M 143 132 Q 149 130 157 133" fill="none" stroke="${fc.hair}" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M 137 150 Q 135 156 134 158 Q 140 160 146 158 Q 145 156 143 150" fill="none" stroke="${_adj(fc.skin,-28)}" stroke-width="1.3" stroke-linecap="round"/>
  <path d="M 133 164 Q 140 161 147 164" fill="none" stroke="${_adj(fc.skin,-55)}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="122" cy="155" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <ellipse cx="158" cy="155" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <!-- Beanie body -->
  <path d="M 68 118 C 66 96 72 72 86 58 C 100 44 118 36 140 34 C 162 36 180 44 194 58 C 208 72 214 96 212 118 L 212 134 L 68 134 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Rib texture -->
  <defs><clipPath id="bc${id}"><path d="M 68 118 C 66 96 72 72 86 58 C 100 44 118 36 140 34 C 162 36 180 44 194 58 C 208 72 214 96 212 118 L 212 134 L 68 134 Z"/></clipPath></defs>
  <g clip-path="url(#bc${id})">${ribs}</g>
  <!-- Brim / Aufschlag -->
  <rect x="64" y="120" width="152" height="22" rx="4" fill="${_adj(h,-18)}" opacity="0.85"/>
  <!-- Pom pom on top -->
  <circle cx="140" cy="34" r="16" fill="${_adj(h,20)}" filter="url(#drp${id})"/>
  <circle cx="136" cy="30" r="5" fill="rgba(255,255,255,0.25)"/>
  <!-- Sheen on hat -->
  <path d="M 74 115 C 74 92 80 72 92 60 L 88 66 C 78 78 74 96 74 118 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

// Baseball Cap
function hatBaseball(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="52" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck -->
  <path d="M 130 180 C 129 195 129 208 130 220 L 150 220 C 151 208 151 195 150 180 Z" fill="${fc.skin}"/>
  <!-- Face (lower part visible under cap brim) -->
  <ellipse cx="140" cy="165" rx="30" ry="34" fill="${fc.skin}"/>
  <ellipse cx="131" cy="158" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="149" cy="158" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="131" cy="159" rx="2.3" ry="3.1" fill="#2a1008"/>
  <ellipse cx="149" cy="159" rx="2.3" ry="3.1" fill="#2a1008"/>
  <circle cx="132" cy="157" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <circle cx="150" cy="157" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <path d="M 137 169 Q 135 175 134 177 Q 140 179 146 177 Q 145 175 143 169" fill="none" stroke="${_adj(fc.skin,-28)}" stroke-width="1.3" stroke-linecap="round"/>
  <path d="M 133 182 Q 140 179 147 182" fill="none" stroke="${_adj(fc.skin,-55)}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="122" cy="173" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <ellipse cx="158" cy="173" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <!-- Hair at back/sides visible below cap -->
  <path d="M 112 148 C 108 162 108 178 110 192 L 115 194 C 113 178 113 162 116 150 Z" fill="${fc.hair}"/>
  <path d="M 168 148 C 172 162 172 178 170 192 L 165 194 C 167 178 167 162 164 150 Z" fill="${fc.hair}"/>
  <!-- Cap dome -->
  <path d="M 74 148 C 72 120 82 90 100 72 C 116 56 130 48 140 48 C 150 48 164 56 180 72 C 198 90 208 120 206 148 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Cap panels (6-panel look) -->
  <path d="M 140 48 L 140 148" stroke="${_adj(h,-20)}" stroke-width="1.5" opacity="0.4"/>
  <path d="M 100 72 L 112 148" stroke="${_adj(h,-20)}" stroke-width="1.5" opacity="0.3"/>
  <path d="M 180 72 L 168 148" stroke="${_adj(h,-20)}" stroke-width="1.5" opacity="0.3"/>
  <!-- Sweatband / circumference -->
  <path d="M 74 148 L 206 148" stroke="${_adj(h,-25)}" stroke-width="3" opacity="0.6"/>
  <!-- Button on top -->
  <circle cx="140" cy="50" r="7" fill="${_adj(h,-30)}"/>
  <!-- Logo / embroidery area -->
  <rect x="118" y="94" width="44" height="30" rx="5" fill="rgba(255,255,255,0.12)"/>
  <!-- Brim / Schirm -->
  <path d="M 68 150 C 50 154 36 162 34 172 C 33 180 40 186 55 186 L 170 184 C 170 170 170 156 170 148 Z" fill="${_adj(h,-15)}" filter="url(#drp${id})"/>
  <!-- Brim underside -->
  <path d="M 68 152 C 52 156 40 162 38 170 C 37 175 42 180 54 180 L 168 178 C 168 166 168 154 168 150 Z" fill="${_adj(h,-35)}" opacity="0.7"/>
  <!-- Snap closure at back -->
  <rect x="196" y="143" width="22" height="10" rx="5" fill="${_adj(h,-30)}" opacity="0.7"/>
  <!-- Sheen -->
  <path d="M 80 144 C 80 120 88 95 102 78 L 98 82 C 86 98 80 122 80 146 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

// Bucket Hat
function hatBucket(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="58" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck -->
  <path d="M 130 190 C 129 205 129 218 130 228 L 150 228 C 151 218 151 205 150 190 Z" fill="${fc.skin}"/>
  <!-- Face -->
  <ellipse cx="140" cy="175" rx="30" ry="34" fill="${fc.skin}"/>
  <ellipse cx="131" cy="168" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="149" cy="168" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="131" cy="169" rx="2.3" ry="3.1" fill="#2a1008"/>
  <ellipse cx="149" cy="169" rx="2.3" ry="3.1" fill="#2a1008"/>
  <circle cx="132" cy="167" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <circle cx="150" cy="167" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <path d="M 133 192 Q 140 189 147 192" fill="none" stroke="${_adj(fc.skin,-55)}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="122" cy="183" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <ellipse cx="158" cy="183" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <!-- Hair at sides -->
  <path d="M 112 156 C 110 170 110 186 112 200 L 116 202 C 114 187 114 171 116 158 Z" fill="${fc.hair}"/>
  <path d="M 168 156 C 170 170 170 186 168 200 L 164 202 C 166 187 166 171 164 158 Z" fill="${fc.hair}"/>
  <!-- Bucket hat crown -->
  <path d="M 82 158 C 80 130 88 104 104 88 C 116 76 128 68 140 68 C 152 68 164 76 176 88 C 192 104 200 130 198 158 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Crown top flatness -->
  <ellipse cx="140" cy="68" rx="38" ry="12" fill="${_adj(h,-8)}" opacity="0.8"/>
  <!-- Wide all-around brim -->
  <path d="M 60 160 C 55 165 54 172 58 178 C 62 184 76 188 100 190 L 140 191 L 180 190 C 204 188 218 184 222 178 C 226 172 225 165 220 160 Z" fill="url(#fab${id})"/>
  <!-- Brim underside hint -->
  <path d="M 62 162 C 58 167 58 172 62 176 C 68 180 84 183 110 184 L 140 185 L 170 184 C 196 183 212 180 218 176 C 222 172 222 167 218 162 Z" fill="${_adj(h,-22)}" opacity="0.6"/>
  <!-- Seam line crown/brim -->
  <path d="M 82 160 C 95 165 118 168 140 168 C 162 168 185 165 198 160" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="2"/>
  <!-- Eyelets / ventilation holes -->
  <circle cx="116" cy="120" r="3.5" fill="rgba(0,0,0,0.18)"/>
  <circle cx="164" cy="120" r="3.5" fill="rgba(0,0,0,0.18)"/>
  <!-- Sheen -->
  <path d="M 88 152 C 88 130 94 108 106 94 L 102 98 C 92 112 88 132 88 155 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

// Fedora / Trilby
function hatFedora(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  const band = _adj(h,-40);
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="65" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck -->
  <path d="M 130 190 C 129 205 129 218 130 228 L 150 228 C 151 218 151 205 150 190 Z" fill="${fc.skin}"/>
  <!-- Face -->
  <ellipse cx="140" cy="175" rx="30" ry="34" fill="${fc.skin}"/>
  <ellipse cx="131" cy="168" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="149" cy="168" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="131" cy="169" rx="2.3" ry="3.1" fill="#2a1008"/>
  <ellipse cx="149" cy="169" rx="2.3" ry="3.1" fill="#2a1008"/>
  <circle cx="132" cy="167" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <circle cx="150" cy="167" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <path d="M 133 182 Q 140 179 147 182" fill="none" stroke="${_adj(fc.skin,-55)}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="122" cy="183" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <ellipse cx="158" cy="183" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <!-- Hair at sides (fedora sits higher) -->
  <path d="M 110 148 C 108 164 109 182 112 196 L 116 197 C 114 183 113 165 112 150 Z" fill="${fc.hair}"/>
  <path d="M 170 148 C 172 164 171 182 168 196 L 164 197 C 166 183 167 165 168 150 Z" fill="${fc.hair}"/>
  <!-- Fedora crown -->
  <path d="M 84 152 C 82 120 90 88 108 72 C 120 60 130 54 140 54 C 150 54 160 60 172 72 C 190 88 198 120 196 152 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Center crease (indentation) -->
  <path d="M 140 54 C 138 72 137 110 138 152" stroke="rgba(0,0,0,0.12)" stroke-width="6" stroke-linecap="round" fill="none"/>
  <!-- Pinch creases at front -->
  <path d="M 112 90 C 116 100 120 118 122 138 L 118 140 C 116 120 112 102 108 92 Z" fill="rgba(0,0,0,0.05)"/>
  <path d="M 168 90 C 164 100 160 118 158 138 L 162 140 C 164 120 168 102 172 92 Z" fill="rgba(0,0,0,0.05)"/>
  <!-- Hat band -->
  <path d="M 84 152 C 98 158 118 162 140 162 C 162 162 182 158 196 152 L 196 165 C 182 171 162 175 140 175 C 118 175 98 171 84 165 Z" fill="${band}" opacity="0.9"/>
  <!-- Band bow/detail -->
  <path d="M 136 157 C 133 159 132 162 134 164 C 136 166 144 166 146 164 C 148 162 147 159 144 157 C 142 155 138 155 136 157 Z" fill="${_adj(band,20)}" opacity="0.8"/>
  <!-- Wide brim -->
  <path d="M 44 166 C 42 172 44 180 52 185 C 66 192 98 196 140 196 C 182 196 214 192 228 185 C 236 180 238 172 236 166 L 196 165 C 182 171 162 175 140 175 C 118 175 98 171 84 165 Z" fill="${_adj(h,-8)}" filter="url(#drp${id})"/>
  <!-- Brim underside -->
  <path d="M 48 170 C 48 174 52 179 62 182 C 80 187 108 190 140 190 C 172 190 200 187 218 182 C 228 179 232 174 232 170 L 198 168 C 182 173 162 176 140 176 C 118 176 98 173 82 168 Z" fill="${_adj(h,-30)}" opacity="0.6"/>
  <!-- Sheen on crown -->
  <path d="M 90 148 C 90 122 96 96 110 78 L 106 82 C 94 100 90 124 90 151 Z" fill="rgba(255,255,255,0.08)"/>
  `);
}

// Beret / Baskenmütze
function hatBeret(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="48" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck -->
  <path d="M 130 192 C 129 206 129 218 130 228 L 150 228 C 151 218 151 206 150 192 Z" fill="${fc.skin}"/>
  <!-- Face -->
  <ellipse cx="140" cy="177" rx="30" ry="34" fill="${fc.skin}"/>
  <ellipse cx="131" cy="170" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="149" cy="170" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="131" cy="171" rx="2.3" ry="3.1" fill="#2a1008"/>
  <ellipse cx="149" cy="171" rx="2.3" ry="3.1" fill="#2a1008"/>
  <circle cx="132" cy="169" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <circle cx="150" cy="169" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <path d="M 133 184 Q 140 181 147 184" fill="none" stroke="${_adj(fc.skin,-55)}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="122" cy="185" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <ellipse cx="158" cy="185" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <!-- Hair on opposite side of beret tilt -->
  <path d="M 168 155 C 172 170 172 186 170 200 L 166 202 C 168 188 168 172 164 157 Z" fill="${fc.hair}"/>
  <!-- Beret shape (tilted to one side) -->
  <ellipse cx="148" cy="128" rx="62" ry="52" fill="url(#fab${id})" filter="url(#drp${id})" transform="rotate(-12,148,128)"/>
  <!-- Top stalk / stem -->
  <circle cx="186" cy="82" r="5" fill="${_adj(h,-35)}"/>
  <!-- Headband rim -->
  <path d="M 108 154 C 108 148 114 144 122 144 L 164 144 C 172 144 178 148 178 154 L 178 162 C 172 166 156 168 140 168 C 124 168 108 166 108 162 Z" fill="${_adj(h,-22)}" opacity="0.9"/>
  <!-- Fabric fold/drape on left -->
  <path d="M 90 130 C 96 110 110 96 128 90 L 124 102 C 112 108 100 120 96 138 Z" fill="rgba(255,255,255,0.08)"/>
  <!-- Sheen -->
  <path d="M 95 138 C 94 118 102 100 116 88 L 112 94 C 100 106 96 124 96 140 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

// Strohhut / Sun Hat
function hatStraw(c, bg) {
  const straw = c && c !== '#555555' ? _hex(c) : '#c8a050';
  const [b1,b2] = bg || ['#fdf8e8','#f8f0d0']; const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  const band = _adj(straw, -30);
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, straw)}
  <ellipse cx="140" cy="293" rx="68" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck -->
  <path d="M 130 200 C 129 214 129 226 130 235 L 150 235 C 151 226 151 214 150 200 Z" fill="${fc.skin}"/>
  <!-- Face -->
  <ellipse cx="140" cy="185" rx="30" ry="34" fill="${fc.skin}"/>
  <ellipse cx="131" cy="178" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="149" cy="178" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="131" cy="179" rx="2.3" ry="3.1" fill="#2a1008"/>
  <ellipse cx="149" cy="179" rx="2.3" ry="3.1" fill="#2a1008"/>
  <circle cx="132" cy="177" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <circle cx="150" cy="177" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <path d="M 133 192 Q 140 189 147 192" fill="none" stroke="${_adj(fc.skin,-55)}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="122" cy="193" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <ellipse cx="158" cy="193" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <!-- Hair at sides and back -->
  <path d="M 112 164 C 110 178 110 196 112 210 L 116 212 C 114 197 114 179 116 166 Z" fill="${fc.hair}"/>
  <path d="M 168 164 C 170 178 170 196 168 210 L 164 212 C 166 197 166 179 164 166 Z" fill="${fc.hair}"/>
  <!-- Straw woven texture (circles/ovals) -->
  <defs><clipPath id="sc${id}"><path d="M 92 165 C 90 130 100 98 116 82 C 128 70 134 64 140 64 C 146 64 152 70 164 82 C 180 98 190 130 188 165 Z"/></clipPath></defs>
  <!-- Crown -->
  <path d="M 92 165 C 90 130 100 98 116 82 C 128 70 134 64 140 64 C 146 64 152 70 164 82 C 180 98 190 130 188 165 Z" fill="${straw}" filter="url(#drp${id})"/>
  <!-- Woven pattern in crown -->
  <g clip-path="url(#sc${id})">
    ${Array.from({length:8},(_,row)=>Array.from({length:10},(_,col)=>{
      const cx2=88+col*12+(row%2)*6; const cy2=68+row*12;
      return `<ellipse cx="${cx2}" cy="${cy2}" rx="4" ry="2.5" fill="none" stroke="${_adj(straw,-20)}" stroke-width="1" opacity="0.5"/>`;
    }).join('')).join('')}
  </g>
  <!-- Band / ribbon -->
  <path d="M 92 165 C 106 172 122 175 140 175 C 158 175 174 172 188 165 L 188 177 C 174 184 158 187 140 187 C 122 187 106 184 92 177 Z" fill="${band}" opacity="0.85"/>
  <!-- Band bow -->
  <path d="M 154 168 C 150 171 149 175 152 177 L 164 172 C 166 170 164 166 161 166 Z" fill="${_adj(band,25)}" opacity="0.9"/>
  <path d="M 162 174 C 166 174 168 172 166 170 L 162 168 Z" fill="${_adj(band,35)}" opacity="0.8"/>
  <!-- Wide floppy brim -->
  <path d="M 36 178 C 32 186 36 196 50 202 C 72 210 102 214 140 214 C 178 214 208 210 230 202 C 244 196 248 186 244 178 L 188 177 C 174 184 158 187 140 187 C 122 187 106 184 92 177 Z" fill="${straw}" opacity="0.92"/>
  <!-- Brim woven texture -->
  ${Array.from({length:4},(_,row)=>Array.from({length:14},(_,col)=>{
    const bx=46+col*14+(row%2)*7; const by=182+row*7;
    return `<ellipse cx="${bx}" cy="${by}" rx="5" ry="2" fill="none" stroke="${_adj(straw,-15)}" stroke-width="0.8" opacity="0.4"/>`;
  }).join('')).join('')}
  <!-- Brim edge shadow -->
  <path d="M 40 196 C 62 206 100 210 140 210 C 180 210 218 206 240 196" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="3"/>
  `);
}

// Snapback Cap (Herren-Style)
function hatSnapback(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="52" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck -->
  <path d="M 130 190 C 129 204 129 216 130 226 L 150 226 C 151 216 151 204 150 190 Z" fill="${fc.skin}"/>
  <!-- Face -->
  <ellipse cx="140" cy="175" rx="30" ry="34" fill="${fc.skin}"/>
  <ellipse cx="131" cy="168" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="149" cy="168" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="131" cy="169" rx="2.3" ry="3.1" fill="#2a1008"/>
  <ellipse cx="149" cy="169" rx="2.3" ry="3.1" fill="#2a1008"/>
  <circle cx="132" cy="167" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <circle cx="150" cy="167" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <path d="M 133 182 Q 140 179 147 182" fill="none" stroke="${_adj(fc.skin,-55)}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="122" cy="179" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <ellipse cx="158" cy="179" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <!-- Hair at sides/back -->
  <path d="M 112 152 C 110 166 110 184 112 196 L 116 197 C 114 184 114 167 116 154 Z" fill="${fc.hair}"/>
  <path d="M 168 152 C 170 166 170 184 168 196 L 164 197 C 166 184 166 167 164 154 Z" fill="${fc.hair}"/>
  <!-- Snapback crown (more structured / flat top) -->
  <path d="M 76 152 C 74 124 82 96 98 80 C 110 68 124 60 140 60 C 156 60 170 68 182 80 C 198 96 206 124 204 152 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Flat top ellipse -->
  <ellipse cx="140" cy="60" rx="46" ry="10" fill="${_adj(h,-5)}" opacity="0.9"/>
  <!-- Panel seams (6-panel) -->
  <path d="M 140 60 L 140 152" stroke="${_adj(h,-22)}" stroke-width="2" opacity="0.4"/>
  <path d="M 98 80 L 114 152" stroke="${_adj(h,-22)}" stroke-width="1.5" opacity="0.3"/>
  <path d="M 182 80 L 166 152" stroke="${_adj(h,-22)}" stroke-width="1.5" opacity="0.3"/>
  <!-- Sweat band -->
  <path d="M 76 152 C 92 160 114 164 140 164 C 166 164 188 160 204 152 L 204 164 C 188 172 166 176 140 176 C 114 176 92 172 76 164 Z" fill="${_adj(h,-28)}" opacity="0.8"/>
  <!-- Snapback snap closure -->
  <rect x="200" y="148" width="28" height="8" rx="4" fill="${_adj(h,-35)}" opacity="0.8"/>
  <rect x="204" y="150" width="5" height="4" rx="1" fill="${_adj(h,-50)}" opacity="0.7"/>
  <rect x="212" y="150" width="5" height="4" rx="1" fill="${_adj(h,-50)}" opacity="0.7"/>
  <rect x="220" y="150" width="5" height="4" rx="1" fill="${_adj(h,-50)}" opacity="0.7"/>
  <!-- Flat brim (straight) -->
  <path d="M 60 164 C 46 168 36 174 36 182 C 36 188 44 192 58 193 L 180 193 L 180 164 Z" fill="${h}" filter="url(#drp${id})"/>
  <!-- Brim underside (dark) -->
  <path d="M 62 166 C 50 170 42 174 42 180 C 42 184 48 187 60 188 L 178 188 L 178 166 Z" fill="${_adj(h,-40)}" opacity="0.85"/>
  <!-- Logo/graphic on front -->
  <rect x="106" y="96" width="68" height="36" rx="6" fill="rgba(255,255,255,0.10)"/>
  <!-- Sheen -->
  <path d="M 82 148 C 82 124 88 100 102 84 L 98 88 C 86 104 82 126 82 151 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

// Cowboy Hat / Western
function hatCowboy(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  const fc = _figColors();
  const band = _adj(h,-35);
  return _wrap('0 0 280 300', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="293" rx="72" ry="6" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck -->
  <path d="M 130 200 C 129 214 129 226 130 235 L 150 235 C 151 226 151 214 150 200 Z" fill="${fc.skin}"/>
  <!-- Face -->
  <ellipse cx="140" cy="185" rx="30" ry="34" fill="${fc.skin}"/>
  <ellipse cx="131" cy="178" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="149" cy="178" rx="3.8" ry="4.5" fill="#fff"/>
  <ellipse cx="131" cy="179" rx="2.3" ry="3.1" fill="#2a1008"/>
  <ellipse cx="149" cy="179" rx="2.3" ry="3.1" fill="#2a1008"/>
  <circle cx="132" cy="177" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <circle cx="150" cy="177" r="0.9" fill="rgba(255,255,255,0.85)"/>
  <path d="M 133 192 Q 140 189 147 192" fill="none" stroke="${_adj(fc.skin,-55)}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="122" cy="193" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <ellipse cx="158" cy="193" rx="8" ry="5" fill="rgba(215,85,75,0.09)"/>
  <!-- Hair sides -->
  <path d="M 112 165 C 110 179 110 196 112 208 L 116 210 C 114 197 114 180 116 167 Z" fill="${fc.hair}"/>
  <path d="M 168 165 C 170 179 170 196 168 208 L 164 210 C 166 197 166 180 164 167 Z" fill="${fc.hair}"/>
  <!-- Cowboy crown with deep center crease + pinch front -->
  <path d="M 88 165 C 88 134 96 104 112 86 C 122 74 131 66 140 66 C 149 66 158 74 168 86 C 184 104 192 134 192 165 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Deep center dent -->
  <path d="M 130 66 C 128 88 130 124 132 165" stroke="rgba(0,0,0,0.14)" stroke-width="10" stroke-linecap="round" fill="none"/>
  <path d="M 150 66 C 152 88 150 124 148 165" stroke="rgba(0,0,0,0.14)" stroke-width="10" stroke-linecap="round" fill="none"/>
  <!-- Front pinch -->
  <path d="M 116 100 C 120 112 124 135 126 162 L 122 164 C 120 138 116 114 112 102 Z" fill="rgba(0,0,0,0.06)"/>
  <path d="M 164 100 C 160 112 156 135 154 162 L 158 164 C 160 138 164 114 168 102 Z" fill="rgba(0,0,0,0.06)"/>
  <!-- Hat band with metal studs -->
  <path d="M 88 165 C 102 172 120 176 140 176 C 160 176 178 172 192 165 L 192 178 C 178 185 160 189 140 189 C 120 189 102 185 88 178 Z" fill="${band}" opacity="0.9"/>
  ${[100,116,132,148,164,180].map(x=>`<circle cx="${x}" cy="171" r="3.5" fill="${_adj(band,30)}" opacity="0.8"/>`).join('')}
  <!-- Very wide curved brim (up at sides, down at front/back) -->
  <path d="M 30 180 C 24 188 28 198 48 204 C 72 211 104 215 140 215 C 176 215 208 211 232 204 C 252 198 256 188 250 180 L 192 178 C 178 185 160 189 140 189 C 120 189 102 185 88 178 Z" fill="${_adj(h,-6)}" filter="url(#drp${id})"/>
  <!-- Brim curve upward at sides -->
  <path d="M 34 182 C 50 190 36 200 52 200 L 52 186 Z" fill="${_adj(h,-18)}" opacity="0.5"/>
  <path d="M 246 182 C 230 190 244 200 228 200 L 228 186 Z" fill="${_adj(h,-18)}" opacity="0.5"/>
  <!-- Brim underside -->
  <path d="M 36 190 C 60 198 98 202 140 202 C 182 202 220 198 244 190 C 250 188 252 184 248 182 L 192 180 C 178 187 160 190 140 190 C 120 190 102 187 88 180 L 32 182 C 30 184 30 188 36 190 Z" fill="${_adj(h,-25)}" opacity="0.6"/>
  <!-- Sheen -->
  <path d="M 94 160 C 94 134 100 108 114 92 L 110 96 C 98 112 94 136 94 163 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

/* ══════════════════════════════════════════════
   MAIN DISPATCHER
   ══════════════════════════════════════════════ */

function getProductSVG(p) {
  const c = p.primaryColor || '#555555';
  const bg = p.svgBg || null;
  switch (p.svgType) {
    case 'bodysuit-tank':        return bodysuitTank(c, bg);
    case 'bodysuit-vneck':       return bodysuitVneck(c, bg);
    case 'bodysuit-long':        return bodysuitLong(c, bg);
    case 'bodysuit-ribbed':      return bodysuitRibbed(c, bg);
    case 'bodysuit-cutout':      return bodysuitCutout(c, bg);
    case 'bodysuit-lace':        return bodysuitLace(c, bg);
    case 'bodysuit-square':      return bodysuitSquare(c, bg);
    case 'bodysuit-wrap':        return bodysuitWrap(c, bg);
    case 'bodysuit-offshoulder': return bodysuitOffShoulder(c, bg);
    case 'dress-midi':           return dressMidi(c, bg);
    case 'dress-maxi':           return dressMaxi(c, bg);
    case 'dress-short':          return dressShort(c, bg);
    case 'dress-sequin':         return dressSequin(c, bg);
    case 'dress-cocktail':       return dressCocktail(c, bg);
    case 'dress-bodycon':        return dressBodycon(c, bg);
    case 'dress-off-shoulder':   return dressOffShoulder(c, bg);
    case 'top-crop':             return topCrop(c, bg);
    case 'top-shirt':            return topShirt(c, bg);
    case 'pants':                return pants(c, bg);
    case 'blazer':               return blazer(c, bg);
    case 'shoe-sneaker':         return shoeSneaker(c, bg);
    case 'shoe-heel':            return shoeHeel(c, bg);
    case 'shoe-boots':           return shoeBoots(c, bg);
    case 'bag-tote':             return bagTote(c, bg);
    case 'bag-crossbody':        return bagCrossbody(c, bg);
    case 'bag-designer-flap':    return bagDesignerFlap(c, bg);
    case 'bag-designer-birkin':  return bagDesignerBirkin(c, bg);
    case 'bag-designer-mono':    return bagDesignerMonogram(c, bg);
    case 'bag-designer-saddle':  return bagDesignerSaddle(c, bg);
    case 'bag-designer-mini':    return bagDesignerMini(c, bg);
    case 'bag-designer-bamboo':  return bagDesignerBamboo(c, bg);
    case 'beauty-lipstick':      return beautyLipstick(c, bg);
    case 'beauty-palette':       return beautyPalette(c, bg);
    case 'beauty-mascara':       return beautyMascara(c, bg);
    case 'beauty-bottle':        return beautyBottle(c, bg);
    case 'beauty-lashes':        return beautyLashes(c, bg);
    case 'beauty-nail':          return beautyNailPolish(c, bg);
    case 'beauty-hairoil':       return beautyHairOil(c, bg);
    case 'beauty-hairspray':     return beautyHairSpray(c, bg);
    case 'beauty-hairbrush':     return beautyHairBrush(c, bg);
    case 'beauty-hairclip':      return beautyHairClip(c, bg);
    case 'beauty-scrunchie':     return beautyScrunchie(c, bg);
    case 'beauty-hairmask':      return beautyHairMask(c, bg);
    case 'hat-beanie':           return hatBeanie(c, bg);
    case 'hat-baseball':         return hatBaseball(c, bg);
    case 'hat-bucket':           return hatBucket(c, bg);
    case 'hat-fedora':           return hatFedora(c, bg);
    case 'hat-beret':            return hatBeret(c, bg);
    case 'hat-straw':            return hatStraw(c, bg);
    case 'hat-snapback':         return hatSnapback(c, bg);
    case 'hat-cowboy':           return hatCowboy(c, bg);
    default:                     return bodysuitTank(c, bg);
  }
}
