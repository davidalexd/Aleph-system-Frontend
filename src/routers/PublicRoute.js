import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PublicRoute = ({ children, isAuthenticated }) => {
  const { role } = useSelector((state) => state.auth)
  return isAuthenticated ? <Navigate to={role === 'admin-access'?"/dashboard":"/manage/myattendances"} /> : children
}
PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}
