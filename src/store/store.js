import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { attendanceReducer } from 'src/reducers/attendance/attendanceReducer'
import { authReducer } from 'src/reducers/auth/authReducer'
import { changeStateReducer } from 'src/reducers/changeStateReducer'
import { permissionReducer } from 'src/reducers/permission/permissionReducer'
import { uiReducer } from 'src/reducers/uiReducer'

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  changeState: changeStateReducer,
  attendance: attendanceReducer,
  permission: permissionReducer,
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
