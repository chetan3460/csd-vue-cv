// GSAP 
import {
  ref,
  onMounted,
  onUnmounted
} from 'vue'


import chroma from "chroma-js"

import gsap from 'gsap/all'
import SplitType from 'split-type'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { ScrollSmoother } from 'gsap/src/ScrollSmoother.min.js'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother)

export const scrollSmooth = () => {



  onMounted(() => {
    if (document.getElementById('smooth-wrapper')) {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        ignoreMobileResize: true,
        // preventDefault: true,
        smooth: 0.8,
        ease: "Power3.easeOut",
        effects: true,
        // onUpdate: (self) => {
        //   progress.value = self.progress;
        // }
      });
    }
  });
};

export const test = () => {

  // onMounted(() => {
  //   if (document.getElementById('smooth-wrapper2')) {

  //     let smoother = ScrollSmoother.create({
  //       wrapper: "#smooth-wrapper2",
  //       smooth: 3,
  //       ease: "Power3.easeOut",
  //       ignoreMobileResize: true,

  //       // seconds it takes to "catch up" to native scroll position
  //       effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
  //     });
  //   }
  // })

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

/*======================================
 Text split Animation
========================================*/
export const splitTextAnimation = () => {
  const element = ref(null);
  // let testInner = window.innerWidth;

  onMounted(() => {
    if (device_width > 576) {


    }
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
  console.log('scrollTop function called'); // Add this line

  // ... existing code ...

  console.log('winScroll:', winScroll);
  console.log('value:', value);
  console.log('position:', position);
};
















