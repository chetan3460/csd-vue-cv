
<template>
    <!-- START HEADER -->
    <header ref="navbar" class="main-header menu-absolute">
        <div class="header-upper container-fluid">
            <div class="row">

                <div class="col-lg-12">
                    <nav class="navbar navbar-top-default navbar-expand-lg navbar-standard">
                        <!--Logo Default-->
                        <a href="#page1" title="Logo" class="link logo scroll">
                            <img src="../assets/images/logos/c.svg" class="logo-dark" alt="logo">
                        </a>
                        <!-- side menu -->
                        <div class="collapse navbar-collapse  flex-col items-stretch justify-content-end "
                            id="main-header-collapse" role="navigation">
                            <div class="side-menu" :class="{ 'side-menu-active': isSideMenuActive }">
                                <div class="inner-wrapper">
                                    <!-- <span class="btn-close link" id="btn_sideNavClose"
                                    @click="closeSideMenu"><i></i><i></i></span> -->
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
                        </div>
                        <!-- End side menu -->

                        <div class="header-module flex-col py-10 ml-25">
                            <button
                                class="nav-trigger main-nav-trigger collapsed style-2 solid circle txt-left flex items-center justify-center text-black"
                                type="button" data-ld-toggle="true" data-bs-toggle="collapse"
                                data-bs-target="#main-header-collapse" aria-expanded="false"
                                aria-controls="main-header-collapse" @click="toggleSideMenu">
                                <span class="bars">
                                    <span class="bars-inner ">
                                        <span class="bar relative"></span>
                                        <span class="bar relative"></span>
                                        <span class="bar relative"></span>
                                    </span>
                                </span>
                                <span class="txt">Menu</span>
                            </button>
                        </div>
                    </nav>
                </div>

                <!--Navigation-->
                <!-- <div class="col">

                </div> -->







            </div>
        </div>




    </header>
    <!-- END HEADER -->
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navbar = ref('')
const isSideMenuActive = ref(false);

// const showMenu = ref(false)


const scrollHandler = () => {
    if (window.scrollY > 100) {
        if (navbar.value) {
            navbar.value.classList.add('fixed-header');
        }
    } else {
        if (navbar.value) {
            navbar.value.classList.remove('fixed-header');
        }
    }
};


onMounted(() => {
    window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
});







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

// import { headerBg } from '../js/utilits';


// headerBg();
</script>

