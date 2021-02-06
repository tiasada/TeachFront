import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { useEffectOnce, useToggle } from 'react-use'
import CheckPresence from '/ui/Inputs'
import Button from '/ui/Buttons/button'
import Sider from '/ui/Sider'
import Tabs from '/ui/Tabs'
import Search from '/components/Bars'
import { get, Student } from '/api'

type RowProps = {
  student: Student
}
type Grade = {
  name: string
}
type TableProps = {
  students: Student[]
}

// Main Classroom component
const ClassroomTable = () => {
  const [search, setSearch] = useState('')
  const [students, setStudents] = useState<Student[]>([])

  const getStudents = () => {
    get<Student[]>(
      'students',
      search ? { name: search } : undefined
    )
      .then(resp => setStudents(resp.data))
  }
  useEffectOnce(getStudents)

  return (
    <>
      <Search
          color='secondary'
          placeholder='...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onClick={getStudents}
        />
      <Tabs tabs={['Chamada', 'Notas']} title='Turma'>
        <TeacherClassCall students={students} />
        <TeacherClassGrades students={students} />
      </Tabs>
    </>
  )
}

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

export const TeacherClassCall = ({ students }:TableProps) => {
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
export const TeacherClassGrades = ({ students }: TableProps) => {
  // const setStudent = (student: Student) => {
  //   const updatedStudents = students.map(
  //     current => current.registration === student.registration ? student : current)
  //   setStudents(updatedStudents)
  // }
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
            </tr>
          </thead>
          <tbody>
            {students.map(item => (
              <RowGrades student={item} key={item.registration} />
            ))}
            <Button type="button" color="primary" onClick={setUpdatedGrades}>+</Button>
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
