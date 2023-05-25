<template>
    <div class="w-full">
        <h3 class="font-inter text-[18px] font-[500] pb-2 border-b mb-8">Personal information</h3>
        <div class="grid md:grid-cols-2 gap-x-2 gap-y-6">
            <div>
                <p class="text-[#6b7280] font-inter font-[500]">We assure you that we will accurately collect and secure your user details when placing orders, prioritizing data correctness and privacy.</p>
            </div>
            <div>
                <input type="text" placeholder="First Name" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input type="text" placeholder="Last Name" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input type="text" placeholder="Email" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input type="text" placeholder="Phone" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <textarea placeholder="Address" class="bg-[#fafafa] resize-none text-[15px] outline-none px-4 py-[14px] h-[150px] border w-full block mb-4"></textarea>
                <button class="text-white bg-black font-[300] text-[14px] px-[40px] py-2">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default  {
    name : 'AccountDetailsView',
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

</style>