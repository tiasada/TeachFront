import React from 'react'
import { Student } from '/api'

type Props = {
  student?: Student
}

const StudentProfile = ({ student }: Props) => {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <h1>{`${student?.name}`}</h1>
        <h2 style={{ marginTop: 70 }}>Dados do aluno(a):</h2>
        <h3>{`Matrícula: ${student?.registration}`}</h3>
        <h3>Turma: ????</h3>
        <h3>Sala: ???</h3>
        <h3>Ano: ????</h3>
        <h3>Pais/{`Responsáveis: ${student?.parentid}`}</h3>
        <h3>{`Contatos: ${student?.phonenumber}`}</h3>
      </div>
    </>
  )
}
export default StudentProfile
