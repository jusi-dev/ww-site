import { gsap } from "gsap-trial";
    
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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

// ##### Projects #####

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
    start: 'top -350vh',
    end: 'top -650vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#project2', {
  x: '100vw',
  rotate: 35,
  scrollTrigger: {
    trigger: '#projectContainer',
    start: 'top -700vh',
    end: 'top -1000vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#project1', {
  x: '-100vw',
  rotate: -35,
  scrollTrigger: {
    trigger: '#projectContainer',
    start: 'top -1050vh',
    end: 'top -1250vh',
    scrub: 1,
    markers: true
  }
});

// ##### SERVICE #####

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

// ##### ABOUT #####

gsap.to('#about3', {
  y: '100vw',
  scrollTrigger: {
    trigger: '#aboutContainer',
    start: 'top -350vh',
    end: 'top -650vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#about2', {
  y: '100vw',
  scrollTrigger: {
    trigger: '#aboutContainer',
    start: 'top -700vh',
    end: 'top -1000vh',
    scrub: 1,
    markers: true
  }
});

gsap.to('#about1', {
  y: '100vw',
  scrollTrigger: {
    trigger: '#aboutContainer',
    start: 'top -1050vh',
    end: 'top -1250vh',
    scrub: 1,
    markers: true
  }
});

// ##### TIMELINE #####

gsap.to('#timelineBar', {
  scaleY: '95%',
  scrollTrigger: {
    trigger: '#timelineContainer',
    start: 'top 40%',
    end: 'bottom 50%',
    scrub: 1,
    markers: {
      startColor: 'purple',
      endColor: 'lightblue'
    }
  }
})