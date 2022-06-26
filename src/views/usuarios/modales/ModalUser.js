import {
  CBadge,
  CButton,
  CCol,
  CForm,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiCloseModal } from 'src/actions/ui'

const ModalUser = () => {
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
          <CModalTitle>Informacion del salario del trabajador</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="row g-2">
            <CCol md={12}>
              <CFormLabel htmlFor="statictext">Area encargada</CFormLabel>
            </CCol>
            <CCol md={12}>
              <CFormLabel htmlFor="statictext">Sistemas y mantenimiento</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Costo por hora</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Asistencias netas</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">S/20</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">20</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="statictext">Sueldo bruto</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="statictext">Descuentos</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="statictext">S/2000</CFormLabel>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="statictext">S/500</CFormLabel>
            </CCol>
            <CCol md={12}>
              <CFormLabel htmlFor="statictext">Sueldo neto</CFormLabel>
            </CCol>
            <CCol md={12}>
              <CFormLabel htmlFor="statictext">S/1500</CFormLabel>
            </CCol>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton>Cerrar</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default ModalUser
