import React from 'react'
import { NavCoordTeachList } from '/components/NavBars'
import { NavStudentListBottom } from '/components/NavBars/NavCoord'
import { StudentTables } from '/components/Tables'
import { DivTableRight } from '/components/DivBox'

type Student = {
  matricula: string
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
      <td>{student.matricula}</td>
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
    matricula: '12312323121',
    name: 'Do pagode'
  },
  {
    matricula: '234214242342',
    name: 'iago'
  },
  {
    matricula: '354234353345',
    name: 'gui'
  },
  {
    matricula: '4353534523',
    name: 'tiago'
  },
  {
    matricula: '53453252323',
    name: 'gabrielle'
  },
  {
    matricula: 'kid',
    name: 'léo'
  }
]
export const StudentTable = () => (

  <DivTableRight color='primary'>
    <NavCoordTeachList />
    <StudentTables >
      <tr>
        <th className="w-25" >N°</th>
        <th className="w-100">Turma</th>
        <th className="w-25">Qnt Alunos</th>
        <th className="w-25">Período</th>
      </tr>
      <tbody>
        {studentslist.map(item => (
          <Row student={item} key={item.matricula} />
        ))}
      </tbody>
    </StudentTables>
    <NavStudentListBottom />
  </DivTableRight>
)