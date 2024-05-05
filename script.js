document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher initialization
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Switch Theme';
    document.body.insertBefore(themeToggleButton, document.body.firstChild);

    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    // Artwork browsing functionality
    const artworks = document.querySelectorAll('.artwork');
    let currentArtworkIndex = 0;

    function showArtwork(index) {
        artworks.forEach((art, idx) => {
            art.style.display = (idx === index) ? 'block' : 'none';
        });
    }

    // Initial display
    showArtwork(currentArtworkIndex);

    // Event listeners for browsing next and previous artworks
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            currentArtworkIndex = (currentArtworkIndex + 1) % artworks.length;
            showArtwork(currentArtworkIndex);
        } else if (event.key === 'ArrowLeft') {
            currentArtworkIndex = (currentArtworkIndex - 1 + artworks.length) % artworks.length;
            showArtwork(currentArtworkIndex);
        }
    });
});

// Toggle dark theme
function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
    } else {
        document.body.classList.add('dark-theme');
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    }
}
