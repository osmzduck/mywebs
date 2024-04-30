
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

function revealTimelineBlocks() {
    const blocks = document.querySelectorAll('.timeline-block');
    blocks.forEach(block => {
        const blockTop = block.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (blockTop < windowHeight * 0.8) {
            block.style.transform = 'translateX(0)';
            block.style.opacity = '1';
        }
    });
}

window.addEventListener('scroll', revealTimelineBlocks);
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
const previewImage = certificatePreview.querySelector('img');

certificates.forEach(certificate => {
    certificate.addEventListener('click', (event) => {
        event.stopPropagation();
        const imgSrc = certificate.querySelector('img').src;
        previewImage.src = imgSrc;
        certificatePreview.style.display = 'flex';
    });
});

previewImage.addEventListener('click', () => {
    const baseUrl = previewImage.src.replace('i.ibb.co', 'ibb.co').split('/').slice(0, -1).join('/');
    window.open(baseUrl, '_blank');
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
    "i have no idea what to say here",
    "yeah youve seen the red text. go up already.",
    "alright i guess you can have this hint: ceaser! its a ceaser ####er.",
    "ok now ive really lost all talking points, UNTILL NEXT TIME"
];

let currentMessageIndex = 0;
let currentMessage = '';
let isDeleting = false;
let typingSpeed = 100;

function typeMessage() {
    const currentChar = messages[currentMessageIndex].charAt(currentMessage.length);
    if (isDeleting) {
                if (currentMessage.length > 1) {
            currentMessage = currentMessage.slice(0, -1);
        } else {
            currentMessage = ' ';
        currentMessage = currentMessage.slice(0, -1);
    } else {
        currentMessage += currentChar;
        }
    } else {
        currentMessage += currentChar;
     }
    typingEffect.textContent = currentMessage;
    typingSpeed = isDeleting ? 30 : 100;
    if (!isDeleting && currentMessage === messages[currentMessageIndex]) {
        typingSpeed = 200;
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
    setTimeout(typeMessage, 10);
    setTimeout(() => {
        secretMessage.textContent = "Shh... go click the hacker icon up top, its a secret! dont tell anyone.";
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

// Attach event handler to the decrypt game icon
document.querySelector('.secret-game.game-link').addEventListener('click', openGameModal);
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

// Modify the existing cursor trail effect
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
    decryptButton.addEventListener('click', decryptMessage);
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
// Add to scripts.js
document.querySelectorAll('.certificate').forEach(certificate => {
    certificate.addEventListener('mousemove', function(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.target.style.transform = `rotateX(${(y - rect.height/2)/10}deg) rotateY(${(x - rect.width/2)/10}deg)`;
    });

    certificate.addEventListener('mouseout', function(e) {
        e.target.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

document.getElementById('interactive-link').addEventListener('click', function() {
    document.getElementById('game-modal').style.display = 'block';
});

// Add these functions to the end of your scripts.js file
function openGameModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    const modalContent = document.querySelector('.modal-content');
        modalContent.classList.add('show');
    }, 50);
}

function closeGameModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'none';
    const modalContent = document.querySelector('.modal-content');
    modal.classList.remove('show');
    modalContent.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 500);
}

function decryptMessage() {
    const key = document.getElementById('decryption-key').value.trim();
    const encryptedMessage = "Uif tfdsfu up tvddftt jt dpotjtufodz.";
    let decryptedMessage = '';
    
    if (key.toLowerCase() === 'consistency') {
        decryptedMessage = "The secret to success is consistency.";
        document.getElementById('decrypted-message').textContent = decryptedMessage;
        triggerConfetti();
        showCelebration(); // Add this line to trigger the animations
    } else {
        document.getElementById('decrypted-message').textContent = "Wrong key, try again!";
    }
}

function decryptMessage() {
    const key = document.getElementById('decryption-key').value.trim();
    const encryptedMessage = "Uif tfdsfu up tvddftt jt dpotjtufodz.";
    let decryptedMessage = '';
    
    if (key.toLowerCase() === 'consistency') {
        decryptedMessage = "سر النجاح هو الاتساق.";
        document.getElementById('decrypted-message').textContent = decryptedMessage;
        triggerConfetti();
        showCelebration();
    } else {
        document.getElementById('decrypted-message').textContent = "مفتاح خاطئ، حاول مرة أخرى!";
    }
}

function triggerConfetti() {
    const modalConfettiSettings = {
        target: 'modal-confetti-canvas',
        max: 200,
        size: 1,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
        clock: 25,
        rotate: true,
        width: 500,
        height: 500,
        start_from_edge: true,
        respawn: false
    };
    const modalConfetti = new ConfettiGenerator(modalConfettiSettings);
    modalConfetti.render();

    setTimeout(() => modalConfetti.clear(), 3000);
}

// Add these functions to the end of your scripts.js file
function openGameModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'flex';
    const modalContent = document.querySelector('.modal-content');
    modal.classList.add('show');
    modalContent.classList.add('show');
}

function closeGameModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'none';
    const modalContent = document.querySelector('.modal-content');
    modal.classList.remove('show');
    modalContent.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 500);
}

function decryptMessage() {
    const key = document.getElementById('decryption-key').value.trim();
    const encryptedMessage = "Uif tfdsfu up tvddftt jt dpotjtufodz.";
    let decryptedMessage = '';
    
    if (key.toLowerCase() === 'consistency') {
        decryptedMessage = "The secret to success is consistency.";
        document.getElementById('decrypted-message').textContent = decryptedMessage;
        triggerConfetti();
    } else {
        document.getElementById('decrypted-message').textContent = "Wrong key, try again!";
    }
}

function triggerConfetti() {
    // Assume confetti.js is already included
    const confettiSettings = { target: 'confetti-canvas', width: 800, height: 600 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => confetti.clear(), 5000);  // Stop confetti after 5 seconds
}

// Attach event handler to secret link or button
document.getElementById('interactive-link').addEventListener('click', openGameModal);

function triggerConfettiOnModal() {
    const modalConfettiSettings = {
        target: 'modal-confetti-canvas',
        max: 200,
        size: 1,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
        clock: 25,
        rotate: true,
        width: 500,
        height: 500,
        start_from_edge: true,
        respawn: false
    };
    const modalConfetti = new ConfettiGenerator(modalConfettiSettings);
    modalConfetti.render();

    setTimeout(() => modalConfetti.clear(), 3000);
}

const translatorBtn = document.getElementById('translator-btn');
const body = document.body;

translatorBtn.addEventListener('click', () => {
    // Create the animation element
    const translateAnimation = document.createElement('div');
    translateAnimation.classList.add('translate-animation');
    body.appendChild(translateAnimation);

    // Trigger the animation
    setTimeout(() => {
        translateAnimation.classList.add('active');
    }, 100);

    // Simulate translation (replace with actual translation logic)
    setTimeout(() => {
        body.style.direction = 'rtl';
        // Add translation logic here, e.g., using a translation library or API
        // Update the text content of elements with their Arabic translations
    }, 600);

    // Remove the animation element after the animation is complete
    setTimeout(() => {
        body.removeChild(translateAnimation);
    }, 1100);
});
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
        window.location.href = 'index-ar.html';
    }, 600);
});

function showCelebration() {
    const modalOverlay = document.querySelector('.modal-overlay');
    const spotlight = document.querySelector('.spotlight');
    const confettiCanvas = document.querySelector('.confetti');
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-audience-light-applause-354.mp3');

    modalOverlay.classList.add('show');
    spotlight.classList.add('show');
    audio.play();

    const confettiSettings = { target: confettiCanvas, size: 2, rotate: true, max: 300 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(() => {
        modalOverlay.classList.remove('show');
        spotlight.classList.remove('show');
        confetti.clear();
    }, 5000);
}
