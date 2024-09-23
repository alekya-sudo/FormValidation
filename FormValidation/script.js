// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm(); // Call the validation function
});

function validateForm() {
    let isValid = true;

    // Full Name Validation
    const name = document.getElementById('name').value.trim();
    if (name.length < 5) {
        showError('nameError', 'Name must be at least 5 characters long');
        isValid = false;
    } else {
        hideError('nameError');
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email address');
        isValid = false;
    } else {
        hideError('emailError');
    }

    // Phone Number Validation
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === '123456789' || !phoneRegex.test(phone)) {
        showError('phoneError', 'Enter a valid 10-digit phone number');
        isValid = false;
    } else {
        hideError('phoneError');
    }

    // Password Validation
    const password = document.getElementById('password').value;
    const nameLower = name.toLowerCase();
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === nameLower) {
        showError('passwordError', 'Password must be at least 8 characters long and cannot be "password" or your name');
        isValid = false;
    } else {
        hideError('passwordError');
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    } else {
        hideError('confirmPasswordError');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
    errorElement.style.visibility = 'visible';
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.visibility = 'hidden';
}
