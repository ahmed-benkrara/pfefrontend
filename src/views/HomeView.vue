<template>
    <div>
        hello from home view
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'

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
    }
}
</script>