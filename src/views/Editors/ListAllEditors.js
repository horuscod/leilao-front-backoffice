import React, { useState, useEffect } from 'react'
import {
  CContainer,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CButton,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { NavLink } from 'react-router-dom'
import { format } from 'date-fns'

const Administrators = () => {
  const [dataUserItem, setDataUserItem] = useState([])
  useEffect(() => {
    fetch('https://leilao-a04a220e8c49.herokuapp.com/allUsersEditor', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setDataUserItem(data)
        console.log(data)
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error)
      })
  }, [])


  return (
    <>
      <CContainer>
        <CCard>
          <CCardBody>
            <CRow className="justify-content-end">
              <CCol>Visualize todos os Editores do Sistema</CCol>
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
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                      <CTableHeaderCell scope="col">E-mail de Acesso</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Data de Criação</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {dataUserItem.map((item, index) => {
                      const timestamp = item.dataCreated
                      const date = new Date(
                        timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000,
                      )
                      const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss')

                      return (
                        <CTableRow key={index}>
                          <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
                          <CTableDataCell>{item.email}</CTableDataCell>
                          <CTableDataCell>{formattedDate}</CTableDataCell>
                          <CTableDataCell>Tem que add Icons Edit View e Remove</CTableDataCell>
                        </CTableRow>
                      )
                    })}
                  </CTableBody>
                </CTable>
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
