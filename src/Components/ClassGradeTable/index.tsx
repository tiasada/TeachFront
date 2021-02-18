import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import Button from '../../ui/Buttons/button'
import Sider from '../../ui/Sider'
import { Student, Grade } from '/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

type RowProps = {
  student: Student
}
type TableProps = {
  students: Student[]
  grades: Grade[]
}

// Grades Table
// row
const RowGrades = ({ student }: RowProps) => {
  return (
    <tr >
      <td>{student.registration}</td>
      <td>{student.name}</td>
      {grades.map(item => (
        <td key={item.name}><input type="number" style={{ marginTop: '8px' }} /></td>))}
    </tr>
  )
}
// context
export const ClassGradeTable = ({ students, grades }: TableProps ) => {
  const [classStudents, setStudents] = useState<Student[]>(students)
  const setStudent = (student: Student) => {
    const updatedStudents = students.map(
      current => current.registration === student.registration ? student : current)
    setStudents(updatedStudents)
  }
  const [showSider, setShowSider] = useState(false)
  const [newGrade, setNewgrade] = useState('')
  //
  const [grades, setGrades] = useState<Grade[]>([])
  const setUpdatedGrades = () => {
    const updatedGrades = grades.concat([{ name: newGrade }])
    setGrades(updatedGrades)
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="w-25" >Matricula</th>
              <th className="w-100">Nome</th>
              {gradeslist.map((item, index) => (
                <th className="w-25" key={index}>{item.name}</th>
              ))}
              <th>
                <FontAwesomeIcon
                  icon={faPlus}
                  color='black'
                  onClick={() => setShowSider(true)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {classStudents.map(item => (
              <RowGrades student={item} key={item.registration} />
            ))}
          </tbody>
        </Table>
        <Sider open={showSider} color="secondary" onClose={() => setShowSider(false)}>
          <input
            type='text'
            name='gradeName'
            placeholder='Nova Avaliação'
            value={newGrade}
            onChange={e => setNewgrade(e.target.value)}
          />
          <Button type="button" color="primary" onClick={() => setShowSider(true)}>Adicionar Avaliação</Button>
        </Sider>
      </div>

    </>
  )
}
export default ClassGradeTable
