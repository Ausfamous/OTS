// ============================================
// Oceana Tree Services - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initQuoteForm();
    initFormValidation();
    initTestimonials();
    initGallery();
    initSmoothScroll();
});

// ============================================
// Mobile Menu Toggle
// ============================================

function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const navList = document.querySelector('.nav-list');

    if (!toggle || !navList) return;

    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            toggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav') && !e.target.closest('.mobile-menu-toggle')) {
            toggle.classList.remove('active');
            navList.classList.remove('active');
        }
    });
}

// ============================================
// Quote Form Modal
// ============================================

function initQuoteForm() {
    const quoteFormToggle = document.getElementById('quoteFormToggle');
    const finalQuoteBtn = document.getElementById('finalQuoteBtn');
    const quoteForm = document.getElementById('quoteForm');
    const quoteFormClose = document.getElementById('quoteFormClose');
    const quoteFormOverlay = document.getElementById('quoteFormOverlay');

    if (!quoteForm) return;

    // Open form
    [quoteFormToggle, finalQuoteBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function() {
                quoteForm.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });

    // Close form
    [quoteFormClose, quoteFormOverlay].forEach(el => {
        if (el) {
            el.addEventListener('click', function() {
                quoteForm.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && quoteForm.classList.contains('active')) {
            quoteForm.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle form submission
    const quickQuoteForm = document.getElementById('quickQuoteForm');
    if (quickQuoteForm) {
        quickQuoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm(this)) {
                // In production, send to your backend or form service
                handleQuoteSubmission(this);
            }
        });
    }
}

// ============================================
// Form Validation
// ============================================

function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Real-time validation on blur
            input.addEventListener('blur', function() {
                validateField(this);
            });

            // Clear error on input
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    this.classList.remove('error');
                    const errorMsg = this.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.textContent = '';
                    }
                }
            });
        });
    });
}

function validateField(field) {
    const errorMsg = field.nextElementSibling;
    if (!errorMsg || !errorMsg.classList.contains('error-message')) return;

    let isValid = true;
    let message = '';

    // Check required
    if (field.required && field.value.trim() === '') {
        isValid = false;
        message = 'This field is required';
    }

    // Check email
    if (field.type === 'email' && field.value.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }

    // Check phone
    if (field.type === 'tel' && field.value.trim() !== '') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(field.value) || field.value.replace(/\D/g, '').length < 10) {
            isValid = false;
            message = 'Please enter a valid phone number';
        }
    }

    // Update UI
    if (!isValid) {
        field.classList.add('error');
        errorMsg.textContent = message;
    } else {
        field.classList.remove('error');
        errorMsg.textContent = '';
    }

    return isValid;
}

function validateForm(form) {
    const fields = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

function handleQuoteSubmission(form) {
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name') || document.getElementById('qName').value,
        phone: formData.get('phone') || document.getElementById('qPhone').value,
        email: formData.get('email') || document.getElementById('qEmail').value,
        service: formData.get('service') || document.getElementById('qService').value,
        message: formData.get('message') || document.getElementById('qMessage').value,
        timestamp: new Date().toISOString()
    };

    // Log data (in production, send to backend)
    console.log('Quote Request Submitted:', data);

    // Show success message
    showFormSuccess(form, 'Quote request received! We\'ll be in touch within 24 hours.');
}

function showFormSuccess(form, message) {
    // Create success message
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.style.cssText = `
        background-color: rgba(76, 175, 80, 0.1);
        border: 1px solid #4CAF50;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
        color: #4CAF50;
        font-weight: 500;
    `;
    successMsg.textContent = message;

    // Insert at top of form
    form.insertBefore(successMsg, form.firstChild);

    // Reset form
    form.reset();

    // Remove success message after 5 seconds
    setTimeout(() => {
        successMsg.remove();
    }, 5000);
}

// ============================================
// Testimonials Slider
// ============================================

function initTestimonials() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotContainer = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (slides.length === 0) return;

    let currentSlide = 0;

    // Create dots
    if (dotContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'testimonial-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotContainer.appendChild(dot);
        });
    }

    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === n);
        });

        const dots = dotContainer?.querySelectorAll('.testimonial-dot');
        dots?.forEach((dot, index) => {
            dot.classList.toggle('active', index === n);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function goToSlide(n) {
        currentSlide = n;
        showSlide(currentSlide);
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-rotate testimonials every 8 seconds
    setInterval(nextSlide, 8000);

    // Show first slide
    showSlide(0);
}

// ============================================
// Gallery & Lightbox
// ============================================

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    if (!lightbox || galleryItems.length === 0) return;

    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => item.querySelector('img'));

    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openLightbox(images[index].src);
        });
    });

    function openLightbox(src) {
        lightboxImage.src = src;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    // Close on overlay click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
}

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Contact Form (Index.html)
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validateForm(this)) return;

        // Collect form data
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value,
            optin: document.getElementById('contactOptIn').checked,
            timestamp: new Date().toISOString()
        };

        // Log data (in production, send to backend)
        console.log('Contact Form Submitted:', formData);

        // Handle submission
        handleContactSubmission(this, formData);
    });
}

function handleContactSubmission(form, data) {
    // METHOD 1: Using Formspree (recommended for quick setup)
    // 1. Sign up at https://formspree.io
    // 2. Create a form and get your endpoint (e.g., https://formspree.io/f/XXXXXXX)
    // 3. Replace the URL below with your Formspree endpoint
    
    // Uncomment and use this to send to Formspree:
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            showFormSuccess(form, 'Thank you! Your message has been sent. We\'ll be in touch within 24 hours.');
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
        alert('There was an error sending your message. Please try calling us instead.');
    });
    */

    // METHOD 2: Send to your own backend
    // Replace the URL with your backend endpoint
    
    // Uncomment and use this to send to your backend:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        showFormSuccess(form, 'Thank you! Your message has been sent successfully.');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    });
    */

    // For now, show success message locally
    showFormSuccess(form, 'Thank you for your message! We\'ll be in touch within 24 hours. (Note: Form action not yet configured. See comments in script.js for setup instructions.)');
}

// ============================================
// Utility Functions
// ============================================

// Add scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .faq-item, .region-card, .why-us-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}

// ============================================
// Helper: Check if element is in viewport
// ============================================

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// Console message
// ============================================

console.log('%cOceana Tree Services', 'font-size: 16px; font-weight: bold; color: #d4af6a;');
console.log('%cFor form setup: See script.js comments for Formspree or custom backend integration', 'color: #b0b8c5;');
