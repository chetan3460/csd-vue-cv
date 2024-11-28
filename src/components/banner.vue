<template>

   <section class="homepage-header  ">
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
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

let Ji = null;

// Function to update scaling of elements
const Ki = (e, M) => {
   if (!e || !M) {
      console.warn("Missing elements for scaling:", e, M);
      return;
   }

   const windowWidth = window.innerWidth;
   const bufferWidth = windowWidth > 1024 ? windowWidth / 24 : 32;
   const scaleE = (windowWidth - bufferWidth) / e.offsetWidth;
   const scaleM = (windowWidth - bufferWidth) / M.offsetWidth;

   if (Ji !== scaleE) {
      // console.log(`Updating scales. scaleE: ${scaleE}, scaleM: ${scaleM}`);
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

   // Wait for fonts to load before applying scaling
   document.fonts.ready.then(() => {
      Ji = null; // Reset Ji to ensure scaling is applied after fonts load
      Ki(e, M); // Apply initial scaling
   });

   // Fallback timeout in case fonts take too long to load
   setTimeout(() => {
      if (!Ji) {
         Ji = null;
         Ki(e, M); // Apply scaling if fonts load slower than expected
      }
   }, 2000); // Timeout after 2 seconds

   // Handle window resize
   const handleResize = () => {
      Ki(e, M); // Reapply scaling on resize
   };

   window.addEventListener("resize", handleResize);

   // Cleanup event listener on component unmount
   onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
   });
});
</script>

<style scoped></style>