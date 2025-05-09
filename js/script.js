document.addEventListener('DOMContentLoaded', () => {
    // Email Form (Home Page)
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            // Replace with Mailchimp or API integration
            alert(`Thank you for joining, ${email}!`);
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
            alert(`Message sent from ${name}!`);
            contactForm.reset();
        });
    }
});
