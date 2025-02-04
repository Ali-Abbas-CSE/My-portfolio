var tl =gsap.timeline()
tl.from(".left", {
    y:30,
    duration:1,
    opacity:0,
    // delay:.5

})

tl.from(".right", {
    y:30,
    duration:1,
    opacity:0,
    // delay:.5,
    stagger:.4,
})

tl.from(".left-section", {
    y:20,
    opacity:0,
    duration:0.5,
    // scale:0.2
    stagger: .4,
    
})

tl.from(".right ul li",{
    y:30,
    duration:1,
    opacity:0,
    // delay:.5
    stagger:.4

})