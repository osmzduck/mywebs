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

secretGameIcon.addEventListener('click', () => {
    gameModal.style.display = 'flex';
    gameModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
});

const closeModal = gameModal.querySelector('.close');
closeModal.addEventListener('click', () => {
    gameModal.style.display = 'none';
    gameModal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Confetti effect setup
const confettiCanvas = document.getElementById('confetti-canvas');
confettiCanvas.style.zIndex = '9999'; // Ensure confetti is on top

const confettiSettings = { target: confettiCanvas, max: 80 };
const confetti = new ConfettiGenerator(confettiSettings);

function triggerConfetti() {
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', triggerConfetti);

// Ensure all modal-related elements are above all other content
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    modal.style.zIndex = '10001'; // Higher than confetti
})

