// Scroll down arrow animation
const scrollArrow = document.querySelector('.scroll-arrow');
const scrollCircle = document.querySelector('.scroll-circle');

window.addEventListener('load', () => {
  anime({
    targets: scrollArrow,
    translateY: [0, 10],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 800
  });

  anime({
    targets: scrollCircle,
    scale: [1, 1.1],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 800
  });
});

// Section reveal animation
const sections = document.querySelectorAll('.section-reveal');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      section.classList.add('visible');
    }
  });
});

// Certificate gallery hover effect
const certificates = document.querySelectorAll('.certificate');

certificates.forEach(certificate => {
  certificate.addEventListener('mouseover', () => {
    certificate.classList.add('hovered');
  });

  certificate.addEventListener('mouseout', () => {
    certificate.classList.remove('hovered');
  });
});

// Certificate preview
const certificatePreview = document.getElementById('certificate-preview');
const previewImage = certificatePreview.querySelector('img');
const closePreview = certificatePreview.querySelector('.close-preview');

certificates.forEach(certificate => {
  certificate.addEventListener('click', () => {
    const imageSource = certificate.querySelector('img').src;
    previewImage.src = imageSource;
    certificatePreview.style.display = 'flex';
  });
});

closePreview.addEventListener('click', () => {
  certificatePreview.style.display = 'none';
});

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
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
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

// Cursor trail
const cursorTrail = document.getElementById('cursor-trail');

document.addEventListener('mousemove', (e) => {
  cursorTrail.style.left = `${e.clientX}px`;
  cursorTrail.style.top = `${e.clientY}px`;
});

// Interactive link
const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffect = document.getElementById('typing-effect');
const secretMessage = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');

const messages = [
  'Welcome to my secret world!',
  'Prepare to be amazed...',
  'Just kidding, it\'s not that exciting.',
  'But hey, at least you found the secret!',
  'Congratulations, you\'re one of the few who made it this far.',
  'Now go forth and conquer the world, my friend!'
];

let currentMessageIndex = 0;
let currentMessageCharIndex = 0;

function typeMessage() {
  if (currentMessageCharIndex < messages[currentMessageIndex].length) {
    typingEffect.textContent += messages[currentMessageIndex].charAt(currentMessageCharIndex);
    currentMessageCharIndex++;
    setTimeout(typeMessage, 50);
  } else {
    currentMessageCharIndex = 0;
    currentMessageIndex++;
    if (currentMessageIndex === messages.length) {
      currentMessageIndex = 0;
    }
    setTimeout(() => {
      typingEffect.textContent = '';
      typeMessage();
    }, 2000);
  }
}

interactiveLink.addEventListener('click', () => {
  interactiveOverlay.style.display = 'block';
  interactiveContent.style.display = 'block';
  typeMessage();
});

closeButton.addEventListener('click', () => {
  interactiveOverlay.style.display = 'none';
  interactiveContent.style.display = 'none';
  typingEffect.textContent = '';
  secretMessage.textContent = '';
});

// Confetti
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiContext = confettiCanvas.getContext('2d');
const confettiWidth = confettiCanvas.width = window.innerWidth;
const confettiHeight = confettiCanvas.height = window.innerHeight;

const confettiCount = 300;
const confettiParticles = [];

function Confetti(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.vx = Math.random() * 4 - 2;
  this.vy = Math.random() * -4;
  this.gravity = 0.1;
}

Confetti.prototype.draw = function() {
  confettiContext.beginPath();
  confettiContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  confettiContext.fillStyle = this.color;
  confettiContext.fill();
};

Confetti.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += this.gravity;

  if (this.y + this.radius > confettiHeight) {
    this.y = confettiHeight - this.radius;
    this.vy *= -0.5;
  }

  if (this.x - this.radius < 0 || this.x + this.radius > confettiWidth) {
    this.vx *= -1;
  }
};

function createConfetti() {
  for (let i = 0; i < confettiCount; i++) {
    const x = Math.random() * confettiWidth;
    const y = Math.random() * confettiHeight;
    const radius = Math.random() * 4 + 1;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiParticles.push(new Confetti(x, y, radius, color));
  }
}

function drawConfetti() {
  confettiContext.clearRect(0, 0, confettiWidth, confettiHeight);
  confettiParticles.forEach((particle) => {
    particle.draw();
    particle.update();
  });
  requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();

// Game modal
const gameModal = document.getElementById('game-modal');
const decryptionKey = document.getElementById('decryption-key');
const decryptedMessage = document.getElementById('decrypted-message');
const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
const modalConfettiContext = modalConfettiCanvas.getContext('2d');
const modalConfettiWidth = modalConfettiCanvas.width = gameModal.offsetWidth;
const modalConfettiHeight = modalConfettiCanvas.height = gameModal.offsetHeight;

const modalConfettiCount = 100;
const modalConfettiParticles = [];

function ModalConfetti(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.vx = Math.random() * 4 - 2;
  this.vy = Math.random() * -4;
  this.gravity = 0.1;
}

ModalConfetti.prototype.draw = function() {
  modalConfettiContext.beginPath();
  modalConfettiContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  modalConfettiContext.fillStyle = this.color;
  modalConfettiContext.fill();
};

ModalConfetti.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += this.gravity;

  if (this.y + this.radius > modalConfettiHeight) {
    this.y = modalConfettiHeight - this.radius;
    this.vy *= -0.5;
  }

  if (this.x - this.radius < 0 || this.x + this.radius > modalConfettiWidth) {
    this.vx *= -1;
  }
};

function createModalConfetti() {
  for (let i = 0; i < modalConfettiCount; i++) {
    const x = Math.random() * modalConfettiWidth;
    const y = Math.random() * modalConfettiHeight;
    const radius = Math.random() * 4 + 1;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    modalConfettiParticles.push(new ModalConfetti(x, y, radius, color));
  }
}

function drawModalConfetti() {
  modalConfettiContext.clearRect(0, 0, modalConfettiWidth, modalConfettiHeight);
  modalConfettiParticles.forEach((particle) => {
    particle.draw();
    particle.update();
  });
  requestAnimationFrame(drawModalConfetti);
}

function openGameModal() {
  gameModal.style.display = 'block';
  createModalConfetti();
  drawModalConfetti();
}

function closeGameModal() {
  gameModal.style.display = 'none';
  modalConfettiContext.clearRect(0, 0, modalConfettiWidth, modalConfettiHeight);
  modalConfettiParticles.length = 0;
  decryptionKey.value = '';
  decryptedMessage.textContent = '';
}

function decryptMessage() {
  const key = decryptionKey.value.toLowerCase();
  const encryptedMessage = 'Uif tfdsfu up tvddftt jt dpotjtufodz.';
  let decrypted = '';

  for (let i = 0; i < encryptedMessage.length; i++) {
    const charCode = encryptedMessage.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      decrypted += String.fromCharCode(((charCode - 97 + key.charCodeAt(i % key.length) - 97) % 26) + 97);
    } else {
      decrypted += encryptedMessage.charAt(i);
    }
  }

  if (decrypted === 'The secret to success is consistency.') {
    decryptedMessage.textContent = 'Congratulations! You decrypted the message correctly.';
    confetti.render();
  } else {
    decryptedMessage.textContent = 'Sorry, that\'s not the correct key. Try again!';
  }
}
