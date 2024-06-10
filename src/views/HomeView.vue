<template>
  <div data-scroll-container>
    <!-- <Home /> -->
    <Banner></Banner>
    <Quote />
    <About />
    <Resume />
    <Skills />
    <Cta />
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
