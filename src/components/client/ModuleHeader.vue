<template>
    <div class="w-full sm:h-[200px] md:h-[400px] plx flex justify-center items-center">
        <div class="w-fit text-center text-white font-poppins">
            <h1 class="sm:text-[35px] md:text-[40px] font-[500]">Our Modules</h1>
        </div>
    </div>
    <div>
        <div class="w-full h-fit py-16 sm:px-4 md:px-4 md:flex">
            <div class="sm:w-full md:w-[20%] md:px-4 py-4">
                <div class="space-y-2">
                    <details open class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                        <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                            <span class="text-sm font-medium"> Module Name </span>

                            <span class="transition group-open:-rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div class="border-t border-gray-200 bg-white">
                            <header class="flex items-center justify-between p-4">
                                <span class="text-sm text-gray-700">Filter by module name</span>

                                <button
                                type="button"
                                class="text-sm text-gray-900 underline underline-offset-4"
                                >
                                Reset
                                </button>
                            </header>

                            <div class="border-t border-gray-200 p-4">
                                <div class="flex justify-between gap-4">
                                    <input type="text" placeholder="Module Name" class="block w-full outline-none border-gray-200 sm:text-sm"/>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
                <div class="space-y-2 mt-8">
                    <details open class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                        <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                            <span class="text-sm font-medium"> Price </span>

                            <span class="transition group-open:-rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div class="border-t border-gray-200 bg-white">
                            <header class="flex items-center justify-between p-4">
                                <span class="text-sm text-gray-700"> The highest price is $600 </span>

                                <button
                                type="button"
                                class="text-sm text-gray-900 underline underline-offset-4"
                                >
                                Reset
                                </button>
                            </header>

                            <div class="border-t border-gray-200 p-4">
                                <div class="flex justify-between gap-4">
                                <label for="FilterPriceFrom" class="flex items-center gap-2">
                                    <span class="text-sm text-gray-600">$</span>
                                    <input type="number" id="from" placeholder="From" min="0" class="w-full outline-none border-gray-200 sm:text-sm"/>
                                </label>

                                <label for="FilterPriceTo" class="flex items-center gap-2">
                                    <span class="text-sm text-gray-600">$</span>

                                    <input
                                    type="number"
                                    id="FilterPriceTo"
                                    placeholder="To"
                                    min="0" class="w-full outline-none border-gray-200 sm:text-sm"
                                    />
                                </label>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
            <div class="sm:w-full md:w-[80%] sm:mt-10 md:mt-0">
                <div class="flex justify-between mb-2">
                    <p class="text-sm font-[500] text-gray-700"> Showing <span class="font-bold">9</span> results from total <span class="font-bold">30</span> </p>
                    <!-- <p class="text-sm font-[500] text-gray-700 flex"> Sort by</p> -->
                    <div class="relative inline-block">
                        <!-- <button
                        @click="toggleDropdown"
                        class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                        Sort By
                        </button> -->
                        <p @click="toggleDropdown" class="cursor-pointer text-sm font-[500] text-gray-700 flex"> Sort by</p>
                        <div
                        v-if="isDropdownOpen"
                        class="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10"
                        >
                        <p
                            @click="sortBy('name')"
                            class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Name
                        </p>
                        <p
                            @click="sortBy('date')"
                            class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Date
                        </p>
                        <p
                            @click="sortBy('price')"
                            class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Price
                        </p>
                        </div>
                    </div>

                </div>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 lg:grid-cols-5">
                    <div class="mt-4 overflow-hidden block sm:mx-auto md:mx-0 cursor-pointer">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[220px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 overflow-hidden block sm:mx-auto md:mx-0 cursor-pointer">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[220px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 overflow-hidden block sm:mx-auto md:mx-0 cursor-pointer">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[220px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 overflow-hidden block sm:mx-auto md:mx-0 cursor-pointer">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[220px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 overflow-hidden block sm:mx-auto md:mx-0 cursor-pointer">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[220px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 overflow-hidden block sm:mx-auto md:mx-0 cursor-pointer">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[220px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 overflow-hidden block sm:mx-auto md:mx-0 cursor-pointer">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[220px] sm:h-[210px] md:h-[250px] object-cover block" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <p class="sm:text-[12px] md:text-[16px] font-poppins font-[400]">
                                    Human Resource
                                </p>
                                <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">58$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    name : 'ModuleHeader',
    data(){
        return{
            isDropdownOpen: false
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        sortBy(option) {
            console.log('Sorting by:', option);
            this.isDropdownOpen = false;
        }
    }
}
</script>

<style>
    .plx{
        background-image: url('https://images.pexels.com/photos/4872023/pexels-photo-4872023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: rgba(0, 0, 0, 0.247);
        background-blend-mode: multiply;
        background-position: top;
    }
</style>