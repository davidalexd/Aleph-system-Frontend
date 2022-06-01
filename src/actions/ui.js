import { types } from 'src/types/types'

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
})

export const removeError = () => ({
  type: types.uiRemoveError,
})

export const startLoading = () => ({
  type: types.uiStartLoading,
})

export const finishLoading = () => ({
  type: types.uiFinishLoading,
})
//handler modal
export const uiOpenModal=()=>({
  type:types.uiOpenModal
})
export const uiCloseModal=()=>({
  type:types.uiCloseModal
})