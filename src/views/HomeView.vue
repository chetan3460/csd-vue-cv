<template>

  <div>
    <Banner></Banner>
    <About />
    <Skills />
    <Journey />
  </div>
</template>
<script setup>
import Banner from '@/components/banner.vue';
import About from '@/components/About.vue';
import Journey from '@/components/Journey.vue';
import Skills from '@/components/Skills.vue'

import { scrollSmooth } from '@/js/utilits'
scrollSmooth()
</script>
