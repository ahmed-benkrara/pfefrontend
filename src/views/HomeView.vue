<template>
  <div>
    <HomeHeader/>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import HomeHeader from '@/components/client/HomeHeader.vue'

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
      HomeHeader
    }
}
</script>