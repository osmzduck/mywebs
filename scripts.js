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

const certificateImages = document.querySelectorAll('.certificate img');
certificateImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        cursor.classList.add('certificate-hover');
    });
    image.addEventListener('mouseleave', () => {
        cursor.classList.remove('certificate-hover');
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
    const text = "Wow, you have really dug deep, haven't you? Well, here's a secret: Success is not final, failure is not fatal: it is the courage to continue that counts! Now go and explore more!";
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

// Certificate preview
const certificatePreviewModal = document.getElementById('certificate-preview-modal');
const certificatePreviewImage = document.getElementById('certificate-preview-image');

function openCertificatePreview(imageSrc) {
    certificatePreviewImage.src = imageSrc;
    certificatePreviewModal.style.display = 'flex';
    certificatePreviewModal.classList.add('show');
    setTimeout(() => {
        certificatePreviewImage.classList.add('show');
    }, 100);
}

function closeCertificatePreview() {
    certificatePreviewImage.classList.remove('show');
    setTimeout(() => {
        certificatePreviewModal.style.display = 'none';
        certificatePreviewModal.classList.remove('show');
    }, 500);
}

const certificates = document.querySelectorAll('.certificate');
certificates.forEach(certificate => {
    certificate.addEventListener('click', (event) => {
        event.preventDefault();
        const imageSrc = event.target.closest('.certificate').querySelector('img').getAttribute('src');
        openCertificatePreview(imageSrc);
    });
});

// Secret game modal
const gameModal = document.getElementById('game-modal');
const decryptionKey = document.getElementById('decryption-key');
const decryptedMessage = document.getElementById('decrypted-message');
const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
const modalConfettiSettings = { target: modalConfettiCanvas };
const modalConfetti = new ConfettiGenerator(modalConfettiSettings);

function openGameModal() {
    gameModal.style.display = 'flex';
    gameModal.classList.add('show');
    document.body.classList.add('modal-open');
    setTimeout(() => {
        gameModal.querySelector('.modal-content').classList.add('show');
    }, 100);
}

function closeGameModal() {
    gameModal.querySelector('.modal-content').classList.remove('show');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
        gameModal.style.display = 'none';
        gameModal.classList.remove('show');
        decryptionKey.value = '';
        decryptedMessage.textContent = '';
    }, 500);
}

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
        gameModal.querySelector('.modal-content').classList.add('shake');
        setTimeout(() => {
            gameModal.querySelector('.modal-content').classList.remove('shake');
        }, 500);
    }
}

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
