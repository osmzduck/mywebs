// Custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('click', () => {
    cursor.classList.add('click');
    setTimeout(() => {
        cursor.classList.remove('click');
    }, 300);
});

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

const contactInputs = document.querySelectorAll('form input, form textarea');
contactInputs.forEach(input => {
    input.addEventListener('mouseover', () => {
        cursor.classList.add('input-hover');
    });
    input.addEventListener('mouseleave', () => {
        cursor.classList.remove('input-hover');
    });
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('section-hidden');
});

function revealSection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
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
const closeButton = document.getElementById('close-button');

interactiveLink.addEventListener('click', () => {
    interactiveOverlay.style.display = 'flex';
    interactiveContent.style.display = 'block';
    interactiveContent.classList.add('active');
});

closeButton.addEventListener('click', () => {
    interactiveOverlay.style.display = 'none';
    interactiveContent.style.display = 'none';
    interactiveContent.classList.remove('active');
});

// Secret game modal
const secretGameIcon = document.querySelector('.icon.secret-game');
const gameModal = document.getElementById('game-modal');

function openGameModal() {
    gameModal.style.display = 'flex';
    gameModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
}

function closeGameModal() {
    gameModal.style.display = 'none';
    gameModal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

secretGameIcon.addEventListener('click', openGameModal);
const closeModal = gameModal.querySelector('.close');
closeModal.addEventListener('click', closeGameModal);

// Confetti effect setup
const confettiCanvas = document.getElementById('confetti-canvas');
confettiCanvas.style.zIndex = '9999'; // Ensure confetti is on top

const confettiSettings = {
    target: confettiCanvas,
    max: 80,
    props: ['circle', 'square'],
    colors: ['#ffd700', '#ffdf00', '#ffd700', '#ffdf00']
};

const confettiSettings = { target: confettiCanvas, max: 80 };
const confetti = new ConfettiGenerator(confettiSettings);

function triggerConfetti() {
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', triggerConfetti);

// Certificate preview functionality
const certificates = document.querySelectorAll('.certificate');
const certificatePreview = document.getElementById('certificate-preview');
const certificatePreviewImage = certificatePreview.querySelector('img');
const closePreviewButton = certificatePreview.querySelector('.close-preview');

certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        const imgSrc = certificate.querySelector('img').getAttribute('src');
        certificatePreviewImage.setAttribute('src', imgSrc);
        certificatePreview.style.display = 'flex';
    });

    certificate.addEventListener('mouseover', () => {
        cursor.classList.add('certificate-hover');
    });

    certificate.addEventListener('mouseleave', () => {
        cursor.classList.remove('certificate-hover');
    });
});

closePreviewButton.addEventListener('click', () => {
    certificatePreview.style.display = 'none';
});

// Decryption game functionality
function decryptMessage() {
    const decryptionKey = document.getElementById('decryption-key').value;
    const decryptedMessage = document.getElementById('decrypted-message');

    if (decryptionKey === 'hacktheplanet') {
        decryptedMessage.textContent = 'Congratulations! You have unlocked the secret message.';
        decryptedMessage.classList.add('show');
        triggerModalConfetti();
    } else {
        decryptedMessage.textContent = 'Oops! Wrong decryption key. Try again.';
        decryptedMessage.classList.remove('show');
    }
}

// Modal confetti effect
const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
const modalConfettiSettings = { target: modalConfettiCanvas, max: 50 };
const modalConfetti = new ConfettiGenerator(modalConfettiSettings);

function triggerModalConfetti() {
    modalConfetti.render();
    setTimeout(() => {
        modalConfetti.clear();
    }, 3000);
}

// Custom cursor trail effect
const cursorTrail = document.getElementById('cursor-trail');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    setTimeout(() => {
        const trailElement = document.createElement('div');
        trailElement.classList.add('cursor-trail-element');
        trailElement.style.left = x + 'px';
        trailElement.style.top = y + 'px';
        cursorTrail.appendChild(trailElement);

        setTimeout(() => {
            trailElement.remove();
        }, 1000);
    }, 50);
});

// Typing effect for secret message
const typingEffectElement = document.getElementById('typing-effect');
const secretMessageElement = document.getElementById('secret-message');
const typingText = "You have discovered the hidden message! Congratulations, you're a true explorer.";

let typingIndex = 0;
const typingSpeed = 50;

function typeNextCharacter() {
    if (typingIndex < typingText.length) {
        typingEffectElement.innerHTML += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeNextCharacter, typingSpeed);
    } else {
        secretMessageElement.style.opacity = '1';
        secretMessageElement.style.transform = 'translateY(0)';
    }
}

interactiveLink.addEventListener('click', () => {
    setTimeout(typeNextCharacter, 1000);
});

// Background particles effect
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
            speed: 2,
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

// Scroll to top functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
