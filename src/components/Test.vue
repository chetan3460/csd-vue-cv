<template>
    <div class="content-wrap" ref="contentWrap">
        <div class="content">
            <h2 class="title-wrap font-Phudu font-bold">
                <span class="title title--up text-8xl uppercase font-Phudu font-bold text-shadow text-[#0f1b61]"
                    data-scroll-var>About</span>
                <span class="title title--down text-8xl uppercase font-Phudu font-bold text-shadow text-[#0f1b61]"
                    data-scroll-var>Me</span>
            </h2>
        </div>
        <div class="content content--layout content--layout-1 ">
            <svg class="content__img content__img--1 overflow-hidden" width="896" height="1344"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 896 1344">
                <defs>
                    <filter id="displacementFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R"
                            yChannelSelector="G" />
                    </filter>
                    <mask id="circleMask">
                        <circle cx="50%" cy="50%" r="0" data-value-final="820" fill="white" class="mask"
                            style="filter: url(#displacementFilter);" />
                    </mask>
                </defs>
                <image class="overflow-hidden" :xlink:href="imageSrc" width="896" height="1344"
                    mask="url(#circleMask)" />
            </svg>
            <p class="content__text">
                I am passionate about crafting digital solutions with a strong emphasis on design, usability and
                accessibility. I enjoy creating web experiences that involve meaningful interaction with the
                user.

            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";
import imageSrc from '../assets/images/me.png';

gsap.registerPlugin(Flip, ScrollTrigger);

const contentWrap = ref(null);

onMounted(() => {
    const el = contentWrap.value;
    if (!el) {
        console.error("Main element not found!");
        return;
    }

    const DOM = {
        el,
        titleWrap: el.querySelector(".title-wrap"),
        titleUp: el.querySelector(".title--up"),
        titleDown: el.querySelector(".title--down"),
        content: [...el.querySelectorAll(".content")],
        svg: el.querySelector(".content__img"),
        mask: el.querySelector(".mask"),
        image: el.querySelector("image"),
    };

    if (
        !DOM.titleWrap ||
        !DOM.titleUp ||
        !DOM.titleDown ||
        !DOM.svg ||
        !DOM.mask ||
        !DOM.image
    ) {
        console.error("One or more required elements are missing!", DOM);
        return;
    }

    const isCircle = DOM.mask.tagName.toLowerCase() === "circle";

    const flipstate = Flip.getState([DOM.titleUp, DOM.titleDown]);

    // Change layout
    if (DOM.content.length > 1) {
        DOM.content[1].prepend(DOM.titleUp, DOM.titleDown);
    }

    const initialAttr = isCircle
        ? DOM.mask.getAttribute("r")
        : DOM.mask.getAttribute("d");
    const finalAttr = DOM.mask.dataset.valueFinal;

    if (!initialAttr || !finalAttr) {
        console.error("Mask attributes are missing or invalid!", {
            initialAttr,
            finalAttr,
        });
        return;
    }

    const flip = Flip.from(flipstate, {
        ease: "none",
        simple: true,
    })
        .fromTo(
            DOM.mask,
            {
                attr: isCircle ? { r: initialAttr } : { d: initialAttr },
            },
            {
                attr: isCircle ? { r: finalAttr } : { d: finalAttr },
                ease: "none",
            },
            0
        )
        .fromTo(
            DOM.image,
            {
                transformOrigin: "50% 50%",
                filter: "brightness(100%)",
            },
            {
                scale: isCircle ? 1.2 : 1,
                // filter: "brightness(150%)",
                ease: "none",
            },
            0
        );

    ScrollTrigger.create({
        trigger: DOM.titleWrap,
        start: "clamp(top bottom-=10%)",
        end: "+=40%",
        scrub: true,
        animation: flip,
    });
});
</script>

<style>
/* Add your styles here */
</style>