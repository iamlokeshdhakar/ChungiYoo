// Open Div on Click 

document.querySelector("#more h5").addEventListener("click", function () {
    gsap.to("#hcenter", {
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 2,
    });
    if (screen.width <= 850) {
        document.querySelector("#hidediv").style.height = "120vw";
    } else if (screen.width <= 500) {
        document.querySelector("#hidediv").style.height = "80vh";

    } else {
        document.querySelector("#hidediv").style.height = "180vh";
    }
    document.querySelector("#opendiv").style.display = "none";
    document.querySelector("#hcenter").style.display = "initial";

});

// Close Div on Click  

document.querySelector("#arrowclose h6").addEventListener("click", function () {
    gsap.to("#hcenter", {
        opacity: 0,
        ease: Power4.easeInOut,
        duration: 2,
    });
    document.querySelector("#hidediv").style.height = "0vh";
    document.querySelector("#opendiv").style.display = "";
    document.querySelector("#hcenter").style.display = "none";
});







//Menu Baar Animation

var clickCounter = 1;
document.querySelector("#mline").addEventListener("click", function () {
    if (clickCounter === 1) {
        document.querySelector("#l1").style.transform = "rotate(45deg)";
        document.querySelector("#l2").style.transform = "rotate(-45deg)";
        document.querySelector("#menu-bar").style.display = "flex";
        document.querySelector("#first").style.display = "none";
        gsap.to("#menu-bar", {
            opacity: 1,
            ease: Expo.easeInOut,
            duration: .7,
        })
        gsap.to("#menu-bar a", {
            y: 0,
            opacity: 1,
            stagger: .2,
        })

        clickCounter = 0;
    } else {
        document.querySelector("#l1").style.transform = "rotate(0deg)";
        document.querySelector("#l2").style.transform = "rotate(0deg)";
        document.querySelector("#menu-bar").style.display = "none";
        document.querySelector("#first").style.display = "";

        gsap.to("#menu-bar", {
            opacity: 0,
            ease: Expo.easeInOut,
            duration: .7,
        })
        gsap.to("#menu-bar a", {
            y: "20%",
            opacity: 0,
            stagger: .1,
        })
        clickCounter = 1;
    }

    // Span Rotate Animation

    document.querySelector("#menu-links").addEventListener("mousemove", function (dets) {

        var sTime = gsap.timeline();
        sTime.to(`.${dets.target.className}`, {
            stagger: .2,
            rotate: 20,
            ease: "sine.out"
        })
            .to(`.${dets.target.className}`, {
                stagger: .2,
                rotate: 0,
                ease: "sine.out"
            });
    });

});

// Main Heading Element Animation

gsap.to("#main-text #of h2 svg", {
    ease: "circ.out",
    opacity: 1,
})
gsap.to("#main-text h2:nth-child(4) span svg", {
    ease: "circ.out",
    top: "-5%",
    left: "10%",
    rotate: 0,
    opacity: 1,
})
gsap.to("#main-text h2:nth-child(2) span svg", {
    ease: "circ.out",
    top: "55%",
    left: "48%",
    rotate: 0,
    opacity: 1,
})

// Main Heading Div Animation  

gsap.to("#main-text", {
    scrollTrigger: {
        trigger: "#mmheading",
        start: "20% 61%",
        end: "60% 10%",
        scrub: .5,
    },
    marginTop: "-20vw"
})

// Third Div Test H5 Animation

gsap.to("#textthird h5", {
    scrollTrigger: {
        trigger: "#third",
        start: "top 75%",
        end: "top 50%",
        scrub: 1,
    },
    y: 0,
    opacity: 1,
})

// Fourth Div Animation 

gsap.to("#someof h5", {
    scrollTrigger: {
        trigger: "#someof",
        start: "-40% 80%",
        end: "top 60%",
        // markers: true,
        scrub: 1,
    },
    y: 0,
    stagger: .3,
    opacity: 1
})


// Border Radius Div Animation
// First Div 

if(screen.width >= 1200){

gsap.to("#cd1", {
    scrollTrigger: {
        trigger: "#forgsap1",
        start: "-20% 0%",
        end: "20% 60%",
        scrub: .5,
    },
    borderRadius: "0%"
})
gsap.to("#cd2", {
    scrollTrigger: {
        trigger: "#forgsap2",
        start: "-20% 0%",
        end: "20% 60%",
        scrub: .5,
    },
    borderRadius: "0%"
})
gsap.to("#cd3", {
    scrollTrigger: {
        trigger: "#forgsap3",
        start: "-20% 0%",
        end: "20% 60%",
        scrub: .5,
    },
    borderRadius: "0%"
})
gsap.to("#cd4", {
    scrollTrigger: {
        trigger: "#forgsap4",
        start: "-20% 0%",
        end: "20% 60%",
        scrub: .5,
    },
    borderRadius: "0%"
})

gsap.to("#cd5", {
    scrollTrigger: {
        trigger: "#forgsap5",
        start: "-20% 0%",
        end: "20% 60%",
        scrub: .5,
    },
    borderRadius: "0%"
})
}

