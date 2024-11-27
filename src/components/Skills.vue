<template>
    <section class="px-5 pt-16 relative">
        <div class="text-center  max-w-[40rem] mx-auto flex flex-col gap-12">
            <h2 class="text-8xl uppercase font-Phudu font-bold  text-shadow text-[#0f1b61]" data-scroll-var>Skills
            </h2>
            <p>"With 5 years of experience, I’ve developed a versatile toolkit that combines creativity and technical
                expertise. Specializing in both front-end development and back-end architecture, I deliver visually
                engaging and highly functional solutions tailored to your needs."

            </p>
        </div>
        <div class="gallery-wrap">

            <div class="gallery gallery--grid10" id="gallery-3" ref="galleryEl">


                <div class="gallery__item pos-1">
                    <!-- <v-icon hover fill="#5E3B7F" name="fa-bootstrap"></v-icon> -->
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
                    <!-- <v-icon name="baidu" /> -->
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
                <div class="caption font-Phudu text-[#150050] font-bold text-center bg-[#F0FFFF] rounded-3xl">👨🏼‍🔬
                    Embracing tech,
                    👨🏼‍🎨
                    creating art.
                </div>

            </div>
        </div>

    </section>


</template>

<script setup>
import { fontAnim, stickyCards } from "../js/utilits";

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
fontAnim();
stickyCards();



// Register GSAP plugins
// gsap.registerPlugin(Flip, ScrollTrigger);






</script>
