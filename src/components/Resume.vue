<template>
    <!-- Resume Area start -->
    <section id="resume" class="resume-area pt-130 rpt-100 rel z-1 pb-130 scroll_section" data-bgcolor="#ffc29b">
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

import { useScrollAnimation, btnStickyScroll } from '@/js/utilits'
// import { btnStickyScroll } from '@/js/utilits';

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

useScrollAnimation();
btnStickyScroll();








</script>


<style>
.download-cv-wrap {
    /* position: relative;
    max-width: 178px; */
}

.about__download-wrap {
    position: relative;
    text-align: center;

}

.about__download-wrap .image-text {
    animation: rotate 20s linear infinite;
}

.about__download-wrap .download-icon {
    position: absolute;
    left: 0;
    right: 0;
    top: 21px;
    margin: 0 auto;
    /* transform: translate(-50%, -50%); */
    text-align: center;
    width: 130px;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.resume-btn {
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
}

/* @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    .about__download-wrap .download-icon {
        left: 80px;
    }
} */

/* @media (max-width: 575px) {
    .about__download-wrap .download-icon {
        left: 50%;
    }
} */

/* @media only screen and (min-width: 576px) and (max-width: 767px) {
    .about__download-wrap .download-icon {
        left: 17%;
    }
} */



.hero__btn {
    position: absolute;
    right: 0;
    bottom: 30px;
    transform: rotate(-45deg);
}

.circle-btn {
    width: 160px;
    height: 160px;
}

.circle-btn .icon-box {
    background: var(--primary-color);
    ;
}

.circle-btn .icon-box i {
    font-size: 34px;
    color: var(--clr-common-white);
}

.circle-btn {
    /* height: 180px;
    width: 180px; */
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.circle-btn .icon-box {
    height: 120px;
    width: 120px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #222222;
    border-radius: 50%;
    font-size: 38px;
    font-weight: 400;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
}

.circle-btn .image-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: rotate 20s linear infinite;
    transition: all 0.3s ease-out 0s;
}

/* // animation rotate */
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@media only screen and (min-width: 1400px) and (max-width: 1600px),
only screen and (min-width: 1200px) and (max-width: 1399px) {
    .hero__btn {
        bottom: 0px;
        transform: rotate(-45deg) scale(0.8);
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .hero__btn {
        bottom: 60px;
        transform: rotate(-45deg) scale(0.5);
        transform-origin: right bottom;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px),
only screen and (min-width: 576px) and (max-width: 767px),
(max-width: 575px) {
    .hero__btn {
        position: static;
        transform: scale(0.7);
        margin-top: 60px;
        transform-origin: top left;
    }
}



@media only screen and (min-width: 1601px),
only screen and (min-width: 1400px) and (max-width: 1600px),
only screen and (min-width: 1200px) and (max-width: 1399px),
only screen and (min-width: 1200px) and (max-width: 1399px) {
    .hero__btn .circle-btn .icon-box {
        box-shadow: none;
    }
}
</style>