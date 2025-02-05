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
    gsap.fromTo('.w1', { x: -200 }, {
        ease: 'elastick',
        x: -10,
        delay: 1
    });
    gsap.fromTo('.w3', { x: 200 }, {
        ease: 'elastick',
        x: 10,
        delay: 1,

    });
    gsap.to('.starterText', {
        delay: 1,
        opacity: 1
    });

    gsap.fromTo('.myLove', { x: -600, opacity: 0 }, {
        x: 15,
        opacity: 1,
        scrollTrigger: {
            trigger: '.aboutAss',
            start: '-90%',
            end: '+=600px',
            scrub: true,
            toggleActions: 'play none reverse none',

        }
    });

    /* gsap.fromTo('.myLoveMob', { x: -600, opacity: 0 }, {
         x: 0,
         opacity: 1,
         scrollTrigger: {
             trigger: '.gayTeam',

             scrub: true,
             toggleActions: 'play none reverse none',
             markers: true
         }
     });*/
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
        x: -200,
        scrollTrigger: '.zalupaScreen'
    });
    gsap.fromTo('.flyingShit2', { x: 1500 }, {
        delay: 0.5,
        ease: 'elastick',
        x: -200,
        scrollTrigger: '.zalupaScreen2'
    });

    gsap.fromTo('.rotateImg', { rotation: 0 }, {
        rotation: 45,
        scrollTrigger: {
            trigger: '.starterText',
            start: '+=10px',
            end: '+=6500px',
            scrub: true,
            toggleActions: 'play none reverse none',

        }
    });

});