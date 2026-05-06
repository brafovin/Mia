/* ==========================================================
   MIASHOP – Produktdaten mit Farbvarianten
   ========================================================== */

// Gemeinsame Farbpaletten
const PALETTE = {
  // Neutrale
  schwarz:      { name: 'Schwarz',       hex: '#111111' },
  anthrazit:    { name: 'Anthrazit',     hex: '#3a3a3a' },
  grau:         { name: 'Grau',          hex: '#888888' },
  graumel:      { name: 'Grau Melange',  hex: '#a0a0a0' },
  weiss:        { name: 'Weiß',          hex: '#f5f5f0' },
  creme:        { name: 'Creme',         hex: '#f0e8d0' },
  ivory:        { name: 'Ivory',         hex: '#f8f4e8' },
  // Braun-Töne
  camel:        { name: 'Camel',         hex: '#c4924a' },
  caramel:      { name: 'Caramel',       hex: '#b87030' },
  cognac:       { name: 'Cognac',        hex: '#c07840' },
  sand:         { name: 'Sand',          hex: '#d4c090' },
  beige:        { name: 'Beige',         hex: '#d8c898' },
  latte:        { name: 'Latte',         hex: '#c0a878' },
  schokobraun:  { name: 'Schokobraun',   hex: '#3d2010' },
  dunkelbraun:  { name: 'Dunkelbraun',   hex: '#5a3a20' },
  // Rosa / Pink
  rosa:         { name: 'Rosa',          hex: '#f0a0b8' },
  babyrose:     { name: 'Baby-Rose',     hex: '#f8d0dc' },
  altrosa:      { name: 'Altrosa',       hex: '#c87888' },
  dustyrose:    { name: 'Dusty Rose',    hex: '#d4a0a8' },
  blush:        { name: 'Blush',         hex: '#f0c0c0' },
  pink:         { name: 'Pink',          hex: '#e060a0' },
  // Rot / Orange
  rot:          { name: 'Rot',           hex: '#c02020' },
  koralle:      { name: 'Koralle',       hex: '#e07050' },
  terracotta:   { name: 'Terracotta',    hex: '#c05830' },
  rost:         { name: 'Rost',          hex: '#a04020' },
  lachs:        { name: 'Lachs',         hex: '#e89878' },
  // Burgund / Weinrot
  burgund:      { name: 'Burgund',       hex: '#7a1830' },
  weinrot:      { name: 'Weinrot',       hex: '#8a1a28' },
  // Blau
  navy:         { name: 'Navy',          hex: '#1a2e5e' },
  dunkelblau:   { name: 'Dunkelblau',    hex: '#0a1e4e' },
  taubenblau:   { name: 'Taubenblau',    hex: '#6080a8' },
  himmelblau:   { name: 'Himmelblau',    hex: '#4a90d4' },
  hellblau:     { name: 'Hellblau',      hex: '#90c0e0' },
  denim:        { name: 'Denim',         hex: '#3a6098' },
  jeansblau:    { name: 'Jeansblau',     hex: '#5070a0' },
  babyblau:     { name: 'Babyblau',      hex: '#a8d0f0' },
  // Grün
  mintgruen:    { name: 'Mintgrün',      hex: '#5ab8a0' },
  sage:         { name: 'Sage',          hex: '#7a9870' },
  olivgruen:    { name: 'Olivgrün',      hex: '#4a6030' },
  waldgruen:    { name: 'Waldgrün',      hex: '#1e4828' },
  salbei:       { name: 'Salbei',        hex: '#8aaa70' },
  smaragd:      { name: 'Smaragd',       hex: '#1a7858' },
  khaki:        { name: 'Khaki',         hex: '#a8986a' },
  // Lila / Violett
  lavendel:     { name: 'Lavendel',      hex: '#b098d0' },
  flieder:      { name: 'Flieder',       hex: '#c8a8d8' },
  lila:         { name: 'Lila',          hex: '#8060b0' },
  pflaume:      { name: 'Pflaume',       hex: '#6a2a5a' },
  mauve:        { name: 'Mauve',         hex: '#b88090' },
  // Gold / Champagne
  champagne:    { name: 'Champagne',     hex: '#d4b87a' },
  gold:         { name: 'Gold',          hex: '#c8a030' },
  rosegold:     { name: 'Roségold',      hex: '#d4887a' },
  // Gelb
  gelb:         { name: 'Gelb',          hex: '#e8c020' },
  buttercup:    { name: 'Buttercup',     hex: '#f0d040' },
  mustard:      { name: 'Mustard',       hex: '#c8900a' },
  // Türkis
  turkis:       { name: 'Türkis',        hex: '#30a8b8' },
  // Metallic
  silber:       { name: 'Silber',        hex: '#b0b8c8' },
  bronze:       { name: 'Bronze',        hex: '#b08050' },
  kupfer:       { name: 'Kupfer',        hex: '#c86830' },
  // Beauty specials
  korallrot:    { name: 'Korallrot',     hex: '#e84040' },
  beerenpink:   { name: 'Beerenpink',   hex: '#d0306a' },
  nudenude:     { name: 'Nude',          hex: '#d4a880' },
  plumrot:      { name: 'Pflaumrot',     hex: '#8a1848' },
  mintfrisch:   { name: 'Mintfrisch',    hex: '#3ab8a0' },
};

// Shortcut: holt Hex-Farben für colorDots (rückwärtskompatibel)
function v(...keys) {
  return keys.map(k => PALETTE[k] || { name: k, hex: '#888' });
}

