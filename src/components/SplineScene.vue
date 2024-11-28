<template>
    <div class="_zone_1w0kt_13">

    </div>
    <canvas ref="canvas" class="spline-canvas"></canvas>
</template>

<script>
import { Application } from "@splinetool/runtime";

export default {
    name: "SplineScene",
    mounted() {
        const canvas = this.$refs.canvas; // Reference the canvas element
        const splineApp = new Application(canvas); // Initialize Spline Application

        // Load the Spline scene (replace with your exported URL)
        splineApp
            .load("https://prod.spline.design/QwzuXBZQFrKfrnRl/scene.splinecode")
            .catch((err) => console.error("Error loading Spline scene:", err));
    },
};
</script>


<style>
._zone_1w0kt_13 {

    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.spline-canvas {
    width: 100%;
    height: 100vh;
    /* display: block; */
    margin: auto;
    position: fixed;
    top: 0;
}
</style>