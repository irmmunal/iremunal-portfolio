// Smooth scroll for anchor links
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

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'linear-gradient(180deg, rgba(26, 11, 46, 0.98) 0%, rgba(26, 11, 46, 0.95) 100%)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'linear-gradient(180deg, var(--deep-purple) 0%, rgba(26, 11, 46, 0.95) 100%)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
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

// Add fade-in animation to elements
window.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.info-card, .case-study, .tech-item');
    
    fadeElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Gradient visual animation enhancement
const gradientVisuals = document.querySelectorAll('.gradient-visual');

gradientVisuals.forEach(visual => {
    visual.addEventListener('mouseenter', () => {
        visual.style.transform = 'scale(1.05)';
    });
    
    visual.addEventListener('mouseleave', () => {
        visual.style.transform = 'scale(1)';
    });
});

// Tech stack items hover effect
const techItems = document.querySelectorAll('.tech-item');

techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'rgba(155, 77, 202, 0.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
    });
});

// Console message
console.log('%c İrem Ünal - Data Analyst Portfolio ', 'background: linear-gradient(135deg, #9B4DCA, #FF6B9D); color: white; font-size: 16px; padding: 10px 20px; border-radius: 5px;');
console.log('%c Designed & Developed with ❤️ ', 'color: #9B4DCA; font-size: 12px;');
