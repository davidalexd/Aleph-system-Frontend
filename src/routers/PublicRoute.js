import React, { useContext } from 'react'
import PropTypes from 'prop-types'
// import { AuthContext } from 'src/auth/authContext'
import { Navigate } from 'react-router-dom'
export const PublicRoute = ({ children, isLoggedIn }) => {
  return isLoggedIn ? <Navigate to="/dashboard" /> : children
}
PublicRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}
