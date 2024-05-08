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

const certificates = document.querySelectorAll('.certificate');
certificates.forEach(certificate => {
    certificate.addEventListener('click', (e) => {
        e.preventDefault();
        const imageSrc = certificate.querySelector('img').getAttribute('src');
        const imageId = imageSrc.split('/')[3];
        window.open(`https://ibb.co/${imageId}`, '_blank');
    });
    


    certificate.addEventListener('mouseleave', () => {
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

// Rest of the scripts.js code...

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.querySelector('.scroll-circle').style.opacity = 0;
    } else {
        document.querySelector('.scroll-circle').style.opacity = 1;
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
certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        const imageSrc = certificate.querySelector('img').getAttribute('src');
    });
    
    certificate.addEventListener('mouseenter', () => {
        gsap.to(certificate, {
            duration: 0.3,
            scale: 1.05,
            rotationX: 10,
            rotationY: 10,
            ease: 'power1.inOut',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
        });
    });

    certificate.addEventListener('mouseleave', () => {
        gsap.to(certificate, {
            duration: 0.3,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            ease: 'power1.inOut',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        });
    });
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
    const text = "Wow, you have really digged down didn't ya?. well here's a secert: Success is not final, failure is not fatal: it is the courage to continue that counts!. now go! search smth!";
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

function openGameModal() {
    gameModal.style.display = 'flex';
    gameModal.classList.add('show');
    setTimeout(() => {
        gameModal.querySelector('.modal-content').classList.add('show');
    }, 100);
}

function closeGameModal() {
    gameModal.querySelector('.modal-content').classList.remove('show');
    setTimeout(() => {
        gameModal.style.display = 'none';
        gameModal.classList.remove('show');
        decryptionKey.value = '';
        decryptedMessage.textContent = '';
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

const parallaxSection = document.getElementById('parallax');
const parallaxLayers = document.querySelectorAll('.parallax-layer');
const parallaxLight = document.querySelector('.parallax-light');

parallaxSection.addEventListener('mousemove', (e) => {
    const x = (e.clientX - parallaxSection.offsetLeft) / parallaxSection.offsetWidth;
    const y = (e.clientY - parallaxSection.offsetTop) / parallaxSection.offsetHeight;

    parallaxLayers.forEach(layer => {
        const depth = layer.getAttribute('data-depth');
        const translateX = (x - 0.5) * 30 * depth;
        const translateY = (y - 0.5) * 30 * depth;
        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    });

    parallaxLight.style.opacity = 1;
    parallaxLight.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

parallaxSection.addEventListener('mouseleave', () => {
    parallaxLayers.forEach(layer => {
        layer.style.transform = 'translate3d(0, 0, 0)';
    });

    parallaxLight.style.opacity = 0;
});
