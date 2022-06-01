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
} from '@coreui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiCloseModal } from 'src/actions/ui'
const PermissionModalAdministator = () => {
  const { modalOpen } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(uiCloseModal())
    //cerrar modal
  }

  return (
    <>
      <CModal alignment="center" scrollable visible={modalOpen} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Autorizar solicitud</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="row g-2">
            <CCol md={4}>
              <CFormLabel htmlFor="exampleFormControlInput1">Fecha de solicitud</CFormLabel>
            </CCol>

            <CCol md={8}>
              <CFormLabel htmlFor="exampleFormControlInput1">19/03/2020</CFormLabel>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="exampleFormControlInput1">Trabajador</CFormLabel>
            </CCol>

            <CCol md={8}>
              <CFormLabel htmlFor="exampleFormControlInput1">David Perez Garcia</CFormLabel>
            </CCol>
            <CCol md={12}>
              <CFormLabel htmlFor="exampleFormControlInput1">Autorizacion solicitada</CFormLabel>
            </CCol>

            <CCol md={12}>
              <CFormInput type="text" aria-label="Disabled input example" disabled readOnly />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="statictext">Fecha / Hora de inicio</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="statictext">Fecha / Hora de finalizacion</CFormLabel>
            </CCol>

            <CCol md={6}>
              <CFormInput type="text" aria-label="Disabled input example" disabled readOnly />
            </CCol>
            <CCol md={6}>
              <CFormInput type="text" aria-label="Disabled input example" disabled readOnly />
            </CCol>

            <CCol md={12}>
              <CFormLabel htmlFor="exampleFormControlTextarea1">
                Justificacion o tareas a realizar
              </CFormLabel>
            </CCol>
            <CCol xs={12}>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                aria-label="Disabled input example"
                disabled
                readOnly
                rows="3"
              ></CFormTextarea>
            </CCol>
            <CCol md={12}>
              <CFormLabel htmlFor="statictext">Estado de la solicitud o permiso</CFormLabel>
            </CCol>
            <CCol md={4}>
              <CButton color="primary">Actualizar estado</CButton>
            </CCol>
            <CCol md={8}>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </CCol>
            <CCol md={12}>
              <CFormLabel htmlFor="exampleFormControlTextarea1">Observacion</CFormLabel>
            </CCol>
            <CCol xs={12}>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                aria-label="Disabled input example"
                rows="3"
              ></CFormTextarea>
            </CCol>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default PermissionModalAdministator
