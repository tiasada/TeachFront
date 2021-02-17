import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Table } from 'react-bootstrap'
import { AddTCTdiv } from './styled'
import { User } from '/api'
import TableRow from '/components/Table'

type RowProps = {
  user: User
  onClick: () => void
}
type Props = {
  users: User[]
  onClick: (id: string) => void
  show: boolean
  onClose: () => void
}

const Row = ({ user, onClick }: RowProps) => {
  return (
    <TableRow onClick={onClick} >
      <td>{user.cpf}</td>
      <td>{user.name}</td>
    </TableRow>
  )
}
const AddToClassTable = ({ users, onClick, show, onClose }: Props) => {
  return (
    <AddTCTdiv show={show}>
      <FontAwesomeIcon
        icon={faTimes}
        color='black'
        onClick={onClose}
      />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >CPF</th>
            <th className="w-100">Nome</th>
          </tr>
        </thead>
        <tbody>
          {users.map(item => (
            <Row user={item} key={item.id} onClick={() => onClick(item.id)} />
          ))}100
        </tbody>
      </Table>
    </AddTCTdiv>
  )
}
export default AddToClassTable
