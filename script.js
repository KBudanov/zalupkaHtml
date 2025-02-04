document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip, ScrollTrigger, TextPlugin)
    gsap.to('.box', {
        scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
        rotation: 360,
        duration: 2,
        opacity: 1,
        borderRadius: "50%",
        x: 200,
        backgroundColor: "#7e0ff3",
        onUpdate: function() {
            console.log("fsadfa")
        }
    });
    gsap.to('.w1', {
        ease: 'elastick',
        x: -200,
        delay: 1
    });
    gsap.to('.w3', {
        ease: 'elastick',
        x: 200,
        delay: 1
    });
    gsap.fromTo('.myLove', { x: -400, opacity: 0 }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.aboutAss',
            start: '-100%',
            end: '+=800px',
            scrub: true,
            toggleActions: 'play none reverse none',

        }
    });
    gsap.fromTo('.gay1', { y: 600, opacity: 0 }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.mainContentGays',
            start: '-20%',
            end: '+=300px',
            scrub: true,
            toggleActions: 'play none reverse none',

        }
    });
    gsap.fromTo('.gay2', { y: 600, opacity: 0 }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.gay1',
            start: '-120%',
            end: '+=300px',
            scrub: true,
            toggleActions: 'play none reverse none',

        }
    });
    gsap.fromTo('.gay3', { y: 600, opacity: 0 }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.gay2',
            start: '-120%',
            end: '+=300px',
            scrub: true,
            toggleActions: 'play none reverse none',

        }
    });
    gsap.fromTo('.flyingShit', { x: 1500 }, {
        delay: 0.5,
        ease: 'elastick',
        x: 0,
        scrollTrigger: '.shitBox'
    });

});