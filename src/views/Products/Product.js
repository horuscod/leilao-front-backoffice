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

const Produtos = () => {
  const [dataUserItem, setDataUserItem] = useState([])
  useEffect(() => {
    fetch('https://leilao-a04a220e8c49.herokuapp.com/allProducts', {
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
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Data Sorteio</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Valor de Mercado</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Valor de Liberação</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {dataUserItem.map((item, index) => {
                      const timestamp = item.dateLucky
                      const date = new Date(
                        timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000,
                      )
                      const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss')

                      return (
                        <CTableRow key={index}>
                          <CTableHeaderCell scope="row">{formattedDate}</CTableHeaderCell>
                          <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
                          <CTableDataCell>{item.marketPrice}</CTableDataCell>
                          <CTableDataCell>{item.valueFree}</CTableDataCell>
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

export default Produtos
