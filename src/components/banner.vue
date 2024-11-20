<template>
   <!-- <section class="flex items-center justify-center h-screen w-full h-full text-center text-white p-5 homepage-header">
      <div class="main-wrapper">
         <h1 class="font-Phudu font-bold uppercase text-[#e1eff7]" style="font-size: 18vw; line-height: 16vw;">
            <span class="homepage-header__title homepage-header__title--bottom" aria-hidden="true">
               <span class="split">Creative</span>
            </span>
            <span class="block homepage-header__title homepage-header__title--bottom" aria-hidden="true">
               <span class="split">Developer</span>
            </span>
         </h1>

      </div>

   </section> -->
   <section class="homepage-header">
      <div class="homepage-header__sticky-container">
         <div class="homepage-header__sticky vf">
            <div class="saturn"></div>
            <span class="homepage-header__title homepage-header__title--top font-Phudu font-bold" aria-hidden="true">
               <span class="split">
                  creative
               </span>
            </span>
            <div class="homepage-header__svgs">
               <div class="radial"></div>
               <h1 class="sr-only">
                  Creative Developer
               </h1>
            </div>
            <span class="homepage-header__title homepage-header__title--bottom font-Phudu font-bold" aria-hidden="true">
               <span class="split">
                  Developer
               </span>
            </span>
         </div>
      </div>

   </section>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let Ji = null;

const Ki = (e, M) => {
   if (!e || !M) {
      console.warn("Missing elements for scaling:", e, M);
      return;
   }

   const windowWidth = window.innerWidth;
   const windowHeight =
      windowWidth < 500
         ? document.documentElement.clientHeight + 100
         : window.innerHeight;
   const b = windowWidth > 1024 ? windowWidth / 24 : 32;
   const scaleE = (windowWidth - b) / e.offsetWidth;
   const scaleM = (windowWidth - b) / M.offsetWidth;

   if (Ji !== scaleE) {
      console.log(`Updating scales. scaleE: ${scaleE}, scaleM: ${scaleM}`);
      gsap.set(e, { scaleX: scaleE });
      gsap.set(M, { scaleX: scaleM });
      Ji = scaleE;
   }

   gsap
      .timeline()
      .fromTo(
         ".homepage-header",
         { "--progress": 0 },
         {
            scrollTrigger: {
               trigger: ".homepage-header",
               start: "top top",
               end: windowWidth < windowHeight ? "bottom center" : "bottom bottom",
               scrub: true,
               ease: "power1.inOut",
            },
            "--progress": 1,
         }
      );
};

onMounted(() => {
   const e = document.querySelector(".homepage-header__title--top");
   const M = document.querySelector(".homepage-header__title--bottom");

   if (!e || !M) {
      console.warn(
         "Required elements `.homepage-header__title--top` or `.homepage-header__title--bottom` are missing."
      );
      return;
   }

   const handleResize = () => {
      console.log("Resize detected");
      Ki(e, M);
   };

   // Initial calculation
   console.log("Initializing scaling");
   Ki(e, M);

   // Handle window resize
   window.addEventListener("resize", handleResize);

   // Cleanup on unmount
   onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
   });
});
</script>



<style scoped>
/* h1 {
   text-shadow: calc(2px + -0.0015em* 1) calc(-2px + 0.0015em* 1) 0 var(--accent), calc(2px + -0.0015em* 2) calc(-2px + 0.0015em* 2) 0 var(--accent), calc(2px + -0.0015em* 3) calc(-2px + 0.0015em* 3) 0 var(--accent), calc(2px + -0.0015em* 4) calc(-2px + 0.0015em* 4) 0 var(--accent), calc(2px + -0.0015em* 5) calc(-2px + 0.0015em* 5) 0 var(--accent), calc(2px + -0.0015em* 6) calc(-2px + 0.0015em* 6) 0 var(--accent), calc(2px + -0.0015em* 7) calc(-2px + 0.0015em* 7) 0 var(--accent), calc(2px + -0.0015em* 8) calc(-2px + 0.0015em* 8) 0 var(--accent), calc(2px + -0.0015em* 9) calc(-2px + 0.0015em* 9) 0 var(--accent), calc(2px + -0.0015em* 10) calc(-2px + 0.0015em* 10) 0 var(--accent), calc(2px + -0.0015em* 11) calc(-2px + 0.0015em* 11) 0 var(--accent), calc(2px + -0.0015em* 12) calc(-2px + 0.0015em* 12) 0 var(--accent), calc(2px + -0.0015em* 13) calc(-2px + 0.0015em* 13) 0 var(--accent), calc(2px + -0.0015em* 14) calc(-2px + 0.0015em* 14) 0 var(--accent), calc(2px + -0.0015em* 15) calc(-2px + 0.0015em* 15) 0 var(--accent), calc(2px + -0.0015em* 16) calc(-2px + 0.0015em* 16) 0 var(--accent), calc(2px + -0.0015em* 17) calc(-2px + 0.0015em* 17) 0 var(--accent), calc(2px + -0.0015em* 18) calc(-2px + 0.0015em* 18) 0 var(--accent), calc(2px + -0.0015em* 19) calc(-2px + 0.0015em* 19) 0 var(--accent), calc(2px + -0.0015em* 20) calc(-2px + 0.0015em* 20) 0 var(--accent), calc(2px + -0.0015em* 21) calc(-2px + 0.0015em* 21) 0 var(--accent), calc(2px + -0.0015em* 22) calc(-2px + 0.0015em* 22) 0 var(--accent), calc(2px + -0.0015em* 23) calc(-2px + 0.0015em* 23) 0 var(--accent), calc(2px + -0.0015em* 24) calc(-2px + 0.0015em* 24) 0 var(--accent), calc(2px + -0.0015em* 25) calc(-2px + 0.0015em* 25) 0 var(--accent);
} */

@media screen and (max-width: 991px) {
   .subtitle_wrapper {
      margin-top: 1rem;
   }
}

.subtitle_wrapper {
   z-index: 2;
   justify-content: space-between;
   width: 100%;
   margin-top: auto;
   margin-left: auto;
   margin-right: auto;
   padding-top: 10px;
   display: flex;
}
</style>