// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initFAQToggle();
    initContactForm();
    initLoanApplicationForm();
    initScrollAnimations();
    initSmoothScrolling();
});

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// FAQ Toggle Functionality
function initFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(function(otherItem) {
                    otherItem.classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('.form-submit-btn');
            
            // Show loading state
            if (submitButton) {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
            }

            // Simulate form submission (replace with actual form handling)
            setTimeout(function() {
                // Hide form and show success message
                contactForm.style.display = 'none';
                if (formSuccess) {
                    formSuccess.style.display = 'block';
                }
                
                // Reset button
                if (submitButton) {
                    submitButton.textContent = 'Send Message';
                    submitButton.disabled = false;
                }
            }, 2000);
        });
    }
}

// Loan Application Form Handling
function initLoanApplicationForm() {
    const applicationForm = document.getElementById('loanApplicationForm');
    const applicationSuccess = document.getElementById('applicationSuccess');

    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (!validateLoanApplicationForm()) {
                return;
            }

            // Get form data
            const formData = new FormData(applicationForm);
            const submitButton = applicationForm.querySelector('.submit-btn');
            
            // Show loading state
            if (submitButton) {
                submitButton.classList.add('loading');
                submitButton.disabled = true;
            }

            // Simulate form submission (replace with actual form handling)
            setTimeout(function() {
                // Hide form and show success message
                applicationForm.style.display = 'none';
                if (applicationSuccess) {
                    applicationSuccess.style.display = 'block';
                    applicationSuccess.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Reset button
                if (submitButton) {
                    submitButton.classList.remove('loading');
                    submitButton.disabled = false;
                }
            }, 3000);
        });
    }
}

// Validate Loan Application Form
function validateLoanApplicationForm() {
    const requiredFields = [
        'fullName', 'idNumber', 'phoneNumber', 'email', 'dateOfBirth', 'gender', 'address',
        'businessName', 'businessType', 'businessRegistration', 'yearsInBusiness', 'businessDescription', 'businessAddress',
        'loanAmount', 'loanPurpose', 'monthlyIncome', 'preferredTerm',
        'guarantorName', 'guarantorId', 'guarantorPhone', 'guarantorRelationship', 'guarantorAddress'
    ];

    const requiredFiles = ['nationalId', 'passportPhoto', 'guarantorIdUpload'];
    const requiredCheckboxes = ['termsAccept', 'dataConsent', 'guarantorConsent'];

    let isValid = true;
    let firstErrorField = null;

    // Validate text fields
    requiredFields.forEach(function(fieldName) {
        const field = document.getElementById(fieldName);
        if (field && !field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
            if (!firstErrorField) firstErrorField = field;
        } else if (field) {
            clearFieldError(field);
        }
    });

    // Validate email format
    const emailField = document.getElementById('email');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, 'Please enter a valid email address');
            isValid = false;
            if (!firstErrorField) firstErrorField = emailField;
        }
    }

    // Validate phone numbers
    const phoneFields = ['phoneNumber', 'guarantorPhone'];
    phoneFields.forEach(function(fieldName) {
        const field = document.getElementById(fieldName);
        if (field && field.value) {
            const phoneRegex = /^\+254\s?[0-9]{9}$/;
            if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
                showFieldError(field, 'Please enter a valid Kenyan phone number (+254 7XX XXX XXX)');
                isValid = false;
                if (!firstErrorField) firstErrorField = field;
            }
        }
    });

    // Validate loan amount
    const loanAmountField = document.getElementById('loanAmount');
    if (loanAmountField && loanAmountField.value) {
        const amount = parseInt(loanAmountField.value);
        if (amount < 50000 || amount > 5000000) {
            showFieldError(loanAmountField, 'Loan amount must be between KES 50,000 and KES 5,000,000');
            isValid = false;
            if (!firstErrorField) firstErrorField = loanAmountField;
        }
    }

    // Validate file uploads
    requiredFiles.forEach(function(fieldName) {
        const field = document.getElementById(fieldName);
        if (field && field.files.length === 0) {
            showFieldError(field, 'Please upload the required document');
            isValid = false;
            if (!firstErrorField) firstErrorField = field;
        } else if (field) {
            clearFieldError(field);
        }
    });

    // Validate checkboxes
    requiredCheckboxes.forEach(function(fieldName) {
        const field = document.getElementById(fieldName);
        if (field && !field.checked) {
            showFieldError(field, 'You must accept this to continue');
            isValid = false;
            if (!firstErrorField) firstErrorField = field;
        } else if (field) {
            clearFieldError(field);
        }
    });

    // Scroll to first error field
    if (!isValid && firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
    }

    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#ef4444';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.style.borderColor = '';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.benefit, .feature-card, .stat, .mv-card, .reason-card, .team-member, ' +
        '.step, .requirement-card, .faq-item, .contact-card, .faq-quick-item'
    );

    elementsToAnimate.forEach(function(element) {
        observer.observe(element);
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility Functions

// Format phone number as user types
function formatPhoneNumber(input) {
    // Remove all non-numeric characters except +
    let value = input.value.replace(/[^\d+]/g, '');
    
    // Ensure it starts with +254
    if (value && !value.startsWith('+254')) {
        if (value.startsWith('254')) {
            value = '+' + value;
        } else if (value.startsWith('0')) {
            value = '+254' + value.substring(1);
        } else if (value.startsWith('7') || value.startsWith('1')) {
            value = '+254' + value;
        }
    }
    
    // Format: +254 7XX XXX XXX
    if (value.length > 4) {
        value = value.substring(0, 4) + ' ' + value.substring(4);
    }
    if (value.length > 8) {
        value = value.substring(0, 8) + ' ' + value.substring(8);
    }
    if (value.length > 12) {
        value = value.substring(0, 12) + ' ' + value.substring(12);
    }
    
    // Limit to correct length
    if (value.length > 16) {
        value = value.substring(0, 16);
    }
    
    input.value = value;
}

// Add phone number formatting to relevant fields
document.addEventListener('DOMContentLoaded', function() {
    const phoneFields = document.querySelectorAll('input[type="tel"]');
    phoneFields.forEach(function(field) {
        field.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
});

// Format currency input
function formatCurrency(input) {
    let value = input.value.replace(/[^\d]/g, '');
    
    if (value) {
        // Add commas for thousands
        value = parseInt(value).toLocaleString();
    }
    
    input.value = value;
}

// Add currency formatting to loan amount field
document.addEventListener('DOMContentLoaded', function() {
    const loanAmountField = document.getElementById('loanAmount');
    if (loanAmountField) {
        loanAmountField.addEventListener('input', function() {
            formatCurrency(this);
        });
        
        // Remove formatting when submitting
        loanAmountField.addEventListener('blur', function() {
            this.value = this.value.replace(/,/g, '');
        });
    }
});

// File upload preview
function initFileUploadPreview() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            const files = this.files;
            const previewContainer = this.parentNode.querySelector('.file-preview');
            
            // Remove existing preview
            if (previewContainer) {
                previewContainer.remove();
            }
            
            if (files.length > 0) {
                const newPreviewContainer = document.createElement('div');
                newPreviewContainer.className = 'file-preview';
                newPreviewContainer.style.marginTop = '0.5rem';
                newPreviewContainer.style.fontSize = '0.875rem';
                newPreviewContainer.style.color = '#10b981';
                
                const fileList = Array.from(files).map(file => file.name).join(', ');
                newPreviewContainer.textContent = `Selected: ${fileList}`;
                
                this.parentNode.appendChild(newPreviewContainer);
            }
        });
    });
}

