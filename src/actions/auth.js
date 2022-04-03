import { types } from 'src/types/types'
import { finishLoading, startLoading } from './ui'

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    let raw = JSON.stringify({
      email: email,
      password: password,
    })
    let requestOptions = {
      method: 'POST',
      body: raw,
    }

    fetch('http://127.0.0.1:8000/api/login', requestOptions)
      .then((resp) => resp.json())
      .then(({ data, access }) => {
        document.cookie = `token=${access.token}; max-age=${60 * 3} path=/; samesite=strict`
        dispatch(login(data.id, `${data.first_name} ${data.last_name}`))
        dispatch(finishLoading())
      })
      .catch((e) => {
        console.log(e)
        dispatch(finishLoading())
      })
    // //aqui hacer el fetch ala api
    // setTimeout(() => {
    //   dispatch(login(123, 'pedro'))
    // }, 3500)
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
  return async (dispatch) => {
    document.cookie = `token=; max-age=0`
    dispatch(logout())
  }
}

export const logout = () => ({
  type: types.logout,
})
