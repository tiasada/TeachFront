import React from 'react'
import Texts from '.././Components/Texts'
import Logo from '.././Components/Logo'
import Form from '.././Components/Form'
import Divbox from '.././Components/DivBox'

// Com return (quando temos mais código além de apenas um retorno)
// Esta função retorna HTML (JSX), então logo ela é um COMPONENTE

export const Login = () => (
  <main>
    <div>
      <Divbox>
        <Texts />
        <Logo />
        <Form />
      </Divbox>
    </div>
  </main>
)

export default Login