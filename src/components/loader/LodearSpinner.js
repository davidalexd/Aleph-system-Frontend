import React from 'react'
import './loader.css'
import { Grid } from 'react-loader-spinner'
const LodearSpinner = () => {
  return (
    <div className="container-page">
      <div className="container-loader">
        <Grid height="250" width="250" color="#064555" ariaLabel="loading" />
        <h1 className="message"> {`Aleph Group & Asociados SAC`}</h1>
      </div>
    </div>
  )
}

export default LodearSpinner
