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
        <h3>{`CPF: ${student?.cpf}`}</h3>
        <h3>{`Data de Nascimento: ${student?.birthDate.slice(0, 10).split('-').reverse().join('/')}`}</h3>
        <h3>{`Contato: ${student?.phoneNumber}`}</h3>
        <h3>{`Email: ${student?.email ? student?.email : 'Nenhum Email Adicionado'}`}</h3>
        <h3>{`Matrícula: ${student?.registration}`}</h3>
        <h3>{`Pai/Responsável: ${student?.parent ? student?.parent?.name : 'Nenhum Responsável Associado'}`}</h3>
        <h3>{`Turmas: ${student?.classrooms?.map((x) => x.classroom.name).join(', ')}`}</h3>
      </div>
    </>
  )
}
export default StudentProfile
