<template>
    <div class="sm:px-0 md:px-8 py-[100px]">
        
        <div class="grid gap-y-8 md:gap-x-4 md:grid-cols-2 font-poppins sm:px-[20px] md:px-[20px] lg:px-[80px]">
            <div class="md:py-8">
                <p class="text-[15px]">Don't be stranger!</p>
                <h1 class="font-[500] text-[30px] mt-[-4px]">You tell us. We listen.</h1>
                <p class="text-[15px] mt-4 md:max-w-[400px]">
                    We'd love to hear from you! At {{ title }}, we value your feedback, questions, and suggestions. Our dedicated team is here to assist you and provide the best possible shopping experience.
                </p>
            </div>
            <div>
                <div>
                    <input type="text" placeholder="Full Name" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                    <input type="text" placeholder="Subject" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                    <input type="text" placeholder="Email" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                    <textarea placeholder="Message" class="bg-[#fafafa] resize-none text-[15px] outline-none px-4 py-[14px] h-[150px] border w-full block mb-4"></textarea>
                    <button class="text-white bg-black font-[300] text-[14px] px-[20px] py-2">Send Message</button>
                </div>
            </div>
        </div>
        <div class="px-4">
            <iframe class="block w-full mt-8 h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.5462544499433!2d-9.25951752515078!3d32.32404190699872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac21fd4d71d483%3A0xa6607a0a8de6ee00!2sBC%20SKILLS!5e0!3m2!1sfr!2sma!4v1684146079030!5m2!1sfr!2sma" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>

export default {
    name : 'ContactForm',
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