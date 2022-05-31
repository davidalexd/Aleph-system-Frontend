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
import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'

const typePermise = {
  1: 'PERMISO PERSONAL',
  2: 'AUTORIZACION PARA TRABAJO EN CAMPO',
  3: 'HORAS EXTRAS',
  4: 'COMPENSACIÓN DE HORAS',
}
const formPermiso = () => {
  const [checkAutorization, setCheckAuthorization] = useState('1')
  const handleCheckAuthorization = (e) => {
    const { target } = e
    // if (target.value === '1') {
    //   setCheckAuthorization(target.value)
    // }
    // if (target.value === '2') {
    //   setCheckAuthorization(target.value)
    // }
    // if (target.value === '3') {
    //   setCheckAuthorization(target.value)
    // }
    // if (target.value === '4') {
    //   setCheckAuthorization(target.value)
    // }
    setCheckAuthorization(target.value)
  }
  return (
    <CForm>
      <CRow className="mb-3">
        <CFormLabel htmlFor="statictext" className="col-sm-2 col-form-label">
          Apellidos y Nombres
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput
            type="text"
            id="name-employee"
            defaultValue="David Alexander Perez Garcia"
            readOnly
            plainText
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="statictext" className="col-sm-2 col-form-label">
          Fecha
        </CFormLabel>
        <CCol sm={10}>
          <CFormInput type="text" id="date-permise" defaultValue="10-03-2022" readOnly plainText />
        </CCol>
      </CRow>
      <div className="mb-3">
        <CFormLabel htmlFor="statictext">Departamento</CFormLabel>
        <CFormInput
          type="text"
          id="name-departure"
          placeholder="biogenetica,cobranza,sistemas,etc"
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="statictext">Tipo de autorización</CFormLabel>
        <CRow className="mb-3">
          <CCol sm={10}>
            <CFormCheck
              inline
              type="radio"
              name="autorizacion"
              id="auto-personal"
              label="Permiso personal"
              defaultChecked
              onChange={handleCheckAuthorization}
              value="1"
            />
            <CFormCheck
              inline
              type="radio"
              name="autorizacion"
              id="auto-campo"
              label="Autorizacion para trabajo en campo"
              onChange={handleCheckAuthorization}
              value="2"
            />
            <CFormCheck
              inline
              type="radio"
              name="autorizacion"
              id="auto-extra"
              label="Horas extra"
              onChange={handleCheckAuthorization}
              value="3"
            />
            <CFormCheck
              inline
              type="radio"
              name="autorizacion"
              id="auto-compesacion"
              label="Compesación de horas"
              onChange={handleCheckAuthorization}
              value="4"
            />
          </CCol>
        </CRow>
      </div>
      {checkAutorization === '1' && (
        <>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Fecha / Hora estimada (salida)</CFormLabel>
            <DateTimePicker format="y/MM/dd h:mm a" className="form-control" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Fecha / Hora real (salida) </CFormLabel>
            <DateTimePicker format="y/MM/dd h:mm a" className="form-control" />
            <div className="mb-3">
              <CFormLabel htmlFor="statictext">Tipo de Servicio</CFormLabel>
              <CFormInput
                type="text"
                id="type-service"
                name="type-service"
                placeholder="Especifique el tipo de servicio"
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlTextarea1">
                Especificar tareas realizadas
              </CFormLabel>
              <CFormTextarea id="task" name="task" rows="3"></CFormTextarea>
            </div>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Fecha / Hora estimada (Retorno)</CFormLabel>
            <DateTimePicker format="y/MM/dd h:mm a" className="form-control" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Fecha / Hora Real (Retorno) </CFormLabel>
            <DateTimePicker format="y/MM/dd h:mm a" className="form-control" />
          </div>
        </>
      )}

      {checkAutorization === '2' && (
        <>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Otorgado por</CFormLabel>
            <CFormInput
              type="text"
              name="name-admin"
              id="name-admin"
              placeholder="nombre del encargado"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Especificar tareas realizadas</CFormLabel>
            <CFormTextarea name="task" id="task" rows="3"></CFormTextarea>
          </div>
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
              placeholder="cantidad de horas"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Fecha programada</CFormLabel>
            <DateTimePicker format="y/MM/dd h:mm a" className="form-control" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Duracion en horas</CFormLabel>
            <CFormInput
              type="number"
              id="hours"
              name="hours"
              placeholder="cantidad de horas"
            />
          </div>
        </>
      )}
      {checkAutorization === '3' && (
        <>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Otorgado por</CFormLabel>
            <CFormInput
              type="text"
              id="name-admin"
              name="name-admin"
              placeholder="nombre del encargado"
            />
          </div>
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
            <CFormInput
              type="number"
              id="hours"
              placeholder="cantidad de horas"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Fecha programada</CFormLabel>
            <DateTimePicker className="form-control" format="y/MM/dd h:mm a" />
          </div>
          <CFormLabel htmlFor="statictext">Tipo</CFormLabel>
          <div className="mb-3">
            <CFormCheck
              inline
              type="radio"
              name="descuento"
              id="condescuento"
              label="Con descuento"
              defaultChecked
            />
            <CFormCheck
              inline
              type="radio"
              name="descuento"
              id="sindescuento"
              label="Sin descuento"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Justificacion</CFormLabel>
            <CFormTextarea name="justificacion" id="justificacion" rows="3"></CFormTextarea>
          </div>
        </>
      )}
      {checkAutorization === '4' && (
        <>
          <CFormLabel htmlFor="statictext">Tipo de compensación</CFormLabel>
          <div className="mb-3">
            <CFormCheck
              inline
              type="radio"
              name="tipocompensacion"
              id="horasnotrabajadas"
              label="Horas extras"
              defaultChecked
            />
            <CFormCheck
              inline
              type="radio"
              name="tipocompensacion"
              id="horastrabajadas"
              label="Horas no trabajadas"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Otorgado por</CFormLabel>
            <CFormInput
              type="text"
              id="name-admin"
              name="name-admin"
              placeholder="nombres del encargado"
            />
          </div>
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
            <CFormInput
              type="number"
              id="hours"
              name="hours"
              placeholder="cantidad de horas"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Fecha programada</CFormLabel>
            <DateTimePicker className="form-control" format="y/MM/dd h:mm a" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Duracion en horas</CFormLabel>
            <CFormInput
              type="number"
              id="hours"
              name="hours"
              placeholder="cantidad de horas"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="statictext">Justificacion</CFormLabel>
            <CFormTextarea id="justificacion" name="justificacion" rows="3"></CFormTextarea>
          </div>
        </>
      )}
      <CButton type="submit" color="primary" className='mx-1'>
        Enviar
      </CButton>
      <CButton color="secondary">Cancelar</CButton>
    </CForm>
  )
}
export default formPermiso
