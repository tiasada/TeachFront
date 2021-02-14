import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import Tabs from '/ui/Tabs'
import Search from '../Bars'
import { Classroom, getclassroom, getStudentsByClassroom, Student } from '/api'
import { useLocation } from 'react-router-dom'
import { ClassGradeTable } from '../ClassGradeTable'
import ClassCallTable from '../ClassCallTable'

const ClassroomTable = () => {
  const [search, setSearch] = useState('')
  const [students, setStudents] = useState<Student[]>([])
  const [classroom, setClassroom] = useState<Classroom>()
  const location = useLocation()
  // cuting /class/
  const id = location.pathname.slice(7)
  const getClassroom = () => { getclassroom(id).then(resp => setClassroom(resp.data)) }

  const getStudents = () => {
    getStudentsByClassroom(
      id,
      search ? { name: search } : undefined
    )
      .then(resp => setStudents(resp.data))
  }
  const getData = () => {
    getClassroom()
    getStudents()
  }

  useEffectOnce(getData)

  return (
    <>
      <Search
        color='secondary'
        placeholder='...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onClick={getStudents}
      />
      <Tabs tabs={['Chamada', 'Notas']} title={classroom?.name}>
        <ClassCallTable students={students} />
        <ClassGradeTable students={students} />
      </Tabs>
    </>
  )
}

export default ClassroomTable
