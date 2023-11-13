
<template>
  <div data-scroll-container>
    <Home />
    <About />
    <Resume />
    <Skills />
    <Cta />
  </div>
</template>
<script setup>
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Resume from '@/components/Resume.vue'
import Skills from '@/components/Skills.vue'
import Cta from '@/components/Cta.vue'

import { scrollSmooth } from '@/js/utilits'
scrollSmooth()
</script>
