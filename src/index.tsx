import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(
  // estamos instanciando o component App
  // e pedindo para o React renderizá-lo dentro do elemento app
  <App />,
  document.getElementById('app')
)