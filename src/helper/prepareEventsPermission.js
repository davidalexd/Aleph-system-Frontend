export const prepareEventsPermission = (permissions = []) => {
  const formaterDate =(dateCreate)=>{
  
    let fecha = new Date(dateCreate)
    let day = `${fecha.getDate() < 10 ? '0' : ''}${fecha.getDate()}`
    let mounth = `${fecha.getMonth() + 1 < 10 ? '0' : ''}${fecha.getMonth() + 1}`
    let year = fecha.getFullYear()
    let DateParse = `${year}-${mounth}-${day}`
    return  DateParse
  }
const  NewPermission=permissions.map((e) =>{return {...e,created_at:formaterDate(e.permission_detail.created_at),updated_at:formaterDate(e.permission_detail.updated_at)}})
  return NewPermission
}
