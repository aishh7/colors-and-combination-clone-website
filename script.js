function timelineOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            end: "+=" + (window.innerHeight * 8),

            pin: true,
        }
    });

    tl
        .from("#centerimg", {
            x: 525,
            ease: Power1,
            duration: 3

        })
        .to("#circle", {
            scale: .2,
            ease: Power1
        }, 'same')

        .to("#overlay #purple", {
            top: '50%',
            ease: Power1
        }, 'same')
        .to("#overlay #mainh1", {
            top: '150%',
            ease: Power1
        }, 'same')
        .to("#overlay #centerimg img", {
            scale: 0,
            ease: Power1
        }, 'same')
        .to("#overlay #centerimg span", {
            opacity: 0,
            ease: Expo.easeInOut
        }, 'same')
        .to("#smcircle", {
            scale: .6,
            ease: Power1
        }, 'same')
        .to("#circle #btm img", {
            rotate: "-180deg",
            ease: Power1,
            stagger: .05
        }, 'same')
        .to("#imagecontainer img", {
            scale: 1.25,
            ease: Power0,
        }, "same")
        .to("#smcircle, #circle", {
            scale: 0,
            ease: Power1,
        }, "samesame")
        .to("#purple", {
            scale: 0,
            opacity: 0,
            ease: Power1,
        }, "samesame")
        .to("#overlay #sech1", {
            rotate: "0",
            bottom: 0,
            delay: -.2,
            ease: Power1,
        }, "samesame")
        .to("#sidepurple", {
            top: "0%",
            delay: -.4,
            ease: Power1,
        }, "cc")
        .to("#sidepurple", {
            top: "-70%",
            delay: .2,
            ease: Power1,
        }, "cc")
        .to("#cb", {
            color: "white",
            delay: -2.1,
            ease: Power1,
        })
        .to("#imagecontainer img", {
            scale: 1,
            ease: Power0,
        }, "samesame")
}

function timelineTwo() {
    gsap.set("#soverlay #stop .circle", { top: "150%", scale: .5 })

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            pin: true,
            scrub: 1,
            end: "+=" + (window.innerHeight * 9),
            // markers: true
        }
    })

    tl2.to(".circle", {
        top: "50%",
        scale: 1,
        ease: Power1,
        stagger: .1
    })
        .to(".circle", {
            top: "50%",
            left: "50%",
            scale: 1,
            ease: Power1
        })
        .to(".circle", {
            scale: .7,
            ease: Power1
        })
        .to(".circle", {
            scale: 10,
            ease: Power1
        })
        .to("#stop h1", {
            left: "-130%",
            duration: 2.5,

            ease: "slow"
        }, "same")
        .to("#stop .pi", {
            background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
            ease: Power1
        }, "same")
        .to("#n1", {

            y: -40,
            delay: -.2,
            ease: "slow"
        }, "same")
        .to("#n2", {

            y: -30,
            delay: -.2,
            ease: "slow"

        }, "same")
        .to("#n2", {

            y: -60,
            delay: .3,
            ease: "slow"

        }, "same")
        .to("#n3", {

            y: -60,
            delay: .5,
            duration: .8,
            // ease:"slow"

        }, "same")

        .to("#sbtm h3:nth-child(1)", {
            opacity: 0,
            delay: .2,
            ease: Power1
        }, "same")
        .to("#sbtm h3:nth-child(2)", {
            opacity: 1,
            delay: -1.8,
            ease: Power1
        })
        .to(".pill", {
            height: "75vh",

            ease: "slow",
            stagger: .1




        })


        .to(".sps", {
            opacity: 1,
            right: 0,
            width: "8vw",
            duration: 1.5,
            ease: "slow"


        }, "sss")
        .to(".spf", {
            opacity: 1,
            right: 0,
            width: "8vw",
            duration: 1.5,
            ease: "slow"


        }, "sss")


        .to(".sps", {
            opacity: 1,
            right: 0,
            width: "12vw",
            duration: 1.5,
            ease: "slow"


        })
}
window.addEventListener('DOMContentLoaded', function () {
})

timelineOne();
timelineTwo();