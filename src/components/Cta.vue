<template>
    <!-- title intro area -->
    <section class="title-intro-area fix primary-bg scroll_section prl-15">
        <div class="for-bgc-black py-130 rpy-100">
            <div class="container">
                <div class="section__subtitle-3">
                    <p class="section__subtitle-text">
                        any project in mind?
                    </p>

                </div>
                <div class="title-intro-wrapper section-spacing">

                    <div class="intro__title-wrapper">
                        <h2 class="intro__title-inner folks-text">Let’s talk.</h2>
                    </div>

                    <div class="hire-btn">
                        <a class="theme-btn" href="#contact">Hire me now</a>

                    </div>

                    <!-- <div class="intro-brn">
                    <a href="contact.html" class="circle-btn is-green">
                        <span class="icon-box"><i class="far fa-arrow-right"></i></span>
                        <img src="../assets/images/illustration/contact-btn-text.png" alt="image not found"
                            class="image-text">
                    </a>
                </div> -->
                </div>
                <div class="shape-illustration">
                    <img src="../assets/images/illustration/2.png" alt="illustration">
                </div>
            </div>
        </div>

    </section>
    <!-- title intro end -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import chroma from "chroma-js"
import SplitType from 'split-type'

import gsap from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.config({
    nullTargetWarn: false,
});

const windowOn = window;
let larger = 1600;
let xxl = 1400;
let xl = 1200;
let lg = 992;
let md = 768;
let sm = 576;
let device_width = window.innerWidth;




</script>
<style>
.title-intro-area {
    padding-top: 120px;
    padding-bottom: 120px;
    margin-bottom: 140px;
    /* background-color: var(--black-color); */
    position: relative;

    /* background: var(--lighter-color); */
    max-width: 1620px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(0, 0, 0, .2) !important;

}

.section__subtitle-3 {
    display: flex;
    align-items: flex-start;
    gap: 27px;
    margin-bottom: 30px;
}

.shape-illustration {
    position: absolute;
    right: 0;
    /* max-width: 25%; */
    bottom: 37px;
}

.section__subtitle-text {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-color);
    text-transform: uppercase;
    /* font-family: var(--tpl-ff-heading); */
    margin-bottom: 0;
    line-height: 25px;
    padding-bottom: 10px;
    display: inline-block;
    position: relative;
}

.section__subtitle-number span {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-color);
    /* font-family: var(--tpl-ff-heading); */
}

.title-intro-wrapper {
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; */

}

.hire-btn {
    position: relative;
    top: 65px;
}

.intro__title-inner {
    font-weight: 400;
    font-size: 150px;
    text-transform: unset;
    line-height: 1;
    margin-bottom: 0;
    color: #14cf93;
}
</style>