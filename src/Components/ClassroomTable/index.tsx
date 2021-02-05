import React, { createContext, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useToggle } from 'react-use'
import CheckPresence from '/ui/Inputs'
import Button from '/ui/Buttons/button'
import Sider from '/ui/Sider'
import Tabs from '/ui/Tabs'
import { getStudents, Student } from '/api'

// type Student = {
//   matricula: string
//   name: string
//   presence?: boolean
//   reason?: string
// }

type RowProps = {
  student: Student
}
type Grade = {
  name: string
}
type ContextValues = {
  students: Student[]
  setStudent: (student: Student) => void
}

// Main Classroom component
const ClassroomTable = () => (
  <Tabs tabs={['Chamada', 'Notas']} title='Turma'>
    <TeacherClassCall />
    <TeacherClassGrades />
  </Tabs>
)

export default ClassroomTable
// CallTable
const Row = ({ student }: RowProps) => {
  const [present, setPrecense] = useToggle(false)
  const [reason, setReason] = useState('')

  return (
    <tr >
      <td>{student.registration}</td>
      <td>{student.name}</td>
      <td style={{ display: 'flex', margin: '4px' }}>
        <CheckPresence value={present} onChange={() => {
          setReason('')
          setPrecense()
        }} />
        <label style={{ margin: '4px' }}>Presença</label>
      </td>
      <td>
        <input
          disabled={present}
          style={{ marginTop: '8px' }}
          name='reason'
          placeholder='Motivo da falta'
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
      </td>
    </tr>
  )
}

const gradeslist: Grade[] = [
  {
    name: 'prova 1'
  },
  {
    name: 'avaliaçao 1'
  }
]

export const TeacherClassCall = () => {
  const [students, setStudents] = useState<Student[]>([])
  getStudents()
    .then(resp => setStudents(resp.data))

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >Matricula</th>
            <th className="w-100">Nome</th>
            <th className="w-25">Chamada</th>
            <th className="w-25">Falta Justificada</th>

          </tr>
        </thead>
        <tbody>
          {students.map(item => (
            <Row student={item} key={item.registration} />
          ))}
        </tbody>
      </Table>

    </>
  )
}
// Grades Table
// row
const RowGrades = ({ student }: RowProps) => {
  return (
    <tr >
      <td>{student.registration}</td>
      <td>{student.name}</td>
      {gradeslist.map(item => (
        <td key={item.name}><input type="number" style={{ marginTop: '8px' }} /></td>))}
    </tr>
  )
}
// context
const GradesContext = createContext<ContextValues>({
  students: [],
  setStudent: (student: Student) => {

  }
})
export const TeacherClassGrades = () => {
  const [students, setStudents] = useState<Student[]>([])
  getStudents()
    .then(resp => setStudents(resp.data))

  const setStudent = (student: Student) => {
    const updatedStudents = students.map(current => current.registration === student.registration ? student : current)
    setStudents(updatedStudents)
  }
  const [showSider, setShowSider] = useState(false)
  const [newGrade, setNewgrade] = useState('')
  const [grades, setGrades] = useState<Grade[]>([])
  const setNewgrades = () => {
    const updatedGrades = grades.concat([{ name: newGrade }])
    setGrades(updatedGrades)
  }
  return (
    <>
      <GradesContext.Provider value={{
        students,
        setStudent
      }} />
      <div style={{ display: 'flex' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="w-25" >Matricula</th>
              <th className="w-100">Nome</th>
              {gradeslist.map((item, index) => (
                <th className="w-25" key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map(item => (
              <RowGrades student={item} key={item.registration} />
            ))}
            <Button type="button" color="primary" onClick={setNewgrades}>+</Button>
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
        </Sider>
      </div>
      {/* <NavbarClassBottom color="primary">
        <Button type="button" color="primary">Enviar</Button>
        <Button type="button" color="primary" onClick={() => setShowSider(true)}>Adicionar Avaliação</Button>
      </NavbarClassBottom> */}
    </>
  )
}
