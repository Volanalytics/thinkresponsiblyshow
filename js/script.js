document.addEventListener('DOMContentLoaded', () => {
    // Add active class to current navigation item
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Check if the current path includes the link path (for sub-pages)
        if (currentLocation.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentLocation === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
    
    // Email Form (Home Page)
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            // Replace with actual email subscription service
            showNotification(`Thank you for joining our community, ${email}!`, 'success');
            emailForm.reset();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('message').value;
            // Replace with form submission API (e.g., Formspree)
            showNotification(`Thank you for your message, ${name}! We'll get back to you soon.`, 'success');
            contactForm.reset();
        });
    }
    
    // Podcast Form
    const podcastForm = document.getElementById('podcast-form');
    if (podcastForm) {
        podcastForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('podcast-email').value;
            showNotification(`You'll be notified when the podcast launches!`, 'success');
            podcastForm.reset();
        });
    }
    
    // Footer Email Form
    const footerEmailForm = document.getElementById('footer-email-form');
    if (footerEmailForm) {
        footerEmailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('footer-email').value;
            showNotification(`Thank you for subscribing!`, 'success');
            footerEmailForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Create notification container if it doesn't exist
    let container = document.querySelector('.notification-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .notification-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
            }
            
            .notification {
                padding: 15px 20px;
                margin-bottom: 10px;
                border-radius: 4px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-width: 300px;
                max-width: 400px;
                animation: slideIn 0.3s ease-out;
            }
            
            .notification-success {
                background-color: #d4edda;
                color: #155724;
                border-left: 5px solid #155724;
            }
            
            .notification-error {
                background-color: #f8d7da;
                color: #721c24;
                border-left: 5px solid #721c24;
            }
            
            .notification-info {
                background-color: #d1ecf1;
                color: #0c5460;
                border-left: 5px solid #0c5460;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                margin-left: 10px;
                opacity: 0.7;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'notification-close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    notification.appendChild(messageSpan);
    notification.appendChild(closeButton);
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}
