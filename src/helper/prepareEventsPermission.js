import moment from 'moment'
export const prepareEventsPermission = (permissions = []) => {

  const formaterDate = (dateCreate) => {
    let fecha = new Date(dateCreate)
    let day = `${fecha.getDate() < 10 ? '0' : ''}${fecha.getDate()}`
    let mounth = `${fecha.getMonth() + 1 < 10 ? '0' : ''}${fecha.getMonth() + 1}`
    let year = fecha.getFullYear()
    let hours = `${fecha.getHours() < 10 ? '0' : ''}${fecha.getHours()}:${
      fecha.getMinutes() < 10 ? '0' : ''
    }${fecha.getMinutes()}`
    let DateParse = `${year}-${mounth}-${day} hrs: ${hours}`
    return DateParse
  }
  const NewPermission = permissions.map((e) => {
    return {
      ...e,
      created_at: formaterDate(e.created_at),
      end: moment(`${e.permission_date} ${e.estimated_end_time}`).toDate(),
      start: moment(`${e.permission_date} ${e.estimated_start_time}`).toDate(),
    }
  })
  return NewPermission
}

