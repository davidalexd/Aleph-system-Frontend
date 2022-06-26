import {
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
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from 'src/actions/ui'
import { LoaderTables } from 'src/components/loader/LoaderTables'
import ModalUser from '../modales/ModalUser'

const UserList = () => {
  const { loading } = useSelector((state) => state.ui)
  const dispatch = useDispatch()
  const handleClickInfoUser = () => {
    dispatch(uiOpenModal())
  }
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <h4 id="traffic" className="card-title mb-0">
                Gestion de trabajadores en Aleph Group
              </h4>
            </CCardHeader>
            <CCardBody>
              <CRow className="mb-3">
                <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                  Buscar trabajador
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="text"
                    name="valueSearch"
                    placeholder="busca por nombre o id,etc"
                  />
                </CCol>
              </CRow>
              <br />
              {loading ? (
                <LoaderTables />
              ) : (
                <CTable color="dark" striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Empleado</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Rol</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Sueldo Neto</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Acciones</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                          <div>1</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>Rodrigo Cornejo</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>ADMINSTRADOR</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>1500 SOLES</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <CButton
                            color="primary"
                            variant="outline"
                            onClick={() => handleClickInfoUser()}
                          >
                            Gestionar
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              )}
            </CCardBody>
          </CCard>
        </CCol>
        <ModalUser />
      </CRow>
    </>
  )
}

export default UserList
