import React, { Suspense, useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { login } from './actions/auth'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { PrivateRoute } from './routers/PrivateRoute'
import { PublicRoute } from './routers/PublicRoute'
import './scss/style.scss'
import { store } from './store/store'

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

const App = () => {
  const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checking, setChecking] = useState(true)

  const { uid } = useSelector((state) => state.auth)
  useEffect(() => {
    if (uid || document.cookie) {
      dispatch(login(1, 'Gustavo Farfan'))
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    setChecking(false)
  }, [setIsLoggedIn, setChecking, uid])

  if (checking) {
    return <h1>Esperen...</h1>
  }

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          {/* <Route exact path="/register" name="Register Page" element={<Register />} /> */}
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticated={isLoggedIn}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute isAuthenticated={isLoggedIn}>
                <DefaultLayout />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
