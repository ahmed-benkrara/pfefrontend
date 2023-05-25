<template>
    <div class="w-full">
        <h3 class="font-inter text-[18px] font-[500] pb-2 border-b mb-8">Change Password</h3>
        <div class="grid md:grid-cols-2 gap-x-2 gap-y-6">
            <div>
                <p class="text-[#6b7280] font-inter font-[500]">We prioritize security to ensure that we provide a secure online shopping experience, safeguarding your information and transactions.</p>
            </div>
            <div>
                <input type="text" placeholder="Current Password" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input type="text" placeholder="New Password" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input type="text" placeholder="Password Confirmation" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <button class="text-white bg-black font-[300] text-[14px] px-[40px] py-2">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
    name : 'PasswordView',
    mounted(){
        useHead({
            title: `Password | ${process.env.VUE_APP_TITLE}`,
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

</style>