import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
//rutas administrador
const rutesAdmistrator = ['Solicitudes de usuarios', 'Asistencias de usuarios','Dashboard']
//rutas usuario
const rutesEmployee = ['Mis solicitudes', 'Formulario de permisos','Mis Asistencias']
const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const { role } = useSelector((state) => state.auth)


  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CImage
          src="https://images-ext-2.discordapp.net/external/3emFzcURA6A_mzL0DBgHY9b1S96tvYQ56DA859iYFIc/https/i.imgur.com/bkj2xLb.png?width=1440&height=470"
          width={190}
          height={80}
        />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav
            items={
              role === 'admin-access'
                ? navigation.filter((el) => (rutesEmployee.includes(el.name) ? false : el))
                : navigation.filter((el) => (rutesAdmistrator.includes(el.name) ? false : el))
            }
          />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
