<template>
    <section class="journey--block pl-dynamic pr-dynamic py-24">
        <div class="text-center max-w-[40rem] mx-auto relative ">
            <h2 class="md:text-8xl text-7xl  uppercase font-Phudu font-bold" data-scroll-var>
                journey
            </h2>
            <p class="py-14">"Over the past 5 years, I’ve worked with amazing teams on diverse projects, from startups
                to established
                brands. Each experience has enhanced my creative development skills and provided valuable insights,
                helping me deliver innovative solutions with a fresh perspective."

            </p>
        </div>
        <div class="card-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
                class="card bg-[#0a0521] flex justify-center text-center rounded-2xl flex-col w-full h-full p-5 gap-5 ">
                <h3 class="text-2xl font-Phudu font-bold ">Web Developer</h3>
                <!-- <img class="h-10 " :src=screenrootLogo alt=""> -->
                <p>ScreenRoot</p>
                <span class="text-sm">Present</span>
            </div>
            <div
                class="card bg-[#0a0521] flex justify-center text-center rounded-2xl flex-col w-full h-full p-5 gap-5 ">
                <h3 class="text-2xl font-Phudu font-bold ">Frontend Developer</h3>
                <!-- <img class="h-10 " :src=tentwentyLogo alt=""> -->
                <p>Tentwenty</p>
                <span class="text-sm">2023-24</span>
            </div>
            <div
                class="card bg-[#0a0521] flex justify-center text-center rounded-2xl flex-col w-full h-full p-5 gap-5 ">
                <h3 class="text-2xl font-Phudu font-bold ">Frontend Developer</h3>
                <!-- <img class="h-10 " :src=PrototyzeLogo alt=""> -->
                <p>Prototyze</p>
                <span class="text-sm">2022-23</span>
            </div>
            <div
                class="card bg-[#0a0521] flex justify-center text-center rounded-2xl flex-col w-full h-full p-5 gap-5 ">
                <h3 class="text-2xl font-Phudu font-bold ">Web Developer</h3>
                <!-- <img class="h-10 " :src=webwareLogo alt=""> -->
                <p>Webware.ai</p>
                <span class="text-sm">2019-22</span>
            </div>

        </div>



    </section>

</template>


<script setup>
import { onMounted } from 'vue';
import { stickyCards, MovingGallery } from '../js/utilits';
import tentwentyLogo from "/src/assets/svg/1020.svg";
import PrototyzeLogo from "/src/assets/svg/prototyze.svg";
import screenrootLogo from "/src/assets/svg/screenroot.svg";
import webwareLogo from "/src/assets/svg/webware.svg";

onMounted(() => {
    // stickyCards();
    // fontAnim();

});

</script>

<style scoped>
.card-wrap {
    width: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    justify-items: center;
    justify-content: center;

    .card {
        background: #362669;
        border: 1px solid rgba(154, 146, 217, .2);
        border-radius: 1.6rem;
        box-shadow: 0 0 20px 4px rgba(0, 0, 0, .05);

        /* img {
            background-color: #e6e6e1;
            display: inline-block;
        } */
    }
}
</style>