const products = [

  /* ================================================================
     TOP PRODUKT – Ganz oben im Shop
     ================================================================ */
  {
    id: 1000, cat: 'damen', brand: 'MIA LABEL',
    name: 'Off-Shoulder Maxi Kleid Satin-Kragen',
    svgType: 'dress-off-shoulder',
    price: 34.99, oldPrice: 69.99, badge: 'hot',
    desc: 'Elegantes Off-Shoulder Maxi Kleid mit raffiniertem Satin-Drapéekragen, tief fallender Schulterpartie und seitlichem Schlitz. Figurbetonter Schnitt, bodenlanges Silhouette.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','anthrazit','navy','burgund','weinrot','dunkelbraun','olivgruen','smaragd','lila','rot','weiss','creme','camel','taubenblau','grau','blush','dustyrose','sage'),
    rating: 5.0, reviews: 12043
  },
  {
    id: 999, cat: 'damen', brand: 'MIA LABEL',
    name: 'Bodycon Maxi Kleid – Langarm Raffung',
    svgType: 'dress-bodycon',
    price: 29.99, oldPrice: 59.99, badge: 'hot',
    desc: 'Das Signature-Kleid von MIA LABEL: langer Ärmel, hoher Mock-Neck und üppige Seitenraffung für eine perfekte Sanduhr-Silhouette. Bodenlang, super elastischer Stretch-Jersey.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','anthrazit','weiss','navy','burgund','olivgruen','dunkelbraun','grau','weinrot','camel','taubenblau','smaragd','rost','creme','lila','rot','blush','sage'),
    rating: 5.0, reviews: 9821
  },

  /* ================================================================
     BODYS
     ================================================================ */
  {
    id: 101, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Spaghetti-Träger Body',
    svgType: 'bodysuit-tank',
    price: 12.99, oldPrice: 24.99, badge: 'hot',
    desc: 'Klassischer Spaghetti-Träger-Body aus weichem Viskose-Mix. Formschön, körpernah, mit Druckknöpfen am Schritt. Perfekt unter Blazer, Jeans oder solo.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','anthrazit','grau','weiss','creme','navy','burgund','terracotta','olivgruen','mintgruen','flieder','rosa','babyrose','camel','dustyrose','lila'),
    rating: 4.8, reviews: 1203
  },
  {
    id: 102, cat: 'bodys', brand: 'NOVA STYLE',
    name: 'Ripp-Body Klassisch',
    svgType: 'bodysuit-ribbed',
    price: 10.99, oldPrice: 19.99, badge: 'new',
    desc: 'Zeitloser Ripp-Body aus elastischem Baumwoll-Ripp. Angenehm dehnbar, atmungsaktiv. Das must-have Basics für jeden Kleiderschrank.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','schwarz','grau','graumel','creme','ivory','navy','taubenblau','mintgruen','sage','altrosa','rosa','camel','latte','dunkelbraun','mustard'),
    rating: 4.9, reviews: 2145
  },
  {
    id: 103, cat: 'bodys', brand: 'THE DAILY EDIT',
    name: 'V-Neck Body',
    svgType: 'bodysuit-vneck',
    price: 13.99, badge: 'new',
    desc: 'Eleganter V-Ausschnitt-Body in vielen schönen Farben. Weiches Interlock-Jersey, formt die Figur. Von Business bis Date-Night.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('camel','latte','schwarz','weiss','navy','himmelblau','burgund','weinrot','rot','terracotta','olivgruen','sage','lila','lavendel','rosa','altrosa','dustyrose','grau'),
    rating: 4.7, reviews: 876
  },
  {
    id: 104, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Langarm Turtleneck Body',
    svgType: 'bodysuit-long',
    price: 17.99, oldPrice: 34.99, badge: 'sale',
    desc: 'Schicker Langarm-Body mit hohem Turtleneck-Kragen. Weicher Viskose-Stoff für den Herbst. Trägt sich wie ein zweites Hautbild.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('camel','creme','schokobraun','cognac','schwarz','anthrazit','grau','navy','olivgruen','waldgruen','burgund','weinrot','taubenblau','lila','pflaume','mustard','rost'),
    rating: 4.8, reviews: 654
  },
  {
    id: 105, cat: 'bodys', brand: 'URBAN BASICS',
    name: 'Cut-Out Bodysuit',
    svgType: 'bodysuit-cutout',
    price: 15.99, badge: 'hot',
    desc: 'Trendy Cut-Out-Body mit offenem Midriff-Detail. Spaghetti-Träger, Snap-Verschluss. Der Hingucker auf jeder Party.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('terracotta','rost','koralle','schwarz','weiss','burgund','rot','navy','olivgruen','mintgruen','lila','rosa','pink','gold','champagne'),
    rating: 4.6, reviews: 432
  },
  {
    id: 106, cat: 'bodys', brand: 'PURE & CO',
    name: 'Spitzen-Body',
    svgType: 'bodysuit-lace',
    price: 18.99, oldPrice: 34.99, badge: 'sale',
    desc: 'Romantischer Spitzen-Body mit feinem All-over-Spitzenmuster. Gefüttertes Brustteil, Spaghetti-Träger. Zarter Look für besondere Anlässe.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('altrosa','weiss','schwarz','creme','ivory','babyrose','dustyrose','lavendel','mintgruen','navy','champagne','rosegold','burgund','mauve','taubenblau'),
    rating: 4.9, reviews: 789
  },
  {
    id: 107, cat: 'bodys', brand: 'NOVA STYLE',
    name: 'Quadrat-Ausschnitt Body',
    svgType: 'bodysuit-square',
    price: 11.99, badge: 'new',
    desc: 'Trendiger Body mit breitem quadratischen Ausschnitt und Schulterträgern. Aus straffem Jersey, formend.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('navy','dunkelblau','schwarz','weiss','creme','burgund','olivgruen','waldgruen','taubenblau','himmelblau','babyblau','lila','flieder','rosa','terracotta','mustard','grau'),
    rating: 4.7, reviews: 534
  },
  {
    id: 108, cat: 'bodys', brand: 'THE DAILY EDIT',
    name: 'Off-Shoulder Body',
    svgType: 'bodysuit-offshoulder',
    price: 16.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Verführerischer Off-Shoulder-Body mit elastischem Schulterband. Mit Jeans oder Shorts für den perfekten Sommeroutfit.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('mintgruen','smaragd','sage','schwarz','weiss','rosa','babyrose','koralle','lachs','himmelblau','hellblau','lila','lavendel','gelb','buttercup','turkis','flieder','altrosa'),
    rating: 4.8, reviews: 347
  },
  {
    id: 109, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Wrap-Body Gerafft',
    svgType: 'bodysuit-wrap',
    price: 19.99, badge: 'hot',
    desc: 'Schöner Wrap-Body mit Raffung vorne für einen figurbetonenden V-Effekt. Spaghetti-Träger, angenehm weich.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('flieder','lila','lavendel','pflaume','schwarz','weiss','grau','rosa','altrosa','navy','olivgruen','sage','terracotta','camel','burgund','himmelblau','turkis','mustard'),
    rating: 4.7, reviews: 489
  },
  {
    id: 110, cat: 'bodys', brand: 'PURE & CO',
    name: 'Langarm Ripp Body',
    svgType: 'bodysuit-long',
    price: 14.99, badge: 'new',
    desc: 'Gemütlicher Langarm-Ripp-Body aus elastischem Baumwoll-Ripp. Wärmend und formend – ideal für kühle Jahreszeiten.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schokobraun','dunkelbraun','schwarz','anthrazit','waldgruen','olivgruen','navy','burgund','weinrot','grau','graumel','camel','caramel','lila','pflaume','rost','taubenblau'),
    rating: 4.8, reviews: 923
  },
  {
    id: 111, cat: 'bodys', brand: 'NOVA STYLE',
    name: 'Satin Body Elegant',
    svgType: 'bodysuit-tank',
    price: 22.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Luxuriöser Satin-Body in vielen festlichen Farben. Fließendes Material, einstellbare Träger. Für festliche Anlässe und elegante Abende.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('champagne','ivory','weiss','rosegold','gold','schwarz','navy','burgundrot','mintgruen','himmelblau','lavendel','lila','babyrose','dustyrose','creme','taubenblau'),
    rating: 4.9, reviews: 312
  },
  {
    id: 112, cat: 'bodys', brand: 'THE DAILY EDIT',
    name: 'Ripp-Body 3er Set',
    svgType: 'bodysuit-ribbed',
    price: 24.99, oldPrice: 44.99, badge: 'hot',
    desc: 'Vorteilspack: 3 Basic-Bodies aus Ripp-Jersey. Perfekte Layering-Pieces für jeden Look. Zeitloser Style, alltagstauglich.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','weiss','grau','navy','creme','camel','rosa','mintgruen','lila','terracotta','burgund','taubenblau'),
    rating: 4.9, reviews: 1876
  },
  {
    id: 113, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Deep-V Spaghetti-Body',
    svgType: 'bodysuit-vneck',
    price: 13.99, badge: 'new',
    desc: 'Figurbetonter Deep-V-Body in vielen intensiven Farben. Weiches Interlock, Spaghetti-Träger, elastischer Bund.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('burgund','weinrot','schwarz','navy','rot','terracotta','koralle','olivgruen','waldgruen','lila','pflaume','taubenblau','grau','anthrazit','camel','mustard','pink'),
    rating: 4.7, reviews: 645
  },
  {
    id: 114, cat: 'bodys', brand: 'URBAN BASICS',
    name: 'Mesh Cut-Out Body',
    svgType: 'bodysuit-cutout',
    price: 17.99, oldPrice: 32.99, badge: 'sale',
    desc: 'Edgy Mesh-Body mit auffälligen Cut-Out-Details an Taille und Schultern. Halbdurchsichtiges Obermaterial mit Futter am Brust.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','anthrazit','navy','burgund','olivgruen','lila','rot','creme','weiss','rosegold'),
    rating: 4.6, reviews: 298
  },
  {
    id: 115, cat: 'bodys', brand: 'PURE & CO',
    name: 'Schulterfreier Body',
    svgType: 'bodysuit-offshoulder',
    price: 15.99, badge: 'new',
    desc: 'Romantischer schulterfreier Body. Breites elastisches Band, körpernah. Kombiniert mit Mom-Jeans für lässige Summer-Vibes.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('dustyrose','mauve','blush','schwarz','weiss','creme','lavendel','flieder','mintgruen','sage','babyblau','turkis','koralle','lachs','gelb','grau','navy','olivgruen'),
    rating: 4.8, reviews: 567
  },
  {
    id: 116, cat: 'bodys', brand: 'THE DAILY EDIT',
    name: 'Strick-Body Square Neck',
    svgType: 'bodysuit-square',
    price: 14.99, badge: 'hot',
    desc: 'Weicher Ripp-Strick-Body mit quadratischem Ausschnitt. Herbstlich, warm, fashionable. Dazu ein langer Rock oder weite Jeans.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('olivgruen','waldgruen','sage','schwarz','camel','creme','dunkelbraun','rost','terracotta','navy','grau','lila','burgund','mustard','weinrot','salbei','mintgruen'),
    rating: 4.7, reviews: 423
  },
  {
    id: 117, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Gerafft-Body Sommerlich',
    svgType: 'bodysuit-wrap',
    price: 16.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Verspielter geraffter Body in leuchtenden Sommerfarben. Spaghetti-Träger, angenehm weicher Stoff.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('himmelblau','turkis','mintgruen','koralle','lachs','gelb','buttercup','rosa','pink','weiss','schwarz','lavendel','babyblau','sage','navy','creme','babyrose'),
    rating: 4.6, reviews: 378
  },
  {
    id: 118, cat: 'bodys', brand: 'NOVA STYLE',
    name: 'Spitzen-Langarm Body',
    svgType: 'bodysuit-lace',
    price: 21.99, badge: 'new',
    desc: 'Traumhafter Langarm-Body aus feiner Chantilly-Spitze über Viskose-Futter. Elegant und romantic.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('ivory','weiss','creme','babyrose','altrosa','schwarz','navy','champagne','mintgruen','lavendel','lila','dustyrose','blush','sage','taubenblau','rosegold'),
    rating: 4.9, reviews: 234
  },

  /* ================================================================
     DAMEN
     ================================================================ */
  {
    /* --- NEUE KLEIDER TYPEN --- */
    id: 700, cat: 'damen', brand: 'MIA LABEL',
    name: 'Bodycon Maxi Kleid Langarm',
    svgType: 'dress-bodycon',
    price: 27.99, oldPrice: 54.99, badge: 'hot',
    desc: 'Figurbetontes Bodycon-Kleid mit langen Ärmeln, hohem Mock-Neck und ausgeprägter Seitenraffung. Formt eine Sanduhr-Silhouette. Midi-Länge, leicht elastischer Jersey.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','anthrazit','weiss','creme','navy','burgund','olivgruen','dunkelbraun','grau','weinrot','camel','dunkelblau','taubenblau','smaragd','rost'),
    rating: 4.9, reviews: 4821
  },
  {
    id: 701, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Bodycon Kleid Turtleneck',
    svgType: 'dress-bodycon',
    price: 24.99, badge: 'new',
    desc: 'Sexy Bodycon-Kleid mit Turtleneck und aufwendiger Raffung an den Seiten. Enganliegend und trotzdem bequem dank Stretch-Mix. Perfekt für den Ausgehnight.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','burgundrot','weinrot','navy','smaragd','anthrazit','dunkelbraun','lila','rot','olivgruen','grau','taubenblau','creme','weiss'),
    rating: 4.8, reviews: 3210
  },
  {
    id: 702, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Pailletten-Kleid Festlich',
    svgType: 'dress-sequin',
    price: 34.99, oldPrice: 69.99, badge: 'hot',
    desc: 'Atemberaubendes Paillettenkleid mit schimmernden Glitzersteinen, Satin-Saum und zartem Satinband in der Taille. Für unvergessliche Abende.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','navy','burgund','weinrot','smaragd','olivgruen','anthrazit','lila','dunkelblau','gold','rosegold','silber'),
    rating: 4.9, reviews: 2876
  },
  {
    id: 703, cat: 'damen', brand: 'MIA LABEL',
    name: 'Cocktailkleid Wickel-Stil',
    svgType: 'dress-cocktail',
    price: 29.99, oldPrice: 59.99, badge: 'sale',
    desc: 'Elegantes Wickel-Cocktailkleid mit tiefem V-Ausschnitt und fließendem Rock. Asymmetrischer Gürtel mit Schleife betont die Taille perfekt.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('burgund','navy','schwarz','smaragd','weinrot','dunkelblau','taubenblau','olivgruen','anthrazit','lila','rot','creme','camel','altrosa'),
    rating: 4.8, reviews: 1987
  },
  {
    id: 1, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Sommer Wickelkleid',
    svgType: 'dress-midi',
    price: 22.99, oldPrice: 44.99, badge: 'sale',
    desc: 'Wunderschönes Midi-Kleid im Wickelstil mit romantischem Blumenprint. Fließender Chiffon für leichten Tragekomfort.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('rosa','altrosa','dustyrose','himmelblau','mintgruen','gelb','koralle','lavendel','weiss','creme','schwarz','navy','turkis','babyrose','lachs','salbei'),
    rating: 4.8, reviews: 634
  },
  {
    id: 2, cat: 'damen', brand: 'URBAN BASICS',
    name: 'Oversized Blazer',
    svgType: 'blazer',
    price: 34.99, oldPrice: 69.99, badge: 'hot',
    desc: 'Klassischer Oversized-Blazer in zeitlosem Design. Hochwertige Webqualität mit strukturierter Schulterpartie.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('camel','schwarz','creme','navy','grau','anthrazit','olivgruen','burgund','taubenblau','beige','mustard','rost','weiss','dunkelbraun','sage','weinrot'),
    rating: 4.9, reviews: 421
  },
  {
    id: 3, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Ripp-Crop-Top 2er Set',
    svgType: 'top-crop',
    price: 9.99, badge: 'new',
    desc: 'Zwei hochwertige Ripp-Crop-Tops im Set. Körpernahes Material mit angenehmer Stretchqualität.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','schwarz','grau','creme','rosa','mintgruen','himmelblau','lavendel','camel','navy','koralle','lachs','gelb','turkis','altrosa','babyblau','sage','mustard'),
    rating: 4.7, reviews: 892
  },
  {
    id: 4, cat: 'damen', brand: 'MIA LABEL',
    name: 'Maxi-Kleid Satin',
    svgType: 'dress-maxi',
    price: 39.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Luxuriöses Maxi-Kleid aus satinartigem Viskose-Mix. Fließende Silhouette mit elegantem Ausschnitt.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('navy','champagne','burgund','schwarz','olivgruen','mintgruen','himmelblau','rosa','lila','taubenblau','creme','ivory','smaragd','weinrot','camel','pflaume'),
    rating: 4.9, reviews: 287
  },
  {
    id: 5, cat: 'damen', brand: 'PURE & CO',
    name: 'Highwaist Jeans Wide Leg',
    svgType: 'pants',
    price: 27.99, oldPrice: 54.99, badge: 'sale',
    desc: 'Trendige Wide-Leg-Jeans mit hohem Bund. Klassische Waschung in Blau.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('jeansblau','denim','navy','schwarz','dunkelblau','hellblau','grau','weiss','khaki','olivgruen'),
    rating: 4.6, reviews: 543
  },
  {
    id: 6, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Kurzarm Sommerkleid',
    svgType: 'dress-short',
    price: 14.99, badge: 'new',
    desc: 'Leichtes Sommerkleid für den entspannten Alltag. Weicher Jersey-Stoff, körperfreundliche Passform.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('gelb','buttercup','himmelblau','mintgruen','koralle','lachs','rosa','babyrose','lavendel','weiss','schwarz','turkis','babyblau','altrosa','creme','salbei','mustard','flieder'),
    rating: 4.7, reviews: 523
  },
  {
    id: 7, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Rüschen-Bluse',
    svgType: 'top-shirt',
    price: 15.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Romantische Bluse mit Rüschenkragen aus leichtem Viskose-Crêpe. Für Büro und Freizeit.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','creme','schwarz','altrosa','mintgruen','himmelblau','lavendel','navy','gelb','koralle','sage','taubenblau','ivory','rosa','babyblau','mustard'),
    rating: 4.5, reviews: 267
  },
  {
    id: 8, cat: 'damen', brand: 'MIA LABEL',
    name: 'Trenchcoat Classic',
    svgType: 'blazer',
    price: 49.99, oldPrice: 99.99, badge: 'sale',
    desc: 'Zeitloser Trenchcoat. Doppelreiher mit Gürtel und Schulterklappen. Das Must-Have für den Übergang.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('camel','schwarz','beige','creme','olivgruen','grau','dunkelbraun','navy','rost','anthrazit'),
    rating: 4.8, reviews: 312
  },
  {
    id: 9, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Mini-Kleid A-Linie',
    svgType: 'dress-short',
    price: 17.99, badge: 'new',
    desc: 'Niedliches A-Linien Mini-Kleid in fröhlichen Farben. Leichter Jerseytsoff, bequem für den Sommer.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('rosa','babyrose','altrosa','koralle','lachs','gelb','mintgruen','himmelblau','lavendel','weiss','schwarz','turkis','creme','orange','flieder','babyblau'),
    rating: 4.7, reviews: 412
  },
  {
    id: 10, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Strickcardigan Oversized',
    svgType: 'blazer',
    price: 24.99, oldPrice: 49.99, badge: 'hot',
    desc: 'Kuscheliger Grobstrick-Cardigan mit Reverskragen und Taschen. Perfekt für Herbst und Winter.',
    sizes: ['XS/S','M/L','XL/XXL'],
    variants: v('camel','creme','grau','schwarz','olivgruen','burgund','navy','dunkelbraun','lavendel','weiss','rost','sage','mustard','taubenblau','weinrot','schokobraun'),
    rating: 4.8, reviews: 378
  },

  /* ================================================================
     HERREN
     ================================================================ */
  {
    id: 13, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Premium Hoodie',
    svgType: 'top-shirt',
    price: 24.99, oldPrice: 54.99, badge: 'hot',
    desc: 'Schwerer 400g-Baumwoll-Hoodie für maximalen Komfort. Känguru-Tasche, Metall-Ösen.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','anthrazit','grau','graumel','navy','olivgruen','burgund','creme','weiss','dunkelbraun','himmelblau','lila','rost','camel','taubenblau','waldgruen'),
    rating: 4.9, reviews: 1043
  },
  {
    id: 14, cat: 'herren', brand: 'MIA LABEL',
    name: 'Slim Fit Anzug',
    svgType: 'blazer',
    price: 69.99, oldPrice: 149.99, badge: 'sale',
    desc: 'Edler 2-Teiler-Anzug in schlanker Passform. Hochwertiger Woll-Mix. Für Business und festliche Anlässe.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('navy','anthrazit','grau','schwarz','taubenblau','camel','olivgruen','burgund','dunkelbraun','creme','beige'),
    rating: 4.8, reviews: 287
  },
  {
    id: 15, cat: 'herren', brand: 'PURE & CO',
    name: 'Cargo Hose Relaxed',
    svgType: 'pants',
    price: 22.99, badge: 'new',
    desc: 'Bequeme Cargo-Hose im Relaxed-Fit mit 6 Taschen. Robuste Baumwoll-Twill-Qualität.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('olivgruen','schwarz','khaki','beige','navy','grau','dunkelbraun','rost','waldgruen','anthrazit','sand'),
    rating: 4.7, reviews: 612
  },
  {
    id: 16, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Oxford Hemd Classic',
    svgType: 'top-shirt',
    price: 18.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Zeitloses Oxford-Hemd aus 100% Baumwolle mit Button-Down-Kragen. Knitterarm.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','hellblau','babyblau','rosa','lavendel','navy','schwarz','grau','mintgruen','gelb','taubenblau','creme','sage','koralle','himmelblau','olivgruen'),
    rating: 4.6, reviews: 438
  },
  {
    id: 17, cat: 'herren', brand: 'THE DAILY EDIT',
    name: 'Slim Chino',
    svgType: 'pants',
    price: 19.99, oldPrice: 44.99, badge: 'sale',
    desc: 'Klassische Slim-Fit-Chino aus elastischem Baumwoll-Mix. Für Büro und Freizeit.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('beige','navy','olivgruen','schwarz','grau','camel','dunkelbraun','sand','khaki','rost','anthrazit','taubenblau'),
    rating: 4.5, reviews: 365
  },
  {
    id: 18, cat: 'herren', brand: 'MIA LABEL',
    name: 'Leder-Bomberjacke',
    svgType: 'blazer',
    price: 59.99, oldPrice: 129.99, badge: 'hot',
    desc: 'Echte Schafsleder-Bomberjacke. Gestrickte Bündchen und Stehkragen. Ein Statement-Stück.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','dunkelbraun','burgund','cognac','olivgruen','navy','anthrazit','camel'),
    rating: 4.9, reviews: 198
  },
  {
    id: 19, cat: 'herren', brand: 'PURE & CO',
    name: 'Basic T-Shirt 5er Pack',
    svgType: 'top-shirt',
    price: 14.99, oldPrice: 29.99, badge: 'hot',
    desc: '5 hochwertige T-Shirts aus 100% Premium-Baumwolle im Vorteilspack.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','schwarz','grau','navy','creme','olivgruen','dunkelbraun','himmelblau','rosa','lavendel','mintgruen','gelb'),
    rating: 4.8, reviews: 2341
  },

  /* ================================================================
     SCHUHE
     ================================================================ */
  {
    id: 21, cat: 'schuhe', brand: 'NOVA STYLE',
    name: 'Chunky Sneaker Platform',
    svgType: 'shoe-sneaker',
    price: 39.99, oldPrice: 79.99, badge: 'hot',
    desc: 'Trendige Chunky-Sneaker mit 4cm Plateausohle. Hochwertiges Kunstleder-Obermaterial.',
    sizes: ['36','37','38','39','40','41','42','43'],
    variants: v('weiss','schwarz','beige','rosa','mintgruen','himmelblau','grau','navy','lavendel','gelb','koralle','creme'),
    rating: 4.8, reviews: 723
  },
  {
    id: 22, cat: 'schuhe', brand: 'URBAN BASICS',
    name: 'Klassischer Leder-Sneaker',
    svgType: 'shoe-sneaker',
    price: 34.99, oldPrice: 69.99, badge: 'sale',
    desc: 'Zeitloser weißer Sneaker aus echtem Nappaleder. Passt zu allem.',
    sizes: ['36','37','38','39','40','41','42','43','44','45'],
    variants: v('weiss','creme','schwarz','grau','beige','navy','rosa','mintgruen','himmelblau','camel'),
    rating: 4.9, reviews: 1089
  },
  {
    id: 23, cat: 'schuhe', brand: 'MIA LABEL',
    name: 'High Heel Pumps',
    svgType: 'shoe-heel',
    price: 34.99, oldPrice: 69.99, badge: 'sale',
    desc: 'Elegante Pumps mit 8cm Stiletto-Absatz. Verstärkte Zehenpartie, Leder-Innensohle.',
    sizes: ['35','36','37','38','39','40','41','42'],
    variants: v('schwarz','nude','rot','navy','burgund','camel','weiss','olivgruen','rosa','champagne','cognac','lila','grau','mintgruen'),
    rating: 4.6, reviews: 345
  },
  {
    id: 24, cat: 'schuhe', brand: 'PURE & CO',
    name: 'Chelsea Boots',
    svgType: 'shoe-boots',
    price: 44.99, oldPrice: 89.99, badge: 'hot',
    desc: 'Klassische Chelsea Boots aus echtem Rindsleder mit Gummizug-Einsatz.',
    sizes: ['36','37','38','39','40','41','42'],
    variants: v('schwarz','cognac','dunkelbraun','navy','burgund','olivgruen','camel','grau','anthrazit','weinrot'),
    rating: 4.8, reviews: 512
  },
  {
    id: 25, cat: 'schuhe', brand: 'THE DAILY EDIT',
    name: 'Sommer-Sandalen',
    svgType: 'shoe-heel',
    price: 22.99, badge: 'new',
    desc: 'Handgenähte Flachsandalen aus echtem Leder mit anatomischem Fußbett.',
    sizes: ['36','37','38','39','40','41','42'],
    variants: v('camel','schwarz','weiss','bronzerot','cognac','navy','rosa','beige','olivgruen','mintgruen','koralle'),
    rating: 4.7, reviews: 389
  },
  {
    id: 27, cat: 'schuhe', brand: 'NOVA STYLE',
    name: 'Sneaker Herren Running',
    svgType: 'shoe-sneaker',
    price: 44.99, oldPrice: 89.99, badge: 'sale',
    desc: 'Sportlicher Laufschuh mit Air-Boost-Sohle und Mesh-Obermaterial.',
    sizes: ['40','41','42','43','44','45','46','47'],
    variants: v('schwarz','grau','navy','weiss','olivgruen','rot','himmelblau','anthrazit','orange','mintgruen'),
    rating: 4.7, reviews: 678
  },
  {
    id: 29, cat: 'schuhe', brand: 'PURE & CO',
    name: 'Winter Boots gefüttert',
    svgType: 'shoe-boots',
    price: 29.99, oldPrice: 64.99, badge: 'sale',
    desc: 'Winterboots mit kuscheligem Innenflausch und wasserabweisender Außenwand.',
    sizes: ['36','37','38','39','40','41','42'],
    variants: v('sand','dunkelbraun','schwarz','camel','cognac','grau','olivgruen','navy','burgund','rost'),
    rating: 4.8, reviews: 534
  },

  /* ================================================================
     TASCHEN
     ================================================================ */
  {
    id: 30, cat: 'taschen', brand: 'MIA LABEL',
    name: 'Leder Tote Bag',
    svgType: 'bag-tote',
    price: 34.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Großzügige Ledertasche mit Reißverschluss und Innentaschen.',
    sizes: ['One Size'],
    variants: v('cognac','schwarz','creme','burgund','navy','camel','olivgruen','dunkelbraun','rosa','taubenblau','beige','weinrot','sage'),
    rating: 4.9, reviews: 487
  },
  {
    id: 31, cat: 'taschen', brand: 'NOVA STYLE',
    name: 'Crossbody Mini Bag',
    svgType: 'bag-crossbody',
    price: 14.99, badge: 'new',
    desc: 'Kompakte Mini-Umhängetasche mit Kette und Lederriemen. Magnetverschluss.',
    sizes: ['One Size'],
    variants: v('schwarz','altrosa','creme','burgund','navy','olivgruen','camel','lila','mintgruen','weiss','himmelblau','cognac','dustyrose','gelb','turkis'),
    rating: 4.7, reviews: 623
  },
  {
    id: 33, cat: 'taschen', brand: 'MIA LABEL',
    name: 'Business Satchel',
    svgType: 'bag-tote',
    price: 44.99, oldPrice: 99.99, badge: 'hot',
    desc: 'Formschöne Arbeitstasche aus strukturiertem Kunstleder. Platz für 14" Laptop.',
    sizes: ['One Size'],
    variants: v('schwarz','navy','grau','camel','olivgruen','burgund','cognac','anthrazit','taubenblau','dunkelbraun'),
    rating: 4.8, reviews: 234
  },
  {
    id: 34, cat: 'taschen', brand: 'THE DAILY EDIT',
    name: 'Quilted Umhängetasche',
    svgType: 'bag-crossbody',
    price: 19.99, badge: 'new',
    desc: 'Trendige gesteppte Umhängetasche mit Kettenhenkel. Classic-Quilting-Muster.',
    sizes: ['One Size'],
    variants: v('schwarz','cognac','altrosa','navy','beige','weiss','lila','olivgruen','burgund','mintgruen','camel','taubenblau','rosa','champagne'),
    rating: 4.8, reviews: 356
  },
  {
    id: 35, cat: 'taschen', brand: 'NOVA STYLE',
    name: 'Canvas Shopper XL',
    svgType: 'bag-tote',
    price: 12.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Geräumiger Canvas-Shopper mit Lederhenkel. Verstärkter Boden.',
    sizes: ['One Size'],
    variants: v('beige','schwarz','olivgruen','navy','creme','grau','rosa','mintgruen','burgundrot','weiss','camel','taubenblau'),
    rating: 4.6, reviews: 312
  },

  /* ================================================================
     ACCESSOIRES
     ================================================================ */
  {
    id: 37, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Cat-Eye Sonnenbrille',
    svgType: 'bag-crossbody',
    price: 9.99, oldPrice: 24.99, badge: 'sale',
    desc: 'Retro Cat-Eye-Sonnenbrille mit polarisierten Gläsern (UV400).',
    sizes: ['One Size'],
    variants: v('schokobraun','schwarz','weiss','creme','rosa','navy','olivgruen','lila','camel','koralle'),
    rating: 4.7, reviews: 534
  },
  {
    id: 38, cat: 'accessoires', brand: 'NOVA STYLE',
    name: 'Goldkette Layered 3-fach',
    svgType: 'bag-crossbody',
    price: 7.99, badge: 'new',
    desc: 'Schimmernde 3-lagige Goldkette im Layered-Look. Allergiker-freundlich.',
    sizes: ['One Size'],
    variants: v('gold','champagne','rosegold','schwarz','weiss','camel'),
    rating: 4.8, reviews: 789
  },
  {
    id: 40, cat: 'accessoires', brand: 'THE DAILY EDIT',
    name: 'Armband Stack Set 7-teilig',
    svgType: 'bag-crossbody',
    price: 6.99, badge: 'hot',
    desc: '7 verschiedene Armbänder zum Stapeln. Perfekt kombinierbar, verstellbar.',
    sizes: ['One Size'],
    variants: v('gold','champagne','rosegold','schwarz','weiss','silber'),
    rating: 4.8, reviews: 1023
  },
  {
    id: 41, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Leder Armbanduhr Classic',
    svgType: 'bag-crossbody',
    price: 29.99, oldPrice: 69.99, badge: 'sale',
    desc: 'Klassische Quarzuhr mit Mineralglasfenster und echtem Kalbslederarmband.',
    sizes: ['One Size'],
    variants: v('schwarz','dunkelbraun','cognac','navy','olivgruen','burgund'),
    rating: 4.7, reviews: 312
  },
  {
    id: 44, cat: 'accessoires', brand: 'THE DAILY EDIT',
    name: 'Cashmere-Mix Mütze',
    svgType: 'bag-crossbody',
    price: 9.99, badge: 'new',
    desc: 'Weiche Beanie-Mütze aus Cashmere-Woll-Mix. Angenehm warm.',
    sizes: ['One Size'],
    variants: v('camel','olivgruen','grau','schwarz','navy','burgundrot','creme','rosa','himmelblau','lavendel','weiss','mustard','mintgruen','rost'),
    rating: 4.7, reviews: 389
  },

  /* ================================================================
     SALE
     ================================================================ */
  {
    id: 46, cat: 'sale', brand: 'URBAN BASICS',
    name: 'Puffer Jacke Ultralight',
    svgType: 'blazer',
    price: 19.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Ultra-leichte Daunen-Jacke, packbar auf Faustgröße. Wasserdichte Außenschicht.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','navy','olivgruen','koralle','grau','burgund','mintgruen','gelb','creme','anthrazit','lila','camel','himmelblau'),
    rating: 4.7, reviews: 623
  },
  {
    id: 47, cat: 'sale', brand: 'THE DAILY EDIT',
    name: 'Jogger Set 2-teilig',
    svgType: 'top-shirt',
    price: 12.99, oldPrice: 49.99, badge: 'sale',
    desc: 'Matching Jogger-Set aus softem French-Terry. Ideal für Zuhause, Gym und entspannte Tage.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('lila','grau','schwarz','navy','olivgruen','rosa','mintgruen','himmelblau','burgund','weiss','creme','camel','lavendel','rost','mustard'),
    rating: 4.8, reviews: 891
  },
  {
    id: 48, cat: 'sale', brand: 'MIA LABEL',
    name: 'Schmuck-Set Premium 5-tlg',
    svgType: 'bag-crossbody',
    price: 9.99, oldPrice: 59.99, badge: 'sale',
    desc: 'Premium Schmuck-Geschenkset: Kette, Armband, 2 Ohrringe und Ring. In luxuriöser Geschenkschachtel.',
    sizes: ['One Size'],
    variants: v('gold','champagne','rosegold','weiss','schwarz'),
    rating: 4.9, reviews: 1234
  },
  {
    id: 49, cat: 'sale', brand: 'PURE & CO',
    name: 'Slip-On Sneaker Damen',
    svgType: 'shoe-sneaker',
    price: 14.99, oldPrice: 44.99, badge: 'sale',
    desc: 'Bequeme Slip-On-Sneaker ohne Schnürung. Memory-Foam-Einlegesohle.',
    sizes: ['36','37','38','39','40','41'],
    variants: v('weiss','schwarz','rosa','mintgruen','navy','grau','beige','himmelblau','lavendel','gelb'),
    rating: 4.6, reviews: 445
  },
  {
    id: 51, cat: 'sale', brand: 'URBAN BASICS',
    name: 'Winterstiefel warm gefüttert',
    svgType: 'shoe-boots',
    price: 24.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Kniehoher Winterstiefel mit Warmfutter bis -20°C. Wasserdichtes Obermaterial.',
    sizes: ['36','37','38','39','40','41','42'],
    variants: v('schwarz','dunkelbraun','grau','camel','olivgruen','navy','cognac','burgund','sand','anthrazit'),
    rating: 4.8, reviews: 534
  },

  /* ================================================================
     BEAUTY & HAARE
     ================================================================ */

  /* --- WIMPERN (LASHES) --- */
  {
    id: 201, cat: 'beauty', brand: 'MIA LASHES',
    name: 'Drama Lashes – Volumen',
    svgType: 'beauty-lashes',
    price: 4.99, oldPrice: 9.99, badge: 'hot',
    desc: 'Dramatische Wimpern für maximales Volumen. Handgefertigt, wiederverwendbar bis zu 20x. Inklusive Kleber. Für unvergessliche Abendlooks.',
    sizes: ['One Size'],
    variants: v('schwarz','anthrazit','dunkelbraun'),
    rating: 4.9, reviews: 2341
  },
  {
    id: 202, cat: 'beauty', brand: 'MIA LASHES',
    name: 'Natural Lashes – Alltag',
    svgType: 'beauty-lashes',
    price: 3.99, badge: 'new',
    desc: 'Natürliche Wimpern für den täglichen Look. Ultra-leicht, kaum spürbar, voller Effekt. Perfekt für Anfänger.',
    sizes: ['One Size'],
    variants: v('schwarz','dunkelbraun'),
    rating: 4.8, reviews: 1876
  },
  {
    id: 203, cat: 'beauty', brand: 'MIA LASHES',
    name: 'Cat-Eye Lashes – Verführerisch',
    svgType: 'beauty-lashes',
    price: 4.49, badge: 'hot',
    desc: 'Verführerische Cat-Eye-Wimpern mit verlängertem Äußeren Ende. Für den perfekten Augen-Auftritt.',
    sizes: ['One Size'],
    variants: v('schwarz','anthrazit'),
    rating: 4.9, reviews: 987
  },

  /* --- MAKE-UP --- */
  {
    id: 210, cat: 'beauty', brand: 'MIA BEAUTY',
    name: 'Lippenstift Satin Finish',
    svgType: 'beauty-lipstick',
    price: 5.99, oldPrice: 12.99, badge: 'sale',
    desc: 'Cremiger Lippenstift mit sattem Farbpigment. Hält 8 Stunden. Keine Austrocknung, kein Ausbluten. In 15+ Farben.',
    sizes: ['One Size'],
    variants: v('rot','korallrot','beerenpink','rosa','plumrot','burgund','nudenude','lachs','koralle','camel','altrosa','pink','weinrot','champagne','mauve'),
    rating: 4.8, reviews: 3421
  },
  {
    id: 211, cat: 'beauty', brand: 'MIA BEAUTY',
    name: 'Lidschatten Palette 12-Farben',
    svgType: 'beauty-palette',
    price: 9.99, oldPrice: 24.99, badge: 'sale',
    desc: '12 perfekt aufeinander abgestimmte Lidschattenfarben. Mattes, schimmerndes und glitzerndes Finish. Hochpigmentiert und langanhaltend.',
    sizes: ['One Size'],
    variants: v('lila','rosa','burgund','camel','olivgruen','navy','mintgruen','schwarz','champagne','rosegold','taubenblau','terracotta'),
    rating: 4.9, reviews: 2876
  },
  {
    id: 212, cat: 'beauty', brand: 'MIA BEAUTY',
    name: 'Mascara Mega Volume',
    svgType: 'beauty-mascara',
    price: 6.99, badge: 'hot',
    desc: 'Mega-Volumen-Mascara mit XXL-Bürste. Streckt, trennt und verdickt jede Wimper. Wasserfest, hält 24 Stunden.',
    sizes: ['One Size'],
    variants: v('schwarz','anthrazit','dunkelbraun'),
    rating: 4.8, reviews: 4123
  },
  {
    id: 213, cat: 'beauty', brand: 'MIA BEAUTY',
    name: 'Foundation Fluid LSF 20',
    svgType: 'beauty-bottle',
    price: 8.99, oldPrice: 18.99, badge: 'sale',
    desc: 'Leichte Fluid-Foundation mit LSF 20. Deckend, aber natürlich. 24h-Halt, dermatologisch getestet. In 20 Nuancen.',
    sizes: ['One Size'],
    variants: v('nudenude','beige','sand','camel','latte','creme','ivory','dunkelbraun','schokobraun','cognac'),
    rating: 4.7, reviews: 2156
  },
  {
    id: 214, cat: 'beauty', brand: 'MIA BEAUTY',
    name: 'Highlighter Glow Palette',
    svgType: 'beauty-palette',
    price: 7.99, badge: 'new',
    desc: 'Strahlender Highlighter in 4 Shades: Gold, Rosé, Bronze und Pearl. Für ein strahlendes Glow-Finish.',
    sizes: ['One Size'],
    variants: v('champagne','rosegold','gold','bronze','silber','ivory','rosa'),
    rating: 4.9, reviews: 1654
  },
  {
    id: 215, cat: 'beauty', brand: 'MIA BEAUTY',
    name: 'Nagellack Kollektion',
    svgType: 'beauty-nail',
    price: 3.49, badge: 'new',
    desc: 'Langanhaltender Nagellack in über 40 Farben. 3-free Formel, kein Schälen. Trocknet in 60 Sekunden.',
    sizes: ['One Size'],
    variants: v('rot','korallrot','beerenpink','rosa','plumrot','burgund','navy','schwarz','weiss','nudenude','mintfrisch','himmelblau','lila','gold','rosegold','koralle','lachs','gelb','olivgruen','champagne'),
    rating: 4.7, reviews: 5678
  },
  {
    id: 216, cat: 'beauty', brand: 'MIA BEAUTY',
    name: 'Lip Gloss Set 6-teilig',
    svgType: 'beauty-lipstick',
    price: 12.99, oldPrice: 24.99, badge: 'hot',
    desc: '6 Lip Gloss in einem Set. Pflegend durch Vitamin E und Hyaluron. Nicht klebrig, satt glänzend.',
    sizes: ['One Size'],
    variants: v('rosa','koralle','nudenude','beerenpink','champagne','babyrose','altrosa','lachs','pink','mauve'),
    rating: 4.8, reviews: 1432
  },

  /* --- HAARPFLEGE (HAIRCARE) --- */
  {
    id: 220, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Argan-Shampoo Reparatur',
    svgType: 'beauty-bottle',
    price: 7.99, badge: 'new',
    desc: 'Reparierendes Argan-Öl-Shampoo für strapaziertes Haar. Glättet die Schuppenschicht, verleiht Glanz und Geschmeidigkeit. Sulfatfrei.',
    sizes: ['One Size'],
    variants: v('camel','cognac','gold','caramel','champagne'),
    rating: 4.8, reviews: 3245
  },
  {
    id: 221, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Feuchtigkeits-Conditioner',
    svgType: 'beauty-bottle',
    price: 7.49, badge: 'new',
    desc: 'Intensiv-Conditioner mit Kokosmilch und Sheabutter. Entwirrt, glättet und pflegt. Für alle Haartypen, besonders für trockenes Haar.',
    sizes: ['One Size'],
    variants: v('weiss','creme','ivory','babyrose','hellblau','mintgruen'),
    rating: 4.7, reviews: 2876
  },
  {
    id: 222, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Haarmaske Keratin Tiefenpflege',
    svgType: 'beauty-hairmask',
    price: 9.99, oldPrice: 19.99, badge: 'sale',
    desc: 'Intensive Keratin-Haarmaske für 10 Minuten. Repariert Haarschäden, glättet Spliss, verleiht Spiegelglanz. 300ml Tiegel.',
    sizes: ['One Size'],
    variants: v('weiss','creme','ivory','champagne','sand','latte'),
    rating: 4.9, reviews: 4521
  },
  {
    id: 223, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Argan Haaröl Premium',
    svgType: 'beauty-hairoil',
    price: 11.99, oldPrice: 22.99, badge: 'hot',
    desc: 'Luxuriöses Argan-Haaröl aus Marokko. Verleiht seidigen Glanz, bändigt Frizz und schützt vor Wärme. Für alle Haartypen.',
    sizes: ['One Size'],
    variants: v('camel','gold','cognac','caramel','champagne','creme'),
    rating: 4.9, reviews: 5678
  },
  {
    id: 224, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Kokos Leave-in Conditioner',
    svgType: 'beauty-bottle',
    price: 6.99, badge: 'new',
    desc: 'Ausspülfreier Conditioner mit reinem Kokosöl. Sprühen, verteilen, fertig. Kein Ausspülen nötig. Ideal für unterwegs.',
    sizes: ['One Size'],
    variants: v('weiss','creme','mintgruen','babyblau','hellblau','ivory'),
    rating: 4.7, reviews: 1987
  },
  {
    id: 225, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Trocken-Shampoo Frische Brise',
    svgType: 'beauty-hairspray',
    price: 5.99, badge: 'hot',
    desc: 'Trockenshampoo für fettiges Haar. Erfrischt in 30 Sekunden, gibt Volumen, duftet nach frischen Blumen.',
    sizes: ['One Size'],
    variants: v('weiss','hellblau','mintfrisch','lavendel','babyrose','creme'),
    rating: 4.8, reviews: 3412
  },
  {
    id: 226, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Heat Protect Spray',
    svgType: 'beauty-hairspray',
    price: 8.49, oldPrice: 15.99, badge: 'sale',
    desc: 'Hitze-Schutz-Spray bis 230°C. Schützt vor Fön, Glätteisen und Lockenstab. Mit feuchtigkeitsspendender Formel.',
    sizes: ['One Size'],
    variants: v('lavendel','flieder','babyblau','weiss','mintgruen','silber'),
    rating: 4.8, reviews: 2765
  },
  {
    id: 227, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Keratin Glättungs-Serum',
    svgType: 'beauty-hairoil',
    price: 13.99, oldPrice: 28.99, badge: 'hot',
    desc: 'Professionelles Keratin-Serum für Heimanwendung. Glättet krauses Haar, hält bis zu 3 Monate. Für seidig-glattes Haar wie vom Salon.',
    sizes: ['One Size'],
    variants: v('champagne','ivory','creme','weiss','gold','silber'),
    rating: 4.9, reviews: 1876
  },
  {
    id: 228, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Anti-Frizz Haar-Serum',
    svgType: 'beauty-hairoil',
    price: 9.49, badge: 'new',
    desc: 'Leichtes Anti-Frizz-Serum mit Argan- und Jojobaöl. Bändigt widerspenstiges Haar, verleiht Glanz ohne zu beschweren.',
    sizes: ['One Size'],
    variants: v('mintfrisch','sage','olivgruen','mintgruen','salbei','weiss'),
    rating: 4.7, reviews: 2134
  },

  /* --- HAAR-STYLING & ACCESSOIRES --- */
  {
    id: 230, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Satin-Scrunchie Set 10er',
    svgType: 'beauty-scrunchie',
    price: 5.99, badge: 'hot',
    desc: '10 Satin-Scrunchies in verschiedenen Farben. Schonend für das Haar, kein Ziehen oder Brechen. Auch als Armband tragbar.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','rosa','mintgruen','lavendel','camel','himmelblau','burgund','creme','champagne','koralle','navy','lila','gelb','altrosa','sage','dustyrose','babyblau'),
    rating: 4.9, reviews: 6543
  },
  {
    id: 231, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Krallen-Clip Set 5er – Groß',
    svgType: 'beauty-hairclip',
    price: 6.99, badge: 'new',
    desc: '5 große Krallen-Clips in Trendfarben. Extra starker Halt, kein Rutschen. Für dickes und feines Haar geeignet.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','creme','rosa','mintgruen','lavendel','camel','navy','burgund','champagne','koralle','himmelblau','lila','altrosa','olivgruen','taubenblau'),
    rating: 4.8, reviews: 3876
  },
  {
    id: 232, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Satin Haarband Breit',
    svgType: 'beauty-scrunchie',
    price: 4.49, badge: 'new',
    desc: 'Breites Satin-Haarband für elegante Looks. Perfekt für Alltag und besondere Anlässe. Schützt das Haar, kein Bruch.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','rosa','navy','burgund','camel','mintgruen','lavendel','champagne','altrosa','lila','creme','babyrose','himmelblau','olivgruen','gelb'),
    rating: 4.7, reviews: 2134
  },
  {
    id: 233, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Entwirr-Bürste Profi',
    svgType: 'beauty-hairbrush',
    price: 8.99, oldPrice: 17.99, badge: 'sale',
    desc: 'Professionelle Entwirr-Bürste mit flexiblen Borsten. Schmerzfreies Entwirren von nassem und trockenem Haar. Auch für Locken.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','rosa','mintgruen','lavendel','camel','navy','koralle','lila','champagne','himmelblau','olivgruen'),
    rating: 4.8, reviews: 4321
  },
  {
    id: 234, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Haargummi-Set Elastic 30er',
    svgType: 'beauty-scrunchie',
    price: 3.99, badge: 'hot',
    desc: '30 hochwertige Haargummis in verschiedenen Farben und Stärken. Keine Knicke, kein Brechen. Das Basics-Must-have.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','braun','rosa','blau','grau','mintgruen','bunt','gelb','lila'),
    rating: 4.7, reviews: 8765
  },
  {
    id: 235, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Haarklammern-Set Bobby Pins 50er',
    svgType: 'beauty-hairclip',
    price: 2.99, badge: 'new',
    desc: '50 rutschfeste Bobby Pins in mattem Schwarz. Speziell gebogen für optimalen Halt. Das unverzichtbare Haar-Werkzeug.',
    sizes: ['One Size'],
    variants: v('schwarz','anthrazit','dunkelbraun','gold','silber','rosegold'),
    rating: 4.6, reviews: 7654
  },
  {
    id: 236, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Satin-Schlafmaske + Haarbond-Set',
    svgType: 'beauty-scrunchie',
    price: 9.99, oldPrice: 18.99, badge: 'sale',
    desc: 'Satin-Schlafmaske und passendes Haarband im Set. Schützt Haare und Haut beim Schlafen. Verhindert Frizz und Falten.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','rosa','lavendel','champagne','navy','altrosa','mintgruen','creme','lila','babyrose','taubenblau'),
    rating: 4.8, reviews: 2345
  },
  {
    id: 237, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Hydro Hair Mask – Avocado',
    svgType: 'beauty-hairmask',
    price: 8.99, badge: 'new',
    desc: 'Intensive Avocado-Feuchtigkeitsmaske für sehr trockenes Haar. Nährt in der Tiefe, kämmbar bereits nach 5 Minuten.',
    sizes: ['One Size'],
    variants: v('olivgruen','waldgruen','sage','mintgruen','salbei','smaragd'),
    rating: 4.9, reviews: 3210
  },
  {
    id: 238, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Locken-Creme Define & Hold',
    svgType: 'beauty-bottle',
    price: 6.49, badge: 'new',
    desc: 'Lockenpflege-Creme für definierte Locken ohne Frizz. Hält die Form, kein Verkleben. Für alle Lockenmuster.',
    sizes: ['One Size'],
    variants: v('weiss','creme','ivory','babyblau','hellblau','mintgruen'),
    rating: 4.8, reviews: 1876
  },
  {
    id: 239, cat: 'beauty', brand: 'MIA HAIR',
    name: 'Haar-Volumenpuder',
    svgType: 'beauty-hairspray',
    price: 7.49, badge: 'hot',
    desc: 'Unsichtbares Volumenpuder für feines und flaches Haar. Gibt sofort Fülle und Textur. Ideal für Hochfrisuren.',
    sizes: ['One Size'],
    variants: v('weiss','creme','sand','graumel','ivory'),
    rating: 4.7, reviews: 1543
  },

  /* ================================================================
     DESIGNER TASCHEN – LUXURY
     ================================================================ */
  {
    id: 300, cat: 'taschen', brand: 'GUCCI',
    name: 'GG Bamboo Top Handle Bag',
    svgType: 'bag-designer-bamboo',
    price: 890.00, badge: 'luxury',
    desc: 'Ikonische Gucci-Tasche mit handgefertigtem Bambus-Griff. Kalbsleder-Körper mit GG-Logo und charakteristischem Webstreifen. Jedes Stück ein Unikat.',
    sizes: ['One Size'],
    variants: v('cognac','schwarz','creme','camel','rosegold','olivgruen','burgund','navy'),
    rating: 4.9, reviews: 543
  },
  {
    id: 301, cat: 'taschen', brand: 'CHANEL',
    name: 'Classic Double Flap Bag',
    svgType: 'bag-designer-flap',
    price: 1290.00, badge: 'luxury',
    desc: 'Das zeitloseste Stück der Modewelt. Gestepptes Lammleder, Gold-Hardware mit CC-Schließe und Goldketten-Schulterriemen. Eine Investition für die Ewigkeit.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','beige','altrosa','burgund','navy','camel','silber'),
    rating: 5.0, reviews: 1203
  },
  {
    id: 302, cat: 'taschen', brand: 'HERMÈS',
    name: 'Birkin 30 Togo Leder',
    svgType: 'bag-designer-birkin',
    price: 2490.00, badge: 'luxury',
    desc: 'Die begehrteste Handtasche der Welt. Handgenähtes Togo-Kalbsleder, Palladium-Hardware. Jede Birkin wird von einem einzelnen Handwerker in 18–24 Stunden gefertigt.',
    sizes: ['One Size'],
    variants: v('caramel','schwarz','creme','olivgruen','navy','burgund','rot','gold','cognac'),
    rating: 5.0, reviews: 876
  },
  {
    id: 303, cat: 'taschen', brand: 'LOUIS VUITTON',
    name: 'Speedy Monogram Canvas',
    svgType: 'bag-designer-mono',
    price: 790.00, badge: 'luxury',
    desc: 'Der ikonische Speedy in monogrammierten Canvas. Das unverwechselbare LV-Muster auf beige Canvas mit Vachetta-Leder-Trimm. Ein Stück Modegeschichte.',
    sizes: ['One Size'],
    variants: v('camel','beige','sand','champagne'),
    rating: 4.9, reviews: 2341
  },
  {
    id: 304, cat: 'taschen', brand: 'DIOR',
    name: 'Saddle Bag Oblique',
    svgType: 'bag-designer-saddle',
    price: 990.00, badge: 'luxury',
    desc: 'John Galliano\'s ikonische Sattel-Silhouette. Oblique-Jacquard-Canvas mit goldener CD-Schließe. Wurde zum Symbol einer ganzen Ära.',
    sizes: ['One Size'],
    variants: v('beige','schwarz','camel','navy','burgund','olivgruen','cognac'),
    rating: 4.9, reviews: 765
  },
  {
    id: 305, cat: 'taschen', brand: 'PRADA',
    name: 'Saffiano Mini Bag',
    svgType: 'bag-designer-mini',
    price: 890.00, badge: 'luxury',
    desc: 'Mini-Bag aus Pradas exklusivem Saffiano-Leder – kratzfest, wasserabweisend, unverwechselbar. Silber-Triangel-Logo, Reißverschluss, schulterfreier Kettenriemen.',
    sizes: ['One Size'],
    variants: v('schwarz','creme','navy','burgund','altrosa','olivgruen','camel','silber'),
    rating: 4.9, reviews: 654
  },
  {
    id: 306, cat: 'taschen', brand: 'BALENCIAGA',
    name: 'City Bag Aged Leather',
    svgType: 'bag-crossbody',
    price: 990.00, badge: 'luxury',
    desc: 'Die rockige Balenciaga City ist Kult. Weiches, angesatteltes Lammleder mit vielen Reißverschlüssen und Nieten. Umhänge- oder Handtasche.',
    sizes: ['One Size'],
    variants: v('schwarz','cognac','camel','grau','olivgruen','burgund','rot','navy','sand'),
    rating: 4.8, reviews: 432
  },
  {
    id: 307, cat: 'taschen', brand: 'VALENTINO',
    name: 'Rockstud Crossbody Bag',
    svgType: 'bag-crossbody',
    price: 890.00, badge: 'luxury',
    desc: 'Valentinos signature Rockstud-Nieten veredeln diese elegante Crossbody aus Nappa-Kalbsleder. Für den kraftvollen, femininen Look.',
    sizes: ['One Size'],
    variants: v('schwarz','altrosa','creme','beige','burgund','camel','navy','rot'),
    rating: 4.9, reviews: 567
  },
  {
    id: 308, cat: 'taschen', brand: 'SAINT LAURENT',
    name: 'Loulou Quilted Flap',
    svgType: 'bag-designer-flap',
    price: 1090.00, badge: 'luxury',
    desc: 'YSL\'s Loulou mit ihrer ikonischen Rauten-Steppung, goldener YSL-Schließe und Kettenhenkel. Eleganz in Perfektion – von Tag zu Nacht.',
    sizes: ['One Size'],
    variants: v('schwarz','camel','weiss','altrosa','burgund','navy','olivgruen','creme'),
    rating: 4.9, reviews: 789
  },
  {
    id: 309, cat: 'taschen', brand: 'BOTTEGA VENETA',
    name: 'Cassette Intrecciato Bag',
    svgType: 'bag-tote',
    price: 1190.00, badge: 'luxury',
    desc: 'Das berühmte Intrecciato-Flechtleder von Bottega Veneta. Soft Nappa, handgeflochten in der Ledermanufaktur. Kein sichtbares Logo – das Leder ist die Signatur.',
    sizes: ['One Size'],
    variants: v('caramel','schwarz','olivgruen','cognac','creme','navy','burgund','beige','lavendel'),
    rating: 5.0, reviews: 345
  },
  {
    id: 310, cat: 'taschen', brand: 'CELINE',
    name: 'Box Bag Smooth Calfskin',
    svgType: 'bag-designer-mini',
    price: 890.00, badge: 'luxury',
    desc: 'Céline\'s Box Bag mit halbrundem Griff. Poliertes Kalbsleder, silberne Druckknopf-Schließe. Phoebe Philos minimalistisches Meisterwerk.',
    sizes: ['One Size'],
    variants: v('schwarz','creme','camel','navy','olivgruen','rot','burgund','beige'),
    rating: 4.9, reviews: 456
  },
  {
    id: 311, cat: 'taschen', brand: 'FENDI',
    name: 'Baguette FF Jacquard',
    svgType: 'bag-crossbody',
    price: 990.00, badge: 'luxury',
    desc: 'Seit 1997 Kult: Die Fendi Baguette in FF-Jacquard. Klein, schmal, unter dem Arm getragen. Das Taschikon aus \"Sex and the City\".',
    sizes: ['One Size'],
    variants: v('beige','schwarz','camel','burgund','olivgruen','navy','creme','altrosa'),
    rating: 4.9, reviews: 678
  },
  {
    id: 312, cat: 'taschen', brand: 'GIVENCHY',
    name: 'Antigona Mini Satchel',
    svgType: 'bag-designer-birkin',
    price: 890.00, badge: 'luxury',
    desc: 'Givenchy\'s ikonische Antigona in ihrer kleinsten Version. Geometrische Silhouette, Boxy-Form, Tragegriff und Schulterriemen. Klassisch und modern.',
    sizes: ['One Size'],
    variants: v('schwarz','creme','olivgruen','cognac','navy','burgund','altrosa','camel'),
    rating: 4.8, reviews: 312
  },
  {
    id: 313, cat: 'taschen', brand: 'MIU MIU',
    name: 'Arcadie Bag Wicker',
    svgType: 'bag-designer-flap',
    price: 890.00, badge: 'luxury',
    desc: 'Raffinierter Mix aus Naturmaterial und Leder. Miu Mius Arcadie verbindet handgeflochtenes Wicker mit zartem Lammleder-Flap. Verspielt und luxuriös.',
    sizes: ['One Size'],
    variants: v('beige','sand','creme','camel','weiss','ivory','champagne'),
    rating: 4.8, reviews: 234
  },
  {
    id: 314, cat: 'taschen', brand: 'BURBERRY',
    name: 'TB Bag Vintage Check',
    svgType: 'bag-designer-mono',
    price: 790.00, badge: 'luxury',
    desc: 'Burberry\'s berühmtes Karo-Muster auf hochwertigem Canvas. Handgriff aus Leder, goldene TB-Schnalle. Britische Eleganz seit 1856.',
    sizes: ['One Size'],
    variants: v('camel','beige','schwarz','weiss','navy','rot'),
    rating: 4.8, reviews: 543
  },

  /* ================================================================
     HERREN – Kleidung, Schuhe, Pflege
     ================================================================ */

  /* --- HERREN KLEIDUNG --- */
  {
    id: 850, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Baggy Jeans Wide Leg – Hellblau',
    svgType: 'jeans-baggy',
    price: 34.99, oldPrice: 64.99, badge: 'new',
    desc: 'Ultraweit geschnittene Baggy Jeans im 90s-Style. Sehr lockerer Sitz durch Oberschenkel und Bein, breites Beinende. 5-Pocket, Vintage-Wash, authentische Denim-Qualität.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('hellblau','babyblau','jeansblau','denim','schwarz','grau','anthrazit','weiss','navy','dunkelblau'),
    rating: 4.9, reviews: 7832
  },
  {
    id: 851, cat: 'herren', brand: 'MIA MAN',
    name: 'Baggy Jeans Relaxed Fit – Washed',
    svgType: 'jeans-baggy',
    price: 39.99, badge: 'hot',
    desc: 'Relaxed Baggy Jeans mit Used-Wash-Effekt. Komfortabler Schnitt, locker am Oberschenkel, geradlinig zum Saum. Perfekt zu Sneakern oder Boots.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('jeansblau','denim','hellblau','babyblau','grau','anthrazit','schwarz','camel','dunkelblau','olivgruen'),
    rating: 4.8, reviews: 5410
  },
  {
    id: 852, cat: 'herren', brand: 'LUXE CO.',
    name: 'Premium Baggy Denim Oversized',
    svgType: 'jeans-baggy',
    price: 59.99, oldPrice: 99.99, badge: 'sale',
    desc: 'Premium Wide-Leg Denim aus schwerem 14oz Denim-Stoff. Organische Baumwolle, verstärkte Nähte, klassische 5-Pocket-Optik. Zeitloser Streetwear-Look.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','dunkelblau','navy','anthrazit','jeansblau','denim','grau','khaki','olivgruen','camel'),
    rating: 4.7, reviews: 3210
  },
  {
    id: 401, cat: 'herren', brand: 'MIA MAN',
    name: 'Oxford Hemd Slim Fit',
    svgType: 'top-shirt',
    price: 19.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Klassisches Oxford-Hemd in Slim-Fit-Schnitt aus 100% Baumwolle. Geknöpfter Kragen, gebügelter Look den ganzen Tag. Büro, Dinner, Casual.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','hellblau','creme','navy','schwarz','grau','babyblau','taubenblau','mintgruen','rosa','lavendel'),
    rating: 4.8, reviews: 2345
  },
  {
    id: 402, cat: 'herren', brand: 'MIA MAN',
    name: 'Chino Hose Regular Fit',
    svgType: 'pants',
    price: 24.99, oldPrice: 49.99, badge: 'sale',
    desc: 'Hochwertige Chino aus stretchiger Baumwolle. Regular Fit mit flachem Bund. Perfekte Hose für Büro und Freizeit.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('beige','camel','navy','schwarz','grau','olivgruen','anthrazit','sand','dunkelbraun','khaki','taubenblau'),
    rating: 4.7, reviews: 1876
  },
  {
    id: 403, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Jeans Slim Straight',
    svgType: 'pants',
    price: 29.99, oldPrice: 59.99, badge: 'sale',
    desc: 'Moderne Slim-Straight-Jeans aus hochwertiger Denim-Qualität. Leichter Stretch für Komfort, 5-Pocket-Design, nachhaltig gefärbt.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('denim','dunkelblau','schwarz','grau','jeansblau','anthrazit','navy'),
    rating: 4.8, reviews: 3421
  },
  {
    id: 404, cat: 'herren', brand: 'MIA MAN',
    name: 'Blazer Herren Modern Fit',
    svgType: 'blazer',
    price: 59.99, oldPrice: 119.99, badge: 'sale',
    desc: 'Eleganter Herren-Blazer mit Modern-Fit-Schnitt. Strukturiertes Material, geknöpft, mit Brusttasche und aufgesetzten Taschen. Für Büro und Abend.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('navy','schwarz','anthrazit','grau','olivgruen','dunkelblau','camel','taubenblau','burgund'),
    rating: 4.8, reviews: 1234
  },
  {
    id: 405, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Bomber Jacket Herren',
    svgType: 'blazer',
    price: 34.99, oldPrice: 79.99, badge: 'hot',
    desc: 'Trendy Bomber Jacket mit Rippbündchen und Reißverschluss. Leicht gefüttert, perfekt für Herbst und Frühjahr. Lässiger Streetstyle-Look.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','olivgruen','navy','grau','kamel','caramel','anthrazit','burgund','dunkelbraun','rost'),
    rating: 4.7, reviews: 2109
  },
  {
    id: 406, cat: 'herren', brand: 'MIA MAN',
    name: 'Polo Shirt Piqué',
    svgType: 'top-shirt',
    price: 14.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Klassisches Polo-Shirt aus hochwertigem Piqué-Stoff. Dreifach-geknöpfter Kragen, schmale Passform. Sportlich-elegant für jede Gelegenheit.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','navy','schwarz','grau','olivgruen','himmelblau','rot','burgund','camel','mintgruen','lavendel','gelb'),
    rating: 4.8, reviews: 3456
  },
  {
    id: 407, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Pullover Rundhals Merino-Mix',
    svgType: 'top-shirt',
    price: 22.99, oldPrice: 44.99, badge: 'new',
    desc: 'Weicher Rundhals-Pullover aus Merino-Mix. Körpernahe Passform, kein Kratzen, wärmt natürlich. Das Basis-Piece der Herren-Garderobe.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('grau','navy','schwarz','camel','olivgruen','burgund','creme','anthrazit','taubenblau','mustard','himmelblau'),
    rating: 4.9, reviews: 2876
  },

  /* --- HERREN SCHUHE --- */
  {
    id: 410, cat: 'herren', brand: 'MIA MAN',
    name: 'Chelsea Boots Herren Leder',
    svgType: 'shoe-boots',
    price: 49.99, oldPrice: 99.99, badge: 'sale',
    desc: 'Klassische Chelsea Boots aus echtem Rindsleder. Elastikeinsatz an den Seiten, Gummisohle, verdeckte Reißverschlüsse. Für Büro und abends.',
    sizes: ['40','41','42','43','44','45','46','47'],
    variants: v('schwarz','dunkelbraun','cognac','camel','olivgruen','navy','anthrazit','sand'),
    rating: 4.8, reviews: 1543
  },
  {
    id: 411, cat: 'herren', brand: 'NOVA STYLE',
    name: 'Sneaker Herren Leder Casual',
    svgType: 'shoe-sneaker',
    price: 44.99, oldPrice: 89.99, badge: 'sale',
    desc: 'Cleaner Leder-Sneaker im minimalistischen Design. Weiches Nappaleder, Gummisohle, Comfort-Fußbett. Der All-Day-Sneaker.',
    sizes: ['40','41','42','43','44','45','46','47'],
    variants: v('weiss','schwarz','grau','navy','camel','olivgruen','creme','cognac','himmelblau'),
    rating: 4.7, reviews: 2134
  },
  {
    id: 412, cat: 'herren', brand: 'PURE & CO',
    name: 'Derby Schnürer Business',
    svgType: 'shoe-heel',
    price: 54.99, oldPrice: 109.99, badge: 'hot',
    desc: 'Klassischer Derby-Schuh aus poliertem Kalbsleder. Spitze Zehenkappe, Lederinnensohle, Ledersohle. Für formelle Anlässe.',
    sizes: ['40','41','42','43','44','45','46','47'],
    variants: v('schwarz','dunkelbraun','cognac','caramel','navy','olivgruen'),
    rating: 4.9, reviews: 876
  },
  {
    id: 413, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Laufschuh Performance Plus',
    svgType: 'shoe-sneaker',
    price: 39.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Hochleistungs-Laufschuh mit Boost-Dämpfung und breathable Mesh-Obermaterial. Ideal für Training, Marathon oder Alltag.',
    sizes: ['40','41','42','43','44','45','46','47'],
    variants: v('schwarz','grau','navy','olivgruen','rot','anthrazit','himmelblau','weiss','mintgruen'),
    rating: 4.7, reviews: 3210
  },

  /* --- HERREN GESICHTSPFLEGE --- */
  {
    id: 420, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Gesichtswasser Active Toner',
    svgType: 'beauty-bottle',
    price: 8.99, oldPrice: 16.99, badge: 'new',
    desc: 'Erfrischender Gesichts-Toner mit Salicylsäure und Niacinamid. Reinigt Poren, reduziert Rötungen, mattiert. Das tägliche Basis-Pflegeprodukt für Männer.',
    sizes: ['One Size'],
    variants: v('hellblau','taubenblau','mintfrisch','mintgruen','weiss','creme'),
    rating: 4.7, reviews: 1987
  },
  {
    id: 421, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Gesichtscreme SPF 30 Anti-Age',
    svgType: 'beauty-hairmask',
    price: 14.99, oldPrice: 29.99, badge: 'hot',
    desc: 'Leichte Tagescreme mit LSF 30 und Anti-Aging-Formel. Schützt vor UV-Strahlen, reduziert Fältchen, spendet 24h Feuchtigkeit. Kein fettiger Film.',
    sizes: ['One Size'],
    variants: v('weiss','creme','ivory','hellblau','silber','mintgruen'),
    rating: 4.8, reviews: 2345
  },
  {
    id: 422, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Bart-Öl Premium Pflege',
    svgType: 'beauty-hairoil',
    price: 9.99, oldPrice: 18.99, badge: 'hot',
    desc: 'Pflegendes Bartöl mit Argan-, Mandel- und Jojobaöl. Macht den Bart weich, gepflegt und duftet maskulin. Kein Kratzen mehr. Für jeden Barttyp.',
    sizes: ['One Size'],
    variants: v('caramel','cognac','dunkelbraun','camel','gold','champagne','olivgruen'),
    rating: 4.9, reviews: 4321
  },
  {
    id: 423, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Rasierschaum Sensitive',
    svgType: 'beauty-hairspray',
    price: 5.99, badge: 'new',
    desc: 'Schonender Rasierschaum für empfindliche Haut. Aloe Vera und Panthenol schützen die Haut während des Rasierens. Für eine sanfte, saubere Rasur.',
    sizes: ['One Size'],
    variants: v('weiss','hellblau','mintgruen','silber','creme','babyblau'),
    rating: 4.7, reviews: 1876
  },
  {
    id: 424, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'After Shave Balsam',
    svgType: 'beauty-bottle',
    price: 7.99, badge: 'new',
    desc: 'Beruhigender After-Shave-Balsam gegen Irritationen und Brennen. Schließt die Poren, erfrischt und pflegt. Maskuliner, holziger Duft.',
    sizes: ['One Size'],
    variants: v('navy','taubenblau','mintgruen','himmelblau','silber','grau','anthrazit'),
    rating: 4.8, reviews: 2109
  },
  {
    id: 425, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Augen-Roller Anti-Müdigkeit',
    svgType: 'beauty-bottle',
    price: 11.99, oldPrice: 22.99, badge: 'sale',
    desc: 'Kühlender Augen-Roller mit Koffein und Hyaluron. Reduziert Augenringe, Schwellungen und Müdigkeitszeichen in Minuten. Für den frischen Business-Blick.',
    sizes: ['One Size'],
    variants: v('silber','weiss','hellblau','creme','champagne','mintfrisch'),
    rating: 4.8, reviews: 1543
  },
  {
    id: 426, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Gesichtsreiniger Daily Detox',
    svgType: 'beauty-bottle',
    price: 6.99, badge: 'new',
    desc: 'Tiefenreinigendes Gesichtsgel für Männerhaut. Aktivkohle und Teebaumöl entfernen Talg und Schmutz. Kühlendes Minze-Gefühl.',
    sizes: ['One Size'],
    variants: v('schwarz','anthrazit','dunkelblau','navy','grau','mintfrisch','olivgruen'),
    rating: 4.7, reviews: 2876
  },
  {
    id: 427, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Peeling Gesichtsmaske 2-in-1',
    svgType: 'beauty-hairmask',
    price: 9.99, badge: 'hot',
    desc: '2-in-1 Gesichtsmaske: Tiefenpflege + Peeling in einem. Kaolin-Ton, Kaffeepeelingpartikel und Retinol. Wochenend-Ritual für straffe Männerhaut.',
    sizes: ['One Size'],
    variants: v('dunkelbraun','cognac','caramel','anthrazit','grau','olivgruen'),
    rating: 4.9, reviews: 1234
  },

  /* --- HERREN HAARPFLEGE --- */
  {
    id: 430, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Haar-Pomade Strong Hold',
    svgType: 'beauty-hairmask',
    price: 7.99, badge: 'hot',
    desc: 'Starke Haar-Pomade auf Wasserbasis. Perfekt für Undercut, Quiff und Slickback. Wasserlöslich, kein Steifheitsgefühl, natürlicher Glanz.',
    sizes: ['One Size'],
    variants: v('schwarz','anthrazit','dunkelbraun','navy','caramel','grau'),
    rating: 4.8, reviews: 3456
  },
  {
    id: 431, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Styling Wachs Matt Finish',
    svgType: 'beauty-hairmask',
    price: 6.99, badge: 'new',
    desc: 'Matt-Wax für strukturierte Looks. Mittlerer Halt, kein Glanz, natürliche Optik. Ideal für Textured Crops und Natural Styles.',
    sizes: ['One Size'],
    variants: v('grau','anthrazit','schwarz','camel','olivgruen','dunkelbraun'),
    rating: 4.7, reviews: 2109
  },
  {
    id: 432, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Anti-Schuppen Shampoo',
    svgType: 'beauty-bottle',
    price: 8.49, badge: 'new',
    desc: 'Klinisch getestetes Anti-Schuppen-Shampoo mit Pyrithion-Zink und Teebaum-Extrakt. Sichtbare Wirkung nach 2 Anwendungen. Für fettige Kopfhaut.',
    sizes: ['One Size'],
    variants: v('navy','dunkelblau','taubenblau','schwarz','anthrazit','grau','mintgruen'),
    rating: 4.8, reviews: 3876
  },
  {
    id: 433, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Haar & Bart Conditioner',
    svgType: 'beauty-bottle',
    price: 7.49, badge: 'new',
    desc: 'Multifunktionaler Conditioner für Haar und Bart. Keratin und Macadamiaöl glättten und pflegen. Kein Frizz, kein Kratzen.',
    sizes: ['One Size'],
    variants: v('caramel','cognac','camel','dunkelbraun','olivgruen','champagne','gold'),
    rating: 4.7, reviews: 1765
  },

  /* --- HERREN ACCESSOIRES --- */
  {
    id: 440, cat: 'herren', brand: 'MIA MAN',
    name: 'Leder-Gürtel Classic',
    svgType: 'bag-crossbody',
    price: 12.99, oldPrice: 24.99, badge: 'sale',
    desc: 'Klassischer Ledergürtel mit Dornenschließe. Veganes Leder, 3,5 cm breit. Für Chino, Jeans und Anzughosen.',
    sizes: ['75cm','80cm','85cm','90cm','95cm','100cm','105cm','110cm'],
    variants: v('schwarz','dunkelbraun','cognac','camel','navy','olivgruen'),
    rating: 4.7, reviews: 1234
  },
  {
    id: 441, cat: 'herren', brand: 'MIA MAN',
    name: 'Leder-Geldbörse Slim',
    svgType: 'bag-crossbody',
    price: 14.99, oldPrice: 29.99, badge: 'hot',
    desc: 'Schlanke Herren-Geldbörse aus genarbtem Leder. Platz für 8 Karten + Geldscheine + Münzfach. RFID-Schutz.',
    sizes: ['One Size'],
    variants: v('schwarz','dunkelbraun','cognac','camel','navy','olivgruen','anthrazit'),
    rating: 4.8, reviews: 3456
  },
  /* ================================================================
     HÜTE & MÜTZEN
     ================================================================ */
  {
    id: 601, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Beanie Strickmütze Pompom',
    svgType: 'hat-beanie',
    price: 9.99, badge: 'hot',
    desc: 'Kuschelige Strickmütze mit weichem Pompom. Feines Rippstrick-Muster, warmes Innenfutter, für Damen und Herren. Der Winterklassiker in vielen Farben.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','grau','navy','camel','olivgruen','burgund','rosa','mintgruen','lavendel','creme','himmelblau','lila','mustard','anthrazit','rost','champagne','taubenblau'),
    rating: 4.8, reviews: 4321
  },
  {
    id: 602, cat: 'accessoires', brand: 'URBAN BASICS',
    name: 'Baseball Cap Classic',
    svgType: 'hat-baseball',
    price: 11.99, badge: 'new',
    desc: 'Klassische Baseball Cap aus Baumwoll-Twill. 6-Panel-Design, verstellbarer Klettverschluss. Für Sport, Alltag und unterwegs.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','navy','grau','olivgruen','rot','camel','anthrazit','himmelblau','dunkelblau','burgund','creme','mintgruen','khaki','sand','gelb'),
    rating: 4.7, reviews: 3456
  },
  {
    id: 603, cat: 'accessoires', brand: 'NOVA STYLE',
    name: 'Bucket Hat Sommer',
    svgType: 'hat-bucket',
    price: 12.99, badge: 'new',
    desc: 'Trendiger Bucket Hat für Sommer, Strand und Festival. Leichte Baumwolle, breite Krempe, verstaubar. Der Sonnenschutz-Trend aus den 90ern ist zurück!',
    sizes: ['One Size'],
    variants: v('weiss','schwarz','beige','creme','olivgruen','navy','rosa','mintgruen','lavendel','himmelblau','camel','gelb','lila','altrosa','taubenblau','babyblau'),
    rating: 4.8, reviews: 5678
  },
  {
    id: 604, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Fedora Hut Eleganz',
    svgType: 'hat-fedora',
    price: 19.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Eleganter Fedora-Hut aus Wollfilz. Breite Krempe, Hutband mit Schleife. Verleiht jedem Outfit eine edle, zeitlose Note. Für Damen und Herren.',
    sizes: ['S/M (54-57cm)','L/XL (58-61cm)'],
    variants: v('schwarz','dunkelbraun','camel','sand','grau','olivgruen','navy','creme','cognac','anthrazit','burgund','beige'),
    rating: 4.9, reviews: 1876
  },
  {
    id: 605, cat: 'accessoires', brand: 'THE DAILY EDIT',
    name: 'Baskenmütze Beret French Style',
    svgType: 'hat-beret',
    price: 14.99, badge: 'hot',
    desc: 'Klassische Baskenmütze im französischen Stil. Wollfilz, schöner Drape, passt auf allen Kopfgrößen. Das Pariser Mode-Accessoire für jeden Herbstlook.',
    sizes: ['One Size'],
    variants: v('schwarz','rot','navy','olivgruen','burgund','camel','dunkelbraun','grau','weinrot','lila','taubenblau','creme','champagne','mauve'),
    rating: 4.8, reviews: 2345
  },
  {
    id: 606, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Strohhut Boho Floppy',
    svgType: 'hat-straw',
    price: 16.99, badge: 'new',
    desc: 'Großer Floppy-Strohhut im Boho-Stil. Handgewebtes Stroh, breite Krempe, Satinband mit Schleife. Perfekt für Strand, Garten und Sommerpartys.',
    sizes: ['One Size'],
    variants: v('camel','sand','beige','creme','weiss','champagne','cognac','caramel','latte','ivory'),
    rating: 4.9, reviews: 3210
  },
  {
    id: 607, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Snapback Cap Streetstyle',
    svgType: 'hat-snapback',
    price: 13.99, badge: 'hot',
    desc: 'Strukturierte Snapback Cap mit flachem Schirm. 6-Panel-Design, verstellbarer Snap-Verschluss, besticktes Logo-Panel. Der Streetstyle-Klassiker.',
    sizes: ['One Size'],
    variants: v('schwarz','navy','olivgruen','grau','rot','anthrazit','weiss','dunkelblau','camel','burgund','khaki','mintgruen','lila'),
    rating: 4.7, reviews: 4321
  },
  {
    id: 608, cat: 'accessoires', brand: 'THE DAILY EDIT',
    name: 'Cowboy Hat Western',
    svgType: 'hat-cowboy',
    price: 22.99, oldPrice: 44.99, badge: 'sale',
    desc: 'Authentischer Cowboy-Hut aus Wollfilz. Breite geschwungene Krempe, tiefe Mittelkehle, Zierband mit Metallnieten. Für Festivals, Partys und Mutige.',
    sizes: ['S/M (54-57cm)','L/XL (58-61cm)'],
    variants: v('dunkelbraun','sand','schwarz','cognac','camel','beige','weiss','rost','olivgruen','grau'),
    rating: 4.8, reviews: 987
  },
  {
    id: 609, cat: 'jugend', brand: 'NOVA STYLE',
    name: 'Trucker Cap Mesh',
    svgType: 'hat-baseball',
    price: 9.99, badge: 'new',
    desc: 'Lässige Trucker Cap mit Mesh-Rückteil. Vorgebogener Schirm, Snapback-Verschluss. Der coolste Hut für Teens und junge Erwachsene.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','navy','rot','olivgruen','himmelblau','camel','mintgruen','gelb','lila','altrosa','creme'),
    rating: 4.8, reviews: 3456
  },
  {
    id: 610, cat: 'jugend', brand: 'MIA LABEL',
    name: 'Beanie Teen Logo',
    svgType: 'hat-beanie',
    price: 7.99, badge: 'hot',
    desc: 'Coole Logo-Beanie für Teens. Weiches Strickfleece, kein Pompom für den cleanen Look. In vielen trendigen Farben.',
    sizes: ['One Size'],
    variants: v('schwarz','weiss','navy','rosa','mintgruen','lavendel','himmelblau','lila','koralle','olivgruen','gelb','babyblau','altrosa','camel'),
    rating: 4.8, reviews: 2876
  },
  {
    id: 611, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Wollmütze Bobble Premium',
    svgType: 'hat-beanie',
    price: 14.99, oldPrice: 24.99, badge: 'sale',
    desc: 'Premium-Wollmütze mit Riesenpompom aus Echtwolle. Doppelt gestrickt für extra Wärme, kein Juckreiz. Das Winteraccessoire der Saison.',
    sizes: ['One Size'],
    variants: v('creme','camel','grau','weiss','schwarz','olivgruen','burgund','anthrazit','navy','rosa','lavendel','mustard','taubenblau'),
    rating: 4.9, reviews: 1654
  },
  {
    id: 612, cat: 'herren', brand: 'MIA MAN',
    name: 'Flat Cap Herren',
    svgType: 'hat-fedora',
    price: 17.99, badge: 'new',
    desc: 'Klassischer Flat Cap / Schiebermütze aus Tweed. Traditionelles britisches Design, fester Schirm, Hutknopf auf dem Deckel. Für lässig-elegante Herren.',
    sizes: ['S/M (54-57cm)','L/XL (58-61cm)'],
    variants: v('dunkelbraun','grau','schwarz','camel','navy','olivgruen','anthrazit','cognac','beige','khaki'),
    rating: 4.8, reviews: 1234
  },

  {
    id: 442, cat: 'herren', brand: 'NOVA STYLE',
    name: 'Armbanduhr Herren Chronograph',
    svgType: 'bag-crossbody',
    price: 49.99, oldPrice: 99.99, badge: 'sale',
    desc: 'Eleganter Herren-Chronograph mit Edelstahlgehäuse und Saphirglas. 5 ATM wasserdicht, Datum-Anzeige, Miyota-Werk.',
    sizes: ['One Size'],
    variants: v('schwarz','silber','gold','cognac','navy','anthrazit'),
    rating: 4.9, reviews: 876
  },
  {
    id: 443, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Jogginganzug Herren 2-teilig',
    svgType: 'top-shirt',
    price: 24.99, oldPrice: 54.99, badge: 'sale',
    desc: 'Bequemer Jogginganzug aus Baumwoll-French-Terry. Kapuzenpulli + Jogger-Hose. Ideal für Sport, Freizeit und Zuhause.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','grau','navy','olivgruen','anthrazit','burgund','camel','himmelblau','weiss'),
    rating: 4.8, reviews: 2987
  },
  {
    id: 444, cat: 'herren', brand: 'MIA MAN',
    name: 'Strickjacke Herren Merino',
    svgType: 'blazer',
    price: 29.99, oldPrice: 59.99, badge: 'sale',
    desc: 'Elegante Strickjacke aus Merino-Wolle-Mix. V-Ausschnitt, Knopfleiste, Rippbündchen an Saum und Ärmeln. Für Büro und Casual.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('grau','navy','schwarz','camel','olivgruen','burgund','anthrazit','creme','taubenblau','mustard'),
    rating: 4.8, reviews: 1654
  },
  {
    id: 445, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Cargo Shorts Herren',
    svgType: 'pants',
    price: 16.99, oldPrice: 34.99, badge: 'sale',
    desc: 'Lockere Cargo-Shorts mit seitlichen Taschen. Gürtelschlaufen, verstellbarer Saum, Baumwolle-Mix. Der Sommer-Klassiker für Herren.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('khaki','olivgruen','schwarz','sand','grau','navy','camel','anthrazit','dunkelbraun','beige'),
    rating: 4.7, reviews: 2109
  },
  {
    id: 446, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Deo Spray Men 72h',
    svgType: 'beauty-hairspray',
    price: 4.99, badge: 'new',
    desc: '72-Stunden-Schutz gegen Schweiß und Geruch. Alkoholfrei, kein weißer Flecken. Frischer maskuliner Duft – Zeder & Bergamotte.',
    sizes: ['One Size'],
    variants: v('navy','taubenblau','grau','schwarz','mintgruen','anthrazit'),
    rating: 4.7, reviews: 3456
  },
  {
    id: 447, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Körperlotion Herren Sport',
    svgType: 'beauty-bottle',
    price: 6.99, badge: 'new',
    desc: 'Leichte Körperlotion für aktive Männer. Shea-Butter und Vitamin E pflegen nach dem Sport. Schnell einziehend, kein Fettfilm.',
    sizes: ['One Size'],
    variants: v('navy','taubenblau','grau','mintfrisch','olivgruen','weiss','silber'),
    rating: 4.6, reviews: 1765
  },
  {
    id: 448, cat: 'herren', brand: 'MIA MAN',
    name: 'Sporttasche Gym Bag',
    svgType: 'bag-tote',
    price: 19.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Geräumige Sporttasche mit separatem Schuhfach. Schweißfeste Innenfächer, verstellbarer Schulterriemen, Nylon-Außenmaterial.',
    sizes: ['One Size'],
    variants: v('schwarz','navy','grau','olivgruen','anthrazit','rot','camel','dunkelblau'),
    rating: 4.8, reviews: 2876
  },
  {
    id: 449, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Parfum Herren Intense',
    svgType: 'beauty-bottle',
    price: 29.99, oldPrice: 59.99, badge: 'hot',
    desc: 'Intensives Herren-Eau de Parfum mit Noten von Vetiver, Zedernholz und Moschus. Hält 12+ Stunden. Das Signature-Duftprojekt von MIA MAN.',
    sizes: ['One Size'],
    variants: v('dunkelbraun','anthrazit','schwarz','cognac','navy','olivgruen'),
    rating: 4.9, reviews: 1876
  },
  {
    id: 450, cat: 'herren', brand: 'MIA MAN CARE',
    name: 'Lippenpflege Balsam für Männer',
    svgType: 'beauty-lipstick',
    price: 2.99, badge: 'new',
    desc: 'Pflegender Lippenbalsam mit Bienenwachs und Vitamin E. Schützt vor Austrocknung, ohne Glanz. Der dezente, maskuline Lippenschutz.',
    sizes: ['One Size'],
    variants: v('weiss','creme','nudenude','mintfrisch','navy','anthrazit'),
    rating: 4.6, reviews: 987
  },

  /* ================================================================
     JUGEND & TEENS
     ================================================================ */
  {
    id: 501, cat: 'jugend', brand: 'URBAN BASICS',
    name: 'Oversized Hoodie Teens',
    svgType: 'top-shirt',
    price: 14.99, oldPrice: 29.99, badge: 'hot',
    desc: 'Der Must-Have-Hoodie für Teens. Überschnittene Schultern, Känguru-Tasche, weiches French-Terry-Material. Zu allem kombinierbar.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','grau','weiss','rosa','himmelblau','mintgruen','lavendel','navy','olivgruen','gelb','koralle','burgundrot','creme','babyblau'),
    rating: 4.9, reviews: 5432
  },
  {
    id: 502, cat: 'jugend', brand: 'URBAN BASICS',
    name: 'Baggy Jeans Y2K Style',
    svgType: 'pants',
    price: 24.99, oldPrice: 49.99, badge: 'new',
    desc: 'Die trendigsten weiten Jeans im Y2K-Style. Niedriger Bund, extrem weites Bein, Kargo-Taschen an den Seiten. TikTok-approved!',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('denim','schwarz','grau','dunkelblau','jeansblau','weiss','beige','camel'),
    rating: 4.8, reviews: 4321
  },
  {
    id: 503, cat: 'jugend', brand: 'NOVA STYLE',
    name: 'Crop Top Teens Printed',
    svgType: 'top-crop',
    price: 7.99, badge: 'hot',
    desc: 'Trendiger Crop-Top für junge Girls. Verschiedene Motive und Drucke, leichtes Jersey-Material. Perfekt für Schule, Freizeit und ausgehen.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','schwarz','rosa','mintgruen','lavendel','himmelblau','creme','gelb','koralle','lila','babyrose','altrosa'),
    rating: 4.8, reviews: 6789
  },
  {
    id: 504, cat: 'jugend', brand: 'URBAN BASICS',
    name: 'Sneakers Teen High-Top',
    svgType: 'shoe-sneaker',
    price: 29.99, oldPrice: 59.99, badge: 'sale',
    desc: 'Stylische High-Top-Sneaker für Teens. Robuste Canvas-Außenfläche, Gummisohle, Schnürung. Der klassische Skater-Sneaker.',
    sizes: ['36','37','38','39','40','41','42'],
    variants: v('schwarz','weiss','navy','rot','olivgruen','rosa','himmelblau','mintgruen','gelb','orange'),
    rating: 4.7, reviews: 4231
  },
  {
    id: 505, cat: 'jugend', brand: 'MIA LABEL',
    name: 'Mini Backpack Teen',
    svgType: 'bag-crossbody',
    price: 16.99, badge: 'new',
    desc: 'Angesagter Mini-Rucksack für Teens und Tweens. Vordertasche mit Reißverschluss, verstellbare Riemen, viele Farben.',
    sizes: ['One Size'],
    variants: v('schwarz','altrosa','lila','himmelblau','mintgruen','weiss','olivgruen','navy','koralle','gelb','lavendel','creme'),
    rating: 4.8, reviews: 3456
  },
  {
    id: 506, cat: 'jugend', brand: 'NOVA STYLE',
    name: 'Cargo Pants Teen Streetstyle',
    svgType: 'pants',
    price: 19.99, oldPrice: 39.99, badge: 'hot',
    desc: 'Trendy Cargo-Hose im Streetstyle. Weites Bein, viele Taschen, elastischer Bund. Ein Must-Have für jeden Teen-Kleiderschrank.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','olivgruen','beige','grau','camel','khaki','navy','anthrazit','sand','rost'),
    rating: 4.8, reviews: 5678
  },
  {
    id: 507, cat: 'jugend', brand: 'MIA LABEL',
    name: 'Bodysuit Teen Floral',
    svgType: 'bodysuit-ribbed',
    price: 9.99, badge: 'new',
    desc: 'Süßer Bodysuit mit Blumenmuster für Teens. Weicher Ripp-Stoff, Rundhalsausschnitt, Druckknöpfe am Schritt. Ideal unter Jeans oder Cargo-Pants.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('rosa','mintgruen','lavendel','babyblau','weiss','creme','altrosa','himmelblau','lila','gelb'),
    rating: 4.7, reviews: 2345
  },
  {
    id: 508, cat: 'jugend', brand: 'URBAN BASICS',
    name: 'Bomberjacke Teen Shiny',
    svgType: 'blazer',
    price: 24.99, oldPrice: 49.99, badge: 'sale',
    desc: 'Glänzende Bomberjacke für junge Trendsetter. Satin-Obermaterial, Rippbündchen, Eingrifftaschen. Statement-Piece für jeden Look.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','navy','olivgruen','altrosa','burgund','himmelblau','camel','lila','rot','mintgruen'),
    rating: 4.8, reviews: 3210
  },
  {
    id: 509, cat: 'jugend', brand: 'MIA BEAUTY',
    name: 'Tinted Lip Balm Teen',
    svgType: 'beauty-lipstick',
    price: 3.49, badge: 'hot',
    desc: 'Pflegender getönter Lippenbalsam für Teens. Leichte Farbe, Glossy-Effekt, kein Schminken-Gefühl. In 10 Glossy-Farben.',
    sizes: ['One Size'],
    variants: v('rosa','babyrose','koralle','lachs','nudenude','altrosa','beerenpink','lila','mintfrisch','gelb'),
    rating: 4.9, reviews: 8765
  },
  {
    id: 510, cat: 'jugend', brand: 'MIA HAIR',
    name: 'Glitzer Hair Spray Party',
    svgType: 'beauty-hairspray',
    price: 4.99, badge: 'new',
    desc: 'Temporäres Glitzer-Haarspray für Partys, Festivals und besondere Anlässe. Wäscht sich aus, kein Schaden am Haar. In 8 Glitzer-Farben.',
    sizes: ['One Size'],
    variants: v('gold','silber','rosegold','champagne','himmelblau','rosa','lila','weiss'),
    rating: 4.8, reviews: 4321
  },
  {
    id: 511, cat: 'jugend', brand: 'MIA BEAUTY',
    name: 'Nagellack Set Trendy 6-tlg',
    svgType: 'beauty-nail',
    price: 7.99, badge: 'hot',
    desc: '6 trendige Nagellacke in aktuellen Teen-Farben. Jelly, Neon und Pastel. Trocknet in 60 Sekunden, kein Schälen.',
    sizes: ['One Size'],
    variants: v('rosa','mintfrisch','lila','himmelblau','gelb','koralle','weiss','lachs','babyblau','altrosa'),
    rating: 4.8, reviews: 5678
  },
  {
    id: 512, cat: 'jugend', brand: 'MIA HAIR',
    name: 'Haarbänder-Set Rainbow 20er',
    svgType: 'beauty-scrunchie',
    price: 5.99, badge: 'new',
    desc: '20 bunte Haarbänder im Regenbogen-Set. Verschiedene Größen und Farben, Satin- und Velour-Mix. Für jedes Haar und jeden Look.',
    sizes: ['One Size'],
    variants: v('rosa','gelb','mintgruen','himmelblau','lila','koralle','weiss','schwarz','altrosa','babyblau','champagne','lavendel','babyrose'),
    rating: 4.9, reviews: 6543
  },
  {
    id: 513, cat: 'jugend', brand: 'URBAN BASICS',
    name: 'Sport-BH Teen Active',
    svgType: 'bodysuit-tank',
    price: 8.99, badge: 'new',
    desc: 'Sportlicher Bustier-BH für aktive Teens. Leichte Polsterung, breite Träger, elastischer Rippstoff. Für Yoga, Sport und Alltag.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('schwarz','weiss','rosa','mintgruen','lavendel','navy','olivgruen','creme','himmelblau','gelb'),
    rating: 4.7, reviews: 3210
  },
  {
    id: 514, cat: 'jugend', brand: 'MIA LABEL',
    name: 'Maxi Kleid Boho Teen',
    svgType: 'dress-maxi',
    price: 19.99, badge: 'new',
    desc: 'Verspieltes Boho-Maxikleid für junge Mädchen. Rüschendetails, elastischer Bund, leicht und fließend. Für Sommer, Strand und Festival.',
    sizes: ['XXS','XS','S','M','L','XL','XXL','4XL','5XL','6XL','7XL'],
    variants: v('weiss','creme','rosa','himmelblau','mintgruen','lavendel','gelb','babyblau','ivory','altrosa','lila'),
    rating: 4.8, reviews: 2345
  },
];
