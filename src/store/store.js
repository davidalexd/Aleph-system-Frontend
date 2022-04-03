import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from 'src/auth/authReducer'
import { changeStateReducer } from 'src/reducers/changeStateReducer'
import { uiReducer } from 'src/reducers/uiReducer'

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  changeState: changeStateReducer,
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
