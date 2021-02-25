import React, { FormEvent, useState } from 'react'
import { Label as InputLabel } from '../../ui/Label'
import { createclassroom } from '/api'
import Input from '../../ui/Input'
import { ButtonRegister } from '/ui/Buttons'
import Typography from '/ui/Typography'

type Props = {
  title: string
  buttonText: string
  updateFunction: () => void
}

const CreateClassroomForm = ({ title, buttonText, updateFunction }: Props) => {
  const [name, setName] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createclassroom({ name })
      .then(() => {
        updateFunction()
        alert('Turma criada')
      })
      .catch(() => alert('Algo deu errado :('))
  }

  return (
    <form onSubmit={onSubmit}>
      <div style={{ marginTop: '20px', marginBottom: '30px' }}>
        <Typography variant='h3'>{title}</Typography>
      </div>
      <div>
        <InputLabel>Nome da Turma</InputLabel>
        <Input
          type='text'
          name='name'
          placeholder='Nome da Turma'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <ButtonRegister color='primary' type="submit">{buttonText}</ButtonRegister>
    </form>
  )
}

export default CreateClassroomForm
