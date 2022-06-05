import moment from 'moment'
import { types } from 'src/types/types'
import Swal from 'sweetalert2'
const now = moment().minutes(0).seconds(0).add(1, 'hours')
export const eventStartAddNew = (permission) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth
    const data = { ...permission, idUser: uid, dateCreate: now.toDate() }
    try {
      const resp = await fetchConToken('permissions',data,'POST');
      const body = await resp.json();
      if(body.message){
          permission.id=body.permission.id
          permission.user={
            _id:uid,
            name:name
          }
        dispatch(permissionAddNew(permission))
        Swal.fire({
          icon: 'success',
          title: 'Datos Guardados',
          text: `Su autorizacion con ${body.permission.id} ha sido enviada`,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const permissionAddNew = (permission) => ({
  type: types.eventAddNew,
  payload: permission,
})
