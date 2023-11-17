<template>
    <!-- photographer about hero -->
    <section class="photographer__abouthero" data-scroll-section>
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
    </section>
    <!-- /photographer about hero  -->
</template>
<script setup>
import { heroText } from '../js/utilits'
import { paraAnimation } from '../js/utilits'
import { titleAnimation } from '../js/utilits';

titleAnimation();
heroText();
paraAnimation();
</script>