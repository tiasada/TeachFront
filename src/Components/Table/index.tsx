import React from 'react'
import { Tr } from './styles'

type Props = {
  children: any
  onClick?: () => void
}
const TableRow = ({ children, onClick }: Props) => {
  return (
    <Tr onClick={onClick} >{children}</Tr>
  )
}
export default TableRow
