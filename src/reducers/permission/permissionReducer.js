import { types } from 'src/types/types'

const initialState = {
  permissions: [],
  activeEvent:null
}

export const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    // case types.eventAddNew:
    //   return {
    //     ...state,
    //     permissions: [...state.permissions, action.payload],
    //   }

    case types.eventUpdated:
      return {
        ...state,
        permissions: state.permissions.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.eventLoaded:
      return {
        ...state,
        permissions: [...action.payload],
      }
    default:
      return state
  }
}
