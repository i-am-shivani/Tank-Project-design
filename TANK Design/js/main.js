const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,

    },
});

$('.marquee-scrolling-text-inner').marquee({
    direction: 'left',
    duration: 150000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true
})

$('.marquee-scrolling-text-inner-2').marquee({
    direction: 'right',
    duration: 150000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true
});

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    orientation: 'up',
    delay: 1,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)'
});

AOS.init();
