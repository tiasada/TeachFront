import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import StudentsTable from '../StudentsTable'
import { addStudent, Classroom, get, getStudentsByClassroom, Student } from '/api'
import AddToClassTable from '/components/AddToClassTable'
import Modal from '/components/Modal'
import TableRow, { TableData, TableHead } from '/components/Table'

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
  const [allStudents, setAllStudents] = useState<Student[]>([])
  const [addShow, setAddShow] = useState(false)

  const getStudents = (id: string) => {
    getStudentsByClassroom(id, undefined)
      .then(resp => setCurrentStudents(resp.data))
  }
  const openAddToClass = () => {
    setAddShow(true)
    get<Student[]>(
      'students'
    ).then(resp => setAllStudents(resp.data))
  }
  const addStudentToClass = (studentId: string) => {
    addStudent(studentId, currentClassroom ? currentClassroom.id : '')
      .then(() => alert('Aluno adicionado'))
      .catch(() => alert('Algo deu errado :('))
  }

  return (
    <>
      <Modal open={!!currentClassroom} onClose={handleClose}>
        <h1>{`Turma: ${currentClassroom?.name}`}</h1>
        <StudentsTable students={currentStudents} onClickEmptyRow={openAddToClass} />
        {/* <AddToClassTable
        onClose={() => setAddShow(false)}
        show={addShow}
        users={allStudents}
        onClick={(id) => addStudentToClass(id)}
        /> */}
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
            }} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default ClassroomsTable
