import React, { FormEvent, useState } from 'react'
import { useEffectOnce } from 'react-use'
import Search from '../Bars'
import { Title } from '../Form/CreateUserForm/styles'
import { addStudent, Classroom, get, Student } from '/api'
import { LoginButton } from '/ui/Buttons/button/styles'
import Tabs from '/ui/Tabs'

// type AddStudentProps = {
//   classrooms: Classroom[]
//   classroom: Classroom
//   setClassroom: () => void
// }
const Add = () => {
  return (
    <Tabs
      title='Adiconar'
      tabs={['Aluno na Turma  |', 'Professor na Turma  |', 'Turma a Alguem  |']}>
      <AddStudent />
      <p>add teacher</p>
      <p>add classroom</p>
    </Tabs>
  )
}
export default Add

const AddStudent = () => {
  const [search, setSearch] = useState('')

  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  const [classroom, setClassroom] = useState<string>('')

  const [students, setStudents] = useState<Student[]>([])
  const [student, setStudent] = useState<string>('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addStudent(student, classroom)
      .then(() => alert('aluno adicionado'))
      .catch(() => alert('algo deu errado'))
  }

  const getData = () => {
    get<Student[]>(
      'students',
      search ? { name: search } : undefined
    )
      .then(resp => setStudents(resp.data))
    get<Classroom[]>(
      'classrooms',
      search ? { name: search } : undefined
    )
      .then(resp => setClassrooms(resp.data))
  }

  useEffectOnce(getData)

  return (
    <>
      <Search
        color='secondary'
        placeholder='...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onClick={getData}
      />
      <form onSubmit={onSubmit}>
        <Title>Adicionar Aluno a Turma</Title>
        <select
          value={classroom}
          onChange={e => setClassroom(e.target.value)}>
          <option></option>
          {classrooms.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        <select
          value={student}
          onChange={e => setStudent(e.target.value)}>
          <option></option>
          {students.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        <LoginButton color='primary'>{'Adicionar'}</LoginButton>
      </form>
    </>
  )
}
