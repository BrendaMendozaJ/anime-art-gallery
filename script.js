// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botón CTA del hero
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#galeria').scrollIntoView({
        behavior: 'smooth'
    });
});

// Animación de entrada para las tarjetas
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las tarjetas cuando se cargan
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.art-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});







// Sistema de traducción
let currentLanguage = 'es';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar contenido
    document.querySelectorAll('[data-es]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Actualizar título de la página
    const titles = {
        es: 'Galería de arte de Hitoichi',
        ja: 'ひといちのアートギャラリー',
        en: 'Hitoichi\'s Art Gallery'
    };
    document.title = titles[lang];
}

// Event listeners para botones de idioma
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
});

// Botones de compra
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const artName = this.parentElement.querySelector('h3').textContent;
        const price = this.parentElement.querySelector('.price').textContent;
        
        // Aquí puedes integrar con un sistema de pago real
        const messages = {
            es: `¡Gracias por tu interés en "${artName}"! 💕\nPrecio: ${price}\n\n¡Pronto te contactaremos para completar tu compra! ✨`,
            ja: `ありがとうございます！"${artName}" に興味を持っていただき！🌸\n価格: ${price}\n\nすぐにご連絡いたします！✨`,
            en: `Thank you for your interest in "${artName}"! 💕\nPrice: ${price}\n\nWe'll contact you soon to complete your purchase! ✨`
        };
        alert(messages[currentLanguage]);
    });
});