document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
        });
    }
    
    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Get error elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        
        // Add input event listeners for real-time validation
        if (nameInput && nameError) {
            nameInput.addEventListener('input', function() {
                if (this.value.trim() === '') {
                    nameError.textContent = 'Please enter your name';
                    nameError.classList.remove('hidden');
                } else {
                    nameError.textContent = '';
                    nameError.classList.add('hidden');
                }
            });
        }
        
        if (emailInput && emailError) {
            emailInput.addEventListener('input', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value.trim() === '') {
                    emailError.textContent = 'Please enter your email address';
                    emailError.classList.remove('hidden');
                } else if (!emailRegex.test(this.value.trim())) {
                    emailError.textContent = 'Please enter a valid email address';
                    emailError.classList.remove('hidden');
                } else {
                    emailError.textContent = '';
                    emailError.classList.add('hidden');
                }
            });
        }
        
        if (messageInput && messageError) {
            messageInput.addEventListener('input', function() {
                if (this.value.trim() === '') {
                    messageError.textContent = 'Please enter your message';
                    messageError.classList.remove('hidden');
                } else if (this.value.trim().length < 10) {
                    messageError.textContent = 'Your message is too short (minimum 10 characters)';
                    messageError.classList.remove('hidden');
                } else {
                    messageError.textContent = '';
                    messageError.classList.add('hidden');
                }
            });
        }
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('form-message');
            
            // Reset previous error messages
            if (nameError) nameError.classList.add('hidden');
            if (emailError) emailError.classList.add('hidden');
            if (messageError) messageError.classList.add('hidden');
            if (formMessage) {
                formMessage.textContent = '';
                formMessage.classList.add('hidden');
                formMessage.classList.remove('form-success', 'form-error-message');
            }
            
            // Validation flags
            let isValid = true;
            
            // Validate name
            if (nameInput && nameInput.value.trim() === '') {
                if (nameError) {
                    nameError.textContent = 'Please enter your name';
                    nameError.classList.remove('hidden');
                }
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput) {
                if (emailInput.value.trim() === '') {
                    if (emailError) {
                        emailError.textContent = 'Please enter your email address';
                        emailError.classList.remove('hidden');
                    }
                    isValid = false;
                } else if (!emailRegex.test(emailInput.value.trim())) {
                    if (emailError) {
                        emailError.textContent = 'Please enter a valid email address';
                        emailError.classList.remove('hidden');
                    }
                    isValid = false;
                }
            }
            
            // Validate message
            if (messageInput) {
                if (messageInput.value.trim() === '') {
                    if (messageError) {
                        messageError.textContent = 'Please enter your message';
                        messageError.classList.remove('hidden');
                    }
                    isValid = false;
                } else if (messageInput.value.trim().length < 10) {
                    if (messageError) {
                        messageError.textContent = 'Your message is too short (minimum 10 characters)';
                        messageError.classList.remove('hidden');
                    }
                    isValid = false;
                }
            }
            
            // If form is valid, show success message
            if (isValid && formMessage) {
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.classList.add('form-success');
                formMessage.classList.remove('hidden');
                
                // Reset form
                contactForm.reset();
                
                // In a real application, you would send the form data to a server here
                console.log('Form submitted successfully');
            } else if (formMessage) {
                formMessage.textContent = 'Please correct the errors in the form.';
                formMessage.classList.add('form-error-message');
                formMessage.classList.remove('hidden');
            }
        });
    }
    
    // FAQ accordion functionality
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');
            
            // Get the content element
            const content = this.nextElementSibling;
            
            // Toggle content visibility
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Add hover animation class to elements
    const hoverElements = document.querySelectorAll('.hover-scale');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('scale-105');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('scale-105');
        });
    });
    
    // Add button hover effects
    const buttons = document.querySelectorAll('a.bg-indigo-600, a.bg-white, button.bg-indigo-600, button.bg-white');
    buttons.forEach(button => {
        button.classList.add('btn-hover-effect');
    });
    
    // Add pulse effect to service cards
    const serviceCards = document.querySelectorAll('.services-section .bg-white');
    serviceCards.forEach(card => {
        card.classList.add('hover-pulse');
    });
});