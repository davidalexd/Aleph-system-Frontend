import React, { useContext } from 'react'
import PropTypes from 'prop-types'
// import { AuthContext } from 'src/auth/authContext'
import { Navigate } from 'react-router-dom'
export const PrivateRoute = ({ children, isLoggedIn }) => {
  console.log(isLoggedIn)
  return isLoggedIn ? children : <Navigate to="/login" />
}
PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}
