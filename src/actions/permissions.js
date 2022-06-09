import moment from 'moment'
import { fetchConToken } from 'src/helper/fetch'
import { filtrarDatos } from 'src/helper/formatedata'
import { prepareEventsPermission } from 'src/helper/prepareEventsPermission'
import { types } from 'src/types/types'
import Swal from 'sweetalert2'
export const eventStartAddNew = (data) => {
  return async (dispatch, getState) => {
    const dataRef= filtrarDatos(data)
    // const { uid, name } = getState().auth
    try {
      const resp = await fetchConToken('permissions', dataRef, 'POST')
      const body = await resp.json()
      if (body) {
        // data.id=body.id
        //   data.user={
        //     _id:uid,
        //     name:name
        //   }
        // dispatch(permissionAddNew(data))
      // console.log(body)
        Swal.fire({
          icon: 'success',
          title: 'Datos Guardados',
          text: `Su autorizacion con id ${body.id} ha sido enviada`,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

// const permissionAddNew = (permission) => ({
//   type: types.eventAddNew,
//   payload: permission,
// })

const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});
export const eventStartUpdate=(permission)=>{
  return async(dispatch)=>{
    try{
      const resp =await fetchConToken(`permissions/${permission.id}`,{state:permission.state},'PUT');
      const body = await resp.json()
      if(body.message){
        dispatch(eventUpdated(permission))
        Swal.fire({
          icon: 'success',
          title: 'Datos Actualizados',
          text: body.message,
        })
      }
    }catch(error){
      console.log(error)
    }
  }
}


export const eventSetActive = (permission) => ({
  type: types.eventSetActive,
  payload: permission,
});

export const getPermissions = ()=>{
  return async(dispatch)=>{
    try{
      const resp =await fetchConToken('permissions');
      const body=await resp.json();
      const permissions = prepareEventsPermission(body.data)
      dispatch(eventPermissionsLoaded(permissions));
    }catch(error){
      console.log(error)
    }

  }
}

const eventPermissionsLoaded=(permissions)=>({
  type:types.eventLoaded,
  payload:permissions
})
