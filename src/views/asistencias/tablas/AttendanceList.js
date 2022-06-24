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
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAttendanceUser } from 'src/actions/attedance'
import { LoaderTables } from 'src/components/loader/LoaderTables'
import CardBodyAttendanceList from './CardBodyAttendanceList'

const AttendanceList = () => {
  const dispatch = useDispatch()
  const {
    myattendances: { stadistic },
  } = useSelector((state) => state.attendance)
  const { loading } = useSelector((state) => state.ui)
  useEffect(() => {
    dispatch(getAttendanceUser())
  }, [dispatch])
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
            {loading ? (
              <LoaderTables />
            ) : (
              <>
                <CCol md={6}>
                  <CCardBody>
                    <CChartDoughnut
                      data={{
                        labels: stadistic.map((el) => el.name),
                        datasets: [
                          {
                            backgroundColor: ['#2eb85c', '#f9b115', '#e55353', '#3399ff'],
                            data: stadistic.map((el) => el.value),
                          },
                        ],
                      }}
                    />
                  </CCardBody>
                </CCol>
                <CardBodyAttendanceList columna={6} />
              </>
            )}
          </CRow>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AttendanceList
