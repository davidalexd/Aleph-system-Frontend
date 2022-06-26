import { fetchConToken } from 'src/helper/fetch'
import { filtrarDatos } from 'src/helper/filttrarDatos'
import { prepareEventsPermission } from 'src/helper/prepareEventsPermission'
import { types } from 'src/types/types'
import Swal from 'sweetalert2'
import { finishLoading, startLoading } from './ui'
//agregar nuevo permiso
export const eventStartAddNew = (data) => {
  return async () => {
    const dataRef= filtrarDatos(data)
    //getState const { uid, name } = getState().auth
    try {
      const resp = await fetchConToken('permissions', dataRef, 'POST')
      const body = await resp.json()
      if (body) {
        Swal.fire({
          icon: 'success',
          title: 'Datos Guardados',
          text: `Su autorizacion con id ${body.data.id} ha sido enviada`,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}


//actualizar estado de permiso 
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
        dispatch(eventUpdated({...permission,updated_at:body.update_at}))
        Swal.fire({
          icon: 'success',
          title: 'Datos Actualizados',
          text: body.message,
        })
      }
    }catch(error){
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error',
        text: 'Datos no actualizados',
      })
    }
  }
}

//traer los datos de un permiso
export const eventSetActive = (permission) => ({
  type: types.eventSetActive,
  payload: permission,
});
//traer todos los permisos 
const eventPermissionsLoaded=(permissions)=>({
  type:types.eventLoaded,
  payload:permissions
})
export const getPermissions = ()=>{
  return async(dispatch)=>{
    dispatch(startLoading())
    try{
      const resp =await fetchConToken('permissions');
      const body=await resp.json();
      const permissions = prepareEventsPermission(body.data)
      dispatch(eventPermissionsLoaded(permissions));
      dispatch(finishLoading())
    }catch(error){
      dispatch(finishLoading())
      console.log(error)
    }

  }
}


//traer todos los permisos de un respectivo usuario 
export const getUserPermissions = ()=>{
  return async(dispatch)=>{
    dispatch(startLoading())
    try{
      const resp =await fetchConToken('users/permissions');
      const body=await resp.json();
      const permissions = prepareEventsPermission(body.data)
      dispatch(eventPermissionsLoaded(permissions));
      dispatch(finishLoading())
    }catch(error){
      dispatch(finishLoading())
      console.log(error)
    }
  }
}

//filtrar todos los permisos 
export const eventPermissionsFilter=(permissions)=>({
  type:types.eventFilter,
  payload:permissions
})

//eliminar evento seleccionado
export const eventClearActive = () => ({
  type: types.eventClearActive,
});










