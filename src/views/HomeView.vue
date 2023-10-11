
<template>
  <div class="dizme_tm_all_wrap" data-magic-cursor="show">
    <Navbar />
    <Home />
    <About />
    <Resume />
    <Skills />
    <Cta />
    <Contact />
    <Footer />
    <ScrollTopVue />
  </div>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Resume from '@/components/Resume.vue'
import Skills from '@/components/Skills.vue'
import Cta from '@/components/Cta.vue'
import Footer from '@/components/Footer.vue'
import Contact from '@/components/Contact.vue'
import ScrollTopVue from "@/components/layout/ScrollTop.vue";
</script>
