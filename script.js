// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive elements
const serviceItems = document.querySelectorAll('#services li');
serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#ffcc00';
        item.style.color = '#fff';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '#fff';
        item.style.color = '#333';
    });

    item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent}!`);
    });
});

// Dynamic content loading
const portfolioSection = document.querySelector('#portfolio');
const portfolioData = [
    { image: 'image4.jpg', alt: 'Portfolio Item 4' },
    { image: 'image5.jpg', alt: 'Portfolio Item 5' },
    { image: 'image6.jpg', alt: 'Portfolio Item 6' }
];

function loadPortfolioItems() {
    portfolioData.forEach(item => {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.alt;
        portfolioSection.querySelector('.gallery').appendChild(img);
    });
}

// Lazy load portfolio items
const options = {
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadPortfolioItems();
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(portfolioSection);

// Form submission
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#message').value;

    // Perform form validation and submission logic here
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Reset form after submission
    contactForm.reset();
    alert('Thank you for your message! We will get back to you soon.');
});

// Easter egg - flip website upside down
const flipWebsite = () => {
    document.body.style.transform = 'rotate(180deg)';
    document.body.style.transition = 'transform 1s ease';
};

const secretCode = 'upsidedown';
let input = '';

document.addEventListener('keydown', e => {
    input += e.key;
    if (input.includes(secretCode)) {
        flipWebsite();
        input = '';
    }
});
