/**
 * NEXUS Caribbean Logistics - Main JavaScript
 * Handles navigation, smooth scroll, and form functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contactForm');

    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ===================================
    // Navbar Scroll Effect
    // ===================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Check on page load

    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // ===================================
    // Contact Form Handling
    // ===================================
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(contactForm);

            try {
                // Check if Formspree endpoint is configured
                const formAction = contactForm.getAttribute('action');

                if (formAction.includes('your-form-id')) {
                    // Demo mode - simulate successful submission
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    showFormSuccess();
                } else {
                    // Real submission to Formspree
                    const response = await fetch(formAction, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        showFormSuccess();
                    } else {
                        throw new Error('Form submission failed');
                    }
                }
            } catch (error) {
                console.error('Form error:', error);
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                alert('There was an error sending your message. Please try WhatsApp or email us directly.');
            }
        });
    }

    function showFormSuccess() {
        const formWrapper = document.querySelector('.contact-form-wrapper');
        formWrapper.innerHTML = `
            <div class="form-success">
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting NEXUS Caribbean Logistics. We'll get back to you shortly.</p>
                <a href="https://wa.me/17867158532" class="btn btn-whatsapp" style="margin-top: 20px;">
                    <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
            </div>
        `;
    }

    // ===================================
    // Scroll Reveal Animation
    // ===================================
    const revealElements = document.querySelectorAll('.service-card, .port-card, .destination-item, .feature, .stat-card, .payment-card');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state for animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on page load

    // ===================================
    // Phone Number Formatting
    // ===================================
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length >= 6) {
                value = `(${value.slice(0,3)}) ${value.slice(3,6)}-${value.slice(6,10)}`;
            } else if (value.length >= 3) {
                value = `(${value.slice(0,3)}) ${value.slice(3)}`;
            }

            e.target.value = value;
        });
    }

    // ===================================
    // WhatsApp Button Pulse Animation
    // ===================================
    const whatsappBtn = document.querySelector('.whatsapp-float');

    if (whatsappBtn) {
        // Add pulse animation every 5 seconds
        setInterval(() => {
            whatsappBtn.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                whatsappBtn.style.animation = '';
            }, 500);
        }, 5000);
    }

    // Add pulse keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // Logo Fallback Handler
    // ===================================
    const logoImg = document.querySelector('.logo-img');
    const logoText = document.querySelector('.logo-text');

    if (logoImg) {
        // Check if image loaded successfully
        if (logoImg.complete && logoImg.naturalHeight === 0) {
            logoImg.style.display = 'none';
            if (logoText) logoText.style.display = 'flex';
        }
    }
});
