function loco(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

 }
 loco();

//  Hover Image Effect
//  const elems = document.querySelectorAll(".p4-item");
//  elems.forEach(function(elem){
//   let photu = elem.querySelector("img");
//   let initialRot = 0;
//   elem.addEventListener("mousemove",(dets)=>{
//     let transDiff = dets.y - elem.getBoundingClientRect().top;
//     let rotDiff = dets.x - initialRot;
//     initialRot = dets.x;

//     gsap.to(photu,{
//       opacity:1,
//       top : transDiff,
//       left : dets.x,
//       rotate : gsap.utils.clamp(-20,20,rotDiff)
//     })
//   })

//   elem.addEventListener("mouseleave",function(e){
//     gsap.to(photu,{
//       opacity:0,
//     })
//   })
//  })
 

 gsap.to("#p1-tagline>h1",{
    x:-800,
    fontWeight:800,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p1-tagline>h1",
        // markers:true,
        scrub:1.5
    }
 })

gsap.from("#about-me",{
    opacity:0,
    stagger:1,
    scrollTrigger:{
      scroller:"#main",
      trigger:"#about-me",
      start:"top 40%",
      end:"top 20%",
      // markers:true,
      scrub:1.5
  }
})


const img = document.querySelector("#p1-img");
img.addEventListener("mousemove",function(dets){
    const rotx = (innerWidth/2 - dets.x)/10 ;
    const roty = (innerHeight/2 - dets.y)/10 ;
    img.style.transform = `rotateX(${rotx}deg) rotateY(${roty}deg)`;
    img.style.transition = `all ease 0.1s`;
})

img.addEventListener("mouseout",function(dets){
  img.style.transform = `rotateX(0deg) rotateY(0deg)`;
  img.style.transition = `all ease 0.3s`;

})

gsap.to(".no-stroke h1",{
  x:-1000,
  duration:6,
  delay:1,
  repeat:-1,
  yoyo:true
})
gsap.from(".stroke h1",{
  x : 0,
  duration:6,
  delay:1,
  repeat:-1,
  yoyo:true
})

var tl = gsap.timeline();

tl.to("#page-3",{
  backgroundColor:"#222222",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page-3",
    start:"top 80%",
    scrub:1.2
  }
})


gsap.from("#dev-img img",{
  y:100,
  opacity:0,
  stagger:0.4,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#dev-img img",
    start:"top 70%",
    end:"top 44%",
    scrub:1.5
  }
})
gsap.from("#design-img img",{
  y:100,
  opacity:0,
  stagger:0.4,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#design-img img",
    start:"top 70%",
    end:"top 50%",
    scrub:1.5
  }
})


gsap.from("#p3-heading",{
  y:100,
  opacity:0,
  stagger:0.4,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#p3-heading",
    start:"top 70%",
    end:"top 50%",
    scrub:1.5
  }
})
gsap.from(".box",{
  rotate:120,
  opacity:0,
  scale:2,
  stagger:0.4,
  scrollTrigger:{
    scroller:"#main",
    trigger:".box",
    start:"top 70%",
    end:"top 50%",
    scrub:1.5
  }
})

gsap.from(".p4-item",{
  x:100,
  delay:2,
  stagger:0.3,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:".p4-item",
    start:"top 70%",
    end:"top 50%",
    scrub:1.5
  }
})
gsap.from("#p4-heading",{
  rotate:180,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:".p4-item",
    start:"top 70%",
    end:"top 50%",
    scrub:1.5
  }
})
gsap.from("#p5-content",{
  rotate:150,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:".p4-item",
    start:"top 90%",
    end:"top 50%",
    scrub:1.5
  }
})



// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
