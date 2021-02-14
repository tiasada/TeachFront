import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Teacher } from '/api'
import Modal from '/components/Modal'
import TableRow from '/components/Table'
import TeacherProfile from '/components/TeacherProfile'

type RowProps = {
  teacher: Teacher
  onClick: () => void
}
type Props = {
  teachers: Teacher[]
}

const Row = ({ teacher, onClick }: RowProps) => {
  return (
    <TableRow onClick={onClick} >
      <td>{teacher.cpf}</td>
      <td>{teacher.name}</td>
    </TableRow>
  )
}
const TeacherTable = ({ teachers }: Props) => {
  const [currentTeacher, setCurrentTeacher] = useState<Teacher>()
  const handleClose = () => setCurrentTeacher(undefined)

  return (
    <>
      <Modal open={!!currentTeacher} onClose={handleClose}>
        <TeacherProfile teacher={currentTeacher}/>
      </Modal>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >CPF</th>
            <th className="w-100">Nome</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(item => (
            <Row teacher={item} key={item.cpf} onClick={() => setCurrentTeacher(item)} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default TeacherTable
