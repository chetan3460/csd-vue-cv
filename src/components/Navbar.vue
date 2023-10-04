<template>
    <!-- main header -->
    <header ref="navbar" class="main-header menu-absolute">
        <!--Header-Upper-->
        <div class="header-upper">
            <div class="container container-1620 clearfix">

                <div class="header-inner rel d-flex align-items-center">
                    <div class="logo-outer">
                        <!-- <div class="logo">
                            <a href="index.html"><img src="../assets/images/logos/logo.png" alt="Logo"
                                    title="Logo">
                                
                                </a>
                            </div> -->
                        <a href="home-1.html" class="mil-logo"><span class="mil-dot">C</span></a>

                    </div>

                    <div class="nav-outer clearfix mx-auto">
                        <!-- Main Menu -->
                        <nav class="main-menu navbar-expand-lg">
                            <div class="navbar-header">
                                <div class="mobile-logo my-15">
                                    <a href="index.html">
                                        <a href="home-1.html" class="mil-logo"><span class="mil-dot">C</span></a>
                                    </a>
                                </div>

           
                                <!-- Toggle Button -->
                                <button type="button" class="navbar-toggle me-4" data-bs-toggle="collapse"
                                    data-bs-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div class="navbar-collapse collapse clearfix">
                                <ul class="navigation onepage clearfix">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">about</a></li>
                                    <li><a href="#resume">Resume</a></li>
                                    <li><a href="#services">services</a></li>
                                    <li><a href="#skills">skills</a></li>
                                    <li><a href="#portfolio">projects</a></li>
                                    <li><a href="#blog">blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>

                        </nav>
                        <!-- Main Menu End-->
                    </div>
                    <div class="message__now d-none d-sm-inline-flex">
                            <div class="meta-item meta-item-message">
                                <div class="meta-item__icon">
                                    <img src="../assets/images/illustration/hand.png" alt="image not found">
                                </div>
                                <div class="meta-item__text">
                                    <p class="mb-0"><a href="#">Say Hello</a></p>
                                </div>
                            </div>
                        </div>
                    <!-- Menu Button -->
                    <div class="menu-btns">
                       

                        <!-- menu sidbar -->
                        <div class="menu-sidebar">
                            <button>
                                <img src="../assets/images/shape/sidebar-tottler.svg" alt="Toggler">
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!--End Header Upper-->
    </header>
</template>


<script setup>
import { onMounted, ref } from "vue";

const navbar = ref('')
// const showMenu = ref(false)

onMounted(() => {
    window.onscroll = () => {
        if (window.scrollY > 100) {
            navbar.value.classList.add('fixed-header')
        } else {
            navbar.value.classList.remove('fixed-header')
        }
    }

})

// const headerStyle = () => {
//     let siteHeader = document.getElementById("")
// }


// ## Header Style and Scroll to Top
// function headerStyle() {
//     if ($('.main-header').length) {
//         var windowpos = $(window).scrollTop();
//         var siteHeader = $('.main-header');
//         var scrollLink = $('.scroll-top');
//         if (windowpos >= 250) {
//             siteHeader.addClass('fixed-header');
//             scrollLink.fadeIn(300);
//         } else {
//             siteHeader.removeClass('fixed-header');
//             scrollLink.fadeOut(300);
//         }
//     }
// }
// headerStyle();

</script>