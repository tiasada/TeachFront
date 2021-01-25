import React, { FormEvent, useState } from 'react'
import { LoginButton } from '/ui/Buttons/button/styles'
import { LoginInput } from './styles'
import { login } from '/api'


const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({ username, password})
    .then(resp => alert(resp.data))
    .catch(() => alert('Login inválido'))
  }
  return(
    <form onSubmit={onSubmit}>
      <div>
        <LoginInput 
        type= 'text' 
        placeholder='Login' 
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <LoginInput
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <LoginButton>{'Login'}</LoginButton>
    </form>
  )
}
export default Form
