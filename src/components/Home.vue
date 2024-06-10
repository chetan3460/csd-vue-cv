<template>



    <section id="home" class="custom-perspective bg-secondary border-0 p-0 m-0 text-center p-relative" >
        <div class="container-fluid">
            <div class="row min-vh-100 align-items-center">
                <div class="col">
                    <div class="row py-3 py-lg-0 custom-border-bottom-1">
                        <div class="col">
                            <div>
                                <strong class="custom-hero-font-1 text-dark hero-2__subtitle">FRONTEND
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div class="row py-3 custom-border-bottom-1">
                        <div class="col">
                            <div>
                                <div class="d-lg-flex justify-content-center align-items-center">
                                    <strong
                                        class="custom-hero-font-1 text-dark custom-stroke-text-effect-1 hero-2__title">Creative</strong>
                                    <p class="custom-hero-text-1 text-start text-center text-lg-start d-block pb-2 pb-lg-0">
                                        Hello, I am <strong class="text-dark">John Doe</strong> an Art Director and Digital
                                        Designer currently available to work as freelancer or full-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-3 py-lg-0">
                        <div class="col">
                            <div >
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/hero/star.svg"
                                        class="img-fluid rounded-circle custom-hero-img-1 main-img">
                                    <strong class="custom-hero-font-1 text-dark secondary-img">Developer</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a href="#about" data-hash
            class="btn btn-link-effect-1 text-3 mt-3 btn-link-underline-1 px-0 py-0 bg-transparent bg-color-before-dark border-0 text-color-dark font-weight-semi-bold text-decoration-none p-absolute bottom-30 transform3dx-n50 left-50pct">Find
            Out More <img width="25" height="25" class="rotate-r-90" src="../assets/images/hero/arrow-dark.svg"
                alt="" /></a>

    </section>
</template>

<script setup>
import { heroText } from '../js/utilits'
import { paraAnimation } from '../js/utilits'

heroText();
paraAnimation();
</script>


