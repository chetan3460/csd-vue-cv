<template>
    <section id="about" class="about-section  scroll_section" data-bgcolor="#d5f5ff" data-scroll-section>
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="about-content-part ">
                        <div class="section-title mb-35">
                            <div class="tp-hero-2__exp-info">
                                <span class="tp-hero-2__exp-subtitle"> <b><img class="tp-ring-effect"
                                            src="../assets/images/about/hero-hand.png" alt=""></b> Hello
                                    There!</span>
                                <h4 class="tp-hero-2__exp-title">I’m Chetan</h4>
                                <p class="child-1 ">I am a UI Designer building usable human <br> interfaces for the
                                    digital world.</p>
                                <p class="child-2 ">Suspendisse convallis, mauris a placerat rutrum, lorem <br> libero
                                    sodales ipsum, quis tincidunt.!</p>
                                <a class="tp-hero-2__exp-link" href="contact.html">
                                    NEED THIS? LETS TALK
                                    <svg width="22" height="10" viewBox="0 0 22 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5.00012H20.1997" stroke="currentcolor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M17 1L20.9999 4.99993L17 8.99987" stroke="currentcolor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                            <!-- <span class="sub-title mb-15"><v-icon name="la-user-solid"></v-icon> About Me</span>
                            <h2 ref="scene1Actor1" class="title-anim split-title-line">I can develop
                                that <span>help people</span>
                            </h2> -->

                            <!-- <p>Front-end developer with a strong focus on creating exceptional user experiences. Thrive
                                on transforming complex ideas into intuitive and visually appealing designs. Keen eye
                                for detail and a user-centered approach to deliver impactful solutions that engage and
                                delight users. Collaborate to bring your digital products to life.

                            </p> -->
                        </div>

                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="about-image-part wow fadeInUp delay-0-3s">
                        <img src="../assets/images/about/curly-hair-man.png" alt="About Me">
                        <div class="about-btn btn-one wow fadeInRight delay-0-4s">
                            <img src="../assets/images/about/btn-image1.png" alt="Image">
                            <h6>Frontend Developer</h6>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <div class="about-btn btn-two wow fadeInRight delay-0-5s">
                            <img src="../assets/images/about/btn-image2.png" alt="Image">
                            <h6>Chetan S. Dhargalkar</h6>
                            <i class="fas fa-arrow-right"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- About Area start -->
    <section id="about" class="about-area rel z-1 scroll_section prl-15" data-bgcolor="#d5f5ff" data-scroll-section>
        <div class="">
            <div class="container">
                <div class="row gap-100 align-items-center">
                    <div class="col-lg-7">
                        <div class="about-content-part rel z-2 rmb-55">
                            <div class="section-title mb-35">
                                <span class="sub-title mb-15"><v-icon name="la-user-solid"></v-icon> About Me</span>
                                <h2 ref="scene1Actor1" class="title-anim split-title-line">I can develop
                                    that <span>help people</span>
                                </h2>

                                <p>Front-end developer with a strong focus on creating exceptional user experiences. Thrive
                                    on transforming complex ideas into intuitive and visually appealing designs. Keen eye
                                    for detail and a user-centered approach to deliver impactful solutions that engage and
                                    delight users. Collaborate to bring your digital products to life.

                                </p>
                            </div>
                            <ul class="list-style-one two-column">
                                <li>
                                    Fast</li>
                                <li>Responsive</li>
                                <li>Intuitive</li>
                                <li>Dynamic</li>
                            </ul>
                            <div class="about-info-box mt-25">
                                <div class="info-box-item">
                                    <i class="far fa-envelope"></i>
                                    <div class="content">
                                        <span>Email Us</span><br>
                                        <a href="mailto:chetan.dmc@gmail.com">chetan.dmc@gmail.com</a>
                                    </div>
                                </div>
                                <div class="info-box-item">
                                    <i class="far fa-phone"></i>
                                    <div class="content">
                                        <span>Make A Call</span><br>
                                        <a href="callto:+000(123)45688">+91 82752-60580</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="about-image-part wow fadeInUp delay-0-3s">
                            <img src="../assets/images/about/curly-hair-man.png" alt="About Me">
                            <div class="about-btn btn-one wow fadeInRight delay-0-4s">
                                <img src="../assets/images/about/btn-image1.png" alt="Image">
                                <h6>Frontend Developer</h6>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="about-btn btn-two wow fadeInRight delay-0-5s">
                                <img src="../assets/images/about/btn-image2.png" alt="Image">
                                <h6>Chetan S. Dhargalkar</h6>
                                <i class="fas fa-arrow-right"></i>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">


                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Area end -->
</template>

<script setup>
import { useScrollAnimation } from '@/js/utilits'
import { scrollInstance } from '../js/utilits';
import { revealLetter } from '../js/utilits';

import {
    OhVueIcon,
    addIcons
} from 'oh-vue-icons'
import {
    LaUserSolid,
    MdSpeedSharp,
    MdComputer,
    IoBulbOutline,
    IoRocketOutline

} from 'oh-vue-icons/icons'
addIcons(LaUserSolid, MdSpeedSharp, MdComputer, IoBulbOutline, IoRocketOutline)
useScrollAnimation()
revealLetter()
</script>


