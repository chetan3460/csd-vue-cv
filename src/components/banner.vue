<template>
    <!-- photographer about hero -->
    <!-- <section class="photographer__abouthero" data-scroll-section>
        <span class="photographer__abouthero-circleshape dark-circleshape"></span>
        <div class="container">
            <div class="photographer__abouthero-wrapper">
                <h1 class="photographer__abouthero-title has_char_anim title-anim">
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
                        Creative
                    </span>
                    <span class="txt custom-stroke-text-effect-1" data-scroll data-scroll-direction="horizontal"
                        data-scroll-speed="-3">FRONTEND</span>
                </h1>

                <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="../assets/images/hero/star.svg"
                            class="img-fluid rounded-circle custom-hero-img-1 main-img">
                        <strong class="photographer__abouthero-title  text-white title-anim">Developer</strong>
                    </div>
                </div>
                <div class="photographer__abouthero-arrowdown">
                    <img src="../assets/images/hero/arrrow-down.png" alt="arrow-down">
                </div>
            </div>
        </div>
    </section> -->
    <!-- /photographer about hero  -->



    <section class="tg-intro__area" data-scroll-section>
        <div class="tg-intro__area-bg-wrap">
            <img src="../assets/images/hero/intro-sky.png" alt="sky image">
        </div>
        <div class="container">
            <div class="tg-intro__area-wrap">
                <div class="tg-intro__area-title-wrap">

                    <div class="tg-intro__area-name-wrap">
                        <p class="tg-intro__area-name">Hi, This is
                            chetan</p>
                    </div>


                    <h1 class="tg-intro__area-title ">I am <span class="space-end"></span> Front-End <br> Developer</h1>

                    <div class="tg-intro__area-latest-place">
                        <img src="../assets/images/hero/nature-image.jpg" alt="latest-place">
                    </div>
                    <div class="tg-intro__area-circle-wrap">
                        <div class="btn-wrapper cf_btn_circle">
                            <a href="#" class="circle-text btn-item video-popup">
                                <img class="text" src="../assets/images/hero/intro-rect-text.png" alt="Video">
                                <img class="icon" src="../assets/images/hero/intro-rect-arow.png" alt="Icon">
                            </a>
                        </div>
                    </div>


                    <div class="shape-1 img_anim_reveal">
                        <img src="../assets/images/hero/intro-tree.png" alt="shape">
                    </div>
                </div>


            </div>
        </div>

    </section>
</template>
<script setup>
import { heroText } from '../js/utilits'
import { paraAnimation } from '../js/utilits'
import { titleAnimation } from '../js/utilits';

titleAnimation();
heroText();
paraAnimation();
</script>