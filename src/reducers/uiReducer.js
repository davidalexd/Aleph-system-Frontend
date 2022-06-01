import { types } from 'src/types/types'

const initialState = {
  loading: false,
  msgError: null,
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      }
    case types.uiOpenModal:
      return { ...state, modalOpen: true }

    case types.uiCloseModal:
      return { ...state, modalOpen: false }

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      }

    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      }

    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
