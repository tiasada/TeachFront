import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
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
}

const Row = ({ student, onClick }: RowProps) => {
  return (
    <TableRow onClick={onClick} >
      <td>{student.registration}</td>
      <td>{student.name}</td>
    </TableRow>
  )
}
const StudentsTable = ({ students }: Props) => {
  const [currentStudent, setCurrentStudent] = useState<Student>()
  const handleClose = () => setCurrentStudent(undefined)

  return (
    <>
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
          {students.map(item => (
            <Row student={item} key={item.registration} onClick={() => setCurrentStudent(item)} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default StudentsTable
