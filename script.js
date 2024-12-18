let lastScrollTop = 0;
let image = document.querySelector('.main-image');
let payText = document.querySelector('.pay-text');

let totalScrollHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    let scrollPercentage = scrollY / totalScrollHeight;
    scrollPercentage = Math.min(scrollPercentage, 1);

    const scale = 0.3 + (scrollPercentage * 0.7);
    const translateY = scrollPercentage * (windowHeight / 2);
    const maxTranslateY = windowHeight / 2;

    image.style.transform = `scale(${Math.min(scale, 1)}) translateY(${Math.min(translateY, maxTranslateY)}px)`;

    const moveDistance = scrollPercentage * 100 - 100;
    payText.style.transform = `translateX(${moveDistance}%)`;
    payText.style.opacity = scrollPercentage > 0.05 ? 1 : 0;

    if (scrollY > lastScrollTop) {
        image.style.transform = `scale(${Math.min(scale, 1)}) translateY(${Math.min(translateY, maxTranslateY)}px)`;
    } else {
        image.style.transform = `scale(${Math.max(0.3, scale)}) translateY(${Math.max(0, translateY)}px)`;
    }

    lastScrollTop = scrollY <= 0 ? 0 : scrollY;
});