gsap.to("#id1", {
    scrollTrigger: {
        trigger: "#forgsap1",
        start: "-18% 100%",
        end: "20% 50%",
        scrub: .8,
    },
    top: "-15%"
})
gsap.to("#rimg1", {
    scrollTrigger: {
        trigger: "#forgsap1",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: -18,
    top: "-15%",
})
gsap.to("#rimg11", {
    scrollTrigger: {
        trigger: "#forgsap1",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: 0,
})
gsap.to("#textd1", {
    scrollTrigger: {
        trigger: "#forgsap1",
        start: "0% 80%",
        end: "25% 50%",
        scrub: .8,
    },
    opacity: 1,
})
gsap.to("#textd1", {
    scrollTrigger: {
        trigger: "#forgsap1",
        start: "5% 0%",
        end: "30% 30%",
        scrub: 1,
    },
    opacity: 0,
})

// Second Div 


gsap.to("#id2", {
    scrollTrigger: {
        trigger: "#forgsap2",
        start: "-18% 100%",
        end: "20% 50%",
        scrub: .8,
    },
    top: "-15%"
})
gsap.to("#rimg2", {
    scrollTrigger: {
        trigger: "#forgsap2",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: -18,
    top: "-15%",
})
gsap.to("#rimg22", {
    scrollTrigger: {
        trigger: "#forgsap2",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: 0,
})
gsap.to("#textd2", {
    scrollTrigger: {
        trigger: "#forgsap2",
        start: "0% 80%",
        end: "25% 50%",
        scrub: .8,
    },
    opacity: 1,
})
gsap.to("#textd2", {
    scrollTrigger: {
        trigger: "#forgsap2",
        start: "5% 0%",
        end: "30% 30%",
        scrub: 1,
    },
    opacity: 0,
})

// Third Div



gsap.to("#id3", {
    scrollTrigger: {
        trigger: "#forgsap3",
        start: "-18% 100%",
        end: "20% 50%",
        scrub: .8,
    },
    top: "-15%"
})
gsap.to("#rimg3", {
    scrollTrigger: {
        trigger: "#forgsap3",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: -18,
    top: "-15%",
})
gsap.to("#rimg33", {
    scrollTrigger: {
        trigger: "#forgsap3",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: 0,
})
gsap.to("#textd3", {
    scrollTrigger: {
        trigger: "#forgsap3",
        start: "0% 80%",
        end: "25% 50%",
        scrub: .8,
    },
    opacity: 1,
})
gsap.to("#textd3", {
    scrollTrigger: {
        trigger: "#forgsap3",
        start: "5% 0%",
        end: "30% 30%",
        scrub: 1,
    },
    opacity: 0,
})

// Fourth Div



gsap.to("#id4", {
    scrollTrigger: {
        trigger: "#forgsap4",
        start: "-18% 100%",
        end: "20% 50%",
        scrub: .8,
    },
    top: "-15%"
})
gsap.to("#rimg4", {
    scrollTrigger: {
        trigger: "#forgsap4",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: -18,
    top: "-15%",
})
gsap.to("#rimg44", {
    scrollTrigger: {
        trigger: "#forgsap4",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: 0,
})
gsap.to("#textd4", {
    scrollTrigger: {
        trigger: "#forgsap4",
        start: "0% 80%",
        end: "25% 50%",
        scrub: .8,
    },
    opacity: 1,
})
gsap.to("#textd4", {
    scrollTrigger: {
        trigger: "#forgsap4",
        start: "5% 0%",
        end: "30% 30%",
        scrub: 1,
    },
    opacity: 0,
})

// Fifth Div Animation


gsap.to("#id5", {
    scrollTrigger: {
        trigger: "#forgsap5",
        start: "-18% 100%",
        end: "20% 50%",
        scrub: .8,
    },
    top: "-15%"
})
gsap.to("#rimg5", {
    scrollTrigger: {
        trigger: "#forgsap5",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: -18,
    top: "-15%",
})
gsap.to("#rimg55", {
    scrollTrigger: {
        trigger: "#forgsap5",
        start: "-20% 100%",
        end: "20% 60%",
        scrub: .8,
    },
    rotate: 0,
})
gsap.to("#textd5", {
    scrollTrigger: {
        trigger: "#forgsap5",
        start: "0% 80%",
        end: "25% 50%",
        scrub: .8,
    },
    opacity: 1,
})
gsap.to("#textd5", {
    scrollTrigger: {
        trigger: "#forgsap5",
        start: "5% 0%",
        end: "30% 30%",
        scrub: 1,
    },
    opacity: 0,
})


// Fifth Div Animation 

gsap.to("#ftdiv", {
    scrollTrigger: {
        trigger: "#ftdiv",
        start: "-30% 85%",
        end: "top 50%",
        scrub: 1,
    },
    opacity: 1,
})