document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const scrollDownBtn = document.querySelector('.scroll-down');
    const certificateImages = document.querySelectorAll('.certificate img');
    const certificatePreview = document.getElementById('certificate-preview');
    const closePreviewBtn = document.querySelector('.close-preview');
    const interactiveLink = document.getElementById('interactive-link');
    const interactiveOverlay = document.getElementById('interactive-overlay');
    const interactiveContent = document.getElementById('interactive-content');
    const closeButton = document.getElementById('close-button');
    const gameModal = document.getElementById('game-modal');
    const modalCloseBtn = document.querySelector('.close');
    const encryptedMessage = "Pbatenghyngvbaf! Lbh unir fhpprffshyyl qrpelcgrq gur zrffntr.";
    const inputField = document.getElementById('encrypted-input');
    const decryptButton = document.getElementById('decrypt-btn');
    const decryptedMessageElement = document.getElementById('decrypted-message');
    const translatorBtn = document.getElementById('translator-btn');
    const translateAnimation = document.querySelector('.translate-animation');

    // Scroll reveal animation
    const revealSection = function () {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('active');
            }
        });
    };

    // Header animation
    const animateHeader = function () {
        header.classList.add('active');
    };

    // Smooth scroll to section
    const smoothScroll = function (target) {
        const targetSection = document.querySelector(target);
        const targetPosition = targetSection.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const animation = function (currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    // Certificate preview
    const openCertificatePreview = function (event) {
        const clickedImage = event.target;
        const imageSrc = clickedImage.getAttribute('src');
        const previewImage = certificatePreview.querySelector('img');
        previewImage.setAttribute('src', imageSrc);
        certificatePreview.style.display = 'flex';
    };

    const closeCertificatePreview = function () {
        certificatePreview.style.display = 'none';
    };

    // Interactive content
    const openInteractiveContent = function (event) {
        event.preventDefault();
        interactiveOverlay.style.display = 'flex';
        setTimeout(function () {
            interactiveContent.style.display = 'block';
            typeWriter();
        }, 500);
    };

    const closeInteractiveContent = function () {
        interactiveContent.style.display = 'none';
        setTimeout(function () {
            interactiveOverlay.style.display = 'none';
        }, 500);
    };

    const typeWriter = function () {
        const text = "Congratulations! You have discovered the hidden message.";
        const typingEffectElement = document.getElementById('typing-effect');
        let i = 0;

        const typing = function () {
            if (i < text.length) {
                typingEffectElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 50);
            } else {
                const secretMessage = document.getElementById('secret-message');
                secretMessage.style.opacity = '1';
                secretMessage.style.transform = 'translateY(0)';
            }
        };

        typing();
    };

    // Decrypt game
    const openGameModal = function () {
        gameModal.style.display = 'flex';
        setTimeout(function () {
            gameModal.classList.add('show');
        }, 100);
    };

    const closeGameModal = function () {
        gameModal.classList.remove('show');
        setTimeout(function () {
            gameModal.style.display = 'none';
        }, 500);
    };

    const decryptMessage = function () {
        const encryptedText = inputField.value.toLowerCase();
        let decryptedText = "";

        for (let i = 0; i < encryptedText.length; i++) {
            let charCode = encryptedText.charCodeAt(i);
            if (charCode >= 97 && charCode <= 122) {
                charCode = ((charCode - 97 + 13) % 26) + 97;
            }
            decryptedText += String.fromCharCode(charCode);
        }

        decryptedMessageElement.textContent = decryptedText;

        if (encryptedText === encryptedMessage.toLowerCase()) {
            decryptedMessageElement.textContent = "Congratulations! You have successfully decrypted the message.";
        }
    };

    // Language translator
    const translatePage = function () {
        translateAnimation.classList.add('active');
        setTimeout(function () {
            // Replace the content with the translated version
            document.body.innerHTML = `
                <!-- Translated content goes here -->
            `;
            translateAnimation.classList.remove('active');
        }, 1000);
    };

    // Event listeners
    window.addEventListener('scroll', revealSection);
    window.addEventListener('load', animateHeader);
    scrollDownBtn.addEventListener('click', function () {
        smoothScroll('#about');
    });
    certificateImages.forEach(image => {
        image.addEventListener('click', openCertificatePreview);
    });
    closePreviewBtn.addEventListener('click', closeCertificatePreview);
    interactiveLink.addEventListener('click', openInteractiveContent);
    closeButton.addEventListener('click', closeInteractiveContent);
    modalCloseBtn.addEventListener('click', closeGameModal);
    decryptButton.addEventListener('click', decryptMessage);
    translatorBtn.addEventListener('click', translatePage);
});
