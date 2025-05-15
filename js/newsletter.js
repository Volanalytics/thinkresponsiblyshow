// Newsletter form handling
class NewsletterForm {
    constructor(formId, options = {}) {
        this.form = document.getElementById(formId);
        if (!this.form) return;
        
        this.emailInput = this.form.querySelector('input[type="email"]');
        this.submitButton = this.form.querySelector('button[type="submit"]');
        this.originalButtonText = this.submitButton.textContent;
        this.zapierWebhook = 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID'; // Replace with your Zapier webhook URL
        
        this.options = {
            loadingText: 'Subscribing...',
            successMessage: 'Thank you for subscribing!',
            errorMessage: 'Subscription failed. Please try again.',
            ...options
        };

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.emailInput.value) {
            return;
        }

        this.setLoading(true);

        try {
            const response = await fetch(this.zapierWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    email: this.emailInput.value,
                    source: window.location.pathname,
                    timestamp: new Date().toISOString()
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            this.showMessage(this.options.successMessage, 'success');
            this.form.reset();
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            this.showMessage(this.options.errorMessage, 'error');
        } finally {
            this.setLoading(false);
        }
    }

    setLoading(isLoading) {
        this.submitButton.disabled = isLoading;
        this.submitButton.textContent = isLoading ? this.options.loadingText : this.originalButtonText;
    }

    showMessage(message, type) {
        // Remove any existing message
        const existingMessage = this.form.querySelector('.newsletter-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create and add new message
        const messageElement = document.createElement('div');
        messageElement.className = `newsletter-message ${type}`;
        messageElement.textContent = message;
        this.form.appendChild(messageElement);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// Initialize newsletter forms when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Footer newsletter form
    new NewsletterForm('footer-email-form');

    // Homepage newsletter form (if exists)
    new NewsletterForm('home-email-form');

    // Podcast page newsletter form (if exists)
    new NewsletterForm('podcast-email-form');
});
