// Scroll reveal animation
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var header = document.querySelector('header');

    sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('active');
        }
    });

    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// Certificate preview
var certificateImages = document.querySelectorAll('.certificate img');
var certificatePreview = document.getElementById('certificate-preview');
var certificatePreviewImage = document.getElementById('certificate-preview-image');
var closePreviewBtn = document.querySelector('.close-preview');

certificateImages.forEach(function(image) {
    image.addEventListener('click', function() {
        var imageSrc = this.getAttribute('src');
        certificatePreviewImage.setAttribute('src', imageSrc);
        certificatePreview.style.display = 'flex';
    });
});

closePreviewBtn.addEventListener('click', function() {
    certificatePreview.style.display = 'none';
});

certificatePreviewImage.addEventListener('click', function() {
    window.open(this.getAttribute('src'), '_blank');
});

// Interactive link
var interactiveLink = document.getElementById('interactive-link');
var interactiveOverlay = document.getElementById('interactive-overlay');
var interactiveContent = document.getElementById('interactive-content');
var closeButton = document.getElementById('close-button');
var typingEffect = document.getElementById('typing-effect');
var secretMessage = document.getElementById('secret-message');

interactiveLink.addEventListener('click', function(e) {
    e.preventDefault();
    interactiveOverlay.style.display = 'flex';
    setTimeout(function() {
        interactiveContent.style.display = 'block';
        interactiveContent.classList.add('active');
        typeWriter();
    }, 500);
});

closeButton.addEventListener('click', function() {
    interactiveContent.classList.remove('active');
    setTimeout(function() {
        interactiveContent.style.display = 'none';
        interactiveOverlay.style.display = 'none';
        typingEffect.textContent = '';
        secretMessage.style.opacity = '0';
        secretMessage.style.transform = 'translateY(20px)';
    }, 500);
});

function typeWriter() {
    var text = "Congratulations! You've discovered a hidden message.";
    var i = 0;
    var speed = 50;

    function type() {
        if (i < text.length) {
            typingEffect.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(function() {
                secretMessage.style.opacity = '1';
                secretMessage.style.transform = 'translateY(0)';
            }, 500);
        }
    }

    type();
}

// Decrypt game
var gameModal = document.getElementById('game-modal');
var gameButton = document.getElementById('game-button');
var closeModal = document.getElementsByClassName('close')[0];
var encryptedMessage = document.getElementById('encrypted-message');
var decryptedMessage = document.getElementById('decrypted-message');
var decryptButton = document.getElementById('decrypt-button');

gameButton.addEventListener('click', function() {
    gameModal.style.display = 'flex';
    setTimeout(function() {
        gameModal.classList.add('show');
    }, 50);
});

closeModal.addEventListener('click', function() {
    gameModal.classList.remove('show');
    setTimeout(function() {
        gameModal.style.display = 'none';
        encryptedMessage.value = '';
        decryptedMessage.textContent = '';
    }, 500);
});

decryptButton.addEventListener('click', function() {
    var message = encryptedMessage.value;
    var decrypted = atob(message);
    decryptedMessage.textContent = decrypted;
});

// Language translator
var translatorBtn = document.getElementById('translator-btn');
var translateAnimation = document.querySelector('.translate-animation');

translatorBtn.addEventListener('click', function() {
    translateAnimation.classList.add('active');
    setTimeout(function() {
        window.open('https://translate.google.com/', '_blank');
        translateAnimation.classList.remove('active');
    }, 1000);
});
