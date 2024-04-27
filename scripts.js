document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    document.body.style.boxShadow = `${x * 30}px ${y * 30}px 50px rgba(0,0,0,0.2)`;
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
