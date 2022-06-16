import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import { useSelector } from 'react-redux'

//rutas administrador
const rutesAdmistrator = ['Listado General de Permisos', 'Listado General de Asistencias','Dashboard']
//rutas usuario
const rutesEmployee = ['Formulario de Permisos','Listado de mis Permisos','Listado de mis Asistencias']
const AppContent = () => {
  const { role } = useSelector((state) => state.auth)
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            if (role === 'admin-access'){
              return (
                route.element &&
                (rutesEmployee.includes(route.name) ? (
                  null
                ) : (
                  <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
                ))
              )
            }else{
              return (
                route.element &&
                (rutesAdmistrator.includes(route.name)? (
                  null
                ) : (
                  <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
                ))
              )
            }
          })}
          <Route path="/" element={<Navigate to={role === 'admin-access'?"dashboard":"manage/myattendances"}  replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
