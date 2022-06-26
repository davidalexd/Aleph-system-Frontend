import React from 'react'
const tiposAutorizacion = {
  PERMISO_PERSONAL: 'Permiso personal',
  SOLICITUD_HORAS_EXTRAS: 'Horas extra',
  TRABAJO_CAMPO: 'Autorizacion para trabajo en campo',
  COMPENSACION: 'Compensacion de horas',
}
const CalendarEvent = ({ event }) => {
  const { reference, employee_id,comments } = event
  return (
    <div>
       <strong>{employee_id}</strong>
      <span>- {tiposAutorizacion[reference]}</span>
      <span>- {comments}</span>
     
    </div>
  )
}

export default CalendarEvent
