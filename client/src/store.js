import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMateries: {},
    materis: []
  },
  mutations: {
    currMateriMutation (state, payload) {
      console.log('masuk mutaion')
      console.log('mutation get payload => ', payload)
      state.currentMateries = payload
    },
    pushDataMutation (state, payload) {
      state.materis = payload
    }
  },
  actions: {
    getAllMateri ({commit}, payload) {
      axios.get('http://localhost:3000/topics', {
        headers: { token: payload }
      })
        .then((response) => {
          let data = response.data.topicData
          commit('pushDataMutation', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    currentMateri ({commit}, id) {
      axios.get(`http://localhost:3000/topics/${id}`)
      .then((response)=> {
        let data = response.data.result
        let datas = {
          id: data._id,
          image: data.image,
          intro: data.intro,
          phase: data.phase,
          title: data.title,
          content: data.content
        }
        commit('currMateriMutation', datas)
      })
      .catch((err) => {
        console.log(err)
      })
      // console.log('masuk action store')
      // commit('currMateriMutation', payload)
    },
    addMateri ({commit}, payload) {
      let token = localStorage.getItem('token')

      axios.post('http://localhost:3000/topics/add', payload, { headers: { token: token } })
        .then(function (response) {
          console.log(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getMateriByPhase ({commit}, payload) {
      axios.get('http://localhost:3000/topics/byphase', {
        headers: { token: payload }
      })
        .then((response) => {
          let data = response.data.topicData
          console.log(data)
          commit('pushDataMutation', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
