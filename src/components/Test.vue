<template>
    <div class="content-wrap pl-dynamic pr-dynamic md:py-14 py-11" ref="contentWrap">
        <div class="content">
            <div class="title-wrap font-Phudu font-bold">
                <span class="title title--up md:text-8xl text-6xl uppercase font-Phudu font-bold "
                    data-scroll-var>About</span>
                <span class="title title--down md:text-8xl text-6xl uppercase font-Phudu font-bold "
                    data-scroll-var>Me</span>
            </div>
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
import { onMounted, ref, nextTick } from "vue";
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

    document.fonts.ready.then(() => {
        nextTick(() => {
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

            // Trigger a reflow to ensure correct width
            DOM.titleUp.offsetWidth;
            DOM.titleDown.offsetWidth;

            const flipstate = Flip.getState([DOM.titleUp, DOM.titleDown]);

            if (DOM.content.length > 1) {
                DOM.content[1].prepend(DOM.titleUp, DOM.titleDown);
            }

            const isCircle = DOM.mask.tagName.toLowerCase() === "circle";

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

            Flip.fit(DOM.titleUp, DOM.titleUp);
            Flip.fit(DOM.titleDown, DOM.titleDown);

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
                        ease: "none",
                    },
                    0
                );

            ScrollTrigger.create({
                trigger: DOM.titleWrap,
                start: "top bottom-=10%",
                end: "+=40%",
                scrub: true,
                animation: flip,
                ease: "none",
            });
        });
    });
});
</script>
<style scoped>
.content-wrap {
    display: grid;
    place-items: center;
    grid-template-areas: "main";
}

.content {
    grid-area: main;
    display: grid;
    place-items: center;
    line-height: 1.2;
    grid-template-areas: "content";
}

/* .content-wrap .content:first-child {
    height: 100vh;
} */

.content--layout {
    grid-template-areas:
        "title-up title-down"
        "img img"
        "text text";
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.content__img {
    grid-area: img;
    max-width: 50%;
    height: auto;
}





.title-wrap {
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: center;
}

.title--up {
    grid-area: title-up;
}

.title--down {
    grid-area: title-down;
}

.content__text {
    grid-area: text;
    /* text-transform: uppercase;
    margin: 0;
    opacity: 0.5; */
}

@media screen and (min-width: 991px) {


    .content__img {
        max-width: none;
    }

    .content__img--1 {
        height: auto;
        width: 100%;
        max-width: 100%;
        max-height: 100vh;
    }

    .content--layout-1 {
        grid-template-areas:
            "title-up img ..."
            "text img title-down";
        grid-template-columns: 30% auto 30%;
        grid-template-rows: 1fr 1fr;
        column-gap: 2vw;
    }

    .title--up {
        justify-self: end;
        align-self: start;
    }

    .title--down {
        justify-self: start;
        align-self: end;
    }

    .content--layout-1 .content__text {
        max-width: 335px;
        text-align: right;
        justify-self: end;
        align-self: end;
    }

    .card-wrap {
        grid-template-columns: repeat(3, 250px);
    }
}
</style>