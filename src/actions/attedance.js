import { types } from 'src/types/types'
import { fetchArchivoConToken, fetchConToken } from '../helper/fetch'
import { finishLoading, startLoading } from './ui'
import Swal from 'sweetalert2'
export const startUpdateAttendance = (data) => {
  return async (dispatch) => {
    dispatch(startLoading())
    const { file } = data
    let formData = new FormData()
    formData.append('excel', file)
    try {
      const resp = await fetchArchivoConToken(
        'upload/excel',
        formData,
        'POST',
      )
      const body = await resp.json()
      if (body.message) {
        Swal.fire({
          icon: 'success',
          title: 'Datos Actualizados',
          text: body.message,
        })
        
        dispatch(finishLoading())
      }
      dispatch(finishLoading())
    } catch (error) {
      dispatch(finishLoading())
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error',
        text: 'Datos no actualizados',
      })
    }
  }
}

export const Update = (data) => ({
  type: types.attendanceUpdate,
  payload: data,
})


export const getAttendance = ()=>{
  return async(dispatch)=>{
    try{
      const resp = await fetchConToken('attendances');
      const body= await resp.json();
      if(body.data){
        dispatch(Update({ attendanceUpdated: body.data }))
      }else{
        console.log('error hable con el administrador')
      }
    }catch(error){
      console.log(error)
    }

  }
}

export const checkingFininsh = ()=>({type:types.authCheckingFinish})
