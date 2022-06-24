import { types } from 'src/types/types'
import { fetchArchivoConToken, fetchConToken } from '../helper/fetch'
import { finishLoading, startLoading } from './ui'
import Swal from 'sweetalert2'
export const startUpdateAttendance = (data) => {
  return async (dispatch) => {
    dispatch(checkingStart())
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
      dispatch(checkingFininsh())
    } catch (error) {
      dispatch(checkingFininsh())
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
export const getAttendanceUser= (idUser=null)=>{
  return async(dispatch)=>{
    //dispatch(startLoading())
    try{
      if(idUser){
        const resp = await fetchConToken(`attendances/user/${idUser}`);
        const body= await resp.json();
        if(body){
          dispatch(updateUser(body))
        }
      }else{
        const resp = await fetchConToken(`attendances/user`);
        const body= await resp.json();
        if(body){
          dispatch(updateUser(body))
        }
      }
      //dispatch(finishLoading())
    }catch(error){
      //dispatch(finishLoading())
      console.log(error)
    }

  }
}
const checkingStart = ()=>({type:types.attendanceCheckingStart})
const checkingFininsh = ()=>({type:types.attendanceCheckingFinish})


export const eventAttendanceFilter = (attendances) => ({
  type: types.attendanceFilter,
  payload: attendances,
})

//filtrar registros del propio usuario 
export const eventUserAttendanceFilter=(attendancesUser)=>({
  type:types.myattendanceFilter,
  payload:attendancesUser
})



