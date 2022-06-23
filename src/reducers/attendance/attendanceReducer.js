import { types } from 'src/types/types'

const initialState = {
  checking: true,
  attendances: [],
  dataFilter: [],
  myattendances: { stadistic: [], stadisticDays: [] },
  stadisticDaysFilter: [],
  dateRegister: [],
  dataAllStatistic: [],
}
export const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.attendanceUpdate:
      return {
        ...state,
        attendances: action.payload,
        checking: false,
      }
    case types.attendanceFilter:
      return {
        ...state,
        dataFilter: state.attendances.filter((el) => {
          if (el.uid.toString().toLowerCase().includes(action.payload.toLowerCase())) {
            return el
          }
          if (el.nameEmployee.toString().toLowerCase().includes(action.payload.toLowerCase())) {
            return el
          }
        }),
      }
    case types.myattendanceFilter:
      const { myattendances:{stadisticDays}} = state
      return {
        ...state,
        stadisticDaysFilter: stadisticDays.filter((el) => {
          if (el.day.toString().toLowerCase().includes(action.payload.toLowerCase())) {
            return el
          }
          if (el.month.toString().toLowerCase().includes(action.payload.toLowerCase())) {
            return el
          }
        }),
      }
    case types.attendanceDashboardUpdate:
      return {
        ...state,
        ...action.payload,
      }
    case types.attendanceUser:
      return {
        ...state,
        myattendances: action.payload,
      }
    default:
      return state
  }
}
