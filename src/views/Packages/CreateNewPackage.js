import React, { useState, useEffect } from 'react'
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
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CModalHeader,
  CModal,
  CModalTitle,
  CModalBody,
  CCardTitle,
  CModalFooter,
  CFormTextarea,
} from '@coreui/react'

const CreateNewPackage = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [packageData, setPackageData] = useState({
    name: '',
    quantityCupom: '',
    urlBuyPackage: '',
    valueToBuyPackage: '',
    urlImagePackage: '',
    textButtonBuy: '',
    description: '',
  })
  const [visibleModal, setVisibleModal] = useState(false)

  const [validated, setValidated] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPackageData((prevPackageData) => ({
      ...prevPackageData,
      [name]: value,
    }))
  }

  const ActionCreateProduct = (event) => {
    event.preventDefault()
    if (packageData.name != '') {
      fetch('https://leilao-a04a220e8c49.herokuapp.com/newPackage', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(packageData),
      })
        .then((data) => {
          if (data.statusText == 'Created') {
            setVisibleModal(true)
            setTimeout(() => {
              window.location.href = '/#/produtos/todos-os-produtos'
            }, 3500)
          }
        })
        .catch((error) => {
          console.log('Erro na solicitação:', error)
        })
    } else {
    }
  }

  const canceledAction = () => {
    setVisibleModal(false)
    window.location.href = '/#/admin/all-admins'
  }
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
                Pacotes de Ofertas
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent className="paddingBox">
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === 1}>
              <CRow>
                <CCol>
                  <CForm className="row g-2" noValidate validated={validated}>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="name">Nome do Pacote</CFormLabel>
                      <CFormInput
                        type="text"
                        id="name"
                        name="name"
                        feedbackValid="Esse nome é valido"
                        feedbackInvalid="Por favor preencha o Nome do Pacote"
                        placeholder="Ex: 700 cupons pelo preço de 500"
                        required
                        value={packageData.name}
                        onChange={handleInputChange}
                      />
                    </CCol>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="quantityCupom">Quantidade de Cupons</CFormLabel>
                      <CFormInput
                        type="number"
                        id="quantityCupom"
                        name="quantityCupom"
                        placeholder="Ex: 500"
                        feedbackValid="Quantidade valida"
                        feedbackInvalid="Por Favor preencha a quantidade de cupons"
                        required
                        value={packageData.quantityCupom}
                        onChange={handleInputChange}
                      />
                    </CCol>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="valueToBuyPackage">Valor em R$ do pacote</CFormLabel>
                      <CFormInput
                        type="text"
                        id="valueToBuyPackage"
                        name="valueToBuyPackage"
                        feedbackValid="Obrigadoo por informa o Valor"
                        feedbackInvalid="Valor minimo é de R$10,00"
                        placeholder="Ex: R$+valor >> R$500,00"
                        required
                        value={packageData.valueToBuyPackage}
                        onChange={handleInputChange}
                      />
                    </CCol>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="urlImagePackage">Imagem de DESTAQUE</CFormLabel>
                      <CFormInput
                        type="file"
                        id="urlImagePackage"
                        name="urlImagePackage"
                        feedbackValid="Obrigadoo por informa o Valor"
                        feedbackInvalid="Valor minimo é de R$10,00"
                        placeholder="Selecione a Imagem do Pacote"
                        required
                        value={packageData.urlImagePackage}
                        onChange={handleInputChange}
                      />
                    </CCol>
                    <CCol sm={12} md={12} lg={12}>
                      <CFormLabel htmlFor="description">Descrição do Pacote</CFormLabel>
                      <CFormTextarea
                        rows={6}
                        text="Must be 8-20 words long."
                        id="description"
                        name="description"
                        placeholder="Digite a descrição do produto e suas caracteristicas"
                        feedbackValid="Está correto"
                        feedbackInvalid="Por favor preencha a descrição do Pacote"
                        required
                        value={packageData.description || ''}
                        onChange={handleInputChange}
                      ></CFormTextarea>
                    </CCol>

                    <CRow>
                      <hr style={{ margin: '20px 0 20px 0' }} />
                      <CCardTitle>Configurações de CHECKOUT</CCardTitle>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="textButtonBuy">Texto do botão de COMPRA</CFormLabel>
                        <CFormInput
                          type="text"
                          id="textButtonBuy"
                          name="textButtonBuy"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha o Texto do botão"
                          placeholder="Ex: Comprar Agora"
                          required
                          value={packageData.textButtonBuy || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="urlBuyPackage">LINK DO CHECKOUT</CFormLabel>
                        <CFormInput
                          type="text"
                          id="urlBuyPackage"
                          name="urlBuyPackage"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha o Texto do botão"
                          placeholder="Ex: https://linkdaplataforma.com/checkout-a"
                          required
                          value={packageData.urlBuyPackage || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol>
                        <hr />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <CButton color="light" className="me-md-2" onClick={canceledAction}>
                            Cancelar Criação
                          </CButton>
                          <CButton color="primary" onClick={ActionCreateProduct}>
                            Criar Pacote
                          </CButton>
                        </div>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCol>
              </CRow>
            </CTabPane>
          </CTabContent>
        </CCardBody>
      </CCard>
      <CModal visible={visibleModal}>
        <CModalHeader>
          <CModalTitle>Parabéns!</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            Pacote de Oferta criado com sucesso, estamos redirecionando você para a listagem de
            todos os Pacotes de Ofertas!
          </p>
        </CModalBody>
      </CModal>
    </CContainer>
  )
}

export default CreateNewPackage
