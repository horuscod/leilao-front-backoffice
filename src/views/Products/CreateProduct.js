import React, { useState } from 'react'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CFormCheck,
} from '@coreui/react'

const CreateProduct = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <CContainer>
      <CCard>
        <CCardBody>
          <CNav variant="tabs" role="tablist">
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 1}
                component="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                Produto
              </CNavLink>
            </CNavItem>
            <CNavItem role="presentation">
              <CNavLink
                active={activeKey === 2}
                component="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                Configurações do Lance
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent className="paddingBox">
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === 1}>
              <CRow>
                <CCol>
                  <CForm className="row g-2">
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="nameProduct">Nome do Produto</CFormLabel>
                      <CFormInput
                        type="text"
                        id="nameProduct"
                        placeholder="Informe o nome do produto"
                      />
                    </CCol>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="valueMarket">Valor de Mercado</CFormLabel>
                      <CFormInput
                        type="text"
                        id="valueMarket"
                        placeholder="Informe o Valor de Mercado ex R$5.000,00"
                      />
                    </CCol>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="warrantyTime">Tempo de Garantia</CFormLabel>
                      <CFormInput
                        type="text"
                        id="warrantyTime"
                        placeholder="Ex: 12 Meses ou 15 dias"
                      />
                    </CCol>
                    <CCol sm={12} md={12} lg={12}>
                      <CFormTextarea
                        id="description"
                        label="Descrição do produto"
                        rows={5}
                        text="O texto pode ter mais de 300 caracteres, basta escrever"
                      ></CFormTextarea>
                    </CCol>
                    <CRow>
                      <CCol sm={12} md={12} lg={12}>
                        <CFormLabel htmlFor="imgMain">Imagem Principal do Produto</CFormLabel>
                        <CFormInput type="file" id="imgMain" />
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol sm={4} md={4} lg={4}>
                        <CFormLabel htmlFor="imgCarrousel1">Imagem Carrousel 1</CFormLabel>
                        <CFormInput type="file" id="imgCarrousel1" />
                      </CCol>
                      <CCol sm={4} md={4} lg={4}>
                        <CFormLabel htmlFor="imgCarrousel2">Imagem Carrousel 2</CFormLabel>
                        <CFormInput type="file" id="imgCarrousel2" />
                      </CCol>
                      <CCol sm={4} md={4} lg={4}>
                        <CFormLabel htmlFor="imgCarrousel3">Imagem Carrousel 3</CFormLabel>
                        <CFormInput type="file" id="imgCarrousel3" />
                      </CCol>
                    </CRow>
                  </CForm>
                </CCol>
              </CRow>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 2}>
              <CRow>
                <CCol sm={6} md={6} lg={6}>
                  <CFormLabel htmlFor="valeuOffert">Valor Mínimo do Lance</CFormLabel>
                  <CFormInput
                    type="text"
                    id="valeuOffert"
                    placeholder="Valor minimo 0.10 é igual há 10 centavos"
                  />
                </CCol>
                <CCol sm={6} md={6} lg={6}>
                  <CFormLabel htmlFor="valeuFree">
                    Quantidade de Lance Para liberar o premio
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="valeuFree"
                    placeholder="Ex: 1000 Lances de 1 centavo"
                  />
                </CCol>
              </CRow>
              <CRow className="paddingBox">
                <CCol sm={6} md={6} lg={6}>
                  <CFormLabel htmlFor="winnerCheckBox">
                    O Bot deverá ganhar esse produto?
                  </CFormLabel>
                  <CFormCheck id="winnerCheckBox" label="Sim, o bot deverá ganhar esse sorteio" />
                </CCol>
              </CRow>
            </CTabPane>
            <CRow>
              <CCol>
                <hr />
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <CButton color="light" className="me-md-2">
                    Cancelar Criação
                  </CButton>
                  <CButton color="primary">Finalizar Criação</CButton>
                </div>
              </CCol>
            </CRow>
          </CTabContent>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default CreateProduct
