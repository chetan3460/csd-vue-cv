<template>

    <section class="about--block pl-dynamic pr-dynamic w-100 font-bold  md:w-[83.33vw] sm:w-[100%]">
        <div class="p medium-heading caps font-bold prose-p:uppercase ">
            <p class=" font-Phudu font-bold ">I'm Chetan, an experienced frontend developer with a
                passion
                for crafting engaging user experiences. with over <a href="" class="block underline !text-[#9a92d9]">5
                    years
                    experience.</a>
            </p>
        </div>



    </section>

</template>
<script setup>

import { onMounted, ref } from "vue";
import handSvg from "../assets/images/hand.webp";
import imageSrc from '../assets/images/me.webp';

import { revealLetter } from "../js/utilits";

onMounted(() => {
    revealLetter();

})






</script>


<style>
.highlight {
    --underline-color: #f67796;
    --underline-width: 0% 0.4em;
    --underline-color: var(--color-medium);
    background: linear-gradient(90deg, var(--underline-color), var(--underline-color));
    background-position: var(--underline-position, 0 65%);
    background-repeat: no-repeat;
    background-size: var(--underline-width);
    transition: background-size .3s ease-in-out;
}
</style>