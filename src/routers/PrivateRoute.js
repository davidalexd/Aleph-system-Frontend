import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from 'src/auth/authContext'
import { Navigate } from 'react-router-dom'
export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  return user.logged ? children : <Navigate to="/login" />
}
PrivateRoute.propTypes = {
  //isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}
