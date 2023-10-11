export const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
    hamburger = document.querySelector(".hamburger"),
    kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
    pointer = document.querySelector(".cursor-pointer"),
    e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");

  function mouseEvent(folksText) {
    folksText.addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    folksText.addEventListener("mouseleave", function () {
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
              const folksText = a[i];
              mouseEvent(folksText);
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

// GSAP 
import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'
import chroma from "chroma-js"

import gsap from 'gsap/all'
import SplitType from 'split-type'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


/*======================================
29. Title Animation
========================================*/

const windowOn = window;
let larger = 1600;
let xxl = 1400;
let xl = 1200;
let lg = 992;
let md = 768;
let sm = 576;
let device_width = window.innerWidth;


// const handleResize = () => {
//   deviceWidth = window.innerWidth;
// };

// onMounted(() => {
//   windowOn.addEventListener('resize', handleResize);
// });

// onBeforeUnmount(() => {
//   windowOn.removeEventListener('resize', handleResize);
// });

export const useScrollAnimation = () => {

  const splitTitleLines = ref([]);

  onMounted(() => {
    // Your setup code here, similar to what was in the previous example
    // ...
    if (device_width > 576) {
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
    }
  });



}


export const btnStickyScroll = () => {
  let testInner = window.innerWidth;

  // Function to initialize ScrollTrigger
  const initScrollTrigger = () => {
    if (window.innerWidth <= 991) {
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

export const splitTextAnimation = () => {
  const element = ref(null);

  onMounted(() => {
    if (device_width > 576) {

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




    }
  })
}

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
        stagger: 0.15
      }),
      onLeave: batch => gsap.to(batch, {
        opacity: 0,
        y: 24
      }),
      onEnterBack: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15
      }),
      onLeaveBack: batch => gsap.to(batch, {
        opacity: 0,
        y: 24
      }),

      start: "top 80%",
      end: "bottom 20%",
      markers: true,
    });






  });
}