// Scroll-down arrow functionality
const scrollDownArrow = document.querySelector('.scroll-down-arrow');
scrollDownArrow.addEventListener('click', () => {
  const nextSection = document.querySelector('main section');
  nextSection.scrollIntoView({ behavior: 'smooth' });
});

// Reveal sections on scroll
const sections = document.querySelectorAll('main section');
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
  section.classList.add('hidden');
});

// Certificate hover effect
const certificateItems = document.querySelectorAll('.certificate-item');
certificateItems.forEach(item => {
  const img = item.querySelector('img');
  const overlay = item.querySelector('.overlay');
  
  item.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
    overlay.style.opacity = '1';
  });
  
  item.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    overlay.style.opacity = '0';
  });
});

// Interactive secret message
const secretMessageOverlay = document.querySelector('.secret-message-overlay');
const secretMessageButton = document.querySelector('.secret-message-button');
const secretMessageContent = document.querySelector('.secret-message-content');
const closeSecretMessage = document.querySelector('.close-secret-message');

secretMessageButton.addEventListener('click', () => {
  secretMessageOverlay.classList.add('active');
  setTimeout(() => {
    secretMessageContent.classList.add('active');
  }, 500);
});

closeSecretMessage.addEventListener('click', () => {
  secretMessageContent.classList.remove('active');
  setTimeout(() => {
    secretMessageOverlay.classList.remove('active');
  }, 500);
});

// Background particles effect
particlesJS('particles-js', {
  // Particles configuration options
  // Refer to the particles.js library documentation
});

// Cursor trail effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Confetti effect on form submission
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  // Perform form submission logic here
  
  // Trigger confetti effect
  const confettiSettings = { 
    // Confetti configuration options
    // Refer to the canvas-confetti library documentation
  };
  confetti(confettiSettings);
  
  // Reset form
  form.reset();
});

// Secret game modal
const secretGameButton = document.querySelector('.secret-game-button');
const secretGameModal = document.querySelector('.secret-game-modal');
const closeSecretGame = document.querySelector('.close-secret-game');

secretGameButton.addEventListener('click', () => {
  secretGameModal.classList.add('active');
});

closeSecretGame.addEventListener('click', () => {
  secretGameModal.classList.remove('active');
});

// Text animation for section titles
const sectionTitles = document.querySelectorAll('main section h2');
sectionTitles.forEach(title => {
  const text = title.textContent;
  const splitText = text.split('');
  
  title.textContent = '';
  splitText.forEach((char, index) => {
    title.innerHTML += `<span style="--delay: ${index * 50}ms">${char}</span>`;
  });
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 200}ms`;
});

// Language translation animation
const languageLinks = document.querySelectorAll('.language-link');
languageLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetLanguage = link.getAttribute('data-lang');
    
    // Perform language translation logic here
    // Update the content and styles based on the target language
    
    // Apply translation animation
    document.documentElement.lang = targetLanguage;
    document.body.classList.add('translate-active');
    setTimeout(() => {
      document.body.classList.remove('translate-active');
    }, 1000);
  });
});
