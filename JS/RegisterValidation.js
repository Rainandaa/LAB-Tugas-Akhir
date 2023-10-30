const form = document.getElementById('registration-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    // Validation checks
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const gender = document.getElementById('gender').value;
    const agree = document.getElementById('agree').checked;

    if (name.length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
    }

    if (!email.includes('@')) {
        document.getElementById('email-error').textContent = 'Invalid email address';
    }

    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
    }

    if (gender === '') {
        document.getElementById('gender-error').textContent = 'Please select a gender';
    }

    if (!agree) {
        document.getElementById('agree-error').textContent = 'You must agree to the terms and conditions';
    }
});
