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
   <section class="homepage-header  h-screen">
      <div class="homepage-header__sticky-container">
         <div class="homepage-header__sticky ">
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



<style scoped></style>