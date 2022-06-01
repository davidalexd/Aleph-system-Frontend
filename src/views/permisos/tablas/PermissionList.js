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
  const dispatch = useDispatch();
  const handleClickInfoPermisse=()=>{
      dispatch(uiOpenModal());
  }
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <h4 id="traffic" className="card-title mb-0">
                Registro de mis solicitudes o autorizaciones
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
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Permiso personal</CTableDataCell>
                    <CTableDataCell>17/03/2022</CTableDataCell>
                    <CTableDataCell>
                    <CButton color="primary" variant="outline" onClick={handleClickInfoPermisse}>
                        Ver detalles
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="success" shape="rounded-pill">
                        Aceptado
                      </CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Permiso personal</CTableDataCell>
                    <CTableDataCell>17/03/2022</CTableDataCell>
                    <CTableDataCell>
                    <CButton color="primary" variant="outline" onClick={handleClickInfoPermisse}>
                        Ver detalles
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="danger" shape="rounded-pill">
                        Denegado
                      </CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Permiso personal</CTableDataCell>
                    <CTableDataCell>17/03/2022</CTableDataCell>
                    <CTableDataCell>
                    <CButton color="primary" variant="outline" onClick={handleClickInfoPermisse}>
                        Ver detalles
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="warning" shape="rounded-pill">
                        warning
                      </CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">4</CTableHeaderCell>
                    <CTableDataCell>Permiso personal</CTableDataCell>
                    <CTableDataCell>17/03/2022</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="primary" variant="outline" onClick={handleClickInfoPermisse}>
                        Ver detalles
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="success" shape="rounded-pill">
                        primary
                      </CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">5</CTableHeaderCell>
                    <CTableDataCell>Permiso personal</CTableDataCell>
                    <CTableDataCell>17/03/2022</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="primary" variant="outline">
                        Ver detalles
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info" shape="rounded-pill">
                        En revision
                      </CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">6</CTableHeaderCell>
                    <CTableDataCell>Permiso personal</CTableDataCell>
                    <CTableDataCell>17/03/2022</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="primary" variant="outline">
                        Ver detalles
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="success" shape="rounded-pill">
                        primary
                      </CBadge>
                    </CTableDataCell>
                  </CTableRow>
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
