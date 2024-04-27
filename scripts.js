document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

// Mouse movement shadow effect
const header = document.querySelector('header');
document.addEventListener('mousemove', function(event) {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    header.style.boxShadow = `${-20 * x}px ${-20 * y}px 30px rgba(0, 0, 0, 0.5)`;
});
