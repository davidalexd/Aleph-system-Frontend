import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
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
import { startRegisterEmail } from 'src/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.ui)
  const [formValues, handleInputChange] = useForm({
    name: 'alexander jose',
    email: 'koko@gmail.com',
    password1: '123456',
    password2: '123456',
  })
  const handleRegister = (e) => {
    e.preventDefault()
    if (password1 !== password2) {
      return console.log('contraseñas no iguales')
    }
    dispatch(startRegisterEmail(email, password1,name))

    navigate('/dashboard', {
      replace: true,
    })
  }
  const { name, email, password1, password2 } = formValues
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleRegister}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      name="password1"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={password1}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      name="password2"
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      value={password2}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton  type="submit"  color="success" disabled={loading}>Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
