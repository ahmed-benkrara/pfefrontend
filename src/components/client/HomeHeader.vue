<template>
<div class="w-[calc(100%-20px)] h-[600px] overflow-hidden mx-auto">
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item">
          <img class="w-full h-[600px] object-cover lg:object-top" src="https://images.pexels.com/photos/4872023/pexels-photo-4872023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3">
        </div>
        <div class="carousel-item">
            <img class="w-full h-[600px] object-cover" src="https://images.unsplash.com/photo-1517842536804-bf6629e2c291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Image 1">
        </div>
        <div class="carousel-item">
            <img class="w-full h-[600px] object-cover" src="https://images.pexels.com/photos/8133879/pexels-photo-8133879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2">
        </div>
        <div class="carousel-item">
          <img class="w-full h-[600px] object-cover lg:object-top" src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2">
        </div>
      </div>
      <div class="carousel-controls">
        <button class="bg-white text-black font-bold py-2 px-4 rounded-l" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="bg-white text-black font-bold py-2 px-4 rounded-r" @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
</div>
</template>

<script>

export default {
    name : 'HomeHeader', 
    data() {
        return {
        currentIndex: 0,
        numItems: 4,
        };
    },
    methods: {
        showSlide(index) {
        if (index < 0 || index >= this.numItems) {
            return;
        }
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        this.currentIndex = index;
        },
        nextSlide() {
        const newIndex = this.currentIndex + 1;
        const nextIndex = newIndex >= this.numItems ? 0 : newIndex;
        this.showSlide(nextIndex);
        },
        prevSlide() {
        const newIndex = this.currentIndex - 1;
        const prevIndex = newIndex < 0 ? this.numItems - 1 : newIndex;
        this.showSlide(prevIndex);
        },
    }, 
    mounted() {
        //setInterval(this.nextSlide, 5000);
    }
}
</script>

<style scoped>
    .carousel {
        overflow: hidden;
        position: relative;
    }

    .carousel-inner {
        display: flex;
        transition: transform 0.3s ease;
    }

    .carousel-item {
        flex: 0 0 100%;
        width: 100%;
    }

    .carousel-controls {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem;
    }
</style>