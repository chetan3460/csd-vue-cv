
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
                        <div class="animated-element">
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
                            <li class="nav-item current">
                                <a class="nav-link link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#about" @click="closeSideMenu">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#Resume">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#Skills">Skills</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link link" href="#page5">Portfolio</a>
                            </li> -->
                            <li class="nav-item">
                                <a class="nav-link link" href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="side-footer text-white w-100">
                        <ul class="social-icons-simple">
                            <li class="animated-wrap"><a href="javascript:void(0);" class="animated-element"><i
                                        class="fab fa-facebook-f" aria-hidden="true"></i></a> </li>
                            <li class="animated-wrap"><a href="javascript:void(0);" class="animated-element"><i
                                        class="fab fa-twitter" aria-hidden="true"></i></a> </li>
                            <li class="animated-wrap"><a href="javascript:void(0);" class="animated-element"><i
                                        class="fab fa-linkedin-in" aria-hidden="true"></i></a> </li>
                            <li class="animated-wrap"><a href="javascript:void(0);" class="animated-element"><i
                                        class="fab fa-instagram" aria-hidden="true"></i></a> </li>
                        </ul>
                        <p class="whitecolor">&copy; 2018 MegaOne. Made With Love by <a class="web-link text-white"
                                href="http://www.themesindustry.com/" target="_blank">Themesindustry</a></p>
                    </div>
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

.navbar-standard {
    position: absolute;
    top: 0;
    z-index: 99;
    padding: 33px 0 0 0;
    width: 100%;
}

.logo-dark {
    max-width: 100%;
}

/* Side Menu */
.side-menu {
    width: 100%;
    opacity: 0;
    position: fixed;
    background: linear-gradient(to right, #212c2c -50%, #24c4f4 93%);
    z-index: 0;
    height: 100%;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    -o-transition: all .5s ease;
    visibility: hidden;
}

.whitecolor {
    color: #FFFFFF;
}

.side-menu.left {
    left: 0;
    right: auto;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
}

.side-menu.before-side {
    width: 280px;
}

.side-menu.side-menu-active,
.side-menu.before-side {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    z-index: 9999;
    opacity: 0.9;
    visibility: visible;
}

.pul-menu .side-menu.side-menu-active {
    visibility: visible;
    opacity: 1;
}

.side-menu .navbar-brand {
    margin: 0 0 2.5rem 0;
}

/*Side overlay*/
#close_side_menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    -webkit-transition: opacity 300ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    -o-transition: opacity 300ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition: opacity 300ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    display: none;
    z-index: 1031;
    opacity: 0.4;
}

/*side clode btn*/
.side-menu .btn-close {
    height: 33px;
    width: 33px;
    display: inline-block;
    text-align: center;
    position: absolute;
    top: 29px;
    right: 47px;
    cursor: pointer;
}

.side-menu.before-side .btn-close {
    display: none;
}

.just-sidemenu #sidemenu_toggle {
    position: fixed;
    z-index: 999;
    /*background: #fff;*/
    right: 0;
    top: 16px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .15);
    box-shadow: 0 0 20px rgba(0, 0, 0, .15);
}

.side-menu .btn-close::before,
.side-menu .btn-close::after {
    position: absolute;
    left: 16px;
    content: ' ';
    height: 24px;
    width: 2px;
    background: #fff;
    top: 5px;
}

.side-menu .btn-close:before {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.side-menu .btn-close:after {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.side-menu.right-btn .btn-close {
    right: 47px;
    left: auto;
}

.side-nav-btn {
    position: absolute;
    top: 37px;
    right: 22px;
    font-size: 18px;
    color: #FFFFFF;
    transform: rotate(180deg);
    transition: all 0.3s ease;
    width: 28px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
    z-index: 99;
    -webkit-transition: all linear 300ms;
}

.side-nav-btn span {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #ffffff;
    position: relative;
    top: 50%;
    margin-top: 6px;
    right: 0;
    -webkit-transition: all linear 300ms;
}

.side-nav-btn:hover span:nth-child(1),
.side-nav-btn:hover span:nth-child(3) {
    width: 60%;
    -webkit-transition: all linear 300ms;
}

.side-nav-btn.active {
    display: none;
}

.header-appear .side-nav-btn {
    left: 40px;
    top: 19px;
}

.header-appear .navbar-top-default {
    height: 80px;
    position: fixed;
    z-index: 9999;
    top: 0;
    background: #171717;
    -webkit-animation-name: animationFade;
    animation-name: animationFade;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.35);
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.35);
}

