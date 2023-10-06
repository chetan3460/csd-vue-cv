<template>
    <!-- Resume Area start -->
    <section id="resume" class="resume-area pt-130 rpt-100 rel z-1 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <!-- <div class="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
                        <i class="flaticon-asterisk-1"></i>
                    </div> -->
                    <div class="download-cv-wrap">
                        <div class="about__download-wrap text-xs-center">
                            <img class="image-text" src="../assets/images/illustration/download-circel-white.png"
                                alt="image not found"> <a href="#"><span class="download-icon"><img
                                        src="../assets/images/illustration/download-icon-.png"
                                        alt="image not found"></span></a>
                        </div>
                    </div>


                </div>
                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-xl-8 col-lg-9">
                            <div class="section-title mb-60 wow fadeInUp delay-0-2s">
                                <span class="sub-title mb-15">My Resume</span>
                                <h2>Real <span>Problem Solutions</span> Experience</h2>
                            </div>
                        </div>
                    </div>
                    <div class="resume-items-wrap">
                        <div class="row justify-content-between">
                            <div class="col-xl-5 col-md-6">
                                <div class="resume-item wow fadeInUp delay-0-3s">
                                    <div class="icon">
                                        <i class="far fa-arrow-right"></i>
                                    </div>
                                    <div class="content">
                                        <span class="years">2021 - Present</span>
                                        <h4>Lead Product Designer</h4>
                                        <span class="company">Google</span>
                                    </div>
                                </div>
                                <div class="resume-item wow fadeInUp delay-0-4s">
                                    <div class="icon">
                                        <i class="far fa-arrow-right"></i>
                                    </div>
                                    <div class="content">
                                        <span class="years">2016 - 2018</span>
                                        <h4>Junior UX/UI Designer</h4>
                                        <span class="company">LinkedIn</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-5 col-md-6">
                                <div class="resume-item wow fadeInUp delay-0-2s">
                                    <div class="icon">
                                        <i class="far fa-arrow-right"></i>
                                        <v-icon name="fa-user-graduate"></v-icon>

                                    </div>
                                    <div class="content">
                                        <span class="years">2018 - 2021</span>
                                        <h4>Senior Product Designer</h4>
                                        <span class="company">Webflow</span>
                                    </div>
                                </div>
                                <div class="resume-item wow fadeInUp delay-0-4s">
                                    <div class="icon">
                                        <i class="far fa-arrow-right"></i>
                                    </div>
                                    <div class="content">
                                        <span class="years">2014 - 2016</span>
                                        <h4>Graphics Designer</h4>
                                        <span class="company">Apple</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- Resume Area end -->
</template>

<script setup>
import {
    OhVueIcon,
    addIcons
} from 'oh-vue-icons'
import {
    FaUserGraduate,


} from 'oh-vue-icons/icons'
addIcons(FaUserGraduate)

</script>


<style>
.about__download-wrap {
    position: relative;
}

.about__download-wrap .image-text {
    animation: rotate 20s linear infinite;
}

.about__download-wrap .download-icon {
    position: absolute;
    left: 90px;
    top: 50%;
    transform: translate(-50%, -50%);
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

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
    .about__download-wrap .download-icon {
        left: 80px;
    }
}

@media (max-width: 575px) {
    .about__download-wrap .download-icon {
        left: 50%;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .about__download-wrap .download-icon {
        left: 17%;
    }
}



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