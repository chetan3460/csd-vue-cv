<template>
    <!-- Resume Area start -->
    <section id="resume" class="resume-area pt-130 rpt-100 rel z-1 pb-130 scroll_section" data-bgcolor="#d7c9f6"
        data-scroll-section>
        <div class="container">
            <div class="row">

                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-xl-8 col-lg-9">
                            <div class="section-title mb-60">
                                <span class="sub-title mb-15"><v-icon name="bi-briefcase"></v-icon> My Resume</span>
                                <h2 class="split-title-line">Real <span>Problem Solutions</span> Experience</h2>
                            </div>
                        </div>
                    </div>
                    <div class=" resume-items-wrap">
                        <div class="row justify-content-between">
                            <div class="col-xl-6 col-md-6">
                                <div class="resume-item">
                                    <div class="icon">
                                        <v-icon name="fa-user-tie" scale="1.3"></v-icon>
                                    </div>
                                    <div class="content">
                                        <span class="years">July 2022 - September 2023</span>
                                        <h4>Frontend Developer</h4>
                                        <span class="company">Prototyze</span>
                                    </div>
                                </div>
                                <div class="resume-item wow fadeInUp delay-0-4s">
                                    <div class="icon">
                                        <v-icon name="fa-user-tie" scale="1.3"></v-icon>
                                    </div>
                                    <div class="content">
                                        <span class="years">May 2019 - June 2022</span>
                                        <h4>Senior UI developer</h4>
                                        <span class="company">webware.io</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-md-6">
                                <div class="resume-item">
                                    <div class="icon">
                                        <v-icon name="fa-user-graduate" scale="1.3"></v-icon>

                                    </div>
                                    <div class="content">
                                        <span class="years">2017 - 2019</span>
                                        <h4>Master of Computer Applications</h4>
                                        <span class="company">Assam Don Bosco University</span>
                                    </div>
                                </div>
                                <div class="resume-item wow fadeInUp delay-0-4s">
                                    <div class="icon">
                                        <v-icon name="fa-user-graduate" scale="1.3"></v-icon>
                                    </div>
                                    <div class="content">
                                        <span class="years">2012 - 2015</span>
                                        <h4>Bachelor of Computer Application</h4>
                                        <span class="company">Dnyanprassarak Mandal’s College</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-3 bd-position-sticky">
                    <!-- <div class="big-icon mt-85 rmt-0 rmb-55">
                        <i class="flaticon-asterisk-1"></i>
                    </div> -->
                    <div class="column two">
                        <div class="download-cv-wrap about__download-wrap text-xs-center rmb-55 rpt-50">

                            <a href="cv/chetan-dhargalkar-cv.png" class="resume-btn" download>
                                <div class="inner-circle">
                                    <img class="image-text"
                                        src="../assets/images/illustration/download-circel-white.png"
                                        alt="image not found">
                                    <span class="download-icon">
                                        <v-icon name="bi-cloud-download" scale="3" fill="#14cf93"></v-icon>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </section>
    <!-- Resume Area end -->



    <div class="container-fluid">
        <div class="sticky-container-wrapper">
            <div id="w-node-cf0cb765-d900-141b-76de-0d17009807fd-7b48cd91" class="sticky-content-block _01"><img
                    src="https://assets-global.website-files.com/663c9ea3db426e2f7b48cd90/663d042423b4805ca920f21b_service-icon-01.svg"
                    loading="lazy" alt="" class="service-icon">
                <h2 class="service-title">UI/Ux<br>Design</h2>
                <div class="spacer-medium"></div>
                <p class="text-size-regular">creating intuitive and engaging interfaces tha prioritize the user
                    experience,
                    focusing on usability</p>
            </div>
            <div id="w-node-cf0cb765-d900-141b-76de-0d1700980803-7b48cd91" class="sticky-content-block _02"><img
                    src="https://assets-global.website-files.com/663c9ea3db426e2f7b48cd90/663d0424983e373aca93d687_service-icon-02.svg"
                    loading="lazy" alt="" class="service-icon">
                <h2 class="service-title">Visual<br>Identity</h2>
                <div class="spacer-medium"></div>
                <p class="text-size-regular">developing cohesive brand identities by designing logos, color, schemes,
                    typography and visual elements</p>
            </div>
            <div id="w-node-cf0cb765-d900-141b-76de-0d1700980809-7b48cd91" class="sticky-content-block _03"><img
                    src="https://assets-global.website-files.com/663c9ea3db426e2f7b48cd90/663d0424f7e1095c6f890c71_service-icon-03.svg"
                    loading="lazy" alt="" class="service-icon">
                <h2 class="service-title">Digital<br>Marketing</h2>
                <div class="spacer-medium"></div>
                <p class="text-size-regular">designing assets and materials for digital markting campaigns to
                    communicate
                    messages effectively</p>
            </div>
            <div id="w-node-cf0cb765-d900-141b-76de-0d170098080f-7b48cd91" class="sticky-content-block _04"><img
                    src="https://assets-global.website-files.com/663c9ea3db426e2f7b48cd90/663d042419bdb4785baa9fee_service-icon-04.svg"
                    loading="lazy" alt="" class="service-icon">
                <h2 class="service-title">Website<br>Design</h2>
                <div class="spacer-medium"></div>
                <p class="text-size-regular">Creation of visually appealing and functional websites, adapted to clients'
                    needs and easy navigation</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { btnStickyScroll } from '@/js/utilits'
import { sectionTitleAnim } from '@/js/utilits';

import {
    OhVueIcon,
    addIcons
} from 'oh-vue-icons'
import {
    BiBriefcase,
    FaUserGraduate,
    FaUserTie,
    BiCloudDownload
} from 'oh-vue-icons/icons'

addIcons(BiBriefcase, FaUserGraduate, FaUserTie, BiCloudDownload)

btnStickyScroll();

sectionTitleAnim();






</script>


<style scoped>
.service-title {
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.2;
}

.sticky-container-wrapper {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: flex-start;
    display: grid;
}

.sticky-content-block {
    border: 1px solid #000;
    background-color: #f95d2d;

    width: 100%;
    padding: 2.5rem 1.5rem;
    position: -webkit-sticky;
    position: sticky;
    top: 10vh;
}

.sticky-content-block._02 {
    margin-top: 80vh;
}

.sticky-content-block._03 {
    margin-top: 140vh;
}

.sticky-content-block._04 {
    margin-top: 200vh;
}

.service-icon {
    height: 3rem;
    margin-bottom: 1.5rem;
}

@media screen and (max-width: 991px) {
    .sticky-container-wrapper {
        flex-direction: column;
        grid-template-columns: 1fr 1fr;
    }

    .sticky-content-block._02 {
        margin-top: 10vh;
    }

    .sticky-content-block._03 {
        margin-top: 15vh;
    }

    .sticky-content-block._04 {
        margin-top: 25vh;
    }
}

@media screen and (max-width: 767px) {
    .sticky-container-wrapper {
        grid-template-columns: 1fr;
    }

    .sticky-content-block._02,
    .sticky-content-block._03,
    .sticky-content-block._04 {
        margin-top: 5vh;
    }
}
</style>