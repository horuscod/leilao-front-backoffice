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
  CModalFooter,
} from '@coreui/react'

const CreateNewEditor = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [visibleModal, setVisibleModal] = useState(false)
  const [validated, setValidated] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }))
  }

  const ActionCreateNewEditor = (event) => {
    event.preventDefault()
    if (userData.name != '') {
      fetch('https://leilao-a04a220e8c49.herokuapp.com/newUserEditor', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((data) => {
          if (data.statusText == 'Created') {
            setVisibleModal(true)
            setTimeout(() => {
              window.location.href = '#/editor/todos-os-editores'
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
    window.location.href = '#/editor/todos-os-editores'
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
                Editor do Sistema
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent className="paddingBox">
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === 1}>
              <CRow>
                <CCol>
                  <CForm className="row g-2" noValidate validated={validated}>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="name">Nome do Editor</CFormLabel>
                      <CFormInput
                        type="text"
                        id="name"
                        name="name"
                        feedbackValid="Esse nome é valido"
                        feedbackInvalid="Por Favor preencha o Nome do Adminstrador"
                        placeholder="Ex: João Paulo"
                        required
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                    </CCol>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="email">E-mail de acesso</CFormLabel>
                      <CFormInput
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ex: email@gmail.com"
                        feedbackValid="Esse e-mail é valido"
                        feedbackInvalid="Por Favor preencha o E-mail de Acesso"
                        required
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                    </CCol>
                    <CCol sm={6} md={6} lg={6}>
                      <CFormLabel htmlFor="password">Senha do Editor</CFormLabel>
                      <CFormInput
                        type="password"
                        id="password"
                        name="password"
                        feedbackValid="Senha está Okay"
                        feedbackInvalid="A senha deve conter pelo menos 6 caracteres"
                        placeholder="Min 6 digitos"
                        required
                        value={userData.password}
                        onChange={handleInputChange}
                      />
                    </CCol>
                    <CRow>
                      <CCol>
                        <hr />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <CButton color="light" className="me-md-2" onClick={canceledAction}>
                            Cancelar Criação
                          </CButton>
                          <CButton color="primary" onClick={ActionCreateNewEditor}>
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
            Usuário Editor criado com sucesso, estamos redirecionando você para a listagem de todos
            os usuários Editores!
          </p>
        </CModalBody>
      </CModal>
    </CContainer>
  )
}

export default CreateNewEditor
