
<template>
    <!-- START HEADER -->
    <header ref="navbar" class="main-header menu-absolute">
        <div class="header-upper">
            <!--Navigation-->
            <nav class="navbar navbar-top-default navbar-expand-lg navbar-standard">
                <div class="container-fluid">
                    <a href="#page1" title="Logo" class="link logo scroll">
                        <!--Logo Default-->
                        <img src="../assets/images/logos/logo.png" class="logo-dark" alt="logo">
                    </a>

                    <!--Side Menu Button-->
                    <div class="side-nav-btn animated-wrap" id="sidemenu_toggle" @click="toggleSideMenu"
                        :class="{ active: isSideMenuActive }">
                        <div class="animated-element hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- side menu -->
            <div class="side-menu" :class="{ 'side-menu-active': isSideMenuActive }">
                <div class="inner-wrapper">
                    <span class="btn-close link" id="btn_sideNavClose" @click="closeSideMenu"><i></i><i></i></span>
                    <nav class="side-nav">
                        <ul class="navbar-nav" id="side-menu">
                            <li class="nav-item active">
                                <a class="nav-link link" href="#home" @click="closeSideMenu">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#about" @click="closeSideMenu">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#resume" @click="closeSideMenu">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#skills" @click="closeSideMenu">Skills</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link link" href="#page5">Portfolio</a>
                            </li> -->
                            <li class="nav-item">
                                <a class="nav-link link" href="#contact" @click="closeSideMenu">Contact</a>
                            </li>
                        </ul>
                    </nav>


                </div>
            </div>
            <!-- End side menu -->
        </div>




    </header>
    <!-- END HEADER -->
</template>


<script setup>
import { onMounted, ref } from "vue";

const navbar = ref('')
const isSideMenuActive = ref(false);

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


const toggleSideMenu = () => {
    isSideMenuActive.value = !isSideMenuActive.value;
    if (isSideMenuActive.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

const closeSideMenu = () => {
    isSideMenuActive.value = false;
    // Disable scroll lock when the menu is closed
    document.body.style.overflow = "auto";

};





</script>

<style>
/* ===================================
    Header
====================================== */
</style>