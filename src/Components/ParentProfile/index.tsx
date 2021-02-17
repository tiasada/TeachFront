import React from 'react'
import { Parent } from '/api'

type Props = {
  parent?: Parent
}

const ParentProfile = ({ parent }: Props) => {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <h1>{`${parent?.name}`}</h1>
        <h2 style={{ marginTop: 70 }}>Dados do responsável:</h2>
        <h3>{`Matrícula: ${parent?.student.registration}`}</h3>
        <h3>{`Estudante: ${parent?.student.name}`}</h3>
        <h3>{`Contatos: ${parent?.phonenumber}`}</h3>
      </div>
    </>
  )
}
export default ParentProfile
