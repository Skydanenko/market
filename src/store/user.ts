export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    uid: null,
    email: '',
  },

  mutations: {
    setUser(state: any, newUser: any) {
      const { uid, email } = newUser

      state.isAuthenticated = true
      state.uid = uid
      state.email = email
    },

    clearUser(state: any) {
      state.isAuthenticated = false
      state.uid = null
      state.email = ''
    },
  },

  getters: {
    getLoggedUser: (state: any) => state,
  },
}
