import React, { useEffect, useState } from 'react'

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react'
import { CChartDoughnut, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { useDispatch, useSelector } from 'react-redux'
import {  getAttendance } from 'src/actions/attedance'

const Dashboard = () => {
  const colorStatus = {
    Asistencias: 'success',
    Tardanzas: 'warning',
    Faltas: 'danger',
  }

  const { attendanceUpdated } = useSelector((state) => state.attendance)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAttendance())
  }, [dispatch])
  const [graphic, setGraphic] = useState(true)
  return (
    <>
      <WidgetsDropdown dataStadisticits={attendanceUpdated?.dataAllStatistic} />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Grafico estadistico de asistencias ,tardanzas y empleados
              </h4>
              <div className="small text-medium-emphasis">{attendanceUpdated?.dateUpdate}</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButtonGroup className="float-end me-3">
                <CButton
                  color="outline-secondary"
                  className="mx-0"
                  active={graphic}
                  onClick={() => setGraphic(true)}
                >
                  Grafico lineal
                </CButton>
                <CButton
                  color="outline-secondary"
                  className="mx-0"
                  onClick={() => setGraphic(false)}
                >
                  Grafico circular
                </CButton>
              </CButtonGroup>
            </CCol>
          </CRow>
          {graphic ? (
            <CChartLine
              style={{ height: '300px', marginTop: '40px' }}
              data={{
                labels: attendanceUpdated?.dateRegister.days,
                datasets: attendanceUpdated?.dataAllStatistic.map((item) => {
                  return {
                    label: item.title,
                    backgroundColor: hexToRgba(getStyle(`--cui-${colorStatus[item.title]}`), 10),
                    borderColor: getStyle(`--cui-${colorStatus[item.title]}`),
                    pointHoverBackgroundColor: getStyle(`--cui-${colorStatus[item.title]}`),
                    borderWidth: 2,
                    data: item.valuesXdays,
                    fill: true,
                  }
                }),
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      drawOnChartArea: false,
                    },
                  },
                  y: {
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      stepSize: Math.ceil(250 / 5),
                      max: 250,
                    },
                  },
                },
                elements: {
                  line: {
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                  },
                },
              }}
            />
          ) : (
            <CRow>
              <CCol sm={6}>
                <CCardBody className="mt-3">
                  <CChartDoughnut
                    data={{
                      labels: attendanceUpdated?.dataAllStatistic.map((item) => {
                        return item.title
                      }),
                      datasets: [
                        {
                          backgroundColor: ['#2eb85c', '#f9b115', '#e55353', '#3399ff'],
                          data: attendanceUpdated?.dataAllStatistic.map((item) => {
                            return item.percent
                          }),
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCol>
              <CCol sm={6}>
                <CCardBody>
                  <CRow md={{ cols: 1 }} className="text-center pt-3 pb-5">
                    {attendanceUpdated?.dataAllStatistic.map((item, index) => (
                      <CCol key={index} className="mt-3">
                        <div className="text-medium-emphasis">
                          {graphic
                            ? `Promedio de ${item.title} al mes`
                            : `Porcentajes de ${item.title} al mes`}
                        </div>
                        <strong>
                          {graphic
                            ? Math.round(item.valueMonth / item.valuesXdays.length)
                            : `${item.percent}%`}
                        </strong>
                        <CProgress
                          solid
                          className="mt-5 mb-3"
                          color={colorStatus[item.title]}
                          value={item.percent}
                        />
                      </CCol>
                    ))}
                  </CRow>
                </CCardBody>
              </CCol>
            </CRow>
          )}
        </CCardBody>
        {graphic && (
          <CCardFooter>
            <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="text-center">
              {attendanceUpdated &&
                attendanceUpdated.dataAllStatistic.map((item, index) => (
                  <CCol className="mb-sm-2 mb-0" key={index}>
                    <div className="text-medium-emphasis">
                      {graphic
                        ? `Promedio de ${item.title} al mes`
                        : `Porcentajes de ${item.title} al mes`}
                    </div>
                    <strong>
                      {graphic
                        ? Math.round(item.valueMonth / item.valuesXdays.length)
                        : `${item.percent}%`}
                    </strong>
                    <CProgress
                      thin
                      className="mt-2"
                      color={colorStatus[item.title]}
                      value={item.percent}
                    />
                  </CCol>
                ))}
            </CRow>
          </CCardFooter>
        )}
      </CCard>

      {/* <WidgetsBrand withCharts /> */}
    </>
  )
}

export default Dashboard
