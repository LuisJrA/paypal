// Get references to the main image and second image container
const mainImage = document.querySelector('.main-image');
const secondImageContainer = document.querySelector('.second-image-container');
const imageHeight = window.innerHeight; // Initial image height is the viewport height

// Listen for scroll events
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;  // How far you've scrolled

    // Calculate how much to scale the image based on how far you've scrolled
    let scaleFactor = 1 + (scrollPosition / imageHeight); // Image grows as you scroll

    // Apply the scale transformation to the image
    mainImage.style.transform = `scale(${scaleFactor})`;

    // Ensure the bottom of the image stays aligned with the bottom of the viewport as it grows
    mainImage.style.bottom = `-${scrollPosition / 1.5}px`; // This ensures the bottom stays attached to the bottom of the viewport

    // Show the second image once the main image fills the screen
    if (scrollPosition >= imageHeight) {
        secondImageContainer.style.display = 'flex';  // Show the second image when the scroll reaches the full screen
    } else {
        secondImageContainer.style.display = 'none';  // Hide the second image initially
    }
});
