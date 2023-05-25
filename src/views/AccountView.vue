<template>
    <div class="w-full h-[1px] bg-gray-200"></div>
    <div class="py-8 sm:px-2 md:px-2 lg:px-10">
        <h1 class="text-[25px] font-[500]">My Account</h1>
        <div class="w-full h-fit md:min-h-screen md:flex">
            <div class="sm:w-full md:w-[240px] px-4 sm:pb-8">
                <ul class="mt-8 w-fit sm:hidden md:block">
                    <li class="py-2 px-4 font-[500] text-[14px] text-[black] hover:text-black cursor-pointer rounded mb-2">
                        <i class="fa-solid fa-user text-[18px] mr-2"></i> My Details
                    </li>
                    <li class="py-2 px-4 font-[500] text-[14px] text-[gray] hover:text-black cursor-pointer rounded mb-2">
                        <i class="fa-solid fa-gear text-[18px] mr-2"></i> Settings
                    </li>
                    <li class="py-2 px-4 font-[500] text-[14px] text-[gray] hover:text-black cursor-pointer rounded mb-2">
                        <i class="fa-solid fa-bag-shopping text-[18px] mr-2"></i> My Orders
                    </li>
                    <li class="py-2 px-4 font-[500] text-[14px] text-[gray] hover:text-black cursor-pointer rounded mb-2">
                        <i class="fa-solid fa-heart text-[18px] mr-2"></i> My Favorite
                    </li>
                    
                </ul>
            </div>
            <div class="w-full min-h-screen">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default  {
    name : 'AccountView',
    mounted(){
        useHead({
            title: `Account | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
}
</script>

<style scoped>
.listitem{
    @apply py-2 px-4 rounded-[5px] bg-[#828bb815] text-[14px] text-[#828bb8] font-inter font-[500] cursor-pointer mt-2;
}

.listitem:hover{
    @apply text-[black] bg-[#828bb815] transition-colors duration-500 ;
}

.listicon{
    @apply w-[20px] mr-2;
}
</style>