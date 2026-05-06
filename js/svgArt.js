/* =====================================================
   MIASHOP – Product SVG Illustrations
   Ghost-mannequin style – realistic garment views
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

/* ══════════════════════════════════════════════
   BODYSUITS
   ══════════════════════════════════════════════ */

/* Tank / Spaghetti Strap Bodysuit */
function bodysuitTank(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck hint -->
  <path d="M 124 38 Q 140 31 156 38 L 158 68 Q 149 63 140 62 Q 131 63 122 68 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Straps -->
  <rect x="119" y="28" width="11" height="42" rx="5.5" fill="url(#fab${id})"/>
  <rect x="150" y="28" width="11" height="42" rx="5.5" fill="url(#fab${id})"/>
  <!-- Body -->
  <path d="M 121 66 Q 140 97 159 66 C 177 67 200 78 211 97 C 220 113 218 134 214 152
    L 207 192 L 200 242 L 196 296 C 194 312 188 321 182 323 L 140 325 L 98 323
    C 92 321 86 312 84 296 L 80 242 L 73 192 L 66 152 C 62 134 60 113 69 97
    C 80 78 103 67 121 66 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Sheen -->
  <path d="M 121 70 C 130 90 129 210 131 295 L 126 322 C 124 290 125 210 118 88 Z" fill="rgba(255,255,255,0.11)"/>
  <!-- Center seam -->
  <path d="M 140 99 L 140 322" stroke="rgba(0,0,0,0.05)" stroke-width="1" stroke-dasharray="3 4"/>
  <!-- Snaps -->
  <circle cx="132" cy="321" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="322" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="321" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* V-Neck Bodysuit */
function bodysuitVneck(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck hint -->
  <path d="M 118 44 Q 140 34 162 44 L 162 74 Q 150 67 140 65 Q 130 67 118 74 Z" fill="rgba(220,190,165,0.18)"/>
  <!-- Body -->
  <path d="M 118 72 C 105 72 84 82 72 100 C 62 115 62 138 67 158
    L 73 198 L 78 248 L 82 298 C 83 314 88 322 94 324 L 140 326 L 186 324
    C 192 322 197 314 198 298 L 202 248 L 207 198 L 213 158 C 218 138 218 115
    208 100 C 196 82 175 72 162 72
    L 140 130 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- V-neck detail / inner shadow -->
  <path d="M 118 72 L 140 130 L 162 72 L 155 68 L 140 118 L 125 68 Z" fill="${_adj(h,-35)}"/>
  <!-- Sheen -->
  <path d="M 115 80 C 124 100 122 215 124 300 L 119 322 C 117 288 119 215 111 95 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Snaps -->
  <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* Long Sleeve Bodysuit */
function bodysuitLong(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck hint -->
  <path d="M 120 42 Q 140 34 160 42 L 162 70 Q 150 64 140 63 Q 130 64 118 70 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Left sleeve -->
  <path d="M 80 95 C 70 100 58 118 50 148 C 44 170 43 200 45 225 C 46 240 50 255 55 262
    C 60 268 66 270 70 268 C 75 265 78 260 80 252 L 82 220 L 80 178 L 79 138 Z"
    fill="url(#fab${id})"/>
  <!-- Left sleeve highlight -->
  <path d="M 60 115 C 55 135 52 175 53 225 L 49 225 C 48 175 51 135 57 112 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Right sleeve -->
  <path d="M 200 95 C 210 100 222 118 230 148 C 236 170 237 200 235 225 C 234 240 230 255 225 262
    C 220 268 214 270 210 268 C 205 265 202 260 200 252 L 198 220 L 200 178 L 201 138 Z"
    fill="url(#fab${id})"/>
  <!-- Right sleeve highlight -->
  <path d="M 220 115 C 225 135 228 175 227 225 L 231 225 C 232 175 229 135 223 112 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Body -->
  <path d="M 120 68 Q 140 88 160 68 C 178 68 200 78 210 95
    L 200 138 L 198 190 L 196 245 L 193 295 C 192 313 186 322 180 324
    L 140 326 L 100 324 C 94 322 88 313 87 295 L 84 245 L 82 190 L 80 138
    L 70 95 C 80 78 102 68 120 68 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Sheen body -->
  <path d="M 118 72 C 127 92 126 215 128 298 L 123 322 C 121 288 122 215 116 90 Z" fill="rgba(255,255,255,0.11)"/>
  <!-- Turtleneck collar -->
  <path d="M 118 68 Q 140 58 162 68 L 164 90 Q 152 83 140 82 Q 128 83 116 90 Z" fill="${_adj(h,-20)}" opacity="0.7"/>
  <!-- Center seam -->
  <path d="M 140 88 L 140 322" stroke="rgba(0,0,0,0.05)" stroke-width="1" stroke-dasharray="3 4"/>
  <!-- Snaps -->
  <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* Ribbed Bodysuit */
function bodysuitRibbed(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  // Generate rib lines
  let ribs = '';
  for (let y = 100; y < 320; y += 8) {
    ribs += `<line x1="80" y1="${y}" x2="200" y2="${y}" stroke="rgba(0,0,0,0.06)" stroke-width="1.5"/>`;
  }
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Neck hint -->
  <path d="M 122 40 Q 140 32 158 40 L 160 70 Q 150 64 140 63 Q 130 64 120 70 Z" fill="rgba(220,190,165,0.18)"/>
  <!-- Straps -->
  <rect x="120" y="28" width="12" height="44" rx="6" fill="url(#fab${id})"/>
  <rect x="148" y="28" width="12" height="44" rx="6" fill="url(#fab${id})"/>
  <!-- Clip path for ribs -->
  <defs>
    <clipPath id="cp${id}">
      <path d="M 122 68 Q 140 98 158 68 C 176 68 200 79 211 98 C 221 115 219 136 214 155
        L 207 195 L 200 244 L 196 296 C 194 312 188 322 182 324 L 140 326 L 98 324
        C 92 322 86 312 84 296 L 80 244 L 73 195 L 66 155 C 61 136 59 115 69 98
        C 80 79 104 68 122 68 Z"/>
    </clipPath>
  </defs>
  <!-- Body fill -->
  <path d="M 122 68 Q 140 98 158 68 C 176 68 200 79 211 98 C 221 115 219 136 214 155
    L 207 195 L 200 244 L 196 296 C 194 312 188 322 182 324 L 140 326 L 98 324
    C 92 322 86 312 84 296 L 80 244 L 73 195 L 66 155 C 61 136 59 115 69 98
    C 80 79 104 68 122 68 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Rib lines clipped to bodysuit shape -->
  <g clip-path="url(#cp${id})">${ribs}</g>
  <!-- Sheen -->
  <path d="M 122 70 C 131 90 130 215 132 296 L 127 322 C 125 290 126 215 119 88 Z" fill="rgba(255,255,255,0.12)"/>
  <!-- Snaps -->
  <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* Cut-Out Bodysuit */
function bodysuitCutout(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <path d="M 120 40 Q 140 32 160 40 L 162 68 Q 150 62 140 61 Q 130 62 118 68 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Top part (above cut-out) -->
  <path d="M 120 66 Q 140 95 160 66 C 178 67 202 78 212 97 C 222 116 220 138 215 157
    L 210 185 L 200 192 L 182 196 L 140 197 L 98 196 L 80 192 L 70 185 L 65 157
    C 60 138 58 116 68 97 C 78 78 102 67 120 66 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Cut-out void area (skin) -->
  <path d="M 100 198 L 180 198 L 182 230 C 182 238 178 244 140 246 C 102 244 98 238 98 230 Z"
    fill="rgba(220,185,158,0.22)"/>
  <!-- Bottom part (below cut-out) -->
  <path d="M 98 230 C 97 237 97 244 98 250 L 82 265 L 80 298 C 80 314 86 322 92 324
    L 140 326 L 188 324 C 194 322 200 314 200 298 L 198 265 L 182 250
    C 183 244 183 237 182 230 C 178 248 162 250 140 250 C 118 250 102 248 98 230 Z"
    fill="url(#fab${id})"/>
  <!-- Straps -->
  <rect x="120" y="26" width="12" height="42" rx="6" fill="url(#fab${id})"/>
  <rect x="148" y="26" width="12" height="42" rx="6" fill="url(#fab${id})"/>
  <!-- Sheen -->
  <path d="M 118 70 C 127 90 126 180 128 192 L 124 195 C 122 182 123 90 116 88 Z" fill="rgba(255,255,255,0.11)"/>
  <!-- Snaps -->
  <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* Lace Bodysuit */
function bodysuitLace(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  // Generate lace diamond pattern
  let lace = '';
  for (let y = 85; y < 325; y += 16) {
    for (let x = 80; x < 205; x += 16) {
      const cx = x + ((Math.floor((y - 85) / 16) % 2) * 8);
      lace += `<path d="M ${cx} ${y} L ${cx+5} ${y+8} L ${cx} ${y+16} L ${cx-5} ${y+8} Z" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="0.8"/>`;
    }
  }
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <path d="M 116 44 Q 140 34 164 44 L 164 72 Q 152 65 140 64 Q 128 65 116 72 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Thin shoulder straps -->
  <rect x="121" y="30" width="9" height="44" rx="4.5" fill="url(#fab${id})"/>
  <rect x="150" y="30" width="9" height="44" rx="4.5" fill="url(#fab${id})"/>
  <defs>
    <clipPath id="lcp${id}">
      <path d="M 122 70 Q 140 100 158 70 C 177 70 201 81 212 100 C 222 117 220 139 215 158
        L 208 198 L 201 248 L 197 298 C 195 314 189 323 183 325 L 140 327 L 97 325
        C 91 323 85 314 83 298 L 79 248 L 72 198 L 65 158 C 60 139 58 117 68 100
        C 79 81 103 70 122 70 Z"/>
    </clipPath>
  </defs>
  <!-- Body -->
  <path d="M 122 70 Q 140 100 158 70 C 177 70 201 81 212 100 C 222 117 220 139 215 158
    L 208 198 L 201 248 L 197 298 C 195 314 189 323 183 325 L 140 327 L 97 325
    C 91 323 85 314 83 298 L 79 248 L 72 198 L 65 158 C 60 139 58 117 68 100
    C 79 81 103 70 122 70 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Lace pattern -->
  <g clip-path="url(#lcp${id})" opacity="0.85">${lace}</g>
  <!-- Sheen -->
  <path d="M 122 72 C 131 95 130 218 132 298 L 127 323 C 125 290 126 218 118 92 Z" fill="rgba(255,255,255,0.14)"/>
  <!-- Lace trim at neckline -->
  <path d="M 122 70 Q 140 100 158 70" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="3" stroke-dasharray="2 3"/>
  <!-- Snaps -->
  <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* Square Neck Bodysuit */
function bodysuitSquare(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <path d="M 114 42 Q 140 34 166 42 L 166 72 L 162 76 L 118 76 L 114 72 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Straps (wide square neck) -->
  <rect x="114" y="28" width="16" height="50" rx="2" fill="url(#fab${id})"/>
  <rect x="150" y="28" width="16" height="50" rx="2" fill="url(#fab${id})"/>
  <!-- Body -->
  <path d="M 114 74 L 166 74 C 185 74 206 83 216 101 C 225 117 223 140 218 159
    L 212 198 L 205 248 L 200 298 C 198 314 192 323 186 325 L 140 327 L 94 325
    C 88 323 82 314 80 298 L 75 248 L 68 198 L 62 159 C 57 140 55 117 64 101
    C 74 83 95 74 114 74 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Square neckline detail -->
  <path d="M 114 74 L 114 90 L 166 90 L 166 74" fill="none" stroke="${_adj(h,-30)}" stroke-width="1.5"/>
  <!-- Sheen -->
  <path d="M 112 78 C 122 100 120 218 122 298 L 117 323 C 115 288 116 218 108 96 Z" fill="rgba(255,255,255,0.11)"/>
  <!-- Snaps -->
  <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* Wrap / Ruched Bodysuit */
function bodysuitWrap(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  let ruches = '';
  for (let i = 0; i < 8; i++) {
    const y1 = 80 + i * 30; const y2 = y1 + 18;
    ruches += `<path d="M 142 ${y1} C 146 ${y1+5} 148 ${y1+10} 144 ${y1+15} C 140 ${y1+20} 136 ${y1+15} 138 ${y2}" fill="none" stroke="rgba(0,0,0,0.07)" stroke-width="1.5"/>`;
  }
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <path d="M 116 42 Q 140 34 164 42 L 164 70 Q 152 64 140 63 Q 128 64 116 70 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Straps -->
  <rect x="118" y="28" width="12" height="44" rx="6" fill="url(#fab${id})"/>
  <rect x="150" y="28" width="12" height="44" rx="6" fill="url(#fab${id})"/>
  <!-- Wrap / diagonal fold -->
  <path d="M 120 68 Q 140 96 160 68 C 178 68 202 79 213 98 C 223 117 221 139 216 158
    L 209 198 L 202 248 L 198 298 C 196 314 190 323 184 325 L 140 327 L 96 325
    C 90 323 84 314 82 298 L 78 248 L 71 198 L 64 158 C 59 139 57 117 67 98
    C 78 79 102 68 120 68 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Wrap fold line -->
  <path d="M 120 70 C 135 130 138 195 140 280" fill="none" stroke="${_adj(h,-25)}" stroke-width="2" opacity="0.5"/>
  <path d="M 160 70 C 145 130 142 195 140 280" fill="none" stroke="${_adj(h,-25)}" stroke-width="2" opacity="0.5"/>
  <!-- Ruching -->
  <g>${ruches}</g>
  <!-- Sheen -->
  <path d="M 118 72 C 128 92 127 218 129 298 L 124 322 C 122 288 123 218 116 90 Z" fill="rgba(255,255,255,0.11)"/>
  <!-- Snaps -->
  <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* Off-Shoulder Bodysuit */
function bodysuitOffShoulder(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 390', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="382" rx="56" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Shoulders hint -->
  <path d="M 60 75 Q 80 65 104 68 Q 128 60 140 62 Q 152 60 176 68 Q 200 65 220 75 L 222 96 C 205 88 185 82 162 80 L 140 78 L 118 80 C 95 82 75 88 58 96 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Off-shoulder band -->
  <path d="M 58 98 C 75 88 105 80 140 78 C 175 80 205 88 222 98 L 222 120 C 205 110 175 104 140 102 C 105 104 75 110 58 120 Z" fill="url(#fab${id})"/>
  <!-- Body -->
  <path d="M 58 118 C 75 108 105 102 140 100 C 175 102 205 108 222 118
    L 220 155 L 215 198 L 208 248 L 202 298 C 200 314 194 323 188 325
    L 140 327 L 92 325 C 86 323 80 314 78 298 L 72 248 L 65 198 L 60 155 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Sheen -->
  <path d="M 62 120 C 72 145 70 220 72 298 L 67 322 C 65 288 67 220 60 140 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Snaps -->
  <circle cx="132" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="140" cy="324" r="3.2" fill="rgba(0,0,0,0.24)"/>
  <circle cx="148" cy="323" r="3.2" fill="rgba(0,0,0,0.24)"/>
  `);
}

/* ══════════════════════════════════════════════
   DRESSES
   ══════════════════════════════════════════════ */

function dressMidi(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 420', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="413" rx="70" ry="7" fill="rgba(0,0,0,0.07)"/>
  <path d="M 122 38 Q 140 30 158 38 L 160 66 Q 150 60 140 59 Q 130 60 120 66 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Thin straps -->
  <rect x="120" y="26" width="10" height="42" rx="5" fill="url(#fab${id})"/>
  <rect x="150" y="26" width="10" height="42" rx="5" fill="url(#fab${id})"/>
  <!-- Bodice -->
  <path d="M 122 64 Q 140 92 158 64 C 174 64 198 76 209 94 C 218 110 216 132 212 150
    L 207 185 L 202 220 L 198 240 L 82 240 L 78 220 L 73 185 L 68 150
    C 64 132 62 110 71 94 C 82 76 106 64 122 64 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Skirt (flows out slightly) -->
  <path d="M 82 238 L 78 220 L 200 220 L 198 238
    C 196 260 192 290 186 320 C 180 350 174 375 170 400 L 110 400
    C 106 375 100 350 94 320 C 88 290 84 260 82 238 Z"
    fill="url(#fab${id})"/>
  <!-- Skirt flare at bottom -->
  <path d="M 95 350 C 92 365 92 380 94 400 L 110 400 C 108 382 108 366 110 350 Z" fill="rgba(255,255,255,0.08)"/>
  <path d="M 185 350 C 188 365 188 380 186 400 L 170 400 C 172 382 172 366 170 350 Z" fill="rgba(255,255,255,0.08)"/>
  <!-- Sheen -->
  <path d="M 122 66 C 130 86 128 215 130 395 L 125 398 C 123 215 124 86 118 86 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Waist seam -->
  <line x1="82" y1="238" x2="198" y2="238" stroke="rgba(0,0,0,0.07)" stroke-width="1.5"/>
  `);
}

function dressMaxi(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 420', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="414" rx="80" ry="7" fill="rgba(0,0,0,0.08)"/>
  <path d="M 120 40 Q 140 32 160 40 L 162 68 Q 151 62 140 61 Q 129 62 118 68 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Straps -->
  <rect x="121" y="27" width="11" height="43" rx="5.5" fill="url(#fab${id})"/>
  <rect x="148" y="27" width="11" height="43" rx="5.5" fill="url(#fab${id})"/>
  <!-- Bodice -->
  <path d="M 122 66 Q 140 94 158 66 C 175 66 198 77 209 95 C 218 111 216 133 212 151
    L 207 186 L 202 222 L 198 242
    L 82 242 L 78 222 L 73 186 L 68 151
    C 64 133 62 111 71 95 C 82 77 105 66 122 66 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Long flowing skirt -->
  <path d="M 80 240 L 200 240 L 205 285 C 208 315 210 350 208 395 L 208 410
    L 72 410 L 72 395 C 70 350 72 315 75 285 Z"
    fill="url(#fab${id})"/>
  <!-- Skirt volume / shadow details -->
  <path d="M 80 310 C 78 340 76 370 74 400 L 80 405 C 82 374 84 344 86 313 Z" fill="rgba(0,0,0,0.04)"/>
  <path d="M 200 310 C 202 340 204 370 206 400 L 200 405 C 198 374 196 344 194 313 Z" fill="rgba(0,0,0,0.04)"/>
  <!-- Sheen -->
  <path d="M 122 68 C 130 90 128 220 130 400 L 125 408 C 123 220 124 90 118 88 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Waist seam -->
  <line x1="82" y1="240" x2="198" y2="240" stroke="rgba(0,0,0,0.07)" stroke-width="1.5"/>
  `);
}

function dressShort(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="373" rx="65" ry="7" fill="rgba(0,0,0,0.07)"/>
  <path d="M 120 40 Q 140 32 160 40 L 162 66 Q 150 60 140 59 Q 130 60 118 66 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Straps -->
  <rect x="122" y="28" width="11" height="40" rx="5.5" fill="url(#fab${id})"/>
  <rect x="147" y="28" width="11" height="40" rx="5.5" fill="url(#fab${id})"/>
  <!-- Bodice + short skirt -->
  <path d="M 122 64 Q 140 92 158 64 C 175 64 198 75 209 93 C 218 109 216 131 212 149
    L 207 180 L 202 210 L 200 230
    C 200 255 195 290 188 340 L 188 360 L 92 360 L 92 340
    C 85 290 80 255 80 230 L 78 210 L 73 180 L 68 149
    C 64 131 62 109 71 93 C 82 75 105 64 122 64 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Skirt flare detail -->
  <path d="M 82 230 C 80 255 78 280 82 340 L 92 360 C 90 338 88 312 90 282 C 92 262 90 246 84 230 Z" fill="rgba(255,255,255,0.08)"/>
  <!-- Waist seam (A-line) -->
  <line x1="82" y1="230" x2="198" y2="230" stroke="rgba(0,0,0,0.07)" stroke-width="1.5"/>
  <!-- Sheen -->
  <path d="M 122 66 C 130 86 129 210 130 352 L 125 358 C 123 210 124 86 118 84 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

/* ══════════════════════════════════════════════
   TOPS / SHIRTS
   ══════════════════════════════════════════════ */

function topCrop(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 340', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="334" rx="55" ry="6" fill="rgba(0,0,0,0.07)"/>
  <path d="M 122 45 Q 140 37 158 45 L 160 70 Q 150 64 140 63 Q 130 64 120 70 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Straps -->
  <rect x="121" y="32" width="12" height="40" rx="6" fill="url(#fab${id})"/>
  <rect x="147" y="32" width="12" height="40" rx="6" fill="url(#fab${id})"/>
  <!-- Crop top body (shorter) -->
  <path d="M 122 68 Q 140 96 158 68 C 176 68 200 79 211 97 C 221 114 219 136 214 155
    L 208 190 L 202 235 L 78 235 L 72 190 L 66 155
    C 61 136 59 114 69 97 C 80 79 104 68 122 68 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Hem line -->
  <path d="M 80 233 L 200 233" stroke="${_adj(h,-20)}" stroke-width="1.5" opacity="0.4"/>
  <!-- Sheen -->
  <path d="M 122 70 C 131 90 130 190 131 230 L 126 233 C 125 188 126 90 118 88 Z" fill="rgba(255,255,255,0.11)"/>
  `);
}

function topShirt(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 360', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="353" rx="58" ry="7" fill="rgba(0,0,0,0.07)"/>
  <path d="M 120 40 Q 140 30 160 40 L 162 66 Q 150 60 140 59 Q 130 60 118 66 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Left sleeve -->
  <path d="M 80 90 C 70 95 56 115 48 140 C 42 158 42 178 46 195 C 48 204 54 210 60 209 C 66 207 70 202 72 193 L 75 168 L 78 138 L 80 110 Z" fill="url(#fab${id})"/>
  <!-- Right sleeve -->
  <path d="M 200 90 C 210 95 224 115 232 140 C 238 158 238 178 234 195 C 232 204 226 210 220 209 C 214 207 210 202 208 193 L 205 168 L 202 138 L 200 110 Z" fill="url(#fab${id})"/>
  <!-- Body -->
  <path d="M 120 64 Q 140 88 160 64 C 178 64 200 76 210 92 L 200 108 L 198 175 L 194 250 L 192 335 L 88 335 L 86 250 L 82 175 L 80 108 L 70 92 C 80 76 102 64 120 64 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Button placket -->
  <line x1="140" y1="72" x2="140" y2="328" stroke="rgba(0,0,0,0.07)" stroke-width="1"/>
  <circle cx="140" cy="105" r="3" fill="rgba(0,0,0,0.18)"/>
  <circle cx="140" cy="130" r="3" fill="rgba(0,0,0,0.18)"/>
  <circle cx="140" cy="155" r="3" fill="rgba(0,0,0,0.18)"/>
  <!-- Sheen -->
  <path d="M 118 68 C 128 90 126 250 128 330 L 123 333 C 121 250 122 90 114 88 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

/* ══════════════════════════════════════════════
   PANTS / JEANS
   ══════════════════════════════════════════════ */

function pants(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 420', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="413" rx="58" ry="7" fill="rgba(0,0,0,0.07)"/>
  <!-- Waistband -->
  <rect x="72" y="42" width="136" height="32" rx="4" fill="${_adj(h,-20)}"/>
  <!-- Belt loops -->
  <rect x="95" y="38" width="7" height="18" rx="2" fill="${_adj(h,-35)}"/>
  <rect x="137" y="38" width="7" height="18" rx="2" fill="${_adj(h,-35)}"/>
  <rect x="178" y="38" width="7" height="18" rx="2" fill="${_adj(h,-35)}"/>
  <!-- Fly -->
  <line x1="140" y1="73" x2="140" y2="130" stroke="rgba(0,0,0,0.15)" stroke-width="2"/>
  <!-- Left leg -->
  <path d="M 72 72 L 72 180 C 72 220 74 260 78 300 C 82 340 88 370 90 408 L 140 408
    L 140 185 L 138 73 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Right leg -->
  <path d="M 208 72 L 208 180 C 208 220 206 260 202 300 C 198 340 192 370 190 408 L 140 408
    L 140 185 L 142 73 Z"
    fill="url(#fab2${id})"/>
  <!-- Center crease left -->
  <line x1="112" y1="80" x2="106" y2="406" stroke="rgba(0,0,0,0.06)" stroke-width="1.5"/>
  <!-- Center crease right -->
  <line x1="168" y1="80" x2="174" y2="406" stroke="rgba(0,0,0,0.06)" stroke-width="1.5"/>
  <!-- Pocket detail left -->
  <path d="M 82 80 C 82 100 92 112 104 115 L 104 80 Z" fill="${_adj(h,-15)}" opacity="0.4"/>
  <!-- Sheen left leg -->
  <path d="M 86 80 C 92 130 90 280 92 400 L 87 406 C 85 280 87 130 82 78 Z" fill="rgba(255,255,255,0.09)"/>
  `);
}

/* ══════════════════════════════════════════════
   JACKET / BLAZER
   ══════════════════════════════════════════════ */

function blazer(c, bg) {
  const [b1,b2] = bg || _bg(c); const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 380', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="373" rx="62" ry="7" fill="rgba(0,0,0,0.07)"/>
  <path d="M 116 40 Q 140 30 164 40 L 165 68 Q 152 62 140 61 Q 128 62 115 68 Z" fill="rgba(220,190,165,0.2)"/>
  <!-- Lapels -->
  <path d="M 140 68 L 120 110 L 110 160 L 140 130 Z" fill="${_adj(h,15)}"/>
  <path d="M 140 68 L 160 110 L 170 160 L 140 130 Z" fill="${_adj(h,10)}"/>
  <!-- Left sleeve -->
  <path d="M 72 98 C 60 108 52 132 48 158 C 44 180 44 205 48 225 C 50 237 56 244 63 243 C 70 241 74 234 76 224 L 78 195 L 80 162 L 78 128 Z" fill="url(#fab${id})"/>
  <!-- Right sleeve -->
  <path d="M 208 98 C 220 108 228 132 232 158 C 236 180 236 205 232 225 C 230 237 224 244 217 243 C 210 241 206 234 204 224 L 202 195 L 200 162 L 202 128 Z" fill="url(#fab${id})"/>
  <!-- Body -->
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
  <!-- Sheen -->
  <path d="M 114 70 C 124 95 122 240 124 348 L 119 353 C 117 240 118 95 110 92 Z" fill="rgba(255,255,255,0.10)"/>
  `);
}

/* ══════════════════════════════════════════════
   SHOES
   ══════════════════════════════════════════════ */

function shoeSneaker(c, bg) {
  const [b1,b2] = bg || ['#f5f5f5','#e8e8e8']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 240', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="148" cy="230" rx="95" ry="8" fill="rgba(0,0,0,0.09)"/>
  <!-- Sole -->
  <path d="M 40 195 C 40 210 55 222 90 224 L 220 224 C 248 222 255 210 255 198 C 255 188 248 182 238 180 L 55 180 C 46 182 40 188 40 195 Z" fill="${_adj(h,-50)}"/>
  <!-- Midsole (white/light) -->
  <path d="M 42 190 C 42 196 56 202 90 203 L 220 203 C 246 201 252 196 252 190 C 252 185 246 181 238 180 L 55 180 C 48 181 42 185 42 190 Z" fill="${_adj(h,60)}"/>
  <!-- Upper -->
  <path d="M 58 180 C 55 165 54 148 58 132 C 62 118 72 108 85 102
    L 115 90 C 128 86 142 84 155 85 L 188 90 C 210 96 235 108 245 128
    C 252 145 252 164 250 180 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Toe cap -->
  <path d="M 58 180 C 55 165 54 148 58 132 C 62 118 72 108 85 102 L 100 96 C 84 112 75 132 74 160 L 72 180 Z" fill="${_adj(h,25)}" opacity="0.6"/>
  <!-- Laces area -->
  <rect x="110" y="92" width="80" height="62" rx="5" fill="${_adj(h,50)}" opacity="0.4"/>
  <!-- Laces -->
  <line x1="118" y1="100" x2="182" y2="104" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <line x1="116" y1="112" x2="180" y2="116" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <line x1="114" y1="124" x2="178" y2="128" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <line x1="112" y1="136" x2="176" y2="140" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
  <!-- Collar -->
  <path d="M 200 95 C 220 105 238 118 245 128 L 248 158 C 238 148 220 138 205 135 Z" fill="${_adj(h,-15)}" opacity="0.5"/>
  <!-- Brand stripe -->
  <path d="M 165 92 C 180 96 200 106 218 120 L 212 128 C 194 115 175 105 160 100 Z" fill="rgba(255,255,255,0.3)"/>
  <!-- Sheen -->
  <path d="M 90 106 C 80 125 78 155 79 175 L 75 178 C 74 155 76 124 87 104 Z" fill="rgba(255,255,255,0.12)"/>
  `);
}

function shoeHeel(c, bg) {
  const [b1,b2] = bg || ['#f8f5f2','#ede8e2']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 260', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="130" cy="252" rx="75" ry="7" fill="rgba(0,0,0,0.08)"/>
  <!-- Stiletto heel -->
  <rect x="198" y="175" width="10" height="72" rx="5" fill="${_adj(h,-40)}"/>
  <!-- Heel base -->
  <ellipse cx="203" cy="248" rx="12" ry="4" fill="${_adj(h,-55)}"/>
  <!-- Platform/sole -->
  <path d="M 40 200 C 40 210 55 218 95 220 L 210 220 C 225 218 235 212 235 204 C 235 198 230 194 220 192 L 50 192 C 44 194 40 196 40 200 Z" fill="${_adj(h,-45)}"/>
  <!-- Insole -->
  <path d="M 42 195 C 42 200 56 205 95 206 L 210 206 C 224 204 230 200 230 196 C 230 193 225 192 218 192 L 52 192 C 46 192 42 193 42 195 Z" fill="${_adj(h,25)}" opacity="0.5"/>
  <!-- Upper front (vamp) -->
  <path d="M 42 193 C 40 178 44 160 58 142 C 72 124 96 112 118 108 L 148 105 L 162 108
    C 176 112 192 120 202 130 L 212 148 L 218 168 L 220 192 Z"
    fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Counter/heel area upper -->
  <path d="M 198 175 L 200 135 C 194 125 180 116 165 112 L 218 168 Z" fill="${_adj(h,-20)}" opacity="0.5"/>
  <!-- Ankle strap -->
  <rect x="88" y="130" width="110" height="14" rx="7" fill="${_adj(h,-10)}" opacity="0.6"/>
  <!-- Strap buckle -->
  <rect x="190" y="128" width="12" height="18" rx="3" fill="${_adj(h,-40)}"/>
  <!-- Toe detail / pointed toe -->
  <path d="M 42 193 C 40 178 44 160 58 142 L 78 148 C 68 162 65 178 66 193 Z" fill="${_adj(h,20)}" opacity="0.4"/>
  <!-- Sheen -->
  <path d="M 56 148 C 50 165 48 178 50 192 L 46 192 C 44 178 46 162 52 146 Z" fill="rgba(255,255,255,0.12)"/>
  `);
}

function shoeBoots(c, bg) {
  const [b1,b2] = bg || ['#f2eee8','#e5e0d8']; const h = _hex(c); const id = Math.random().toString(36).slice(2,7);
  return _wrap('0 0 280 360', b1, b2, `
  ${_defs(id, c)}
  <ellipse cx="140" cy="353" rx="65" ry="7" fill="rgba(0,0,0,0.08)"/>
  <!-- Sole -->
  <path d="M 42 310 C 40 320 55 330 95 332 L 215 332 C 245 330 248 320 248 312 C 248 304 242 298 232 296 L 56 296 C 46 298 42 304 42 310 Z" fill="${_adj(h,-55)}"/>
  <!-- Block heel -->
  <rect x="192" y="252" width="42" height="46" rx="3" fill="${_adj(h,-40)}"/>
  <!-- Midsole -->
  <path d="M 44 305 C 44 310 58 315 95 316 L 215 316 C 242 314 246 310 246 306 C 246 302 242 298 232 296 L 56 296 C 48 298 44 302 44 305 Z" fill="${_adj(h,30)}" opacity="0.6"/>
  <!-- Shaft / boot upper - left side -->
  <path d="M 56 296 L 56 105 C 56 90 65 78 80 74 C 95 70 110 72 118 80 L 120 120 L 115 250 L 112 296 Z" fill="url(#fab${id})" filter="url(#drp${id})"/>
  <!-- Shaft / boot upper - right side -->
  <path d="M 224 296 L 222 250 L 216 120 L 218 80 C 226 72 242 70 255 74 C 268 78 274 90 274 105 L 274 296 Z" fill="url(#fab2${id})"/>
  <!-- Front shaft center -->
  <path d="M 120 80 L 116 296 L 168 296 L 164 80 C 152 74 132 74 120 80 Z" fill="url(#fab${id})"/>
  <!-- Zipper -->
  <line x1="140" y1="85" x2="140" y2="295" stroke="rgba(0,0,0,0.15)" stroke-width="2"/>
  <rect x="136" y="140" width="8" height="12" rx="2" fill="${_adj(h,-30)}" opacity="0.6"/>
  <!-- Sheen -->
  <path d="M 62 108 C 60 150 59 230 60 290 L 56 292 C 55 230 56 150 58 106 Z" fill="rgba(255,255,255,0.10)"/>
  <!-- Top cuff -->
  <path d="M 56 105 C 56 90 65 78 80 74 L 120 80 L 164 80 L 200 74 C 215 78 222 90 222 105 L 220 115 C 205 108 180 105 140 104 C 100 105 75 108 60 115 Z" fill="${_adj(h,-15)}" opacity="0.7"/>
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
    case 'top-crop':             return topCrop(c, bg);
    case 'top-shirt':            return topShirt(c, bg);
    case 'pants':                return pants(c, bg);
    case 'blazer':               return blazer(c, bg);
    case 'shoe-sneaker':         return shoeSneaker(c, bg);
    case 'shoe-heel':            return shoeHeel(c, bg);
    case 'shoe-boots':           return shoeBoots(c, bg);
    case 'bag-tote':             return bagTote(c, bg);
    case 'bag-crossbody':        return bagCrossbody(c, bg);
    default:                     return bodysuitTank(c, bg);
  }
}
