<template>
  <div>
    <div class="page-wrapper">
      <Cursor />
      <Navbar />

      <div id="scrollsmoother-container">
        <div id="smooth-content">
          <router-view />
          <!-- <div class="bg_dots"></div> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Cursor from './components/layout/Cursor.vue'
import { scroll_ } from './js/utilits'
import { test } from './js/utilits'
// import { smoothScroll } from './js/utilits';


onMounted(() => {
  window.addEventListener('scroll', scroll_)
  //Clear URL On Page Refresh
  const loc = window.location.href,
    index = loc.indexOf('#');

  if (index > 0) {
    window.location = loc.substring(0, index);
  }
  test()

})



// smoothScroll()


</script>


