<template>
  <div class="list-materi">
    <div class="container">
      <h1>Daftar Materi</h1>
      <div class="row list">
        <ul>
          <li v-for="(materi, index) in materis" :key="index">
            <div class="card">
              <img class="card-img-top" :src="materi.image" alt="Card image cap" @click="detailMateri(materi)">
              <div class="card-body">
                <!-- <h5 class="card-title"><router-link class="title" to="detailmateri"> {{ materi.title }} </router-link></h5> -->
                <h5 class="card-title" @click="detailMateri(materi)">{{ materi.title }}</h5>
                <!-- <p class="card-text">{{ introLimiter(materi.intro) }}</p> -->
                <p class="card-text">{{ materi.intro }}</p>
              </div>
            </div>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ListMateri',
  data ()  {
    return {
      dataByPhase: []
    }
  },
  created () {
    let payload = localStorage.getItem('token')
    let phase = localStorage.getItem('phase')
    let role = localStorage.getItem('role')
    console.log('phase ===============>', phase)

    if (role != 'instructor') {
      this.$store.dispatch('getMateriByPhase', payload)
    } else {
      this.$store.dispatch('getAllMateri', payload)
    }
  },
  computed: {
    ...mapState([
      'materis'
    ])
  },
  methods: {
    ...mapActions([
      'currentMateri'
    ]),
    introLimiter (val) {
      // return val.substring(0, 50) + '...'
      return val
    },
    detailMateri (materi) {
      this.$store.dispatch('currentMateri', materi._id)
      this.$router.push(`/detailmateri`)

      console.log('materi ===> ', materi)
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.clear {
  clear: both;
}
.list > ul {
  /* background: green; */
  margin: 0;
  padding: 0;
}
.list > ul > li {
  width: 212px !important;
  list-style: none;
  float: left;
  margin: 5px 5px !important;
}
.list > ul > li:hover {
  /* width: 212px !important;
  margin: 4px 5px !important;
  border: thin solid red; */
}
.card-img-top {
  height: 200px;
}
.card-img-top:hover {
  cursor: pointer;
}
.card-body {
  /* background: rgb(223, 223, 223); */
  height: 280px;
}
.title {
  color: red !important;
}

.card-title:hover  {
  cursor: pointer;
  color: red;
}

@media only screen and (max-width: 375px) {
  h1 {
    font-size: 25px;
  }
  .list > ul > li {
    width: 45% !important;
    list-style: none;
    float: left;
  }
  .list > ul > li:hover {
    /* width: 44%px !important;
    margin: 4px 5px !important;
    border: thin solid red; */
  }
  .card-img-top {
    height: 100px;
  }
  .card-body {
    /* background: rgb(223, 223, 223); */
    height: 130px;
  }
  .card-title {
    font-size: 16px;
    font-weight: bold;
    margin: -10px -10px -10px -10px;
  }
  .card-text {
    font-size: 13px !important;
    line-height: 1.2em;
    margin: 20px -10px 20px -10px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 425px) {
  .card {
    /* width: 100% !important; */
  }
  .list > ul > li {
    width: 47% !important;
    list-style: none;
    float: left;
  }
  .list > ul > li:hover {
    /* width: 40%px !important;
    margin: 4px 5px !important;
    border: thin solid red; */
  }
  .card-img-top {
    height: 120px;
  }
  .card-body {
    /* background: rgb(223, 223, 223); */
    height: 110px;
  }
  .card-title {
    font-size: 16px;
    font-weight: bold;
    margin: -10px -10px -10px -10px;
  }
  .card-text {
    font-size: 13px !important;
    line-height: 1.2em;
    margin: 20px -10px 20px -10px;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .card {
    width: 100% !important;
  }
  .list > ul > li {
    width: 23% !important;
    list-style: none;
    float: left;
  }
  .card-img-top {
    height: 150px;
  }
  .card-body {
    /* background: rgb(223, 223, 223); */
    height: 150px;
  }
  .card-title {
    font-size: 16px;
    font-weight: bold;
    margin: -10px -10px -10px -10px;
  }
  .card-text {
    font-size: 14px !important;
    line-height: 1.2em;
    margin: 20px -10px 20px -10px;
  }
  .btn.btn-primary {
    font-size: 14px;
    padding: 2px 5px;
    margin-left: -10px;
  }
}
@media only screen and (min-width: 858px) {

}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  ul {
    margin: 0;
    padding: 0;
  }
  .clear {
    clear: both;
  }
  .list > ul {
    /* background: green; */
    margin: 0;
    padding: 0;
  }
  .list > ul > li {
    width: 212px !important;
    list-style: none;
    float: left;
    margin: 5px 5px !important;
  }
  .card-img-top {
    /* height: 200px; */
  }
  .card-body {
    /* background: rgb(223, 223, 223); */
    height: 250px;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1024px) {
  ul {
    margin: 0;
    padding: 0;
  }
  .clear {
    clear: both;
  }
  .list > ul {
    /* background: green; */
    margin: 0;
    padding: 0;
  }
  .list > ul > li {
    width: 212px !important;
    list-style: none;
    float: left;
    margin: 5px 5px !important;
  }
  .card-body {
    height: 120px;
  }
}
</style>
