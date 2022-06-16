import React from 'react'
import {
  CRow,
  CCol,
  CWidgetStatsA,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilAlarm, cilArrowBottom, cilClock, cilDescription, cilWarning } from '@coreui/icons'
const typeIcon={
  Asistencias:cilClock,
  Tardanzas:cilAlarm,
  Faltas:cilWarning,
  Permisos:cilDescription,

}
const colorStatus ={
  Asistencias:"success",
  Tardanzas:"warning",
  Faltas:"danger",
  Permisos:"info"
}
const WidgetsDropdown = ({dataStadisticits}) => {
  return (
    <CRow>
      <CRow>
        {dataStadisticits &&
          dataStadisticits.map((item, index) => (
            <CCol sm={6} lg={3} key={index}>
              <CWidgetStatsA
                className="mb-4"
                color={colorStatus[item.title]}
                value={
                  <>
                    {item.valueMonth}{' '}
                    <span className="fs-6 fw-normal">
                      ({item.percent}%)
                    </span>
                  </>
                }
                title={`${item.title} al mes`}
                chart={
                  <CIcon className="mt-3 mx-3 pb-2" icon={typeIcon[item.title]} size="8xl" ></CIcon>
                }
              />
            </CCol>
          ))}
      </CRow>
    </CRow>
  )
}

export default WidgetsDropdown
