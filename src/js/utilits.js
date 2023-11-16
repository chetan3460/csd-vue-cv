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
// import ScrollSmoother from 'gsap/src/ScrollSmoother.min.js'
// import tinycolor from "tinycolor2";

import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Create a ref for the scroll instance
export const scrollInstance = ref(null);

export const scrollSmooth = () => {
  onMounted(() => {
    // Create a new LocomotiveScroll instance
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true }
    });

    // Update the ref value with the scroll instance
    scrollInstance.value = scroll;

    // Attach a scroll event listener to update ScrollTrigger
    scroll.on("scroll", ScrollTrigger.update);

    // Set up ScrollTrigger scrollerProxy
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
  });
};


export const charAnimation = () => {
  onMounted(() => {
    let char_come = document.querySelectorAll(".animation__char_come")
    char_come.forEach((char_come) => {
      let split_char = new SplitType(char_come, { type: "chars, words," })
      gsap.from(split_char.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.06 });
    })



  })
}

export const heroText = () => {
  onMounted(() => {
    var tl = gsap.timeline();
    const split = new SplitType(".hero-2__title, .hero-2__subtitle", { type: "chars" })

    tl.from(split.chars, { opacity: 0, y: 50, duration: 1, ease: "back", stagger: 0.05 })
    tl.fromTo(".secondary-img", { opacity: 0, ease: "back", scale: .7 }, { opacity: 1, ease: "back", scale: 1 }, "-=1")
    tl.fromTo(".main-img", { opacity: 0, ease: "back", scale: .7 }, { opacity: 1, ease: "back", scale: 1 }, ">-0.2")
  })
}


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
        scroller: "[data-scroll-container]",

        trigger: targetParagraphs[0],
        start: '-1000px',
        end: '1000px',
        onUpdate: revealLetters,
      },
    });

    revealLetters();
  });

}
// export const bgColor = () => {

//   /* SMOOTH SCROLL */
//   // gsap.to(window, {
//   //   scrollTo: {
//   //     y: ".page-wrapper",
//   //     offsetY: 100, // Adjust this value based on your layout
//   //   },
//   //   duration: 1, // Adjust the duration as needed
//   //   ease: 'power2.inOut',
//   //   scrollTrigger: {
//   //     trigger: ".page-wrapper",
//   //     start: "top top",
//   //     end: "bottom bottom",
//   //     scrub: true,
//   //   },
//   // });

//   /* COLOR CHANGER */
//   document.addEventListener("DOMContentLoaded", function () {
//     const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
//     scrollColorElems.forEach((colorSection, i) => {
//       const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
//       const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

//       ScrollTrigger.create({
//         trigger: colorSection,
//         start: "top 50%",
//         onEnter: () =>
//           gsap.to("body", {
//             backgroundColor: colorSection.dataset.bgcolor,
//             color: colorSection.dataset.textcolor,
//             overwrite: "auto"
//           }),
//         onLeaveBack: () =>
//           gsap.to("body", {
//             backgroundColor: prevBg,
//             color: prevText,
//             overwrite: "auto"
//           })
//       });
//     });
//   });

// }







// export const test = () => {

//   // onMounted(() => {
//   //   if (document.getElementById('smooth-wrapper2')) {

//   //     let smoother = ScrollSmoother.create({
//   //       wrapper: "#smooth-wrapper2",
//   //       smooth: 3,
//   //       ease: "Power3.easeOut",
//   //       ignoreMobileResize: true,

//   //       // seconds it takes to "catch up" to native scroll position
//   //       effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
//   //     });
//   //   }
//   // })

// }
/*======================================
33. Paragraph Animation
========================================*/
export const paraAnimation = () => {
  const deviceWidth = ref(window.innerWidth);

  onMounted(() => {
    if (deviceWidth.value > 576) {
      const textIntoView = document.querySelectorAll(".p-text");

      textIntoView.forEach((elem) => {
        const innerSplit = new SplitType(elem, {
          type: "lines",
          linesClass: "text-line"
        });
        const outerSplit = new SplitType(elem, {
          type: "lines",
          linesClass: "text-mask"
        });

        const splitTimeline = gsap.timeline({
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: elem,
            scrub: false,
            pin: false,
            start: "top 90%",
            end: "bottom 0%"
          },
          onComplete: () => {
            outerSplit.revert();
            innerSplit.revert();
          }
        });

        splitTimeline
          .to(innerSplit.lines, {
            duration: 1.1,
            autoAlpha: 1,
            y: 0,
            ease: "Power4.easeOut",
            stagger: 0.20
          })
          .to(elem, {
            duration: 0,
            autoAlpha: 1
          }, "<");
      });
    }

    // Add an event listener to update deviceWidth on window resize
    window.addEventListener('resize', () => {
      deviceWidth.value = window.innerWidth;
    });
  })
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
Title Animation
========================================*/
export const useScrollAnimation = () => {

  const splitTitleLines = ref([]);

  onMounted(() => {


    splitTitleLines.value = document.querySelectorAll(".split-title-line");

    splitTitleLines.value.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "[data-scroll-container]",
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
 Position Sticky js
========================================*/
export const btnStickyScroll = () => {
  let testInner = window.innerWidth;

  // Function to initialize ScrollTrigger
  const initScrollTrigger = () => {
    if (testInner <= 991) {
      ScrollTrigger.create({
        scroller: "[data-scroll-container]",

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
        scroller: "[data-scroll-container]",

        scrollTrigger: {
          scroller: "[data-scroll-container]",
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
  };

  onMounted(() => {
    animateTitle();
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



















