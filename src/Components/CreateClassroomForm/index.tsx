import React, { FormEvent, useState } from 'react'
import { CreateButton, Title } from './styles'
import { Label as InputLabel } from '/ui/Label'
import { createclassrom } from '/api'
import Input from '/ui/Input'

const CreateClassroomForm =   () => {
  const [name, setName] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createclassrom({ name })
      .then(() => alert('Turma Criada!'))
  }

  return (
    <form onSubmit={onSubmit}>
      <Title>Criar Turma</Title>
      <div>
        <InputLabel>Nome da Turma</InputLabel>
        <Input
          type='text'
          name='name'
          placeholder='000 Example'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <CreateButton type="submit">Criar</CreateButton>
    </form>
  )
}

export default CreateClassroomForm
