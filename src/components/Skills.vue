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
        <div class="absolute inset-0 overflow-hidden flex flex-col items-center justify-center px-36 py-24 md:px-96 md:py-48"
            style="pointer-events: all;">
            <div class="absolute inset-0 flex flex-col justify-center">
                <div class="flex w-full flex-col space-y-8" style="opacity: 1; pointer-events: all; transform: none;">
                    <div class="flex flex-nowrap whitespace-nowrap">
                        <div class="flex flex-nowrap">
                            <div class="flex space-x-8 justify-start items-center"><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://mui.com">MUI</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://nuxtjs.org/">NuxtJS</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.typescriptlang.org/">TypeScript</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.framer.com/motion/">Framer Motion</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.contentful.com/">Contentful</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://ui.shadcn.com">Shadcn
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://mui.com">MUI</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://nuxtjs.org/">NuxtJS</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.typescriptlang.org/">TypeScript</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.framer.com/motion/">Framer Motion</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.contentful.com/">Contentful</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://ui.shadcn.com">Shadcn
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://mui.com">MUI</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://nuxtjs.org/">NuxtJS</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.typescriptlang.org/">TypeScript</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.framer.com/motion/">Framer Motion</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.contentful.com/">Contentful</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://ui.shadcn.com">Shadcn
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://mui.com">MUI</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://nuxtjs.org/">NuxtJS</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.typescriptlang.org/">TypeScript</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.framer.com/motion/">Framer Motion</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.contentful.com/">Contentful</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://ui.shadcn.com">Shadcn
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span></div>
                        </div>
                    </div>
                    <div class="flex flex-nowrap whitespace-nowrap">
                        <div class="flex flex-nowrap" style="transform: translateX(-43.685%) translateZ(0px);">
                            <div class="flex space-x-8 justify-start items-center"><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.wordpress.com/docs/api">WordPress API</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com">Radix
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.prisma.io/">Prisma</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://threejs.org/">Three.js</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://es.reactjs.org/">React</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.wordpress.com/docs/api">WordPress API</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com">Radix
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.prisma.io/">Prisma</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://threejs.org/">Three.js</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://es.reactjs.org/">React</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.wordpress.com/docs/api">WordPress API</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com">Radix
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.prisma.io/">Prisma</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://threejs.org/">Three.js</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://es.reactjs.org/">React</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.wordpress.com/docs/api">WordPress API</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://www.radix-ui.com">Radix
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://www.prisma.io/">Prisma</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://threejs.org/">Three.js</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://es.reactjs.org/">React</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span></div>
                        </div>
                    </div>
                    <div class="flex flex-nowrap whitespace-nowrap">
                        <div class="flex flex-nowrap" style="transform: translateX(-35.5933%) translateZ(0px);">
                            <div class="flex space-x-8 justify-start items-center"><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://tanstack.com/query">TanStack
                                        Query</a><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://clerk.com">Clerk</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://tailwindcss.com/">Tailwind
                                        CSS</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://nextjs.org/">Next.js</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://chakra-ui.com">Chackra
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://sass-lang.com/">SASS</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://tanstack.com/query">TanStack
                                        Query</a><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://clerk.com">Clerk</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://tailwindcss.com/">Tailwind
                                        CSS</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://nextjs.org/">Next.js</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://chakra-ui.com">Chackra
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://sass-lang.com/">SASS</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://tanstack.com/query">TanStack
                                        Query</a><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://clerk.com">Clerk</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://tailwindcss.com/">Tailwind
                                        CSS</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://nextjs.org/">Next.js</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://chakra-ui.com">Chackra
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://sass-lang.com/">SASS</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://tanstack.com/query">TanStack
                                        Query</a><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://clerk.com">Clerk</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://tailwindcss.com/">Tailwind
                                        CSS</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://nextjs.org/">Next.js</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Vue</a><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer" href="https://chakra-ui.com">Chackra
                                        UI</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span><span
                                    class="group relative font-bold leading-medium text-clamp clamp-max-96 clamp-min-48"><a
                                        target="_blank" rel="noopener noreferrer"
                                        href="https://sass-lang.com/">SASS</a><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 411 251"
                                        class="pointer-events-none absolute inset-0 h-full w-full scale-y-[1.75] transition-all duration-500 [stroke-dasharray:1250_1250] [stroke-dashoffset:1250] group-hover:[stroke-dashoffset:0]"
                                        preserveAspectRatio="none">
                                        <path class="stroke-highlight" stroke-linecap="round" stroke-width="8"
                                            d="M378.188 74.6234c-7.248-21.2047-21.327-34.25-40.049-42.8633-42.118-19.3769-93.974-19.5054-138.3-13.3766-59.055 8.165-120.3546 29.1272-166.5965 72.9754C4.67579 118.447-9.21666 163.751 20.8852 196.211c34.328 37.017 87.9468 49.597 133.7618 50.662 57.655 1.339 119.425-7.802 173.506-31.195 33.894-14.66 78.008-42.335 78.532-89.425.475-42.6423-31.289-77.0084-62.493-95.1192C296.026 3.17712 240.704-1.06918 187.986 8.8772">
                                        </path>
                                    </svg></span><span
                                    class="font-bold text-medium text-clamp clamp-max-96 clamp-min-48">-</span></div>
                        </div>
                    </div>
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
