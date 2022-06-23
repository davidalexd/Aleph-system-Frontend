import React, { useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import PermissionModalAdministator from './PermissionModalAdministator'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from 'src/actions/ui'
import { eventPermissionsFilter, eventSetActive, getPermissions } from 'src/actions/permissions'
import Moment from 'react-moment'
import 'moment/locale/es-mx'
const colorStates = {
  ACCEPTED: 'success',
  REJECTED: 'danger',
  SENDED: 'info',
}
const statesValues = {
  ACCEPTED: 'ACEPTADO',
  REJECTED: 'DENEGADO',
  SENDED: 'ENVIADO',
}
const TiposDeAutorizacion = {
  PERMISO_PERSONAL:'Permiso personal',
  SOLICITUD_HORAS_EXTRAS:'Horas extra',
  TRABAJO_CAMPO:'Trabajo en campo',
  COMPENSACION:'Compensacion de horas',
}
const AdministratorPermissionList = () => {
  const dispatch = useDispatch()
  const { permissions,dataFilter } = useSelector((state) => state.permission);
  const [valueSearch, setValueSearch] = useState("")
  const { loading } = useSelector((state) => state.ui)
  useEffect(() => {
    dispatch(getPermissions());
  }, [dispatch])
  const handleClickInfoPermisse = (permission) => {
    dispatch(eventSetActive(permission));
    dispatch(uiOpenModal())
  }
  const handleSearch =(e)=>{
    setValueSearch(e.target.value)
    dispatch(eventPermissionsFilter(e.target.value))
  }
  if(loading){
    return<div className="spinner-grow text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
  }
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>
            <h4 id="traffic" className="card-title mb-0">
              Registro de Permisos de los trabajadores de Aleph Group
            </h4>
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-3">
              <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                Buscar un permiso
              </CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  name="valueSearch"
                  value={valueSearch}
                  onChange={handleSearch}
                  placeholder="buscar por id, tipo de permisos o estado,etc"
                />
              </CCol>
            </CRow>
            <br />

            <CTable color="dark" striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Id permiso</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nombre del trabajador</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tipo de permiso</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Fecha de solicitud</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ultima actualizacion</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Detalles</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {(dataFilter.length>0?dataFilter:permissions).map((el) => (
                  <CTableRow key={el.id}>
                    <CTableHeaderCell scope="row">{el.id}</CTableHeaderCell>
                    <CTableDataCell>{el.employee_id}</CTableDataCell>
                    <CTableDataCell>{TiposDeAutorizacion[el.reference]}</CTableDataCell>
                    <CTableDataCell>{el.created_at}</CTableDataCell>
                    <CTableDataCell><Moment fromNow>{el.updated_at}</Moment></CTableDataCell>
                    <CTableDataCell>
                      <CButton color="primary" variant="outline" onClick={()=>handleClickInfoPermisse(el)}>
                        Ver detalles
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color={colorStates[el.state]} shape="rounded-pill">
                        {statesValues[el.state]}
                      </CBadge>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <PermissionModalAdministator />
    </CRow>
  )
}

export default AdministratorPermissionList
