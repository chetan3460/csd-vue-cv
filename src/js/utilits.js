// GSAP 
import {
  ref,
  onMounted,
  onUnmounted,
  nextTick
} from 'vue'

// import chroma from "chroma-js"
import gsap from 'gsap/all'
import SplitType from 'split-type'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Power2, Quint } from 'gsap'
import Lenis from 'lenis'
import Flip from 'gsap/Flip';
import imagesLoaded from 'imagesloaded'

gsap.registerPlugin(ScrollTrigger, Flip);






// Lenis Scroll 
export const scrollSmooth = () => {
  // onMounted(() => {



  //   const lenis = new Lenis({
  //     lerp: 0.1,
  //     smooth: true,
  //     // direction: 'vertical',
  //     // gestureDirection: 'vertical',
  //     // smoothTouch: false,
  //     touchMultiplier: 2,
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  //   });


  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   lenis.on('scroll', ScrollTrigger.update)

  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000)
  //   })

  //   gsap.ticker.lagSmoothing(0)
  // });
  let lenis; // Variable to hold the Lenis instance

  // Function to initialize Lenis for smooth scrolling
  const initSmoothScrolling = () => {
    // Instantiate the Lenis object with specified properties
    lenis = new Lenis({
      lerp: 0.1, // Lower values create a smoother scroll effect
      smoothWheel: true, // Enables smooth scrolling for mouse wheel events
    });

    // Update ScrollTrigger each time the user scrolls
    lenis.on('scroll', () => ScrollTrigger.update());

    // Define a function to run at each animation frame
    const scrollFn = (time) => {
      lenis.raf(time); // Run Lenis' requestAnimationFrame method
      requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
    };

    // Start the animation frame loop
    requestAnimationFrame(scrollFn);
  };
  onMounted(() => {
    // Initialize smooth scrolling when the component is mounted
    initSmoothScrolling();
  });

};

export const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  });
};


// Font 
export const fontAnim = () => {
  onMounted(() => {
    const elements = [...document.querySelectorAll("[data-scroll-var]")];

    elements.forEach((el) => {
      const end = el.dataset.end || "bottom center";
      const start = el.dataset.start || "top bottom";
      const scrollOnce = el.dataset.scrollOnce === "true";
      const markers = el.dataset.markers === "true";
      const ease = el.dataset.ease || "power1.inOut";

      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start,
          end: scrollOnce ? false : end,
          scrub: !scrollOnce && 1,
          once: scrollOnce,
          markers,
        },
        "--i": 1,
        duration: 1,
        ease,
      });
    });
  });
}



// Flip 
// export const stickyCards = () => {
//   const galleryEl = ref(null);

//   const triggerFlipOnScroll = (galleryEl, options) => {
//     let settings = {
//       flip: {
//         absoluteOnLeave: false,
//         absolute: false,
//         scale: true,
//         simple: true,
//       },
//       scrollTrigger: {
//         start: 'center center',
//         end: '+=300%',
//         marker: true
//       },
//       stagger: 0,
//     };

//     settings = Object.assign({}, settings, options);

//     // Select gallery items and ensure they are valid DOM elements
//     const galleryCaption = galleryEl.querySelector('.caption');
//     const galleryItems = galleryEl.querySelectorAll('.gallery__item');

//     // Ensure we are getting a proper array of elements
//     const galleryItemsArray = Array.from(galleryItems);

//     // Check if elements exist before proceeding
//     if (galleryItemsArray.length === 0 || !galleryCaption) {
//       console.error("Gallery items or caption not found.");
//       return;
//     }

//     // Temporarily add a class to capture the final state of Flip
//     galleryEl.classList.add('gallery--switch');

//     // Manually convert NodeLists to arrays and pass to Flip.getState()
//     const flipState = Flip.getState([...galleryItemsArray, galleryCaption], { props: 'filter, opacity' });

//     galleryEl.classList.remove('gallery--switch');

//     // Create the Flip animation
//     const tl = Flip.to(flipState, {
//       ease: 'none',
//       absoluteOnLeave: settings.flip.absoluteOnLeave,
//       absolute: settings.flip.absolute,
//       scale: settings.flip.scale,
//       simple: settings.flip.simple,
//       scrollTrigger: {
//         trigger: galleryEl,
//         start: settings.scrollTrigger.start,
//         end: settings.scrollTrigger.end,
//         pin: galleryEl.parentNode,
//         scrub: true,
//       },
//       stagger: settings.stagger,
//     });


//   };

//   // Scroll-triggered animations setup
//   const scroll = () => {
//     const galleries = [

//       { id: '#gallery-3', options: { flip: { absolute: true, scale: false }, scrollTrigger: { start: 'center center', end: '+=900%' }, stagger: 0.05 } },
//       { id: '#gallery-4' },

