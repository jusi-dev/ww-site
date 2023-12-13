import { gsap } from "gsap-trial";
    
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);


gsap.to("#rocket", {
  rotate: 10,
  y: '-100vh',
  x: '110vw',
  scrollTrigger: {
    trigger: "#heroSection",
    start: "top top",
    end: "top -200vh",
    scrub: 1,
    onEnter: () => {
      document.getElementById("rocket").style.willChange = "transform";
    },
    onLeave: () => {
      document.getElementById("rocket").style.willChange = "auto";
    },
  }
});

gsap.to('#project4', {
  x: '100vw',
  rotate: 35,
  scrollTrigger: {
    trigger: '#projectContainer',
    start: 'top top',
    end: 'top -300vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#project3', {
  x: '-100vw',
  rotate: -35,
  scrollTrigger: {
    trigger: '#projectContainer',
    start: 'top -300vh',
    end: 'top -600vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#project2', {
  x: '100vw',
  rotate: 35,
  scrollTrigger: {
    trigger: '#projectContainer',
    start: 'top -600vh',
    end: 'top -900vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#project1', {
  x: '-100vw',
  rotate: -35,
  scrollTrigger: {
    trigger: '#projectContainer',
    start: 'top -900vh',
    end: 'top -1200vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#service1', {
  x: '0vw',
  duration: 2,
  scrollTrigger: {
    trigger: '#service1',
    start: 'top 900vh',
    end: 'top 500vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#service2', {
  x: '0vw',
  duration: 2,
  scrollTrigger: {
    trigger: '#service2',
    start: 'top 900vh',
    end: 'top 500vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#service3', {
  x: '0vw',
  duration: 2,
  scrollTrigger: {
    trigger: '#service3',
    start: 'top 900vh',
    end: 'top 500vh',
    scrub: 1,
    markers: true
  }
});