import { types } from 'src/types/types'

const initialState = {
  checking: true,
  attendances: [],
  dataFilter: [],
  myattendances:{stadistic:[],stadisticDays:[]},
  dateRegister:[]
  ,dataAllStatistic:[]
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

    case types.attendanceDashboardUpdate:
      return {
        ...state,
        ...action.payload,
      }
      case types.attendanceUser:
        return {
          ...state,
          myattendances:action.payload,
        }
    default:
      return state
  }
}
