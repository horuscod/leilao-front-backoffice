import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBullhorn,
  cilMoodVeryGood,
  cilContact,
  cilGroup,
  cilDrop,
  cilTags,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'GERENCIAMENTO',
  },
  {
    component: CNavItem,
    name: 'Produtos',
    to: '/produtos/todos-os-produtos',
    icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pacotes',
    to: '/pacotes/todos-os-pacotes',
    icon: <CIcon icon={cilBullhorn} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Campeões',
    to: '/campeoes/todos-os-campeoes',
    icon: <CIcon icon={cilMoodVeryGood} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'CONFIGURAÇÕES',
  },
  {
    component: CNavItem,
    name: 'Administradores',
    to: '/adminstrador/todos-os-administradores',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Criador de Produtos',
    to: '/editor/todos-os-editores',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
]

export default _nav
