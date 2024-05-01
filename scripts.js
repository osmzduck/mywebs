// Enhanced Scroll down arrow animation with dynamic easing
const scrollArrow = document.querySelector('.scroll-arrow');
const scrollCircle = document.querySelector('.scroll-circle');

scrollArrow.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    const opacity = 1 - window.scrollY / window.innerHeight;
    scrollCircle.style.opacity = Math.max(opacity, 0);
});

// Dynamic section reveal with scaling effect
const sections = document.querySelectorAll('.section-reveal');

function revealSection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.style.transform = 'scale(1.05)';
            setTimeout(() => {
                entry.target.style.transform = 'scale(1)';
            }, 500);
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

// Enhanced Certificate hover effect with 3D transformation
const certificates = document.querySelectorAll('.certificate');
const certificatePreview = document.getElementById('certificate-preview');
const certificatePreviewImage = certificatePreview.querySelector('img');
const closePreviewButton = certificatePreview.querySelector('.close-preview');

certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        const imageSrc = certificate.querySelector('img').getAttribute('src');
        certificatePreviewImage.setAttribute('src', imageSrc);
        certificatePreview.style.display = 'flex';
        certificatePreview.style.transform = 'translateY(-100vh)';
        setTimeout(() => {
            certificatePreview.style.transform = 'translateY(0)';
        }, 300);
    });
});

closePreviewButton.addEventListener('click', () => {
    certificatePreview.style.transform = 'translateY(-100vh)';
    setTimeout(() => {
        certificatePreview.style.display = 'none';
    }, 300);
});

// Interactive secret message with voice synthesis
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
    speakSecretMessage();
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

function speakSecretMessage() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Congratulations! You have discovered a hidden secret. Keep exploring for more!";
    window.speechSynthesis.speak(msg);
}

// Enhanced Background particles effect with dynamic interaction
particlesJS.load('background-particles', 'particles-config.json', function() {
    console.log('callback - particles.js config loaded');
});

// Cursor trail effect with dynamic color change
const cursorTrail = document.getElementById('cursor-trail');
document.addEventListener('mousemove', (e) => {
    cursorTrail.style.left = e.clientX + 'px';
    cursorTrail.style.top = e.clientY + 'px';
    cursorTrail.style.backgroundColor = `hsl(${e.clientX % 360}, 100%, 50%)`;
});

// Confetti effect on form submission with sound
const form = document.querySelector('form');
const confettiCanvas = document.getElementById('confetti-canvas');
const confetti = new ConfettiGenerator({ target: confettiCanvas });
const audio = new Audio('confetti_sound.mp3');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    confetti.render();
    audio.play();
    setTimeout(() => {
        confetti.clear();
        form.reset();
    }, 3000);
});

// Enhanced Secret game modal with real-time decryption feedback
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

decryptionKey.addEventListener('input', () => {
    if (decryptionKey.value.toLowerCase() === 'consistency') {
        decryptedMessage.textContent = 'The secret to success is consistency.';
        modalConfetti.render();
        setTimeout(() => {
            modalConfetti.clear();
        }, 3000);
    } else {
        decryptedMessage.textContent = 'Keep trying...';
    }
});

// Language translation animation with improved visual feedback
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
