<script setup>
import Navbar from '@/components/Navbar.vue';
import Home from '@/components/Home.vue';

import About from '@/components/About.vue';
import Resume from '@/components/Resume.vue'
import Skills from '@/components/Skills.vue'
import Freelance from '@/components/Freelance.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="dizme_tm_all_wrap" data-magic-cursor="show">
    <Navbar />
    <Home />
    <About />
    <Resume />
    <Skills />
    <Freelance />
    <Footer />
  </div>
</template>
