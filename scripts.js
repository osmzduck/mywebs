// Scroll down arrow animation
const scrollArrow = document.querySelector('.scroll-arrow');
const scrollCircle = document.querySelector('.scroll-circle');

scrollArrow.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollCircle.style.opacity = 0;
    } else {
        scrollCircle.style.opacity = 1;
    }
});

// Reveal sections on scroll
const sections = document.querySelectorAll('.section-reveal');

function revealSection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Interactive secret message
const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffect = document.getElementById('typing-effect');
const secretMessage = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');

interactiveLink.addEventListener('click', () => {
    interactiveOverlay.style.display = 'flex';
    setTimeout(() => {
        typingEffect.textContent = 'Decoding secret message...';
        typingEffect.classList.add('typing-effect');
        setTimeout(() => {
            typingEffect.textContent = 'Message decoded!';
            setTimeout(() => {
                secretMessage.textContent = 'Congratulations! You found the secret message. Keep exploring and never stop learning!';
                secretMessage.style.opacity = 1;
            }, 1000);
        }, 2000);
    }, 500);
});

closeButton.addEventListener('click', () => {
    interactiveOverlay.style.display = 'none';
    typingEffect.textContent = '';
    typingEffect.classList.remove('typing-effect');
    secretMessage.textContent = '';
    secretMessage.style.opacity = 0;
});

// Certificate preview
const certificates = document.querySelectorAll('.certificate');
const certificatePreview = document.getElementById('certificate-preview');
const certificateImage = certificatePreview.querySelector('img');
const closePreview = document.querySelector('.close-preview');

certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        const imgSrc = certificate.querySelector('img').getAttribute('src');
        certificateImage.setAttribute('src', imgSrc);
        certificatePreview.style.display = 'flex';
    });
});

closePreview.addEventListener('click', () => {
    certificatePreview.style.display = 'none';
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
let trailElements = [];

function createTrailElement(x, y) {
    const element = document.createElement('div');
    element.className = 'trail-element';
    element.style.left = x + 'px';
    element.style.top = y + 'px';
    cursorTrail.appendChild(element);
    trailElements.push(element);

    setTimeout(() => {
        element.remove();
        trailElements = trailElements.filter(trail => trail !== element);
    }, 1000);
}

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    createTrailElement(x, y);
});

// Confetti effect
const confettiCanvas = document.getElementById('confetti-canvas');
const confetti = new ConfettiGenerator({
    target: confettiCanvas,
    max: 100,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126]
    ],
    clock: 25,
    rotate: true,
    width: window.innerWidth,
    height: window.innerHeight
});

// Game modal
const gameModal = document.getElementById('game-modal');
const closeGameModal = document.querySelector('.close');
const decryptionKey = document.getElementById('decryption-key');
const decryptedMessage = document.getElementById('decrypted-message');
const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
const modalConfetti = new ConfettiGenerator({
    target: modalConfettiCanvas,
    max: 100,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126]
    ],
    clock: 25,
    rotate: true,
    width: gameModal.offsetWidth,
    height: gameModal.offsetHeight
});

function openGameModal() {
    gameModal.style.display = 'block';
}

function closeGameModal() {
    gameModal.style.display = 'none';
    decryptionKey.value = '';
    decryptedMessage.textContent = '';
    modalConfetti.clear();
}

function decryptMessage() {
    const key = decryptionKey.value.toLowerCase();
    if (key === 'consistency') {
        decryptedMessage.textContent = 'The secret to success is consistency.';
        modalConfetti.render();
    } else {
        decryptedMessage.textContent = 'Wrong key. Try again!';
    }
}

// GSAP animations
gsap.from('header', {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: 'power2.out'
});

gsap.from('.scroll-down', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.5
});

gsap.from('.section-reveal', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power2.out',
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.section-reveal',
        start: 'top 80%'
    }
});

gsap.from('.timeline-block', {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power2.out',
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.timeline-block',
        start: 'top 80%'
    }
});
