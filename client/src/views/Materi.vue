<template>
  <div class="materi">
    <div class="container">
      <ListMateri></ListMateri>
    </div>
  </div>
</template>

<script>
import ListMateri from '@/components/ListMateri.vue'

export default {
  name: 'Materi',
  created () {
    if(localStorage.getItem('token') == null) {
      this.$router.push('/')
    }
  },
  components: {
    ListMateri
  }
}
</script>

<style>

</style>
