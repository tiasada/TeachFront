import React from 'react'
import { Table } from 'react-bootstrap'
import Tab from './styles'

const ClassTable : React.FC = ({ children }) => (
    <Tab striped bordered hover size="sm">{ children}</Tab>
)

export default ClassTable
