document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        if (!validateForm()) {
            e.preventDefault();
        }
    });

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        let isValid = true;

        // Reset previous validation styles
        nameInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');
        messageInput.classList.remove('invalid');

        // Validate name
        if (nameInput.value.trim() === '') {
            isValid = false;
            nameInput.classList.add('invalid');
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add('invalid');
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            isValid = false;
            messageInput.classList.add('invalid');
        }

        return isValid;
    }
});
