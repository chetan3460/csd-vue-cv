<template>

   <!-- hero area start -->
   <div class="tp-hero-area  relative flex items-center justify-center  tp-hero-ptb lg:pt-52 pt-10  lg:mb-60 mb-36  "
      ref="view">

      <div class="container-fluid">
         <div class="justify-center">
            <!-- <div class="looping-wrapper md-h-100"></div> -->

            <div class="tp-hero-title-wrap flex justify-center flex-col mb-9 relative ">
               <div class="tp-hero-title-box text-center c-hm-hero_head" ref="homeHeroHead">

                  <h1 class="tp-hero-title">
                     <span class="relative flex justify-center">
                        <span class="tp-hero-subtitle md:block hidden pt-5 homeHeroText" ref="homeHeroText">Hello <br>
                           People! I' am </span>
                        <span class="mx-4 relative">Creative
                           <span class="tp-hero-shape-2 animate-rotate2  md:block hidden ">
                              <img :src="shapeUrl" alt="" class="filter invert ">
                           </span>
                        </span>


                     </span>
                     <span class="flex items-center lg:flex-row flex-col lg:mt-3 justify-center">Frontend<span
                           class="2xl:mx-10 mx-5 lg:mt-0 mb-3">
                           <img class="tp-zoom-img " :src="imgUrl" alt="">
                           
                        </span>Developer
                     </span>
                  </h1>
               </div>

            </div>



            <a href="#" class="c-hm-hero_media block relative overflow-hidden" ref="homePlayer">

               <div
                  class="o-media hm-reel bg-gray-400 relative overflow-hidden z-10 rounded-[1.25rem] lg:pt-[48%] pt-[140%]"
                  ref="homePlayerReel">
                  <div
                     class="o-media_obj  absolute left-0 top-0 right-0 bottom-0 w-full h-full max-w-none object-cover text-white overflow-hidden"
                     data-poster-url="https://assets.website-files.com/60e4912ee7c15fb303f4c588/642d8b3622805212f26eee1d_Video_Leaderboard-Compressed copy-poster-00001.jpg"
                     data-video-urls="https://assets.website-files.com/60e4912ee7c15fb303f4c588/642d8b3622805212f26eee1d_Video_Leaderboard-Compressed copy-transcode.mp4,https://assets.website-files.com/60e4912ee7c15fb303f4c588/642d8b3622805212f26eee1d_Video_Leaderboard-Compressed copy-transcode.webm"
                     data-autoplay="true" data-loop="true" data-wf-ignore="true" data-beta-bgvideo-upgrade="false">

                     <video id="b3d75471-6d14-6d45-5306-980f3beba49c-video"
                        class="bg-[50%_50%] z-[-100] -inset-full bg-cover absolute m-auto w-full h-full object-cover"
                        autoplay="" loop=""
                        style="background-image:url(&quot;https://assets.website-files.com/60e4912ee7c15fb303f4c588/642d8b3622805212f26eee1d_Video_Leaderboard-Compressed copy-poster-00001.jpg&quot;)"
                        muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                        <source
                           src="https://assets.website-files.com/60e4912ee7c15fb303f4c588/642d8b3622805212f26eee1d_Video_Leaderboard-Compressed copy-transcode.mp4"
                           data-wf-ignore="true" />
                        <source
                           src="https://assets.website-files.com/60e4912ee7c15fb303f4c588/642d8b3622805212f26eee1d_Video_Leaderboard-Compressed copy-transcode.webm"
                           data-wf-ignore="true" />
                     </video>
                  </div>
               </div>
            </a>
            <div class="tp-hero-content tp_fade_bottom">
               <p class="text-white text-opacity-70">
                  <span></span>
                  Global digital design studio partnering with brands and businesses that create
                  exceptional experiences. We are design and development agency based in Netherland.
               </p>
            </div>
         </div>

      </div>
   </div>
   <!-- hero area end -->
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { titleAnimation, titleAnim, useBannerAnimation } from '../js/utilits';
import imgUrl from '../assets/images/hero-1-1.png';
import shapeUrl from '../assets/images/hero-shape-1-1.png';

// Initialize refs to be passed to BannerAnimation




titleAnimation();
titleAnim();

const { view, homeHeroText, homeHeroHead, homePlayer, homePlayerReel } = useBannerAnimation();

onMounted(() => {
   console.log('Banner animation initialized');
});








</script>
