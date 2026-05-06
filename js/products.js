const products = [
  // ===== KLEIDUNG =====
  {
    id: 1, category: 'kleidung', name: 'Oversized Hoodie', emoji: '🧥',
    price: 34.99, oldPrice: 59.99, badge: 'sale',
    desc: 'Mega comfy Hoodie im Oversized-Fit. Perfekt für entspannte Tage.',
    rating: 4.8, reviews: 312, colors: ['Schwarz', 'Weiß', 'Grau', 'Rosa']
  },
  {
    id: 2, category: 'kleidung', name: 'Cargo Hose', emoji: '👖',
    price: 44.99, oldPrice: 69.99, badge: 'hot',
    desc: 'Stylische Cargo Pants mit vielen Taschen. Streetwear-Must-Have.',
    rating: 4.7, reviews: 189, colors: ['Khaki', 'Schwarz', 'Navy']
  },
  {
    id: 3, category: 'kleidung', name: 'Crop Top Set', emoji: '👚',
    price: 22.99, badge: 'new',
    desc: '2-teiliges Crop-Top Set aus softem Jersey. Perfekt für den Sommer.',
    rating: 4.9, reviews: 445, colors: ['Weiß', 'Beige', 'Schwarz']
  },
  {
    id: 4, category: 'kleidung', name: 'Denim Jacke', emoji: '🧣',
    price: 55.99, oldPrice: 89.99, badge: 'sale',
    desc: 'Klassische Jeansjacke im Vintage-Wash. Zeitloser Streetstyle.',
    rating: 4.6, reviews: 227, colors: ['Hellblau', 'Dunkelblau']
  },
  {
    id: 5, category: 'kleidung', name: 'Basic T-Shirt 3er Pack', emoji: '👕',
    price: 19.99, oldPrice: 29.99, badge: 'sale',
    desc: '3 hochwertige Baumwoll-T-Shirts im Set. Für jeden Tag.',
    rating: 4.5, reviews: 631, colors: ['Weiß/Schwarz/Grau']
  },
  {
    id: 6, category: 'kleidung', name: 'Puffer Jacke', emoji: '🧤',
    price: 79.99, oldPrice: 129.99, badge: 'hot',
    desc: 'Wärme trifft Style. Ultra-leichte Daunenjacke für den Winter.',
    rating: 4.8, reviews: 298, colors: ['Schwarz', 'Olive', 'Burgund']
  },
  {
    id: 7, category: 'kleidung', name: 'Mini Kleid', emoji: '👗',
    price: 37.99, badge: 'new',
    desc: 'Trendy Mini-Kleid mit Blumenprint. Ideal für besondere Anlässe.',
    rating: 4.7, reviews: 175, colors: ['Rosa', 'Blau', 'Gelb']
  },
  {
    id: 8, category: 'kleidung', name: 'Jogger Set', emoji: '🩳',
    price: 42.99, oldPrice: 64.99, badge: 'sale',
    desc: 'Matching-Set aus Jogger und Hoodie. Bequem und stylisch.',
    rating: 4.6, reviews: 382, colors: ['Grau', 'Schwarz', 'Braun']
  },
  {
    id: 9, category: 'kleidung', name: 'Satin Bluse', emoji: '🎽',
    price: 29.99, badge: 'new',
    desc: 'Elegante Satin-Bluse für Business und Freizeit.',
    rating: 4.4, reviews: 143, colors: ['Champagne', 'Schwarz', 'Navy']
  },
  {
    id: 10, category: 'kleidung', name: 'Strick Pullover', emoji: '🧶',
    price: 48.99, oldPrice: 74.99, badge: 'sale',
    desc: 'Weicher Grobstrick-Pullover für kalte Herbsttage.',
    rating: 4.8, reviews: 256, colors: ['Camel', 'Creme', 'Grün']
  },

  // ===== SCHUHE =====
  {
    id: 11, category: 'schuhe', name: 'Air Sneaker Pro', emoji: '👟',
    price: 89.99, oldPrice: 139.99, badge: 'hot',
    desc: 'Premium Chunky Sneaker mit Air-Sohle. Maximaler Komfort.',
    rating: 4.9, reviews: 521, colors: ['Weiß', 'Schwarz', 'Grau']
  },
  {
    id: 12, category: 'schuhe', name: 'Platform Boots', emoji: '👢',
    price: 74.99, oldPrice: 109.99, badge: 'sale',
    desc: 'Trendige Platform-Boots mit 5cm Absatz. Statement-Piece.',
    rating: 4.7, reviews: 234, colors: ['Schwarz', 'Braun']
  },
  {
    id: 13, category: 'schuhe', name: 'Sommer Sandalen', emoji: '🩴',
    price: 24.99, badge: 'new',
    desc: 'Leichte Flap-Sandalen mit Kork-Fußbett. Für heiße Tage.',
    rating: 4.5, reviews: 189, colors: ['Schwarz', 'Weiß', 'Beige']
  },
  {
    id: 14, category: 'schuhe', name: 'High Heels', emoji: '👠',
    price: 59.99, oldPrice: 89.99, badge: 'sale',
    desc: 'Stilette High Heels in 9cm. Perfekt für den Abend.',
    rating: 4.6, reviews: 178, colors: ['Schwarz', 'Nude', 'Rot']
  },
  {
    id: 15, category: 'schuhe', name: 'Chelsea Boots', emoji: '🥾',
    price: 69.99, badge: 'new',
    desc: 'Klassische Chelsea Boots aus veganem Leder. Zeitlos schön.',
    rating: 4.8, reviews: 312, colors: ['Schwarz', 'Tan']
  },
  {
    id: 16, category: 'schuhe', name: 'Slip-On Loafer', emoji: '🥿',
    price: 44.99, oldPrice: 69.99, badge: 'sale',
    desc: 'Bequeme Loafer zum Reinschlüpfen. Office-to-Street.',
    rating: 4.4, reviews: 145, colors: ['Schwarz', 'Braun', 'Creme']
  },

  // ===== ACCESSOIRES =====
  {
    id: 17, category: 'accessoires', name: 'Gold Chain Kette', emoji: '📿',
    price: 14.99, oldPrice: 24.99, badge: 'hot',
    desc: 'Trendige vergoldete Gliederkette. Stapelbar und vielseitig.',
    rating: 4.8, reviews: 598, colors: ['Gold', 'Silber']
  },
  {
    id: 18, category: 'accessoires', name: 'Designer Sonnenbrille', emoji: '🕶️',
    price: 19.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Cat-Eye Sonnenbrille mit UV400-Schutz. Festival-vibes.',
    rating: 4.6, reviews: 321, colors: ['Schwarz', 'Leopard', 'Weiß']
  },
  {
    id: 19, category: 'accessoires', name: 'Mini Crossbody Bag', emoji: '👜',
    price: 32.99, badge: 'new',
    desc: 'Kompakte Umhängetasche aus Kunstleder. Passt das Wesentliche.',
    rating: 4.7, reviews: 267, colors: ['Schwarz', 'Braun', 'Rosa']
  },
  {
    id: 20, category: 'accessoires', name: 'Bucket Hat', emoji: '🪣',
    price: 16.99, oldPrice: 24.99, badge: 'sale',
    desc: 'Trendiger Bucket Hat aus Cord. Der Summer-Look 2026.',
    rating: 4.5, reviews: 213, colors: ['Beige', 'Schwarz', 'Grün']
  },
  {
    id: 21, category: 'accessoires', name: 'Armband Set', emoji: '📿',
    price: 9.99, badge: 'hot',
    desc: '7er Set aus Perlen- und Goldarmbändern. Stapel-Armbänder im Trend.',
    rating: 4.9, reviews: 782, colors: ['Gold/Bunt', 'Silber/Bunt']
  },
  {
    id: 22, category: 'accessoires', name: 'Crossbody Bag Groß', emoji: '🎒',
    price: 49.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Geräumige Schultertasche mit vielen Fächern. Für den Alltag.',
    rating: 4.7, reviews: 189, colors: ['Schwarz', 'Camel']
  },
  {
    id: 23, category: 'accessoires', name: 'Baseball Cap', emoji: '🧢',
    price: 18.99, badge: 'new',
    desc: 'Klassisches 6-Panel Cap mit verstellbarem Verschluss.',
    rating: 4.6, reviews: 345, colors: ['Schwarz', 'Weiß', 'Navy', 'Rosa']
  },
  {
    id: 24, category: 'accessoires', name: 'Haarschmuck Set', emoji: '🎀',
    price: 12.99, oldPrice: 19.99, badge: 'sale',
    desc: '10-teiliges Haarclip-Set in Schmetterlingsform. Süß und trendy.',
    rating: 4.8, reviews: 534, colors: ['Bunt', 'Pastell', 'Schwarz']
  },
  {
    id: 25, category: 'accessoires', name: 'Ring Set', emoji: '💍',
    price: 11.99, badge: 'new',
    desc: '5 zarte Goldringe mit Stein-Details. Stackable rings.',
    rating: 4.7, reviews: 423, colors: ['Gold', 'Silber', 'Roségold']
  },
  {
    id: 26, category: 'accessoires', name: 'Schal & Mütze Set', emoji: '🧣',
    price: 23.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Wollschal und Beanie im Set. Warm durch den Winter.',
    rating: 4.6, reviews: 178, colors: ['Grau', 'Schwarz', 'Camel']
  },
  {
    id: 27, category: 'accessoires', name: 'Gürteltasche', emoji: '👝',
    price: 21.99, badge: 'hot',
    desc: 'Modische Fanny-Pack im 90s-Style. Freihändig und stylisch.',
    rating: 4.5, reviews: 289, colors: ['Schwarz', 'Braun', 'Rosa']
  },

  // ===== HANDYS =====
  {
    id: 28, category: 'handys', name: 'ProMax 16 Dummy', emoji: '📱',
    price: 12.99, badge: 'hot',
    desc: 'Displaymodell im ProMax-Stil. Perfekt als Dekoration oder Requisite.',
    rating: 4.3, reviews: 145, colors: ['Schwarz', 'Silber', 'Gold']
  },
  {
    id: 29, category: 'handys', name: 'Flip Phone Dummy', emoji: '📲',
    price: 9.99, badge: 'new',
    desc: 'Klapp-Handy Nachbildung. Cooles Retro-Accessoire.',
    rating: 4.2, reviews: 89, colors: ['Schwarz', 'Lila']
  },
  {
    id: 30, category: 'handys', name: 'Foto-Handy Prop', emoji: '🤳',
    price: 7.99, oldPrice: 14.99, badge: 'sale',
    desc: 'Handy-Dummy mit aufgedruckter Kamera. Für Foto-Shootings.',
    rating: 4.1, reviews: 67, colors: ['Schwarz', 'Weiß']
  },
  {
    id: 31, category: 'handys', name: 'Ultra Slim Dummy', emoji: '📵',
    price: 8.99, badge: 'new',
    desc: 'Superdünner Handy-Mock für Display-Zwecke und als Requisite.',
    rating: 4.0, reviews: 54, colors: ['Titan', 'Schwarz', 'Blau']
  },
  {
    id: 32, category: 'handys', name: 'Retro Brick Phone', emoji: '☎️',
    price: 15.99, oldPrice: 22.99, badge: 'hot',
    desc: '90s Knochen-Handy Replik. Kultiges Party-Accessoire.',
    rating: 4.6, reviews: 203, colors: ['Grau', 'Schwarz']
  },
  {
    id: 33, category: 'handys', name: 'Handy-Hülle Glitzer', emoji: '✨',
    price: 11.99, badge: 'new',
    desc: 'Glitzer-Handyhülle mit Kartenfach. Passt auf alle gängigen Modelle.',
    rating: 4.7, reviews: 456, colors: ['Pink', 'Gold', 'Silber', 'Lila']
  },
  {
    id: 34, category: 'handys', name: 'Popsocket Set', emoji: '🔵',
    price: 6.99, oldPrice: 12.99, badge: 'sale',
    desc: '3er Set bunte Popsockets mit verschiedenen Motiven.',
    rating: 4.5, reviews: 312, colors: ['Bunt']
  },
  {
    id: 35, category: 'handys', name: 'Selfie Ring Light', emoji: '💡',
    price: 18.99, badge: 'hot',
    desc: 'Mini-Ringlicht fürs Handy. Perfekte Beleuchtung für Selfies.',
    rating: 4.8, reviews: 589, colors: ['Weiß']
  },

  // ===== HAUSHALT =====
  {
    id: 36, category: 'haushalt', name: 'Kerzen Set 4er', emoji: '🕯️',
    price: 16.99, oldPrice: 24.99, badge: 'sale',
    desc: '4 Duftkerzen in Gläsern. Entspannte Wohlatmosphäre schaffen.',
    rating: 4.8, reviews: 432, colors: ['Vanille', 'Lavendel', 'Zimt', 'Ozean']
  },
  {
    id: 37, category: 'haushalt', name: 'Wandspiegel Oval', emoji: '🪞',
    price: 44.99, oldPrice: 69.99, badge: 'hot',
    desc: 'Trendiger Oval-Spiegel mit goldenem Rahmen. Instagram-Worthy.',
    rating: 4.9, reviews: 287, colors: ['Gold', 'Schwarz', 'Silber']
  },
  {
    id: 38, category: 'haushalt', name: 'Makramee-Wandbehang', emoji: '🪆',
    price: 27.99, badge: 'new',
    desc: 'Handgefertigter Makramee-Wandteppich. Boho-Deko für jedes Zimmer.',
    rating: 4.7, reviews: 156, colors: ['Naturweiß', 'Beige']
  },
  {
    id: 39, category: 'haushalt', name: 'Kunstpflanze Groß', emoji: '🌿',
    price: 21.99, oldPrice: 34.99, badge: 'sale',
    desc: 'Lebensechte Kunstpflanze 60cm. Grün ohne Pflege.',
    rating: 4.6, reviews: 378, colors: ['Grün']
  },
  {
    id: 40, category: 'haushalt', name: 'Lichterkette Stern', emoji: '✨',
    price: 13.99, badge: 'hot',
    desc: 'LED Lichterkette mit 40 Stern-Lichtern. Cozy Zimmer-Deko.',
    rating: 4.8, reviews: 623, colors: ['Warmweiß', 'Kalt-Weiß', 'Bunt']
  },
  {
    id: 41, category: 'haushalt', name: 'Kissenset 2er', emoji: '🛏️',
    price: 29.99, oldPrice: 44.99, badge: 'sale',
    desc: 'Samtweiche Dekokissen 45x45cm im 2er Pack.',
    rating: 4.7, reviews: 245, colors: ['Grün', 'Rosa', 'Blau', 'Grau']
  },
  {
    id: 42, category: 'haushalt', name: 'Badezimmer Set', emoji: '🪥',
    price: 19.99, badge: 'new',
    desc: '5-teiliges Bambus-Badset: Seifenspender, Becher, Schale, Box.',
    rating: 4.5, reviews: 189, colors: ['Natur']
  },
  {
    id: 43, category: 'haushalt', name: 'Foto Rahmen Set', emoji: '🖼️',
    price: 24.99, oldPrice: 39.99, badge: 'sale',
    desc: '6er Set Bilderrahmen in verschiedenen Größen. Für die Galerie-Wand.',
    rating: 4.6, reviews: 312, colors: ['Schwarz', 'Weiß', 'Gold']
  },
  {
    id: 44, category: 'haushalt', name: 'Kuscheldecke XXL', emoji: '🛋️',
    price: 34.99, badge: 'hot',
    desc: 'Super weiche Kuscheldecke 200x150cm. Flauschig und warm.',
    rating: 4.9, reviews: 734, colors: ['Grau', 'Beige', 'Rosa', 'Schwarz']
  },
  {
    id: 45, category: 'haushalt', name: 'Parfüm Diffuser', emoji: '🌸',
    price: 22.99, oldPrice: 35.99, badge: 'sale',
    desc: 'Eleganter Raumduft-Diffuser mit 6 Stäbchen und 200ml Öl.',
    rating: 4.8, reviews: 289, colors: ['Rose', 'Oud', 'Citrus']
  }
];
