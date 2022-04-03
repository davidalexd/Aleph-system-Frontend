import { types } from 'src/types/types'
import { finishLoading, startLoading } from './ui'

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading())
    let raw = JSON.stringify({
      email: email,
      password: password,
    })
    let requestOptions = {
      method: 'POST',
      body: raw,
    }
    try {
      const resp = await fetch('http://127.0.0.1:8000/api/login', requestOptions)
      const { data, access } = await resp.json()
      document.cookie = `token=${access.token}; max-age=${60 * 3} path=/; samesite=strict`
      //localStorage.setItem('user', `${data.first_name} ${data.last_name}`)
      dispatch(login(data.id, `${data.first_name} ${data.last_name}`))
      dispatch(finishLoading())
    } catch (error) {
      dispatch(finishLoading())
      console.log(error)
    }
  }
}
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
})

export const startLogout = () => {
  return (dispatch) => {
    document.cookie = `token=; max-age=0`
    dispatch(logout())
  }
}

export const logout = () => ({
  type: types.logout,
})
