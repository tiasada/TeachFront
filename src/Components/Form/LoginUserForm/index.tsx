import React, { FormEvent, useState } from 'react'
import { Title, CreateButton } from './styles'
import { Label as InputLabel } from '../../../ui/Label'
import axios from 'axios'
import { login } from '../../../api'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({ username, password})
    .then(resp => alert("resp.data"))
    .catch(() => alert('Login inválido'))
  }

  return (
    <form onSubmit={onSubmit}>
      <Title>Login</Title>
      <div>
        <InputLabel>Username</InputLabel>
        <input
          type='username'
          name='username'
          placeholder='username123'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <InputLabel>Senha</InputLabel>
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <CreateButton type="submit">Logar</CreateButton>
    </form>
  )
}

export default LoginForm