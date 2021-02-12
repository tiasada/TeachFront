import React, { FormEvent, useState } from 'react'
import { useEffectOnce } from 'react-use'
import Search from '../Bars'
import { RegisterTitle } from '../Texts/Titles/styles'
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
      title='Adicionar'
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
  const [classroomId, setClassroomId] = useState<string>('')

  const [students, setStudents] = useState<Student[]>([])
  const [studentId, setStudentId] = useState<string>('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addStudent(studentId, classroomId)
      .then(() => alert('aluno adicionado'))
      .catch(() => alert('algo deu errado'))
  }

  const getData = () => {
    get<Student[]>(
      'students',
      search ? { name: search } : undefined
    ).then(resp => setStudents(resp.data))

    get<Classroom[]>(
      'classrooms',
      search ? { name: search } : undefined
    ).then(resp => setClassrooms(resp.data))
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
        <RegisterTitle>Adicionar Aluno a Turma</RegisterTitle>
        <select
          value={classroomId}
          onChange={e => setClassroomId(e.target.value)}>
          <option></option>
          {classrooms.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        <select
          value={studentId}
          onChange={e => setStudentId(e.target.value)}>
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
