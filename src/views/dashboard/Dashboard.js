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
import { getAttendance } from 'src/actions/attedance'
import { LoaderTables } from 'src/components/loader/LoaderTables'
const colorStatus = {
  Asistencias: 'success',
  Tardanzas: 'warning',
  Faltas: 'danger',
  Permisos: 'info',
}
const Dashboard = () => {
  const { dateRegister, dataAllStatistic } = useSelector((state) => state.attendance)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.ui)
  useEffect(() => {
    dispatch(getAttendance())
  }, [dispatch])
  const [graphic, setGraphic] = useState(true)
  return (
    <>
      {loading ? (
        <LoaderTables />
      ) : (
        <>
          <WidgetsDropdown dataStadisticits={dataAllStatistic} />
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol sm={5}>
                  <h4 id="traffic" className="card-title mb-0">
                    Grafico estadistico de asistencias ,tardanzas y empleados
                  </h4>
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
                    labels: dateRegister?.days?.filter((el, index) => index < 27),
                    datasets: dataAllStatistic?.map((item) => {
                      return {
                        label: item.title,
                        backgroundColor: hexToRgba(
                          getStyle(`--cui-${colorStatus[item.title]}`),
                          10,
                        ),
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
                          labels: dataAllStatistic
                            .map((item) => {
                              return item.title
                            })
                            .filter((el) => el !== 'Permisos'),
                          datasets: [
                            {
                              backgroundColor: ['#2eb85c', '#f9b115', '#e55353', '#3399ff'],
                              data: dataAllStatistic
                                .map((item) => {
                                  return item.percent
                                })
                                .filter((el, index) => index !== 3),
                            },
                          ],
                        }}
                      />
                    </CCardBody>
                  </CCol>
                  <CCol sm={6}>
                    <CCardBody>
                      <CRow md={{ cols: 1 }} className="text-center pt-3 pb-5">
                        {dataAllStatistic.map(
                          (item, index) =>
                            item.title !== 'Permisos' && (
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
                                  solid="true"
                                  className="mt-5 mb-3"
                                  color={colorStatus[item.title]}
                                  value={item.percent}
                                />
                              </CCol>
                            ),
                        )}
                      </CRow>
                    </CCardBody>
                  </CCol>
                </CRow>
              )}
            </CCardBody>
            {graphic && (
              <CCardFooter>
                <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="text-center">
                  {dataAllStatistic?.map((item, index) =>
                    item.title === 'Permisos' ? null : (
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
                    ),
                  )}
                </CRow>
              </CCardFooter>
            )}
          </CCard>
        </>
      )}
    </>
  )
}

export default Dashboard
