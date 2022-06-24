import { CBadge, CCardBody, CCol, CFormInput, CFormLabel, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventUserAttendanceFilter } from 'src/actions/attedance'
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
const CardBodyAttendanceList = ({columna}) => {
    const { stadisticDaysFilter,myattendances:{stadisticDays}} = useSelector((state) => state.attendance)
    const dispatch = useDispatch()
    const [valueSearch, setValueSearch] = useState("")
    const handleSearch =(e)=>{
        setValueSearch(e.target.value)
        dispatch(eventUserAttendanceFilter(e.target.value))
      }
  return (
    <CCol md={columna}>
    <CCardBody>
      <CRow className="mb-3">
        <CCol sm={5}>
          <CFormLabel htmlFor="colFormLabel">Buscar un registro por dias</CFormLabel>
        </CCol>
        <CCol sm={7}>
          <CFormInput
            type="email"
            name="valueSearch"
            value={valueSearch}
            onChange={handleSearch}
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
          {(stadisticDaysFilter.length>0?stadisticDaysFilter:stadisticDays).map((el,index) => (
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
  )
}

export default CardBodyAttendanceList