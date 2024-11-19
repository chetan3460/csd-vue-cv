<template>
    <div class="gallery-wrap">


        <div class="gallery gallery--grid10" id="gallery-3" ref="galleryEl">
            <!-- <div v-for="(image, index) in images" :key="index" :class="`gallery__item pos-${index + 1}`"
                :style="{ backgroundImage: `url(${image})` }">
            </div> -->
            <div class="gallery__item pos-1">
                <!-- <v-icon hover fill="#5E3B7F" name="fa-bootstrap"></v-icon> -->
                <div class="icon">
                    <v-icon name="vi-file-type-vue" />
                </div>
            </div>
            <div class="gallery__item pos-2">
                <v-icon name="vi-file-type-nuxt" />
            </div>
            <div class="gallery__item pos-3">
                <v-icon name="vi-file-type-vite" />
            </div>
            <div class="gallery__item pos-4">
                <v-icon name="vi-file-type-webpack" />

            </div>
            <div class="gallery__item pos-5">
                <v-icon name="vi-file-type-css" />
            </div>
            <div class="gallery__item pos-6">
                <v-icon name="io-logo-wordpress" fill="#21759b" />

            </div>
            <div class="gallery__item pos-7">
                <!-- <v-icon name="baidu" /> -->
                <img :src="customCmsIcon.src" :alt="customCmsIcon.name" :width="customCmsIcon.width"
                    :height="customCmsIcon.height" />
            </div>
            <div class="gallery__item pos-8">
                <v-icon name="vi-file-type-html" />
            </div>
            <div class="gallery__item pos-9">
                <v-icon name="vi-file-type-js-official" />
            </div>
            <div class="gallery__item pos-10">
                <img :src="customGsapIcon.src" :alt="customGsapIcon.name" :width="customGsapIcon.width"
                    :height="customGsapIcon.height" />
            </div>
            <div class="gallery__item pos-11">
                <v-icon name="vi-file-type-scss2" />
            </div>
            <div class="gallery__item pos-12">
                <v-icon name="co-jquery" fill="#186dae" />
            </div>
            <div class="gallery__item pos-13">
                <v-icon name="vi-file-type-tailwind" />
            </div>
            <div class="gallery__item pos-14">
                <v-icon name="co-bootstrap" fill="#7611f6" />
            </div>
            <div class="gallery__item pos-15">
                <v-icon name="co-github" fill="#fff" />
            </div>
            <div class="gallery__item pos-16">
                <v-icon name="si-sourcetree" fill="#0052cc" />

            </div>
            <div class="caption">Building seamless, high-performance experiences with modern tech.</div>

        </div>
    </div>
    <section class="flex items-center justify-center text-center">
        <div>
            <p class=" text-9xl text-white">First, solve the problem. Then, write the code.</p>
        </div>
    </section>
    <div class="gallery-wrap gallery-wrap--dense">
        <div class="gallery gallery--stack gallery--stack-inverse gallery--stack-dark prose-h4:text-1xl prose-h4:text-white prose-p:text-sm text-white prose-p:!scale-100"
            id="gallery-4">
            <div class="gallery__item flex-col gap-4">
                <h4>Web Developer</h4>
                <p>Screenroot</p>
                <span class="text-sm  inline-block !scale-100">Present</span>
            </div>
            <div class="gallery__item flex-col gap-4">
                <div>
                    <h4>Frontent Developer</h4>
                    <p>Tentewenty</p>
                    <span class="text-sm  inline-block !scale-100">2023-24</span>
                </div>
            </div>
            <div class="gallery__item flex-col gap-4">
                <div>
                    <h4>Web Developer</h4>
                    <p>Screenroot</p>
                    <span class="text-sm  inline-block !scale-100">2022-23</span>
                </div>
            </div>
            <div class="gallery__item flex-col gap-4">
                <div>
                    <h4>Web Developer</h4>
                    <p>Screenroot</p>
                    <span class="text-sm  inline-block !scale-100">2019-22</span>
                </div>
            </div>

            <div class="caption prose-p:!text-lg prose-p:text-left prose-p:text-[#575757]">
                <p>From building custom CMS solutions to mastering WordPress and modern frameworks, my journey has been
                    defined by creating impactful, user-centric digital experiences.</p>
            </div>
        </div>
    </div>
</template>

<script setup>

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
import { ref, onMounted } from 'vue';
import { preloadImages } from '../js/utilits';
import Flip from 'gsap/Flip';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
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





// Register GSAP plugins
gsap.registerPlugin(Flip, ScrollTrigger);


const galleryEl = ref(null);

