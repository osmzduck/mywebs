// Get references to DOM elements
const gardenContainer = document.getElementById('garden-container');
const playerContainer = document.getElementById('player-container');
const breathingContainer = document.getElementById('breathing-container');

// Zen Garden Interactivity
function createZenGarden() {
  // Create rocks
  for (let i = 0; i < 10; i++) {
    const rock = document.createElement('div');
    rock.className = 'rock';
    rock.style.left = `${Math.random() * 90}%`;
    rock.style.top = `${Math.random() * 90}%`;
    rock.style.transform = `rotate(${Math.random() * 360}deg)`;
    gardenContainer.appendChild(rock);
  }

  // Make rocks draggable
  const rocks = document.querySelectorAll('.rock');
  rocks.forEach(rock => {
    rock.addEventListener('mousedown', startDragging);
    rock.addEventListener('touchstart', startDragging);
  });

  function startDragging(e) {
    e.preventDefault();
    const rock = e.target;
    const startX = e.clientX || e.touches[0].clientX;
    const startY = e.clientY || e.touches[0].clientY;
    const offsetX = rock.offsetLeft;
    const offsetY = rock.offsetTop;

    function moveDragging(e) {
      const currentX = e.clientX || e.touches[0].clientX;
      const currentY = e.clientY || e.touches[0].clientY;
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      rock.style.left = `${offsetX + deltaX}px`;
      rock.style.top = `${offsetY + deltaY}px`;
    }

    function stopDragging() {
      document.removeEventListener('mousemove', moveDragging);
      document.removeEventListener('touchmove', moveDragging);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchend', stopDragging);
    }

    document.addEventListener('mousemove', moveDragging);
    document.addEventListener('touchmove', moveDragging);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);
  }
}

// Music Player
function createMusicPlayer() {
  const audioPlayer = document.createElement('audio');
  audioPlayer.src = 'path/to/nature-sounds.mp3';
  audioPlayer.loop = true;
  playerContainer.appendChild(audioPlayer);

  const playButton = document.createElement('button');
  playButton.textContent = 'Play';
  playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.textContent = 'Pause';
    } else {
      audioPlayer.pause();
      playButton.textContent = 'Play';
    }
  });
  playerContainer.appendChild(playButton);
}

// Breathing Exercise Animation
function createBreathingExercise() {
  const circle = document.createElement('div');
  circle.className = 'breathing-circle';
  breathingContainer.appendChild(circle);

  function animateBreathing() {
    circle.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.5)' },
      { transform: 'scale(1)' }
    ], {
      duration: 6000,
      iterations: Infinity
    });
  }

  animateBreathing();
}

// Parallax Scrolling Effect
function createParallaxEffect() {
  const parallaxItems = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    parallaxItems.forEach(item => {
      const scrollPosition = window.pageYOffset;
      item.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
  });
}

// Day-to-Night Transition
function createDayNightTransition() {
  const body = document.body;
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 18) {
    body.classList.add('day');
  } else {
    body.classList.add('night');
  }
}

// Initialize features
createZenGarden();
createMusicPlayer();
createBreathingExercise();
createParallaxEffect();
createDayNightTransition();
