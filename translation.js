
const translatorLink = document.getElementById('translator-link');

translatorLink.addEventListener('click', function(e) {
    e.preventDefault();

    setTimeout(() => {
        window.location.href = translatorLink.getAttribute('href');
    }, 600);
});
