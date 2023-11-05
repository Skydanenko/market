import Vue from 'vue'
import Vuex from 'vuex'
import products from '../store/products'
import user from '@/store/user'
import cart from '@/store/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {
    initializeStore(state: any) {
      const savedState = localStorage.getItem('state')
      if (savedState) {
        this.replaceState({ ...state, ...JSON.parse(savedState) })
      }
    },
  },
  actions: {},
  modules: {
    products,
    user,
    cart,
  },
})
