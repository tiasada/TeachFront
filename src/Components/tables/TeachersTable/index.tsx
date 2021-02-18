import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { TeachersTableDiv } from './styles'
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
  onClickEmptyRow: () => void
}

const Row = ({ teacher, onClick }: RowProps) => {
  return (
    <TableRow onClick={onClick} >
      <td>{teacher.cpf}</td>
      <td>{teacher.name}</td>
    </TableRow>
  )
}
const TeacherTable = ({ teachers, onClickEmptyRow }: Props) => {
  const [currentTeacher, setCurrentTeacher] = useState<Teacher>()
  const handleClose = () => setCurrentTeacher(undefined)

  return (
    <TeachersTableDiv>
      <Modal open={!!currentTeacher} onClose={handleClose}>
        <TeacherProfile teacher={currentTeacher} />
      </Modal>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >CPF</th>
            <th className="w-100">Nome</th>
          </tr>
        </thead>
        <tbody>
          <TableRow onClick={onClickEmptyRow}>
            <td style={{ color: 'blue' }} colSpan={2}>Adicionar Professor</td>
          </TableRow>
          {teachers.map(item => (
            <Row teacher={item} key={item.cpf} onClick={() => setCurrentTeacher(item)} />
          ))}
        </tbody>
      </Table>
    </TeachersTableDiv>
  )
}
export default TeacherTable
