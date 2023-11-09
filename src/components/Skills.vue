<template>
    <!-- Skill Area start -->
    <section id="skills" class="skill-area rel z-1 scroll_section">
        <div class=" pt-130 rpt-100 pb-100 rpb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                            <div class="section-title mb-60">
                                <span class="sub-title mb-15"><v-icon name="la-shapes-solid"></v-icon> My Skills</span>
                                <h2 class="split-title-line">I'm great in what I do and <span>I'm loving it</span></h2>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-12">

                    <div class="skill-items-wrap">
                        <div class="skill-item " data-speed="1" data-lag="0.2">
                            <div class="skill-inner">
                                <v-icon hover animation="float" scale="4" name="vi-file-type-html" />
                                <span class="percent">95%</span>
                            </div>
                            <h5>html5</h5>
                        </div>
                        <!-- <div class="skill-item">
                                <div class="skill-inner">
                                    <v-icon hover animation="float" scale="4" name="vi-file-type-css" />
                                    <span class="percent">83</span>
                                </div>
                                <h5>css3</h5>
                            </div> -->
                        <div class="skill-item" data-speed="1" data-lag="0.4">
                            <div class="skill-inner">
                                <v-icon hover animation="float" scale="4" name="vi-file-type-scss2" />
                                <span class="percent">93%</span>
                            </div>
                            <h5>scss</h5>
                        </div>
                        <!-- <div class="skill-item">
                            <div class="skill-inner">
                                <v-icon hover animation="float" scale="4" fill="#1169ae" name="co-jquery" />
                                <span class="percent">84%</span>

                            </div>
                            <h5>jquery</h5>
                        </div> -->
                        <div class="skill-item" data-speed="1" data-lag="0.6">
                            <div class="skill-inner">
                                <v-icon hover animation="float" scale="4" fill="#5E3B7F" name="fa-bootstrap"></v-icon>
                                <span class="percent">65%</span>

                            </div>

                            <h5>bootstrap</h5>
                        </div>
                        <div class="skill-item" data-speed="1" data-lag="0.8">
                            <div class="skill-inner">
                                <v-icon hover animation="float" scale="4" fill="#FFDF00" name="co-javascript"></v-icon>
                                <span class="percent">86%</span>

                            </div>


                            <h5>javascript</h5>
                        </div>
                        <div class="skill-item" data-speed="1" data-lag="1">
                            <div class="skill-inner">
                                <v-icon hover animation="float" scale="4" fill="#00769D"
                                    name="fa-wordpress-simple"></v-icon>
                                <span class="percent">62%</span>

                            </div>


                            <h5>wordpress</h5>
                        </div>
                        <div class="skill-item" data-speed="1" data-lag="1.2">
                            <div class="skill-inner">
                                <v-icon hover animation="float" scale="4" name="vi-file-type-vue" />
                                <span class="percent">94%</span>

                            </div>



                            <h5>Vue</h5>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </section>
    <!-- Skill Area end -->
</template>
<script setup>
import { listAnimation } from '../js/utilits';
listAnimation()

import {
    OhVueIcon,
    addIcons
} from 'oh-vue-icons'
import {
    LaShapesSolid,
    ViFileTypeScss2,
    FaWordpressSimple,
    CoJquery,
    CoJavascript,
    ViFileTypeHtml,
    ViFileTypeCss,
    FaBootstrap,
    ViFileTypeVue,
    FaFacebookSquare,
    MdSpeedSharp

} from 'oh-vue-icons/icons'
addIcons(LaShapesSolid, MdSpeedSharp, FaWordpressSimple, ViFileTypeScss2, CoJquery, CoJavascript, ViFileTypeHtml, ViFileTypeCss, FaBootstrap, ViFileTypeVue, FaFacebookSquare)
import { useScrollAnimation, } from '@/js/utilits'

useScrollAnimation()

// import { test } from '@/js/utilits'
// test();
</script>
