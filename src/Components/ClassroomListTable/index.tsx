import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { useEffectOnce } from 'react-use'
import Search from '/components/Bars'
import { get, Classroom, Student, Teacher } from '/api'
import Tabs from '/ui/Tabs'
import Modal from '../Modal'

type RowProps = {
  classroom: Classroom
}
type ClassroomsProps = {
  classrooms: Classroom[]
}
type StudentsProps = {
  students: Student[]
}
type StudentRowProps = {
  student: Student
}
type TeachersProps = {
  teachers: Teacher[]
}
type TeacherRowProps = {
  teacher: Teacher
}

// Main Classroom component
const ClassroomListTable = () => {
  const [search, setSearch] = useState('')
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
        <TeacherTable teachers={teachers}/>
      </Tabs>
      <Modal open={show} onClose={handleClose}>
        <p>funcionando</p>
      </Modal>
      <button onClick={handleShow}>x</button>
    </>
  )
}

export default ClassroomListTable
// CallTable
const Row = ({ classroom }: RowProps) => {
  return (
    <tr >
      <td>{classroom.name}</td>
      <td>{classroom.students.length}</td>
    </tr>
  )
}
export const ClassroomsTable = ({ classrooms }: ClassroomsProps) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-50">Turma</th>
            <th className="w-50">Número de Alunos</th>
          </tr>
        </thead>
        <tbody>
          {classrooms.map(item => (
            <Row classroom={item} key={item.id} />
          ))}
        </tbody>
      </Table>

    </>
  )
}
// students list
const StudentRow = ({ student }: StudentRowProps) => {
  return (
    <tr >
      <td>{student.registration}</td>
      <td>{student.name}</td>
    </tr>
  )
}

export const StudentsTable = ({ students }: StudentsProps) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >Matricula</th>
            <th className="w-100">Nome</th>
          </tr>
        </thead>
        <tbody>
          {students.map(item => (
            <StudentRow student={item} key={item.registration} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
const TeacherRow = ({ teacher }: TeacherRowProps) => {
  return (
    <tr >
      <td>{teacher.cpf}</td>
      <td>{teacher.name}</td>
    </tr>
  )
}
export const TeacherTable = ({ teachers }: TeachersProps) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >Matricula</th>
            <th className="w-100">Nome</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(item => (
            <TeacherRow teacher={item} key={item.cpf} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
