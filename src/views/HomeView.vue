<template>
  <div>
    <HomeHeader/>
    <OurFeatures/>
    <UniquePacks/>
    <QuoteSection/>
    <UniqueModules/>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import HomeHeader from '@/components/client/HomeHeader.vue'
import OurFeatures from '@/components/client/OurFeatures.vue'
import UniquePacks from '@/components/client/UniquePacks.vue'
import QuoteSection from '@/components/client/QuoteSection.vue'
import UniqueModules from '@/components/client/UniqueModules.vue'

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
      HomeHeader, OurFeatures, UniquePacks, QuoteSection, UniqueModules
    }
}
</script>