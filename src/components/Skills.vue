<template>
    <!-- Skill Area start -->
    <section id="skills" class="skill-area rel z-1 scroll_section">
        <div class="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
            <div class="container">
                <div class="row gap-100">
                    <div class="col-lg-5">
                        <div class="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                            <div class="section-title mb-40">
                                <span class="sub-title mb-15">My Skills</span>
                                <h2>I'm great in what I do and <span>I'm loving it</span></h2>
                                <p>Front-end developer with 4+ years of experience building and maintaining responsive and
                                    user-friendly websites and web applications using HTML, CSS, JavaScript, Vue,
                                    Wordpress, Scss, and a variety of front-end frameworks and libraries.

                                </p>
                            </div>
                            <!-- <a href="about.html" class="theme-btn">Learn More <i class="far fa-angle-right"></i></a> -->
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="skill-items-wrap">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                    <div class="skill-item wow fadeInUp delay-0-2s">
                                        <v-icon hover animation="float" scale="4" name="vi-file-type-html" />
                                        <h5>html5</h5>
                                        <span class="percent">95%</span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                    <div class="skill-item wow fadeInUp delay-0-3s">
                                        <v-icon hover animation="float" scale="4" name="vi-file-type-css" />

                                        <h5>css3</h5>
                                        <span class="percent">83</span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                    <div class="skill-item wow fadeInUp delay-0-4s">
                                        <v-icon hover animation="float" scale="4" name="vi-file-type-scss2"></v-icon>
                                        <h5>scss</h5>
                                        <span class="percent">93%</span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                    <div class="skill-item wow fadeInUp delay-0-5s">
                                        <v-icon hover animation="float" scale="4" fill="#1169ae" name="co-jquery" />
                                        <h5>jquery</h5>
                                        <span class="percent">84%</span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                    <div class="skill-item wow fadeInUp delay-0-2s">
                                        <v-icon hover animation="float" scale="4" fill="#5E3B7F"
                                            name="fa-bootstrap"></v-icon>
                                        <h5>bootstrap</h5>
                                        <span class="percent">65%</span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                    <div class="skill-item wow fadeInUp delay-0-3s">
                                        <v-icon hover animation="float" scale="4" fill="#FFDF00"
                                            name="co-javascript"></v-icon>
                                        <h5>javascript</h5>
                                        <span class="percent">86%</span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                    <div class="skill-item wow fadeInUp delay-0-4s">
                                        <v-icon hover animation="float" scale="4" fill="#00769D"
                                            name="fa-wordpress-simple"></v-icon>

                                        <h5>wordpress</h5>
                                        <span class="percent">62%</span>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                    <div class="skill-item wow fadeInUp delay-0-5s">
                                        <v-icon hover animation="float" scale="4" name="vi-file-type-vue" />
                                        <h5>Vue</h5>
                                        <span class="percent">94%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- Skill Area end -->
</template>
<script setup>
import {
    OhVueIcon,
    addIcons
} from 'oh-vue-icons'
import {
    ViFileTypeScss2,
    FaWordpressSimple,
    CoJquery,
    CoJavascript,
    ViFileTypeHtml,
    ViFileTypeCss,
    FaBootstrap,
    ViFileTypeVue,
    FaFacebookSquare,

} from 'oh-vue-icons/icons'
addIcons(FaWordpressSimple, ViFileTypeScss2, CoJquery, CoJavascript, ViFileTypeHtml, ViFileTypeCss, FaBootstrap, ViFileTypeVue, FaFacebookSquare)

</script>
