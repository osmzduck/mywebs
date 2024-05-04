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
    section.classList.add('section-hidden');
});

// Certificate hover effect
const certificates = document.querySelectorAll('.certificate');
const certificatePreview = document.getElementById('certificate-preview');
const certificatePreviewImage = certificatePreview.querySelector('img');
const closePreviewButton = certificatePreview.querySelector('.close-preview');

certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        const imageSrc = certificate.querySelector('img').getAttribute('src');
        certificatePreviewImage.setAttribute('src', imageSrc);
        certificatePreview.style.display = 'flex';
        certificatePreview.classList.add('active');
    });

    certificate.addEventListener('mouseenter', () => {
        gsap.to(certificate, {
            duration: 0.3,
            scale: 1.05,
            rotationX: 10,
            rotationY: 10,
            ease: 'power1.inOut'
        });
    });

    certificate.addEventListener('mouseleave', () => {
        gsap.to(certificate, {
            duration: 0.3,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            ease: 'power1.inOut'
        });
    });
});

closePreviewButton.addEventListener('click', () => {
    certificatePreview.style.display = 'none';
    certificatePreview.classList.remove('active');
});

// Interactive secret message
const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffectElement = document.getElementById('typing-effect');
const secretMessageElement = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');

interactiveLink.addEventListener('click', () => {
    interactiveOverlay.style.display = 'block';
    interactiveContent.style.display = 'block';
    interactiveContent.classList.add('active');
    startTypingEffect();
});

closeButton.addEventListener('click', () => {
    interactiveOverlay.style.display = 'none';
    interactiveContent.style.display = 'none';
    interactiveContent.classList.remove('active');
    typingEffectElement.textContent = '';
    secretMessageElement.textContent = '';
});

function startTypingEffect() {
    const text = "You've stumbled upon a secret! Congratulations on finding it. As a reward, here's a hidden message: Success is not final, failure is not fatal: it is the courage to continue that counts. Keep exploring and unraveling the mysteries!";
    let i = 0;
    const typingSpeed = 50;

    function typeNextCharacter() {
        if (i < text.length) {
            typingEffectElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextCharacter, typingSpeed);
        } else {
            setTimeout(() => {
                gsap.to(secretMessageElement, {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out',
                    onComplete: () => {
                        confetti({
                            particleCount: 100,
                            spread: 70,
                            origin: { y: 0.6 },
                            zIndex: 9999
                        });
                    }
                });
                secretMessageElement.textContent = "🎉 Congratulations on discovering the secret message! 🎉";
            }, 1000);
        }
    }

    typeNextCharacter();
}

// Background particles effect
particlesJS.load('background-particles', 'particles-config.json');

// Cursor trail effect
const cursorTrail = document.getElementById('cursor-trail');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createTrailParticle() {
    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    particle.style.left = mouseX + 'px';
    particle.style.top = mouseY + 'px';
    cursorTrail.appendChild(particle);

    gsap.to(particle, {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: 'power2.out',
        onComplete: () => {
            particle.remove();
        }
    });
}

setInterval(createTrailParticle, 50);

// Confetti effect on form submission
const form = document.querySelector('form');
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiSettings = { target: confettiCanvas };
const confetti = new ConfettiGenerator(confettiSettings);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    confetti.render();

    setTimeout(() => {
        confetti.clear();
        form.reset();
    }, 3000);
});

// Secret game modal
const gameModal = document.getElementById('game-modal');
const closeModalButton = gameModal.querySelector('.close');
const decryptionKey = document.getElementById('decryption-key');
const decryptedMessage = document.getElementById('decrypted-message');
const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
const modalConfettiSettings = { target: modalConfettiCanvas };
const modalConfetti = new ConfettiGenerator(modalConfettiSettings);
const encryptedMessageElement = document.getElementById('encrypted-message');

function openGameModal() {
    gameModal.style.display = 'flex';
    gameModal.classList.add('show');
    setTimeout(() => {
        gameModal.querySelector('.modal-content').classList.add('show');
    }, 100);
    encryptedMessageElement.style.display = 'none';
}

function closeGameModal() {
    gameModal.querySelector('.modal-content').classList.remove('show');
    setTimeout(() => {
        gameModal.style.display = 'none';
        gameModal.classList.remove('show');
        decryptionKey.value = '';
        decryptedMessage.textContent = '';
        encryptedMessageElement.style.display = 'block';
    }, 500);
}

closeModalButton.addEventListener('click', closeGameModal);
window.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        closeGameModal();
    }
});

function decryptMessage() {
    const key = decryptionKey.value.toLowerCase();
    if (key === 'consistency') {
        decryptedMessage.textContent = 'The secret to success is consistency.';
        modalConfetti.render();

        setTimeout(() => {
            modalConfetti.clear();
        }, 3000);
    } else {
        decryptedMessage.textContent = 'Wrong decryption key. Try again!';
    }
}

// Shake animation on wrong decryption key
decryptionKey.addEventListener('input', () => {
    if (decryptionKey.value.toLowerCase() !== 'consistency') {
        gameModal.querySelector('.modal-content').classList.add('shake');
        setTimeout(() => {
            gameModal.querySelector('.modal-content').classList.remove('shake');
        }, 500);
    }
});

// Text animation for section titles
const sectionTitles = document.querySelectorAll('h2');

sectionTitles.forEach(title => {
    const letters = title.textContent.split('');
    title.textContent = '';

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        title.appendChild(span);
    });
});

// Timeline animation
const timelineBlocks = document.querySelectorAll('.timeline-block');

function animateTimelineBlock(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

const timelineObserver = new IntersectionObserver(animateTimelineBlock, {
    root: null,
    threshold: 0.5
});

timelineBlocks.forEach(block => {
    timelineObserver.observe(block);
});

// Language translation animation
const translatorLink = document.getElementById('translator-link');

translatorLink.addEventListener('click', function(e) {
    e.preventDefault();

    const translateAnimation = document.createElement('div');
    translateAnimation.classList.add('translate-animation');
    document.body.appendChild(translateAnimation);

    setTimeout(() => {
        translateAnimation.classList.add('active');
    }, 100);

    setTimeout(() => {
        window.location.href = translatorLink.getAttribute('href');
    }, 600);
});
