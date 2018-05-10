<template>
  <div class="home">
    <img style="width: 100%;" src="https://static.cdn-cdpl.com/wp-images/2016/10/hacktiv8_cover-image(700x350-crop).jpg" class="img-fluid" alt="Responsive image">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      myHTML: ''
    }
  },
  components: {
    HelloWorld
  }

}
</script>
