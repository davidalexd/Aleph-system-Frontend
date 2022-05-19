import { types } from 'src/types/types'
import { finishLoading, startLoading } from './ui'
import {fetchConToken, fetchSinToken} from '../helper/fetch'

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading())
    try {
      const resp = await fetchSinToken('auth', {email,password},'POST');
      const body = await resp.json();
    
      if (body.ok) {
        localStorage.setItem('token',body.token);
        localStorage.setItem('token-init-date',new Date().getTime())
        dispatch(login({uid:body.uid,name:body.name}))
        dispatch(finishLoading())
      }else{
        console.log(body.msg,"error")
      }
      dispatch(finishLoading())
    } catch (error) {
      dispatch(finishLoading())
      console.log(error,"usuario no logeado")
    }
  }
}



export const startRegisterEmail = (email, password,name) => {
  return async (dispatch) => {
    dispatch(startLoading())
    try {
      const resp = await fetchSinToken('auth/new', {email,password,name},'POST');
      const body = await resp.json();
 
      if (body.ok) {
        localStorage.setItem('token',body.token);
        localStorage.setItem('token-init-date',new Date().getTime())
        dispatch(login({uid:body.uid,name:body.name}))
        dispatch(finishLoading())
      }else{
        console.log(body.msg,"error")
      }
      dispatch(finishLoading())
    } catch (error) {
      dispatch(finishLoading())
      console.log(error,"usuario no registrado")
    }
  }
}





export const startChecking = ()=>{
  return async(dispatch)=>{
    try{
      const resp = await fetchConToken('auth/renew');
      const body= await resp.json();
      if(body.ok){
        localStorage.setItem('token',body.token);
        localStorage.setItem('token-init-data',new Date().getTime());
        dispatch(login({uid:body.uid,name:body.name}))
      }else{
        dispatch(checkingFininsh());
        console.log('error no existe el token')
      }
    }catch(error){
      console.log(error)
    }

  }
}
export const checkingFininsh = ()=>({type:types.authCheckingFinish})
export const logout = () => ({type: types.authLogout})

export const login = (user) => ({
  type: types.authLogin,
  payload:user,
})

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.clear();
     dispatch(logout())
  }
}


