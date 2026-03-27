// ===================================
// DATOS COMPLETOS DEL CATÁLOGO
// Momentos Felices - Medellín
// Orden estratégico: Consultar Precio y colecciones primero,
// luego precios distribuidos (bajo-medio-alto intercalados)
// ===================================

const products = [
    // === PRIMERA FILA: CONSULTAR PRECIO Y COLECCIONES "DESDE" ===

    // Ramos Fúnebres (Consultar Precio - carrusel)
    { id: 41, code: "MF41", category: "Ramos Fúnebres", name: "Ramos Fúnebres", description: "Arreglos fúnebres elaborados con respeto y dedicación para rendir homenaje a quienes partieron. Composiciones solemnes que expresan condolencias y acompañamiento.", price: 0, priceText: "Consultar Precio", images: ["assets/catalog/foto41.webp", "assets/catalog/foto42.webp", "assets/catalog/foto43.webp", "assets/catalog/foto44.webp", "assets/catalog/foto45.webp", "assets/catalog/foto46.webp"] },

    // Arreglos Variados (Consultar Precio - carrusel)
    { id: 60, code: "MF60", category: "Arreglos Variados", name: "Arreglos Variados", description: "Diversa colección de arreglos florales en múltiples estilos y presentaciones. Cada creación es personalizada para adaptarse a la ocasión y los gustos del destinatario.", price: 0, priceText: "Consultar Precio", images: ["assets/catalog/foto60.webp", "assets/catalog/foto61.webp", "assets/catalog/foto62.webp", "assets/catalog/foto63.webp", "assets/catalog/foto64.webp"] },

    // Flores Eternas (Consultar Precio - carrusel)
    { id: 65, code: "MF65", category: "Rosas Eternas", name: "Flores Eternas", description: "Flores preservadas mediante técnicas especiales que mantienen su belleza natural por años. Una inversión en recuerdos que perduran sin marchitarse jamás.", price: 0, priceText: "Consultar Precio", images: ["assets/catalog/foto65.webp", "assets/catalog/foto66.webp", "assets/catalog/foto67.webp"] },

    // Desayuno Sorpresa (Consultar Precio - carrusel)
    { id: 68, code: "MF68", category: "Desayuno Sorpresa", name: "Desayuno Sorpresa", description: "Completo desayuno sorpresa con selección gourmet acompañado de flores frescas. La manera más especial de comenzar el día con amor, sabor y alegría.", price: 0, priceText: "Consultar Precio", images: ["assets/catalog/foto68.webp", "assets/catalog/foto69.webp", "assets/catalog/foto70.webp", "assets/catalog/foto71.webp", "assets/catalog/foto72.webp", "assets/catalog/foto73.webp", "assets/catalog/foto74.webp", "assets/catalog/foto75.webp"] },

    // Peluches Personalizados (Consultar Precio)
    { id: 30, code: "MF30", category: "Peluches", name: "Peluches Personalizados", description: "Servicio de personalización con tus peluches favoritos. Los precios varían según el modelo, tamaño y temporada. Contáctanos para cotizar tu combinación ideal.", price: 0, priceText: "Consultar Precio", image: "assets/catalog/foto30.webp" },

    // Flores Importadas (Desde $137.500 - carrusel)
    { id: 51, code: "MF51", category: "Flores Importadas", name: "Flores Importadas", description: "Selección exclusiva de flores importadas de la más alta calidad. Variedades exóticas y premium traídas especialmente para crear arreglos únicos y distinguidos.", price: 137500, priceText: "Desde $137.500", images: ["assets/catalog/foto51.webp", "assets/catalog/foto52.webp", "assets/catalog/foto53.webp", "assets/catalog/foto54.webp", "assets/catalog/foto55.webp", "assets/catalog/foto56.webp", "assets/catalog/foto57.webp", "assets/catalog/foto58.webp", "assets/catalog/foto59.webp"] },

    // === COLECCIONES "DESDE" ===

    // Ramilletes Coreanos (Desde $150.000 - carrusel)
    { id: 31, code: "MF31", category: "Coreanos", name: "Ramilletes Grandes de Flores en Coreanos", description: "Elegantes ramilletes de gran tamaño con el distintivo estilo de empaque coreano. Flores frescas envueltas en papel importado con acabados sofisticados y modernos.", price: 150000, priceText: "Desde $150.000", images: ["assets/catalog/foto31.webp", "assets/catalog/foto32.webp", "assets/catalog/foto33.webp", "assets/catalog/foto34.webp", "assets/catalog/foto35.webp", "assets/catalog/foto36.webp"] },

    // Ramos de Flores (Desde $150.000 - carrusel)
    { id: 37, code: "MF37", category: "Ramos de Flores", name: "Ramos de Flores", description: "Colección de ramos elaborados con flores frescas de temporada en variedad de estilos y presentaciones. Cada ramo es una obra única diseñada para emocionar.", price: 150000, priceText: "Desde $150.000", images: ["assets/catalog/foto37.webp", "assets/catalog/foto38.webp", "assets/catalog/foto39.webp", "assets/catalog/foto40.webp"] },

    // Cilindros (Desde $312.500 - carrusel)
    { id: 47, code: "MF47", category: "Cilindros", name: "Cilindros con Flores Variadas", description: "Modernos cilindros decorativos rellenos de flores variadas frescas. Presentación contemporánea que combina diseño actual con la belleza natural de las flores.", price: 312500, priceText: "Desde $312.500", images: ["assets/catalog/foto47.webp", "assets/catalog/foto48.webp", "assets/catalog/foto49.webp", "assets/catalog/foto50.webp"] },

    // === PRODUCTOS INDIVIDUALES - PRECIOS DISTRIBUIDOS (bajo-medio-alto) ===

    // $150.000 - Bajo
    { id: 4, code: "MF04", category: "Ramilletes", name: "Ramillete Clásico", description: "Ramillete con selección cuidadosa de flores frescas en presentación clásica y refinada. Ideal para expresar sentimientos con sencillez y buen gusto.", price: 150000, image: "assets/catalog/foto4.webp" },

    // $275.000 - Medio
    { id: 24, code: "MF24", category: "Ramilletes", name: "Ramillete Armonioso", description: "Ramillete con combinación armoniosa de flores en tonos complementarios. Transmite serenidad, afecto y buenos deseos con cada detalle floral.", price: 275000, image: "assets/catalog/foto24.webp" },

    // $437.500 - Alto
    { id: 1, code: "MF01", category: "Ramilletes", name: "Ramillete Grande con Tulipanes", description: "Espléndido ramillete de gran tamaño elaborado con tulipanes frescos seleccionados. Una composición vibrante que transmite elegancia y distinción en cada pétalo.", price: 437500, image: "assets/catalog/foto1.webp" },

    // $187.500 - Bajo
    { id: 6, code: "MF06", category: "Ramilletes", name: "Ramillete Delicado", description: "Ramillete delicado con flores escogidas a mano para crear una presentación suave y encantadora. Un detalle que habla desde el corazón.", price: 187500, image: "assets/catalog/foto6.webp" },

    // $312.500 - Medio
    { id: 18, code: "MF18", category: "Arreglos Especiales", name: "Arreglo en Baúl de Madera", description: "Original arreglo floral presentado en un baúl de madera artesanal. Combina la calidez rústica con la frescura de flores selectas en una pieza decorativa única.", price: 312500, image: "assets/catalog/foto18.webp" },

    // $750.000 - Alto
    { id: 22, code: "MF22", category: "Cajas y Corazones", name: "Corazón Grande de Rosas", description: "Magnífico corazón de gran tamaño elaborado enteramente con rosas frescas. Una declaración de amor visual que conquista desde el primer instante.", price: 750000, image: "assets/catalog/foto22.webp" },

    // $187.500 - Bajo
    { id: 9, code: "MF09", category: "Cajas y Corazones", name: "Cajita con Rosas", description: "Encantadora cajita decorativa repleta de rosas frescas y fragantes. Un regalo compacto que encierra toda la belleza y el romanticismo en su interior.", price: 187500, image: "assets/catalog/foto9.webp" },

    // $218.750 - Medio
    { id: 14, code: "MF14", category: "Grados", name: "Ramillete para Grados", description: "Ramillete diseñado especialmente para ceremonias de graduación. Celebra los logros académicos con flores que representan éxito y nuevos comienzos brillantes.", price: 218750, image: "assets/catalog/foto14.webp" },

    // $587.500 - Alto
    { id: 8, code: "MF08", category: "Ramos Fúnebres", name: "Ramo Grande Fúnebre", description: "Majestuoso ramo fúnebre de gran tamaño, elaborado con flores selectas que rinden un homenaje digno y respetuoso. Expresión solemne de condolencias sinceras.", price: 587500, image: "assets/catalog/foto8.webp" },

    // $193.750 - Bajo
    { id: 16, code: "MF16", category: "Ramilletes", name: "Ramillete Especial", description: "Ramillete especial con mezcla de flores frescas en presentación cuidada y atractiva. Un detalle significativo para quienes valoran la belleza natural.", price: 193750, image: "assets/catalog/foto16.webp" },

    // $275.000 - Medio
    { id: 28, code: "MF28", category: "Peluches", name: "Gorila Grande", description: "Imponente gorila de peluche de gran tamaño con acabados de alta calidad. Un obsequio único que destaca por su originalidad y presencia imponente.", price: 275000, image: "assets/catalog/foto28.webp" },

    // $937.500 - Alto
    { id: 21, code: "MF21", category: "Peluches", name: "Peluche Grande 1.50m con Ramillete", description: "Imponente peluche de 1.50 metros acompañado de un ramillete de flores frescas. La combinación perfecta de ternura y romanticismo para sorpresas inolvidables.", price: 937500, image: "assets/catalog/foto21.webp" },

    // $200.000 - Bajo
    { id: 5, code: "MF05", category: "Ramilletes", name: "Ramillete Elegante", description: "Composición floral elegante con flores de temporada en tonos armoniosos. Perfecta para sorprender con estilo y sofisticación natural.", price: 200000, image: "assets/catalog/foto5.webp" },

    // $350.000 - Medio
    { id: 23, code: "MF23", category: "Ramilletes", name: "Ramillete Distinguido", description: "Ramillete con flores selectas en presentación distinguida y moderna. Un regalo versátil que se adapta a cualquier ocasión con gracia y naturalidad.", price: 350000, image: "assets/catalog/foto23.webp" },

    // $937.500 - Alto
    { id: 20, code: "MF20", category: "Cajas y Corazones", name: "Corazón de Rosas con Corazón Importado", description: "Espectacular composición en forma de corazón hecha con rosas naturales, acompañada de un corazón decorativo importado. Doble símbolo de amor profundo y verdadero.", price: 937500, image: "assets/catalog/foto20.webp" },

    // $200.000 - Bajo
    { id: 13, code: "MF13", category: "Ramilletes", name: "Ramillete Encantador", description: "Ramillete con flores frescas en combinación armoniosa de colores y texturas. Un obsequio lleno de vida que ilumina cualquier ocasión especial.", price: 200000, image: "assets/catalog/foto13.webp" },

    // $400.000 - Medio
    { id: 10, code: "MF10", category: "Rosas Eternas", name: "Rosa Preservada en Cúpula de Vidrio", description: "Exclusiva rosa preservada presentada en elegante cúpula de cristal. Una joya floral que perdura en el tiempo, símbolo de amor eterno e inalterable.", price: 400000, image: "assets/catalog/foto10.webp" },

    // $1.375.000 - Alto
    { id: 26, code: "MF26", category: "Peluches", name: "Oso Gigante", description: "Espectacular oso de peluche de tamaño gigante, ideal para sorpresas grandiosas. Un compañero suave y adorable que transmite ternura y cariño sin medida.", price: 1375000, image: "assets/catalog/foto26.webp" },

    // $212.500 - Bajo
    { id: 3, code: "MF03", category: "Ramilletes", name: "Ramillete Grande con Orquídeas y Lirios", description: "Imponente ramillete grande con mezcla exquisita de flores variadas, orquídeas exóticas y lirios aromáticos. Una obra maestra floral que cautiva todos los sentidos.", price: 212500, image: "assets/catalog/foto3.webp" },

    // $437.500 - Medio
    { id: 27, code: "MF27", category: "Peluches", name: "James P. Sullivan", description: "Adorable peluche del querido personaje James P. Sullivan en tamaño especial. Un regalo original y divertido que saca sonrisas a grandes y pequeños.", price: 437500, image: "assets/catalog/foto27.webp" },

    // $937.500 - Alto
    { id: 25, code: "MF25", category: "Cajas y Corazones", name: "Corazón Gigante con Dulces y Rosas", description: "Impresionante corazón gigante decorado con rosas frescas y una selección de dulces gourmet. Fusión perfecta de romanticismo y dulzura para momentos extraordinarios.", price: 937500, image: "assets/catalog/foto25.webp" },

    // $212.500 - Bajo
    { id: 7, code: "MF07", category: "Ramilletes", name: "Ramillete Premium", description: "Ramillete premium con flores de primera calidad cuidadosamente dispuestas. Transmite amor y admiración con una presentación impecable.", price: 212500, image: "assets/catalog/foto7.webp" },

    // $312.500 - Medio
    { id: 2, code: "MF02", category: "Ramilletes", name: "Ramillete Variedad con Rosas de Exportación", description: "Ramillete compuesto por una hermosa variedad de flores acompañadas de rosas de exportación premium. Calidad internacional para momentos que merecen lo mejor.", price: 312500, image: "assets/catalog/foto2.webp" },

    // $1.500.000 - Alto
    { id: 19, code: "MF19", category: "Ramos Grandes", name: "Ramo Gigante de 700 Rosas", description: "Extraordinario ramo compuesto por 700 rosas frescas en una presentación monumental. La máxima expresión de amor y admiración sin límites ni comparación posible.", price: 1500000, image: "assets/catalog/foto19.webp" },

    // $231.250 - Bajo
    { id: 15, code: "MF15", category: "Ramilletes", name: "Ramillete Sofisticado", description: "Ramillete sofisticado con selección premium de flores en tonos cálidos y acogedores. Perfecto para momentos que requieren un toque de distinción floral.", price: 231250, image: "assets/catalog/foto15.webp" },

    // $462.500 - Medio
    { id: 17, code: "MF17", category: "Rosas Eternas", name: "Ramillete de Rosas Eternas Grande", description: "Impresionante ramillete de gran formato elaborado con rosas eternas preservadas. Belleza imperecedera que conserva su esplendor sin necesidad de agua ni cuidados.", price: 462500, image: "assets/catalog/foto17.webp" },

    // $687.500 - Alto
    { id: 12, code: "MF12", category: "Ramos Grandes", name: "Ramo Grande Dos Pisos en Variedad", description: "Espectacular ramo de dos pisos con amplia variedad de flores premium. Una creación monumental que deja sin palabras y marca un antes y un después.", price: 687500, image: "assets/catalog/foto12.webp" },

    // $437.500 - Medio
    { id: 11, code: "MF11", category: "Ramilletes", name: "Ramillete con Tulipanes", description: "Hermoso ramillete compuesto por tulipanes frescos de colores vibrantes. Transmite alegría, renovación y sentimientos puros con cada flor.", price: 437500, image: "assets/catalog/foto11.webp" },

    // $437.500 - Medio
    { id: 29, code: "MF29", category: "Peluches", name: "Variedades de Osos", description: "Colección de osos de peluche en diversas presentaciones y tamaños. Cada uno con su propio encanto, perfectos para acompañar cualquier arreglo floral.", price: 437500, image: "assets/catalog/foto29.webp" }
];
