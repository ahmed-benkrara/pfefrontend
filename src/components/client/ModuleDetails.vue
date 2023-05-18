<template>
    <div class="sm:px-4 md:px-8 py-6 mb-16">
        <!-- <p class="font-poppins text-[14px] font-[400]">
            <span class="text-gray-700 cursor-pointer">Home</span> <span class="text-gray-700"> <i class="fa-solid fa-angle-right"></i> </span> <span class="text-gray-700 cursor-pointer">Modules</span> <span class="text-gray-700"> <i class="fa-solid fa-angle-right"></i> </span> <span class="">Module 1</span>
        </p> -->
        <div class=" w-full h-fit grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <!--Left-->
            <div class="w-full h-fit sm:py-4 md:py-6 md:px-4">
                <div>
                    <img id="maingallery" class="w-full sm:h-[300px] md:h-[400px] rounded-[0px] object-cover" src="https://images.pexels.com/photos/4872023/pexels-photo-4872023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                <div class="mt-2 w-full h-fit">
                    <swiper
                        :slidesPerView="4"
                        :spaceBetween="5"
                        :modules="modules"
                        class="mySwiper cursor-pointer"
                    >
                        <swiper-slide>
                            <img @click="setGalleryItem($event)" class="block sm:h-[60px] md:h-[90px] rounded-[0px] w-full object-cover" src="https://images.pexels.com/photos/4872023/pexels-photo-4872023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img @click="setGalleryItem($event)" class="block sm:h-[60px] md:h-[90px] rounded-[0px] w-full object-cover" src="https://images.pexels.com/photos/8133879/pexels-photo-8133879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img @click="setGalleryItem($event)" class="block sm:h-[60px] md:h-[90px] rounded-[0px] w-full object-cover" src="https://images.pexels.com/photos/4872020/pexels-photo-4872020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img @click="setGalleryItem($event)" class="block sm:h-[60px] md:h-[90px] rounded-[0px] w-full object-cover" src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img @click="setGalleryItem($event)" class="block sm:h-[60px] md:h-[90px] rounded-[0px] w-full object-cover" src="https://images.pexels.com/photos/8133879/pexels-photo-8133879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        </swiper-slide>
                    </swiper>   
                </div>
            </div>
            <!--right-->
            <div class="w-full h-fit sm:py-4 md:py-6 md:px-4 font-rubik">
                <div class="flex justify-between items-center mb-2">
                    <h1 class="font-bold text-[25px]">Inventory Management</h1>
                    <!-- <div class="bg-[#1d242d] h-fit text-white flex justify-center items-center cursor-pointer px-[12px] py-[10px] rounded-[5px]">
                        <i class="fa-regular fa-heart block"></i>
                    </div> -->
                </div>
                <div class="mb-4">
                    <i class="fa-solid fa-star text-[#ffc107]"></i>
                    <i class="fa-solid fa-star text-[#ffc107]"></i>
                    <i class="fa-solid fa-star text-[#ffc107]"></i>
                    <i class="fa-solid fa-star text-[#ffc107]"></i>
                    <i class="fa-solid fa-star text-[#ffc107]"></i>
                    (5/100 reviews)
                </div>
                <h2 class="text-[18px] font-[500]">$1150</h2>
                <h1 class="text-[16px] mt-6">Type</h1>
                <p class="mt-[5px] sm:text-[14px] md:text-[15px] font-poppins font-[300]">
                    Inventory
                </p>
                <h1 class="text-[16px] mt-2">Description</h1>
                <p class="mt-[5px] sm:text-[14px] md:text-[15px] font-poppins font-[300]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi id ratione, veritatis ducimus perspiciatis tenetur eligendi velit accusamus beatae vel totam qui porro quam nesciunt doloremque repudiandae nulla sequi impedit.
                    Quisquam est aliquam neque? Natus est minus ducimus dolores, perferendis vel a alias omnis accusamus commodi debitis dicta aut magni aliquam quisquam fugit, nemo inventore consectetur? Neque amet odit ab.
                </p>
                <div class="flex mt-8 text-[14px]">
                    <!-- <button class="px-4 py-2 bg-[#1d242d] hover:bg-[#1d242d90] transition-all rounded-md text-[white]">Add to favorite</button> -->
                    <button class="px-4 py-2 bg-[black] hover:bg-[#1d242d90] transition-all font-[300] font-poppins text-[white]">Add to cart</button>
                </div>
            </div>
        </div>
        <div class="tabs grid grid-cols-2 text-center mt-16">
            <p @click="tabchange($event,0)" class="activetab border-b py-4 cursor-pointer text-[15px] text-[gray] font-poppins font-[500]">Rating & Reviews</p>
            <p @click="tabchange($event,1)" class="border-b py-4 cursor-pointer text-[15px] text-[gray] font-poppins font-[500]">Additional Details</p>
        </div>
        <ProductReviews v-if="tab == 0"/>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import ProductReviews from './ProductReviews.vue'

export default {
    name : 'ModuleDetails',
    data(){
        return{
            modules : [Pagination],
            tab : 0
        }
    },
    methods: {
        setGalleryItem(e){
            document.getElementById('maingallery').src = e.target.src
        },
        tabchange(e, target){
            document.querySelectorAll('.activetab').forEach((item) => item.classList.remove('activetab'))
            e.target.classList.add('activetab')
            this.tab = target
        }
    },
    components: {
        Swiper, SwiperSlide, ProductReviews
    }
}
</script>

<style scoped>
    .activetab{
        @apply text-[black] border-black;
    }
</style>