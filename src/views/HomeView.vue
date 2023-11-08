
<template>
  <div>
    <Home />
    <About />
    <Resume />
    <Skills />
    <Cta />
    <!-- <Contact /> -->
    <Footer />
    <ScrollTopVue />
  </div>
</template>
<script setup>
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Resume from '@/components/Resume.vue'
import Skills from '@/components/Skills.vue'
import Cta from '@/components/Cta.vue'
import Footer from '@/components/Footer.vue'
import ScrollTopVue from "@/components/layout/ScrollTop.vue";
</script>
