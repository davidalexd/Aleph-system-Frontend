import {
  CBadge,
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
import { CChartDoughnut } from '@coreui/react-chartjs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAttendanceUser } from 'src/actions/attedance'
const data = {
  stadistic: [
    { name: 'asistencias', value: 15 },
    { name: 'tardanzas', value: 15 },
    { name: 'faltas', value: 15 },
  ],
  stadisticDays: [
    { day: 16, hour: '10:00AM', mounth: 'Marzo', status: 'tardanza' },
    { day: 17, hour: '7:00AM', mounth: 'Marzo', status: 'asistencia' },
    { day: 18, hour: '--', mounth: 'Marzo', status: 'falta' },
  ],
}
const colorStatus = {
  asistencia: 'success',
  tardanza: 'warning',
  inasistencia: 'danger',
}
const asistencia={
  asistencia: 'Asistió',
  tardanza: 'LLegó tarde',
  inasistencia: 'No se presento',
}
const AttendanceList = () => {
  const dispatch = useDispatch()
const { myattendances } = useSelector((state) => state.attendance)
const { loading } = useSelector((state) => state.ui)

  useEffect(() => {
    dispatch(getAttendanceUser())
  }, [dispatch])
if(loading){
  return<div className="spinner-grow text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
}
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CRow>
            <CCol md={12}>
              <CCardHeader>
                <h4 id="traffic" className="card-title mb-0">
                  Mi Registro de asistencias,tardanzas y faltas diarias.
                </h4>
              </CCardHeader>
            </CCol>
            <CCol md={6}>
              <CCardBody>
                <CChartDoughnut
                  data={{
                    labels: myattendances?.stadistic.map((el)=>el.name),
                    datasets: [
                      {
                        backgroundColor: ['#2eb85c', '#f9b115', '#e55353', '#3399ff'],
                        data: myattendances?.stadistic.map((el)=>el.value),
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCol>
            <CCol md={6}>
              <CCardBody>
                <CRow className="mb-3">
                  <CCol sm={5}>
                    <CFormLabel htmlFor="colFormLabel">Buscar un registro por dias</CFormLabel>
                  </CCol>
                  <CCol sm={7}>
                    <CFormInput
                      type="email"
                      id="colFormLabel"
                      placeholder="buscar asistencias o tardanzas por dias,etc"
                    />
                  </CCol>
                </CRow>
                <br />

                <CTable color="dark" striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Dia</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Mes</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Hora de marcado</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Tipo de marcado</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Estado de asistencia</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {myattendances?.stadisticDays.map((el,index) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                        <CTableDataCell>{el.day}</CTableDataCell>
                        <CTableDataCell>{el.month}</CTableDataCell>
                        <CTableDataCell>{el.hour?el.hour:"No marco asistencia"}</CTableDataCell>
                        <CTableDataCell>  {asistencia[el.status]}</CTableDataCell>
                        <CTableDataCell>
                          <CBadge color={colorStatus[el.status]} shape="rounded-pill">
                          {el.status}
                          </CBadge>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AttendanceList
