// ===================================
// LANDING PAGE JS - Momentos Felices Medellín
// Catálogo con prioridad por categoría + Conversiones Google Ads
// Con soporte para carrusel infinito
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    // Ramilletes individuales
    { id: 1, code: "MF01", category: "Ramilletes", tags: ["ramilletes", "tulipanes", "flores", "arreglos-florales"], name: "Ramillete Grande con Tulipanes", description: "Espléndido ramillete de gran tamaño elaborado con tulipanes frescos seleccionados.", price: 437500, image: "assets/catalog/foto1.webp" },
    { id: 2, code: "MF02", category: "Ramilletes", tags: ["ramilletes", "rosas", "flores", "arreglos-florales"], name: "Ramillete Variedad con Rosas de Exportación", description: "Ramillete con hermosa variedad de flores y rosas de exportación premium.", price: 312500, image: "assets/catalog/foto2.webp" },
    { id: 3, code: "MF03", category: "Ramilletes", tags: ["ramilletes", "orquideas", "lirios", "flores", "arreglos-florales"], name: "Ramillete Grande con Orquídeas y Lirios", description: "Imponente ramillete grande con orquídeas exóticas y lirios aromáticos.", price: 212500, image: "assets/catalog/foto3.webp" },
    { id: 4, code: "MF04", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Clásico", description: "Ramillete con selección cuidadosa de flores frescas en presentación clásica.", price: 150000, image: "assets/catalog/foto4.webp" },
    { id: 5, code: "MF05", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Elegante", description: "Composición floral elegante con flores de temporada en tonos armoniosos.", price: 200000, image: "assets/catalog/foto5.webp" },
    { id: 6, code: "MF06", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Delicado", description: "Ramillete delicado con flores escogidas a mano para una presentación suave.", price: 187500, image: "assets/catalog/foto6.webp" },
    { id: 7, code: "MF07", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Premium", description: "Ramillete premium con flores de primera calidad cuidadosamente dispuestas.", price: 212500, image: "assets/catalog/foto7.webp" },

    // Fúnebres individual
    { id: 8, code: "MF08", category: "Ramos Fúnebres", tags: ["funebres", "flores"], name: "Ramo Grande Fúnebre", description: "Majestuoso ramo fúnebre de gran tamaño con flores selectas.", price: 587500, image: "assets/catalog/foto8.webp" },

    // Cajas y Corazones
    { id: 9, code: "MF09", category: "Cajas y Corazones", tags: ["cajas", "rosas", "flores", "arreglos-florales"], name: "Cajita con Rosas", description: "Encantadora cajita decorativa repleta de rosas frescas y fragantes.", price: 187500, image: "assets/catalog/foto9.webp" },
    { id: 20, code: "MF20", category: "Cajas y Corazones", tags: ["cajas", "rosas", "flores", "arreglos-florales"], name: "Corazón de Rosas con Corazón Importado", description: "Composición en forma de corazón con rosas naturales y corazón importado.", price: 937500, image: "assets/catalog/foto20.webp" },
    { id: 22, code: "MF22", category: "Cajas y Corazones", tags: ["cajas", "rosas", "flores", "arreglos-florales"], name: "Corazón Grande de Rosas", description: "Magnífico corazón de gran tamaño elaborado con rosas frescas.", price: 750000, image: "assets/catalog/foto22.webp" },
    { id: 25, code: "MF25", category: "Cajas y Corazones", tags: ["cajas", "rosas", "flores", "cumpleaños", "arreglos-florales"], name: "Corazón Gigante con Dulces y Rosas", description: "Corazón gigante con rosas frescas y selección de dulces gourmet.", price: 937500, image: "assets/catalog/foto25.webp" },

    // Rosas Eternas
    { id: 10, code: "MF10", category: "Rosas Eternas", tags: ["eternas", "rosas", "flores", "arreglos-florales"], name: "Rosa Preservada en Cúpula de Vidrio", description: "Rosa preservada en elegante cúpula de cristal. Belleza eterna.", price: 400000, image: "assets/catalog/foto10.webp" },
    { id: 17, code: "MF17", category: "Rosas Eternas", tags: ["eternas", "rosas", "flores", "arreglos-florales"], name: "Ramillete de Rosas Eternas Grande", description: "Impresionante ramillete con rosas eternas preservadas de gran formato.", price: 462500, image: "assets/catalog/foto17.webp" },

    // Más ramilletes
    { id: 11, code: "MF11", category: "Ramilletes", tags: ["ramilletes", "tulipanes", "flores", "arreglos-florales"], name: "Ramillete con Tulipanes", description: "Hermoso ramillete de tulipanes frescos de colores vibrantes.", price: 437500, image: "assets/catalog/foto11.webp" },
    { id: 13, code: "MF13", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Encantador", description: "Ramillete con flores frescas en combinación armoniosa de colores.", price: 200000, image: "assets/catalog/foto13.webp" },
    { id: 15, code: "MF15", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Sofisticado", description: "Ramillete sofisticado con selección premium de flores en tonos cálidos.", price: 231250, image: "assets/catalog/foto15.webp" },
    { id: 16, code: "MF16", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Especial", description: "Ramillete especial con mezcla de flores frescas en presentación cuidada.", price: 193750, image: "assets/catalog/foto16.webp" },
    { id: 23, code: "MF23", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Distinguido", description: "Ramillete con flores selectas en presentación distinguida y moderna.", price: 350000, image: "assets/catalog/foto23.webp" },
    { id: 24, code: "MF24", category: "Ramilletes", tags: ["ramilletes", "flores", "arreglos-florales"], name: "Ramillete Armonioso", description: "Ramillete con combinación armoniosa de flores en tonos complementarios.", price: 275000, image: "assets/catalog/foto24.webp" },

    // Grados
    { id: 14, code: "MF14", category: "Grados", tags: ["grados", "flores", "cumpleaños"], name: "Ramillete para Grados", description: "Ramillete diseñado para ceremonias de graduación.", price: 218750, image: "assets/catalog/foto14.webp" },

    // Arreglos Especiales
    { id: 18, code: "MF18", category: "Arreglos Especiales", tags: ["arreglos", "flores", "arreglos-florales"], name: "Arreglo en Baúl de Madera", description: "Original arreglo floral en baúl de madera artesanal.", price: 312500, image: "assets/catalog/foto18.webp" },

    // Ramos Grandes
    { id: 12, code: "MF12", category: "Ramos Grandes", tags: ["ramos", "flores", "arreglos-florales"], name: "Ramo Grande Dos Pisos en Variedad", description: "Espectacular ramo de dos pisos con variedad de flores premium.", price: 687500, image: "assets/catalog/foto12.webp" },
    { id: 19, code: "MF19", category: "Ramos Grandes", tags: ["ramos", "rosas", "flores", "arreglos-florales"], name: "Ramo Gigante de 700 Rosas", description: "Extraordinario ramo de 700 rosas frescas en presentación monumental.", price: 1500000, image: "assets/catalog/foto19.webp" },

    // Peluches
    { id: 21, code: "MF21", category: "Peluches", tags: ["peluches", "flores"], name: "Peluche Grande 1.50m con Ramillete", description: "Peluche de 1.50 metros con ramillete de flores frescas.", price: 937500, image: "assets/catalog/foto21.webp" },
    { id: 26, code: "MF26", category: "Peluches", tags: ["peluches"], name: "Oso Gigante", description: "Espectacular oso de peluche de tamaño gigante.", price: 1375000, image: "assets/catalog/foto26.webp" },
    { id: 27, code: "MF27", category: "Peluches", tags: ["peluches"], name: "James P. Sullivan", description: "Adorable peluche del personaje James P. Sullivan en tamaño especial.", price: 437500, image: "assets/catalog/foto27.webp" },
    { id: 28, code: "MF28", category: "Peluches", tags: ["peluches"], name: "Gorila Grande", description: "Imponente gorila de peluche de gran tamaño con acabados de calidad.", price: 275000, image: "assets/catalog/foto28.webp" },
    { id: 29, code: "MF29", category: "Peluches", tags: ["peluches"], name: "Variedades de Osos", description: "Colección de osos de peluche en diversas presentaciones y tamaños.", price: 437500, image: "assets/catalog/foto29.webp" },
    { id: 30, code: "MF30", category: "Peluches", tags: ["peluches"], name: "Peluches Personalizados", description: "Personalización con tus peluches favoritos. Precios según modelo y temporada.", price: 0, priceText: "Consultar Precio", image: "assets/catalog/foto30.webp" },

    // Colecciones con carrusel
    { id: 31, code: "MF31", category: "Coreanos", tags: ["coreanos", "ramilletes", "flores", "arreglos-florales"], name: "Ramilletes Grandes en Coreanos", description: "Elegantes ramilletes de gran tamaño con estilo de empaque coreano.", price: 150000, priceText: "Desde $150.000", images: ["assets/catalog/foto31.webp", "assets/catalog/foto32.webp", "assets/catalog/foto33.webp", "assets/catalog/foto34.webp", "assets/catalog/foto35.webp", "assets/catalog/foto36.webp"] },
    { id: 37, code: "MF37", category: "Ramos de Flores", tags: ["ramos", "flores", "arreglos-florales"], name: "Ramos de Flores", description: "Colección de ramos con flores frescas de temporada en variedad de estilos.", price: 150000, priceText: "Desde $150.000", images: ["assets/catalog/foto37.webp", "assets/catalog/foto38.webp", "assets/catalog/foto39.webp", "assets/catalog/foto40.webp"] },
    { id: 41, code: "MF41", category: "Ramos Fúnebres", tags: ["funebres", "flores"], name: "Ramos Fúnebres", description: "Arreglos fúnebres elaborados con respeto y dedicación.", price: 0, priceText: "Consultar Precio", images: ["assets/catalog/foto41.webp", "assets/catalog/foto42.webp", "assets/catalog/foto43.webp", "assets/catalog/foto44.webp", "assets/catalog/foto45.webp", "assets/catalog/foto46.webp"] },
    { id: 47, code: "MF47", category: "Cilindros", tags: ["cilindros", "flores", "arreglos", "arreglos-florales", "rosas"], name: "Cilindros con Flores Variadas", description: "Modernos cilindros decorativos rellenos de flores variadas.", price: 312500, priceText: "Desde $312.500", images: ["assets/catalog/foto47.webp", "assets/catalog/foto48.webp", "assets/catalog/foto49.webp", "assets/catalog/foto50.webp"] },
    { id: 51, code: "MF51", category: "Flores Importadas", tags: ["importadas", "flores", "tulipanes", "girasoles", "orquideas", "arreglos-florales"], name: "Flores Importadas", description: "Selección exclusiva de flores importadas de la más alta calidad.", price: 137500, priceText: "Desde $137.500", images: ["assets/catalog/foto51.webp", "assets/catalog/foto52.webp", "assets/catalog/foto53.webp", "assets/catalog/foto54.webp", "assets/catalog/foto55.webp", "assets/catalog/foto56.webp", "assets/catalog/foto57.webp", "assets/catalog/foto58.webp", "assets/catalog/foto59.webp"] },
    { id: 60, code: "MF60", category: "Arreglos Variados", tags: ["arreglos", "flores", "arreglos-florales", "rosas", "orquideas"], name: "Arreglos Variados", description: "Diversa colección de arreglos florales en múltiples estilos.", price: 0, priceText: "Consultar Precio", images: ["assets/catalog/foto60.webp", "assets/catalog/foto61.webp", "assets/catalog/foto62.webp", "assets/catalog/foto63.webp", "assets/catalog/foto64.webp"] },
    { id: 65, code: "MF65", category: "Rosas Eternas", tags: ["eternas", "flores", "rosas", "arreglos-florales"], name: "Flores Eternas", description: "Flores preservadas que mantienen su belleza natural por años.", price: 0, priceText: "Consultar Precio", images: ["assets/catalog/foto65.webp", "assets/catalog/foto66.webp", "assets/catalog/foto67.webp"] },
    { id: 68, code: "MF68", category: "Desayuno Sorpresa", tags: ["desayunos", "flores", "cumpleaños"], name: "Desayuno Sorpresa", description: "Completo desayuno sorpresa gourmet acompañado de flores frescas.", price: 0, priceText: "Consultar Precio", images: ["assets/catalog/foto68.webp", "assets/catalog/foto69.webp", "assets/catalog/foto70.webp", "assets/catalog/foto71.webp", "assets/catalog/foto72.webp", "assets/catalog/foto73.webp", "assets/catalog/foto74.webp", "assets/catalog/foto75.webp"] }
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'priority';
let LANDING_PRIORITY_TAG = '';

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.tags && p.tags.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => (a.price || 999999) - (b.price || 999999));
    rest.sort((a, b) => (a.price || 999999) - (b.price || 999999));
    return [...priority, ...rest];
}

// --- FILTRAR PRODUCTOS ---
function getFilteredProducts(filter, priorityTag) {
    if (filter === 'priority' || filter === 'all') {
        return getSortedProducts(priorityTag);
    }
    return products.filter(p =>
        p.tags && p.tags.includes(filter) || p.category.toLowerCase().includes(filter)
    ).sort((a, b) => (a.price || 999999) - (b.price || 999999));
}

// --- CREAR TARJETA DE PRODUCTO ---
function createCard(product) {
    const isCarousel = product.images && product.images.length > 1;
    const hasCustomPrice = product.priceText;
    const price = hasCustomPrice ? product.priceText : formatCOP(product.price);

    const div = document.createElement('div');
    div.className = 'product-card-landing';

    let imageHTML;

    if (isCarousel) {
        const slidesHTML = product.images.map((img, i) =>
            `<div class="carousel-slide-landing"><img src="../${img}" alt="${product.name} - Foto ${i+1}" loading="lazy" draggable="false"></div>`
        ).join('');

        const dotsHTML = product.images.map((_, i) =>
            `<button class="carousel-dot-landing ${i === 0 ? 'active' : ''}" data-slide-idx="${i}" type="button"></button>`
        ).join('');

        imageHTML = `
            <div class="carousel-wrap-landing" data-carousel-landing data-total="${product.images.length}" data-current="0">
                <div class="carousel-track-landing">${slidesHTML}</div>
                <button class="car-btn car-prev" data-ldir="prev" type="button">&#10094;</button>
                <button class="car-btn car-next" data-ldir="next" type="button">&#10095;</button>
                <div class="car-counter"><span class="car-cur">1</span> / ${product.images.length}</div>
                <div class="carousel-dots-landing">${dotsHTML}</div>
                <span class="collection-badge-landing">&#128248; ${product.images.length} fotos</span>
                <span class="product-code-badge">${product.code}</span>
            </div>
        `;
    } else {
        const imgSrc = product.image || (product.images && product.images[0]) || '';
        imageHTML = `
            <div class="product-img-wrap" onclick="openLB('../${imgSrc}', '${product.code} - ${product.name}', '${price}')">
                <img src="../${imgSrc}" alt="${product.name} - Flores a domicilio Medellín" loading="lazy">
                <span class="product-code-badge">${product.code}</span>
            </div>
        `;
    }

    div.innerHTML = `
        ${imageHTML}
        <div class="product-body">
            <h3>${product.name}</h3>
            <p class="desc">${product.description}</p>
            <div class="product-footer-landing">
                <div class="price-block">
                    <span class="label">Precio</span>
                    <span class="price ${hasCustomPrice ? 'price-special-landing' : ''}">${price}</span>
                </div>
                <a href="#" class="btn-order-landing" onclick="orderWA('${product.code}', '${product.name.replace(/'/g, "\\'")}', ${product.price || 0}, '${price}'); return false;">
                    &#128722; Pedir
                </a>
            </div>
        </div>
    `;
    return div;
}

// --- RENDER CATÁLOGO ---
function renderCatalog(filter) {
    const grid = document.getElementById('landingProductsGrid');
    const counter = document.getElementById('landingResultsCount');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = getFilteredProducts(filter || currentLandingFilter, LANDING_PRIORITY_TAG);

    if (counter) {
        counter.innerHTML = `Mostrando <strong>${filtered.length}</strong> productos`;
    }

    filtered.forEach(p => grid.appendChild(createCard(p)));

    startLandingAutoPlay();
}

// Auto-play landing: avanza cada 3s como si se presionara la flecha
var landingCarouselIntervals = [];
function startLandingAutoPlay() {
    landingCarouselIntervals.forEach(function(id) { clearInterval(id); });
    landingCarouselIntervals = [];
    document.querySelectorAll('[data-carousel-landing]').forEach(function(container) {
        var id = setInterval(function() {
            var current = parseInt(container.dataset.current || '0');
            goToSlideL(container, current + 1);
        }, 3000);
        landingCarouselIntervals.push(id);
    });
}

// --- FILTRAR ---
function filterLanding(filter, el) {
    currentLandingFilter = filter;
    document.querySelectorAll('.filter-btn-landing').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    renderCatalog(filter);
}

// --- WHATSAPP ORDER + GOOGLE ADS CONVERSION ---
function orderWA(code, name, price, displayPrice) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17951767999/DlVjCIeAg_gbEL_7iPBC',
            'value': price,
            'currency': 'COP'
        });
    }

    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }

    const priceText = price > 0 ? formatCOP(price) : (displayPrice || 'Consultar precio');
    const message = `Hola, me interesa el producto *${code} - ${name}* (${priceText}). ¿Podrían darme más información?`;
    window.open(`https://wa.me/573222169942?text=${encodeURIComponent(message)}`, '_blank');
}

// --- WHATSAPP GENÉRICO + CONVERSIÓN ---
function contactWA(source, customMsg) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17951767999/DlVjCIeAg_gbEL_7iPBC'
        });
    }

    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': source,
            'value': 1
        });
    }

    const msg = customMsg || `Hola, estoy interesado/a en sus arreglos florales. Me podrían dar más información?`;
    window.open(`https://wa.me/573222169942?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- LIGHTBOX ---
function openLB(img, title, price) {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    document.getElementById('lbImg').src = img;
    document.getElementById('lbTitle').textContent = title;
    document.getElementById('lbPrice').textContent = price;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLB() {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    lb.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

// =====================================================
// CARRUSEL INFINITO PARA LANDING PAGES
// Event delegation — robusto con innerHTML
// =====================================================

function goToSlideL(container, index) {
    var total = parseInt(container.dataset.total);
    if (index >= total) index = 0;
    if (index < 0) index = total - 1;
    container.dataset.current = index;

    var track = container.querySelector('.carousel-track-landing');
    if (track) {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
    }

    var cur = container.querySelector('.car-cur');
    if (cur) cur.textContent = index + 1;

    container.querySelectorAll('.carousel-dot-landing').forEach(function(d, i) {
        if (i === index) { d.classList.add('active'); }
        else { d.classList.remove('active'); }
    });
}

// Event delegation para botones y dots del carrusel landing
document.addEventListener('click', function(e) {
    // Botones prev/next
    var btn = e.target.closest('.car-btn');
    if (btn) {
        e.preventDefault();
        e.stopPropagation();
        var container = btn.closest('[data-carousel-landing]');
        if (!container) return;
        var current = parseInt(container.dataset.current || '0');
        var dir = btn.dataset.ldir || (btn.classList.contains('car-prev') ? 'prev' : 'next');
        if (dir === 'next') {
            goToSlideL(container, current + 1);
        } else {
            goToSlideL(container, current - 1);
        }
        return;
    }

    // Dots
    var dot = e.target.closest('.carousel-dot-landing');
    if (dot && dot.dataset.slideIdx !== undefined) {
        e.preventDefault();
        e.stopPropagation();
        var container = dot.closest('[data-carousel-landing]');
        if (!container) return;
        goToSlideL(container, parseInt(dot.dataset.slideIdx));
        return;
    }
}, true);

// Touch/swipe landing
(function() {
    var startX = 0, startY = 0, activeCont = null, swiping = false;

    document.addEventListener('touchstart', function(e) {
        var c = e.target.closest('[data-carousel-landing]');
        if (!c) return;
        activeCont = c;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        swiping = false;
    }, { passive: true });

    document.addEventListener('touchmove', function(e) {
        if (!activeCont) return;
        var dx = Math.abs(e.touches[0].clientX - startX);
        var dy = Math.abs(e.touches[0].clientY - startY);
        if (dx > dy && dx > 10) swiping = true;
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
        if (!activeCont || !swiping) { activeCont = null; return; }
        var diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            var current = parseInt(activeCont.dataset.current || '0');
            goToSlideL(activeCont, diff > 0 ? current + 1 : current - 1);
        }
        activeCont = null;
        swiping = false;
    }, { passive: true });
})();

// --- INIT ---
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog('priority');
});
