import React from 'react'
import { Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Classroom } from '/api'
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
  const history = useHistory()

  return (
    <>
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
              history.push(`/class/${item.id}`)
            }} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default ClassroomsTable