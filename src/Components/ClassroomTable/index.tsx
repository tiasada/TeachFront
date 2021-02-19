import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import Tabs from '../../ui/Tabs'
import Search from '../Bars'
import { Classroom, getclassroom, getStudentsByClassroom, Student } from '/api'
import { ClassGradeTable } from '../ClassGradeTable'
import ClassCallTable from '../ClassCallTable'
import { useParams } from 'react-router-dom'

const ClassroomTable = () => {
  const [search, setSearch] = useState('')
  // const [students, setStudents] = useState<Student[]>([])
  const [classroom, setClassroom] = useState<Classroom>({
    name: '',
    subjects: [],
    subjectsString: '',
    students: [],
    teachers: [],
    id: ''
  })
  const { id } = useParams()
  const getClassroom = () => { getclassroom(id).then(resp => setClassroom(resp.data)) }

  // const getStudents = () => {
  //   getStudentsByClassroom(
  //     id,
  //     search ? { name: search } : undefined
  //   )
  //     .then(resp => setStudents(resp.data))
  // }
  const getData = () => {
    getClassroom()
    // getStudents()
  }

  useEffectOnce(getData)

  return (
    <>
      <Search
        color='secondary'
        placeholder='...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onClick={getClassroom}
      />
      <Tabs tabs={['Chamada', 'Notas']} title={classroom?.name}>
        <ClassCallTable students={classroom.students.map(x => x.student) } />
        <ClassGradeTable students={classroom.students.map(x => x.student) } />
      </Tabs>
    </>
  )
}

export default ClassroomTable
