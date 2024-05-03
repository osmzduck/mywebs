document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const certificateImages = document.querySelectorAll('.certificate img');
    const certificatePreview = document.getElementById('certificate-preview');
    const closePreviewBtn = document.querySelector('.close-preview');
    const form = document.querySelector('form');
    const interactiveLink = document.getElementById('interactive-link');
    const interactiveOverlay = document.getElementById('interactive-overlay');
    const interactiveContent = document.getElementById('interactive-content');
    const closeButton = document.getElementById('close-button');
    const typingEffect = document.getElementById('typing-effect');
    const secretMessage = document.getElementById('secret-message');
    const gameModal = document.getElementById('game-modal');
    const openGameBtn = document.getElementById('open-game-btn');
    const closeGameBtn = document.querySelector('.close');
    const decryptBtn = document.getElementById('decrypt-btn');
    const encryptedInput = document.getElementById('encrypted-input');
    const decryptedMessage = document.getElementById('decrypted-message');
    const translatorBtn = document.getElementById('translator-btn');
    const translateAnimation = document.querySelector('.translate-animation');

    function fadeInSection() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('active');
            }
        });
    }

    function handleHeaderAnimation() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }

    function openCertificatePreview(event) {
        const clickedImage = event.target;
        const imageSrc = clickedImage.getAttribute('src');
        const previewImage = certificatePreview.querySelector('img');
        previewImage.setAttribute('src', imageSrc);
        certificatePreview.style.display = 'flex';
    }

    function closeCertificatePreview() {
        certificatePreview.style.display = 'none';
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        form.reset();
    }

    function openInteractiveOverlay() {
        interactiveOverlay.style.display = 'flex';
        setTimeout(() => {
            interactiveContent.style.display = 'block';
            setTimeout(() => {
                interactiveContent.classList.add('active');
                startTypingEffect();
            }, 500);
        }, 500);
    }

    function closeInteractiveOverlay() {
        interactiveContent.classList.remove('active');
        setTimeout(() => {
            interactiveContent.style.display = 'none';
            interactiveOverlay.style.display = 'none';
            resetTypingEffect();
        }, 500);
    }

    function startTypingEffect() {
        const text = "Welcome to the interactive experience!";
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typingEffect.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    secretMessage.style.opacity = '1';
                    secretMessage.style.transform = 'translateY(0)';
                }, 500);
            }
        }

        typeWriter();
    }

    function resetTypingEffect() {
        typingEffect.innerHTML = '';
        secretMessage.style.opacity = '0';
        secretMessage.style.transform = 'translateY(20px)';
    }

    function openGameModal() {
        gameModal.style.display = 'flex';
        setTimeout(() => {
            gameModal.classList.add('show');
        }, 100);
    }

    function closeGameModal() {
        gameModal.classList.remove('show');
        setTimeout(() => {
            gameModal.style.display = 'none';
        }, 500);
    }

    function decryptMessage() {
        const encryptedMessage = encryptedInput.value;
        const decryptedText = decrypt(encryptedMessage);
        decryptedMessage.textContent = decryptedText;
    }

    function decrypt(message) {
        // Implement your decryption logic here
        // This is just a simple example that reverses the string
        return message.split('').reverse().join('');
    }

    function toggleTranslateAnimation() {
        translateAnimation.classList.add('active');
        setTimeout(() => {
            translateAnimation.classList.remove('active');
        }, 1000);
    }

    window.addEventListener('scroll', fadeInSection);
    window.addEventListener('scroll', handleHeaderAnimation);
    certificateImages.forEach((image) => {
        image.addEventListener('click', openCertificatePreview);
    });
    closePreviewBtn.addEventListener('click', closeCertificatePreview);
    form.addEventListener('submit', handleFormSubmit);
    interactiveLink.addEventListener('click', openInteractiveOverlay);
    closeButton.addEventListener('click', closeInteractiveOverlay);
    openGameBtn.addEventListener('click', openGameModal);
    closeGameBtn.addEventListener('click', closeGameModal);
    decryptBtn.addEventListener('click', decryptMessage);
    translatorBtn.addEventListener('click', toggleTranslateAnimation);

    fadeInSection();
    handleHeaderAnimation();
});
