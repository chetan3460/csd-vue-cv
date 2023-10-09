<template>
    <!-- About Area start -->
    <section id="about" class="about-area rel z-1 scroll_section">
        <div class="for-bgc-black py-130 rpy-100">
            <div class="container">
                <div class="row gap-100 align-items-center">
                    <div class="col-lg-7">
                        <div class="about-content-part rel z-2 rmb-55">
                            <div class="section-title mb-35 wow fadeInUp delay-0-2s">
                                <span class="sub-title mb-15">About Me</span>
                                <h2 class="title-anim split-title-line">Professional <span>Problem
                                        Solutions</span> For
                                    Digital Products</h2>
                                <p>At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos
                                    dolores quas molestias excepturi sint occaecati cupiditate provident qui officia
                                    deserunt mollitia animi, id est laborum et dolorum</p>
                            </div>
                            <ul class="list-style-one two-column wow fadeInUp delay-0-2s">
                                <li>Branding & Design</li>
                                <li>Digital Marketing</li>
                                <li>Web Development</li>
                                <li>Product Design</li>
                            </ul>
                            <div class="about-info-box mt-25 wow fadeInUp delay-0-2s">
                                <div class="info-box-item">
                                    <i class="far fa-envelope"></i>
                                    <div class="content">
                                        <span>Email Us</span><br>
                                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                                    </div>
                                </div>
                                <div class="info-box-item">
                                    <i class="far fa-phone"></i>
                                    <div class="content">
                                        <span>Make A Call</span><br>
                                        <a href="callto:+000(123)45688">+880 (123) 456 88</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="about-image-part wow fadeInUp delay-0-3s">
                            <img src="../assets/images/about/about.jpg" alt="About Me">
                            <div class="about-btn btn-one wow fadeInRight delay-0-4s">
                                <img src="../assets/images/about/btn-image1.png" alt="Image">
                                <h6>Experience Designer</h6>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="about-btn btn-two wow fadeInRight delay-0-5s">
                                <img src="../assets/images/about/btn-image2.png" alt="Image">
                                <h6>Mark J. Collins</h6>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="dot-shape">
                                <img src="../assets/images/shape/about-dot.png" alt="Shape">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Area end -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '@/js/utilits'

useScrollAnimation();

// splitTitleLines.value = document.querySelectorAll(".split-title-line");

// onMounted(() => {
//     useScrollAnimation();
// })



</script>