<template>
  <div class="home">
    <img style="width: 100%;" src="https://static.cdn-cdpl.com/wp-images/2016/10/hacktiv8_cover-image(700x350-crop).jpg" class="img-fluid" alt="Responsive image">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    login: function () {
      axios.post('http://localhost:3000/login', {
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

}
</script>
