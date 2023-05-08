<template>
    <div>
        hello from home view
        {{ this.$store.getters.getData }}
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
    name : 'HomeView',  
    mounted() {
        this.$store.dispatch('fetchData')
        console.log(process.env)
        useHead({
        title: `Home | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    }
}
</script>