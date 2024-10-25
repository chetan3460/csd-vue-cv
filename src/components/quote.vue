<template>
    <section class="about-me--block about-sec relative flex items-center justify-center  ">
        <div class="container">
            <!-- <div class="about-me--main-wrapper text-center">
                <h2
                    class="font-Phudu text-[200px] leading-[0.9em] tracking-[-15px] mt-[0.2em] mb-0 ml-0 mr-0 text-[#2D5154] align-middle transition-colors duration-300 font-extrabold uppercase">
                    HI, I'm
                    <span class="block">Chetan</span>
                </h2>
            </div> -->
            <div
                class="about-me--info-wrapper text-center flex flex-col flex-nowrap items-center justify-center gap-10 h-[40vh] w-full overflow-hidden sticky top-0 py-10 pt-20 will-change-transform">
                <h2
                    class="sticky-statement2 font-Phudu text-[110px] font-extrabold uppercase leading-[0.8em] tracking-[-0.01em] align-middle transition-colors duration-300">
                    More about me
                </h2>
            </div>
            <div class="about-bottom-content-wrap flex flex-col justify-center items-center text-center">
                <div class="img-box  h-[644px] max-w-[638px]  overflow-hidden w-full">
                    <div class="img-box-inner w-full h-full relative scale-125">
                        <img class="block w-full h-full object-cover" data-jarallax-element="-20 0"
                            src="https://adaptivecolorspro.liquid-themes.com/wp-content/uploads/2020/12/Image@2x.jpg"
                            alt="About">
                    </div>
                </div>
                <div class="about-bottom-content flex flex-col justify-center items-center text-center gap-7 pt-20">
                    <div>
                        <h4 class="font-Phudu text-[30px] font-bold uppercase leading-none leading-[40px]">I'M AN
                            INNOVATIVE DESIGNER AND DIGITAL ARTIST IN TOKYO. <br>MY PASSION FOR MINIMALIST
                            AESTHETICS, ELEGANT TYPOGRAPHY, <br>AND INTUITIVE DESIGN SHINES THROUGH IN MY WORK.</h4>
                    </div>
                    <p>I'm on the cutting edge of no-code tools that allow me to bring my creative visions to
                        life. Though my methods may be unconventional, my dedication to the craft is
                        unparalleled. I thrive on finding <i>"unexpected solutions"</i> and believe that with
                        the right perspective, design can elevate the human experience.</p>
                    <p class="responsive-mode">I'm on the edge of no-code tools that allow me to bring my creativity to
                        life.</p>
                    <a href="https://drive.google.com/file/d/1Issw97gs-kreC7QWev66jO6YC2FdF0L0/view" download=""
                        class="theme-btn">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
    <section class="quote-section  bg-gradient-to-b  p-16 relative">
        <!-- <div class="paralax--effect  bg-gradient-to-b from-[#D4F9D5] to-[#F6F9D4]"></div> -->
        <div class="container">
            <div class="main-wrapper">
                <div class="quote-txt p-16">
                    <h2 id="bottom"
                        class="text-[#2D5154] font-Phudu text-[110px] font-extrabold uppercase leading-[0.8em] tracking-[-0.01em] target-paragraphs">
                        Programming is more than a job;
                        it's a way
                        to bring
                        ideas
                        to
                        life with lines of code.
                    </h2>
                </div>
            </div>
        </div>
    </section>
    <section class="section_services flex items-center justify-center">
        <div class="container">
            <div class="col-d-10 col-t-12">
                <div class="services_wrapper">
                    <div class="services_left-col">
                        <div class="services_left-sticky">
                            <p class="text-size-x1">How we help</p>
                            <div class="services_category-wrapper">
                                <h2 id="title-dev" class="services_gategory-heading">
                                    DEVELOPMENT</h2>
                                <h2 id="title-design" class="services_gategory-heading">
                                    DESIGN</h2>
                            </div>
                        </div>
                    </div>
                    <div class="services_right-col">
                        <div id="group-dev" class="services_group">
                            <h2 class="services_gategory-heading in-group slide">
                                DEVELOPMENT</h2>
                            <p class="services_group-item slide">
                                WEBFLOW DEVELOPMENT</p>
                            <p class="services_group-item slide">
                                SEO OPTIMATIZATION</p>
                            <p class="services_group-item slide">
                                ADVANCED INTERACTIONS</p>
                            <p class="services_group-item slide">
                                CUSTOM SOLUTIONS</p>
                            <p class="services_group-item slide">
                                SHOPIFY INTEGRATIONS</p>
                            <p class="services_group-item slide">
                                INTERNAL QA TESTING</p>
                        </div>
                        <div class="services_group-divider slide">
                        </div>
                        <div id="group-design" class="services_group">
                            <h2 class="services_gategory-heading in-group slide">
                                DESIGN</h2>
                            <p class="services_group-item slide">
                                ART DIRECTION</p>
                            <p class="services_group-item slide">
                                BRAND IDENTITY DESIGN</p>
                            <p class="services_group-item slide">
                                GRAPHIC DESIGN</p>
                            <p class="services_group-item slide">
                                WIREFRAMING</p>
                            <p class="services_group-item slide">
                                USER INTERFACE DESIGN</p>
                            <p class="services_group-item slide">
                                DIGITAL PRODUCT DESIGN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { revealLetter } from '../js/utilits';
import { heroAnimationControl, paralaxAnimation, stickyElement } from '../js/utilits';

onMounted(() => {
    heroAnimationControl();
    stickyElement();
    revealLetter()

});

</script>
<style>
/* .paralax--effect {
    position: absolute;
    width: 100%;
    left: 0;
    top: calc(100% - 2px);
    transform: translateY(99%);
    z-index: 4;
} */


.section_services {
    padding-top: 20vh;
    padding-bottom: 100vh;
}

.services_wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
}

.services_left-col {
    position: relative;
    max-width: 33%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    grid-row-gap: 0.25rem;
}

.services_category-wrapper {
    overflow: hidden;
    height: 3rem;
}

.services_gategory-heading {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.022em;
    white-space: nowrap;
}

.services_gategory-heading.in-group {
    display: none;
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 1.2px solid #165ff2;
}

.services_right-col {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    border-left: 1.2px solid #165ff2;
}

.services_group {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
}

.services_group-item {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.022em;
    white-space: nowrap;
}

.services_group-divider {
    width: 100%;
    height: 1.2px;
    background-color: #165ff2;
}

.services_left-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    grid-row-gap: 0.25rem;
}
</style>