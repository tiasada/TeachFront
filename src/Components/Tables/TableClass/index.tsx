import React from 'react'
import { NavCoordTeachList } from '/components/NavBars'
import { NavStudentListBottom } from '/components/NavBars/NavCoord'
import { StudentTables } from '/components/Tables'
import { DivTableRight } from '/components/DivBox'
import { Modal } from 'react-bootstrap'

type Student = {
  numero: string
  name: string
  notas?: number
  absece?: string
}
type RowProps = {
  student: Student,

}
type Grade = {
  name: string
}
type ContextValues = {
  students: Student[]
  setStudent: (student: Student) => void
}

// const Row = ({student, color }: {student: Student , color : string} ) => {

const Row = ({ student }: RowProps) => {
  return (
    <tr >
      <td>{student.numero}</td>
      <td>{student.name}</td>
      <td>
        10
      </td>
      <td>
        2
      </td>
    </tr>
  )
}

const studentslist: Student[] = [
  {
    numero: '12312323121',
    name: 'Gabrielle'
  },
  {
    numero: '234214242342',
    name: 'iago'
  },
  {
    numero: '354234353345',
    name: 'gui'
  },
  {
    numero: '4353534523',
    name: 'tiago'
  },
  {
    numero: '53453252323',
    name: 'gabrielle'
  },
  {
    numero: 'kid',
    name: 'léo'
  }
]
export const TableClass = () => (
<>
  <DivTableRight color='primary'>
    <NavCoordTeachList />
    <StudentTables >
      <tr>
        <th className="w-25" >Matrícula</th>
        <th className="w-100">Aluno(a)</th>
        <th className="w-25">Boletim</th>
        <th className="w-25">Faltas</th>
      </tr>
      <tbody>
        {studentslist.map(item => (
          <Row student={item} key={item.numero} />
        ))}
      </tbody>
    </StudentTables>
    <NavStudentListBottom />
  </DivTableRight>
  <Modal>

  </Modal>
</>
)
