<template>
    <div class="mt-[20px] px-4 py-8">
        <h1 class="font-inter font-semibold sm:text-[24px] sm:mb-3 md:text-[20px]">Currated Picks</h1>
        <div class="w-full md:px-8">
            <swiper
                :slidesPerView="slidesPerView"
                :spaceBetween="5"
                :modules="modules"
                class="mySwiper cursor-grabbing "
            >
                <swiper-slide>
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { Pagination } from 'swiper';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default {
        name : "UniqueModules",
        data(){
            return{
                modules: [Pagination],
                slidesPerView : 5
            }
        },
        components :{
            Swiper, SwiperSlide
        },
        methods: {
            handleResponsiveSlides() {
                if (window.innerWidth < 545) {
                    this.slidesPerView = 2;
                }else if (window.innerWidth < 710) {
                    this.slidesPerView = 3;
                }else if (window.innerWidth < 750) {
                    this.slidesPerView = 4;
                }else if (window.innerWidth < 879) {
                    this.slidesPerView = 3;
                }else if (window.innerWidth < 1024) {
                    this.slidesPerView = 4;
                }else if (window.innerWidth < 1084) {
                    this.slidesPerView = 4;
                }
                else {
                    this.slidesPerView = 5;
                }
            }
        },
        mounted() {
            this.handleResponsiveSlides();
            window.addEventListener("resize", this.handleResponsiveSlides);
            AOS.init({
                once: true
            })
        },
        beforeUnmount() {
            window.removeEventListener("resize", this.handleResponsiveSlides);
        },
    }
</script>

<style scoped>
    .test{
        background-color: rgba(0, 0, 0, 0.158);
        display: inline-block;
    }

    .filt{
        mix-blend-mode: multiply;
    }


</style>