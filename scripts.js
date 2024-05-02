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
    scrollCircle.style.opacity = window.scrollY > 0 ? 0 : 1;
});

// Reveal sections on scroll
const sections = document.querySelectorAll('.section-reveal');

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

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
    });
});

closePreviewButton.addEventListener('click', () => {
    certificatePreview.style.display = 'none';
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
    startTypingEffect();
});

closeButton.addEventListener('click', () => {
    interactiveOverlay.style.display = 'none';
    interactiveContent.style.display = 'none';
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
document.addEventListener('mousemove', (e) => {
    cursorTrail.style.left = e.clientX + 'px';
    cursorTrail.style.top = e.clientY + 'px';
});

// Confetti effect on form submission
const form = document.querySelector('form');
const confettiCanvas = document.getElementById('confetti-canvas');
const confetti = new ConfettiGenerator({ target: confettiCanvas });

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
const modalConfetti = new ConfettiGenerator({ target: modalConfettiCanvas });

function openGameModal() {
    gameModal.style.display = 'block';
}

function closeGameModal() {
    gameModal.style.display = 'none';
    decryptionKey.value = '';
    decryptedMessage.textContent = '';
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
