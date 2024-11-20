<template>
  <div>
    <Banner></Banner>
    <!-- <div class="hero__gradient"></div> -->
    <About />
    <Skills />
    <Journey />
    <!-- <Quote /> -->

    <!-- 
    <Resume />
    <Skilljs />
    <Cta />  -->
  </div>
</template>
<script setup>
import Home from '@/components/Home.vue';
import Banner from '@/components/banner.vue';
import About from '@/components/About.vue';
import Journey from '@/components/journey.vue';

import Quote from '@/components/quote.vue';
import Resume from '@/components/Resume.vue'
import Skills from '@/components/Skills.vue'
import Cta from '@/components/Cta.vue'

import { scrollSmooth } from '@/js/utilits'
scrollSmooth()
</script>
<style>
.section.track__record {
  z-index: 2;
  padding: 1em;
  overflow: visible;
  position: relative;
}

.container-small {
  width: 100%;
  height: 100%;
  max-width: 100em;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10em;
  padding-right: 10em;
  position: relative;
}

.averliius__quote.is-edited {
  width: auto;
  justify-content: flex-end;
  position: absolute;
  top: auto;
  bottom: 1em;
  left: auto;
  right: 10em;
  border-radius: 24px 24px 0 0;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  padding: 1.2em 2em;
  display: flex;
}

.z-index-5 {
  z-index: 5;
  position: relative;
}

.opacity-08 {
  opacity: .8;
  color: #fff;
}

.marcus-image {
  width: 129%;
  max-width: none;
  position: absolute;
  top: auto;
  bottom: -1.7px;
  left: auto;
  right: auto;
}

.page-spacing__large {
  background-color: #dcefd8;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10em;
  padding-bottom: 10em;
  display: flex;
  border-radius: 24px;
}

.cut-edge-div.top-left.is-about-quote {
  width: 10em;
  height: 10em;
  top: 1em;
  bottom: auto;
  left: 1em;
  right: auto;
}

.cut-edge-div.top-left {
  top: 0%;
  bottom: auto;
  left: auto;
  right: 1em;
}

.cut-edge-div {
  width: 5em;
  height: 5em;
  position: absolute;
}


.cut-edge.top-right.is-about-faq {
  width: 100%;
  height: 100%;
  transform-origin: 0 0;
  top: -.14em;
  bottom: auto;
  left: -.14em;
  right: auto;
  mix-blend-mode: normal;
  position: absolute;
  perspective-origin: 100% 0;
  perspective-origin: 100% 0;
  z-index: 4;
}

.cut-image-div.is-about-faq {
  width: 7em;
  height: 7em;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  z-index: 5;
}
</style>
