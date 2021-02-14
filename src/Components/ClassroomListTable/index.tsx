import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import Search from '../Bars'
import { get, Classroom, Student, Teacher } from '/api'
import Tabs from '/ui/Tabs'
import ClassroomsTable from '../tables/ClassroomsTable'
import StudentsTable from '../tables/StudentsTable'
import TeachersTable from '../tables/TeachersTable'

// Main Classroom component
const ClassroomListTable = () => {
  const [search, setSearch] = useState('')
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [teachers, setTeachers] = useState<Teacher[]>([])

  const getTables = () => {
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
    get<Teacher[]>(
      'teachers',
      search ? { name: search } : undefined
    )
      .then(resp => setTeachers(resp.data))
  }

  useEffectOnce(getTables)

  return (
    <>
      <Search
        color='secondary'
        placeholder='...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onClick={getTables}
      />
      <Tabs tabs={['Turmas', 'Alunos', 'Professores']} title='Escola'>
        <ClassroomsTable classrooms={classrooms} />
        <StudentsTable students={students} />
        <TeachersTable teachers={teachers}/>
      </Tabs>
    </>
  )
}

export default ClassroomListTable
