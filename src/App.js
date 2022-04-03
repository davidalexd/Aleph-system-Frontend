import React, { Suspense, useEffect, useReducer, useState } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { login } from './actions/auth'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { PrivateRoute } from './routers/PrivateRoute'
import { PublicRoute } from './routers/PublicRoute'
import './scss/style.scss'
import { storeApp } from './store/storeApp'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const initToken = document.cookie.replace('token=', '')
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checking, setChecking] = useState(true)
  const dispatch = useDispatch()
  const [token, setToken] = useState(initToken)

  useEffect(() => {
    console.log(token)
    if (token) {
      console.log('pase por aqui')
      dispatch(login(1, 'Gustavo Farfan'))
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    setChecking(false)
  }, [setIsLoggedIn, setChecking, token])

  // if (checking) {
  //   return <h1>Esperen...</h1>
  // }

  return (
    <Provider store={storeApp}>
      {/* <AuthContext.Provider value={{ user, dispatch }}> */}
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            {/* <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
            {/* <Route exact path="/login" name="Login Page" element={<Login />} /> */}
            <Route
              path="/login"
              element={
                <PublicRoute isLoggedIn={isLoggedIn}>
                  <Login />
                </PublicRoute>
              }
            />
            {/* <Route path="*" name="Home" element={<DefaultLayout />} /> */}
            <Route
              path="*"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <DefaultLayout />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </HashRouter>
      {/* </AuthContext.Provider> */}
    </Provider>
  )
}

export default App
