import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import StudentsTable from '../StudentsTable'
import TeachersTable from '../TeachersTable'
import { addStudent, addTeacher, Classroom, get, getStudentsByClassroom, getTeachersByClassroom, Student, Teacher } from '/api'
import AddToClassTable from '/components/AddToClassTable'
import Modal from '/components/Modal'
import TableRow, { TableData, TableHead } from '/components/Table'
import Tabs from '../../../ui/Tabs'

type RowProps = {
  classroom: Classroom
  onClick: () => void
}
type Props = {
  classrooms: Classroom[]
  onClickEmptyRow: () => void
}

const Row = ({ classroom, onClick }: RowProps) => {
  return (
    <TableRow onClick={onClick} >
      <TableData>{classroom.name}</TableData>
    </TableRow>
  )
}
const ClassroomsTable = ({ classrooms, onClickEmptyRow }: Props) => {
  const [currentClassroom, setCurrentClassroom] = useState<Classroom>()
  const handleClose = () => setCurrentClassroom(undefined)
  const [currentStudents, setCurrentStudents] = useState<Student[]>([])
  const [currentTeachers, setCurrentTeachers] = useState<Teacher[]>([])
  const [allStudents, setAllStudents] = useState<Student[]>([])
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([])
  const [addShow, setAddShow] = useState(false)

  const getStudents = (id: string) => {
    getStudentsByClassroom(id, undefined)
      .then(resp => setCurrentStudents(resp.data))
  }
  const getTeachers = (id: string) => {
    getTeachersByClassroom(id, undefined)
      .then(resp => setCurrentTeachers(resp.data))
  }
  const openAddToClass = () => {
    setAddShow(true)
    get<Student[]>(
      'students'
    ).then(resp => setAllStudents(resp.data))
    get<Teacher[]>(
      'teachers'
    ).then(resp => setAllTeachers(resp.data))
  }
  const addStudentToClass = (studentId: string) => {
    addStudent(studentId, currentClassroom ? currentClassroom.id : '')
      .then(() => alert('Aluno adicionado'))
      .catch(() => alert('Algo deu errado :('))
  }
  const addTeacherToClass = (teacherId: string) => {
    addTeacher(teacherId, currentClassroom ? currentClassroom.id : '')
      .then(() => alert('Professor adicionado'))
      .catch(() => alert('Algo deu errado :('))
  }

  return (
    <>
      <Modal open={!!currentClassroom} onClose={handleClose}>
        <h1>{`Turma: ${currentClassroom?.name}`}</h1>
        <Tabs tabs={['Estudantes', 'Professores']}>
          <div>
            <StudentsTable
              students={currentStudents}
              onClickEmptyRow={openAddToClass}
              show={addShow == false}
            />
            <AddToClassTable
              onClose={() => setAddShow(false)}
              show={addShow}
              users={allStudents.filter(x => !currentStudents.some(y => y.id == x.id))}
              onClick={(id) => addStudentToClass(id)}
            />
          </div>
          <div>
            <TeachersTable
              teachers={currentTeachers}
              onClickEmptyRow={openAddToClass}
              show={addShow == false}
            />
            <AddToClassTable
              onClose={() => setAddShow(false)}
              show={addShow}
              users={allTeachers.filter(x => !currentTeachers.some(y => y.id == x.id))}
              onClick={(id) => addTeacherToClass(id)}
            />
          </div>
        </Tabs>
      </Modal>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <TableHead >Turmas</TableHead>
          </tr>
        </thead>
        <tbody>
          <TableRow onClick={onClickEmptyRow}>
            <td style={{ color: 'blue' }} colSpan={2}>Adicionar Turma</td>
          </TableRow>
          {classrooms.map(item => (
            <Row classroom={item} key={item.id} onClick={() => {
              setCurrentClassroom(item)
              getStudents(item.id)
              getTeachers(item.id)
            }} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default ClassroomsTable
