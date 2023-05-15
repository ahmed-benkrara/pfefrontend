<template>
    <div>
        <ContactHeader/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import ContactHeader from '@/components/client/ContactHeader.vue'

export default {
    name : 'ContactView',
    mounted() {
        useHead({
        title: `Contact Us | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    },
    components: {
        ContactHeader
    }
}
</script>

<style scoped>
</style>