const triggerFlipOnScroll = (galleryEl, options) => {
    let settings = {
        flip: {
            absoluteOnLeave: false,
            absolute: false,
            scale: true,
            simple: true,
        },
        scrollTrigger: {
            start: 'center center',
            end: '+=300%',
            marker: true
        },
        stagger: 0,
    };

    settings = Object.assign({}, settings, options);

    // Select gallery items and ensure they are valid DOM elements
    const galleryCaption = galleryEl.querySelector('.caption');
    const galleryItems = galleryEl.querySelectorAll('.gallery__item');

    // Ensure we are getting a proper array of elements
    const galleryItemsArray = Array.from(galleryItems);

    // Check if elements exist before proceeding
    if (galleryItemsArray.length === 0 || !galleryCaption) {
        console.error("Gallery items or caption not found.");
        return;
    }

    // Temporarily add a class to capture the final state of Flip
    galleryEl.classList.add('gallery--switch');

    // Manually convert NodeLists to arrays and pass to Flip.getState()
    const flipState = Flip.getState([...galleryItemsArray, galleryCaption], { props: 'filter, opacity' });

    galleryEl.classList.remove('gallery--switch');

    // Create the Flip animation
    const tl = Flip.to(flipState, {
        ease: 'none',
        absoluteOnLeave: settings.flip.absoluteOnLeave,
        absolute: settings.flip.absolute,
        scale: settings.flip.scale,
        simple: settings.flip.simple,
        scrollTrigger: {
            trigger: galleryEl,
            start: settings.scrollTrigger.start,
            end: settings.scrollTrigger.end,
            pin: galleryEl.parentNode,
            scrub: true,
        },
        stagger: settings.stagger,
    });

    // If inner elements exist, animate them too
    const galleryItemsInner = [...galleryItemsArray].map(item => item.children.length > 0 ? [...item.children] : []).flat();
    if (galleryItemsInner.length) {
        tl.fromTo(galleryItemsInner, {
            scale: 1,
        }, {
            scale: 2,
            scrollTrigger: {
                trigger: galleryEl,
                start: settings.scrollTrigger.start,
                end: settings.scrollTrigger.end,
                scrub: true,
            },
        }, 0);
    }

    console.log("Gallery Items Array: ", galleryItemsArray);
    console.log("Gallery Caption: ", galleryCaption);
};

// Scroll-triggered animations setup
const scroll = () => {
    const galleries = [
        { id: '#gallery-1', options: { flip: { absoluteOnLeave: true, scale: false } } },
        { id: '#gallery-2' },
        { id: '#gallery-3', options: { flip: { absolute: true, scale: false }, scrollTrigger: { start: 'center center', end: '+=900%' }, stagger: 0.05 } },
        { id: '#gallery-4' },
        { id: '#gallery-5' },
        { id: '#gallery-6' },
        { id: '#gallery-7' },
        { id: '#gallery-8', options: { flip: { scale: false } } },
        { id: '#gallery-9' },
    ];

    galleries.forEach(gallery => {
        const galleryElement = document.querySelector(gallery.id);
        if (galleryElement) {
            triggerFlipOnScroll(galleryElement, gallery.options);
        }
    });
};
// Preload images
onMounted(() => {
    preloadImages('.gallery__item').then(() => {
        // Initialize scroll-triggered animations after images are loaded
        scroll();
        document.body.classList.remove('loading');
    });
});



</script>












<!-- <style scoped>
.gallery--grid10 .caption {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    margin: 100vh 0 0 -50vw;
    display: grid;
    place-items: center;
    font-size: clamp(2rem, 8vw, 6rem);
}

.caption {
    font-size: clamp(1rem, 3vw, 1.75rem);
    z-index: 101;
    color: #000;
    font-weight: 400;
}

.gallery-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40vh auto;
    overflow: hidden;
}

.gallery {
    position: relative;
    width: 100%;
    height: 100%;
    flex: none;
}


.gallery--grid10 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2vw;
}

.gallery__item {
    background-position: 50% 50%;
    background-size: cover;
    flex: none;
    border-radius: 6px;
    position: relative;
    filter: brightness(1);
}




@media screen and (min-width: 53em) {
    .gallery--grid10 {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

    .gallery--grid10:not(.gallery--switch) .pos-1 {
        grid-area: 1 / 1;
    }

    .gallery--grid10:not(.gallery--switch) .pos-2 {
        grid-area: 1 / 2;
    }

    .gallery--grid10:not(.gallery--switch) .pos-3 {
        grid-area: 1 / 4;
    }

    .gallery--grid10:not(.gallery--switch) .pos-4 {
        grid-area: 1 / 5;
    }

    .gallery--grid10:not(.gallery--switch) .pos-5 {
        grid-area: 3 / 6;
    }

    .gallery--grid10:not(.gallery--switch) .pos-6 {
        grid-area: 1 / 7;
    }

    .gallery--grid10:not(.gallery--switch) .pos-7 {
        grid-area: 1 / 9;
    }

    .gallery--grid10:not(.gallery--switch) .pos-8 {
        grid-area: 3 / 10;
    }

    .gallery--grid10:not(.gallery--switch) .pos-9 {
        grid-area: 2 / 8;
    }

    .gallery--grid10:not(.gallery--switch) .pos-10 {
        grid-area: 4 / 9;
    }

    .gallery--grid10:not(.gallery--switch) .pos-11 {
        grid-area: 3 / 8;
    }

    .gallery--grid10:not(.gallery--switch) .pos-12 {
        grid-area: 2 / 2;
    }

    .gallery--grid10:not(.gallery--switch) .pos-13 {
        grid-area: 3 / 1;
    }

    .gallery--grid10:not(.gallery--switch) .pos-14 {
        grid-area: 3 / 4;
    }

    .gallery--grid10:not(.gallery--switch) .pos-15 {
        grid-area: 4 / 3;
    }

    .gallery--grid10:not(.gallery--switch) .pos-16 {
        grid-area: 4 / 7;
    }
}
</style> -->