import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user:[]
  },

  mutations: {
    User(state, payload) {
      state.user=payload
    }
  },
  actions: {
   async registerUser({ commit }) {
      const response = await axios.post()
      commit('User',response)
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
})
