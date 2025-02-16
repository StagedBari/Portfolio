// Existing code for microphone button functionality
document.getElementById('microphone-button').addEventListener('click', function () {
    alert('How can I help you with my skills, experience, or projects?');
});

// Add other existing functionality for your portfolio page
// Example: Form submission behavior for the "Contact Me" form
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! I'll get back to you soon.`);
    } else {
        alert("Please fill in all fields.");
    }
});
