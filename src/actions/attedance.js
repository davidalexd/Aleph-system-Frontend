import { types } from 'src/types/types'
import { fetchConToken } from '../helper/fetch'
//import{filtrarDatos} from '../helper/formatedata'

export const startUpdateAttendance = (data) => {
  return async (dispatch) => {
    //dispatch(startLoading())
    const { file } = data
    let formData = new FormData()
    formData.append('file', file)
    formData.append('namefile', file.name)
    try {
      const resp = await fetchConToken(
        'attendances/dataAttendance',
        formData,
        'POST',
      )
      const body = await resp.json()
      if (body.ok) {
        console.log(body)

        dispatch(Update({ attendanceUpdated: body.data }))

        //dispatch(finishLoading())
      } else {
        console.log(body.msg, 'error')
      }

      //dispatch(finishLoading())
    } catch (error) {
      //dispatch(finishLoading())

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
      const resp = await fetchConToken('attendances/dataAttendance');
      const body= await resp.json();
      if(body.ok){
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
