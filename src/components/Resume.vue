<template>
    <!-- Resume Area start -->
    <section id="resume" class="resume-area pt-130 rpt-100 rel z-1 pb-130 scroll_section">
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
                                    <img class="image-text" src="../assets/images/illustration/download-circel-white.png"
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
</template>

<script setup>
import { onMounted } from 'vue';
import { btnStickyScroll } from '@/js/utilits'
import { useScrollAnimation } from '@/js/utilits';

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

useScrollAnimation();






</script>


<style></style>