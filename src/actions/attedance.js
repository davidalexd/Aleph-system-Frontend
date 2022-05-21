import { types } from 'src/types/types'
import {fetchConToken} from '../helper/fetch'


export const startUpdateAttendance = (data) => {
    return async (dispatch) => {
      //dispatch(startLoading())
      try {
        const resp = await fetchConToken('attendances/dataAttendance', {dataAttendance:data},'POST');
     
        const body = await resp.json();
        if (body.ok) {

          dispatch(Update({attendanceUpdated:body.data}))
        
          //dispatch(finishLoading())
       }else{
         console.log(body.msg,"error")
        }
        
        //dispatch(finishLoading())
      } catch (error) {
        
        //dispatch(finishLoading())
        
        console.log(error,"data no actualizada")
      }
    }
  }
  

  export const Update = (data) => ({
    type: types.attendanceUpdate,
    payload:data,
  })