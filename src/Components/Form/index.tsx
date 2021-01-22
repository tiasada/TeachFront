import axios from 'axios'
import React from 'react'
import { LoginButton } from '../../ui/Buttons/button/styles'
import { LoginForm } from './styles'

const Form = () => (
  <LoginForm>
    <div>
      <input type= 'text' placeholder='Login' placeholder-color ='white'/>
    </div>
    <div>
      <input
        type='password'
        name='password'
        placeholder='Password'
      />
    </div>
    <LoginButton>{'Login'}</LoginButton>
  </LoginForm>
)

export default Form
