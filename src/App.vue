<template>
  <div class="page-wrapper" ref="containerRef">
    <ScrollTopVue />

    <Cursor />
    <Navbar />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <router-view />

      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Cursor from './components/layout/Cursor.vue'
import ScrollTopVue from "@/components/layout/ScrollTop.vue";

import { scroll_ } from './js/utilits'

import { scrollSmooth } from './js/utilits'


// test
import { bgColor } from './js/utilits'



onMounted(() => {
  window.addEventListener('scroll', scroll_)
  //Clear URL On Page Refresh
  const loc = window.location.href,
    index = loc.indexOf('#');

  if (index > 0) {
    window.location = loc.substring(0, index);
  }
  bgColor();

})
scrollSmooth();


</script>


