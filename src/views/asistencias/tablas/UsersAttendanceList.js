import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CProgress,
  CRow,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { eventAttendanceFilter, getAttendance, startUpdateAttendance } from 'src/actions/attedance'
import Swal from 'sweetalert2'
import ModalUserAsistances from '../ModalUserAsistances'
import { uiOpenModal } from 'src/actions/ui'
import { LoaderTables } from 'src/components/loader/LoaderTables'
const initFile = {
  file: '',
}
const initialUser = {
  id: '',
  name: '',
}
const UsersAttendanceList = () => {
  const { attendances, dataFilter, dateRegister, checking } = useSelector(
    (state) => state.attendance,
  )
  const { loading } = useSelector((state) => state.ui)
  const dispatch = useDispatch()
  const [valueSearch, setValueSearch] = useState('')
  const [userSelected, setUserSelected] = useState(initialUser)
  useEffect(() => {
    dispatch(getAttendance())
  }, [dispatch, checking])

  const [files, setFiles] = useState(initFile)

  const handlerFile = (e) => {
    let file = e.target.files[0]
    setFiles({ ...files, file })
  }
  const meses = {
    '17 January': '17 de enero',
    '17 February': '17 de febrero',
  }
  const handlerUpload = () => {
    if (!files.file) {
      return Swal.fire({
        icon: 'error',
        title: 'No seleccionaste ningun archivo',
        text: 'Datos no actualizados',
      })
    }
    dispatch(startUpdateAttendance(files))
  }
  const handleSearch = (e) => {
    setValueSearch(e.target.value)
    dispatch(eventAttendanceFilter(e.target.value))
  }
  const handleClickInfoAsistences = (user) => {
    setUserSelected({ ...userSelected, id: user.id, name: user.name })
    dispatch(uiOpenModal())
  }
  return (
    <>
      <div className="mb-4">
        <CFormLabel htmlFor="formFile">{''}</CFormLabel>
        <CButtonGroup className="float-end me-3">
          <CFormInput
            className="mx-0"
            type="file"
            id="formFile"
            name="formFile"
            onChange={(e) => handlerFile(e)}
          />
          <CButton color="primary" className="mx-0" onClick={handlerUpload}>
            Actualizar
          </CButton>
        </CButtonGroup>
      </div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <h4 id="traffic" className="card-title mb-0">
                Registro de control en los trabajadores de Aleph Group
              </h4>
              <CRow>
                <CFormLabel htmlFor="colFormLabel" className="col-form-label">
                  {dateRegister.days
                    ? `Informacion registrada desde el ${meses[dateRegister.days[0]]}  hasta el ${
                        meses[dateRegister.days[dateRegister.days.length - 1]]
                      }`
                    : 'Sin informacion actualizada'}
                </CFormLabel>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CRow className="mb-3">
                <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                  Buscar un trabajador
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="text"
                    name="valueSearch"
                    value={valueSearch}
                    onChange={handleSearch}
                    placeholder="busca por nombre o id,etc"
                  />
                </CCol>
              </CRow>
              <br />
              {loading ? (
                <LoaderTables />
              ) : (checking?( <LoaderTables />):(
                <CTable color="dark" striped>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                      <CTableHeaderCell>Empleados</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Asistencias</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Tardanzas</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Ausencias</CTableHeaderCell>
                      <CTableHeaderCell>% Asistencias</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">% Tardanzas</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">% Ausencias</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Detalles</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {(dataFilter.length > 0 ? dataFilter : attendances).map((item) => (
                      <CTableRow v-for="item in tableItems" key={item.uid}>
                        <CTableDataCell className="text-center">
                          <div>{item.uid}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>{item.nameEmployee}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.assitance - item.tardies}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.tardies}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.absences}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="clearfix">
                            <div className="float-start">
                              <strong>
                                {Math.round(
                                  ((item.assitance - item.tardies) /
                                    (item.assitance + item.absences)) *
                                    100,
                                )}
                                %
                              </strong>
                            </div>
                          </div>
                          <CProgress
                            thin
                            color={'success'}
                            value={Math.round(
                              ((item.assitance - item.tardies) / (item.assitance + item.absences)) *
                                100,
                            )}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="clearfix">
                            <div className="float-start">
                              <strong>
                                {Math.round(
                                  (item.tardies / (item.assitance + item.absences)) * 100,
                                )}
                                %
                              </strong>
                            </div>
                          </div>
                          <CProgress
                            thin
                            color={'warning'}
                            value={Math.round(
                              (item.tardies / (item.assitance + item.absences)) * 100,
                            )}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="clearfix">
                            <div className="float-start">
                              <strong>
                                {Math.round(
                                  (item.absences / (item.assitance + item.absences)) * 100,
                                )}
                                %
                              </strong>
                            </div>
                          </div>
                          <CProgress
                            thin
                            color={'danger'}
                            value={Math.round(
                              (item.absences / (item.assitance + item.absences)) * 100,
                            )}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            color="primary"
                            variant="outline"
                            onClick={() =>
                              handleClickInfoAsistences({ id: item.uid, name: item.nameEmployee })
                            }
                          >
                            Ver detalles
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              ))}
            </CCardBody>
          </CCard>
        </CCol>
        <ModalUserAsistances userSelected={userSelected} />
      </CRow>
    </>
  )
}

export default UsersAttendanceList
