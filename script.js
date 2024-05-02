document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const registrationMessage = document.getElementById('registration-message');
    const passwordInput = document.getElementById('signup-password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (passwordInput.value !== confirmPasswordInput.value) {
            registrationMessage.textContent = 'Las contraseñas no coinciden.';
            registrationMessage.classList.remove('hidden');
        } else {
            registrationMessage.textContent = 'Usuario registrado correctamente.';
            registrationMessage.classList.remove('hidden');
            registrationForm.reset();
        }
    });
});
