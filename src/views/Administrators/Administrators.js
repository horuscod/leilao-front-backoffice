import React from 'react'
import {
  CContainer,
  CTable,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CButton,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { NavLink } from 'react-router-dom'

const Administrators = () => {
  const columns = [
    {
      key: 'name',
      label: 'Nome',
      _props: { scope: 'col' },
    },
    {
      key: 'email',
      label: 'E-mail',
      _props: { scope: 'col' },
    },
    {
      key: 'dateCreated',
      label: 'Data da criação',
      _props: { scope: 'col' },
    },
    {
      key: 'actions',
      label: 'Ações',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      name: 'Angela',
      email: 'admin1@gmail.com',
      dateCreated: '21/10/2023',
      actions: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      name: 'Gustavo',
      email: 'superAdmin1@gmail.com',
      dateCreated: '30/10/2023',
      actions: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      name: 'Fred',
      email: 'novoadmin@gmail.com',
      dateCreated: '21/12/2023',
      actions: '@twitter',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
  ]
  return (
    <>
      <CContainer>
        <CCard>
          <CCardBody>
            <CRow className="justify-content-end">
              <CCol>Visualize todos os administradores do sistema</CCol>
              <CCol lg={2}>
                <NavLink to="/admin/newAdmin">
                  <CButton color="primary">Novo Admin</CButton>
                </NavLink>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
        <CRow className="align-items-start">
          <CCol>
            <CCard>
              <CCardBody>
                <CTable columns={columns} items={items} />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CCard>
          <CCardBody>
            <CRow className="align-items-end">
              <CCol>
                <CPagination aria-label="Page navigation example">
                  <CPaginationItem>Previous</CPaginationItem>
                  <CPaginationItem>1</CPaginationItem>
                  <CPaginationItem>2</CPaginationItem>
                  <CPaginationItem>3</CPaginationItem>
                  <CPaginationItem>Next</CPaginationItem>
                </CPagination>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}

export default Administrators
