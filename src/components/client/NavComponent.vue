<template>
    <nav class="w-full py-[10px] px-[20px] font-inter flex justify-between items-center">
        <h1 class="font-semibold text-[22px] cursor-pointer ">{{ title }}</h1>
        <ul class="flex text-[16px]">
            <li class="mx-2 cursor-pointer" >Home</li>
            <li class="mx-2 cursor-pointer" >Packages</li>
            <li class="mx-2 cursor-pointer" >Modules</li>
            <li class="mx-2 cursor-pointer" >Services</li>
            <li class="mx-2 cursor-pointer" >About Us</li>
            <li class="mx-2 cursor-pointer" >Contact</li>
        </ul>
        <div class="flex text-[20px]">
            <img class="block mx-2 min-w-[22px] w-[22px] cursor-pointer" src="@/assets/icons/cart.svg" alt="">
            <div class="mx-2 cursor-pointer" >
                <i class="fa-regular fa-user"></i>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name : 'NavComponent',
    data(){
        return{
            title : ''
        }
    },
    mounted(){
        this.title = process.env.VUE_APP_TITLE
    }
}
</script>