//     ];

//     galleries.forEach(gallery => {
//       const galleryElement = document.querySelector(gallery.id);
//       if (galleryElement) {
//         triggerFlipOnScroll(galleryElement, gallery.options);
//       }
//     });
//   };
//   // Preload images
//   onMounted(() => {
//     preloadImages('.gallery__item').then(() => {
//       // Initialize scroll-triggered animations after images are loaded
//       scroll();

//       document.body.classList.remove('loading');
//     });
//   });
// }







export const stickyCards = () => {
  const galleryEl = ref(null);

  // Flip animation for sticky cards
  const triggerFlipOnScroll = (galleryEl, options) => {
    let settings = {
      flip: {
        absoluteOnLeave: false,
        absolute: false,
        scale: true,
        simple: true,
      },
      scrollTrigger: {
        start: 'center center',
        end: '+=300%',
        marker: true,
      },
      stagger: 0,
    };

    settings = Object.assign({}, settings, options);

    // Select gallery items and ensure they are valid DOM elements
    const galleryCaption = galleryEl.querySelector('.caption');
    const galleryItems = galleryEl.querySelectorAll('.gallery__item');

    // Ensure we are getting a proper array of elements
    const galleryItemsArray = Array.from(galleryItems);

    // Check if elements exist before proceeding
    if (galleryItemsArray.length === 0 || !galleryCaption) {
      console.error("Gallery items or caption not found.");
      return;
    }

    // Temporarily add a class to capture the final state of Flip
    galleryEl.classList.add('gallery--switch');

    // Manually convert NodeLists to arrays and pass to Flip.getState()
    const flipState = Flip.getState([...galleryItemsArray, galleryCaption], { props: 'filter, opacity' });

    galleryEl.classList.remove('gallery--switch');

    // Create the Flip animation
    const tl = Flip.to(flipState, {
      ease: 'none',
      absoluteOnLeave: settings.flip.absoluteOnLeave,
      absolute: settings.flip.absolute,
      scale: settings.flip.scale,
      simple: settings.flip.simple,
      scrollTrigger: {
        trigger: galleryEl,
        start: settings.scrollTrigger.start,
        end: settings.scrollTrigger.end,
        pin: galleryEl.parentNode,
        scrub: true,
      },
      stagger: settings.stagger,
    });
  };

  // Related demos animation
  const animateRelatedDemos = () => {
    const relatedSection = document.querySelector('.card-wrap');
    const relatedDemos = [...relatedSection.querySelectorAll('.card-wrap > .card')];

    gsap.from(relatedDemos, {
      scale: 0,
      ease: 'sine',
      stagger: {
        each: 0.04,
        from: 'center',
      },
      scrollTrigger: {
        trigger: relatedSection,
        start: 'top bottom', // Trigger animation when the top of relatedSection hits the bottom of the viewport
        end: '+=100%',       // End the trigger after the section has been fully in the viewport
        scrub: true,         // Sync animation with scroll
        // markers: true,       // Debug markers
      },
    });
  };


  const fontAnim = () => {
    const elements = [...document.querySelectorAll("[data-scroll-var]")];

    elements.forEach((el) => {
      const end = el.dataset.end || "bottom center";
      const start = el.dataset.start || "top bottom";
      const scrollOnce = el.dataset.scrollOnce === "true";
      const markers = el.dataset.markers === "true";
      const ease = el.dataset.ease || "power1.inOut";

      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start,
          end: scrollOnce ? false : end,
          scrub: !scrollOnce && 1,
          once: scrollOnce,
          markers,
        },
        "--i": 1,
        duration: 1,
        ease,
      });
    });
  };

  // Scroll-triggered animations setup
  const scroll = () => {
    const galleries = [
      { id: '#gallery-3', options: { flip: { absolute: true, scale: false }, scrollTrigger: { start: 'center center', end: '+=900%' }, stagger: 0.05 } },
      { id: '#gallery-4' },
    ];

    galleries.forEach(gallery => {
      const galleryElement = document.querySelector(gallery.id);
      if (galleryElement) {
        triggerFlipOnScroll(galleryElement, gallery.options);
      }
    });

    // Initialize related demos animation
    animateRelatedDemos();
    fontAnim();

  };

  // Preload images and initialize scroll animations
  onMounted(() => {
    preloadImages('.gallery__item').then(() => {
      // Initialize scroll-triggered animations after images are loaded
      scroll();

      document.body.classList.remove('loading');
    });
  });
};




