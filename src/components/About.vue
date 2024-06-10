<template>
    <!-- about inner area start  -->
    <section class="int-inab-area pt-150 pb-150">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intDesigner-about__sec-title-wrapper text-start about-section-title">
                        <h3 class="int-inab-sub-title mb-30   split-title-line">About me</h3>
                        <h2 data-scroll class="int-inab-title   words-slide-from-right text-split">Hi, I'm
                            Chetan
                            Frontend Developer </h2>
                        <div class="tp-service-title-box p-relative">
                            <span class="tp-section-subtitle subtitle-position tp-char-animation">I Think a lot</span>
                            <h4 class="tp-section-title tp-char-animation">
                                Thoughtful<br>
                                <span>Process</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-lg-5">

                    <div class="about-img rel">
                        <div class="cf_image intDesigner-about__thumb img_anim_reveal">
                            <img src="../assets/images/about/curly-hair-man.png" alt="">
                        </div>

                        <div class="fashion__abouthero-circle">
                            <div class="subscribe-circle-2 cf_badge has_fade_anim" data-scroll
                                data-scroll-direction="vertical" data-scroll-speed="5" data-scroll-delay=".7"
                                data-scroll-repeat>
                                <span>Based in <br> New York</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="intDesigner-about__text-wrapper has_fade_anim">

                        <div class="cf_text intDesigner-about__text has_fade_anim">
                            <p>With 4 years of experience and a strong foundation in web development, I'm a dedicated
                                developer. I'm skilled in languages like JavaScript, TypeScript, and CSS, and I'm
                                enthusiastic about staying informed on the latest trends while eagerly embracing new
                                technologies and frameworks.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- about inner area end  -->


    <!-- Row -->
    <div class="content-row text-align-center dark-section" data-bgcolor="#0c0c0c">


        <div class="move-thumbs-wrapper">

            <div class="start-thumbs-caption">
                <h2 class="primary-font-title big-title has-mask-fill">Recognitions</h2>
                <p>OUR PRESTIGIOUS DESIGN AWARDS</p>
            </div>



            <div class="start-thumbs-wrapper">

                <div class="start-move-thumb" data-start="top 120%" data-stop="600%">
                    <div class="move-thumb-inner">
                        <div class="section-image">
                            <img src="http://clapat.ro/themes/montoya/images/aw01.jpg" class="item-image" alt="">
                        </div>
                    </div>
                </div>

                <div class="start-move-thumb" data-start="top 90%" data-stop="1100%">
                    <div class="move-thumb-inner">
                        <div class="section-image">
                            <img src="http://clapat.ro/themes/montoya/images/aw01.jpg" class="item-image" alt="">
                        </div>
                    </div>
                </div>

                <div class="start-move-thumb" data-start="top 90%" data-stop="400%">
                    <div class="move-thumb-inner">
                        <div class="section-image">
                            <img src="http://clapat.ro/themes/montoya/images/aw01.jpg" class="item-image" alt="">
                        </div>
                    </div>
                </div>

                <div class="start-move-thumb" data-start="top 120%" data-stop="600%">
                    <div class="move-thumb-inner">
                        <div class="section-image">
                            <img src="http://clapat.ro/themes/montoya/images/aw01.jpg" class="item-image" alt="">
                        </div>
                    </div>
                </div>

                <div class="start-move-thumb" data-start="top 100%" data-stop="750%">
                    <div class="move-thumb-inner">
                        <div class="section-image">
                            <img src="http://clapat.ro/themes/montoya/images/aw01.jpg" class="item-image" alt="">
                        </div>
                    </div>
                </div>

                <div class="start-move-thumb" data-start="top 40%" data-stop="300%">
                    <div class="move-thumb-inner">
                        <div class="section-image">
                            <img src="http://clapat.ro/themes/montoya/images/aw01.jpg" class="item-image" alt="">
                        </div>
                    </div>
                </div>

            </div>


            <div class="end-thumbs-wrapper">
                <div class="end-move-thumb"></div>
                <div class="end-move-thumb"></div>
                <div class="end-move-thumb"></div>
                <div class="end-move-thumb"></div>
                <div class="end-move-thumb"></div>
                <div class="end-move-thumb"></div>
            </div>

        </div>


    </div>
    <!--/Row -->

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