import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
export const PublicRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : children
}
PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}
