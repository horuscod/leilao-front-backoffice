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

const Produtos = () => {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'productName',
      label: 'Nome do Produto',
      _props: { scope: 'col' },
    },
    {
      key: 'dataLance',
      label: 'Data do leilão',
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
      id: 1,
      productName: 'Macbook 2021',
      dataLance: '21/10/2023',
      actions: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      productName: 'iPhone XR 128gb',
      dataLance: '30/10/2023',
      actions: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      productName: 'Cama Box Ultra',
      dataLance: '21/12/2023',
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
              <CCol>One of two columns</CCol>
              <CCol lg={2}>
                <NavLink to="/produtos/create">
                  <CButton color="primary">Adicionar Produto</CButton>
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

export default Produtos
