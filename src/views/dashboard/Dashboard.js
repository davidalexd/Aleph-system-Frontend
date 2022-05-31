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
import { CChartLine } from '@coreui/react-chartjs'
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
import { startUpdateAttendance,getAttendance } from 'src/actions/attedance'

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
  //   const formateData ={
  //     idEmployee:"",
  //     nameEmployee: "",
  //     timeAtendance:"",
  //     assignedArea: ""
  // }

  // const formateData = {
  //   idEmployee: '',
  //   nameEmployee: '',
  //   timeAtendance: '',
  //   assignedArea: '',
  // }
  const initFile = {
    file: '',
  }
  


  const [files, setFiles] = useState(initFile)
  const { attendanceUpdated } = useSelector((state) => state.attendance)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAttendance());
  }, [ dispatch])
  const [days, setDays] = useState(true)

  const handlerFile = (e) => {
    let file = e.target.files[0]
    setFiles({ ...files, file })

    // if (!files.file) {
    //   return console.log('datos vacios')
    // }
    // const arrayAttendance = JsonData.map((el) => {
    //   return {
    //     ...formateData,
    //     idEmployee: el['ID de Usuario'],
    //     nameEmployee: el.Nombre.replace(/\./g, ' '),
    //     timeAtendance: el.Tiempo,
    //     assignedArea: el['Nombre de la Terminal'],
    //   }
    // })
    //dispatch(startUpdateAttendance(arrayAttendance))
  }
  const handlerUpload = () => {
    if (!files.file) {
      return console.log('datos vacios')
    }
    dispatch(startUpdateAttendance(files))
  }
  return (
    <>
      {/* <ExcelToJson JsonDataSetter={setJsonData} /> */}
      {/* {console.log(files)} */}
      <div className="mb-4">
        <CFormLabel htmlFor="formFile">{''}</CFormLabel>
        <CButtonGroup className="float-end me-3">
          <CFormInput className="mx-0" type="file" id="formFile" name="formFile" onChange={(e) => handlerFile(e)} />
          <CButton color="primary" className="mx-0" onClick={handlerUpload}>
            Actualizar
          </CButton>
        </CButtonGroup>
      </div>

      {attendanceUpdated && (
        <WidgetsDropdown dataStadisticits={attendanceUpdated.dataAllStatistic} />
      )}
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Grafico estadistico de asistencias ,tardanzas y empleados
              </h4>
              <div className="small text-medium-emphasis">
                {attendanceUpdated && attendanceUpdated.dateUpdate}
              </div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButtonGroup className="float-end me-3">
                <CButton color="outline-secondary" className="mx-0" onClick={() => setDays(false)}>
                  Info por Semana
                </CButton>
                <CButton
                  color="outline-secondary"
                  className="mx-0"
                  active={days}
                  onClick={() => setDays(true)}
                >
                  Info por Dias
                </CButton>
              </CButtonGroup>
            </CCol>
          </CRow>
          {attendanceUpdated && (
            <CChartLine
              style={{ height: '300px', marginTop: '40px' }}
              data={{
                labels: days
                  ? attendanceUpdated.dateRegister.days
                  : attendanceUpdated.dateRegister.week,
                datasets: attendanceUpdated.dataAllStatistic.map((item) => {
                  return {
                    label: item.title,
                    backgroundColor: hexToRgba(getStyle(`--cui-${item.color}`), 10),
                    borderColor: getStyle(`--cui-${item.color}`),
                    pointHoverBackgroundColor: getStyle(`--cui-${item.color}`),
                    borderWidth: 2,
                    data: days ? item.valuesXdays : item.valuesXweek,
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
          )}
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="text-center">
            {attendanceUpdated &&
              attendanceUpdated.dataAllStatistic.map((item, index) => (
                <CCol className="mb-sm-2 mb-0" key={index}>
                  <div className="text-medium-emphasis">{`Promedio de ${item.title} ${
                    days ? 'al Dia' : 'a la semana'
                  }`}</div>
                  <strong>
                    {days
                      ? Math.round(item.valueMonth / item.valuesXdays.length)
                      : Math.round(item.valueWeek / item.valuesXweek.length)}
                  </strong>
                  <CProgress thin className="mt-2" color={item.color} value={item.percent} />
                </CCol>
              ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}
      {/* grafico de asistencias y tardanzas */}
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Registros de los empleados</CCardHeader>
            <CCardBody>
              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Empleados</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Asistencias</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Tardanzas</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Ausencias</CTableHeaderCell>
                    <CTableHeaderCell>% Asistencias</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">% Tardanzas</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">% Ausencias</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {attendanceUpdated &&
                    attendanceUpdated.dataAttendance.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                          <CAvatar size="md" src={avatar1} status="success" />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>{item.nameEmployee}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.assitance}</div>
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
                                  (item.assitance /
                                    (item.assitance + item.tardies + item.absences)) *
                                    100,
                                )}
                                %
                              </strong>
                            </div>
                            <div className="float-end">
                              <small className="text-medium-emphasis">
                                Jun 11, 2021 - Jul 10, 2021
                              </small>
                            </div>
                          </div>
                          <CProgress
                            thin
                            color={
                              Math.round(
                                (item.assitance / (item.assitance + item.tardies + item.absences)) *
                                  100,
                              ) > 60
                                ? 'success'
                                : 'warning'
                            }
                            value={Math.round(
                              (item.assitance / (item.assitance + item.tardies + item.absences)) *
                                100,
                            )}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="clearfix">
                            <div className="float-start">
                              <strong>
                                {Math.round(
                                  (item.tardies / (item.assitance + item.tardies + item.absences)) *
                                    100,
                                )}
                                %
                              </strong>
                            </div>
                            <div className="float-end">
                              <small className="text-medium-emphasis">
                                Jun 11, 2021 - Jul 10, 2021
                              </small>
                            </div>
                          </div>
                          <CProgress
                            thin
                            color={
                              Math.round(
                                (item.tardies / (item.assitance + item.tardies + item.absences)) *
                                  100,
                              ) < 30
                                ? 'warning'
                                : 'danger'
                            }
                            value={Math.round(
                              (item.tardies / (item.assitance + item.tardies + item.absences)) *
                                100,
                            )}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="clearfix">
                            <div className="float-start">
                              <strong>
                                {Math.round(
                                  (item.absences /
                                    (item.assitance + item.tardies + item.absences)) *
                                    100,
                                )}
                                %
                              </strong>
                            </div>
                            <div className="float-end">
                              <small className="text-medium-emphasis">
                                Jun 11, 2021 - Jul 10, 2021
                              </small>
                            </div>
                          </div>
                          <CProgress
                            thin
                            color={
                              Math.round(
                                (item.absences / (item.assitance + item.tardies + item.absences)) *
                                  100,
                              ) < 30
                                ? 'success'
                                : 'danger'
                            }
                            value={Math.round(
                              (item.absences / (item.assitance + item.tardies + item.absences)) *
                                100,
                            )}
                          />
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
