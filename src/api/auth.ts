import store from '@/store'
import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'

type User = {
  email: string
  password: string
}

export const login = async (payload: User): Promise<string> => {
  const auth = getAuth()
  try {
    const userResponse = await signInWithEmailAndPassword(auth, payload.email, payload.password)
    const loggedUser = { ...userResponse.user }

    store.commit('user/setUser', loggedUser)

    return 'successful login'
  } catch (error: any) {
    return error.message
  }
}

export const registration = async (payload: User): Promise<string> => {
  const auth = getAuth()
  try {
    const userResponse = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
    const loggedUser = { ...userResponse.user }

    store.commit('user/setUser', loggedUser)

    return 'successful registration'
  } catch (error: any) {
    return error.message
  }
}

export const logout = async (): Promise<string> => {
  const auth = getAuth()
  try {
    const logOut = await signOut(auth)
    return 'Sign-out successful'
  } catch (error: any) {
    return error.message
  }
}
