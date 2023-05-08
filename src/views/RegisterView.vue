<template>
    <div class="bg-white w-full min-h-screen sm:backgroundsm md:backgroundmd lg:backgroundlg font-thin flex lg:flex-row sm:flex-col py-8 gap-y-10">
        <div class="flex-1 lg:flex lg:justify-center lg:items-center">
            <div class="sm:mx-auto sm:w-[90%] md:w-[80%] lg:w-[80%] h-fit px-4">
                <h1 class="text-white font-semibold sm:text-[26px] md:text-[40px]">Welcome To {{ websitename }}</h1>
                <p class="text-white mt-3 text-[16px]">{{ websitename }} provides innovative ERP modules for businesses of all sizes. We offer customizable solutions to streamline operations, enhance customer experience, and maximize potential. Our expert team provides top-notch support and guidance to help you achieve your goals. Join us today to take your business to the next level.</p>
            </div>
        </div>
        <div class="flex-1 lg:flex lg:justify-center lg:items-center">
            <div class="sm:mx-auto sm:w-[90%] md:w-[80%] lg:w-[80%] h-fit px-8 py-10 rounded-lg bg-[white]">
                <h1 class="text-2xl font-medium text-gray-700">Hello There,</h1>

                <p class="mt-4 text-gray-500">
                    Welcome! Please provide your details to register for access to your very own customized ERP module hub.
                </p>

                <div class="mt-6">
                    <!--Step 1-->
                    <div class="flex-1 mt-3">
                        <input type="text" id="fname" placeholder="First Name" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div class="flex-1 mt-3">
                        <input type="text" id="lname" placeholder="Last Name" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div class="flex-1 mt-3">
                        <input type="email" id="email" placeholder="Email" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div class="flex-1 mt-3">
                        <input type="password" id="password" placeholder="Password" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div class="flex-1 mt-3">
                        <input type="password" id="confirmation" placeholder="Confirm Password" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>
                    
                    <div class="flex-1 mt-6">
                        <p @click="sendToLogin()" class="underline text-[black] cursor-pointer block w-fit" >Already registered ?</p>
                    </div>

                    <button id="login" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#255de1] rounded-md focus:outline-none focus:ring focus:ring-[#255de1] focus:ring-opacity-50">
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import router from '@/router'

export default {
    name : 'RegisterView',  
    data(){
        return{
            websitename : '',
        }
    },
    methods:{
        sendToLogin(){
            router.push({ path:'/login' })
        },
    },
    mounted() {
        this.websitename = process.env.VUE_APP_TITLE
        useHead({
        title: `Register | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    }
}
</script>

<style scoped>

</style>