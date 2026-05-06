const products = [

  /* ============================================================
     DAMEN
  ============================================================ */
  {
    id: 1, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Sommer Wickelkleid mit Blumenprint',
    emoji: '👗', bg: 'linear-gradient(145deg,#fce8f0,#f9d4e5)',
    price: 39.95, oldPrice: 69.95, badge: 'sale',
    desc: 'Wunderschönes Midi-Kleid im Wickelstil mit romantischem Blumenprint. Fließender Chiffon-Stoff für leichten Tragekomfort. Perfekt für Sommerfeste, Dates oder Spaziergänge.',
    sizes: ['XS','S','M','L','XL'], colors: ['Rosé/Floral','Blau/Floral','Weiß/Floral'],
    colorDots: ['#f8b4c8','#a8c8f0','#f5f5f5'],
    rating: 4.8, reviews: 634, age: 'damen'
  },
  {
    id: 2, cat: 'damen', brand: 'URBAN BASICS',
    name: 'Oversized Blazer Damen',
    emoji: '🧥', bg: 'linear-gradient(145deg,#e8e0f0,#d5c8e8)',
    price: 79.95, oldPrice: 129.95, badge: 'hot',
    desc: 'Klassischer Oversized-Blazer in zeitlosem Design. Hochwertige Webqualität mit strukturierter Schulterpartie. Kombinierbar zu Jeans oder Hosen – vom Office bis zum Abendausgang.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Camel','Schwarz','Creme','Navy'],
    colorDots: ['#c8a87a','#222','#f5f0e8','#1a2e5e'],
    rating: 4.9, reviews: 421, age: 'damen'
  },
  {
    id: 3, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Ripp-Crop-Top 2er Set',
    emoji: '👚', bg: 'linear-gradient(145deg,#fef0e0,#fde0c0)',
    price: 19.95, badge: 'new',
    desc: 'Zwei hochwertige Ripp-Crop-Tops im Set. Körpernahes Material mit angenehmer Stretchqualität. Ideal für layered Looks, unter Jacken oder solo im Sommer.',
    sizes: ['XS','S','M','L','XL'], colors: ['Weiß+Schwarz','Beige+Braun','Rosa+Lila'],
    colorDots: ['#f5f5f5','#d4b896','#f0c0d8'],
    rating: 4.7, reviews: 892, age: 'damen'
  },
  {
    id: 4, cat: 'damen', brand: 'MIA LABEL',
    name: 'Elegant Maxi-Kleid Satin',
    emoji: '👘', bg: 'linear-gradient(145deg,#e8f0f8,#c8d8f0)',
    price: 89.95, oldPrice: 149.95, badge: 'sale',
    desc: 'Luxuriöses Maxi-Kleid aus satinartigem Viskose-Mix. Fließende Silhouette mit elegantem Trägertop-Ausschnitt. Für Hochzeiten, Galas oder besondere Abende.',
    sizes: ['XS','S','M','L','XL'], colors: ['Champagne','Mitternachtsblau','Bordeaux'],
    colorDots: ['#e8d5a0','#1a2a4a','#7a1a2a'],
    rating: 4.9, reviews: 287, age: 'damen'
  },
  {
    id: 5, cat: 'damen', brand: 'PURE & CO',
    name: 'Highwaist Jeans Wide Leg',
    emoji: '👖', bg: 'linear-gradient(145deg,#e0e8f5,#c8d4e8)',
    price: 59.95, oldPrice: 89.95, badge: 'sale',
    desc: 'Trendige Wide-Leg-Jeans mit hohem Bund. Klassische Waschung in Blau. Der perfekte Denim für einen modernen, lässigen Look.',
    sizes: ['34','36','38','40','42','44'], colors: ['Hellblau','Dunkelblau','Black Wash'],
    colorDots: ['#a0c0e8','#2a4a7a','#1a1a1a'],
    rating: 4.6, reviews: 543, age: 'damen'
  },
  {
    id: 6, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Strickcardigan Oversized',
    emoji: '🧶', bg: 'linear-gradient(145deg,#f0ede8,#e5dfd5)',
    price: 54.95, oldPrice: 79.95, badge: 'hot',
    desc: 'Kuscheliger Grobstrick-Cardigan mit Reverskragen und Taschen. Perfekt für Herbst und Winter. Kombinierbar mit Kleidern oder Jeans.',
    sizes: ['XS/S','M/L','XL/XXL'], colors: ['Camel','Grau','Creme','Schokobraun'],
    colorDots: ['#c8a878','#a8a8a8','#f5f0e0','#5a3a20'],
    rating: 4.8, reviews: 378, age: 'damen'
  },
  {
    id: 7, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Midi Rock Plissee',
    emoji: '🩱', bg: 'linear-gradient(145deg,#f8ece0,#f0d8c0)',
    price: 34.95, badge: 'new',
    desc: 'Eleganter Midi-Rock im zeitlosen Plissee-Stil. Leichter, fließender Stoff. Passt zu Blusen, Tops und Pulloverн – von casual bis festlich.',
    sizes: ['XS','S','M','L','XL'], colors: ['Beige','Schwarz','Mintgrün','Rostrot'],
    colorDots: ['#d4c0a0','#222','#a0d0c0','#b84a20'],
    rating: 4.7, reviews: 234, age: 'damen'
  },
  {
    id: 8, cat: 'damen', brand: 'MIA LABEL',
    name: 'Seidenpyjama Set',
    emoji: '🩴', bg: 'linear-gradient(145deg,#fce8f4,#f8d0ec)',
    price: 64.95, oldPrice: 99.95, badge: 'sale',
    desc: 'Luxuriöses Pyjama-Set aus 100% Seidensatin. Klassisches Streifenmuster mit Paspelierung. Für erholsame Nächte und entspannte Morgen.',
    sizes: ['XS','S','M','L','XL'], colors: ['Rosa/Creme','Navy/Weiß','Sage/Weiß'],
    colorDots: ['#f4b8d8','#1a3a5a','#a0c8a0'],
    rating: 4.9, reviews: 189, age: 'damen'
  },
  {
    id: 9, cat: 'damen', brand: 'URBAN BASICS',
    name: 'Trenchcoat Classic Damen',
    emoji: '🧣', bg: 'linear-gradient(145deg,#f0e8d8,#e8d8c0)',
    price: 119.95, oldPrice: 189.95, badge: 'sale',
    desc: 'Zeitloser Trenchcoat in Klassisch-Beige. Doppelreiher mit Gürtel und Schulterklappen. Das Must-Have für den Übergang und kühle Sommertage.',
    sizes: ['XS','S','M','L','XL'], colors: ['Classic Beige','Schwarz','Kamel'],
    colorDots: ['#c8a87a','#222','#d4944a'],
    rating: 4.8, reviews: 312, age: 'damen'
  },
  {
    id: 10, cat: 'damen', brand: 'PURE & CO',
    name: 'Leinenhose Weites Bein',
    emoji: '👗', bg: 'linear-gradient(145deg,#e8f5e8,#d0ecd0)',
    price: 44.95, badge: 'new',
    desc: 'Luftige Leinenhose mit weitem Bein für heiße Sommertage. Natürliche Leinenqualität für maximale Atmungsaktivität. Mit Gummizug und Kordelzug.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Sand','Weiß','Olivgrün','Terracotta'],
    colorDots: ['#d4c090','#f5f5f0','#6a8040','#c06040'],
    rating: 4.6, reviews: 445, age: 'damen'
  },
  {
    id: 11, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Bluse mit Rüschen Kragen',
    emoji: '👒', bg: 'linear-gradient(145deg,#f8f0e8,#f0e4d0)',
    price: 32.95, oldPrice: 49.95, badge: 'sale',
    desc: 'Romantische Bluse mit Rüschenkragen aus leichtem Viskose-Crêpe. Passt zu Röcken, Hosen und Jeans. Für Büro und Freizeit gleichermaßen.',
    sizes: ['XS','S','M','L','XL'], colors: ['Weiß','Creme','Schwarz','Altrosa'],
    colorDots: ['#f5f5f5','#f0e8d0','#222','#c89898'],
    rating: 4.5, reviews: 267, age: 'damen'
  },
  {
    id: 12, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Kurzarm Sommerkleid Casual',
    emoji: '👗', bg: 'linear-gradient(145deg,#fef5e0,#feeac8)',
    price: 27.95, badge: 'new',
    desc: 'Leichtes Sommerkleid mit kurzen Ärmeln für den entspannten Alltag. Weicher Jersey-Stoff, körperfreundliche Passform. Ideal für Ausflüge, Shopping und mehr.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Gelb','Hellblau','Mintgrün','Lachs'],
    colorDots: ['#f0d040','#80b8f0','#80d0b0','#f0906a'],
    rating: 4.7, reviews: 523, age: 'damen'
  },

  /* ============================================================
     HERREN
  ============================================================ */
  {
    id: 13, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Premium Hoodie Heavyweight',
    emoji: '🧥', bg: 'linear-gradient(145deg,#e8e8f0,#d8d8e8)',
    price: 54.95, oldPrice: 84.95, badge: 'hot',
    desc: 'Schwerer 400g-Baumwoll-Hoodie für maximalen Komfort. Eingenähtes Kragen-Tape, Känguru-Tasche, Metall-Ösen. Der Hoodie, der alles andere ersetzt.',
    sizes: ['S','M','L','XL','XXL','XXXL'], colors: ['Schwarz','Dunkelgrau','Navy','Ecru'],
    colorDots: ['#111','#555','#1a3a5a','#f0ecdc'],
    rating: 4.9, reviews: 1043, age: 'herren'
  },
  {
    id: 14, cat: 'herren', brand: 'MIA LABEL',
    name: 'Slim Fit Anzug 2-teilig',
    emoji: '👔', bg: 'linear-gradient(145deg,#dde8f5,#c8d8f0)',
    price: 159.95, oldPrice: 249.95, badge: 'sale',
    desc: 'Edler 2-Teiler-Anzug in schlanker Passform. Hochwertiger Woll-Mix mit leichtem Glanz. Für Business-Meetings, Hochzeiten und festliche Anlässe.',
    sizes: ['44','46','48','50','52','54','56'], colors: ['Navy','Anthrazit','Mittelgrau','Schwarz'],
    colorDots: ['#1a3a6a','#404050','#888','#111'],
    rating: 4.8, reviews: 287, age: 'herren'
  },
  {
    id: 15, cat: 'herren', brand: 'PURE & CO',
    name: 'Cargo Hose Relaxed Fit',
    emoji: '👖', bg: 'linear-gradient(145deg,#e8f0e0,#d8e8c8)',
    price: 49.95, badge: 'new',
    desc: 'Bequeme Cargo-Hose im Relaxed-Fit mit 6 Taschen. Robuste Baumwoll-Twill-Qualität. Für Freizeit, Outdoor und lässige Streetwear-Looks.',
    sizes: ['S','M','L','XL','XXL'], colors: ['Khaki','Schwarz','Olivgrün','Beige'],
    colorDots: ['#a8986a','#222','#5a6a30','#d4c090'],
    rating: 4.7, reviews: 612, age: 'herren'
  },
  {
    id: 16, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Oxford Hemd Classic',
    emoji: '🎽', bg: 'linear-gradient(145deg,#e0eef8,#c8dff0)',
    price: 39.95, oldPrice: 59.95, badge: 'sale',
    desc: 'Zeitloses Oxford-Hemd aus 100% Baumwolle mit Button-Down-Kragen. Leicht strukturiertes Gewebe, knitterarm. Passt zu Jeans, Chinos oder unter dem Blazer.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Weiß','Hellblau','Streifenblau','Rosa'],
    colorDots: ['#f5f5f5','#a8c8f0','#4a7ab0','#f0b8c8'],
    rating: 4.6, reviews: 438, age: 'herren'
  },
  {
    id: 17, cat: 'herren', brand: 'THE DAILY EDIT',
    name: 'Slim Chino Herren',
    emoji: '🩳', bg: 'linear-gradient(145deg,#f5ede0,#eee0c8)',
    price: 44.95, oldPrice: 69.95, badge: 'sale',
    desc: 'Klassische Slim-Fit-Chino aus elastischem Baumwoll-Mix. Gepflegter Look mit Seitenfalte. Für Büro und Freizeit gleichermaßen geeignet.',
    sizes: ['30/30','30/32','32/30','32/32','34/32','34/34','36/32'], colors: ['Beige','Marineblau','Olivgrün','Schwarz'],
    colorDots: ['#d4bc90','#1a3a6a','#5a6a40','#111'],
    rating: 4.5, reviews: 365, age: 'herren'
  },
  {
    id: 18, cat: 'herren', brand: 'MIA LABEL',
    name: 'Leder-Bomberjacke',
    emoji: '🧤', bg: 'linear-gradient(145deg,#d8d0c8,#c0b8a8)',
    price: 149.95, oldPrice: 229.95, badge: 'hot',
    desc: 'Echte Schafsleder-Bomberjacke in zeitlosem Design. Gestrickte Bündchen und Stehkragen, Reißverschlüsse in Kupfer. Ein Statement-Stück für jeden Kleiderschrank.',
    sizes: ['S','M','L','XL','XXL'], colors: ['Schwarz','Braun','Burgund'],
    colorDots: ['#222','#7a4a28','#7a1a2a'],
    rating: 4.9, reviews: 198, age: 'herren'
  },
  {
    id: 19, cat: 'herren', brand: 'PURE & CO',
    name: 'Basic T-Shirt 5er Pack',
    emoji: '👕', bg: 'linear-gradient(145deg,#f0f0f8,#e4e4f0)',
    price: 34.95, oldPrice: 49.95, badge: 'hot',
    desc: '5 hochwertige T-Shirts aus 100% Premium-Baumwolle im Vorteilspack. Klassische Passform, vorgewaschen für extra Weichheit. Das Fundament jedes Outfits.',
    sizes: ['S','M','L','XL','XXL','XXXL'], colors: ['Weiß/Grau/Schwarz/Navy/Weiß'],
    colorDots: ['#f5f5f5','#888','#222','#2a4a6a'],
    rating: 4.8, reviews: 2341, age: 'herren'
  },
  {
    id: 20, cat: 'herren', brand: 'NOVA STYLE',
    name: 'Strickpullover Merino',
    emoji: '🧤', bg: 'linear-gradient(145deg,#e8f0e8,#d0e8d0)',
    price: 74.95, oldPrice: 119.95, badge: 'sale',
    desc: 'Weicher Merinowolle-Pullover mit klassischem Rundhalsausschnitt. Temperaturregulierend und kratzt nicht. Perfekt für Büro, Reisen und kühle Abende.',
    sizes: ['S','M','L','XL','XXL'], colors: ['Dunkelgrün','Camel','Burgund','Mittelgrau'],
    colorDots: ['#2a5a30','#c8a870','#7a2030','#888'],
    rating: 4.7, reviews: 312, age: 'herren'
  },

  /* ============================================================
     SCHUHE
  ============================================================ */
  {
    id: 21, cat: 'schuhe', brand: 'NOVA STYLE',
    name: 'Chunky Sneaker Platform',
    emoji: '👟', bg: 'linear-gradient(145deg,#f0f4f8,#dde8f2)',
    price: 89.95, oldPrice: 139.95, badge: 'hot',
    desc: 'Trendige Chunky-Sneaker mit 4cm Plateausohle. Hochwertiges Kunstleder-Obermaterial, gedämpfte Laufsohle. Das Streetwear-Statement Piece der Saison.',
    sizes: ['36','37','38','39','40','41','42','43'], colors: ['Weiß/Silber','Schwarz/Schwarz','Beige/Braun'],
    colorDots: ['#f5f5f5','#222','#d4bc90'],
    rating: 4.8, reviews: 723, age: 'schuhe'
  },
  {
    id: 22, cat: 'schuhe', brand: 'URBAN BASICS',
    name: 'Klassischer Leder-Sneaker',
    emoji: '👟', bg: 'linear-gradient(145deg,#f8f5f0,#f0ebe0)',
    price: 79.95, oldPrice: 119.95, badge: 'sale',
    desc: 'Zeitloser weißer Sneaker aus echtem Nappaleder. Klassischer Schnitt mit schmaler Ledersohle. Passt zu allem – von Jeans bis Kleid.',
    sizes: ['36','37','38','39','40','41','42','43','44','45'], colors: ['Reinweiß','Cremeweiss','Weiß/Schwarz'],
    colorDots: ['#f8f8f8','#f8f0e0','#e0e0e0'],
    rating: 4.9, reviews: 1089, age: 'schuhe'
  },
  {
    id: 23, cat: 'schuhe', brand: 'MIA LABEL',
    name: 'High Heel Pumps Classic',
    emoji: '👠', bg: 'linear-gradient(145deg,#f8e8e8,#f0d0d0)',
    price: 84.95, oldPrice: 129.95, badge: 'sale',
    desc: 'Elegante Pumps mit 8cm Stiletto-Absatz aus feinstem Kunstleder. Verstärkte Zehenpartie, Leder-Innensohle für Komfort. Für Büro, Dinner und Galas.',
    sizes: ['35','36','37','38','39','40','41','42'], colors: ['Schwarz','Nude','Rot','Navy'],
    colorDots: ['#222','#d4a882','#c02020','#1a2a4a'],
    rating: 4.6, reviews: 345, age: 'schuhe'
  },
  {
    id: 24, cat: 'schuhe', brand: 'PURE & CO',
    name: 'Chelsea Boots Damen',
    emoji: '👢', bg: 'linear-gradient(145deg,#e8e0d8,#d8d0c8)',
    price: 99.95, oldPrice: 159.95, badge: 'hot',
    desc: 'Klassische Chelsea Boots aus echtem Rindsleder mit Gummizug-Einsatz. Leichte Blockabsatz (3cm), herausnehmbare Innensohle. Stilvoll von Herbst bis Frühling.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Schwarz','Cognac','Dunkelbraun'],
    colorDots: ['#222','#c87840','#6a3a20'],
    rating: 4.8, reviews: 512, age: 'schuhe'
  },
  {
    id: 25, cat: 'schuhe', brand: 'THE DAILY EDIT',
    name: 'Sommer-Sandalen Leder',
    emoji: '🩴', bg: 'linear-gradient(145deg,#fdf0e0,#f8e0c0)',
    price: 49.95, badge: 'new',
    desc: 'Handgenähte Flachsandalen aus echtem Leder mit anatomischem Fußbett. Kork-Latex-Sohle, verstellbare Riemen. Tragbar den ganzen Tag.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Naturleder','Schwarz','Weiß','Bronzerot'],
    colorDots: ['#c8a060','#222','#f5f5f0','#b05030'],
    rating: 4.7, reviews: 389, age: 'schuhe'
  },
  {
    id: 26, cat: 'schuhe', brand: 'MIA LABEL',
    name: 'Loafer Velvet Luxe',
    emoji: '🥿', bg: 'linear-gradient(145deg,#e8d8f0,#d8c8e8)',
    price: 74.95, oldPrice: 109.95, badge: 'sale',
    desc: 'Elegante Loafer aus hochwertigem Samtvelour mit goldener Bit-Spange. Weiche Lederinnensohle, leichte Gummisohle. Vom Meeting bis zum Dinner.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Petrol','Bordeaux','Schwarz','Camel'],
    colorDots: ['#2a7a8a','#7a1a2a','#222','#c4904a'],
    rating: 4.8, reviews: 234, age: 'schuhe'
  },
  {
    id: 27, cat: 'schuhe', brand: 'NOVA STYLE',
    name: 'Sneaker Herren Running',
    emoji: '👟', bg: 'linear-gradient(145deg,#e8f0e0,#d0e4c8)',
    price: 94.95, oldPrice: 149.95, badge: 'sale',
    desc: 'Sportlicher Laufschuh mit Air-Boost-Sohle und Mesh-Obermaterial. Leicht (280g), atmungsaktiv und energierückkehrend. Für Sport und Alltag.',
    sizes: ['40','41','42','43','44','45','46','47'], colors: ['Schwarz/Neon','Weiß/Grau','Navy/Weiß'],
    colorDots: ['#222','#888','#1a3a6a'],
    rating: 4.7, reviews: 678, age: 'schuhe'
  },
  {
    id: 28, cat: 'schuhe', brand: 'URBAN BASICS',
    name: 'Komfort-Halbschuh Herren',
    emoji: '👞', bg: 'linear-gradient(145deg,#e8e0d0,#d8d0c0)',
    price: 89.95, oldPrice: 129.95, badge: 'hot',
    desc: 'Eleganter Halbschuh aus echtem Kalbsleder mit weicher Laufsohle. Breite Passform, herausnehmbare Einlegesohle. Für lange Arbeitstage und Ausflüge.',
    sizes: ['40','41','42','43','44','45','46'], colors: ['Dunkelbraun','Schwarz','Cognac'],
    colorDots: ['#5a3a20','#222','#c07830'],
    rating: 4.6, reviews: 289, age: 'schuhe'
  },
  {
    id: 29, cat: 'schuhe', brand: 'PURE & CO',
    name: 'UGG-Style Boots Winter',
    emoji: '🥾', bg: 'linear-gradient(145deg,#f5ede0,#eeddd0)',
    price: 64.95, oldPrice: 99.95, badge: 'sale',
    desc: 'Warm und stylisch: Winterboots mit kuscheligem Innenflausch und wasserabweisender Außenwand. Griffige Profilsohle. Für kalte Tage und Schnee.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Sand','Kastanienbraun','Schwarz'],
    colorDots: ['#d4b888','#7a3a18','#222'],
    rating: 4.8, reviews: 534, age: 'schuhe'
  },

  /* ============================================================
     TASCHEN
  ============================================================ */
  {
    id: 30, cat: 'taschen', brand: 'MIA LABEL',
    name: 'Tote Bag aus echtem Leder',
    emoji: '👜', bg: 'linear-gradient(145deg,#efe0d0,#e5d0b8)',
    price: 99.95, oldPrice: 169.95, badge: 'sale',
    desc: 'Großzügige Ledertasche mit Reißverschluss-Hauptfach, Innentaschen und magnetischem Druckknopf. Schultergurt und kurzer Henkelt. Rindsleder in handgenähter Qualität.',
    sizes: ['One Size'], colors: ['Cognac','Schwarz','Creme','Bordeaux'],
    colorDots: ['#c07840','#222','#f8f5e8','#7a1a2a'],
    rating: 4.9, reviews: 487, age: 'taschen'
  },
  {
    id: 31, cat: 'taschen', brand: 'NOVA STYLE',
    name: 'Crossbody Mini Bag',
    emoji: '👛', bg: 'linear-gradient(145deg,#f8e8f4,#f0d4ec)',
    price: 34.95, badge: 'new',
    desc: 'Kompakte Mini-Umhängetasche mit Kette und Lederriemen. Magnetverschluss, Innenfach mit Spiegel. Passt Handy, Schlüssel und Portemonnaie.',
    sizes: ['One Size'], colors: ['Schwarz','Altrosa','Creme','Burgund'],
    colorDots: ['#222','#d4a0a8','#f5f0e8','#7a2030'],
    rating: 4.7, reviews: 623, age: 'taschen'
  },
  {
    id: 32, cat: 'taschen', brand: 'URBAN BASICS',
    name: 'Canvas Shopper XL',
    emoji: '🛍️', bg: 'linear-gradient(145deg,#e8ede8,#d8e4d8)',
    price: 29.95, oldPrice: 44.95, badge: 'sale',
    desc: 'Geräumiger Canvas-Shopper mit Lederhenkel und Innenreißverschluss. Verstärkter Boden, wasserabweisende Beschichtung. Für Shopping, Büro und Reisen.',
    sizes: ['One Size'], colors: ['Naturbeige/Tan','Schwarz/Schwarz','Olivgrün/Braun'],
    colorDots: ['#d8c498','#222','#6a7840'],
    rating: 4.6, reviews: 312, age: 'taschen'
  },
  {
    id: 33, cat: 'taschen', brand: 'MIA LABEL',
    name: 'Structured Satchel',
    emoji: '💼', bg: 'linear-gradient(145deg,#e0d8f0,#d0c8e8)',
    price: 119.95, oldPrice: 189.95, badge: 'hot',
    desc: 'Formschöne Arbeitstasche aus strukturiertem Kunstleder. Platz für 14" Laptop, Tablet und Dokumente. Metall-Beschläge, verstellbarer Schultergurt.',
    sizes: ['One Size'], colors: ['Schwarz','Navy','Dunkelgrau','Kamel'],
    colorDots: ['#222','#1a3a6a','#555','#c89850'],
    rating: 4.8, reviews: 234, age: 'taschen'
  },
  {
    id: 34, cat: 'taschen', brand: 'THE DAILY EDIT',
    name: 'Bucket Bag Raffia',
    emoji: '🧺', bg: 'linear-gradient(145deg,#fdf0d8,#f8e4c0)',
    price: 39.95, badge: 'new',
    desc: 'Trendiger Beuteltaschen aus handgeflochtenem Raffia-Stroh. Innentasche mit Reißverschluss, Lederriemen. Der Sommerstyle par excellence.',
    sizes: ['One Size'], colors: ['Natural/Braun','Weiß/Naturfarben','Schwarz/Schwarz'],
    colorDots: ['#c8a870','#f5f0e0','#222'],
    rating: 4.5, reviews: 189, age: 'taschen'
  },
  {
    id: 35, cat: 'taschen', brand: 'NOVA STYLE',
    name: 'Rucksack Anti-Theft',
    emoji: '🎒', bg: 'linear-gradient(145deg,#e0e8f0,#ccd8e8)',
    price: 69.95, oldPrice: 99.95, badge: 'sale',
    desc: 'Sicherer Rucksack mit verstecktem Hauptfach an der Rückseite, USB-Ladekabel und Diebstahlschutz-Material. Passt 15" Laptop. Für Reisen und Pendler.',
    sizes: ['One Size'], colors: ['Schwarz','Dunkelgrau','Navy'],
    colorDots: ['#222','#555','#1a3a6a'],
    rating: 4.7, reviews: 412, age: 'taschen'
  },
  {
    id: 36, cat: 'taschen', brand: 'PURE & CO',
    name: 'Abendtasche Clutch',
    emoji: '👛', bg: 'linear-gradient(145deg,#f8f0e8,#f0e0c8)',
    price: 44.95, oldPrice: 74.95, badge: 'sale',
    desc: 'Elegante Abend-Clutch mit Kristall-Strass-Besatz. Magnetverschluss, herausnehmbares Kettchen. Für Abende, Hochzeiten und besondere Anlässe.',
    sizes: ['One Size'], colors: ['Silber/Klar','Gold/Klar','Schwarz/Klar'],
    colorDots: ['#c8c8c8','#c8a840','#222'],
    rating: 4.8, reviews: 167, age: 'taschen'
  },

  /* ============================================================
     ACCESSOIRES
  ============================================================ */
  {
    id: 37, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Vintage Sonnenbrillen Cat-Eye',
    emoji: '🕶️', bg: 'linear-gradient(145deg,#f8f0e0,#f0e4c8)',
    price: 24.95, oldPrice: 44.95, badge: 'sale',
    desc: 'Retro Cat-Eye-Sonnenbrille mit polarisierten Gläsern (UV400). Acetat-Rahmen, federnde Bügel. Der Vintage-Sommer-Look für Frauen und Männer.',
    sizes: ['One Size'], colors: ['Schildpatt','Schwarz','Transparent','Creme'],
    colorDots: ['#8a6040','#222','#e8e0d8','#f5f0e0'],
    rating: 4.7, reviews: 534, age: 'accessoires'
  },
  {
    id: 38, cat: 'accessoires', brand: 'NOVA STYLE',
    name: 'Halskette Goldkette Layered',
    emoji: '📿', bg: 'linear-gradient(145deg,#fef8e8,#f8eed0)',
    price: 19.95, badge: 'new',
    desc: 'Schimmernde 3-lagige Goldkette im Layered-Look. Hochwertig vergoldet, allergikerfreundlich, nickelfrei. Für Alltag und besondere Abende.',
    sizes: ['One Size'], colors: ['Gold','Silber','Roségold'],
    colorDots: ['#d4a030','#c8c8c8','#d4887a'],
    rating: 4.8, reviews: 789, age: 'accessoires'
  },
  {
    id: 39, cat: 'accessoires', brand: 'URBAN BASICS',
    name: 'Seidenschal quadratisch',
    emoji: '🎀', bg: 'linear-gradient(145deg,#f8e8f8,#f0d4f0)',
    price: 34.95, oldPrice: 54.95, badge: 'sale',
    desc: 'Hochwertiger 90x90cm Seidenschal mit gedrucktem Muster. In Haaren tragen, als Halstuch oder Taschendekoration. 100% Maulbeerseide.',
    sizes: ['90x90cm'], colors: ['Fuchsia/Bunt','Navy/Gold','Kamel/Creme'],
    colorDots: ['#e030a0','#1a3a6a','#c4904a'],
    rating: 4.9, reviews: 234, age: 'accessoires'
  },
  {
    id: 40, cat: 'accessoires', brand: 'THE DAILY EDIT',
    name: 'Armband Stack Set 7-teilig',
    emoji: '💎', bg: 'linear-gradient(145deg,#e8f0f8,#d8e8f0)',
    price: 16.95, badge: 'hot',
    desc: '7 verschiedene Armbänder zum Stapeln: Goldkette, Perlenkette, Leder, Perlen, Anhänger und mehr. Perfekt kombinierbar, verstellbar.',
    sizes: ['One Size'], colors: ['Gold-Mix','Silber-Mix','Roségold-Mix'],
    colorDots: ['#c8a030','#b0b0b0','#c48070'],
    rating: 4.8, reviews: 1023, age: 'accessoires'
  },
  {
    id: 41, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Lederarmbanduhr Classic',
    emoji: '⌚', bg: 'linear-gradient(145deg,#e8e0d8,#d8d0c8)',
    price: 89.95, oldPrice: 149.95, badge: 'sale',
    desc: 'Klassische Quarzuhr mit Mineralglasfenster und echtem Kalbslederarmband. Datumsfunktion, wasserdicht bis 30m. Zeitloses Design für jeden Anlass.',
    sizes: ['One Size'], colors: ['Schwarz/Silber','Braun/Gold','Schwarz/Gold'],
    colorDots: ['#222','#8a6030','#c8a030'],
    rating: 4.7, reviews: 312, age: 'accessoires'
  },
  {
    id: 42, cat: 'accessoires', brand: 'PURE & CO',
    name: 'Perlenohrringe Tropfen',
    emoji: '💍', bg: 'linear-gradient(145deg,#f8f4f0,#f0eae4)',
    price: 22.95, badge: 'new',
    desc: 'Elegante Tropfen-Ohrringe mit Süßwasserperlen in verschiedenen Größen. 925er Sterling-Silber-Stecker, hypoallergen. Für Alltag und besondere Momente.',
    sizes: ['One Size'], colors: ['Weiß/Silber','Creme/Gold','Roséblush/Gold'],
    colorDots: ['#f8f8f8','#f8f0e0','#f4c0b0'],
    rating: 4.8, reviews: 423, age: 'accessoires'
  },
  {
    id: 43, cat: 'accessoires', brand: 'NOVA STYLE',
    name: 'Ledergürtel Reversible',
    emoji: '🩺', bg: 'linear-gradient(145deg,#e8e0d4,#d8d0c4)',
    price: 39.95, oldPrice: 64.95, badge: 'sale',
    desc: 'Wendegürtel aus echtem Rindsleder: eine Seite Schwarz, eine Seite Braun. Einzelne Metallschnalle, 3,5cm breit. Passt zu Anzügen, Jeans und mehr.',
    sizes: ['85cm','90cm','95cm','100cm','105cm'], colors: ['Schwarz/Braun','Dunkelbraun/Cognac'],
    colorDots: ['#333','#8a5030'],
    rating: 4.6, reviews: 267, age: 'accessoires'
  },
  {
    id: 44, cat: 'accessoires', brand: 'THE DAILY EDIT',
    name: 'Mütze Cashmere-Mix',
    emoji: '🧢', bg: 'linear-gradient(145deg,#e8f0e8,#d4e4d4)',
    price: 29.95, badge: 'new',
    desc: 'Weiche Beanie-Mütze aus Cashmere-Woll-Mix. Umschlagbündchen, angenehm warm ohne zu kratzen. Für Winter, Herbst und kühle Abende.',
    sizes: ['One Size'], colors: ['Camel','Dunkelgrün','Grau Melange','Schwarz'],
    colorDots: ['#c8a070','#3a6030','#a8a8a0','#222'],
    rating: 4.7, reviews: 389, age: 'accessoires'
  },
  {
    id: 45, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Geldbörse Leder RFID',
    emoji: '💳', bg: 'linear-gradient(145deg,#e8e8d8,#d8d8c8)',
    price: 44.95, oldPrice: 69.95, badge: 'sale',
    desc: 'Flache Damen-Geldbörse aus echtem Glattleder mit RFID-Schutz. 12 Kartenfächer, Münzfach mit Reißverschluss, Geldscheinfach.',
    sizes: ['One Size'], colors: ['Schwarz','Cognac','Dunkelblau','Koralle'],
    colorDots: ['#222','#c07840','#1a3a6a','#d06040'],
    rating: 4.8, reviews: 534, age: 'accessoires'
  },

  /* ============================================================
     SALE (Sonderangebote extra günstig)
  ============================================================ */
  {
    id: 46, cat: 'sale', brand: 'URBAN BASICS',
    name: 'Puffer Jacke Ultralight',
    emoji: '🧥', bg: 'linear-gradient(145deg,#e8f4e8,#d0e8d0)',
    price: 49.95, oldPrice: 129.95, badge: 'sale',
    desc: 'Ultra-leichte Daunen-Jacke, packbar auf Faustgröße. Wasserdichte Außenschicht, hochwertiger Daunenersatz. Für Reisen und Outdoor.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Schwarz','Khaki','Marinblau','Koralle'],
    colorDots: ['#222','#8a7840','#1a3a6a','#e06050'],
    rating: 4.7, reviews: 623, age: 'sale'
  },
  {
    id: 47, cat: 'sale', brand: 'THE DAILY EDIT',
    name: 'Jogger Set 2-teilig',
    emoji: '🩳', bg: 'linear-gradient(145deg,#f0e8f8,#e4d4f0)',
    price: 29.95, oldPrice: 79.95, badge: 'sale',
    desc: 'Matching Jogger-Set aus softem French-Terry. Hoodie mit Kapuze und Jogginghose mit Gummizug. Ideal für Zuhause, Gym und entspannte Tage.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Lila/Lila','Grau/Grau','Schwarz/Schwarz'],
    colorDots: ['#a070c8','#888','#222'],
    rating: 4.8, reviews: 891, age: 'sale'
  },
  {
    id: 48, cat: 'sale', brand: 'MIA LABEL',
    name: 'Schmuck-Set Hochwertig 5-tlg',
    emoji: '💎', bg: 'linear-gradient(145deg,#fef8e0,#feecc8)',
    price: 24.95, oldPrice: 89.95, badge: 'sale',
    desc: 'Premium Schmuck-Geschenkset: Kette, Armband, 2 Ohrringe und Ring. Vergoldet, in luxuriöser Geschenkschachtel. Perfektes Geschenk oder für sich selbst.',
    sizes: ['One Size'], colors: ['Gold-Set','Silber-Set','Roségold-Set'],
    colorDots: ['#d4a030','#b0b0b0','#c48070'],
    rating: 4.9, reviews: 1234, age: 'sale'
  },
  {
    id: 49, cat: 'sale', brand: 'PURE & CO',
    name: 'Sneaker Damen Slip-On',
    emoji: '👟', bg: 'linear-gradient(145deg,#f4f0ec,#ece4dc)',
    price: 34.95, oldPrice: 74.95, badge: 'sale',
    desc: 'Bequeme Slip-On-Sneaker ohne Schnürung. Gestricktes Mesh-Obermaterial, Memory-Foam-Einlegesohle. Ultraleicht für den ganzen Tag.',
    sizes: ['36','37','38','39','40','41'], colors: ['Weiß','Schwarz','Rose'],
    colorDots: ['#f5f5f5','#222','#f0b0c0'],
    rating: 4.6, reviews: 445, age: 'sale'
  },
  {
    id: 50, cat: 'sale', brand: 'NOVA STYLE',
    name: 'Maxi-Sommertasche Stroh',
    emoji: '🧺', bg: 'linear-gradient(145deg,#fdf5e0,#f8ead0)',
    price: 19.95, oldPrice: 54.95, badge: 'sale',
    desc: 'XL-Strandtasche aus handgeflochtenem Seegras. Baumwoll-Innenfutter, magnetischer Druckknopf. Für Strand, Park und Shopping im Sommer.',
    sizes: ['One Size'], colors: ['Natural/Weiß','Natural/Schwarz'],
    colorDots: ['#d8c088','#d8c088'],
    rating: 4.5, reviews: 289, age: 'sale'
  },
  {
    id: 51, cat: 'sale', brand: 'URBAN BASICS',
    name: 'Winterstiefel warm gefüttert',
    emoji: '🥾', bg: 'linear-gradient(145deg,#e0e0e8,#d0d0e0)',
    price: 54.95, oldPrice: 129.95, badge: 'sale',
    desc: 'Kniehoher Winterstiefel mit Warmfutter bis -20°C. Wasserdichtes Obermaterial, griffige Profilsohle, Reißverschluss innen. Für Schnee und Kälte.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Schwarz','Dunkelbraun','Grau'],
    colorDots: ['#222','#5a3a20','#888'],
    rating: 4.8, reviews: 534, age: 'sale'
  },
];
