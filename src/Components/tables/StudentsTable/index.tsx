import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { StudentsTableDiv } from './styles'
import { Student } from '/api'
import Modal from '/components/Modal'
import StudentProfile from '/components/StudentProfile'
import TableRow from '/components/Table'

type RowProps = {
  student: Student
  onClick: () => void
}
type Props = {
  students: Student[]
  onClickEmptyRow: () => void
  show: boolean
}

const Row = ({ student, onClick }: RowProps) => {
  return (
    <TableRow onClick={onClick} >
      <td>{student.registration}</td>
      <td>{student.name}</td>
    </TableRow>
  )
}
const StudentsTable = ({ students, onClickEmptyRow, show }: Props) => {
  const [currentStudent, setCurrentStudent] = useState<Student>()
  const handleClose = () => setCurrentStudent(undefined)

  return (
    <StudentsTableDiv show={show}>
      <Modal open={!!currentStudent} onClose={handleClose}>
        <StudentProfile student={currentStudent}/>
      </Modal>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >Matricula</th>
            <th className="w-100">Nome</th>
          </tr>
        </thead>
        <tbody>
          <TableRow onClick={onClickEmptyRow}>
            <td style={{ color: 'blue' }} colSpan={2}>Adicionar Aluno</td>
          </TableRow>
          {students.map(item => (
            <Row student={item} key={item.registration} onClick={() => setCurrentStudent(item)} />
          ))}
        </tbody>
      </Table>
    </StudentsTableDiv>
  )
}
export default StudentsTable
