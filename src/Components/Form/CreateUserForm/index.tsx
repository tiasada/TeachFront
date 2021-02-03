import React, { FormEvent, useState } from 'react'
import { CreateButton, Title } from './styles'
import { Label as InputLabel } from '../../../ui/Label'
import { register } from '/api'
import Input from '/ui/Input'

type Props = {
  title: string
  buttonText: string
  role: string
}
type Inputs = {
  type: string
  title: string
  value: string
  holder?: string
  set: React.Dispatch<React.SetStateAction<string>>
}

const CreateUserForm = ({ title, buttonText, role }: Props) => {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [birthdate, setBirth] = useState('')

  const [registration, setRegistration] = useState('')

  const inputs: Inputs[] = [
    {
      type: 'text',
      title: 'name',
      value: name,
      holder: 'nome',
      set: setName
    },
    {
      type: 'text',
      title: 'cpf',
      value: cpf,
      holder: '00011100011',
      set: setCpf
    },
    {
      type: 'number',
      title: 'phonenumber',
      value: phonenumber,
      set: setPhonenumber
    },
    {
      type: 'date',
      title: 'birthdate',
      value: birthdate,
      set: setBirth
    },
    {
      type: 'text',
      title: 'registration',
      value: registration,
      holder: 'Matricula',
      set: setRegistration
    }
  ]

  const user = { name, cpf, phonenumber, birthdate, registration, role }

  if (role === 'teacher') {
    inputs.splice(4, 1)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    register(user)
      .then(() => alert('good'))
  }

  return (
    <form onSubmit={onSubmit}>
      <Title>{title}</Title>
      <div>
        {inputs.map((item, index) =>
          (
              <section key={index}>
                <InputLabel>{item.title}</InputLabel>
                <Input
                  type={item.type}
                  name={item.title}
                  placeholder={item.holder}
                  value={item.value}
                  onChange={e => item.set(e.target.value)}
                />
              </section>
          )
        )}
      </div>
      <CreateButton type="submit">{buttonText}</CreateButton>
    </form>
  )
}

export default CreateUserForm
