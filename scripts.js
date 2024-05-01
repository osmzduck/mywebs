document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.section-reveal');
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Interactive overlay and typing effect
    const interactiveLink = document.getElementById('interactive-link');
    const overlay = document.getElementById('interactive-overlay');
    const content = document.getElementById('interactive-content');
    const typingEffect = document.getElementById('typing-effect');
    const secretMessage = document.getElementById('secret-message');
    const closeButton = document.getElementById('close-button');
    let currentLanguage = 'en';

    if (document.documentElement.lang === 'ar') {
        currentLanguage = 'ar';
    }

    const messages = {
        en: "You've discovered my secret! I'm not just a cybersecurity enthusiast, but also a puzzle master. Stay tuned for more interactive surprises!",
        ar: "لقد اكتشفت سري! أنا لست مجرد مهتم بالأمن السيبراني، بل أيضًا سيد الألغاز. ترقب المزيد من المفاجآت التفاعلية!"
    };

    interactiveLink.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.style.display = 'block';
        content.style.display = 'block';
        typingEffect.innerHTML = '';
        let i = 0;
        const typingInterval = setInterval(function () {
            if (i < messages[currentLanguage].length) {
                typingEffect.innerHTML += messages[currentLanguage].charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                secretMessage.style.display = 'block';
            }
        }, 50);
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none';
        content.style.display = 'none';
        typingEffect.innerHTML = '';
        secretMessage.style.display = 'none';
    });

    // Certificate preview functionality
    const certificateImages = document.querySelectorAll('.certificate img');
    const certificatePreview = document.getElementById('certificate-preview');
    const previewImage = certificatePreview.querySelector('img');
    const closePreviewButton = certificatePreview.querySelector('.close-preview');

    certificateImages.forEach(image => {
        image.addEventListener('click', function () {
            previewImage.src = this.src;
            previewImage.alt = this.alt;
            certificatePreview.style.display = 'block';
        });
    });

    closePreviewButton.addEventListener('click', function () {
        certificatePreview.style.display = 'none';
    });

    // Background particles animation
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
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
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
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let speed = 0.1;

    function animate() {
        let distX = mouseX - trailX;
        let distY = mouseY - trailY;
        trailX += distX * speed;
        trailY += distY * speed;
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    });

    animate();

    // Confetti animation
    const confettiSettings = {
        target: 'confetti-canvas',
        max: 100,
        size: 1,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
        clock: 25,
        rotate: true,
        width: window.innerWidth,
        height: window.innerHeight,
        start_from_edge: true,
        respawn: true
    };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Secret game functionality
    const gameModal = document.getElementById('game-modal');
    const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
    const decryptionKey = document.getElementById('decryption-key');
    const decryptedMessage = document.getElementById('decrypted-message');
    const encryptedMessage = document.querySelector('.encrypted-message');
    function openGameModal() {
    gameModal.style.display = 'block';
}

function closeGameModal() {
    gameModal.style.display = 'none';
    decryptionKey.value = '';
    decryptedMessage.textContent = '';
}

function decryptMessage() {
    const key = decryptionKey.value.toLowerCase();
    const message = encryptedMessage.textContent.toLowerCase();
    let decrypted = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            charCode -= key.length;
            if (charCode < 97) {
                charCode += 26;
            }
        }
        decrypted += String.fromCharCode(charCode);
    }

    decryptedMessage.textContent = decrypted;

    if (decrypted.includes('the secret to success is consistency')) {
        const modalConfettiSettings = {
            target: 'modal-confetti-canvas',
            max: 100,
            size: 1,
            animate: true,
            props: ['circle', 'square', 'triangle', 'line'],
            colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
            clock: 25,
            rotate: true,
            width: modalConfettiCanvas.width,
            height: modalConfettiCanvas.height,
            start_from_edge: true,
            respawn: false
        };

        const modalConfetti = new ConfettiGenerator(modalConfettiSettings);
        modalConfetti.render();

        setTimeout(() => {
            modalConfetti.clear();
        }, 3000);
    }
}

// Scroll down arrow animation
const scrollArrow = document.querySelector('.scroll-arrow');
let arrowVisible = true;

function toggleArrowVisibility() {
    arrowVisible = !arrowVisible;
    scrollArrow.style.opacity = arrowVisible ? 1 : 0;
}

setInterval(toggleArrowVisibility, 500);

// Smooth scroll to section when clicking on scroll down arrow
scrollArrow.addEventListener('click', function () {
    const nextSection = document.querySelector('section');
    nextSection.scrollIntoView({
        behavior: 'smooth'
    });
});
});
