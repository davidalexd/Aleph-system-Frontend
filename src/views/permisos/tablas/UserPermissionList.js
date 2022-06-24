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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PermissionModalUser from './PermissionModalUser'
import { uiOpenModal } from 'src/actions/ui'
import { eventSetActive, getUserPermissions } from 'src/actions/permissions'
import Moment from 'react-moment'
import 'moment/locale/es-mx'
import { LoaderTables } from 'src/components/loader/LoaderTables'
const TiposDeAutorizacion = {
  PERMISO_PERSONAL:'Permiso personal',
  SOLICITUD_HORAS_EXTRAS:'Horas extra',
  TRABAJO_CAMPO:'Autorizacion para trabajo en campo',
  COMPENSACION:'Compensacion de horas',
}
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
const UserPermissionList = () => {
  const dispatch = useDispatch()
  const { permissions } = useSelector((state) => state.permission);
  const { loading } = useSelector((state) => state.ui)
  useEffect(() => {
    dispatch(getUserPermissions());
  }, [dispatch])
  const handleClickInfoPermisse = (permission) => {
    dispatch(eventSetActive(permission));
    dispatch(uiOpenModal())
  }
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <h4 id="traffic" className="card-title mb-0">
                Seguimiento de mis solicitudes o autorizaciones
              </h4>
            </CCardHeader>
            <CCardBody>
              <CRow className="mb-3">
                <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                  Buscar un permiso
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="email"
                    id="colFormLabel"
                    placeholder="buscar por id, tipo de permisos o estado,etc"
                  />
                </CCol>
              </CRow>
              <br />

              {loading?(<LoaderTables/>):(<CTable color="dark" striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Id de autorizacion</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tipo de permiso</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Fecha de creacion</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ultima actualizacion</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Detalles</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Autorizado por</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {permissions?.map((el) => (
                    <CTableRow key={el.id}>
                      <CTableHeaderCell scope="row">{el.id}</CTableHeaderCell>
                      <CTableDataCell>{TiposDeAutorizacion[el.reference]}</CTableDataCell>
                      <CTableDataCell>{el.created_at}</CTableDataCell>
                      <CTableDataCell><Moment fromNow>{el.updated_at}</Moment></CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="primary"
                          variant="outline"
                          onClick={()=>handleClickInfoPermisse(el)}
                        >
                          Ver detalles
                        </CButton>
                      </CTableDataCell>
                      <CTableDataCell>{el.authorized_by}</CTableDataCell>
                      <CTableDataCell>
                      <CBadge color={colorStates[el.state]} shape="rounded-pill">
                        {statesValues[el.state]}
                      </CBadge>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>)}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <PermissionModalUser />
    </>
  )
}
export default UserPermissionList
