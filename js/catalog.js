// ===================================
// FUNCIONES DEL CATÁLOGO
// Momentos Felices - Medellín
// Con soporte para carrusel infinito
// ===================================

let currentFilter = 'all';
var carouselIntervals = [];

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initScrollTop();
    initCarouselDelegation();
});

// Renderizar productos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const counter = document.getElementById('resultsCounter');
    const emptyState = document.getElementById('emptyState');

    grid.innerHTML = '';

    const filtered = currentFilter === 'all'
        ? products
        : products.filter(p => p.category.includes(currentFilter) || p.category === currentFilter);

    if (filtered.length === 0) {
        emptyState.classList.add('active');
        counter.innerHTML = '';
        return;
    }

    emptyState.classList.remove('active');
    counter.innerHTML = `Mostrando <strong>${filtered.length}</strong> productos`;

    filtered.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });

    startCarouselAutoPlay();
}

// Auto-play: avanza cada carrusel cada 3s como si se presionara la flecha
function startCarouselAutoPlay() {
    carouselIntervals.forEach(function(id) { clearInterval(id); });
    carouselIntervals = [];
    document.querySelectorAll('[data-carousel]').forEach(function(container) {
        var id = setInterval(function() {
            var current = parseInt(container.dataset.current || '0');
            goToSlide(container, current + 1);
        }, 3000);
        carouselIntervals.push(id);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);

    const isCarousel = product.images && product.images.length > 1;
    const hasCustomPrice = product.priceText;

    let formattedPrice;
    if (hasCustomPrice) {
        formattedPrice = product.priceText;
    } else {
        formattedPrice = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(product.price);
    }

    let imageHTML;

    if (isCarousel) {
        const slidesHTML = product.images.map((img, i) => `
            <div class="carousel-slide">
                <img src="${img}" alt="${product.name} - Foto ${i + 1}" loading="lazy" draggable="false">
            </div>
        `).join('');

        const dotsHTML = product.images.map((_, i) => `
            <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-slide-index="${i}" type="button"></button>
        `).join('');

        imageHTML = `
            <div class="carousel-container" data-carousel data-total="${product.images.length}" data-current="0">
                <div class="catalog-carousel-track">
                    ${slidesHTML}
                </div>
                <button class="carousel-btn carousel-btn-prev" data-dir="prev" type="button">&#10094;</button>
                <button class="carousel-btn carousel-btn-next" data-dir="next" type="button">&#10095;</button>
                <div class="carousel-counter">
                    <span class="carousel-current">1</span> / ${product.images.length}
                </div>
                <div class="carousel-dots">
                    ${dotsHTML}
                </div>
                <span class="collection-badge">&#128248; ${product.images.length} fotos</span>
                <span class="product-badge">${product.code}</span>
            </div>
        `;
    } else {
        const imgSrc = product.image || (product.images && product.images[0]) || '';
        imageHTML = `
            <div class="product-image-container" onclick="openLightbox('${imgSrc}', '${product.code} - ${product.name}', '${formattedPrice}')">
                <img src="${imgSrc}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="zoom-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                </div>
                <span class="product-badge">${product.code}</span>
            </div>
        `;
    }

    const priceClass = hasCustomPrice ? 'price-special' : 'product-price';
    const orderPrice = product.price || 0;

    card.innerHTML = `
        ${imageHTML}
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div>
                    <span class="price-label">Precio</span>
                    <div class="${priceClass}">${formattedPrice}</div>
                </div>
                <a href="#" class="btn-order" onclick="orderProduct('${product.code}', '${product.name}', ${orderPrice}, '${formattedPrice}'); return false;">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Pedir
                </a>
            </div>
        </div>
    `;

    return card;
}

// =====================================================
// CARRUSEL - EVENT DELEGATION (robusto)
// =====================================================

function initCarouselDelegation() {
    // Delegación de clicks en TODO el documento
    document.addEventListener('click', function(e) {
        // Botón prev/next
        const btn = e.target.closest('.carousel-btn');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            const container = btn.closest('[data-carousel]');
            if (!container) return;
            const dir = btn.dataset.dir || (btn.classList.contains('carousel-btn-prev') ? 'prev' : 'next');
            const current = parseInt(container.dataset.current || '0');
            if (dir === 'next') {
                goToSlide(container, current + 1);
            } else {
                goToSlide(container, current - 1);
            }
            return;
        }

        // Dot click
        const dot = e.target.closest('.carousel-dot');
        if (dot && dot.dataset.slideIndex !== undefined) {
            e.preventDefault();
            e.stopPropagation();
            const container = dot.closest('[data-carousel]');
            if (!container) return;
            goToSlide(container, parseInt(dot.dataset.slideIndex));
            return;
        }
    }, true); // useCapture = true para interceptar antes
}

