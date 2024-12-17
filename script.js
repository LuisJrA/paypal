let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const payText = document.querySelector('.pay-text');
    const image = document.querySelector('.main-image');
    
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const scrollPercentage = scrollY / (document.body.scrollHeight - windowHeight);
    
    const scale = 0.3 + (scrollPercentage * 0.7);
    image.style.transform = `scale(${scale})`;

    const moveDistance = scrollPercentage * 100 - 100;
    payText.style.transform = `translateX(${moveDistance}%)`;
    payText.style.opacity = scrollPercentage > 0.1 ? 1 : 0;
    
    if (scrollY > lastScrollTop) {
        image.style.transform = `scale(${scale})`;
    } else {
        image.style.transform = `scale(${Math.max(0.3, scale)})`;
    }

    lastScrollTop = scrollY <= 0 ? 0 : scrollY;
});
