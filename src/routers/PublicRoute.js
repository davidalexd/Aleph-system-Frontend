import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from 'src/auth/authContext'
import { Navigate } from 'react-router-dom'
export const PublicRoute = ({ children, isAuthenticated }) => {
  //const { user } = useContext(AuthContext)
  return isAuthenticated ? <Navigate to="/dashboard" /> : children
}
PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}
