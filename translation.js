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
        window.location.href = translatorLink.getAttribute('href');
    }, 600);
    
    translateAnimation.addEventListener('transitionend', () => {
        window.location.href = translatorLink.getAttribute('href');
    }, { once: true });
});
