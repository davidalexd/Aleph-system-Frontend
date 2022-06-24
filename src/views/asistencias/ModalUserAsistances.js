import { CButton, CModal, CModalBody, CModalHeader, CModalTitle ,CModalFooter} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAttendanceUser } from 'src/actions/attedance'
import { uiCloseModal } from 'src/actions/ui'
import CardBodyAttendanceList from './tablas/CardBodyAttendanceList'

const ModalUserAsistances = ({userSelected}) => {
    const { modalOpen } = useSelector((state) => state.ui)
    const dispatch = useDispatch()
    useEffect(() => {
        if(userSelected.id){
            dispatch(getAttendanceUser(userSelected.id))
        }
      }, [dispatch,userSelected])
      const closeModal = () => {
        dispatch(uiCloseModal())
        //cerrar modal
      }
  return (
    <>
    <CModal scrollable visible={modalOpen} size="xl" onClose={closeModal}>
      <CModalHeader>
        <CModalTitle>{`Detalle diario del trabajador ${userSelected.name}`}</CModalTitle>
      </CModalHeader>
      <CModalBody>
       <CardBodyAttendanceList columna={12}/>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={() => closeModal()}>Cerrar</CButton>
      </CModalFooter>
    </CModal>
    </>
  )
}

export default ModalUserAsistances