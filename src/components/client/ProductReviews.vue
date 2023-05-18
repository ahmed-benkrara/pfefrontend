<template>
    <div class="w-full h-fit sm:px-2 md:px-[50px] mt-[50px]">
        <h1 class="mb-8 font-[500] text-[20px]">Rating & Reviews</h1>
        <div class="mb-8 pb-8 border-b">
            <div class="mb-2">
                <i class="fa-solid fa-star text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-[#ffc107]"></i>
            </div>
            <p class="font-poppins text-[16px] font-[300]">Perfect Service</p>
            <p class="font-poppins text-[14px] font-[300] mt-2 sm:w-full md:max-w-[900px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis dicta, recusandae eum doloremque corporis, qui asperiores et quos aut quam ipsum, voluptatum accusamus eaque perspiciatis magni. Libero, tempore est!</p>
            <p class="mt-2 font-poppins text-[12px] text-[gray] font-[500]">By Jake Houston</p>
        </div>
        <div class="mb-8 pb-8">
            <div class="mb-2">
                <i class="fa-solid fa-star text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-[#ffc107]"></i>
                <i class="fa-solid fa-star text-[#ffc107]"></i>
            </div>
            <p class="font-poppins text-[16px] font-[300]">Perfect Service</p>
            <p class="font-poppins text-[14px] font-[300] mt-2 sm:w-full md:max-w-[900px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis dicta, recusandae eum doloremque corporis, qui asperiores et quos aut quam ipsum, voluptatum accusamus eaque perspiciatis magni. Libero, tempore est!</p>
            <p class="mt-2 font-poppins text-[12px] text-[gray] font-[500]">By Jake Houston</p>
        </div>
        <div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-x-4">
                <input type="text" placeholder="Full Name" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input type="text" placeholder="Email" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
            </div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-x-4">
                <input type="text" placeholder="Review Title" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <select class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                    <option value="" disabled selected>Rate</option>
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                </select>
            </div>
            <textarea placeholder="Review Message" class="bg-[#fafafa] resize-none text-[15px] outline-none px-4 py-[14px] h-[150px] border w-full block mb-4"></textarea>
            <button class="text-white bg-black font-[300] text-[14px] px-[20px] py-2">Submit Review</button>
        </div>
    </div>
</template>

<script>

export default {
    name : 'ProductReviews'
}
</script>

<style scoped>

</style>