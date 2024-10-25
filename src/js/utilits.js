// GSAP 
import {
  ref,
  onMounted
} from 'vue'

import chroma from "chroma-js"
import gsap from 'gsap/all'
import SplitType from 'split-type'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Power2 } from 'gsap'
import Lenis from 'lenis'
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)






// Lenis Scroll 
export const scrollSmooth = () => {
  onMounted(() => {



    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      // direction: 'vertical',
      // gestureDirection: 'vertical',
      // smoothTouch: false,
      touchMultiplier: 2,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  });
};

// Banner animation



export const heroAnimationControl = () => {
  // if (window.innerWidth > 625) {

  //   const heroSection = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.hero',
  //       pin: true,
  //       pinSpacing: false,
  //       start: 'top top',
  //       end: 'bottom top',
  //       scrub: 1,
  //       ease: 'linear',
  //     }
  //   });

  //   heroSection.to('.hero--inner', {
  //     scale: 0.7,
  //     stagger: 0.5,
  //   });

  //   // Replacing jQuery with native JavaScript
  //   const worksElement = document.querySelector('.works');
  //   const heroElement = document.querySelector('.hero');

  //   if (worksElement && heroElement) {
  //     gsap.from(worksElement, {
  //       scrollTrigger: {
  //         trigger: worksElement,
  //         scrub: true,
  //         start: "top 95%",
  //         onEnter: () => heroElement.classList.add('hero-disable'),
  //         onLeaveBack: () => heroElement.classList.remove('hero-disable'),
  //       },
  //     });
  //   }
  // }
  if (window.innerWidth > 625) {
    const heroSection = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        pin: true,
        pinSpacing: false,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        ease: 'linear',
      },
    });

    heroSection.to('.hero--inner', {
      scale: 0.7,
      stagger: 0.5,
    });

    gsap.from(document.querySelector('.works'), {
      scrollTrigger: {
        trigger: document.querySelector('.works'),
        scrub: true,
        start: 'top 95%',
        onEnter: () => document.querySelector('.hero').classList.add('hero-disable'),
        onLeaveBack: () => document.querySelector('.hero').classList.remove('hero-disable'),
      },
    });
  }

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




export const useBannerAnimation = () => {
  const view = ref(null);
  const homeHeroText = ref(null)
  const homeHeroHead = ref(null);
  const homePlayer = ref(null);
  const homePlayerReel = ref(null);

  onMounted(() => {


    const DOM = {
      homeHeroText: homeHeroText.value,
      homePlayer: homePlayer.value,
      homePlayerReel: homePlayerReel.value,

    };
    const homeHeroHead = document.querySelector(".c-hm-hero_head");

    const animation = gsap.to(homeHeroHead, {
      transformOrigin: "center bottom",
      opacity: 0,
      yPercent: 150,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: homeHeroHead,
        scrub: 0.3,
        start: "top top+=30",
        // markers: true,
      }
    });


    const timeline = gsap.timeline();

    timeline
      .set(view.value, { opacity: 1 })
      .set(DOM.homeHeroText, { opacity: 0 })
      .set(DOM.homePlayer, {
        yPercent: -40,
        z: 150,
        transformOrigin: "center bottom"
      })
      .to(
        DOM.homePlayer,
        {
          duration: 1.5,
          yPercent: 0,
          z: 0,
          ease: "expo.inOut",
          clearProps: "all"
        },
        "S"
      )
      .to(DOM.homeHeroText, { opacity: 1 }, "S+=0.5")
      .set(DOM.homePlayer, { clearProps: "all" })
      .add(timeline.kill);

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: DOM.homePlayer,
        scrub: true,
        start: "top top+=10",
        pin: true,
        pinType: "transform",
        pinSpacing: false,
        // markers: true,
      }
    });

    scrollTimeline
      .to(DOM.homePlayerReel, { paddingTop: 100 }, "A")
      .to(DOM.homePlayer, { height: 100 }, "A");
  });
  return { view, homeHeroText, homeHeroHead, homePlayer, homePlayerReel };

}

