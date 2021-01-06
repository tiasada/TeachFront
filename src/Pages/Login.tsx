import React from 'react'
import { TextLogin } from '.././Components/Texts'
import Logo from '.././Components/Logo'
import Form from '.././Components/Form'
import Divbox from '.././Components/DivBox'

// Com return (quando temos mais código além de apenas um retorno)
// Esta função retorna HTML (JSX), então logo ela é um COMPONENTE

export const Login = () => (
  <main>
    <Divbox>
      <TextLogin />
      <Logo />
      <Form />
    </Divbox>
  </main>
)

export default Login