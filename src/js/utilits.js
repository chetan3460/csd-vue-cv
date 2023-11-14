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





export const bgColor = () => {

  /* SMOOTH SCROLL */
  // gsap.to(window, {
  //   scrollTo: {
  //     y: ".page-wrapper",
  //     offsetY: 100, // Adjust this value based on your layout
  //   },
  //   duration: 1, // Adjust the duration as needed
  //   ease: 'power2.inOut',
  //   scrollTrigger: {
  //     trigger: ".page-wrapper",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //   },
  // });

  /* COLOR CHANGER */
  document.addEventListener("DOMContentLoaded", function () {
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        start: "top 50%",
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto"
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
          })
      });
    });
  });

}







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


};



















// export const headerBg = () => {

//   const liquidElements = () => {
//     const liquidWindow = ref(null);
//     const liquidHtml = ref(null);
//     const liquidBody = ref(null);
//     const liquidSiteWrap = ref(null);
//     const liquidContents = ref(null);
//     const liquidContentsWrap = ref(null);
//     const liquidMainHeader = ref(null);
//     const liquidMainFooter = ref(null);
//     const liquidSectionsWrapper = ref(null);

//     const elementorSectionsSelector = `
//       > .elementor-section-wrap > .elementor-section,
//       > .elementor-section,
//       > .e-con,
//       > .e-con > .e-con,
//       > .e-con > .e-con-inner > .e-con,
//       > .e-container,
//       > .e-container > .e-container,
//       > .elementor-section-wrap > .elementor-top-section > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-inner-section,
//       > .elementor-top-section > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-inner-section`;

//     const elementorFooterSections = liquidMainFooter.value.querySelectorAll('> .elementor', elementorSectionsSelector);
//     const liquidSections = liquidIsElementor ? liquidSectionsWrapper.value.querySelectorAll(elementorSectionsSelector).concat(Array.from(elementorFooterSections)) : liquidSectionsWrapper.value.concat(Array.from(liquidMainFooter.value.querySelectorAll('.lqd-section, > .vc_row, > .vc_section, > .vc_section > .vc_row, > .lqd-section-scroll-sections > .vc_row, > .vc_element')));

//     const liquidBodyBg = liquidBody.value.style.backgroundColor;
//     const liquidContentsBg = liquidContents.value.style.backgroundColor;
//     const liquidMainFooterBg = liquidMainFooter.value.style.backgroundColor;

//     return {
//       liquidWindow,
//       liquidHtml,
//       liquidBody,
//       liquidSiteWrap,
//       liquidContents,
//       liquidContentsWrap,
//       liquidMainHeader,
//       liquidMainFooter,
//       liquidSectionsWrapper,
//       elementorSectionsSelector,
//       elementorFooterSections,
//       liquidSections,
//       liquidBodyBg,
//       liquidContentsBg,
//       liquidMainFooterBg,
//     };
//   };

//   class LiquidSectionsDetails {
//     constructor() {
//       this.sections = [];
//       this.footerBg = tinycolor(this.liquidMainFooterBg).getAlpha() === 0 ? this.liquidBodyBg : this.liquidMainFooterBg;
//     }

//     // checkpoint
//     getLuminosity(obj, instance) {
//       let { backgroundColor } = obj;
//       if (obj.isInnerSection && obj.parentSection && tinycolor(backgroundColor).getAlpha() === 0) {
//         backgroundColor = obj.parentSection.backgroundColor;
//       }
//       if (tinycolor(backgroundColor).getAlpha() === 0) {
//         if (obj.isInFooter) {
//           backgroundColor = instance.footerBg;
//         } else {
//           backgroundColor = instance.liquidContentsBg;
//         }
//       }
//       return tinycolor(backgroundColor).isDark() ? 'dark' : 'light';
//     }

//     async addLuminosity(instance) {
//       await nextTick();
//       instance.sections.forEach(async sec => {
//         sec.isBgTransparent = tinycolor(sec.backgroundColor).getAlpha() === 0;
//         sec.luminosity = sec.predefinedLuminosity ? sec.predefinedLuminosity : instance.getLuminosity(sec, instance);
//         sec.el.setAttribute('data-section-luminosity', sec.luminosity);
//       });
//     }
//   }

//   onMounted(() => {
//     const liquidBgEls = document.querySelectorAll('[data-liquid-bg]');
//     // liquidBgEls.liquidBgColor();

//     if (liquidIsElementor) {
//       liquidBgEls.forEach(el => {
//         const $el = el;
//         if ($el.is(liquidContents) && liquidMainHeader.length && !liquidMainHeader.getAttribute('data-liquid-bg')) {
//           liquidMainHeader.liquidBgColor({
//             setBgTo: `
//               > .elementor > .elementor-section-wrap > .elementor-section:not(.lqd-hide-onstuck) > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-widget-ld_header_image .navbar-brand-solid .navbar-brand-inner,
//               > .elementor > .elementor-section-wrap > .elementor-section:not(.lqd-hide-onstuck) > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-widget-ld_button .btn-solid,
//               > .elementor > .elementor-section-wrap > .elementor-section:not(.lqd-hide-onstuck) > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-widget-ld_button .btn-icon-solid .btn-icon,
//               > .elementor > .elementor-section:not(.lqd-hide-onstuck) > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-widget-ld_header_image .navbar-brand-solid .navbar-brand-inner,
//               > .elementor > .elementor-section:not(.lqd-hide-onstuck) > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-widget-ld_button .btn-solid,
//               > .elementor > .elementor-section:not(.lqd-hide-onstuck) > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-widget-ld_button .btn-icon-solid .btn-icon`,
//             manipulateColor: [{ 'darken': 30 }, { 'brighten': 15 }, { 'saturate': 20 }],
//           });
//         }
//       });
//     }
//   });

// }