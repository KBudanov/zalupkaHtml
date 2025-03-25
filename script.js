function fullScreenAnim() {

    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(Flip, ScrollTrigger, TextPlugin)
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
}

function mobileAnim() {
    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(Flip, ScrollTrigger, TextPlugin)
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
}

wdt = screen.width
if (wdt < 480) {
    mobileAnim()
} else {
    fullScreenAnim()
}

function nav(x) {
    x.classList.toggle("change");
    $(".mobileNav").toggle();

}