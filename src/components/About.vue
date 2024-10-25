<template>
    <section class="about-me--block">
        <div class="container">
            <div class="about-me--main-wrapper">
                <h2
                    class="text-[300px] leading-[0.9em] tracking-[-15px] mt-[0.2em] mb-0 ml-0 mr-0 text-[#B9DFFF] align-middle transition-colors duration-300 font-extrabold uppercase">
                    HI, I'm
                    <span class="block">Chetan</span>
                </h2>
            </div>

        </div>
    </section>


</template>



<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

const moveThumbsWrapper = ref(null);
const startThumbsCaption = ref(null);
const moveThumbsParent = ref([]);
const moveThumbs = ref([]);
const endThumbsWrapper = ref(null);
const overlappingThumbs = ref([]);

const animateElements = (moveThumbs, overlappingThumbs, moveThumbsParent) => {
    moveThumbs.forEach((moveThumb, index) => {
        const state = Flip.getState(moveThumb);
        overlappingThumbs[index].appendChild(moveThumb);

        const moveAnimation = Flip.from(state, {
            duration: 1,
            ease: 'power4.inOut',
        });

        const startOffset = moveThumbsParent[index].dataset.start;
        const endOffset = moveThumbsParent[index].dataset.stop;

        ScrollTrigger.create({
            trigger: moveThumbsParent[index],
            start: startOffset,
            end: endOffset,
            scrub: true,
            animation: moveAnimation,
        });
    });

    gsap.to(startThumbsCaption.value, {
        scrollTrigger: {
            trigger: startThumbsCaption.value,
            start: () => {
                const startPin = (window.innerHeight - startThumbsCaption.value.offsetHeight) / 2;
                return "top +=" + startPin;
            },
            end: () => {
                const durationHeight = window.innerHeight;
                return "+=" + durationHeight;
            },
            pin: true,
            pinSpacing: false,
            scrub: true,
        },
        opacity: 0,
        ease: "power1.inOut",
    });
};

const isMobile = () => {
    const screenWidth = window.innerWidth;
    console.log(`Screen width detected: ${screenWidth}px`);
    return screenWidth <= 1024;
};

onMounted(() => {
    if (isMobile()) {
        console.log('Animation disabled for mobile view (<= 1024px)');
        return; // Exit if on mobile
    }

    const moveThumbsWrapperElement = document.querySelector('.move-thumbs-wrapper');
    if (moveThumbsWrapperElement) {
        console.log('Initializing animations for desktop view (> 1024px)');

        moveThumbsWrapper.value = moveThumbsWrapperElement;
        startThumbsCaption.value = document.querySelector('.start-thumbs-caption');
        moveThumbsParent.value = document.querySelectorAll('.start-thumbs-wrapper .start-move-thumb');
        moveThumbs.value = document.querySelectorAll('.start-thumbs-wrapper .move-thumb-inner');
        endThumbsWrapper.value = document.querySelector('.end-thumbs-wrapper');
        overlappingThumbs.value = document.querySelectorAll('.end-thumbs-wrapper .end-move-thumb');

        animateElements(Array.from(moveThumbs.value), Array.from(overlappingThumbs.value), Array.from(moveThumbsParent.value));
    } else {
        console.log('.move-thumbs-wrapper element not found.');
    }
});

</script>


<style scoped>
/*--------------------------------------------------
	Move Thumbs Gallery
---------------------------------------------------*/

.move-thumbs-wrapper {
    margin-left: calc(50% - 50vw) !important;
    margin-right: calc(50% - 50vw) !important;
    max-width: 1000% !important;
    width: 100vw !important;
}

.start-thumbs-caption {
    position: relative;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.start-thumbs-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 40px;
}

.start-move-thumb {
    box-sizing: border-box;
    position: relative;
    width: calc(25% - 80px);
    height: calc(25vw - 40px);
    margin: 0 40px;
    margin-bottom: 40px;
}

.start-move-thumb:nth-of-type(3n + 2) {
    width: calc(15% - 80px);
    height: calc(15vw - 40px);
    margin-top: 50vh;
}

.start-move-thumb:nth-of-type(3n + 3) {
    width: calc(35% - 80px);
    height: calc(35vw - 40px);
    margin-top: 25vh;
}

.start-move-thumb .overlapping-image-inner {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}

.end-move-thumb .move-thumb-inner {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}

.rounded-borders .start-move-thumb .move-thumb-inner,
.rounded-borders .end-move-thumb .move-thumb-inner {
    border-radius: 12px;
    overflow: hidden;
}

.end-thumbs-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 100vh;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
}

.end-move-thumb {
    box-sizing: border-box;
    position: relative;
    width: calc(33.33% - 80px);
    height: calc(33.33vw - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
}


@media only screen and (max-width: 1466px) {
    .start-move-thumb:nth-of-type(3n + 2) {
        width: calc(15% - 60px);
        height: calc(15vw - 30px);
        margin-top: 50vh;
    }
}

@media only screen and (max-width: 1466px) {
    .start-move-thumb {
        width: calc(25% - 60px);
        height: calc(25vw - 30px);
        margin: 0 30px;
        margin-bottom: 30px;
    }
}

@media only screen and (max-width: 1024px) {

    .start-move-thumb,
    .start-move-thumb:nth-of-type(3n+2),
    .start-move-thumb:nth-of-type(3n+3) {
        width: calc(33.33% - 40px);
        height: calc(33.33vw - 40px);
        margin: 25px 20px;
    }
}

@media only screen and (max-width: 767px) {

    .start-move-thumb,
    .start-move-thumb:nth-of-type(3n+2),
    .start-move-thumb:nth-of-type(3n+3) {
        width: calc(50% - 30px);
        height: calc(50vw - 30px);
        margin: 10px 15px;
    }
}

@media only screen and (max-width: 479px) {

    .start-move-thumb,
    .start-move-thumb:nth-of-type(3n+2),
    .start-move-thumb:nth-of-type(3n+3) {
        width: calc(50% - 20px);
        height: calc(50vw - 20px);
        margin: 5px 10px;
    }
}
</style>