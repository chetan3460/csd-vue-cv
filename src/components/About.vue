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
    <section class="about--block px-5 pt-10   ">
        <!-- <div class="main--wrapper bg-white py-16 rounded-3xl relative">
            <div class="text-center max-w-[32rem] mx-auto ">
                <h2 class="text-8xl uppercase font-Phudu font-bold mb-10 text-shadow text-[#0f1b61] " data-scroll-var>
                    ABOUT
                    ME
                </h2>
                <p class=" font-medium">Hi I'm Chetan, frontend Developer based in <b>Goa</b> with
                    over <a class="block underline font-bold uppercase text-[#0f1b61] hover:text-[#0f1b61]"
                        href="https://www.linkedin.com/in/chetan-dhargalkar-882411bb/" target="_blank">5
                        years
                        experience.</a>
                </p>
                <div>
                    <h3 class="text-7xl  font-Phudu  py-10 text-[#0f1b61] reveal-type font-normal">
                        I can help you
                        <span class="block font-bold highlight">stand out</span>
                        to make the
                        <span class="block font-bold">website</span>
                        of your
                        <span class="block font-bold">dreams</span>
                    </h3>

                </div>
                <p>I am passionate about crafting digital solutions with a <b>strong</b> emphasis on <b>design</b>,
                    <b>usability</b>
                    and
                    <b>accessibility</b>. I enjoy creating web experiences that involve meaningful interaction with
                    the user.
                </p>

            </div>

        </div> -->
        <div class="p medium-heading caps font-bold prose-p:uppercase mx-[10rem] ml-0">
            <p class="text-6xl font-Phudu font-bold text-[#101010]">I'm Chetan, an experienced frontend developer with a
                passion
                for crafting engaging user experiences. with over <a href="" class="underline !text-[#0f1b61]">5 years
                    experience.</a>
            </p>
        </div>



    </section>

</template>
<script setup>

import { onMounted, ref } from "vue";
import handSvg from "../assets/images/hand.webp";
import imageSrc from '../assets/images/me.webp';

import { fontAnim, revealLetter, Item } from "../js/utilits";
fontAnim();

onMounted(() => {
    revealLetter();

})






</script>


<style>
.highlight {
    --underline-color: #f67796;
    --underline-width: 0% 0.4em;
    --underline-color: var(--color-medium);
    background: linear-gradient(90deg, var(--underline-color), var(--underline-color));
    background-position: var(--underline-position, 0 65%);
    background-repeat: no-repeat;
    background-size: var(--underline-width);
    transition: background-size .3s ease-in-out;
}
</style>