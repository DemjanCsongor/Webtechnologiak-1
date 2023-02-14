const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        alert('Please enter your name.');
    } else {
        nameInput.classList.remove('error');
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error');
        alert('Please enter your email address.');
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        alert('Please enter a valid email address.');
    } else {
        emailInput.classList.remove('error');
    }

    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        alert('Please enter a message.');
    } else {
        messageInput.classList.remove('error');
    }
});

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}