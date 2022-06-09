const filtrarDatos = (data) => {
  const {
    typeAuthorization,
    dateCreate,
    startEvent,
    endEvent,
    typeDiscount,
    justification,
    quantityHours,
    typeService,
    task,
  } = data

  let day = `${dateCreate.getDate() < 10 ? '0' : ''}${dateCreate.getDate()}`
  let mounth = `${dateCreate.getMonth() + 1 < 10 ? '0' : ''}${dateCreate.getMonth() + 1}`
  let year = dateCreate.getFullYear()
  let formaterDate = `${year}-${mounth}-${day}`
  let formateHourInit = `${startEvent.getHours() < 10 ? '0' : ''}${startEvent.getHours()}:${
    startEvent.getMinutes() < 10 ? '0' : ''
  }${startEvent.getMinutes()}`
  let formateHourEnd = `${endEvent.getHours() < 10 ? '0' : ''}${endEvent.getHours()}:${
    endEvent.getMinutes() < 10 ? '0' : ''
  }${endEvent.getMinutes()}`


  const solicitud = {
    PERMISO_PERSONAL: {
      typeAuthorization: typeAuthorization,
      dateCreate: formaterDate,
      startEvent: formateHourInit,
      endEvent: formateHourEnd,
      typeDiscount: typeDiscount,
      justification: justification,
    },
    SOLICITUD_HORAS_EXTRAS: {
      typeAuthorization: typeAuthorization,
      dateCreate: formaterDate,
      startEvent: formateHourInit,
      endEvent: formateHourEnd,
      quantityHours: quantityHours,
      comments:justification,
      tasks: task,
    },
    TRABAJO_CAMPO: {
      typeAuthorization : typeAuthorization,
      dateCreate: formaterDate,
      startEvent : formateHourInit,
      endEvent : formateHourEnd,
      typeService :typeService,
      comments : justification,
      tasks: task
    },
    COMPENSACION: {
      typeAuthorization:typeAuthorization,
      dateCreate : formaterDate,
      startEvent : formateHourInit,
      endEvent : formateHourEnd,
      tasks : task,
      comments : justification,
    },
  }

  return solicitud[typeAuthorization]
}

export { filtrarDatos }
