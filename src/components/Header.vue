<template>
    <header
        class="header fixed bottom-[52px] left-1/2 z-[1000] max-w-[1230px] w-full px-[105px] flex transition duration-[350ms] perspective-[800px] mx-auto transform -translate-x-1/2">
        <div class="header--inner">
            <div class="header__main">

                <div class="header__main--left bg-white/20 backdrop-blur-[15px]">


                    <div class="header__main--logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21.5 39.7342C31.6314 39.7342 39.775 31.5319 39.775 21.5C39.775 11.4681 31.6314 3.26582 21.5 3.26582C11.3686 3.26582 3.225 11.4681 3.225 21.5C3.225 31.5319 11.3686 39.7342 21.5 39.7342ZM21.5 43C33.3741 43 43 33.3741 43 21.5C43 9.62588 33.3741 -1.16706e-07 21.5 -7.51836e-08C9.62588 -3.36608e-08 -3.11674e-08 9.62588 -6.96144e-08 21.5C-1.08061e-07 33.3741 9.62588 43 21.5 43Z"
                                fill="#1A1A1A"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M24.7255 18.1415C26.2452 18.1415 27.4667 16.9112 27.4667 15.4064C27.4667 13.9016 26.2452 12.6713 24.7255 12.6713C23.2058 12.6713 21.9842 13.9016 21.9842 15.4064C21.9842 16.9112 23.2058 18.1415 24.7255 18.1415ZM24.7255 18.6314C26.5066 18.6314 27.9505 17.1875 27.9505 15.4064C27.9505 13.6253 26.5066 12.1814 24.7255 12.1814C22.9444 12.1814 21.5005 13.6253 21.5005 15.4064C21.5005 17.1875 22.9444 18.6314 24.7255 18.6314Z"
                                fill="#1A1A1A"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.4851 29.3814L16.4851 12.1814L19.3518 12.1814L19.3518 29.3814L16.4851 29.3814Z"
                                fill="#1A1A1A"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.483 26.5159L27.9497 26.5159L27.9497 29.3825L16.483 29.3825L16.483 26.5159Z"
                                fill="#1A1A1A"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M26.0442 15.9567C25.8284 16.4277 25.3429 16.7611 24.769 16.7611C23.9901 16.7611 23.374 16.1471 23.374 15.4082C23.374 14.6693 23.9901 14.0553 24.769 14.0553C25.3429 14.0553 25.8284 14.3887 26.0442 14.8597L26.5168 14.8597C26.2795 14.1385 25.5867 13.6165 24.769 13.6165C23.7553 13.6165 22.9335 14.4187 22.9335 15.4082C22.9335 16.3977 23.7553 17.1999 24.769 17.1999C25.5867 17.1999 26.2795 16.6779 26.5168 15.9567L26.0442 15.9567Z"
                                fill="#1A1A1A"></path>
                        </svg>
                    </div>

                    <div class="header__main--links">
                        <a href="#">Home </a>
                        <a href="#">About</a>
                        <a href="#">Skills </a>
                        <a href="#">Contacts </a>
                    </div>
                    <div class="header__main--text">
                        <p>Menu</p>
                    </div>
                </div>
                <div class="header__main--social">
                    <a href="https://www.behance.net/looksgreatstudio" class="header__main--social--dribbble"
                        target="_blank">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.6653 4.10813C12.6653 3.16857 12.4191 2.36323 11.9284 1.6891C11.1106 0.591184 9.72405 0.0286543 7.76426 0H0V15.8504H7.23992C8.05624 15.8504 8.81142 15.781 9.51003 15.6377C10.2086 15.4929 10.8125 15.229 11.3246 14.8414C11.7801 14.5036 12.1593 14.0874 12.4619 13.5942C12.9404 12.8492 13.1789 12.0062 13.1789 11.0666C13.1789 10.1557 12.9695 9.38052 12.5537 8.74409C12.1333 8.10616 11.5157 7.64015 10.6963 7.34456C11.2359 7.07309 11.6441 6.77147 11.9223 6.4427C12.4191 5.85453 12.6653 5.07483 12.6653 4.10813ZM23.4995 2.71091H16.6143V0.738281H23.4995V2.71091ZM17.4165 8.82958C17.5296 8.06647 17.8063 7.46171 18.2451 7.01531C18.6838 6.56891 19.3044 6.3457 20.0994 6.3457C20.8331 6.3457 21.4462 6.55533 21.9445 6.9761C22.4367 7.39988 22.715 8.01519 22.7715 8.82958H17.4165ZM22.8923 4.36785C23.7224 4.73281 24.4057 5.31193 24.9438 6.10219C25.4345 6.79894 25.7494 7.60729 25.8931 8.52574C25.9772 9.06263 26.0108 9.84082 25.9971 10.8528H17.3401C17.392 12.0276 17.8017 12.8525 18.5844 13.3246C19.0583 13.6187 19.6285 13.7665 20.2981 13.7665C21.0028 13.7665 21.5791 13.587 22.0209 13.2296C22.264 13.035 22.478 12.7666 22.6615 12.4227H25.8335C25.7494 13.1165 25.3642 13.8238 24.6824 14.5416C23.6184 15.6803 22.1279 16.2503 20.2125 16.2503C18.6303 16.2503 17.2346 15.7708 16.0284 14.8086C14.8162 13.8479 14.2139 12.2825 14.2139 10.1168C14.2139 8.08537 14.7596 6.52748 15.8496 5.44314C16.9426 4.36181 18.3566 3.81738 20.0978 3.81738C21.1328 3.81738 22.0637 4.00137 22.8923 4.36785ZM3.20264 13.0993V8.87207H7.15891C7.84682 8.8781 8.38339 8.96859 8.76557 9.14052C9.4489 9.44968 9.78827 10.0152 9.78827 10.8417C9.78827 11.8159 9.43667 12.4735 8.73194 12.8203C8.34518 13.0058 7.80096 13.0993 7.10387 13.0993H3.20264ZM3.20264 2.75293V6.25027H7.10999C7.80555 6.25027 8.37269 6.11906 8.8099 5.85665C9.24405 5.59423 9.46266 5.12973 9.46266 4.46616C9.46266 3.72567 9.17526 3.23855 8.60047 3.00026C8.10211 2.83588 7.46923 2.75293 6.7003 2.75293H3.20264Z"
                                    fill="white"></path>
                            </svg>
                        </div>
                        <div>
                            <p>Behance Cases</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12"
                                fill="none">
                                <path d="M1 1L6 6L1 11" stroke="black"></path>
                            </svg>
                        </div>
                    </a>

                    <div class="header__main--social--links">
                        <a href="https://dribbble.com/pacorasson" target="_blank">
                            <div>
                                <img src="https://looksgreat.studio/wp-content/uploads/2023/10/Dribbble.svg"
                                    alt="Dribbble">
                            </div>
                            <p>Dribbble</p>
                        </a>
                        <a href="https://www.linkedin.com/company/looksgreat-studio/" target="_blank">
                            <div>
                                <img src="https://looksgreat.studio/wp-content/uploads/2023/10/Linkedin.svg"
                                    alt="Linkedin">
                            </div>
                            <p>Linkedin</p>
                        </a>
                        <a href="https://www.instagram.com/looksgreat.studio/" target="_blank">
                            <div>
                                <img src="https://looksgreat.studio/wp-content/uploads/2023/10/Instagram.svg"
                                    alt="Instagram">
                            </div>
                            <p>Instagram</p>
                        </a>
                        <a href="https://m.facebook.com/looksgreat.studio/" target="_blank">
                            <div>
                                <img src="https://looksgreat.studio/wp-content/uploads/2023/10/Facebook-1.svg"
                                    alt="Facebook">
                            </div>
                            <p>Facebook</p>
                        </a>
                    </div>
                </div>
                <div class="header__burger">
                    <p>Full Menu</p>
                    <span>
                        <span></span>
                    </span>
                </div>
            </div>
            <a href="#" class="header__talk formBtn">
                <img src="https://looksgreat.studio/wp-content/themes/lgtheme/assets/img/marker_icon.svg" alt="">
            </a>
        </div>
    </header>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

</script>
