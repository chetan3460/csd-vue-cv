<template>
    <!-- about inner area start  -->
    <section class="int-inab-area pt-150 pb-150" data-scroll-section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intDesigner-about__sec-title-wrapper text-start about-section-title">
                        <h3 class="int-inab-sub-title mb-30   split-title-line">About me</h3>
                        <h2 data-scroll class="int-inab-title   words-slide-from-right text-split">Hi, I'm
                            Chetan
                            Frontend Developer </h2>
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
                        <div class="cf_image arrow-line-icon">
                            <img src="../assets/imgs/interior-designer/arrow-line.png" alt="">
                        </div>

                        <!-- <h3 class="int-inab-area__title mb-55 has_text_reveal_anim animation__word_come_long"
                            ref="wordComeLongElements">Hola
                            Interior <br>
                            Studio</h3> -->
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
</template>

<script setup>
import { sectionTitleAnim } from '@/js/utilits'

import { wordSlide } from '../js/utilits';
import { imgRevel } from '../js/utilits';
// import { titleAnimation } from '../js/utilits';


sectionTitleAnim()



wordSlide()
imgRevel()
// titleAnimation()

</script>


