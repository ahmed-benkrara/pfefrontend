<template>
    <div>
        <ModuleHeader/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ModuleHeader from '@/components/client/ModuleHeader.vue'

export default {
    name : 'ModuleView',
    mounted(){
        AOS.init({
            once : true
        })

        useHead({
        title: `Modules | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    },
    components: {
        ModuleHeader
    }
}
</script>
