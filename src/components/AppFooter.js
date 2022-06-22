import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.alephsac.com" target="_blank" rel="noopener noreferrer">
        Aleph-Group 2022
        </a>
        <span className="ms-1">Aleph-system</span>
      </div>
      <div className="ms-auto">
        <a href="https://www.alephsac.com" target="_blank" rel="noopener noreferrer">
          Sistema de control Aleph-Group
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
