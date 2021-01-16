import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { LoginButton } from '~/Ui/Buttons/button/styles'
import { LoginForm, Title } from './styles'
import  Label from '../../Ui/Label'

type Props = {
  title: string
  buttonText: string
  emailProps: {
    type: string
    placeholder: string
  }
}

const CreateUserForm = ({ title, buttonText }: Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profile, setProfile] = useState<number>()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios.post(
      'https://localhost:5001/users',
      { name, email, password, profile }
    )
  }

  return (
    // Prevenindo que a página sofra um reload
    <form onSubmit={onSubmit}>
      <Title>{title}</Title>
      <div>
        <InputLabel>Nome</InputLabel>
        <input
          name='name'
          placeholder='João da Silva'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <InputLabel>Email</InputLabel>
        <input
          type='email'
          name='email'
          placeholder='jhon.test@gmail.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
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
      <div>
        <InputLabel>Perfil</InputLabel>
        <select
          value={profile}
          onChange={e => setProfile(parseInt(e.target.value))}
        >
            <option></option>
            <option value={0}>CBF</option>
            <option value={1}>Torcedor</option>
        </select>
      </div>
      <CreateButton>{buttonText}</CreateButton>
    </form>
  )
}

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
