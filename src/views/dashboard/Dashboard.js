import React, { useEffect, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChart, CChartDoughnut, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
// excel to json converter
import { ExcelToJson } from 'excel-to-json-in-react-js'

import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateAttendance, getAttendance } from 'src/actions/attedance'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Asistencias', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Tardanzas', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'Faltas', value: '22.123 Users', percent: 80, color: 'danger' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
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
                    {attendanceUpdated &&
                      attendanceUpdated.dataAllStatistic.map((item, index) => (
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
                    <CProgress thin className="mt-2" color={colorStatus[item.title]} value={item.percent} />
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
