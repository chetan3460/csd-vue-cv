<template>
    <section class="journey--block px-5 pt-16">
        <div class="text-center max-w-[40rem] mx-auto relative">
            <h2 class="text-8xl uppercase font-Phudu font-bold mb-14 text-shadow text-[#0f1b61]" data-scroll-var>
                journey
            </h2>
            <p>"Over the past 5 years, I’ve worked with amazing teams on diverse projects, from startups to established
                brands. Each experience has enhanced my creative development skills and provided valuable insights,
                helping me deliver innovative solutions with a fresh perspective."

            </p>
        </div>
        <div class="gallery-wrap gallery-wrap--dense">
            <div class="gallery gallery--stack gallery--stack-inverse gallery--stack-dark prose-h4:text-2xl  prose-p:text-sm text-[#150050] prose-p:"
                id="gallery-4">
                <div
                    class="gallery__item flex-col gap-4 prose-h4:font-Phudu prose-h4:font-bold prose-h4:text-[#150050]">
                    <h4>Web Developer</h4>
                    <p>Screenroot</p>
                    <img src="https://screenroot.com/wp-content/uploads/2024/04/logo.svg" alt="">
                    <span class="text-sm  inline-block ">Present</span>
                </div>
                <div
                    class="gallery__item flex-col gap-4 prose-h4:font-Phudu prose-h4:font-bold prose-h4:text-[#150050] ">
                    <h4>Frontent Developer</h4>
                    <img src="https://www.tentwenty.me/application/themes/tentwenty/images/site-logo.svg" alt="">
                    <p>Tentewenty</p>
                    <span class="text-sm  inline-block ">2023-24</span>
                </div>
                <div
                    class="gallery__item flex-col gap-4 prose-h4:font-Phudu prose-h4:font-bold prose-h4:text-[#150050] ">
                    <h4>Web Developer</h4>
                    <img src="https://prototyze.com/wp-content/uploads/2022/07/Prototyze-logo-1.svg" alt="">
                    <p>Screenroot</p>
                    <span class="text-sm  inline-block ">2022-23</span>
                </div>
                <div
                    class="gallery__item flex-col gap-4 prose-h4:font-Phudu prose-h4:font-bold prose-h4:text-[#150050] ">
                    <h4>Web Developer</h4>
                    <p>Screenroot</p>
                    <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M38.1399 14.565L32.4154 20.2775C32.0804 20.6116 31.891 21.2596 31.9464 21.7303C32.2493 24.3164 31.4045 27.0099 29.4148 28.9916C27.425 30.9761 24.7274 31.8159 22.1346 31.5166C21.6627 31.4614 21.5578 31.104 21.8958 30.7698L25.9393 26.7368C26.2743 26.4026 26.5482 25.7459 26.5482 25.2723V20.2368C26.5482 19.7632 26.1636 19.3796 25.6888 19.3796H20.6431C20.1682 19.3796 19.5098 19.6499 19.1748 19.9869L15.1313 24.02C14.7962 24.3541 14.4379 24.2495 14.3826 23.7817C14.0796 21.1957 14.9244 18.5021 16.9142 16.5205C18.9039 14.5359 21.6015 13.6962 24.1943 13.9954C24.6662 14.0507 25.3159 13.8647 25.6509 13.5276L30.3703 8.82048C30.8335 8.35848 30.8714 7.57396 30.4024 7.12067C28.401 5.18841 25.6713 4 22.6648 4C16.518 4 11.5363 8.96868 11.5363 15.0996C11.5363 15.582 11.5684 16.0556 11.6267 16.5234C11.7111 17.1713 11.3266 17.5346 10.6828 17.4416C10.2487 17.3806 9.80298 17.3457 9.35143 17.3457C4.1863 17.3457 0 21.5211 0 26.6728C0 31.8246 4.1863 36 9.35143 36H33.4933H33.502H33.7963C36.724 35.9215 39.6314 34.7709 41.8659 32.5423C46.4892 27.931 46.4892 20.4576 41.8659 15.8464C41.2861 15.2681 40.6598 14.7625 40.0014 14.3296C39.4508 13.9693 38.6031 14.103 38.1399 14.565Z"
                            fill="#F15F27"></path>
                    </svg>
                    <span class="text-sm  inline-block ">2019-22</span>
                </div>

                <div class="caption  prose-p:text-left ">
                    <div
                        class="bg-white inline-block w-[200px] h-[200px] rounded-full flex items-center justify-center">
                        <p class="!text-[20px] !leading-[30px] font-bold">Download Cv</p>
                    </div>

                </div>
            </div>
        </div>



    </section>
</template>


<script setup>
import { onMounted } from 'vue';
import { stickyCards, fontAnim } from '../js/utilits';
onMounted(() => {
    // stickyCards();
    fontAnim();
});

</script>