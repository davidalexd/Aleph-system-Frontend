import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import { useForm } from 'src/hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startLoginEmailPassword } from 'src/actions/auth'

const Login = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.ui)
  const navigate = useNavigate()
  const [formValues, handleInputChange] = useForm({
    email: 'farfan@gmail.com',
    password: '123456',
  })
  const { email, password } = formValues
  
  //aca haria en un useEfect que limpie la sesion en caso el usuario se haya olvidado de cerrar la sesion
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password))

    navigate('/dashboard', {
      replace: true,
    })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4 bg-primary text-white">
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p>Ingresa con tu cuenta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="email"
                        placeholder="Username"
                        autoComplete="username"
                        value={email}
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                        <CButton type="submit" className="btn btn-lg btn-outline-light mt-3" disabled={loading}>
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                <img className="card-card-img-overlay" src="https://media.discordapp.net/attachments/947243781030301717/987162997686423592/descarga.png" alt=""/>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