// About
export const stickyElement = () => {
  function ShowcaseOverlapping() {
    gsap.utils.toArray('.about-sec').forEach((pinnedSection) => {

      const transformTextsAnim = pinnedSection.querySelectorAll('.sticky-statement2');

      function setImagesProperties() {
        gsap.set(transformTextsAnim, { height: window.innerHeight });
      }

      setImagesProperties();

      window.addEventListener('resize', setImagesProperties);

      transformTextsAnim.forEach((transformTextAnim, i, arr) => {
        const durationMultiplier = arr.length - i - 1;


        ScrollTrigger.create({
          trigger: transformTextAnim,
          start: function () {
            const centerPin = (window.innerHeight - transformTextAnim.offsetHeight) / 2;
            return "top +=" + centerPin;
          },
          end: function () {
            const durationHeight = transformTextAnim.offsetHeight * durationMultiplier + (transformTextAnim.offsetHeight - transformTextAnim.offsetHeight) / 2;
            return "+=" + durationHeight;
          },
          pin: true,
          pinSpacing: false,
          scrub: true,
        });

        const animationProperties = {
          y: 500,
          scale: 0.65,
          opacity: 0,
          zIndex: 0,
          duration: 0.05,
          ease: 0.05,
          // ease: Linear.easeNone
        };

        // animationProperties.filter = "blur(10px)";

        ScrollTrigger.create({
          trigger: transformTextAnim,
          start: function () {
            const centerPin = (window.innerHeight - transformTextAnim.offsetHeight) / 2;
            console.log('center pin', centerPin);
            return "top top";
          },
          end: function () {
            const durationHeight = transformTextAnim.offsetHeight + (transformTextAnim.offsetHeight - transformTextAnim.offsetHeight) / 2;
            return "+=" + durationHeight;
          },
          scrub: true,
          animation: gsap.to(transformTextAnim, animationProperties),
        });

      });

    });

  }
  ShowcaseOverlapping();




  gsap.to('.services_gategory-heading', {
    scrollTrigger: {
      trigger: '.services_right-col',
      start: '40% top',
      end: '40% top',
      toggleActions: 'restart none reverse',
    },
    yPercent: -100,
    duration: 0.5,
    ease: 'power2.inOut',
  })

  gsap.from('.slide', {
    scrollTrigger: {
      trigger: '.services_right-col',
      start: '-25% top',
      end: '80% top',
      scrub: true,
      toggleActions: 'restart none reverse',
    },
    x: '+=5rem',
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power4.out',
  })

}




export const Cards = () => {

  //Move Thumbs Gallery			
  onMounted(() => {
    if ($('.move-thumbs-wrapper').length > 0) {

      if (!isMobile()) {

        function animateElements(moveThumbs, overlappingThumbs, moveThumbsParent) {

          moveThumbs.forEach((moveThumb, index) => {
            const state = Flip.getState(moveThumb);
            overlappingThumbs[index].appendChild(moveThumb);

            const moveAnimation = Flip.from(state, {
              duration: 1,
              ease: 'power4.inOut',
            });

            const startOffset = moveThumbsParent[index].dataset.start;
            const endOffset = moveThumbsParent[index].dataset.stop;

            ScrollTrigger.create({
              trigger: moveThumbsParent[index], // Folosim fiecare element parent ĂŽn parte
              start: startOffset,
              end: endOffset,
              scrub: true,
              animation: moveAnimation,
            });

          });

          gsap.to(startThumbsCaption, {
            scrollTrigger: {
              trigger: startThumbsCaption,
              start: function () {
                const startPin = (window.innerHeight - startThumbsCaption.offsetHeight) / 2;
                return "top +=" + startPin;
              },
              end: function () {
                const durationHeight = window.innerHeight;
                return "+=" + durationHeight;
              },
              pin: true,
              pinSpacing: false,
              scrub: true,
            },
            opacity: 0,
            ease: "power1.inOut",
          });

        }


        const moveThumbsWrapper = document.querySelector('.move-thumbs-wrapper');
        const startThumbsCaption = document.querySelector('.start-thumbs-caption');
        const moveThumbsParent = document.querySelectorAll('.start-thumbs-wrapper .start-move-thumb');
        const moveThumbs = document.querySelectorAll('.start-thumbs-wrapper .move-thumb-inner');
        const endThumbsWrapper = document.querySelector('.end-thumbs-wrapper');
        const overlappingThumbs = document.querySelectorAll('.end-thumbs-wrapper .end-move-thumb');

        animateElements(Array.from(moveThumbs), Array.from(overlappingThumbs), Array.from(moveThumbsParent));

      }

    }
  })

}

/* ===================================
  Infinite looping animation
  ====================================== */
