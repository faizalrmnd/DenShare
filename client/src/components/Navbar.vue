<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">DenShare</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#"><router-link to="/">Home</router-link> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/materi">Materi</router-link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/addmateri">Add Materi</router-link></a>
            </li>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Login
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" v-model="password" class="form-control" placeholder="Password">
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" @click="login" data-dismiss="modal" class="btn btn-primary">Login</button>
                </div>
                </div>
            </div>
            </div>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#registerModal">
            Register
            </button>

            <!-- Modal -->
            <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Register Modal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" v-model="name" class="form-control" aria-describedby="emailHelp" placeholder="Enter name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" v-model="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Select role</label>
                                <select v-model="role" class="form-control">
                                    <option value="student">Student</option>
                                    <option value="instructor">Instructor</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Select Phase</label>
                                <select v-model="phase" class="form-control">
                                    <option value="0">Phase 0</option>
                                    <option value="1">Phase 1</option>
                                    <option value="2">Phase 2</option>
                                    <option value="3">Phase 3</option>
                                </select>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" @click="register" data-dismiss="modal" class="btn btn-primary">Login</button>
                </div>
                </div>
            </div>
            </div>
            <!-- Button trigger modal -->
            <button @click="logout" type="button" class="btn btn-danger">
            Logout
            </button>

        </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      role: '',
      phase: ''
    }
  },
//   created () {
//       this.localstoragee = this.$store.state.localstoragee
//   },
  methods: {
    login: function () {
        let self = this
    
        axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password
        })
            .then(function (response) {
            console.log(response)
            localStorage.setItem('role', response.data.role)
            localStorage.setItem('phase', response.data.phase)
            localStorage.setItem('token', response.data.token)
            self.$router.push('/materi')
            })
            .catch(function (error) {
            console.log(error)
            })
    },
    register: function () {
        let self = this
    
        axios.post('http://localhost:3000/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
            phase: this.phase,
        })
            .then(function (response) {
            console.log(response)
            localStorage.setItem('role', response.data.role)
            localStorage.setItem('phase', response.data.phase)
            localStorage.setItem('token', response.data.token)
            self.$router.push('/materi')
            })
            .catch(function (error) {
            console.log(error)
            })
    },
    logout: function () {
        localStorage.removeItem('role')
        localStorage.removeItem('phase')
        localStorage.removeItem('token')
        this.$router.push('/')
    }
  }
}
</script>

<style>
.bg-primary {
  background-color: #FF8F00 !important;
}
.navbar-brand {
  color: white !important;
}
a {
  color: rgb(255, 228, 193) !important;
}
a:hover {
  text-decoration: none;
  /* color: white !important */
}
</style>
