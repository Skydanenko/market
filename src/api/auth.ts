import { instanceApi } from '@/api/instance'
import store from '@/store'

type User = {
  username: string
  password: string
}

export const login = async (payload: User): Promise<void> => {
  const userResponse = await instanceApi.post('auth/login', {
    username: payload.username,
    password: payload.password,
  })

  const loggedUser = { ...userResponse.data }

  store.commit('user/setUser', loggedUser)
}