export const loopAnim = () => {
  onMounted(() => {


    const wrapperEl = document.querySelector('.looping-wrapper') || false;
    const numberOfEls = 100;
    const duration = 6000;
    const delay = duration / numberOfEls;

    let tl = anime.timeline({
      duration: delay,
      complete: function () {
        tl.restart();
      }
    });

    function createEl(i) {
      let el = document.createElement('div');
      const rotate = (360 / numberOfEls) * i;
      const translateY = -50;
      el.classList.add('el');
      el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
      tl.add({
        begin: function () {
          anime({
            targets: el,
            rotate: [rotate + 'deg', rotate + 10 + 'deg'],
            translateY: [translateY + '%', translateY + 10 + '%'],
            scale: [1, 1.25],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: duration * .1
          });
        }
      });
      if (wrapperEl)
        wrapperEl.appendChild(el);
    }

    for (let i = 0; i < numberOfEls; i++)
      createEl(i);

  })
}


export const titleAnim = () => {
  onMounted(() => {
    const zm = gsap.matchMedia();

    zm.add("(min-width: 1200px)", () => {
      if (document.querySelector('.tp-hero-title-wrap')) {
        // Set initial properties for the image
        gsap.set(".tp-zoom-img", { scale: 0, opacity: 0 });

        // Define the animation
        gsap.to(".tp-zoom-img", {
          scrollTrigger: {
            trigger: ".tp-hero-title-wrap",
            start: "top 10%",
            // start: "center center",
            // markers: true
          },
          duration: 1.5,
          ease: "none",
          scale: 1,
          opacity: 1,
        });
      }
    });

  })
}










/*======================================
 Hero Title Animation
========================================*/
export const titleAnimation = () => {
  const animateTitle = () => {
    const tl = gsap.timeline();
    const mySplitText = new SplitType(".title-anim", { type: "words,chars" });
    const chars = mySplitText.chars;

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      delay: 1,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.08
    });
    tl.fromTo(".main-img", { opacity: 0, ease: "back", scale: .7 }, { opacity: 1, ease: "back", scale: 1 }, ">-0.2")

  };

  onMounted(() => {
    animateTitle();
  });
}


/*======================================
 Reveal Letter Animation
========================================*/

export const revealLetter = () => {



  let targetParagraphs = [];
  let letters = [];

  onMounted(() => {
    targetParagraphs = document.querySelectorAll('.target-paragraphs');

    targetParagraphs.forEach((paragraph) => {
      let pArray = paragraph.textContent.split('');
      paragraph.innerHTML = pArray.map((letter) => `<span>${letter}</span>`).join('');
    });

    letters = document.querySelectorAll('.target-paragraphs span');

    function revealLetters() {
      for (let i = 0; i < letters.length; i++) {
        let { left, top } = letters[i].getBoundingClientRect();
        top = top - window.innerHeight * 0.5;
        let opacityValue =
          1 - (top * 0.01 + left * 0.001) < 0.1
            ? 0.1
            : 1 - (top * 0.01 + left * 0.001);

        opacityValue = opacityValue > 1 ? 1 : parseFloat(opacityValue.toFixed(3));
        letters[i].style.opacity = opacityValue;
      }
    }

    gsap.to(letters, {
      opacity: 0,
      scrollTrigger: {

        trigger: targetParagraphs[0],
        start: '-1000px',
        end: '1000px',
        onUpdate: revealLetters,
      },
    });

    revealLetters();
  });

}



/*======================================
  Section Title Animation
========================================*/
export const sectionTitleAnim = () => {

  const splitTitleLines = ref([]);

  onMounted(() => {


    splitTitleLines.value = document.querySelectorAll(".split-title-line");

    splitTitleLines.value.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitType(splitTextLine, {
        type: "words, lines",
      });
      gsap.set(splitTextLine, {
        perspective: 400
      });
      itemSplitted.split({
        type: "lines"
      });

      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.3,
      });
    });

  });
}

