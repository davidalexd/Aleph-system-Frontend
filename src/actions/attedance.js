import { types } from 'src/types/types'
import { fetchConToken } from '../helper/fetch'
import { finishLoading, startLoading } from './ui'

export const startUpdateAttendance = (data) => {
  return async (dispatch) => {
    dispatch(startLoading())
    const { file } = data
    let formData = new FormData()
    formData.append('excel', file)
    //formData.append('namefile', file.name)
    try {
      const resp = await fetchConToken(
        'upload/excel',
        formData,
        'POST',
      )
      const body = await resp.json()
      if (body.message) {
        console.log(body.message)

        dispatch(finishLoading())
      }
      dispatch(finishLoading())
    } catch (error) {
      dispatch(finishLoading())
      console.log(error, 'data no actualizada')
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
        console.log('error no existe el token')
      }
    }catch(error){
      console.log(error)
    }

  }
}

export const checkingFininsh = ()=>({type:types.authCheckingFinish})
