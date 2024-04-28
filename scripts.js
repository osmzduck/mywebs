document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.body.style.backgroundColor = `rgba(106, 17, 203, ${1 - scrolled / 1000})`;
});

// Reveal sections on scroll
function revealSections() {
    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);

// Text animation
const heading = document.querySelector('h1');
const text = heading.textContent;
const letters = text.split('');

heading.textContent = '';

letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = `${index * 0.1}s`;
    heading.appendChild(span);
});

// Skills animation
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    skill.addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.classList.add('shake');
        setTimeout(() => {
            container.classList.remove('shake');
        }, 5000);
    });
});

// Certificate preview
const certificates = document.querySelectorAll('.certificate');
const certificatePreview = document.getElementById('certificate-preview');

certificates.forEach(certificate => {
    certificate.addEventListener('click', (event) => {
        event.stopPropagation();
        const imgSrc = certificate.querySelector('img').src;
        certificatePreview.querySelector('img').src = imgSrc;
        certificatePreview.style.display = 'flex';
    });
});

certificatePreview.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        window.open(event.target.src, '_blank');
    } else {
        certificatePreview.style.display = 'none';
    }
});

// Close button for certificate preview
document.querySelector('.close-preview').addEventListener('click', function() {
    certificatePreview.style.display = 'none';
});

// Interactive button and content
const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffect = document.getElementById('typing-effect');
const secretMessage = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');

const messages = [
    "Welcome to Essam Turki's interactive CV!",
    "Explore the world of cybersecurity and IT.",
    "Discover the power of knowledge and skills.",
    "Join the fight against the digital dark arts!",
    "Thank you for your interest. Until next time!"
];

let currentMessageIndex = 0;
let currentMessage = '';
let isDeleting = false;
let typingSpeed = 100;

function typeMessage() {
    const currentChar = messages[currentMessageIndex].charAt(currentMessage.length);
    if (isDeleting) {
        currentMessage = currentMessage.slice(0, -1);
    } else {
        currentMessage += currentChar;
    }
    typingEffect.textContent = currentMessage;
    typingSpeed = isDeleting ? 30 : 100;
    if (!isDeleting && currentMessage === messages[currentMessageIndex]) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentMessage === '') {
        isDeleting = false;
        currentMessageIndex++;
        if (currentMessageIndex === messages.length) {
            currentMessageIndex = 0;
        }
    }
    setTimeout(typeMessage, typingSpeed);
}

interactiveLink.addEventListener('click', () => {
    interactiveOverlay.style.display = 'flex';
    interactiveContent.style.display = 'block';
    setTimeout(typeMessage, 1000);
    setTimeout(() => {
        secretMessage.textContent = "Shh... Cybersecurity is not just a job, it's a lifestyle!";
        secretMessage.style.opacity = '1';
    }, 8000);
});

closeButton.addEventListener('click', () => {
    interactiveOverlay.style.display = 'none';
    interactiveContent.style.display = 'none';
    currentMessage = '';
    isDeleting = false;
    secretMessage.style.opacity = '0';
});

// Background particles
particlesJS('background-particles', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Cursor trail effect
const cursorTrail = document.getElementById('cursor-trail');
let trailParticles = [];

document.addEventListener('mousemove', (event) => {
    const particle = document.createElement('div');
    particle.classList.add('cursor-particle');
    particle.style.left = `${event.clientX}px`;
    particle.style.top = `${event.clientY}px`;
    cursorTrail.appendChild(particle);
    trailParticles.push(particle);

    setTimeout(() => {
        particle.style.transform = 'scale(0)';
        particle.style.opacity = '0';
        setTimeout(() => {
            cursorTrail.removeChild(particle);
            trailParticles = trailParticles.filter(p => p !== particle);
        }, 1000);
    }, 0);
});

// Confetti effect on form submission
const form = document.querySelector('form');
const confettiSettings = { target: 'confetti-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 30000);
    form.reset();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-down arrow functionality
const scrollDown = document.querySelector('.scroll-down');
const scrollCircle = document.querySelector('.scroll-circle');
const bioSection = document.getElementById('bio');

scrollDown.addEventListener('click', () => {
    bioSection.scrollIntoView({ behavior: 'smooth' });
    scrollDown.classList.add('hidden');
});

// Hide scroll-down arrow when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollDown.classList.add('hidden');
    } else {
        scrollDown.classList.remove('hidden');
    }
});
