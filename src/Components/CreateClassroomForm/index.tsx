import React, { FormEvent, useState } from 'react'
import { CreateButton } from './styles'
import { Label as InputLabel } from '/ui/Label'
import { createclassrom } from '/api'
import Input from '/ui/Input'
import { RegisterTitle } from '../Texts/Titles/styles'

const CreateClassroomForm = () => {
  const [name, setName] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createclassrom({ name })
      .then(() => alert('Turma criada'))
  }

  return (
    <form onSubmit={onSubmit}>
      <RegisterTitle>Criar Turma</RegisterTitle>
      <div>
        <InputLabel>Nome da Turma</InputLabel>
        <Input
          type='text'
          name='name'
          placeholder='000 Example'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      <CreateButton type="submit">Criar</CreateButton>
      </div>
    </form>
  )
}

export default CreateClassroomForm
