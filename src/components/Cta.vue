<template>
    <!-- title intro area -->
    <section class="title-intro-area fix primary-bg">
        <div class="container">
            <div class="title-intro-wrapper section-spacing">
                <div class="intro__title-wrapper">
                    <h2 class="intro__title-inner folks-text">Let’s talk.</h2>
                </div>
                <div class="intro-brn">
                    <a href="contact.html" class="circle-btn is-green">
                        <span class="icon-box"><i class="far fa-arrow-right"></i></span>
                        <img src="../assets/images/illustration/contact-btn-text.png" alt="image not found" class="image-text">
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- title intro end -->
</template>
<script>
import SplitType from 'split-type'
// import gsap from 'gsap';
import chroma from "chroma-js"
import { gsap } from 'gsap/all';
import scrollTrigger from 'gsap/ScrollToPlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(scrollTrigger, ScrollToPlugin);
gsap.config({
		nullTargetWarn: false,
	});
const SplitText = new SplitType
	/*======================================
	50. Folks Text Animation
	========================================*/
    let device_width = window.innerWidth;

	if (device_width > 576) {
		let folksBD = gsap.timeline({
			repeat: -1,
			delay: 0.5,
			scrollTrigger: {
				trigger: '.folks-text',
				start: 'bottom 100%-=50px'
			}
		});
		gsap.set('.folks-text', {
			opacity: 0
		});
		gsap.to('.folks-text', {
			opacity: 1,
			duration: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.folks-text',
				start: 'bottom 100%-=50px',
				once: true
			}
		});
		let mySplitText = new SplitType(".folks-text", { type: "words,chars,capitalize" });
		let chars = mySplitText.chars;
		let folksGradient = chroma.scale(['#14CF93', '#F8EC3A']);
		folksBD.to(chars, {
			duration: 0.5,
			scaleY: 0.6,
			ease: "power3.out",
			stagger: 0.04,
			transformOrigin: 'center bottom'
		});
		folksBD.to(chars, {
			yPercent: -20,
			ease: "elastic",
			stagger: 0.03,
			duration: 0.8
		}, 0.5);
		folksBD.to(chars, {
			scaleY: 1,
			ease: "elastic.out(2.5, 0.2)",
			stagger: 0.03,
			duration: 1.5
		}, 0.5);
		folksBD.to(chars, {
			color: (i, el, arr) => {
				return folksGradient(i / arr.length).hex();
			},
			ease: "power2.out",
			stagger: 0.03,
			duration: 0.3
		}, 0.5);
		folksBD.to(chars, {
			yPercent: 0,
			ease: "back",
			stagger: 0.03,
			duration: 0.8
		}, 0.7);
		folksBD.to(chars, {
			color: '#14CF93',
			duration: 1.4,
			stagger: 0.05
		});
	}
</script>
<style>
.title-intro-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px 50px;
    border-bottom: 1px solid #414141;
    padding-top: 120px;
    padding-bottom: 120px;
}
.intro__title-inner {
    font-weight: 400;
    font-size: 180px;
    text-transform: unset;
    line-height: 1;
    margin-bottom: 0;
    color: #14cf93;
}

</style>