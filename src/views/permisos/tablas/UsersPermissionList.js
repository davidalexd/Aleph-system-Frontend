import React from 'react'
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
import { useDispatch } from 'react-redux'
import { uiOpenModal } from 'src/actions/ui'
const colorStates = {
  aceptado: 'success',
  rechazado: 'danger',
  revisando: 'info',
}
const UsersPermissionList = () => {
  const dispatch = useDispatch()
  const handleClickInfoPermisse = () => {
    dispatch(uiOpenModal())
  }
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>
            <h4 id="traffic" className="card-title mb-0">
              Registro de Solicitudes de los trabajadores de Aleph Group
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
                  <CTableHeaderCell scope="col">Nombre del trabajador</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tipo de permiso</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Fecha de solicitud</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ultima actualizacion</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Detalles</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {[
                  {
                    nameEmployee: 'Juan Carlos Torres',
                    typePermission: 'Permiso personal',
                    creationDate: '10-01-2022',
                    updateState: '12-02-2022',
                    state: 'revisando',
                  },
                  {
                    nameEmployee: 'Rolando Paucar',
                    typePermission: 'Autorizacion para trabajo en campo',
                    creationDate: '10-01-2022',
                    updateState: '12-02-2022',
                    state: 'aceptado',
                  },
                  {
                    nameEmployee: 'fernando parreño',
                    typePermission: 'Horas extra',
                    creationDate: '9-01-2022',
                    updateState: '13-02-2022',
                    state: 'rechazado',
                  },

                  ,
                  {
                    nameEmployee: 'grover cornejo',
                    typePermission: 'Compesación de horas',
                    creationDate: '12-01-2022',
                    updateState: '13-02-2022',
                    state: 'aceptado',
                  },

                  {
                    nameEmployee: 'alexandra paucar',
                    typePermission: 'Permiso personal',
                    creationDate: '16-01-2022',
                    updateState: '20-02-2022',
                    state: 'rechazado',
                  },

                  {
                    nameEmployee: 'eda paucar',
                    typePermission: 'Autorizacion para trabajo en campo',
                    creationDate: '10-01-2022',
                    updateState: '21-02-2022',
                    state: 'aceptado',
                  },

                  {
                    nameEmployee: 'cesar cadillo',
                    typePermission: 'Horas extra',
                    creationDate: '17-01-2022',
                    updateState: '21-02-2022',
                    state: 'revisando',
                  },

                  {
                    nameEmployee: 'Juan Carlos Torres',
                    typePermission: 'Compesación de horas',
                    creationDate: '19-01-2022',
                    updateState: '22-02-2022',
                    state: 'aceptado',
                  },

                  {
                    nameEmployee: 'yon gonzales',
                    typePermission: 'Permiso personal',
                    creationDate: '22-01-2022',
                    updateState: '30-02-2022',
                    state: 'aceptado',
                  },

                  {
                    nameEmployee: 'Carlos martinez',
                    typePermission: 'Autorizacion para trabajo en campo',
                    creationDate: '15-01-2022',
                    updateState: '26-02-2022',
                    state: 'rechazado',
                  },
                ].map((el, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                    <CTableDataCell>{el.nameEmployee}</CTableDataCell>
                    <CTableDataCell>{el.typePermission}</CTableDataCell>
                    <CTableDataCell>{el.creationDate}</CTableDataCell>
                    <CTableDataCell>{el.updateState}</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="primary" variant="outline" onClick={handleClickInfoPermisse}>
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
      <PermissionModalAdministator />
    </CRow>
  )
}

export default UsersPermissionList
