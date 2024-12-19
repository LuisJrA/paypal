// Get references to the main image and second image container
const mainImage = document.querySelector('.main-image');
const secondImageContainer = document.querySelector('.second-image-container');
const imageHeight = window.innerHeight; // Initial image height is the viewport height

// Listen for scroll events
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    // Set a limit for the growth of the image (when it should stop growing)
    let maxHeight = imageHeight; // Image can grow until it fills the screen height

    // Calculate scale factor based on scroll position
    let scaleFactor = 1 + (scrollPosition / (imageHeight * 2)); // Adjust for how fast the image grows
    
    // Apply the scale transformation
    mainImage.style.transform = `scale(${scaleFactor})`;

    // Ensure the bottom of the image stays aligned with the bottom of the viewport
    mainImage.style.bottom = `-${scrollPosition / 2}px`; // Keep the bottom aligned while growing

    // Once the image has taken up the whole screen, show the second image
    if (scrollPosition >= maxHeight) {
        secondImageContainer.style.display = 'flex';
    } else {
        secondImageContainer.style.display = 'none';
    }
});
