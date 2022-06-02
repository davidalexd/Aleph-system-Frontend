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
import React from 'react'
import { useDispatch } from 'react-redux'
import PermissionModalUser from './PermissionModalUser'
import { uiOpenModal } from 'src/actions/ui'
const PermissionList = () => {
  const dispatch = useDispatch()
  const handleClickInfoPermisse = () => {
    dispatch(uiOpenModal())
  }

  const colorStates = {
    aceptado: 'success',
    rechazado: 'danger',
    revisando: 'info',
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

              <CTable color="dark" striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tipo de permiso</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Fecha de creacion</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Detalles</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {[
                    { typePermisse: 'Permiso personal', dateDay: '17/03/2022', state: 'aceptado' },
                    { typePermisse: 'Permiso personal', dateDay: '17/03/2022', state: 'aceptado' },
                    { typePermisse: 'Permiso personal', dateDay: '18/03/2022', state: 'rechazado' },
                    { typePermisse: 'Permiso personal', dateDay: '18/03/2022', state: 'revisando' },
                    { typePermisse: 'Horas extra', dateDay: '17/03/2022', state: 'aceptado' },
                    { typePermisse: 'Horas extra', dateDay: '18/03/2022', state: 'rechazado' },
                    { typePermisse: 'Horas extra', dateDay: '18/03/2022', state: 'rechazado' },
                    {
                      typePermisse: 'Compesación de horas',
                      dateDay: '17/03/2022',
                      state: 'aceptado',
                    },
                    {
                      typePermisse: 'Compesación de horas',
                      dateDay: '18/03/2022',
                      state: 'rechazado',
                    },
                    {
                      typePermisse: 'Compesación de horas',
                      dateDay: '18/03/2022',
                      state: 'aceptado',
                    },
                  ].map((el, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                      <CTableDataCell>{el.typePermisse}</CTableDataCell>
                      <CTableDataCell>{el.dateDay}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="primary"
                          variant="outline"
                          onClick={handleClickInfoPermisse}
                        >
                          Ver detalles
                        </CButton>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CBadge color={colorStates[el.state]} shape="rounded-pill">
                          {el.state}
                        </CBadge>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <PermissionModalUser />
    </>
  )
}
export default PermissionList
