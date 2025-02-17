// Chatbot Button Redirect
document.getElementById('chatbot-button').addEventListener('click', function () {
    window.location.href = 'chatbot.html';
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! I'll get back to you soon.`);
    } else {
        alert("Please fill in all fields.");
    }
});
