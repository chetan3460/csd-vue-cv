<template>
   <section id="home"
      class="hero flex items-center justify-center aspect-[1.6] max-h-screen w-full relative bg-transparent bg-gradient-to-b from-[#F2D5FF] to-[#C3B2DB] text-center overflow-hidden">
      <div class="container">

         <div class="main-wrapper hero--inner relative w-full h-full z-2">
            <h1
               class="text-[#5C3972] font-phudu text-[200px] font-extrabold uppercase leading-[0.8em] tracking-[-0.01em]">
               <span class="block"> frontend</span> developer
            </h1>
            <p class="text-[18px] text-[#5C3972] font-normal mt-5 max-w-[400px] mx-auto">
               A passionate product designer dedicated to crafting meaningful experiences through thoughtful design.
            </p>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import { heroAnimationControl } from '../js/utilits';

// onMounted(() => {
//    heroAnimationControl();
// });
// const particlesOptions = {
//    background: {
//       color: {
//          value: "#000000",
//       },
//    },
//    particles: {
//       number: {
//          value: 80,
//       },
//       color: {
//          value: "#ffffff",
//       },
//       move: {
//          speed: 3,
//          direction: "none",
//          outModes: {
//             default: "out",
//          },
//       },
//    },
//    interactivity: {
//       events: {
//          onClick: {
//             enable: true,
//             mode: "push",
//          },
//       },
//    },
//    detectRetina: true,
// };


// // Dynamic import for the Particles component
// const particlesComponent = ref(null);

// onMounted(async () => {
//    const { Particles } = await import("@tsparticles/vue3");
//    particlesComponent.value = Particles;
// });
</script>

<style>
.hero.hero-disable {
   pointer-events: none;
}
</style>