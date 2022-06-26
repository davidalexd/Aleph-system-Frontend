import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowThickBottom,
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilClock,
  cilContact,
  cilCursor,
  cilDrop,
  cilFindInPage,
  cilNotes,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilStar,
  cilTask,
  cilUser,
  cilUserPlus,
  cilWallet,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Gestionar',
  },
  {
    component: CNavItem,
    name: 'Solicitudes de usuarios',
    to: '/manage/usersrequest',
    icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Mis solicitudes',
    to: '/manage/myrequest',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Formulario de permisos',
    to: '/manage/formpermises',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Mis Asistencias',
    to: '/manage/myattendances',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Asistencias de usuarios',
    to: '/manage/usersattendances',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Gestion de usuarios',
    to: '/manage/user',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Mi perfil',
    to: '/base',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Configuraciones',
  },

  {
    component: CNavGroup,
    name: 'Configuraciones',
    to: '/buttons',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
]
export default _nav
// {
//   component: CNavTitle,
//   name: 'Logout',
// },
// {
//   component: CNavGroup,
//   name: 'Pages',
//   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//   items: [
//     {
//       component: CNavItem,
//       name: 'Login',
//       to: '/login',
//     },
//     {
//       component: CNavItem,
//       name: 'Register',
//       to: '/register',
//     },
//     {
//       component: CNavItem,
//       name: 'Error 404',
//       to: '/404',
//     },
//     {
//       component: CNavItem,
//       name: 'Error 500',
//       to: '/500',
//     },
//   ],
// },