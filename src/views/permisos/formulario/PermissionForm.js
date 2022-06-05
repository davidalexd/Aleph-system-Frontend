import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import moment from 'moment'
import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import { useDispatch, useSelector } from 'react-redux'
import { eventStartAddNew } from 'src/actions/eventsPermission'
import Swal from 'sweetalert2'
const typePermise = {
  1: 'PERMISO PERSONAL',
  2: 'AUTORIZACION PARA TRABAJO EN CAMPO',
  3: 'HORAS EXTRAS',
  4: 'COMPENSACIÓN DE HORAS',
}
const now = moment().minutes(0).seconds(0).add(1, 'hours')
const nowPlus1 = now.clone().add(1, 'hours')
const initEvent = {
  idUser: null,
  dateCreate: '',
  department: '',
  typeAuthorization: '',
  startEvent: now.toDate(),
  endEvent: nowPlus1.toDate(),
  typeService: '',
  typeDiscount: '',
  typeHourCompensation: '',
  quantityHours: '',
  justification: '',
}
const PermissionForm = () => {
  const [formValues, setFormValues] = useState(initEvent)
  const { name } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { department, startEvent, endEvent, typeService, quantityHours, justification } = formValues
  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())
  const [descount, setDescount] = useState('Con descuento')

  const [typePermission, setTypePermission] = useState('Permiso personal')

  const handleStartDateChange = (e) => {
    setDateStart(e)
    setFormValues({ ...formValues, startEvent: e })
  }
  const handleEndDateChange = (e) => {
    setDateEnd(e)
    setFormValues({ ...formValues, endEvent: e })
  }
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  const handleDiscountRadioButton = (e) => {
    setDescount(e.target.value)
    setFormValues({ ...formValues, typeDiscount: e.target.value })
  }

  const handlePermissionRadioButton = (e) => {
    setTypePermission(e.target.value)
    setFormValues({ ...formValues, typeAuthorization: e.target.value })
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
    if (typePermission === 'Permiso personal') {
      setFormValues({ ...formValues, typeService: '' })
    }
    if (typePermission === 'Autorizacion para trabajo en campo') {
      setFormValues({ ...formValues, typeDiscount: '' })
    }
    if (typePermission === 'Horas extra' || typePermission === 'Compesación de horas') {
      setFormValues({ ...formValues, typeDiscount: '', typeService: '' })
    }
    dispatch(eventStartAddNew(formValues))
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
          <CFormInput type="text" id="date-permise" defaultValue={Date.now()} readOnly plainText />
        </CCol>
      </CRow>
      <div className="mb-3">
        <CFormLabel htmlFor="statictext">Departamento</CFormLabel>
        <CFormInput
          type="text"
          name="department"
          onChange={handleInputChange}
          value={department}
          placeholder="biogenetica,cobranza,sistemas,etc"
        />
      </div>
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
              value="Permiso personal"
              checked={typePermission === 'Permiso personal' ? true : false}
            />
            <CFormCheck
              inline
              type="radio"
              name="Autorizacion para trabajo en campo"
              label="Autorizacion para trabajo en campo"
              onChange={handlePermissionRadioButton}
              value="Autorizacion para trabajo en campo"
              checked={typePermission === 'Autorizacion para trabajo en campo' ? true : false}
            />
            <CFormCheck
              inline
              type="radio"
              name="Horas extra"
              label="Horas extra"
              onChange={handlePermissionRadioButton}
              value="Horas extra"
              checked={typePermission === 'Horas extra' ? true : false}
            />
            <CFormCheck
              inline
              type="radio"
              name="Compesación de horas"
              label="Compesación de horas"
              onChange={handlePermissionRadioButton}
              value="Compesación de horas"
              checked={typePermission === 'Compesación de horas' ? true : false}
            />
          </CCol>
        </CRow>
      </div>
      <>
        <div className="mb-3">
          <CFormLabel htmlFor="statictext">Fecha / Hora Real (salida)</CFormLabel>
          <DateTimePicker
            format="y/MM/dd h:mm a"
            onChange={handleStartDateChange}
            value={dateStart}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Fecha / Hora Real (Retorno) </CFormLabel>
            <DateTimePicker
              format="y/MM/dd h:mm a"
              onChange={handleEndDateChange}
              value={dateEnd}
              minDate={dateStart}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Duracion en horas</CFormLabel>
            <CFormInput
              type="number"
              name="quantityHours"
              value={quantityHours}
              onChange={handleInputChange}
              placeholder="cantidad de horas a trabajar"
            />
          </div>
          {typePermission === 'Autorizacion para trabajo en campo' && (
            <div className="mb-3">
              <CFormLabel htmlFor="statictext">Tipo de Servicio</CFormLabel>
              <CFormInput
                type="text"
                name="typeService"
                onChange={handleInputChange}
                value={typeService}
                placeholder="Especifique el tipo de servicio a realizar"
              />
            </div>
          )}
          {typePermission === 'Permiso personal' && (
            <>
              <CFormLabel htmlFor="statictext">Tipo {descount}</CFormLabel>
              <div className="mb-3">
                <CFormCheck
                  inline
                  type="radio"
                  name="Con descuento"
                  onChange={handleDiscountRadioButton}
                  value="Con descuento"
                  label="Con descuento"
                  checked={descount === 'Con descuento' ? true : false}
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="Sin descuento"
                  value="Sin descuento"
                  onChange={handleDiscountRadioButton}
                  checked={descount === 'Sin descuento' ? true : false}
                  label="Sin descuento"
                />
              </div>
            </>
          )}
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlTextarea1">
              {justification === 'Permiso personal' || justification === 'Compesación de horas'
                ? 'Justificacion'
                : 'Especificar tareas a realizar'}
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

      {/* {checkAutorization === '2' && (
        <>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Desde</CFormLabel>
            <DateTimePicker format="y/MM/dd h:mm a" className="form-control" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Hasta</CFormLabel>
            <DateTimePicker format="y/MM/dd h:mm a" className="form-control" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Duracion en horas</CFormLabel>
            <CFormInput
              type="number"
              id="hours"
              name="hours"
              placeholder="cantidad de horas a trabajar"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Tipo de Servicio</CFormLabel>
            <CFormInput
              type="text"
              id="type-service"
              name="type-service"
              placeholder="Especifique el tipo de servicio a realizar"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Especificar tareas realizadas</CFormLabel>
            <CFormTextarea name="task" id="task" rows="3"></CFormTextarea>
          </div>
        </>
      )}
      {checkAutorization === '3' && (
        <>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Desde</CFormLabel>
            <DateTimePicker className="form-control" format="y/MM/dd h:mm a" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Hasta</CFormLabel>
            <DateTimePicker className="form-control" format="y/MM/dd h:mm a" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Duracion en horas</CFormLabel>
            <CFormInput type="number" id="hours" placeholder="cantidad de horas" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Especificar tareas a realizar</CFormLabel>
            <CFormTextarea name="justificacion" id="justificacion" rows="3"></CFormTextarea>
          </div>
        </>
      )}
      {checkAutorization === '4' && (
        <>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Desde</CFormLabel>
            <DateTimePicker className="form-control" format="y/MM/dd h:mm a" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Hasta</CFormLabel>
            <DateTimePicker className="form-control" format="y/MM/dd h:mm a" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Duracion en horas</CFormLabel>
            <CFormInput type="number" id="hours" name="hours" placeholder="cantidad de horas" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Justificacion</CFormLabel>
            <CFormTextarea id="justificacion" name="justificacion" rows="3"></CFormTextarea>
          </div>
        </>
      )} */}
      <CButton type="submit" color="primary" className="mx-1">
        Enviar
      </CButton>
      <CButton color="secondary">Cancelar</CButton>
    </CForm>
  )
}
export default PermissionForm
