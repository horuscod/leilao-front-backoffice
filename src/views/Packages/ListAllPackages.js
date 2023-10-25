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

const ListAllPackages = () => {
  const [dataChampions, setDataChampions] = useState([])
  useEffect(() => {
    fetch('https://leilao-a04a220e8c49.herokuapp.com/allPackages', {
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
        setDataChampions(data)
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
              <CCol>Visualize todos os Campeos</CCol>
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
                      <CTableHeaderCell scope="col">Nome da Oferta</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Numero de Cupons</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Checkout da Oferta</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Valor do Pacote(R$)</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {dataChampions.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
                        <CTableDataCell>{item.quantityCupom}</CTableDataCell>
                        <CTableDataCell>{item.urlBuyPackage}</CTableDataCell>
                        <CTableDataCell>{item.valueToBuyPackage}</CTableDataCell>
                        <CTableDataCell>Ações de View, Excluir (Icones)</CTableDataCell>
                      </CTableRow>
                    ))}
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

export default ListAllPackages
