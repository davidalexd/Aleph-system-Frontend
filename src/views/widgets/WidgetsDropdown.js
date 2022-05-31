import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = ({dataStadisticits}) => {
  return (
    <CRow>
      <CRow>
        {dataStadisticits &&
          dataStadisticits.map((item, index) => (
            <CCol sm={6} lg={3} key={index}>
              <CWidgetStatsA
                className="mb-4"
                color={item.color}
                value={
                  <>
                    {item.valueMonth}{' '}
                    <span className="fs-6 fw-normal">
                      ({item.percent}% <CIcon icon={cilArrowBottom} />)
                    </span>
                  </>
                }
                title={`${item.title} al mes`}
                chart={
                  <CChartLine
                    className="mt-3 mx-3"
                    style={{ height: '70px' }}
                    data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'My First dataset',
                          backgroundColor: 'transparent',
                          borderColor: 'rgba(0,0,0,.55)',
                          pointBackgroundColor: getStyle('--cui-secondary color'),
                          data: [65, 59, 84, 84, 51, 55, 40],
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          grid: {
                            display: false,
                            drawBorder: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                        y: {
                          min: 30,
                          max: 89,
                          display: false,
                          grid: {
                            display: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                      },
                      elements: {
                        line: {
                          borderWidth: 1,
                          tension: 0.4,
                        },
                        point: {
                          radius: 4,
                          hitRadius: 10,
                          hoverRadius: 4,
                        },
                      },
                    }}
                  />
                }
              />{' '}
            </CCol>
          ))}
      </CRow>
    </CRow>
  )
}

export default WidgetsDropdown
