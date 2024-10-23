document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribeForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (!validateEmail(email)) {
                alert('Invalid email format.');
                event.preventDefault();
            } else if (password.length < 6) {
                alert('Password must be at least 6 characters.');
                event.preventDefault();
            } else if (password !== confirmPassword) {
                alert('Passwords do not match.');
                event.preventDefault();
            }
        });
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
