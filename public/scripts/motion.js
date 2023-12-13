import { animate, stagger, scroll } from "motion"
import SplitType from 'split-type';

const heroText = new SplitType('#heroText', { types: 'words'})
const heroElements = [...heroText.words]

animate(heroElements, 
    { y: [24, 0], opacity: [0, 1]},
    { duration: 2, delay: stagger(0.1) }
)
animate('#heroHeader', 
    { y: [24, 0], opacity: [0, 1]},
    { duration: 2, delay: 0 }
)

scroll(
    animate("#rocket", { transform: "translateX(110vw) rotate(18deg) translateY(-100vh)" }),
    { target: document.querySelectorAll('section')[0],
      offset: ['0vh', '30vh']
    }
  );

scroll(
    animate('#project1', { transform: "translateX(110vw) rotate(35deg)" }),
    { target: document.querySelector('#projectContainer'),
      offset: ['0vh', '50vh']
    }
)

scroll(
    animate('#project2', { transform: "translateX(-110vw) rotate(-35deg)" }),
    { target: document.querySelector('#projectContainer'),
      offset: ['50vh', '100vh']
    }
)

scroll(
    animate('#project3', { transform: "translateX(110vw) rotate(35deg)" }),
    { target: document.querySelector('#projectContainer'),
      offset: ['100vh', '150vh']
    }
)

scroll(
    animate('#project4', { transform: "translateX(-110vw) rotate(-35deg)" }),
    { target: document.querySelector('#projectContainer'),
      offset: ['150vh', '200vh']
    }
)


scroll(
  animate('#service1', { x: ['-100vw', 0] }),
  { target: document.querySelector('#service1'),
    offset: ['-150vh', '-50vh']
  },
)

scroll(
  animate('#service2', { x: ['100vw', 0] }),
  { target: document.querySelector('#service2'),
    offset: ['-150vh', '-50vh']
  }
)

scroll(
  animate('#service3', { x: ['-100vw', 0] }),
  { target: document.querySelector('#service3'),
    offset: ['-150vh', '-50vh']
  }
)

scroll(
  animate('#about1', { translateY: ['5vh', '45vh'] }),
  { target: document.querySelector('#aboutContainer'),
    offset: ['100vh', '150vh']
  }
)

scroll(
  animate('#about2', { translateY: ['7vh', '50vh'] }),
  { target: document.querySelector('#aboutContainer'),
    offset: ['50vh', '100vh']
  }
)

scroll(
  animate('#about3', { translateY: ['9vh', '55vh'] }),
  { target: document.querySelector('#aboutContainer'),
    offset: ['0vh', '50vh']
  }
)

scroll(
  animate('#timelineBar', { height: [0, '95%'] }),
  { target: document.querySelector('#timelineContainer'),
    offset: ['-50vh', '60vh']
  }
)

animate('#heroImg', 
    { y: -15 },
    { 
        duration: 3,
        repeat: Infinity,
        direction: "alternate"
    }
)