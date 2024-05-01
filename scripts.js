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
    section.classList.add('section-hidden');
});

// Interactive secret message
const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffect = document.getElementById('typing-effect');
const secretMessage = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');

interactiveLink.addEventListener('click', () => {
    interactiveOverlay.style.display = 'block';
    interactiveContent.style.display = 'block';
    
    const text = "You've discovered the secret! Keep exploring and unlocking new possibilities.";
    let i = 0;
    
    const typing = setInterval(() => {
        if (i < text.length) {
            typingEffect.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            secretMessage.innerHTML = "Congratulations! 🎉";
        }
    }, 50);
});

closeButton.addEventListener('click', () => {
    interactiveOverlay.style.display = 'none';
    interactiveContent.style.display = 'none';
    typingEffect.innerHTML = "";
    secretMessage.innerHTML = "";
});

// Certificate preview
const certificates = document.querySelectorAll('.certificate');
const certificatePreview = document.getElementById('certificate-preview');
const previewImage = certificatePreview.querySelector('img');
const closePreview = document.querySelector('.close-preview');

certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        const imgSrc = certificate.querySelector('img').getAttribute('src');
        previewImage.setAttribute('src', imgSrc);
        certificatePreview.style.display = 'block';
    });
});

closePreview.addEventListener('click', () => {
    certificatePreview.style.display = 'none';
});

// Background particles animation
particlesJS('background-particles', {
    particles: {
        number: {
            value: 50,
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
let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;
let speed = 0.1;

function animate() {
    let distX = mouseX - trailX;
    let distY = mouseY - trailY;
    
    trailX += distX * speed;
    trailY += distY * speed;
    
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';
    
    requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
});

// Confetti animation
const confettiSettings = {
    target: 'confetti-canvas',
    max: 100,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
    clock: 25,
    rotate: true,
    width: window.innerWidth,
    height: window.innerHeight,
    start_from_edge: true,
    respawn: true
};

const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

// Game modal
const gameModal = document.getElementById('game-modal');
const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
const decryptionKey = document.getElementById('decryption-key');
const decryptedMessage = document.getElementById('decrypted-message');

function openGameModal() {
    gameModal.style.display = 'block';
}

function closeGameModal() {
    gameModal.style.display = 'none';
    decryptionKey.value = '';
    decryptedMessage.textContent = '';
}

function decryptMessage() {
    const key = decryptionKey.value.toLowerCase();
    const encryptedMessage = "Uif tfdsfu up tvddftt jt dpotjtufodz.";
    let decrypted = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        let charCode = encryptedMessage.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 - (key.length % 26) + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 - (key.length % 26) + 26) % 26) + 97;
        }

        decrypted += String.fromCharCode(charCode);
    }

    if (key === 'consistency') {
        decryptedMessage.textContent = decrypted;
        decryptedMessage.style.color = 'green';

        const modalConfettiSettings = {
            target: 'modal-confetti-canvas',
            max: 100,
            size: 1,
            animate: true,
            props: ['circle', 'square', 'triangle', 'line'],
            colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
            clock: 25,
            rotate: true,
            width: modalConfettiCanvas.offsetWidth,
            height: modalConfettiCanvas.offsetHeight,
            start_from_edge: true,
            respawn: false
        };

        const modalConfetti = new ConfettiGenerator(modalConfettiSettings);
        modalConfetti.render();
    } else {
        decryptedMessage.textContent = 'Wrong key. Try again!';
        decryptedMessage.style.color = 'red';
    }
}