function goToSlide(container, index) {
    const total = parseInt(container.dataset.total);

    // Loop infinito
    if (index >= total) index = 0;
    if (index < 0) index = total - 1;

    container.dataset.current = index;

    // Mover track - transición rápida tipo snap
    const track = container.querySelector('.catalog-carousel-track');
    if (track) {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
    }

    // Actualizar counter
    const counterEl = container.querySelector('.carousel-current');
    if (counterEl) counterEl.textContent = index + 1;

    // Actualizar dots
    container.querySelectorAll('.carousel-dot').forEach(function(dot, i) {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// =====================================================
// TOUCH / SWIPE para móvil
// =====================================================

(function() {
    var startX = 0;
    var startY = 0;
    var activeContainer = null;
    var swiping = false;

    document.addEventListener('touchstart', function(e) {
        var container = e.target.closest('[data-carousel]');
        if (!container) return;
        activeContainer = container;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        swiping = false;
    }, { passive: true });

    document.addEventListener('touchmove', function(e) {
        if (!activeContainer) return;
        var dx = Math.abs(e.touches[0].clientX - startX);
        var dy = Math.abs(e.touches[0].clientY - startY);
        if (dx > dy && dx > 10) {
            swiping = true;
        }
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
        if (!activeContainer || !swiping) {
            activeContainer = null;
            return;
        }
        var endX = e.changedTouches[0].clientX;
        var diff = startX - endX;

        if (Math.abs(diff) > 40) {
            var current = parseInt(activeContainer.dataset.current || '0');
            if (diff > 0) {
                goToSlide(activeContainer, current + 1);
            } else {
                goToSlide(activeContainer, current - 1);
            }
        }

        activeContainer = null;
        swiping = false;
    }, { passive: true });
})();

// =====================================================
// FILTROS
// =====================================================

function filterProducts(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }

    renderProducts();

    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
}

// =====================================================
// LIGHTBOX
// =====================================================

function openLightbox(image, title, price) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightboxImage');
    var lightboxTitle = document.getElementById('lightboxTitle');
    var lightboxPrice = document.getElementById('lightboxPrice');

    lightboxImage.src = image;
    lightboxTitle.textContent = title;
    lightboxPrice.textContent = price;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// =====================================================
// ORDENAR PRODUCTO (WhatsApp)
// =====================================================

function orderProduct(code, name, price, displayPrice) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }

    var priceText;
    if (price > 0) {
        priceText = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(price);
    } else {
        priceText = displayPrice || 'Consultar precio';
    }

    var message = 'Hola, me interesa el producto *' + code + ' - ' + name + '* (' + priceText + '). ¿Podrían darme más información?';
    var whatsappUrl = 'https://wa.me/573222169942?text=' + encodeURIComponent(message);

    window.open(whatsappUrl, '_blank');
}

// =====================================================
// SCROLL TO TOP
// =====================================================

function initScrollTop() {
    var scrollBtn = document.getElementById('scrollTop');
    if (!scrollBtn) return;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cerrar lightbox con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
