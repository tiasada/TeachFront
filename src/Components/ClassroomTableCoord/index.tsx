import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import Tabs from '../../ui/Tabs'
import { addStudent, addTeacher, Classroom, get, getclassroom, getStudentsByClassroom, getTeachersByClassroom, Student, Teacher } from '/api'
import { useParams } from 'react-router-dom'
import StudentsTable from '../tables/StudentsTable'
import AddToClassTable from '../AddToClassTable'
import TeachersTable from '../tables/TeachersTable'
import Search from '../Bars'
import Sider from '/ui/Sider'

const ClassroomTableCoord = () => {
  const [search, setSearch] = useState('')
  const [currentStudents, setCurrentStudents] = useState<Student[]>([])
  const [currentTeachers, setCurrentTeachers] = useState<Teacher[]>([])
  const [allStudents, setAllStudents] = useState<Student[]>([])
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([])
  const [currentClassroom, setCurrentClassroom] = useState<Classroom>()
  const { id } = useParams()
  const getClassroom = () => { getclassroom(id).then(resp => {
    setCurrentClassroom(resp.data)
    setCurrentStudents(resp.data.students.map(x => x.student))
    setCurrentTeachers(resp.data.teachers.map(x => x.teacher))
  }) }

  const [showSider, setShowSider] = useState(false)

  // const getStudents = (id: string) => {
  //   getStudentsByClassroom(id, undefined)
  //     .then(resp => setCurrentStudents(resp.data))
  // }
  // const getTeachers = (id: string) => {
  //   getTeachersByClassroom(id, undefined)
  //     .then(resp => setCurrentTeachers(resp.data))
  // }

  const getData = () => {
    // getStudents(id)
    // getTeachers(id)
    get<Student[]>(
      'students'
    ).then(resp => setAllStudents(resp.data))
    get<Teacher[]>(
      'teachers'
    ).then(resp => setAllTeachers(resp.data))
  }

  const addStudentToClass = (studentId: string) => {
    addStudent(studentId, id)
      .then(() => {
        getClassroom()
        getData()
      })
      .catch(() => alert('Algo deu errado :('))
  }
  const addTeacherToClass = (teacherId: string) => {
    addTeacher(teacherId, id)
      .then(() => {
        getClassroom()
        getData()
      })
      .catch(() => alert('Algo deu errado :('))
  }

  useEffectOnce(() => {
    getClassroom()
    getData()
  })

  return (
    <>
      <Search
        color='secondary'
        placeholder='...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onClick={getData}
      />
      <Tabs title={currentClassroom?.name} tabs={['Estudantes', 'Professores']}>
        <div>
          <StudentsTable
            students={currentStudents}
            onClickEmptyRow={() => setShowSider(true)}
          />
          <Sider open={showSider} color="secondary" onClose={() => setShowSider(false)}>
            <AddToClassTable
              users={allStudents.filter(x => !currentStudents.some(y => y.id === x.id))}
              onClick={(id) => addStudentToClass(id)}
            />
          </Sider>
        </div>
        <div>
          <TeachersTable
            teachers={currentTeachers}
            onClickEmptyRow={() => setShowSider(true)}
          />
          <Sider open={showSider} color="secondary" onClose={() => setShowSider(false)}>
            <AddToClassTable
              users={allTeachers.filter(x => !currentTeachers.some(y => y.id === x.id))}
              onClick={(id) => addTeacherToClass(id)}
            />
          </Sider>
        </div>
      </Tabs>
    </>
  )
}

export default ClassroomTableCoord
