import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
export const PrivateRoute = ({ children, isAuthenticated }) => {
  //const { user } = useContext(AuthContext)
  return isAuthenticated ? children : <Navigate to="/login" />
}
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}
