<template>
    <!-- Hero Section Start -->
    <section id="home" class="main-hero-area pt-150 pb-80 rel z-1 scroll_section">
        <div class="container container-1620">
            <div class="row align-items-center rel">
                <div class="col-lg-6">
                    <div ref="animationChar" class="hero-content rmb-55">
                        <span class="h2">Hello, i’m </span>
                        <h1 class="animation__char_come"><b>Chetan S. Dhargalkar,</b> <span class="bord">Front-end Developer
                                <i></i></span>
                            <span class="d-block">From Goa</span>
                        </h1>
                        <div class="hero-btns">
                            <a href="contact.html" class="theme-btn">Hire Me <i class="far fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="author-image-part wow fadeIn delay-0-3s">
                        <div class="bg-circle"></div>
                        <img src="../assets/images/hero/3dman.png" alt="Author">
                        <div class="progress-shape">
                            <img src="../assets/images/hero/progress-shape.png" alt="Progress">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- Hero Section End -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap/all'
import SplitType from 'split-type'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
/*======================================
30. Charchater Come Animation 
========================================*/
onMounted(() => {

    let char_come = document.querySelectorAll(".animation__char_come")

    char_come.forEach((char_come) => {
        let split_char = new SplitType(char_come, { type: "chars, words," })
        gsap.from(split_char.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.06 });
    })
})
</script>

<style></style>