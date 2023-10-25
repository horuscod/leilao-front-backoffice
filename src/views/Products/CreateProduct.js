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
  CFormTextarea,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CModalHeader,
  CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCardTitle,
  CFormCheck,
} from '@coreui/react'

const CreateProduct = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [productData, setProductData] = useState({
    name: '',
    marketPrice: '',
    warrantyTime: '',
    dateInit: '',
    description: '',
    imgMain: '',
    imgCarrousel1: '',
    imgCarrousel2: '',
    imgCarrousel3: '',
    minLance: '',
    valueFree: '',
    botWin: '',
  })
  const [visibleModal, setVisibleModal] = useState(false)
  const [validateInput, setValidateInput] = useState({
    nameInput: false,
    emailInput: false,
    passwordInput: false,
  })

  const [validated, setValidated] = useState(false)

  const ActionCreateProduct = (event) => {
    event.preventDefault()
    alert('pegando')
    if (productData.name != '') {
      alert('Passou')
      fetch('https://leilao-a04a220e8c49.herokuapp.com/newProduct', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }))
  }

  const canceledAction = () => {
    setVisibleModal(false)
    window.location.href = '/#/produtos/todos-os-produtos'
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
                Configuração de Produto
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent className="paddingBox">
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === 1}>
              <CRow>
                <CCol>
                  <CForm className="row g-2" noValidate validated={validated}>
                    <CRow>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="name">Nome do Produto</CFormLabel>
                        <CFormInput
                          type="text"
                          id="name"
                          name="name"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha o Nome do Produto"
                          placeholder="Ex: MacBook Pro 2023"
                          required
                          value={productData.name || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="marketPrice">Preço do Mercado</CFormLabel>
                        <CFormInput
                          type="text"
                          id="marketPrice"
                          name="marketPrice"
                          placeholder="Ex: R$13.000,00"
                          feedbackValid="Está correto"
                          feedbackInvalid="Por favor coloque o Preço de Mercado"
                          required
                          value={productData.marketPrice || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="warrantyTime">Tempo de Garantia</CFormLabel>
                        <CFormInput
                          type="text"
                          id="warrantyTime"
                          name="warrantyTime"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha o Tempo de Garantia"
                          placeholder="Ex: 12 Meses"
                          required
                          value={productData.warrantyTime || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="dateInit">Data de Inicio do leilão</CFormLabel>
                        <CFormInput
                          type="text"
                          id="dateInit"
                          name="dateInit"
                          placeholder="Ex: DIA/MES/ANO HORAS 10/10/2023 18:00"
                          feedbackValid="Está correto"
                          feedbackInvalid="Por favor coloque a Data de Inicio"
                          required
                          value={productData.dateInit || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol sm={12} md={12} lg={12}>
                        <CFormLabel htmlFor="password">Descrição do Produto</CFormLabel>
                        <CFormTextarea
                          rows={6}
                          text="Must be 8-20 words long."
                          id="description"
                          name="description"
                          placeholder="Digite a descrição do produto e suas caracteristicas"
                          feedbackValid="Está correto"
                          feedbackInvalid="Por favor preencha a descrição do produto"
                          required
                          value={productData.description || ''}
                          onChange={handleInputChange}
                        ></CFormTextarea>
                      </CCol>
                    </CRow>

                    <CRow>
                      <hr style={{ margin: '20px 0 20px 0' }} />
                      <CCardTitle>Configuração de Imagens do Produto</CCardTitle>
                      <CCol sm={12} md={12} lg={12}>
                        <CFormLabel htmlFor="imgMain">Imagem Principal</CFormLabel>
                        <CFormInput
                          type="text"
                          id="imgMain"
                          name="imgMain"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha a imagem do produto"
                          placeholder="Adicione a Imagem Principal do produto"
                          required
                          value={productData.imgMain || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol sm={4} md={4} lg={4}>
                        <CFormLabel htmlFor="imgCarrousel1">Imagem do Carrousel</CFormLabel>
                        <CFormInput
                          type="text"
                          id="imgCarrousel1"
                          name="imgCarrousel1"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha o Nome do Produto"
                          placeholder="Ex: MacBook Pro 2023"
                          required
                          value={productData.imgCarrousel1 || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol sm={4} md={4} lg={4}>
                        <CFormLabel htmlFor="imgCarrousel2">Imagem do Carrousel</CFormLabel>
                        <CFormInput
                          type="text"
                          id="imgCarrousel2"
                          name="imgCarrousel2"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha a imagem do produto"
                          placeholder="Ex: MacBook Pro 2023"
                          required
                          value={productData.imgCarrousel2 || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol sm={4} md={4} lg={4}>
                        <CFormLabel htmlFor="imgCarrousel3">Imagem do Carrousel</CFormLabel>
                        <CFormInput
                          type="text"
                          id="imgCarrousel3"
                          name="imgCarrousel3"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha a imagem do produto"
                          placeholder="Ex: MacBook Pro 2023"
                          required
                          value={productData.imgCarrousel3 || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CRow>

                    <CRow>
                      <hr style={{ margin: '20px 0 20px 0' }} />
                      <CCardTitle>Configuração do Leilão</CCardTitle>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="minLance">Valor Minimo Do Lance</CFormLabel>
                        <CFormInput
                          type="text"
                          id="minLance"
                          name="minLance"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha o valor minimo"
                          placeholder="Qual é o valor minimo, Exemplo: 1, minimo 1 Lance."
                          required
                          value={productData.minLance || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="maxLance">Numero de Lances Máximo</CFormLabel>
                        <CFormInput
                          type="text"
                          id="maxLance"
                          name="maxLance"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Por Favor preencha a quantidade de lances máximos"
                          placeholder="Qual é o valor Máximo, Exemplo: 100, Máximo 100 Lances por vez"
                          required
                          value={productData.maxLance || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CRow>

                    <CRow style={{ margin: '10px 0 10px 0' }}>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="valueFree">Valor de liberação</CFormLabel>
                        <CFormInput
                          type="text"
                          id="valueFree"
                          name="valueFree"
                          feedbackValid="Obrigado pro realizar o preenchimento"
                          feedbackInvalid="Preencha o Valor de Liberação"
                          placeholder="Ex: Precisa de 1.000 LANCES para liberar o Premio"
                          required
                          value={productData.valueFree || ''}
                          onChange={handleInputChange}
                        />
                      </CCol>
                      <CCol sm={6} md={6} lg={6}>
                        <CFormLabel htmlFor="botWin" style={{ margin: '10px 0 10px 0' }}>
                          O Bot vai ganhar Esse sorteio ? Caso sim, confirme clicando no botão
                          abaixo
                        </CFormLabel>
                        <CFormCheck
                          type="radio"
                          name="botWin"
                          id="botWin"
                          label="SIM"
                          value={productData.botWin || ''}
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
                          <CButton color="primary" type="submit" onClick={ActionCreateProduct}>
                            Finalizar Criação
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
            Produto criado com sucesso, estamos redirecionando você para a listagem de todos os
            Produtos!
          </p>
        </CModalBody>
      </CModal>
    </CContainer>
  )
}

export default CreateProduct
