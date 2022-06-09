import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import moment from 'moment'
import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import { useDispatch, useSelector } from 'react-redux'
import { eventStartAddNew } from 'src/actions/permissions'
import { TagsInput } from 'react-tag-input-component'
import Swal from 'sweetalert2'
const TiposDeAutorizacion = [
  'Permiso personal',
  'Horas extra',
  'Autorizacion para trabajo en campo',
  'Compensacion de horas',
]
const tipoDeDescuento = ['Con descuento', 'Sin descuento']
const now = moment().minutes(0).seconds(0).add(1, 'hours')
const nowPlus1 = now.clone().add(1, 'hours')
const initEvent = {
  typeAuthorization: 'PERMISO_PERSONAL',
  dateCreate: now.toDate(),
  startEvent: now.toDate(),
  endEvent: nowPlus1.toDate(),
  typeDiscount: true,
  justification: '',
  quantityHours: 1,
  typeService: 'OPERATIVA',
  task: [],
}
let fecha = new Date()
let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
let mes = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

const PermissionForm = () => {
  const [formValues, setFormValues] = useState(initEvent)
  const { name } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { startEvent, endEvent, typeService, quantityHours, justification } = formValues
  const [dateCreate, setDateCreate] = useState(now.toDate())
  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())
  const [descount, setDescount] = useState(tipoDeDescuento[0])
  const [typePermission, setTypePermission] = useState(TiposDeAutorizacion[0])
  const [selected, setSelected] = useState(['Solucionar errores'])

  const handleCreateDateChange = (e) => {
    setDateCreate(e)
    setDateStart(e)
    let nowChange = moment(e).minutes(0).seconds(0)
    let nowEnd = nowChange.clone().add(1, 'hours')
    setDateEnd(nowEnd.toDate())
    setFormValues({ ...formValues, dateCreate: e, startEvent: e, endEvent: nowEnd.toDate() })
  }
  const handleStartDateChange = (e) => {
    setDateStart(e)
    let nowChange = moment(e).minutes(0).seconds(0)
    let nowEnd = nowChange.clone().add(1, 'hours')
    setDateEnd(nowEnd.toDate())
    let hour = (nowEnd.toDate().getTime() - e.getTime()) / (1000 * 60 * 60)
    setFormValues({ ...formValues, startEvent: e, quantityHours: hour, endEvent: nowEnd.toDate() })
  }
  const handleEndDateChange = (e) => {
    setDateEnd(e)
    let hour = (e.getTime() - startEvent.getTime()) / (1000 * 60 * 60)
    setFormValues({ ...formValues, endEvent: e, quantityHours: hour })
  }
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  const handleDiscountRadioButton = (e) => {
    setDescount(e.target.value)
    if (e.target.value === tipoDeDescuento[0]) {
      setFormValues({ ...formValues, typeDiscount: true })
    }
    if (e.target.value === tipoDeDescuento[1]) {
      setFormValues({ ...formValues, typeDiscount: false })
    }
  }

  const handlePermissionRadioButton = (e) => {
    setTypePermission(e.target.value)
    if (e.target.value === TiposDeAutorizacion[0]) {
      setFormValues({ ...formValues, typeAuthorization: 'PERMISO_PERSONAL' })
    }
    if (e.target.value === TiposDeAutorizacion[1]) {
      setFormValues({ ...formValues, typeAuthorization: 'SOLICITUD_HORAS_EXTRAS' })
    }
    if (e.target.value === TiposDeAutorizacion[2]) {
      setFormValues({ ...formValues, typeAuthorization: 'TRABAJO_CAMPO' })
    }
    if (e.target.value === TiposDeAutorizacion[3]) {
      setFormValues({ ...formValues, typeAuthorization: 'COMPENSACION' })
    }
  }
  const handleTagComponent = (e) => {
    setSelected(e)
    setFormValues({ ...formValues, task: e })
  }
  const handleInputSelect = (e) => {
    setFormValues({ ...formValues, typeService: e.target.value })
  }
  const handleSubmitForm = (e) => {
    e.preventDefault()
    const momentStart = moment(startEvent)
    const momentEnd = moment(endEvent)
    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire({
        icon: 'error',
        title: 'Lo siento..',
        text: 'La fecha fin debe ser mayor a la fecha de inicio!',
      })
    }
    dispatch(eventStartAddNew(formValues))
    clearEventPermission()
  }
  const clearEventPermission = () => {
    setFormValues(initEvent)
    setDateCreate(now.toDate())
    setDateStart(now.toDate())
    setDateEnd(nowPlus1.toDate())
  }
  return (
    <CForm onSubmit={handleSubmitForm}>
      <CRow className="mb-3">
        <CFormLabel htmlFor="statictext" className="col-sm-2 col-form-label">
          Apellidos y Nombres
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="text" id="name-employee" defaultValue={name} readOnly plainText />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="statictext" className="col-sm-2 col-form-label">
          Fecha actual
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="text"
            id="date-permise"
            defaultValue={`${diaSemana[fecha.getDay()]},${fecha.getDate()} de ${
              mes[fecha.getMonth()]
            } de ${fecha.getFullYear()} ${fecha.toLocaleTimeString()}`}
            readOnly
            plainText
          />
        </CCol>
      </CRow>
      <div className="mb-3">
        <CFormLabel htmlFor="statictext">Tipo de autorización {typePermission}</CFormLabel>
        <CRow className="mb-3">
          <CCol sm={10}>
            <CFormCheck
              inline
              type="radio"
              name="Permiso personal"
              label="Permiso personal"
              onChange={handlePermissionRadioButton}
              value={TiposDeAutorizacion[0]}
              checked={typePermission === TiposDeAutorizacion[0] ? true : false}
            />
            <CFormCheck
              inline
              type="radio"
              name="Horas extra"
              label="Horas extra"
              onChange={handlePermissionRadioButton}
              value={TiposDeAutorizacion[1]}
              checked={typePermission === TiposDeAutorizacion[1] ? true : false}
            />
            <CFormCheck
              inline
              type="radio"
              name="Autorizacion para trabajo en campo"
              label="Autorizacion para trabajo en campo"
              onChange={handlePermissionRadioButton}
              value={TiposDeAutorizacion[2]}
              checked={typePermission === TiposDeAutorizacion[2] ? true : false}
            />

            <CFormCheck
              inline
              type="radio"
              name="Compesación de horas"
              label="Compesación de horas"
              onChange={handlePermissionRadioButton}
              value={TiposDeAutorizacion[3]}
              checked={typePermission === TiposDeAutorizacion[3] ? true : false}
            />
          </CCol>
        </CRow>
      </div>
      <>
        <div className="mb-3">
          <CFormLabel htmlFor="statictext">Fecha de creacion (Inicio de la solicitud)</CFormLabel>
          <DateTimePicker
            format="y/MM/dd"
            onChange={handleCreateDateChange}
            value={dateCreate}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Inicio del evento (Hora) </CFormLabel>
            <DateTimePicker
              format="y/MM/dd h:mm a"
              onChange={handleStartDateChange}
              value={dateStart}
              className="form-control"
              disableCalendar={true}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Final del evento (Hora) </CFormLabel>
            <DateTimePicker
              format="y/MM/dd  h:mm a"
              onChange={handleEndDateChange}
              value={dateEnd}
              minDate={dateStart}
              className="form-control"
              disableCalendar={true}
            />
          </div>
          {typePermission === TiposDeAutorizacion[1] && (
            <div className="mb-3">
              <CFormLabel htmlFor="statictext">Cantidad de horas</CFormLabel>
              <CFormInput
                type="number"
                name="quantityHours"
                disabled
                value={quantityHours}
                onChange={handleInputChange}
                placeholder="cantidad de horas a trabajar"
              />
            </div>
          )}

          {typePermission === TiposDeAutorizacion[2] && (
            <div className="mb-3">
              <CFormLabel htmlFor="statictext">Tipo de Servicio</CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                name="combo"
                options={[
                  'Seleccione el tipo de servicio a realizar',
                  { label: 'SERVICIO OPERATIVO', value: 'OPERATIVA' },
                  { label: 'SERVICIO ADMINISTRATIVO', value: 'ADMINISTRATIVA' },
                ]}
                onChange={handleInputSelect}
              />
            </div>
          )}

          {typePermission === TiposDeAutorizacion[0] && (
            <>
              <CFormLabel htmlFor="statictext">Tipo {descount}</CFormLabel>
              <div className="mb-3">
                <CFormCheck
                  inline
                  type="radio"
                  name="Con descuento"
                  onChange={handleDiscountRadioButton}
                  value={tipoDeDescuento[0]}
                  label="Con descuento"
                  checked={descount === tipoDeDescuento[0] ? true : false}
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="Sin descuento"
                  value={tipoDeDescuento[1]}
                  onChange={handleDiscountRadioButton}
                  checked={descount === tipoDeDescuento[1] ? true : false}
                  label="Sin descuento"
                />
              </div>
            </>
          )}
          {typePermission != TiposDeAutorizacion[0] && (
            <div className="mb-3">
              <CFormLabel htmlFor="statictext">Tareas a realizar</CFormLabel>
              <TagsInput
                value={selected}
                onChange={handleTagComponent}
                name="Tareas"
                placeHolder="Ingresar tareas a realizar"
              />
            </div>
          )}
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlTextarea1">
              {typePermission === TiposDeAutorizacion[0]
                ? 'Justificacion del permiso o autorizacion de salida'
                : 'Comentarios o descripcion del trabajo a campo a realizar'}
            </CFormLabel>
            <CFormTextarea
              name="justification"
              value={justification}
              onChange={handleInputChange}
              rows="3"
            ></CFormTextarea>
          </div>
        </div>
      </>
      <CButton type="submit" color="primary" className="mx-1">
        Enviar
      </CButton>
      <CButton color="secondary">Cancelar</CButton>
    </CForm>
  )
}
export default PermissionForm
