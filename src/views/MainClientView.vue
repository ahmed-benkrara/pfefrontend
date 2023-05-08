<template>
    <div>
        <NavComponent/>
        <router-view/>
    </div>
</template>

<script>
import NavComponent from '@/components/client/NavComponent.vue'

export default {
  name: 'MainClientView',
  components: {
    NavComponent
  }
}
</script>