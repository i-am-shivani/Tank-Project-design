gsap.registerPlugin("ScrollTrigger");

gsap.to(".scroll-down-circle", { 
    x: -100,
    autoAlpha: 0,
    ease: "none",
    scrollTrigger: {
        trigger: "#benner",
        start: "top top",
        end: "30% top",
        scrub: true,
        markers: false
    }, 
});
gsap.to(".mwl-inner", { 
    y: -100,
    autoAlpha: 0,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: "#benner",
        start: "top top",
        end: "30% top",
        scrub: true,
        markers: false
    }, 
});

