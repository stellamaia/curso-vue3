import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Stella',
      last_name: 'Luna',
      email: 'ella@luna.com',
    },
    products: [],
    cart: [],
  },
  getters: {
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  }
})
