import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import StudentsTable from '../StudentsTable'
import { Classroom, getStudentsByClassroom, Student } from '/api'
import Modal from '/components/Modal'
import TableRow, { TableData, TableHead } from '/components/Table'

type RowProps = {
  classroom: Classroom
  onClick: () => void
}
type Props = {
  classrooms: Classroom[]
}

const Row = ({ classroom, onClick }: RowProps) => {
  return (
    <TableRow onClick={onClick} >
      <TableData>{classroom.name}</TableData>
    </TableRow>
  )
}
const ClassroomsTable = ({ classrooms }: Props) => {
  const [currentClassroom, setCurrentClassroom] = useState<Classroom>()
  const handleClose = () => setCurrentClassroom(undefined)
  const [currentStudents, setCurrentStudents] = useState<Student[]>([])

  const getStudents = (id: string) => {
    getStudentsByClassroom(id, undefined)
      .then(resp => setCurrentStudents(resp.data))
  }

  return (
    <>
      <Modal open={!!currentClassroom} onClose={handleClose}>
        <h1>{currentClassroom?.name}</h1>
        <StudentsTable students={currentStudents} />
      </Modal>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <TableHead >Turmas</TableHead>
          </tr>
        </thead>
        <tbody>
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
