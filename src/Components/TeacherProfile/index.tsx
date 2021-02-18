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
        <h3>{`Data de Nascimento: ${teacher?.birthDate.slice(0, 10).split('-').reverse().join('/')}`}</h3>
        <h3>{`Contato: ${teacher?.phoneNumber}`}</h3>
        <h3>{`Email: ${teacher?.email ? teacher?.email : 'Nenhum Email Adicionado'}`}</h3>
      </div>
    </>
  )
}
export default TeacherProfile