// Initialize file upload preview
document.addEventListener('DOMContentLoaded', initFileUploadPreview);

// Navbar scroll effect
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = '#ffffff';
                navbar.style.backdropFilter = 'none';
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Initialize navbar scroll effect
document.addEventListener('DOMContentLoaded', initNavbarScrollEffect);

// Loading animation for buttons
function showButtonLoading(button, originalText = 'Submit') {
    if (button) {
        button.disabled = true;
        button.innerHTML = `
            <span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                <span style="width: 16px; height: 16px; border: 2px solid transparent; border-top: 2px solid currentColor; border-radius: 50%; animation: spin 1s linear infinite;"></span>
                Processing...
            </span>
        `;
    }
}

function hideButtonLoading(button, originalText = 'Submit') {
    if (button) {
        button.disabled = false;
        button.innerHTML = originalText;
    }
}

// Add spinning animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Form validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateKenyanPhone(phone) {
    const phoneRegex = /^\+254[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateKenyanID(id) {
    const idRegex = /^[0-9]{8}$/;
    return idRegex.test(id);
}

// Enhanced form submission with better error handling
function submitFormWithValidation(form, successCallback, errorCallback) {
    const formData = new FormData(form);
    
    // Here you would typically send the data to your server
    // For now, we'll simulate the process
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random success/failure for demo
            if (Math.random() > 0.1) { // 90% success rate
                resolve({ success: true, message: 'Form submitted successfully!' });
            } else {
                reject({ success: false, message: 'Network error. Please try again.' });
            }
        }, 2000);
    });
}

// Add enhanced error messaging
function showErrorMessage(message, container) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        background: #fee2e2;
        border: 1px solid #fecaca;
        color: #dc2626;
        padding: 12px;
        border-radius: 6px;
        margin: 16px 0;
        font-size: 14px;
    `;
    errorDiv.textContent = message;
    
    // Remove existing error messages
    const existingErrors = container.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());
    
    container.insertBefore(errorDiv, container.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Add success messaging
function showSuccessMessage(message, container) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        background: #dcfce7;
        border: 1px solid #bbf7d0;
        color: #16a34a;
        padding: 12px;
        border-radius: 6px;
        margin: 16px 0;
        font-size: 14px;
    `;
    successDiv.textContent = message;
    
    container.insertBefore(successDiv, container.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 5000);
}

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization here
    console.log('Attivita Ricco Limited website loaded successfully!');
});