/*======================================
  About Me Title Animation
========================================*/
export const wordSlide = () => {
  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 60%',
      onEnter: () => timeline.play(),
    });
  }

  onMounted(() => {
    // Split text into spans
    const typeSplit = new SplitType('.text-split', {
      types: 'words, chars',
      tagName: 'span',
    });

    const wordsSlideFromRight = document.querySelectorAll('.words-slide-from-right');

    wordsSlideFromRight.forEach((element) => {
      const tl = gsap.timeline({ paused: true });
      const wordElements = element.querySelectorAll('.word');

      tl.from(wordElements, {
        opacity: 0,
        x: '1em',
        duration: 1.5, // Adjust duration for a slower animation
        ease: 'power4.out', // Adjust easing function for a smoother motion
        stagger: { amount: 0.5 }, // Adjust stagger for more spacing between elements
      });

      createScrollTrigger(element, tl);
    });

    // Avoid flash of unstyled content
    gsap.set('.text-split', { opacity: 1 });
  });
}



/*======================================
  About Image Animation
========================================*/
export const imgRevel = () => {
  onMounted(() => {
    let img_anim_reveal = document.querySelectorAll(".img_anim_reveal");

    img_anim_reveal.forEach((img_reveal) => {
      let image = img_reveal.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: img_reveal,
          start: "top 50%",
        }
      });

      tl.set(img_reveal, { autoAlpha: 1 });
      tl.from(img_reveal, 0.6, { // Adjust the duration for a faster animation
        xPercent: -100,
        ease: Power2.out
      });
      tl.from(image, 0.6, { // Adjust the duration for a faster animation
        xPercent: 100,
        scale: 1.3,
        delay: -0.6, // Adjust the delay for proper sequencing
        ease: Power2.out
      });
    });
  });
};




export const charAnimation = () => {
  onMounted(() => {
    let word_come_long = document.querySelectorAll(".animation__word_come_long")
    word_come_long.forEach((word_come_long) => {
      let split_word_come_long = new SplitType(word_come_long, { type: "chars words", position: "absolute" })
      gsap.from(split_word_come_long.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.5 });
    })

  });
}



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

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
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



/*======================================
 Position Sticky js
========================================*/
export const btnStickyScroll = () => {
  let testInner = window.innerWidth;

  // Function to initialize ScrollTrigger
  const initScrollTrigger = () => {
    if (testInner <= 991) {
      ScrollTrigger.create({

        trigger: '.bd-position-sticky',
        start: '-100 top',
        end: '10% +20px center',
        pin: '.column.two',
        pinSpacing: false,
        // markers: true,

      });
    } else {
      ScrollTrigger.create({
        scroller: "[data-scroll-container]",

        trigger: '.bd-position-sticky',
        start: '-180 top',
        end: '90% +190px center',
        pin: '.column.two',
        pinSpacing: false,
        // markers: true,

      });
    }
  };

  // Call initScrollTrigger when the component is mounted
  onMounted(() => {
    initScrollTrigger();
  });

}

/*======================================
 Text split Animation
========================================*/
export const splitTextAnimation = () => {
  const element = ref(null);
  // let testInner = window.innerWidth;

  onMounted(() => {

    element.value = document.querySelectorAll(".folks-text")
    element.value.forEach((element) => {
      let folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,

        scrollTrigger: {
          trigger: element,
          start: 'bottom 100%-=50px'
        }
      });
      gsap.set(element, {
        opacity: 0
      });
      gsap.to(element, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          scroller: "[data-scroll-container]",

          trigger: element,
          start: 'bottom 100%-=50px',
          once: true
        }
      });
      let mySplitText = new SplitType(element, {
        type: "words,chars,capitalize"
      });
      let chars = mySplitText.chars;
      let folksGradient = chroma.scale(['#14CF93', '#F8EC3A']);
      folksBD.to(chars, {
        duration: 0.5,
        scaleY: 0.6,
        ease: "power3.out",
        stagger: 0.04,
        transformOrigin: 'center bottom'
      });
      folksBD.to(chars, {
        yPercent: -20,
        ease: "elastic",
        stagger: 0.03,
        duration: 0.8
      }, 0.5);
      folksBD.to(chars, {
        scaleY: 1,
        ease: "elastic.out(2.5, 0.2)",
        stagger: 0.03,
        duration: 1.5
      }, 0.5);
      folksBD.to(chars, {
        color: (i, el, arr) => {
          return folksGradient(i / arr.length).hex();
        },
        ease: "power2.out",
        stagger: 0.03,
        duration: 0.3
      }, 0.5);
      folksBD.to(chars, {
        yPercent: 0,
        ease: "back",
        stagger: 0.03,
        duration: 0.8
      }, 0.7);
      folksBD.to(chars, {
        color: '#14CF93',
        duration: 1.4,
        stagger: 0.05
      });
    })
  });
}




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



















