<template>
  <!-- TOTOP -->
  <div class="progressbar">
    <a href="#"><span class="text" style="bottom: 152.688px">To Top</span></a>
    <span class="line"></span>
  </div>
  <!-- /TOTOP -->
</template>

<script setup>
import { onMounted } from "vue"
import { scrollTop } from "@/js/utilits"

onMounted(() => {
  window.addEventListener("scroll", scrollTop);
})


</script>
