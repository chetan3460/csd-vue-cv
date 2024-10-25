<template>
  <div>
    <!-- <Home /> -->
    <Banner></Banner>
    <div class="z-[1] bg-[var(--light-gray)] perspective-[1000px] w-full relative">
      <div class="hero__gradient"></div>
      <Quote />
      <!-- <About /> -->
    </div>

    <!-- 
    <Resume />
    <Skills />
    <Cta />  -->
  </div>
</template>
<script setup>
import Home from '@/components/Home.vue';
import Banner from '@/components/banner.vue';
import Quote from '@/components/quote.vue';
import About from '@/components/About.vue';
import Resume from '@/components/Resume.vue'
import Skills from '@/components/Skills.vue'
import Cta from '@/components/Cta.vue'

import { scrollSmooth } from '@/js/utilits'
scrollSmooth()
</script>
