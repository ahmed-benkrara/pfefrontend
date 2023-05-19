<template>
    <div>
        <PackDetailsHeader/>
        <PackDetails/>
        <SuggestPacks/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import PackDetails from '@/components/client/PackDetails.vue'
import PackDetailsHeader from '@/components/client/PackDetailsHeader.vue'
import SuggestPacks from '@/components/client/SuggestPacks.vue'

export default {
    name : 'PackDetailsView',
    mounted(){
        useHead({
        title: `Package Details | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    },
    components: {
        PackDetails, PackDetailsHeader, SuggestPacks
    }
}
</script>

<style scoped>

</style>