import { types } from 'src/types/types'

const initialState = {
  permissions: [],
  activeEvent: null,
  dataFilter: [],
}

export const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      }
    case types.eventUpdated:
      return {
        ...state,
        permissions: state.permissions.map((e) =>
          e.id === action.payload.id ? action.payload : e,
        ),
      }

    case types.eventLoaded:
      return {
        ...state,
        permissions: [...action.payload],
      }
    case types.eventFilter:
      return {
        ...state,
        dataFilter: state.permissions.filter((el) => {
          if (el.id.toString().toLowerCase().includes(action.payload.toLowerCase())) {
            return el
          }
          if(el.employee_id.toString().toLowerCase().includes(action.payload.toLowerCase())){
            return el
          }
          if(el.reference.toString().toLowerCase().includes(action.payload.toLowerCase())){
            return el
          }
        }),
      }

      case types.eventClearActive:
        return {
          ...state,
          activeEvent: null,
        };
    default:
      return state
  }
}