// Quote
export const paralaxAnimation = () => {
  const getParalaxElems = document.querySelectorAll('.paralax--effect');
  let getParalaxElemsHeight;

  if (window.innerWidth > 770) {
    getParalaxElemsHeight = 200
  } else {
    getParalaxElemsHeight = 140
  }

  getParalaxElems.forEach(elem => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        scrub: true,
        start: "top bottom",
        end: "+=100%"
      },
      height: getParalaxElemsHeight,
      transformOrigin: "left top",
      ease: "none",
    });

  });
}






/*======================================
 Reveal Letter Animation
========================================*/

export const revealLetter = () => {


  const splitTypes = document.querySelectorAll('.reveal-type');
  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: ['chars', 'words'] });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: false
      },
      opacity: 0.2,
      stagger: 0.1,
    })
  });


}

// export const Item = () => {
//   // Initialize DOM and style related properties
//   // Various elements within this item
//   DOM = {
//     // Main DOM element
//     el: null,
//     // .title-wrap element
//     titleWrap: null,
//     // .title--up
//     titleUp: null,
//     // .title--down
//     titleDown: null,
//     // .content elements
//     content: null,
//     // svg element
//     svg: null,
//     // This is the mask element, it can be either a circle or a path SVG element.
//     // We will be animating the 'radius' attribute for circle or the 'd' attribute for path.
//     mask: null,
//     // image element
//     image: null,
//   };
//   // flipstate saves the current state of title elements
//   flipstate = null;

//   /**
//    * Sets up the necessary elements and data for an Item instance.
//    * @param {HTMLElement} DOM_el - The DOM element that represents the item.
//    */
//   constructor(DOM_el) {
//     // Assign DOM elements
//     this.DOM.el = DOM_el;
//     this.DOM.titleWrap = this.DOM.el.querySelector('.title-wrap');
//     this.DOM.titleUp = this.DOM.titleWrap.querySelector('.title--up');
//     this.DOM.titleDown = this.DOM.titleWrap.querySelector('.title--down');
//     this.DOM.content = [...this.DOM.el.querySelectorAll('.content')];
//     this.DOM.svg = this.DOM.el.querySelector('.content__img');
//     this.DOM.mask = this.DOM.svg.querySelector('.mask');
//     this.DOM.image = this.DOM.svg.querySelector('image');

//     // Save current state
//     this.flipstate = Flip.getState([this.DOM.titleUp, this.DOM.titleDown]);

//     // Change layout
//     this.DOM.content[1].prepend(this.DOM.titleUp, this.DOM.titleDown);

//     // Check if the mask element is a circle or a path
//     const isCircle = this.DOM.mask.tagName.toLowerCase() === 'circle';

//     // Create the Flip.from that we'll pass into the ScrollTrigger animation property
//     const flip = Flip.from(this.flipstate, {
//       ease: 'none',
//       simple: true
//     })
//       .fromTo(this.DOM.mask, {
//         attr: isCircle ? { r: this.DOM.mask.getAttribute('r') } : { d: this.DOM.mask.getAttribute('d') },
//       }, {
//         ease: 'none',
//         attr: isCircle ? { r: this.DOM.mask.dataset.valueFinal } : { d: this.DOM.mask.dataset.valueFinal },
//       }, 0)
//       // Also scale up the image element
//       .fromTo(this.DOM.image, {
//         transformOrigin: '50% 50%',
//         filter: 'brightness(100%)'
//       }, {
//         ease: 'none',
//         scale: isCircle ? 1.2 : 1,
//         filter: 'brightness(150%)'
//       }, 0);


//     ScrollTrigger.create({
//       trigger: this.DOM.titleWrap,
//       ease: 'none',
//       start: 'clamp(top bottom-=10%)',
//       end: '+=40%',
//       scrub: true,
//       animation: flip,
//     });



//   }
// }





