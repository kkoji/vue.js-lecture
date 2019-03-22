<template>
  <div class="home">
    <Addresses/>
  </div>
</template>

<script>
// @ is an alias to /src
import Addresses from '@/components/Addresses.vue'

export default {
  name: 'home',
  components: {
    Addresses
  }
}
</script>