@-webkit-keyframes animationFade {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes animationFade {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

.side-menu .inner-wrapper {
    padding: 3.5rem 5rem;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: flex-end;
    text-align: left;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.pul-menu.pushwrap .side-menu .inner-wrapper {
    padding: 3.5rem 2.5rem;
}

.inner-wrapper .navbar-nav {
    -ms-flex-direction: inherit;
    flex-direction: inherit;
}

.side-menu .side-nav {
    margin-bottom: 30px;
    display: block;
    width: 100%
}

.side-nav .navbar-nav .nav-item {
    display: block;
    margin: 0 auto;
    padding: 0 !important;
    opacity: 0;
    -webkit-transition: all 0.8s ease 500ms;
    -o-transition: all 0.8s ease 500ms;
    transition: all 0.8s ease 500ms;

    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
}

.side-nav .navbar-nav .nav-item:first-child {
    -webkit-transition-delay: .1s;
    -o-transition-delay: .1s;
    transition-delay: .1s;
}

.side-nav .navbar-nav .nav-item:nth-child(2) {
    -webkit-transition-delay: .2s;
    -o-transition-delay: .2s;
    transition-delay: .2s;
}

.side-nav .navbar-nav .nav-item:nth-child(3) {
    -webkit-transition-delay: .3s;
    -o-transition-delay: .3s;
    transition-delay: .3s;
}

.side-nav .navbar-nav .nav-item:nth-child(4) {
    -webkit-transition-delay: .4s;
    -o-transition-delay: .4s;
    transition-delay: .4s;
}

.side-nav .navbar-nav .nav-item:nth-child(5) {
    -webkit-transition-delay: .5s;
    -o-transition-delay: .5s;
    transition-delay: .5s;
}

.side-nav .navbar-nav .nav-item:nth-child(6) {
    -webkit-transition-delay: .6s;
    -o-transition-delay: .6s;
    transition-delay: .6s;
}

.side-nav .navbar-nav .nav-item:nth-child(7) {
    -webkit-transition-delay: .7s;
    -o-transition-delay: .7s;
    transition-delay: .7s;
}

.side-nav .navbar-nav .nav-item:nth-child(8) {
    -webkit-transition-delay: .8s;
    -o-transition-delay: .8s;
    transition-delay: .8s;
}

.side-nav .navbar-nav .nav-item:nth-child(9) {
    -webkit-transition-delay: .9s;
    -o-transition-delay: .9s;
    transition-delay: .9s;
}

.side-menu.side-menu-active .side-nav .navbar-nav .nav-item {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
}

.nav-item a {
    transition: all .3s ease;
}

.top-center-logo .navbar-nav .text-black:hover,
.top-fixed-nav .navbar-nav .whitecolor:hover,
.top-center-logo .navbar-nav .whitecolor:hover {
    color: #f5218a !important;
}

.side-nav .navbar-nav .nav-link {
    display: inline-table;
    color: #fff;
    padding: 2px 0 3px 0 !important;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    position: relative;
    -webkit-border-radius: 0;
    border-radius: 0;
}

.side-logo-nav .navbar-nav .nav-link {
    position: relative;
}

.side-logo-nav .navbar-nav .nav-link:hover,
.side-logo-nav .navbar-nav .nav-link:focus {
    color: #FFFFFF;
}

.side-nav .navbar-nav .nav-link::after {
    content: "";
    position: absolute;
    background: #fff;
    display: inline-block;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    -webkit-transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
    -o-transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
}

.side-nav .navbar-nav .nav-link:hover::after,
.side-nav .navbar-nav .nav-link.active::after {
    width: 100%;
}

.side-nav .navbar-nav .nav-link.active {
    background: transparent;
}

.side-menu p {
    font-size: 13px;
    margin-top: .5rem;
    margin-bottom: 0;
}

.side-footer {
    text-align: center;
}

.social-icons-simple {
    margin-bottom: 0;
    margin-left: -10px;
    padding: 0;
}

.social-icons-simple li {
    display: inline-block;
}

.social-icons-simple li a {
    display: block;
    font-size: 16px;
    color: #FFFFFF;
    height: 38px;
    line-height: 38px;
    border: 1px solid transparent;
    text-align: center;
    width: 38px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
}

.social-icons-simple li a:hover {
    color: #FFFFFF;
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
}
</style>