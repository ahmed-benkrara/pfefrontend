<template>
    <div>
        <NavComponent/>
        <router-view/>
        <ClientFooter/>
    </div>
</template>

<script>
import NavComponent from '@/components/client/NavComponent.vue'
import ClientFooter from '@/components/client/ClientFooter.vue'

export default {
  name: 'MainClientView',
  components: {
    NavComponent, ClientFooter
  }
}
</script>