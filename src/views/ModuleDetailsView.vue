<template>
    <div>
        <DetailsHeader/>
        <ModuleDetails/>
        <SuggestModules/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import ModuleDetails from '@/components/client/ModuleDetails.vue'
import DetailsHeader from '@/components/client/DetailsHeader.vue'
import SuggestModules from '@/components/client/SuggestModules.vue'

export default {
    name : 'ModuleDetailsView',
    mounted(){
        useHead({
        title: `Module Details | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    },
    components: {
        ModuleDetails, DetailsHeader, SuggestModules
    }
}
</script>

<style scoped>

</style>