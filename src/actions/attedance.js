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

const Update = (data) => ({
  type: types.attendanceUpdate,
  payload: data,
})


const UpdateDashboard = (data) => ({
  type: types.attendanceDashboardUpdate,
  payload: data,
})


export const getAttendance = ()=>{
  return async(dispatch)=>{
    //dispatch(startLoading())
    try{
      const resp = await fetchConToken('attendances');
      const body= await resp.json();
      if(body.data){
        const {dataAttendance,dateRegister,dataAllStatistic}=body.data
        dispatch(Update(dataAttendance))
        dispatch(UpdateDashboard({dateRegister,dataAllStatistic}))
      }else{
        console.log('error hable con el administrador')
      }
      //dispatch(finishLoading())
    }catch(error){

      console.log(error)
    }

  }
}

const updateUser=(data)=>({
  type:types.attendanceUser,
  payload:data
})
export const getAttendanceUser= ()=>{
  return async(dispatch)=>{
    dispatch(startLoading())
    try{

      const resp = await fetchConToken('attendances/user');
      const body= await resp.json();
      if(body){
        dispatch(updateUser(body))
      }else{
        console.log('error hable con el administrador')
      }
      dispatch(finishLoading())
    }catch(error){
      dispatch(finishLoading())
      console.log(error)
    }

  }
}



export const eventAttendanceFilter = (attendances) => ({
  type: types.attendanceFilter,
  payload: attendances,
})

export const checkingFininsh = ()=>({type:types.authCheckingFinish})
