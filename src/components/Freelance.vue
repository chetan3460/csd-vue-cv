<template>
    <!-- Start Available 
    ============================================= -->
    <div class="work-available-area text-center box-layout  default-padding">
        <div class="shape-right-top-mini">
            <img src="../assets/images/illustration/16.png" alt="illustration">
        </div>
        <div class="shape-illustration">
            <img src="../assets/images/illustration/2.png" alt="illustration">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="work-available">
                        <h2 class="title">I'm <strong>available</strong> for <br> freelance work</h2>
                        <a class="theme-btn  " href="#contact">Hire me now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Available -->
</template>

<style>
/* ============================================================== 
     # Availabe for Work
=================================================================== */
.side .widget .logo img {
    height: 40px;
}

.shape-right-top-mini {
    max-width: 200px;
    position: absolute;
    right: -50px;
    top: -50px;
}

.work-available-area {
    position: relative;
    max-width: 1620px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 120px;
    padding-bottom: 120px;
    background: #070707;

}

.work-available h2 {
    font-size: 60px;
    text-transform: capitalize;
    margin-bottom: 40px;
    line-height: 1.1;
    font-weight: 700;
}

.work-available h2 strong {
    position: relative;
    z-index: 1;
}

.work-available h2 strong::after {
    position: absolute;
    left: 0;
    bottom: 13px;
    content: "";
    height: 10px;
    width: 100%;
    background: #ff014f;
    z-index: -1;
}

/* .shape-illustration {
    position: absolute;
    left: 0;
    max-width: 25%;
    bottom: -15%;
} */

.dark-layout .work-available h2 strong::after {
    background: var(--color-primary);
    opacity: 0.5;
}
</style>