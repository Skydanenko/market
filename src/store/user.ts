export default {
  namespaced: true,
  state: {
    id: null,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: '',
    password: '',
  },

  mutations: {
    setUser(state: any, newUser: any) {
      const { id, username, email, firstName, lastName, gender, image, token } = newUser

      state.id = id
      state.username = username
      state.email = email
      state.firstName = firstName
      state.lastName = lastName
      state.gender = gender
      state.image = image
      state.token = token
    },

    setUsername(state: any, newUsername: string) {
      state.username = newUsername
    },

    setPassword(state: any, newPassword: string) {
      state.password = newPassword
    },
  },

  getters: {
    getLoggedUser: (state: any) => state,
  },
}
