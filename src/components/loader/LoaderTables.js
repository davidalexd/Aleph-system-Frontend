import { CSpinner } from '@coreui/react'
import React from 'react'
import 'src/components/loader/loaderTables.css'
export const LoaderTables = () => {
  return (
    <div className="container-table">
      <div className="content-loader">
        <div>
          <CSpinner color="primary" variant="grow" />
          <CSpinner color="secondary" variant="grow" />
          <CSpinner color="primary" variant="grow" />
          <CSpinner color="secondary" variant="grow" />
        </div>
        <h3 className="message-spinner">Cargando..</h3>
      </div>
    </div>
  )
}
