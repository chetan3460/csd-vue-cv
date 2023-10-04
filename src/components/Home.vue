<template>
    <!-- Hero Section Start -->
    <section id="home" class="main-hero-area pt-150 pb-80 rel z-1">
        <div class="container container-1620">
            <div class="row align-items-center rel">
                <div class="col-lg-4 col-sm-7">
                    <div class="hero-content rmb-55 wow fadeInUp delay-0-2s">
                        <span class="h2">Hello, i’m </span>
                        <h1><b>Roy C. Jones</b> web designer</h1>
                        <p>We denounce with righteous indignation dislike demoralized by the charms of pleasure</p>
                        <div class="hero-btns">
                            <a href="contact.html" class="theme-btn">Hire Me <i class="far fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-5 order-lg-3">
                    <!-- <div class="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
                        <div class="counter-item counter-text-wrap">
                            <span class="count-text plus" data-speed="3000" data-stop="13">0</span>
                            <span class="counter-title">Years Of Experience</span>
                        </div>
                        <div class="counter-item counter-text-wrap">
                            <span class="count-text k-plus" data-speed="3000" data-stop="8">0</span>
                            <span class="counter-title">Project Complete</span>
                        </div>
                        <div class="counter-item counter-text-wrap">
                            <span class="count-text percent" data-speed="3000" data-stop="99">0</span>
                            <span class="counter-title">Client Satisfactions</span>
                        </div>
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
                <div class="col-lg-5">
                    <div class="author-image-part wow fadeIn delay-0-3s">
                        <div class="bg-circle"></div>
                        <img src="../assets/images/hero/me.png" alt="Author">
                        <div class="progress-shape">
                            <img src="../assets/images/hero/progress-shape.png" alt="Progress">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-lines">
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
        </div>
    </section>
    <!-- Hero Section End -->
</template>

<style>
.download-cv-wrap {
    position: absolute;
    right: 0;
    bottom: 0;
}


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
    width: 108px;
    height: 108px;
    background: #FFFFFF;
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    line-height: 108px;
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