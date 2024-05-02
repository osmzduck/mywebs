// Scroll down arrow animation
const scrollArrow = document.querySelector('.scroll-arrow');
const scrollCircle = document.querySelector('.scroll-circle');

scrollCircle.addEventListener('click', () => {
    const bioSection = document.querySelector('#bio');
    bioSection.scrollIntoView({ behavior: 'smooth' });
});

// Section reveal animation
const sectionReveal = document.querySelectorAll('.section-reveal');

sectionReveal.forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
        },
    });
});

// Certificate gallery preview
const certificateImages = document.querySelectorAll('.certificate img');
const certificatePreview = document.getElementById('certificate-preview');
const previewImage = certificatePreview.querySelector('img');
const closePreviewBtn = certificatePreview.querySelector('.close-preview');

certificateImages.forEach((image) => {
    image.addEventListener('click', () => {
        previewImage.src = image.src;
        previewImage.alt = image.alt;
        certificatePreview.style.display = 'block';
    });
});

closePreviewBtn.addEventListener('click', () => {
    certificatePreview.style.display = 'none';
});

// Background particles animation
particlesJS('background-particles', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

// Cursor trail effect
const cursorTrail = document.getElementById('cursor-trail');
const cursorSize = 20;

document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.style.width = cursorSize + 'px';
    cursor.style.height = cursorSize + 'px';
    cursor.style.background = 'rgba(255, 255, 255, 0.7)';
    cursor.style.borderRadius = '50%';
    cursor.style.position = 'fixed';
    cursor.style.left = e.clientX - cursorSize / 2 + 'px';
    cursor.style.top = e.clientY - cursorSize / 2 + 'px';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursorTrail.appendChild(cursor);

    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// Confetti animation
const confettiSettings = { target: 'confetti-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

// Interactive secret message
const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffect = document.getElementById('typing-effect');
const secretMessage = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');

const message = "You found the secret message! Congratulations on your curiosity and exploration. Keep seeking knowledge and uncovering hidden treasures. The journey of learning never ends!";

interactiveLink.addEventListener('click', (e) => {
    e.preventDefault();
    interactiveOverlay.style.display = 'block';
    interactiveContent.style.display = 'block';
    
    let i = 0;
    const typing = setInterval(() => {
        typingEffect.textContent += message[i];
        i++;
        if (i === message.length) {
            clearInterval(typing);
            secretMessage.textContent = message;
            typingEffect.style.display = 'none';
        }
    }, 50);
});

closeButton.addEventListener('click', () => {
    interactiveOverlay.style.display = 'none';
    interactiveContent.style.display = 'none';
    typingEffect.textContent = '';
    secretMessage.textContent = '';
    typingEffect.style.display = 'block';
});

// Decryption game
const gameModal = document.getElementById('game-modal');
const decryptionKey = document.getElementById('decryption-key');
const decryptedMessage = document.getElementById('decrypted-message');
const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
const modalConfettiSettings = { target: 'modal-confetti-canvas' };
const modalConfetti = new ConfettiGenerator(modalConfettiSettings);

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
    const encryptedMessage = "Uif tfdsfu up tvddftt jt dpotjtufodz.";
    const userKey = decryptionKey.value.toLowerCase();

    if (userKey === 'consistency') {
        const decrypted = caesarCipher(encryptedMessage, -1);
        decryptedMessage.textContent = decrypted;
        decryptedMessage.style.color = 'green';
        modalConfetti.render();
    } else {
        decryptedMessage.textContent = 'Wrong key, try again!';
        decryptedMessage.style.color = 'red';
    }
}

function caesarCipher(str, shift) {
    let decrypted = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        decrypted += char;
    }
    return decrypted;
}
