import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Parent } from '/api'
import Modal from '/components/Modal'
import ParentProfile from '/components/ParentProfile'
import TableRow from '/components/Table'

type RowProps = {
  parent: Parent
  onClick: () => void
}
type Props = {
  parents: Parent[]
  onClickEmptyRow: () => void
}

const Row = ({ parent, onClick }: RowProps) => {
  return (
    <TableRow onClick={onClick} >
      <td>{parent.student.registration}</td>
      <td>{parent.name}</td>
    </TableRow>
  )
}
const ParentsTable = ({ parents, onClickEmptyRow }: Props) => {
  const [currentParent, setCurrentParent] = useState<Parent>()
  const handleClose = () => setCurrentParent(undefined)

  return (
    <>
      <Modal open={!!currentParent} onClose={handleClose}>
        <ParentProfile parent={currentParent} />
      </Modal>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >Matricula do filho</th>
            <th className="w-100">Nome</th>
          </tr>
        </thead>
        <tbody>
          <TableRow onClick={onClickEmptyRow}>
            <td style={{ color: 'blue' }} colSpan={2}>Adicionar Responsável</td>
          </TableRow>
          {parents.map(item => (
            <Row parent={item} key={item.student.registration} onClick={() => setCurrentParent(item)} />
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default ParentsTable
