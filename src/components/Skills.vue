<template>
    <section class="skills--block px-5 pt-16 relative">
        <div class="text-center  max-w-[40rem] mx-auto flex flex-col gap-12">
            <h2 class="md:text-8xl text-7xl uppercase font-Phudu font-bold  text-shadow ">Skills
            </h2>
            <p>"With 5 years of experience, I’ve developed a versatile toolkit that combines creativity and technical
                expertise. Specializing in both front-end development and back-end architecture, I deliver visually
                engaging and highly functional solutions tailored to your needs."

            </p>
        </div>
        <div class="gallery-wrap">

            <div class="gallery gallery--grid10" id="gallery-3" ref="galleryEl">


                <div class="gallery__item pos-1">
                    <div class="icon flex items-center justify-center flex-col">
                        <v-icon name="vi-file-type-vue" />
                        <span class="text-sm">Vue</span>
                    </div>
                </div>
                <div class="gallery__item pos-2">
                    <v-icon name="vi-file-type-nuxt" />
                    <span class="text-sm">Nuxt</span>

                </div>
                <div class="gallery__item pos-3">
                    <v-icon name="vi-file-type-vite" />
                    <span class="text-sm">Vite</span>

                </div>
                <div class="gallery__item pos-4">
                    <v-icon name="vi-file-type-webpack" />
                    <span class="text-sm">Webpack</span>

                </div>
                <div class="gallery__item pos-5">
                    <v-icon name="vi-file-type-css" />
                    <span class="text-sm">CSS3</span>

                </div>
                <div class="gallery__item pos-6">
                    <v-icon name="io-logo-wordpress" fill="#21759b" />
                    <span class="text-sm">Wordpress</span>

                </div>
                <div class="gallery__item pos-7">
                    <img :src="customCmsIcon.src" :alt="customCmsIcon.name" :width="customCmsIcon.width"
                        :height="customCmsIcon.height" />
                    <span class="text-sm">Concerete 9</span>

                </div>
                <div class="gallery__item pos-8">
                    <v-icon name="vi-file-type-html" />
                    <span class="text-sm">HTML</span>

                </div>
                <div class="gallery__item pos-9">
                    <v-icon name="vi-file-type-js-official" />
                    <span class="text-sm">JS</span>

                </div>
                <div class="gallery__item pos-10">
                    <img :src="customGsapIcon.src" :alt="customGsapIcon.name" :width="customGsapIcon.width"
                        :height="customGsapIcon.height" />
                    <span class="text-sm">Gsap</span>

                </div>
                <div class="gallery__item pos-11">
                    <v-icon name="vi-file-type-scss2" />
                    <span class="text-sm">SCSS</span>

                </div>
                <div class="gallery__item pos-12">
                    <v-icon name="co-jquery" fill="#186dae" />
                    <span class="text-sm">JQuery 9</span>

                </div>
                <div class="gallery__item pos-13">
                    <v-icon name="vi-file-type-tailwind" />
                    <span class="text-sm">Tailwind</span>

                </div>
                <div class="gallery__item pos-14">
                    <v-icon name="co-bootstrap" fill="#7611f6" />
                    <span class="text-sm">Bootstrap</span>

                </div>
                <div class="gallery__item pos-15">
                    <v-icon name="co-github" fill="#000" />
                    <span class="text-sm">Github</span>

                </div>
                <div class="gallery__item pos-16">
                    <v-icon name="si-sourcetree" fill="#0052cc" />
                    <span class="text-sm">Sourcetree</span>

                </div>
                <div class="caption  bg-[#9a92d9] ">
                    <div class="p-2">
                        <p
                            class="font-Phudu  font-bold text-center  rounded-3xl text-[#0b0623] md:text-6xl text-5xl max-w-[50rem]">
                            Code is like
                            poetry—crafted with care,
                            <span class="inline-block">written with purpose,</span>
                            and built to inspire.
                        </p>
                    </div>

                </div>

            </div>
        </div>

    </section>

</template>

<script setup>
import { stickyCards } from "../js/utilits";

import {
    OhVueIcon,
    addIcons
} from 'oh-vue-icons'
import {
    ViFileTypeVue,
    ViFileTypeWebpack,
    ViFileTypeNuxt,
    ViFileTypeJsOfficial,
    ViFileTypeScss2,
    IoLogoWordpress,
    LaShapesSolid,
    ViFileTypeVite,
    CoJquery,
    CoJavascript,
    ViFileTypeHtml,
    ViFileTypeCss,
    CoBootstrap,
    ViFileTypeTailwind,
    CoGithub,
    SiSourcetree,

} from 'oh-vue-icons/icons'

import gsapIcon from '@/assets/svg/gsap.svg';
import cmsIcon from '@/assets/svg/cms5.svg';

const customGsapIcon = {
    name: 'baidu',
    width: 45,
    height: 45,
    src: gsapIcon // The imported SVG image URL
};

const customCmsIcon = {
    name: 'cmsIcon',
    width: 45,
    height: 45,
    src: cmsIcon // The imported SVG image URL
};


addIcons(SiSourcetree, LaShapesSolid, CoGithub, IoLogoWordpress, ViFileTypeScss2, CoJquery, CoJavascript, ViFileTypeHtml, ViFileTypeCss, CoBootstrap, ViFileTypeVue, ViFileTypeWebpack, ViFileTypeNuxt, ViFileTypeJsOfficial, ViFileTypeScss2, ViFileTypeTailwind, ViFileTypeVite, customGsapIcon, customCmsIcon);
stickyCards();






</script>
<style>
/*--------------------------------------------------
	Slowed Pin
---------------------------------------------------*/
.big-title {
    font-size: calc(1rem + 4vw);
    line-height: calc(1rem + 4vw);
}

.slowed-pin {
    position: relative;
    overflow: hidden;
}

.slowed-pin>.pin-spacer {
    pointer-events: none;
}

.slowed-text {
    position: absolute;
    height: auto;
    min-height: 100vh;
    width: 100%;
    max-width: 980px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 8vw 20px;
    z-index: 1;
    pointer-events: none;
    margin: auto;
    left: 0;
    right: 0;
}

.slowed-text-wrapper {
    position: relative;
    display: block;
}

.slowed-images {
    position: relative;
    top: 0;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 0;
    margin: auto;
}

.slowed-image {
    position: relative;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0 0px;
    margin: 150px 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.slowed-image:nth-of-type(2n+2) {
    align-items: flex-end;
}

.slowed-image img {
    width: auto;
    max-width: 40% !important;
    height: auto !important;
    display: block;
    cursor: pointer;
    margin-bottom: 10px;
    -webkit-transform: scale(0.95) translateY(30%);
    transform: scale(0.95) translateY(30%);
}

.rounded-borders .slowed-image img {
    border-radius: 8px;
}
</style>