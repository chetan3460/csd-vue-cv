<template>
    <!-- Hero Section Start -->
    <!-- <section id="home" class="main-hero-area pt-150 pb-80 rel z-1 scroll_section" data-bgcolor="#ffc1c5"
        data-scroll-section>
        <div class="container">
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
                        <img src="../assets/images/hero/hero.png" alt="Author">
                      
                    </div>
                </div>
            </div>
        </div>

    </section> -->
    <!-- hero area start  -->
    <!-- <section class="hero-2-area p-relative fix" data-scroll-section>
   
        <div class="container">
            <div class="hero-2__inner p-relative">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-2__content p-relative">

                            <span class="hero-2__subtitle">I Am creative</span>
                            <h1 class="hero-2__title">
                                Fr<a href="#" class="circle-btn">
                                    <span class="icon-box"><img src="../assets/images/hero/star.svg" alt=""></span>
                                </a>ntend<br>
                                <span class="big-text">Developer</span>

                            </h1>
                            <p class="hero-2__text p-text">

                                Hi, my name is Chetan Dharagalkar, a frontend developer based in Goa. I am passionate about
                                interactive design and enjoy collaborating on interesting and meaningful projects

                            </p>
                            <div class="hero-2__btn">
                                <a href="about-02.html" class="circle-btn">
                                    <span class="icon-box"><img src="../assets/images/hero/arrow-dark.svg" alt=""></span>
                                    <img src="../assets/images/hero/contact-me.svg" alt="image not found"
                                        class="image-text">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section> -->
    <!-- hero area end  -->


    <section id="home" class="custom-perspective bg-secondary border-0 p-0 m-0 text-center p-relative" data-scroll-section>
        <div class="container-fluid">
            <div class="row min-vh-100 align-items-center">
                <div class="col">
                    <div class="row py-3 py-lg-0 custom-border-bottom-1">
                        <div class="col">
                            <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
                                <strong class="custom-hero-font-1 text-dark hero-2__subtitle">FRONTEND
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div class="row py-3 custom-border-bottom-1">
                        <div class="col">
                            <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
                                <div class="d-lg-flex justify-content-center align-items-center">
                                    <strong
                                        class="custom-hero-font-1 text-dark custom-stroke-text-effect-1 hero-2__title">Creative</strong>
                                    <p class="custom-hero-text-1 text-start text-center text-lg-start d-block pb-2 pb-lg-0">
                                        Hello, I am <strong class="text-dark">John Doe</strong> an Art Director and Digital
                                        Designer currently available to work as freelancer or full-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-3 py-lg-0">
                        <div class="col">
                            <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/hero/star.svg"
                                        class="img-fluid rounded-circle custom-hero-img-1 main-img">
                                    <strong class="custom-hero-font-1 text-dark secondary-img">Developer</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a href="#about" data-hash
            class="btn btn-link-effect-1 text-3 mt-3 btn-link-underline-1 px-0 py-0 bg-transparent bg-color-before-dark border-0 text-color-dark font-weight-semi-bold text-decoration-none p-absolute bottom-30 transform3dx-n50 left-50pct">Find
            Out More <img width="25" height="25" class="rotate-r-90" src="../assets/images/hero/arrow-dark.svg"
                alt="" /></a>

    </section>
</template>

<script setup>
import { heroText } from '../js/utilits'
import { paraAnimation } from '../js/utilits'

heroText();
paraAnimation();
</script>


