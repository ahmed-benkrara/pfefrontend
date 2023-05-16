<template>
    <div>
        <PackHeader/>
        <PackCards/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PackHeader from '@/components/client/PackHeader.vue'
import PackCards from '@/components/client/PackCards.vue'

export default {
    name : 'PacksView',
    mounted(){
        AOS.init({
            once : true
        })

        useHead({
        title: `Packs | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    },
    components: {
        PackHeader, PackCards
    }

}
</script>

<style>

</style>