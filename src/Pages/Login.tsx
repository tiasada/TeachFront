import React from 'react'
import Texts from '.././Components/Texts'
import Logo from '.././Components/Logo'

// Com return (quando temos mais código além de apenas um retorno)
// Esta função retorna HTML (JSX), então logo ela é um COMPONENTE
export const Login = () => (
  <main>
    <Logo />
    <Texts />
  </main>
)

export default Login