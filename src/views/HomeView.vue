<template>
  <div>
    <HomeHeader/>
    <OurFeatures/>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import HomeHeader from '@/components/client/HomeHeader.vue'
import OurFeatures from '@/components/client/OurFeatures.vue'

export default {
    name : 'HomeView', 
    mounted() {
        useHead({
        title: `Home | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    },
    components: {
      HomeHeader, OurFeatures
    }
}
</script>