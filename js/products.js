const products = [

  /* ================================================================
     BODYS (neu)
     ================================================================ */
  {
    id: 101, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Spaghetti-Träger Body Schwarz',
    svgType: 'bodysuit-tank', primaryColor: '#1a1a1a', svgBg: ['#ebe8e4','#ddd9d4'],
    price: 12.99, oldPrice: 24.99, badge: 'hot',
    desc: 'Klassischer Spaghetti-Träger-Body aus weichem Viskose-Mix. Formschön, körpernah, mit Druckknöpfen am Schritt. Perfekt unter Blazer, Jeans oder solo.',
    sizes: ['XS','S','M','L','XL'], colors: ['Schwarz','Anthrazit'],
    colorDots: ['#1a1a1a','#444'], rating: 4.8, reviews: 1203
  },
  {
    id: 102, cat: 'bodys', brand: 'NOVA STYLE',
    name: 'Ripp-Body Weiß Klassisch',
    svgType: 'bodysuit-ribbed', primaryColor: '#f0ede8', svgBg: ['#faf8f5','#f0ece5'],
    price: 10.99, oldPrice: 19.99, badge: 'new',
    desc: 'Zeitloser Ripp-Body in Weiß aus elastischem Baumwoll-Ripp. Angenehm dehnbar, atmungsaktiv. Das must-have Basics für jeden Kleiderschrank.',
    sizes: ['XS','S','M','L','XL'], colors: ['Weiß','Creme','Hellgrau'],
    colorDots: ['#f5f5f0','#f0e8d8','#d8d8d8'], rating: 4.9, reviews: 2145
  },
  {
    id: 103, cat: 'bodys', brand: 'THE DAILY EDIT',
    name: 'V-Neck Body Cappuccino',
    svgType: 'bodysuit-vneck', primaryColor: '#c8a882', svgBg: ['#faf5ee','#f2ebe0'],
    price: 13.99, badge: 'new',
    desc: 'Eleganter V-Ausschnitt-Body in warmem Cappuccino-Ton. Weiches Interlock-Jersey, formt die Figur. Von Business bis Date-Night vielseitig kombinierbar.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Cappuccino','Mocha','Caramel'],
    colorDots: ['#c8a882','#8a6042','#d4b87a'], rating: 4.7, reviews: 876
  },
  {
    id: 104, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Langarm Body Turtleneck Camel',
    svgType: 'bodysuit-long', primaryColor: '#c4924a', svgBg: ['#faf3e8','#f2e8d4'],
    price: 17.99, oldPrice: 34.99, badge: 'sale',
    desc: 'Schicker Langarm-Body mit hohem Turtleneck-Kragen. Weicher Viskose-Stoff für den Herbst. Trägt sich wie ein zweites Hautbild und schafft elegante Silhouetten.',
    sizes: ['XS','S','M','L','XL'], colors: ['Camel','Ecru','Dunkelbraun','Cognac'],
    colorDots: ['#c4924a','#f0e0c0','#5a3820','#b87030'], rating: 4.8, reviews: 654
  },
  {
    id: 105, cat: 'bodys', brand: 'URBAN BASICS',
    name: 'Cut-Out Bodysuit Terracotta',
    svgType: 'bodysuit-cutout', primaryColor: '#c25830', svgBg: ['#faf0ea','#f0e4d8'],
    price: 15.99, badge: 'hot',
    desc: 'Trendy Cut-Out-Body mit offenem Midriff-Detail. Spaghetti-Träger, Snap-Verschluss. Der Hingucker auf jeder Party – kombiniert mit High-Waist-Jeans.',
    sizes: ['XS','S','M','L'], colors: ['Terracotta','Rostrot','Koralle'],
    colorDots: ['#c25830','#a84020','#e07050'], rating: 4.6, reviews: 432
  },
  {
    id: 106, cat: 'bodys', brand: 'PURE & CO',
    name: 'Spitzen-Body Altrosa',
    svgType: 'bodysuit-lace', primaryColor: '#d4788a', svgBg: ['#fdf0f2','#f8e4e8'],
    price: 18.99, oldPrice: 34.99, badge: 'sale',
    desc: 'Romantischer Spitzen-Body mit feinem All-over-Spitzenmuster. Gefüttertes Brustteil, Spaghetti-Träger. Zarter Look für besondere Anlässe.',
    sizes: ['XS','S','M','L','XL'], colors: ['Altrosa','Weiß','Schwarz','Nude'],
    colorDots: ['#d4788a','#f8f8f8','#1a1a1a','#d4a882'], rating: 4.9, reviews: 789
  },
  {
    id: 107, cat: 'bodys', brand: 'NOVA STYLE',
    name: 'Quadrat-Ausschnitt Body Navy',
    svgType: 'bodysuit-square', primaryColor: '#1e3a6e', svgBg: ['#e8eef8','#d8e4f2'],
    price: 11.99, badge: 'new',
    desc: 'Trendiger Body mit breitem quadratischen Ausschnitt und Schulterträgern. Aus straffem Jersey, formend. Super mit Culotte oder High-Waist-Rock.',
    sizes: ['XS','S','M','L','XL'], colors: ['Navy','Dunkelblau','Marineblau'],
    colorDots: ['#1e3a6e','#0a2458','#2a5090'], rating: 4.7, reviews: 534
  },
  {
    id: 108, cat: 'bodys', brand: 'THE DAILY EDIT',
    name: 'Off-Shoulder Body Mint',
    svgType: 'bodysuit-offshoulder', primaryColor: '#5ab8a0', svgBg: ['#e8f8f4','#d4f0e8'],
    price: 16.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Verführerischer Off-Shoulder-Body mit elastischem Schulterband. Smaragd-Mint-Ton setzt Akzente. Mit Jeans oder Shorts für den perfekten Sommeroutfit.',
    sizes: ['XS','S','M','L','XL'], colors: ['Mint','Sage','Türkis','Smaragd'],
    colorDots: ['#5ab8a0','#6a9870','#30a8b8','#1a7858'], rating: 4.8, reviews: 347
  },
  {
    id: 109, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Wrap-Body Flieder Gerafft',
    svgType: 'bodysuit-wrap', primaryColor: '#8868b4', svgBg: ['#f0eaf8','#e4d8f2'],
    price: 19.99, badge: 'hot',
    desc: 'Schöner Wrap-Body mit Raffung vorne für einen figurbetonenden V-Effekt. Spaghetti-Träger, angenehm weich. Kombiniert mit Jeans der perfekte Casual-Look.',
    sizes: ['XS','S','M','L','XL'], colors: ['Flieder','Lavendel','Lila','Pflaume'],
    colorDots: ['#8868b4','#b8a0d0','#6840a0','#4a2870'], rating: 4.7, reviews: 489
  },
  {
    id: 110, cat: 'bodys', brand: 'PURE & CO',
    name: 'Langarm Ripp Body Schokobraun',
    svgType: 'bodysuit-long', primaryColor: '#3d2010', svgBg: ['#ece8e4','#e0d8d0'],
    price: 14.99, badge: 'new',
    desc: 'Gemütlicher Langarm-Ripp-Body aus elastischem Baumwoll-Ripp. Wärmend und formend – ideal für kühle Jahreszeiten unter Blazern oder Mänteln.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Schokobraun','Dunkelgrün','Schwarz','Graumelange'],
    colorDots: ['#3d2010','#1a3820','#1a1a1a','#888'], rating: 4.8, reviews: 923
  },
  {
    id: 111, cat: 'bodys', brand: 'NOVA STYLE',
    name: 'Satin Body Champagne Elegant',
    svgType: 'bodysuit-tank', primaryColor: '#d4b87a', svgBg: ['#fdf8ee','#f8f0e0'],
    price: 22.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Luxuriöser Satin-Body in zartem Champagne-Gold. Fließendes Material, einstellbare Träger, Spitzen-Einsätze. Für festliche Anlässe und elegante Abende.',
    sizes: ['XS','S','M','L','XL'], colors: ['Champagne','Ivory','Roségold'],
    colorDots: ['#d4b87a','#f0e8d0','#c89880'], rating: 4.9, reviews: 312
  },
  {
    id: 112, cat: 'bodys', brand: 'THE DAILY EDIT',
    name: 'Crop Body Set 3-teilig',
    svgType: 'bodysuit-ribbed', primaryColor: '#888888', svgBg: ['#f0f0f0','#e8e8e8'],
    price: 24.99, oldPrice: 44.99, badge: 'hot',
    desc: 'Vorteilspack: 3 Basic-Bodies aus Ripp-Jersey in Schwarz, Weiß und Grau. Perfekte Layering-Pieces für jeden Look. Zeitloser Style, alltagstauglich.',
    sizes: ['XS','S','M','L','XL'], colors: ['Schwarz+Weiß+Grau'],
    colorDots: ['#1a1a1a','#f5f5f5','#888'], rating: 4.9, reviews: 1876
  },
  {
    id: 113, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Deep-V Spaghettiträger Body Burgund',
    svgType: 'bodysuit-vneck', primaryColor: '#6a1030', svgBg: ['#f8eaee','#f0d8de'],
    price: 13.99, badge: 'new',
    desc: 'Figurbetonter Deep-V-Body in sattem Burgund. Weiches Interlock, Spaghetti-Träger, elastischer Bund. Der Eyecatcher unter Blazern oder als Solo-Statement.',
    sizes: ['XS','S','M','L','XL'], colors: ['Burgund','Dunkelrot','Weinrot'],
    colorDots: ['#6a1030','#a01828','#8a1820'], rating: 4.7, reviews: 645
  },
  {
    id: 114, cat: 'bodys', brand: 'URBAN BASICS',
    name: 'Mesh Cut-Out Body Schwarz',
    svgType: 'bodysuit-cutout', primaryColor: '#222222', svgBg: ['#e8e8e8','#dcdcdc'],
    price: 17.99, oldPrice: 32.99, badge: 'sale',
    desc: 'Edgy Mesh-Body mit auffälligen Cut-Out-Details an Taille und Schultern. Semi-transparentes Obermaterial mit Futter am Brustteil. Party-Look par excellence.',
    sizes: ['XS','S','M','L'], colors: ['Schwarz'],
    colorDots: ['#1a1a1a'], rating: 4.6, reviews: 298
  },
  {
    id: 115, cat: 'bodys', brand: 'PURE & CO',
    name: 'Schulterfreier Body Dusty Rose',
    svgType: 'bodysuit-offshoulder', primaryColor: '#d4a0a8', svgBg: ['#fdf0f4','#f8e4e8'],
    price: 15.99, badge: 'new',
    desc: 'Romantischer schulterfreier Body in zartem Dusty-Rose. Breites elastisches Band, körpernah. Kombiniert mit Mom-Jeans für lässige Summer-Vibes.',
    sizes: ['XS','S','M','L','XL'], colors: ['Dusty Rose','Mauve','Blush'],
    colorDots: ['#d4a0a8','#b88090','#f0c0c0'], rating: 4.8, reviews: 567
  },
  {
    id: 116, cat: 'bodys', brand: 'THE DAILY EDIT',
    name: 'Quadrat Body Olivgrün Strick',
    svgType: 'bodysuit-square', primaryColor: '#4a6030', svgBg: ['#edf2e8','#e0ecd8'],
    price: 14.99, badge: 'hot',
    desc: 'Weicher Ripp-Strick-Body mit quadratischem Ausschnitt und breiten Trägern. Herbstlich, warm, fashionable. Dazu ein langer Rock oder weite Jeans.',
    sizes: ['XS','S','M','L','XL'], colors: ['Olivgrün','Dunkelgrün','Waldgrün'],
    colorDots: ['#4a6030','#1a4020','#2a5830'], rating: 4.7, reviews: 423
  },
  {
    id: 117, cat: 'bodys', brand: 'MIA LABEL',
    name: 'Gerafft-Body Himmelblau',
    svgType: 'bodysuit-wrap', primaryColor: '#4a90d4', svgBg: ['#e8f4fd','#d4e8f8'],
    price: 16.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Verspielter geraffter Body in leuchtendem Himmelblau. Spaghetti-Träger, angenehm weicher Stoff. Ideal für sommerliche Outfits – zu kurzen Shorts oder Röcken.',
    sizes: ['XS','S','M','L','XL'], colors: ['Himmelblau','Cornflower','Taubenblau'],
    colorDots: ['#4a90d4','#6878d0','#7098b8'], rating: 4.6, reviews: 378
  },
  {
    id: 118, cat: 'bodys', brand: 'NOVA STYLE',
    name: 'Spitzen-Langarm Body Weiß',
    svgType: 'bodysuit-lace', primaryColor: '#f0ece4', svgBg: ['#fefcf8','#f8f4ec'],
    price: 21.99, badge: 'new',
    desc: 'Traumhafter Langarm-Body aus feiner Chantilly-Spitze über Viskose-Futter. Elegant und romantic. Perfekt für besondere Anlässe oder festliche Looks.',
    sizes: ['XS','S','M','L'], colors: ['Ivory','Weiß','Creme'],
    colorDots: ['#f8f0e0','#f5f5f5','#f0e8d0'], rating: 4.9, reviews: 234
  },

  /* ================================================================
     DAMEN
     ================================================================ */
  {
    id: 1, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Sommer Wickelkleid Blumenprint',
    svgType: 'dress-midi', primaryColor: '#d4789a', svgBg: ['#fce8f0','#f8d8e8'],
    price: 22.99, oldPrice: 44.99, badge: 'sale',
    desc: 'Wunderschönes Midi-Kleid im Wickelstil mit romantischem Blumenprint. Fließender Chiffon für leichten Tragekomfort. Für Sommerfeste, Dates oder Spaziergänge.',
    sizes: ['XS','S','M','L','XL'], colors: ['Rosé/Floral','Blau/Floral','Weiß/Floral'],
    colorDots: ['#f8b4c8','#a8c8f0','#f5f5f5'], rating: 4.8, reviews: 634
  },
  {
    id: 2, cat: 'damen', brand: 'URBAN BASICS',
    name: 'Oversized Blazer Damen',
    svgType: 'blazer', primaryColor: '#c8a870', svgBg: ['#f8f0e8','#f0e4d0'],
    price: 34.99, oldPrice: 69.99, badge: 'hot',
    desc: 'Klassischer Oversized-Blazer in zeitlosem Design. Hochwertige Webqualität mit strukturierter Schulterpartie. Kombinierbar zu Jeans oder Hosen – vom Office bis Abendausgang.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Camel','Schwarz','Creme','Navy'],
    colorDots: ['#c8a87a','#222','#f5f0e8','#1a2e5e'], rating: 4.9, reviews: 421
  },
  {
    id: 3, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Ripp-Crop-Top 2er Set',
    svgType: 'top-crop', primaryColor: '#f5f2ec', svgBg: ['#fef5e8','#f8edd8'],
    price: 9.99, badge: 'new',
    desc: 'Zwei hochwertige Ripp-Crop-Tops im Set. Körpernahes Material mit angenehmer Stretchqualität. Ideal für layered Looks oder solo im Sommer.',
    sizes: ['XS','S','M','L','XL'], colors: ['Weiß+Schwarz','Beige+Braun','Rosa+Lila'],
    colorDots: ['#f5f5f5','#d4b896','#f0c0d8'], rating: 4.7, reviews: 892
  },
  {
    id: 4, cat: 'damen', brand: 'MIA LABEL',
    name: 'Elegant Maxi-Kleid Satin',
    svgType: 'dress-maxi', primaryColor: '#1a2a4a', svgBg: ['#e0e8f5','#c8d8f0'],
    price: 39.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Luxuriöses Maxi-Kleid aus satinartigem Viskose-Mix. Fließende Silhouette mit elegantem Ausschnitt. Für Hochzeiten, Galas oder besondere Abende.',
    sizes: ['XS','S','M','L','XL'], colors: ['Champagne','Mitternachtsblau','Bordeaux'],
    colorDots: ['#e8d5a0','#1a2a4a','#7a1a2a'], rating: 4.9, reviews: 287
  },
  {
    id: 5, cat: 'damen', brand: 'PURE & CO',
    name: 'Highwaist Jeans Wide Leg',
    svgType: 'pants', primaryColor: '#3a6098', svgBg: ['#e0e8f5','#c8d4e8'],
    price: 27.99, oldPrice: 54.99, badge: 'sale',
    desc: 'Trendige Wide-Leg-Jeans mit hohem Bund. Klassische Waschung in Blau. Der perfekte Denim für einen modernen, lässigen Look.',
    sizes: ['34','36','38','40','42','44'], colors: ['Hellblau','Dunkelblau','Black Wash'],
    colorDots: ['#a0c0e8','#2a4a7a','#1a1a1a'], rating: 4.6, reviews: 543
  },
  {
    id: 6, cat: 'damen', brand: 'NOVA STYLE',
    name: 'Kurzarm Sommerkleid',
    svgType: 'dress-short', primaryColor: '#e8b030', svgBg: ['#fef8e0','#fef0c0'],
    price: 14.99, badge: 'new',
    desc: 'Leichtes Sommerkleid mit kurzen Ärmeln für den entspannten Alltag. Weicher Jersey-Stoff, körperfreundliche Passform. Ideal für Ausflüge und Shopping.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Gelb','Hellblau','Mintgrün','Lachs'],
    colorDots: ['#f0d040','#80b8f0','#80d0b0','#f0906a'], rating: 4.7, reviews: 523
  },
  {
    id: 7, cat: 'damen', brand: 'THE DAILY EDIT',
    name: 'Bluse mit Rüschen Kragen',
    svgType: 'top-shirt', primaryColor: '#f0ede8', svgBg: ['#faf8f5','#f4f0ea'],
    price: 15.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Romantische Bluse mit Rüschenkragen aus leichtem Viskose-Crêpe. Passt zu Röcken, Hosen und Jeans. Für Büro und Freizeit gleichermaßen.',
    sizes: ['XS','S','M','L','XL'], colors: ['Weiß','Creme','Schwarz','Altrosa'],
    colorDots: ['#f5f5f5','#f0e8d0','#222','#c89898'], rating: 4.5, reviews: 267
  },
  {
    id: 8, cat: 'damen', brand: 'MIA LABEL',
    name: 'Trenchcoat Classic Damen',
    svgType: 'blazer', primaryColor: '#c4a06a', svgBg: ['#f5ece0','#ece0cc'],
    price: 49.99, oldPrice: 99.99, badge: 'sale',
    desc: 'Zeitloser Trenchcoat in Klassisch-Beige. Doppelreiher mit Gürtel und Schulterklappen. Das Must-Have für den Übergang und kühle Sommertage.',
    sizes: ['XS','S','M','L','XL'], colors: ['Classic Beige','Schwarz','Kamel'],
    colorDots: ['#c8a87a','#222','#d4944a'], rating: 4.8, reviews: 312
  },

  /* ================================================================
     HERREN
     ================================================================ */
  {
    id: 13, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Premium Hoodie Heavyweight',
    svgType: 'top-shirt', primaryColor: '#2a2a2a', svgBg: ['#e8e8ea','#dcdce0'],
    price: 24.99, oldPrice: 54.99, badge: 'hot',
    desc: 'Schwerer 400g-Baumwoll-Hoodie für maximalen Komfort. Eingenähtes Kragen-Tape, Känguru-Tasche, Metall-Ösen. Der Hoodie, der alles andere ersetzt.',
    sizes: ['S','M','L','XL','XXL','XXXL'], colors: ['Schwarz','Dunkelgrau','Navy','Ecru'],
    colorDots: ['#111','#555','#1a3a5a','#f0ecdc'], rating: 4.9, reviews: 1043
  },
  {
    id: 14, cat: 'herren', brand: 'MIA LABEL',
    name: 'Slim Fit Anzug 2-teilig',
    svgType: 'blazer', primaryColor: '#1a3a6a', svgBg: ['#dde8f5','#c8d8f0'],
    price: 69.99, oldPrice: 149.99, badge: 'sale',
    desc: 'Edler 2-Teiler-Anzug in schlanker Passform. Hochwertiger Woll-Mix mit leichtem Glanz. Für Business-Meetings, Hochzeiten und festliche Anlässe.',
    sizes: ['44','46','48','50','52','54','56'], colors: ['Navy','Anthrazit','Mittelgrau','Schwarz'],
    colorDots: ['#1a3a6a','#404050','#888','#111'], rating: 4.8, reviews: 287
  },
  {
    id: 15, cat: 'herren', brand: 'PURE & CO',
    name: 'Cargo Hose Relaxed Fit',
    svgType: 'pants', primaryColor: '#6a7a40', svgBg: ['#e8f0de','#d8e8c8'],
    price: 22.99, badge: 'new',
    desc: 'Bequeme Cargo-Hose im Relaxed-Fit mit 6 Taschen. Robuste Baumwoll-Twill-Qualität. Für Freizeit, Outdoor und lässige Streetwear-Looks.',
    sizes: ['S','M','L','XL','XXL'], colors: ['Khaki','Schwarz','Olivgrün','Beige'],
    colorDots: ['#a8986a','#222','#5a6a30','#d4c090'], rating: 4.7, reviews: 612
  },
  {
    id: 16, cat: 'herren', brand: 'URBAN BASICS',
    name: 'Oxford Hemd Classic',
    svgType: 'top-shirt', primaryColor: '#a8c8f0', svgBg: ['#e0eef8','#c8dff0'],
    price: 18.99, oldPrice: 39.99, badge: 'sale',
    desc: 'Zeitloses Oxford-Hemd aus 100% Baumwolle mit Button-Down-Kragen. Leicht strukturiertes Gewebe, knitterarm. Passt zu Jeans, Chinos oder unter dem Blazer.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Weiß','Hellblau','Streifenblau','Rosa'],
    colorDots: ['#f5f5f5','#a8c8f0','#4a7ab0','#f0b8c8'], rating: 4.6, reviews: 438
  },
  {
    id: 17, cat: 'herren', brand: 'THE DAILY EDIT',
    name: 'Slim Chino Herren',
    svgType: 'pants', primaryColor: '#c8a870', svgBg: ['#f5ede0','#ece0c8'],
    price: 19.99, oldPrice: 44.99, badge: 'sale',
    desc: 'Klassische Slim-Fit-Chino aus elastischem Baumwoll-Mix. Gepflegter Look mit Seitenfalte. Für Büro und Freizeit gleichermaßen geeignet.',
    sizes: ['30/30','30/32','32/30','32/32','34/32','34/34','36/32'], colors: ['Beige','Marineblau','Olivgrün','Schwarz'],
    colorDots: ['#d4bc90','#1a3a6a','#5a6a40','#111'], rating: 4.5, reviews: 365
  },
  {
    id: 18, cat: 'herren', brand: 'MIA LABEL',
    name: 'Leder-Bomberjacke',
    svgType: 'blazer', primaryColor: '#1a1a1a', svgBg: ['#dcdcdc','#d0d0d0'],
    price: 59.99, oldPrice: 129.99, badge: 'hot',
    desc: 'Echte Schafsleder-Bomberjacke in zeitlosem Design. Gestrickte Bündchen und Stehkragen, Reißverschlüsse in Kupfer. Ein Statement-Stück.',
    sizes: ['S','M','L','XL','XXL'], colors: ['Schwarz','Braun','Burgund'],
    colorDots: ['#222','#7a4a28','#7a1a2a'], rating: 4.9, reviews: 198
  },
  {
    id: 19, cat: 'herren', brand: 'PURE & CO',
    name: 'Basic T-Shirt 5er Pack',
    svgType: 'top-shirt', primaryColor: '#f0f0f0', svgBg: ['#f8f8fa','#f0f0f4'],
    price: 14.99, oldPrice: 29.99, badge: 'hot',
    desc: '5 hochwertige T-Shirts aus 100% Premium-Baumwolle im Vorteilspack. Klassische Passform, vorgewaschen für extra Weichheit.',
    sizes: ['S','M','L','XL','XXL','XXXL'], colors: ['Weiß/Grau/Schwarz/Navy'],
    colorDots: ['#f5f5f5','#888','#222','#2a4a6a'], rating: 4.8, reviews: 2341
  },

  /* ================================================================
     SCHUHE
     ================================================================ */
  {
    id: 21, cat: 'schuhe', brand: 'NOVA STYLE',
    name: 'Chunky Sneaker Platform',
    svgType: 'shoe-sneaker', primaryColor: '#f0ece4', svgBg: ['#f5f2ee','#ece8e0'],
    price: 39.99, oldPrice: 79.99, badge: 'hot',
    desc: 'Trendige Chunky-Sneaker mit 4cm Plateausohle. Hochwertiges Kunstleder-Obermaterial, gedämpfte Laufsohle. Das Streetwear Statement Piece der Saison.',
    sizes: ['36','37','38','39','40','41','42','43'], colors: ['Weiß/Silber','Schwarz/Schwarz','Beige/Braun'],
    colorDots: ['#f5f5f5','#222','#d4bc90'], rating: 4.8, reviews: 723
  },
  {
    id: 22, cat: 'schuhe', brand: 'URBAN BASICS',
    name: 'Klassischer Leder-Sneaker',
    svgType: 'shoe-sneaker', primaryColor: '#f8f6f0', svgBg: ['#faf8f4','#f2ede4'],
    price: 34.99, oldPrice: 69.99, badge: 'sale',
    desc: 'Zeitloser weißer Sneaker aus echtem Nappaleder. Klassischer Schnitt mit schmaler Ledersohle. Passt zu allem – von Jeans bis Kleid.',
    sizes: ['36','37','38','39','40','41','42','43','44','45'], colors: ['Reinweiß','Cremeweiss','Weiß/Schwarz'],
    colorDots: ['#f8f8f8','#f8f0e0','#e0e0e0'], rating: 4.9, reviews: 1089
  },
  {
    id: 23, cat: 'schuhe', brand: 'MIA LABEL',
    name: 'High Heel Pumps Classic',
    svgType: 'shoe-heel', primaryColor: '#1a1a1a', svgBg: ['#f0ece8','#e8e4de'],
    price: 34.99, oldPrice: 69.99, badge: 'sale',
    desc: 'Elegante Pumps mit 8cm Stiletto-Absatz aus feinstem Kunstleder. Verstärkte Zehenpartie, Leder-Innensohle für Komfort. Für Büro, Dinner und Galas.',
    sizes: ['35','36','37','38','39','40','41','42'], colors: ['Schwarz','Nude','Rot','Navy'],
    colorDots: ['#222','#d4a882','#c02020','#1a2a4a'], rating: 4.6, reviews: 345
  },
  {
    id: 24, cat: 'schuhe', brand: 'PURE & CO',
    name: 'Chelsea Boots Damen',
    svgType: 'shoe-boots', primaryColor: '#1a1a1a', svgBg: ['#e0dcd8','#d4d0cc'],
    price: 44.99, oldPrice: 89.99, badge: 'hot',
    desc: 'Klassische Chelsea Boots aus echtem Rindsleder mit Gummizug-Einsatz. Leichte Blockabsatz (3cm), herausnehmbare Innensohle. Stilvoll von Herbst bis Frühling.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Schwarz','Cognac','Dunkelbraun'],
    colorDots: ['#222','#c87840','#6a3a20'], rating: 4.8, reviews: 512
  },
  {
    id: 25, cat: 'schuhe', brand: 'THE DAILY EDIT',
    name: 'Sommer-Sandalen Leder',
    svgType: 'shoe-heel', primaryColor: '#c8a060', svgBg: ['#fdf0e0','#f8e0c0'],
    price: 22.99, badge: 'new',
    desc: 'Handgenähte Flachsandalen aus echtem Leder mit anatomischem Fußbett. Kork-Latex-Sohle, verstellbare Riemen. Tragbar den ganzen Tag.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Naturleder','Schwarz','Weiß','Bronzerot'],
    colorDots: ['#c8a060','#222','#f5f5f0','#b05030'], rating: 4.7, reviews: 389
  },
  {
    id: 27, cat: 'schuhe', brand: 'NOVA STYLE',
    name: 'Sneaker Herren Laufschuh',
    svgType: 'shoe-sneaker', primaryColor: '#1a3a6a', svgBg: ['#e0eaf8','#d0dff0'],
    price: 44.99, oldPrice: 89.99, badge: 'sale',
    desc: 'Sportlicher Laufschuh mit Air-Boost-Sohle und Mesh-Obermaterial. Leicht (280g), atmungsaktiv und energierückkehrend. Für Sport und Alltag.',
    sizes: ['40','41','42','43','44','45','46','47'], colors: ['Schwarz/Neon','Weiß/Grau','Navy/Weiß'],
    colorDots: ['#222','#888','#1a3a6a'], rating: 4.7, reviews: 678
  },
  {
    id: 29, cat: 'schuhe', brand: 'PURE & CO',
    name: 'Winter Boots gefüttert',
    svgType: 'shoe-boots', primaryColor: '#8a6040', svgBg: ['#f0e8d8','#e8dcc8'],
    price: 29.99, oldPrice: 64.99, badge: 'sale',
    desc: 'Warm und stylisch: Winterboots mit kuscheligem Innenflausch und wasserabweisender Außenwand. Griffige Profilsohle. Für kalte Tage und Schnee.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Sand','Kastanienbraun','Schwarz'],
    colorDots: ['#d4b888','#7a3a18','#222'], rating: 4.8, reviews: 534
  },

  /* ================================================================
     TASCHEN
     ================================================================ */
  {
    id: 30, cat: 'taschen', brand: 'MIA LABEL',
    name: 'Tote Bag Leder',
    svgType: 'bag-tote', primaryColor: '#c07840', svgBg: ['#f5ede0','#ece0cc'],
    price: 34.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Großzügige Ledertasche mit Reißverschluss-Hauptfach und Innentaschen. Schultergurt und kurzer Henkel. Rindsleder in handgenähter Qualität.',
    sizes: ['One Size'], colors: ['Cognac','Schwarz','Creme','Bordeaux'],
    colorDots: ['#c07840','#222','#f8f5e8','#7a1a2a'], rating: 4.9, reviews: 487
  },
  {
    id: 31, cat: 'taschen', brand: 'NOVA STYLE',
    name: 'Crossbody Mini Bag',
    svgType: 'bag-crossbody', primaryColor: '#222222', svgBg: ['#e8e8e8','#dcdcdc'],
    price: 14.99, badge: 'new',
    desc: 'Kompakte Mini-Umhängetasche mit Kette und Lederriemen. Magnetverschluss, Innenfach mit Spiegel. Passt Handy, Schlüssel und Portemonnaie.',
    sizes: ['One Size'], colors: ['Schwarz','Altrosa','Creme','Burgund'],
    colorDots: ['#222','#d4a0a8','#f5f0e8','#7a2030'], rating: 4.7, reviews: 623
  },
  {
    id: 33, cat: 'taschen', brand: 'MIA LABEL',
    name: 'Structured Satchel Business',
    svgType: 'bag-tote', primaryColor: '#1a1a1a', svgBg: ['#e0e0e4','#d4d4d8'],
    price: 44.99, oldPrice: 99.99, badge: 'hot',
    desc: 'Formschöne Arbeitstasche aus strukturiertem Kunstleder. Platz für 14" Laptop, Tablet und Dokumente. Metall-Beschläge, verstellbarer Schultergurt.',
    sizes: ['One Size'], colors: ['Schwarz','Navy','Dunkelgrau','Kamel'],
    colorDots: ['#222','#1a3a6a','#555','#c89850'], rating: 4.8, reviews: 234
  },
  {
    id: 34, cat: 'taschen', brand: 'THE DAILY EDIT',
    name: 'Quilted Umhängetasche',
    svgType: 'bag-crossbody', primaryColor: '#c07840', svgBg: ['#f5ece0','#ede0cc'],
    price: 19.99, badge: 'new',
    desc: 'Trendige gesteppte Umhängetasche mit Kettenhenkel. Classic-Quilting-Muster, Magnetverschluss. Elegant für Abende und Ausflüge.',
    sizes: ['One Size'], colors: ['Cognac','Schwarz','Nude','Burgund'],
    colorDots: ['#c07840','#222','#d4b090','#7a2030'], rating: 4.8, reviews: 356
  },
  {
    id: 35, cat: 'taschen', brand: 'NOVA STYLE',
    name: 'Canvas Shopper XL',
    svgType: 'bag-tote', primaryColor: '#4a6030', svgBg: ['#e8eee0','#dce8cc'],
    price: 12.99, oldPrice: 29.99, badge: 'sale',
    desc: 'Geräumiger Canvas-Shopper mit Lederhenkel und Innenreißverschluss. Verstärkter Boden, wasserabweisende Beschichtung. Für Shopping, Büro und Reisen.',
    sizes: ['One Size'], colors: ['Naturbeige/Tan','Schwarz/Schwarz','Olivgrün/Braun'],
    colorDots: ['#d8c498','#222','#6a7840'], rating: 4.6, reviews: 312
  },

  /* ================================================================
     ACCESSOIRES
     ================================================================ */
  {
    id: 37, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Cat-Eye Sonnenbrille',
    svgType: 'bag-crossbody', primaryColor: '#8a6040', svgBg: ['#f8f0e0','#f0e4c8'],
    price: 9.99, oldPrice: 24.99, badge: 'sale',
    desc: 'Retro Cat-Eye-Sonnenbrille mit polarisierten Gläsern (UV400). Acetat-Rahmen, federnde Bügel. Der Vintage-Sommer-Look.',
    sizes: ['One Size'], colors: ['Schildpatt','Schwarz','Transparent','Creme'],
    colorDots: ['#8a6040','#222','#e8e0d8','#f5f0e0'], rating: 4.7, reviews: 534
  },
  {
    id: 38, cat: 'accessoires', brand: 'NOVA STYLE',
    name: 'Goldkette Layered 3-fach',
    svgType: 'bag-crossbody', primaryColor: '#d4a030', svgBg: ['#fef8e8','#f8edd0'],
    price: 7.99, badge: 'new',
    desc: 'Schimmernde 3-lagige Goldkette im Layered-Look. Hochwertig vergoldet, allergikerfreundlich, nickelfrei. Für Alltag und besondere Abende.',
    sizes: ['One Size'], colors: ['Gold','Silber','Roségold'],
    colorDots: ['#d4a030','#c8c8c8','#d4887a'], rating: 4.8, reviews: 789
  },
  {
    id: 40, cat: 'accessoires', brand: 'THE DAILY EDIT',
    name: 'Armband Stack Set 7-teilig',
    svgType: 'bag-crossbody', primaryColor: '#c8a030', svgBg: ['#f8f4e8','#f0ecd0'],
    price: 6.99, badge: 'hot',
    desc: '7 verschiedene Armbänder zum Stapeln: Goldkette, Perlenkette, Leder, Perlen, Anhänger und mehr. Perfekt kombinierbar, verstellbar.',
    sizes: ['One Size'], colors: ['Gold-Mix','Silber-Mix','Roségold-Mix'],
    colorDots: ['#c8a030','#b0b0b0','#c48070'], rating: 4.8, reviews: 1023
  },
  {
    id: 41, cat: 'accessoires', brand: 'MIA LABEL',
    name: 'Leder Armbanduhr Classic',
    svgType: 'bag-crossbody', primaryColor: '#2a2a2a', svgBg: ['#e8e0d8','#dcd8cc'],
    price: 29.99, oldPrice: 69.99, badge: 'sale',
    desc: 'Klassische Quarzuhr mit Mineralglasfenster und echtem Kalbslederarmband. Datumsfunktion, wasserdicht bis 30m.',
    sizes: ['One Size'], colors: ['Schwarz/Silber','Braun/Gold','Schwarz/Gold'],
    colorDots: ['#222','#8a6030','#c8a030'], rating: 4.7, reviews: 312
  },
  {
    id: 44, cat: 'accessoires', brand: 'THE DAILY EDIT',
    name: 'Cashmere-Mix Mütze',
    svgType: 'bag-crossbody', primaryColor: '#c8a070', svgBg: ['#f5f0e8','#ede8d8'],
    price: 9.99, badge: 'new',
    desc: 'Weiche Beanie-Mütze aus Cashmere-Woll-Mix. Umschlagbündchen, angenehm warm ohne zu kratzen. Für Winter, Herbst und kühle Abende.',
    sizes: ['One Size'], colors: ['Camel','Dunkelgrün','Grau Melange','Schwarz'],
    colorDots: ['#c8a070','#3a6030','#a8a8a0','#222'], rating: 4.7, reviews: 389
  },

  /* ================================================================
     SALE
     ================================================================ */
  {
    id: 46, cat: 'sale', brand: 'URBAN BASICS',
    name: 'Puffer Jacke Ultralight',
    svgType: 'blazer', primaryColor: '#1a3a6a', svgBg: ['#e0eaf8','#d0dff0'],
    price: 19.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Ultra-leichte Daunen-Jacke, packbar auf Faustgröße. Wasserdichte Außenschicht, hochwertiger Daunenersatz. Für Reisen und Outdoor.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Schwarz','Khaki','Marinblau','Koralle'],
    colorDots: ['#222','#8a7840','#1a3a6a','#e06050'], rating: 4.7, reviews: 623
  },
  {
    id: 47, cat: 'sale', brand: 'THE DAILY EDIT',
    name: 'Jogger Set 2-teilig',
    svgType: 'top-shirt', primaryColor: '#7858b0', svgBg: ['#f0e8f8','#e4d4f0'],
    price: 12.99, oldPrice: 49.99, badge: 'sale',
    desc: 'Matching Jogger-Set aus softem French-Terry. Hoodie mit Kapuze und Jogginghose mit Gummizug. Ideal für Zuhause, Gym und entspannte Tage.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: ['Lila/Lila','Grau/Grau','Schwarz/Schwarz'],
    colorDots: ['#a070c8','#888','#222'], rating: 4.8, reviews: 891
  },
  {
    id: 48, cat: 'sale', brand: 'MIA LABEL',
    name: 'Schmuck-Set Premium 5-tlg',
    svgType: 'bag-crossbody', primaryColor: '#d4a030', svgBg: ['#fef8e0','#feecc8'],
    price: 9.99, oldPrice: 59.99, badge: 'sale',
    desc: 'Premium Schmuck-Geschenkset: Kette, Armband, 2 Ohrringe und Ring. Vergoldet, in luxuriöser Geschenkschachtel.',
    sizes: ['One Size'], colors: ['Gold-Set','Silber-Set','Roségold-Set'],
    colorDots: ['#d4a030','#b0b0b0','#c48070'], rating: 4.9, reviews: 1234
  },
  {
    id: 49, cat: 'sale', brand: 'PURE & CO',
    name: 'Slip-On Sneaker Damen',
    svgType: 'shoe-sneaker', primaryColor: '#f0f0f0', svgBg: ['#f5f5f5','#ebebeb'],
    price: 14.99, oldPrice: 44.99, badge: 'sale',
    desc: 'Bequeme Slip-On-Sneaker ohne Schnürung. Gestricktes Mesh-Obermaterial, Memory-Foam-Einlegesohle. Ultraleicht für den ganzen Tag.',
    sizes: ['36','37','38','39','40','41'], colors: ['Weiß','Schwarz','Rose'],
    colorDots: ['#f5f5f5','#222','#f0b0c0'], rating: 4.6, reviews: 445
  },
  {
    id: 51, cat: 'sale', brand: 'URBAN BASICS',
    name: 'Winterstiefel warm gefüttert',
    svgType: 'shoe-boots', primaryColor: '#2a2a2a', svgBg: ['#e0e0e4','#d4d4d8'],
    price: 24.99, oldPrice: 79.99, badge: 'sale',
    desc: 'Kniehoher Winterstiefel mit Warmfutter bis -20°C. Wasserdichtes Obermaterial, griffige Profilsohle, Reißverschluss innen. Für Schnee und Kälte.',
    sizes: ['36','37','38','39','40','41','42'], colors: ['Schwarz','Dunkelbraun','Grau'],
    colorDots: ['#222','#5a3a20','#888'], rating: 4.8, reviews: 534
  },
];
