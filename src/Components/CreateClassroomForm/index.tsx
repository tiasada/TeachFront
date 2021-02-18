import React, { FormEvent, useState } from 'react'
import { CreateButton } from './styles'
import { Label as InputLabel } from '../../ui/Label'
import { createclassrom } from '/api'
import Input from '../../ui/Input'
import { RegisterTitle } from '../Texts/Titles/styles'

type Props = {
  title: string
  buttonText: string
  updateFunction: () => void
}

const CreateClassroomForm = ({ title, buttonText, updateFunction }: Props) => {
  const [name, setName] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createclassrom({ name })
      .then(() => {
        updateFunction()
        alert('Turma criada')
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <RegisterTitle>{title}</RegisterTitle>
      <div>
        <InputLabel>Nome da Turma</InputLabel>
        <Input
          type='text'
          name='name'
          placeholder='000 Example'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      <CreateButton type="submit">{buttonText}</CreateButton>
      </div>
    </form>
  )
}

export default CreateClassroomForm
