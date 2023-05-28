<template>
    <div id="cart" class="scroll fixed sm:w-full md:w-[400px] h-full bg-white top-0 right-[-100%] z-[1000] p-[20px] font-reemkufi overflow-y-scroll ">
        <div class="text-[#434343] w-full flex justify-between items-center py-8">
            <p class="text-[25px] font-[500]">my cart</p>
            <div class="cursor-pointer text-[20px]" @click="closemenu()">
                <i class="fa-solid fa-x"></i>
            </div>
        </div>
        <div class="mt-2 flex">
            <img src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" class="bg-black w-[67px] h-[100px] block object-cover" />
            <div class="px-[20px]">
                <p class="text-[13px] font-ibm font-[300] underline text-[#5f5f5f] cursor-pointer">Arissa Top - Ivory</p>
                <p class="font-ibm font-[300] text-[13px]">Module</p>
                <p class="font-ibm font-bold text-[13px] text-[#5f5f5f] mt-[5px] ">Unit Price (<span class="text-[red]">30$</span>)</p>
                <div class="flex mt-4">
                    <div class="w-[40px] hover:border border-black h-[40px] flex items-center font-ibm font-bold text-[13px] text-[black] justify-center cursor-pointer">−</div>
                    <div class="w-[40px] h-[40px] flex items-center font-ibm font-bold text-[13px] text-black justify-center">1</div>
                    <div class="w-[40px] hover:border border-black h-[40px] flex items-center font-ibm font-bold text-[13px] text-[black] justify-center cursor-pointer">+</div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-between border-[#d5d5d5] border-b border-t py-[10px] mt-[25px]">
            <p class="text-[13px] text-[#434343] leading-[25px] font-karla font-[700] tracking-[3px] ">SUBTOTAL</p>
            <p class="text-[13px] text-[red] leading-[25px] font-karla font-[800] tracking-[3px] ">$30.00</p>
        </div>
        <div class="w-full flex justify-between mt-[25px] py-4 px-[8px]">
            <p class="text-[16px] text-[black] font-ibm font-[700]">Total</p>
            <p class="text-[16px] text-[black] font-ibm font-[700]">$30.00</p>
        </div>
        <button class="uppercase mt-[12px] outline-none text-white bg-[#333f48] hover:bg-black px-[20px] py-[14px] w-full text-[12px] tracking-[2px] font-karla font-bold block">check out</button>
        <p class="text-center font-ibm text-[13px] mt-6">Seamless ERP Solutions for Success</p>
        <p class="text-center font-ibm text-[11px] mt-2">ERP Empowerment</p>
    </div>
</template>

<script>

export default {
    name : 'CartMenu',
    methods: {
        closemenu(){
            let cart = document.getElementById('cart')
            cart.classList.remove('cartopen')
            cart.classList.add('cartclose')
        },
    }
}
</script>

<style scoped>
.scroll::-webkit-scrollbar{
    width:0;
}

.cartclose{
    animation: cartclose 1s ease-in-out forwards;
}

@keyframes cartclose{
    from{
        right: 0;
    }
    to{
        right: -100%;
    }
}
</style>