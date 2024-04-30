document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 30000);
});

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.body.style.backgroundColor = `rgba(106, 17, 203, ${1 - scrolled / 1000})`;
});

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
            block.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealTimelineBlocks);

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

document.querySelector('.close-preview').addEventListener('click', function() {
    certificatePreview.style.display = 'none';
});

const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffect = document.getElementById('typing-effect');
const secretMessage = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');

const messages = [
    "Welcome to Essam Turki's interactive CV!",
    "i have no idea what to say here",
    "yeah yove seen the red text. go up already.",
    "alright i guess you win, its a ceaser ciph... happy now?",
    "ok now ive really lost all talking points, UNTILL NEXT TIME"
];

let currentMessageIndex = 0;
let currentMessage = '';
let isDeleting = false;
let typingSpeed = 100;

function typeMessage() {
    const currentChar = messages[currentMessageIndex].charAt(currentMessage.length);
    if (isDeleting) {
        if (currentMessage.length > 0) {
            currentMessage = currentMessage.slice(0, -1);
        }
    } else {
        currentMessage += currentChar;
    }
    typingEffect.textContent = currentMessage;
    if (!isDeleting && currentMessage === messages[currentMessageIndex]) {
        isDeleting = true;
        setTimeout(typeMessage, 200);
    } else if (isDeleting && currentMessage === '') {
        isDeleting = false;
        currentMessageIndex++;
        if (currentMessageIndex >= messages.length) {
            currentMessageIndex = 0;
        }
        setTimeout(typeMessage, 500);
    } else {
        setTimeout(typeMessage, typingSpeed);
    }
}

interactiveLink.addEventListener('click', () => {
    interactiveOverlay.style.display = 'flex';
    interactiveContent.style.display = 'block';
    typeMessage();
    setTimeout(() => {
        secretMessage.textContent = "Shh... go click the hacker icon up top, it's a secret! Don't tell anyone.";
        secretMessage.style.opacity = '1';
    }, 8000);
});

closeButton.addEventListener('click', () => {
    interactiveOverlay.style.display = 'none';
    interactiveContent.style.display = 'none';
    currentMessage = '';
    isDeleting = false;
    currentMessageIndex = 0;
    secretMessage.style.opacity = '0';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scrollDown = document.querySelector('.scroll-down');
const bioSection = document.getElementById('bio');

scrollDown.addEventListener('click', () => {
    bioSection.scrollIntoView({ behavior: 'smooth' });
    scrollDown.classList.add('hidden');
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollDown.classList.add('hidden');
    } else {
        scrollDown.classList.remove('hidden');
    }
});

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

function openGameModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'flex';
}

function closeGameModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'none';
}

function decryptMessage() {
    const key = document.getElementById('decryption-key').value.trim().toLowerCase();
    const encryptedMessage = "Uif tfdsfu up tvddftt jt dpotjtufodz.";
    let decryptedMessage = '';

    if (key === 'consistency') {
        decryptedMessage = "The secret to success is consistency.";
        document.getElementById('decrypted-message').textContent = decryptedMessage;
        triggerConfetti();
    } else {
        document.getElementById('decrypted-message').textContent = "Wrong key, try again!";
    }
}

function triggerConfetti() {
    const confettiSettings = { target: 'confetti-canvas', width: 800, height: 600 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => confetti.clear(), 5000);
}

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
    const translateAnimation = document.createElement('div');
    translateAnimation.classList.add('translate-animation');
    body.appendChild(translateAnimation);

    setTimeout(() => {
        translateAnimation.classList.add('active');
    }, 100);

    setTimeout(() => {
        body.style.direction = 'rtl';
    }, 600);

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
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 30000);
});

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.body.style.backgroundColor = `rgba(106, 17, 203, ${1 - scrolled / 1000})`;
});

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
            block.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealTimelineBlocks);

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

document.querySelector('.close-preview').addEventListener('click', function() {
    certificatePreview.style.display = 'none';
});

const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffect = document.getElementById('typing-effect');
const secretMessage = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');

const messages = [
    "Welcome to Essam Turki's interactive CV!",
    "i have no idea what to say here",
    "yeah yove seen the red text. go up already.",
    "alright i guess you win, its a ceaser ciph... happy now?",
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
        if (currentMessageIndex >= messages.length) {
            currentMessageIndex = 0;
        }
    }
    setTimeout(typeMessage, typingSpeed);
}

interactiveLink.addEventListener('click', () => {
    interactiveOverlay.style.display = 'flex';
    interactiveContent.style.display = 'block';
    setTimeout(typeMessage, 100);
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
    currentMessageIndex = 0;
    secretMessage.style.opacity = '0';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scrollDown = document.querySelector('.scroll-down');
const bioSection = document.getElementById('bio');

scrollDown.addEventListener('click', () => {
    bioSection.scrollIntoView({ behavior: 'smooth' });
    scrollDown.classList.add('hidden');
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollDown.classList.add('hidden');
    } else {
        scrollDown.classList.remove('hidden');
    }
});

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

function openGameModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'flex';
}

function closeGameModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'none';
}

function decryptMessage() {
    const key = document.getElementById('decryption-key').value.trim().toLowerCase();
    const encryptedMessage = "Uif tfdsfu up tvddftt jt dpotjtufodz.";
    let decryptedMessage = '';
    
    if (key === 'consistency') {
        decryptedMessage = "The secret to success is consistency.";
        document.getElementById('decrypted-message').textContent = decryptedMessage;
        triggerConfetti();
    } else {
        document.getElementById('decrypted-message').textContent = "Wrong key, try again!";
    }
}

function triggerConfetti() {
    const confettiSettings = { target: 'confetti-canvas', width: 800, height: 600 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => confetti.clear(), 5000);  // Stop confetti after 5 seconds
}

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

