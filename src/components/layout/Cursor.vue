<template>
    <!-- CURSOR -->
    <div class="mouse-cursor cursor-outer"></div>
    <div class="mouse-cursor cursor-inner"></div>
    <!-- /CURSOR -->
</template>

<script setup>
import { onMounted } from 'vue'
import { customCursor } from "@/js/utilits"

onMounted(()=>{
    customCursor();
})



</script>