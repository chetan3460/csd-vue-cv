<template>
  <div class="page-wrapper">
    <Navbar />
    <Home />
    <About />
    <Resume />
    <Skills />
    <Freelance />
    <Footer />

  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/vendor/bootstrap/css/bootstrap.css'
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '@/assets/vendor/font-awesome/css/fontawesome-5.14.0.min.css'
import '@/assets/vendor/font-awesome/css/flaticon.min.css'

import '@/assets/css/style.css'

import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from '@/components/About.vue';
import Resume from '@/components/Resume.vue'
import Skills from '@/components/Skills.vue'
import Freelance from '@/components/Freelance.vue'
import Footer from '@/components/Footer.vue'
</script>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
