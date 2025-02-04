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
        color: "#7e0ff3",
        delay: 1,
        ease: 'elastick',
        opacity: 1,
        x: -200
    });
    gsap.to('.w3', {
        color: "#7e0ff3",
        delay: 1,
        ease: 'elastick',

        x: 200
    });
});

function texttt() {
    alert("scrolled");
}