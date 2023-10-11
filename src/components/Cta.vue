<template>
    <!-- title intro area -->
    <section class="title-intro-area fix primary-bg scroll_section prl-15">
        <div class="for-bgc-black py-130 rpy-100">
            <div class="container">
                <div class="col-lg-8">
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

                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="shape-illustration">
                        <img src="../assets/images/illustration/2.png" alt="illustration">
                    </div>
                </div>

            </div>
        </div>

    </section>
    <!-- title intro end -->
</template>
<script setup>
import { splitTextAnimation } from '@/js/utilits'
splitTextAnimation()



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

@media only screen and (max-width: 991px) {
    .intro__title-inner {
        font-size: 90px;

    }
}

@media only screen and (max-width: 479px) {
    .title-intro-area {
        padding-top: 0;
        padding-bottom: 0;
        text-align: center;

    }

    .section__subtitle-3 {

        justify-content: center;
    }

    .title-intro-wrapper {
        text-align: center;
        display: inline-block;
    }

    .intro__title-inner {
        font-size: 70px;
    }

    .shape-illustration {
        position: relative;

        bottom: -166px;
    }


}
</style>