export const Item = () => {
  const el = document.querySelector('.content--layout-1');
  console.log({
    titleWrap: el.querySelector('.title-wrap'),
    titleUp: el.querySelector('.title--up'),
    titleDown: el.querySelector('.title--down'),
    content: [...el.querySelectorAll('.content')],
    svg: el.querySelector('.content__img'),
    mask: el.querySelector('.mask'),
    image: el.querySelector('image'),
  });
  if (!el) {
    console.error('Main element not found!');
    return;
  }

  // Assign DOM elements
  const DOM = {
    el,
    titleWrap: el.querySelector('.title-wrap'),
    titleUp: el.querySelector('.title--up'),
    titleDown: el.querySelector('.title--down'),
    content: [...el.querySelectorAll('.content')],
    svg: el.querySelector('.content__img'),
    mask: el.querySelector('.mask'),
    image: el.querySelector('image'),
  };

  // Check for missing elements
  if (!DOM.titleWrap || !DOM.titleUp || !DOM.titleDown || !DOM.svg || !DOM.mask || !DOM.image) {
    console.error('One or more required elements are missing!', DOM);
    return;
  }

  const isCircle = DOM.mask.tagName.toLowerCase() === 'circle';

  // Check initial attributes
  const initialAttr = isCircle
    ? DOM.mask.getAttribute('r')
    : DOM.mask.getAttribute('d');
  const finalAttr = DOM.mask.dataset.valueFinal;

  if (!initialAttr || !finalAttr) {
    console.error('Mask attributes are missing or invalid!', { initialAttr, finalAttr });
    return;
  }

  // Save current Flip state
  const flipstate = Flip.getState([DOM.titleUp, DOM.titleDown]);

  // Change layout
  if (DOM.content.length > 1) {
    DOM.content[1].prepend(DOM.titleUp, DOM.titleDown);
  }

  // Create Flip animation
  const flip = Flip.from(flipstate, {
    ease: 'none',
    simple: true,
  })
    .fromTo(
      DOM.mask,
      {
        attr: isCircle ? { r: initialAttr } : { d: initialAttr },
      },
      {
        attr: isCircle ? { r: finalAttr } : { d: finalAttr },
        ease: 'none',
      },
      0
    )
    .fromTo(
      DOM.image,
      {
        transformOrigin: '50% 50%',
        filter: 'brightness(100%)',
      },
      {
        scale: isCircle ? 1.2 : 1,
        filter: 'brightness(150%)',
        ease: 'none',
      },
      0
    );

  // Create ScrollTrigger
  ScrollTrigger.create({
    trigger: DOM.titleWrap || el,
    start: 'clamp(top bottom-=10%)',
    end: '+=40%',
    scrub: true,
    animation: flip,

    scroller: lenis.scrollContainer,

  });
  // Call ScrollTrigger.refresh() when necessary (e.g., after DOM or layout changes)
  function refreshScrollTrigger() {
    ScrollTrigger.refresh();
  }

  // Optionally, add a resize event to refresh ScrollTrigger
  window.addEventListener('resize', refreshScrollTrigger);
};




/*======================================
  Custom Cursor 
========================================*/
export const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
    hamburger = document.querySelector(".hamburger"),
    kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
    pointer = document.querySelector(".cursor-pointer"),
    e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    element.addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }
  if (myCursor.length) {
    if (document.body) {
      let o = !1;
      (window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)");
      }),
        document.body.addEventListener(
          "mouseenter",
          // "a,.kura_tm_topbar .trigger, .cursor-pointer",
          function () {
            let a = document.querySelectorAll("a");
            e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

            for (let i = 0; i < a.length; i++) {
              const element = a[i];
              mouseEvent(element);
            }

            hamburger && mouseEvent(hamburger);
            kura_tm_topbar && mouseEvent(kura_tm_topbar);
            pointer && mouseEvent(pointer);
          }
        ),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
};



/*======================================
  On Scroll Add Active class
========================================*/
export const scroll_ = () => {
  const sections = document.querySelectorAll(".scroll_section");
  const navLi = document.querySelectorAll(".navbar-nav li ");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("active");
    }
  });
};






const windowOn = window;
let larger = 1600;
let xxl = 1400;
let xl = 1200;
let lg = 992;
let md = 768;
let sm = 576;
let device_width = ref(window.innerWidth);







// 
export const listAnimation = () => {
  onMounted(() => {


    gsap.set(".skill-item", {
      opacity: 0,
      y: 24
    });

    ScrollTrigger.batch(".skill-item", {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.10
      }),
      onLeave: batch => gsap.to(batch, {
        opacity: 0,
        y: 24
      }),
      onEnterBack: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.10
      }),
      onLeaveBack: batch => gsap.to(batch, {
        opacity: 0,
        y: 24
      }),

      start: "top 80%",
      end: "bottom 20%",
      // markers: true,
    });


  });
}













// export const listAnimation = () => {
//   onMounted(() => {
//     const items = document.querySelectorAll('.skill-item');

//     items.forEach((item) => {
//       const speed = parseFloat(item.getAttribute('data-speed')) || 1;
//       const lag = parseFloat(item.getAttribute('data-lag')) || 0;

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: 'top 80%',
//           end: 'bottom 20%',
//           scrub: true,
//         },
//       });

//       timeline.to(item, {
//         y: 0,
//         duration: speed,
//         delay: lag,
//       });
//     });
//   });
// };

// ScrollTop 
export const scrollTop = () => {
  var bar = document.querySelector(".progressbar");
  var line = document.querySelector(".progressbar .line");
  var documentHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var winScroll = window.scrollY;
  var value = (winScroll / (documentHeight - windowHeight)) * 100;
  var position = value;
  if (winScroll > 100) {
    bar.classList.add("animate");
    line.style.height = position + "%";
  } else {
    bar.classList.remove("animate");
  }




};



















