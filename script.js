

// const scroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,
//     lerp:0.05
// });

var tl = gsap.timeline({scrollTrigger:{
    trigger:".page1",
    start:"10%",
    end:"90%",
  
    scrub:3
}})

tl.to(".fanta",{
    top:"120%",
    left:"2%",
    duration:0.5
},"aso")
tl.to(".orange-cut",{
    top:"170%",
    left:"24%",
    duration:0.5
},"aso")
tl.to(".orange",{
    width:"25%",
    top:"168%",
    left:"75%",
    duration:0.5
},"aso")
tl.to(".leaf2",{
    width:"10%",
    top:"110%",
    left:"25%",
    rotate:"55deg",
    duration:0.5
},"aso")
tl.to(".leaf1",{
    width:"10%",
    top:"129%",
    left:"68%",
    rotate:"-10deg",
    duration:0.5
},"aso")

var tl = gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"10%",
    end:"100%",
    
    scrub:3
}})

var tl = gsap.timeline({scrollTrigger:{
    trigger:".page3",
    start:"-90%",
    end:"2%",
    
    scrub:3
}})
tl.from(".can1",{
    rotate:"-90deg",
    left:"-150%",
},"vaso")
tl.from(".can3",{
    rotate:"90deg",
    right:"-150%",
},"vaso")
tl.from(".cards .card:nth-child(1) .lemon",{
    rotate:"360deg",
    left:"-150%",
    top:"100%"
},"vaso")
tl.from(".card:nth-child(3) .lemon",{
    rotate:"360deg",
    right:"-150%",
    top:"100%"
},"vaso")
tl.to(".fanta",{
    width:"35%",
    top:"228%",
    left:"32%"
},"vaso")
tl.to(".orange-cut",{
    width:"21%",
    top:"222%",
    left:"39%"
},"vaso")
