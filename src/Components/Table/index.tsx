import React from 'react'
import { Tr, Td, Th } from './styles'

type Props = {
  children: any
  onClick?: () => void
}
const TableRow = ({ children, onClick }: Props) => {
  return (
    <Tr onClick={onClick} >{children}</Tr>
  )
}
export const TableData = ({ children }: Props) => {
  return (
    <Td >{children}</Td>
  )
}
export const TableHead = ({ children }: Props) => {
  return (
    <Th >{children}</Th>
  )
}
export default TableRow
