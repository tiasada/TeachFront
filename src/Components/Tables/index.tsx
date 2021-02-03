import React from 'react'
import Tab from './styles'

type Props = {
    children: React.ReactNode
}

const ClassTable = ({ children }: Props) => (
    <Tab striped bordered hover size="sm">{children}</Tab>
)


export const StudentTables = ({ children }: Props) => (
    <Tab striped bordered hover size="sm">{children}</Tab>
)

export default ClassTable