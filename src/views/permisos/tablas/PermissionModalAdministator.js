import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CForm,
  CCol,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CFormSelect,
  CBadge,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventStartUpdate } from 'src/actions/permissions'
import { uiCloseModal } from 'src/actions/ui'
const statesValues = {
  ACCEPTED: 'ACEPTADO',
  REJECTED: 'DENEGADO',
  SENDED: 'ENVIADO',
}
const colorStates = {
  ACCEPTED: 'success',
  REJECTED: 'danger',
  SENDED: 'info',
}
const TiposDeAutorizacion = {
  PERMISO_PERSONAL: 'Permiso personal',
  SOLICITUD_HORAS_EXTRAS: 'Horas extra',
  TRABAJO_CAMPO: 'Autorizacion para trabajo en campo',
  COMPENSACION: 'Compensacion de horas',
}
const initEvent = {
  id: null,
  permission_code: '',
  permission_date: '',
  created_at: '',
  estimated_start_time: '',
  estimated_end_time: '',
  real_start_time: null,
  real_end_time: null,
  comments: '',
  reference: '',
  permission_detail: {},
  state: '',
  authorized_by: '',
  employee_id: '',
}
const PermissionModalAdministator = () => {
  
  const { modalOpen } = useSelector((state) => state.ui)
  const { activeEvent } = useSelector((state) => state.permission)
  const [formValues, setFormValues] = useState(initEvent)
  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent)
    }
  }, [activeEvent])
  const {
    id,
    employee_id,
    permission_date,
    state,
    estimated_start_time,
    estimated_end_time,
    reference,
    comments,
    permission_detail,
  } = formValues
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(uiCloseModal())
    //cerrar modal
  }
  const handleState = (permission, value) => {
    if (value) {
      setFormValues({ ...formValues, state: 'ACCEPTED' })
      dispatch(eventStartUpdate({ ...permission, state: 'ACCEPTED' }))
    } else {
      setFormValues({ ...formValues, state: 'REJECTED' })
      dispatch(eventStartUpdate({ ...permission, state: 'REJECTED' }))
    }
  }



  return (
    <>
      <CModal alignment="center" scrollable visible={modalOpen} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Autorizar solicitud</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="row g-2">
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Id de autorizacion</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Fecha de reservacion</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">{id}</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">{permission_date}</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="statictext">Estado de la solicitud</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="statictext">
                <CBadge color={colorStates[state]} shape="rounded-pill">
                  {statesValues[state]}
                </CBadge>
              </CFormLabel>
            </CCol>

            {reference === 'PERMISO_PERSONAL' && (
              <>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Autorizacion solicitada
                  </CFormLabel>
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={TiposDeAutorizacion[reference]}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="exampleFormControlInput1">Trabajador</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Tipo de descuento</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={employee_id}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={permission_detail.type_discount ? 'Con descuento' : 'Sin descuento'}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Fecha / Hora de inicio</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Fecha / Hora de finalizacion</CFormLabel>
                </CCol>

                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={estimated_start_time}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={estimated_end_time}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Justificacion</CFormLabel>
                </CCol>
                <CCol xs={12}>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    aria-label="Disabled input example"
                    value={permission_detail.justification}
                    disabled
                    readOnly
                    rows="2"
                  ></CFormTextarea>
                </CCol>
              </>
            )}

            {reference === 'SOLICITUD_HORAS_EXTRAS' && (
              <>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Autorizacion solicitada
                  </CFormLabel>
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={TiposDeAutorizacion[reference]}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="exampleFormControlInput1">Trabajador</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Cantidad de horas</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={employee_id}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={permission_detail.hours}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Fecha / Hora de inicio</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Fecha / Hora de finalizacion</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={estimated_start_time}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={estimated_end_time}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Comentarios</CFormLabel>
                </CCol>
                <CCol xs={12}>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    aria-label="Disabled input example"
                    value={comments}
                    disabled
                    readOnly
                    rows="2"
                  ></CFormTextarea>
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlTextarea1">
                    Lista de tareas a realizar
                  </CFormLabel>
                </CCol>
                <CCol xs={12}>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    aria-label="Disabled input example"
                    disabled
                    value={permission_detail.tasks}
                    readOnly
                    rows="3"
                  ></CFormTextarea>
                </CCol>
              </>
            )}
            {reference === 'TRABAJO_CAMPO' && (
              <>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Autorizacion solicitada
                  </CFormLabel>
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={TiposDeAutorizacion[reference]}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="exampleFormControlInput1">Trabajador</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Tipo de servicio a realizar
                  </CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={employee_id}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={permission_detail.type}
                    disabled
                    readOnly
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Fecha / Hora de inicio</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Fecha / Hora de finalizacion</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={estimated_start_time}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={estimated_end_time}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Comentarios</CFormLabel>
                </CCol>
                <CCol xs={12}>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    aria-label="Disabled input example"
                    value={comments}
                    disabled
                    readOnly
                    rows="2"
                  ></CFormTextarea>
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlTextarea1">
                    Lista de tareas a realizar
                  </CFormLabel>
                </CCol>
                <CCol xs={12}>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    aria-label="Disabled input example"
                    disabled
                    value={permission_detail.tasks}
                    readOnly
                    rows="3"
                  ></CFormTextarea>
                </CCol>
              </>
            )}

            {reference === 'COMPENSACION' && (
              <>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Autorizacion solicitada
                  </CFormLabel>
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={TiposDeAutorizacion[reference]}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlInput1">Trabajador</CFormLabel>
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={employee_id}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Fecha / Hora de inicio</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="statictext">Fecha / Hora de finalizacion</CFormLabel>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={estimated_start_time}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-label="Disabled input example"
                    value={estimated_end_time}
                    disabled
                    readOnly
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Comentarios</CFormLabel>
                </CCol>
                <CCol xs={12}>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    aria-label="Disabled input example"
                    value={comments ? comments : 'Sin comentarios'}
                    disabled
                    readOnly
                    rows="2"
                  ></CFormTextarea>
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="exampleFormControlTextarea1">
                    Lista de tareas a realizar
                  </CFormLabel>
                </CCol>
                <CCol xs={12}>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    aria-label="Disabled input example"
                    disabled
                    value={permission_detail.tasks}
                    readOnly
                    rows="3"
                  ></CFormTextarea>
                </CCol>
              </>
            )}
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={() => handleState(formValues, true)}>
            AUTORIZAR PERMISO
          </CButton>
          <CButton color="danger" onClick={() => handleState(formValues, false)}>
            DENEGAR PERMISO
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default PermissionModalAdministator
