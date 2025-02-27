// Mobile Menu Toggle
const menuButton = document.querySelector('nav button');
const navLinks = document.querySelector('nav .nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuButton.querySelectorAll('span').forEach((span, index) => {
        if (isOpen) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(7px, 7px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel Slider
// Carousel Slider
// Carousel Slider
const carouselItems = document.querySelector('.carousel-items');
const carouselLinks = document.querySelectorAll('.carousel-items a');
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

prevBtn.classList.add('carousel-btn', 'prev');
nextBtn.classList.add('carousel-btn', 'next');
prevBtn.innerHTML = '←';
nextBtn.innerHTML = '→';
carouselContainer.append(prevBtn, nextBtn);

let currentIndex = 0;
const itemWidth = carouselLinks[0].offsetWidth + 40; // Including padding
const totalItems = carouselLinks.length;

// Function to update carousel position
function updateCarousel() {
    carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    
    // Update visibility of items with staggered animation
    carouselLinks.forEach((link, index) => {
        if (index >= currentIndex && index < currentIndex + 3) { // Show 3 items
            setTimeout(() => link.classList.add('visible'), (index - currentIndex) * 100); // Staggered effect
        } else {
            link.classList.remove('visible');
        }
    });
}

// Previous button click
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Next button click
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 3) { // Show 3 items at a time
        currentIndex++;
        updateCarousel();
    }
});

// Initialize carousel
function initCarousel() {
    updateCarousel();
}

// Run on load
window.addEventListener('load', initCarousel);

// Adjust carousel on window resize
window.addEventListener('resize', () => {
    const newItemWidth = carouselLinks[0].offsetWidth + 40;
    if (newItemWidth !== itemWidth) {
        updateCarousel(); // Recalculate position if item width changes
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.about, .carousel, .destination, .packages');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('reveal', 'active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Lazy Load Images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    const options = {
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => observer.observe(img));
});

document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Hero Parallax
    const hero = document.querySelector('.hero.parallax');
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

    // About Parallax
    const about = document.querySelector('.about.parallax');
    if (about) {
        const aboutOffset = about.offsetTop;
        about.style.backgroundPositionY = `${(scrollPosition - aboutOffset) * 0.3}px`;
    }

    // Footer Parallax
    const footer = document.querySelector('footer.parallax');
    if (footer) {
        const footerOffset = footer.offsetTop;
        footer.style.backgroundPositionY = `${(scrollPosition - footerOffset) * 0.2}px`;
    }
});

document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const body = document.querySelector('body');

    // Toggle dark mode when scrolling past 100px
    if (scrollPosition > 100) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    // Parallax effect (from previous response)
    const hero = document.querySelector('.hero.parallax');
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

    const about = document.querySelector('.about.parallax');
    if (about) {
        const aboutOffset = about.offsetTop;
        about.style.backgroundPositionY = `${(scrollPosition - aboutOffset) * 0.3}px`;
    }

    const footer = document.querySelector('footer.parallax');
    if (footer) {
        const footerOffset = footer.offsetTop;
        footer.style.backgroundPositionY = `${(scrollPosition - footerOffset) * 0.2}px`;
    }
});