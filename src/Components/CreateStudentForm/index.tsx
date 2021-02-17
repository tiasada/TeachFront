import React, { FormEvent, useState } from 'react'
import { Label as InputLabel } from '../../ui/Label'
import { register } from '/api'
import Input from '/ui/Input'
import { RegisterTitle } from '../Texts/Titles/styles'
import { ButtonRegisters } from '/ui/Buttons/button/styles'

type Props = {
  title: string
  buttonText: string
}
type Inputs = {
  type: string
  title: string
  value: string
  holder?: string
  set: React.Dispatch<React.SetStateAction<string>>
}

const CreateStudentForm = ({ title, buttonText }: Props) => {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [birthdate, setBirth] = useState('')
  const [email, setEmail] = useState('')
  const [registration, setRegistration] = useState('')

  const inputs: Inputs[] = [
    {
      type: 'text',
      title: 'Nome',
      value: name,
      holder: 'nome',
      set: setName
    },
    {
      type: 'text',
      title: 'CPF',
      value: cpf,
      holder: '00011100011',
      set: setCpf
    },
    {
      type: 'number',
      title: 'Contato',
      value: phonenumber,
      set: setPhonenumber
    },
    {
      type: 'date',
      title: 'Data de nascimento',
      value: birthdate,
      set: setBirth
    },
    {
      type: 'text',
      title: 'Email',
      value: email,
      holder: 'meuemail@email.com',
      set: setEmail
    },
    {
      type: 'text',
      title: 'Matrícula',
      value: registration,
      holder: 'Matricula',
      set: setRegistration
    }
  ]

  const user = { name, cpf, phonenumber, birthdate, email, registration, role: 'Student' }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    register(user)
      .then(() => alert('Estudante criado'))
  }

  return (
    <form onSubmit={onSubmit}>
      <div style={{ textAlign: 'center' }}>
        <RegisterTitle>{title}</RegisterTitle>
        {inputs.map((item, index) => (
        <section key={index}>
            <InputLabel>{item.title}</InputLabel>
            <Input
              type={item.type}
              name={item.title}
              placeholder={item.holder}
              value={item.value}
              onChange={e => item.set(e.target.value)}
            />
          </section>)
        )}
        <ButtonRegisters type="submit">{buttonText}</ButtonRegisters>
      </div>
    </form>
  )
}

export default CreateStudentForm
