import React from 'react'
import { Teacher } from '/api'

type Props = {
  teacher?: Teacher
}

const TeacherProfile = ({ teacher }: Props) => {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <h1>{`${teacher?.name}`}</h1>
        <h2 style={{ marginTop: 70 }}>Dados do Professor(a):</h2>
        <h3>{`CPF: ${teacher?.cpf}`}</h3>
        <h3>{'Matérias: ??'}</h3>
        <h3>{`Contatos: ${teacher?.phonenumber}`}</h3>
        <h3>{`Email: ${teacher?.email}`}</h3>
        <h3>{'Turmas: ???'}</h3>
      </div>
    </>
  )
}
export default TeacherProfile
