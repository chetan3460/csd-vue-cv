<template>
    <!-- <section class="about-me--block about-sec  relative flex items-center justify-center  py-16">
        <div class="container">

            <div
                class="about-me--info-wrapper text-center flex flex-col flex-nowrap items-center justify-center gap-10 h-[40vh] w-full overflow-hidden sticky top-0 py-10 pt-20 will-change-transform">
                <h2
                    class="sticky-statement2 font-Phudu text-[110px] font-extrabold uppercase leading-[0.8em] tracking-[-0.01em] align-middle transition-colors duration-300 text-[#9f337d]">
                    More about me
                </h2>
            </div>
            <div class="about-bottom-content-wrap flex flex-col justify-center items-center text-center">
                <div class="img-box  h-[644px] max-w-[638px]  overflow-hidden w-full">
                    <div class="img-box-inner w-full h-full relative scale-125">
                        <img class="block w-full h-full object-cover" data-jarallax-element="-20 0"
                            src="https://adaptivecolorspro.liquid-themes.com/wp-content/uploads/2020/12/Image@2x.jpg"
                            alt="About">
                    </div>
                </div>
                <div class="about-bottom-content flex flex-col justify-center items-center text-center gap-7 pt-20">
                    <div class="">
                        <h4
                            class="font-Phudu text-[30px] font-bold uppercase leading-none leading-[40px] text-[#9f337d]">
                            I'M AN
                            INNOVATIVE DESIGNER AND DIGITAL ARTIST IN TOKYO. <br>MY PASSION FOR MINIMALIST
                            AESTHETICS, ELEGANT TYPOGRAPHY, <br>AND INTUITIVE DESIGN SHINES THROUGH IN MY WORK.</h4>
                    </div>
                    <div class="prose prose-p:text-[#9f337d]">
                        <p>I'm on the cutting edge of no-code tools that allow me to bring my creative visions to
                            life. Though my methods may be unconventional, my dedication to the craft is
                            unparalleled. I thrive on finding <i>"unexpected solutions"</i> and believe that with
                            the right perspective, design can elevate the human experience.</p>
                        <p class="responsive-mode">I'm on the edge of no-code tools that allow me to bring my creativity
                            to
                            life.</p>

                    </div>

                </div>
            </div>


        </div>
    </section> -->
    <section class="about--block p-5  px-[5%] ">
        <div class="main--wrapper bg-white py-16 rounded-3xl relative">
            <div class="text-center max-w-[32rem] mx-auto ">
                <h2 class="text-8xl uppercase font-Phudu font-bold mb-10">ABOUT ME</h2>
                <p class="uppercase font-medium">I’m Chetan Dhargalkar,based in Goa a Creative <b>Developer</b> with
                    over <a class="underline font-bold text-black hover:text-black"
                        href="https://www.linkedin.com/in/chetan-dhargalkar-882411bb/" target="_blank">5
                        years
                        experience</a>.
                </p>
                <div>
                    <h3 class="text-7xl  font-Phudu font-bold py-10">
                        I can help you
                        <span class="block">stand out</span>
                        to make the
                        <span class="block">website</span>
                        of your
                        <span class="block">dreams</span>
                    </h3>
                </div>
                <p>I am passionate about crafting digital solutions with a <b>strong</b> emphasis on <b>design</b>,
                    <b>usability</b>
                    and
                    <b>accessibility</b>. I enjoy creating web experiences that involve meaningful interaction with
                    the user.
                </p>
            </div>
            <div class="blocks-wrapper">
                <div class="blocks">
                    <div v-for="(block, index) in blocks" :key="index" class="block"
                        :class="{ active: activeBlock === index }" @mouseover="handleMouseOver(index)">
                        Block {{ index + 1 }}
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script setup>

import handSvg from "../assets/images/hand.webp";


import { ref } from "vue";

const blocks = ref(Array(5).fill(null)); // Simulating 5 blocks
const activeBlock = ref(null); // Tracks the currently active block index
const resetDuration = 300;
let timeoutId = null; // Tracks the timeout for the hover effect

const handleMouseOver = (index) => {
    clearTimeout(timeoutId); // Clear any previous timeout
    activeBlock.value = index; // Set the active block to the current index

    // Remove the active class after the specified duration
    timeoutId = setTimeout(() => {
        activeBlock.value = null;
    }, resetDuration);
};

</script>
<style>
.blocks-wrapper {
    z-index: 100;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    flex-wrap: wrap;
    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
    grid-template-columns: .5fr .5fr .5fr .5fr .5fr .5fr .5fr .5fr .5fr .5fr .5fr .5fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.block {
    width: 75px;
    height: 75px;
    opacity: 0;
    mix-blend-mode: hard-light;
    /* background: #0c0c0c; */
    background: #8C24C5;
    transition: opacity 0.3 ease-in;
}

.block {
    z-index: 50;
    opacity: 0;
    mix-blend-mode: hard-light;
    transition: opacity .3s ease-in;
    position: relative;
}

/* .paralax--effect {
    position: absolute;
    width: 100%;
    left: 0;
    top: calc(100% - 2px);
    transform: translateY(99%);
    z-index: 4;
} */
</style>