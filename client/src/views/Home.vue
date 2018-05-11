<template>
  <div class="home">
      <!-- <Navbar v-if="localStorage"></Navbar>
      <NavbarStudent v-if="!localStorage"></NavbarStudent> -->
    <img style="width: 100%;" src="https://static.cdn-cdpl.com/wp-images/2016/10/hacktiv8_cover-image(700x350-crop).jpg" class="img-fluid" alt="Responsive image">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavbarStudent from '@/components/NavbarStudent.vue'
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      email: '',
      password: '',
      localStorage: ''
    }
  },
  created () {
    if(localStorage.getItem('token') == null) {
      this.$router.push('/')
    }
    
    if(localStorage.getItem('role') == 'instructor') {
      this.localStorage = localStorage.getItem('token')
    }
  },
  components: {
    NavbarStudent,
    Navbar
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
