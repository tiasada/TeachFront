import React from 'react'
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
    <button>{'Login'}</button>
  </LoginForm>
)

export default Form
