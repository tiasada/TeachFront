import React, { createContext, useState } from 'react'
import { Table } from 'react-bootstrap'
import { NavbarClass, NavbarClassBottom } from '../../NavBars/NavTeacher'
import { DivTableBox } from '../../DivBox'
import { useEffectOnce, useToggle } from 'react-use'
import CheckPresence from '../../../ui/Inputs'
import { get } from '/api'
import Button from '../../../ui/Buttons/button'


type Student = {
  matricula: string
  name: string
  presence?: boolean
  reason?: string
}
type RowProps = {
  student: Student,

}
type Grade = {
  name: string
}
type ColumnProps = {
  grade: Grade

}
type ContextValues = {
  students: Student[]
  setStudent: (student: Student) => void
}

// const Row = ({student, color }: {student: Student , color : string} ) => {

const Row = ({ student }: RowProps) => {


  const [present, setPrecense] = useToggle(false)
  const [reason, setReason] = useState("")

  return (
    <tr >
      <td>{student.matricula}</td>
      <td>{student.name}</td>
      <td style={{ display: "flex", margin: "4px" }}>
        <CheckPresence value={present} onChange={() => {
          setReason("")
          setPrecense()
        }} />
        <label style={{ margin: "4px" }}>Presença</label>
      </td>
      <td>
        <input
          disabled={present}
          style={{ marginTop: "8px", }}
          name='reason'
          placeholder='Motivo da falta'
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
      </td>
    </tr>
  )
}

const studentslist: Student[] = [
  {
    matricula: "12312323121",
    name: "marcos"
  },
  {
    matricula: "234214242342",
    name: "iago"
  },
  {
    matricula: "354234353345",
    name: "guilherme"
  },
  {
    matricula: "4353534523",
    name: "tiago"
  },
  {
    matricula: "53453252323",
    name: "gabrielle"
  }
  ,
  {
    matricula: "kid",
    name: "léo"
  }
]
export const TeacherClassCall: React.FC = ({ children }) => (
  <DivTableBox>
    <NavbarClass />
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
        {studentslist.map(item => (
          <Row student={item} />
        ))}
      </tbody>
    </Table>
    <NavbarClassBottom>
      <Button type="button" color="primary">Enviar</Button>
    </NavbarClassBottom>
  </DivTableBox>
)

const gradeslist: Grade[] = [
  {
    name: "prova 1"
  },
  {
    name: "avaliaçao 1"
  },
  {
    name: "avaliaçao do pae"
  }
]
// const ColumnGrades = ({ grade }: ColumnProps) => {

//   const [present, setPrecense] = useToggle(false)
//   const [reason, setImput] = useState("")

//   return (
//         <th className="w-25" >Matricula</th>
//         <th className="w-100">Nome</th>
//         <th className="w-25">1º Nota</th>
//         <th className="w-25">2º Nota</th>
//         <th className="w-25"><button>nova avaliação</button></th>
//   )
// }
const studentsGrades: Student[] = [
  {
    matricula: "12312323121",
    name: "marcos",
    presence: false,
    reason: ""
  },
  {
    matricula: "234214242342",
    name: "iago",
    presence: false,
    reason: ""
  },
  {
    matricula: "354234353345",
    name: "guilherme",
    presence: false,
    reason: ""
  },
  {
    matricula: "4353534523",
    name: "tiago",
    presence: false,
    reason: ""
  },
  {
    matricula: "53453252323",
    name: "gabrielle",
    presence: false,
    reason: ""
  }
  ,
  {
    matricula: "kid",
    name: "léo",
    presence: false,
    reason: ""
  }
]
const RowGrades = ({ student }: RowProps) => {

  return (
    <tr >
      <td>{student.matricula}</td>
      <td>{student.name}</td>
      {gradeslist.map(item => (
        <td><input type="number" style={{ marginTop: "8px", }} /></td>))}
    </tr>
  )
}
const GradesContext = createContext<ContextValues>({
  students: [],
  setStudent: (student: Student) => {

  }
})
export const TeacherClassGrades: React.FC = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([])
  const setStudent = (student: Student) => {
    const updatedStudents = students.map(current => current.matricula === student.matricula ? student : current)
    setStudents(updatedStudents)
  }

  useEffectOnce(() => {
    // get().then(resp => setStudents(resp.data))
    Promise.resolve(studentsGrades).then(resp => setStudents(resp))
  })

  return (
    <DivTableBox>
      <NavbarClass />
      <GradesContext.Provider value={{
        students,
        setStudent
      }} />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="w-25" >Matricula</th>
            <th className="w-100">Nome</th>
            {gradeslist.map(item => (
              <th className="w-25">{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map(item => (
            <RowGrades student={item} />
          ))}
        </tbody>
      </Table>
      <NavbarClassBottom>
        <Button type="button" color="primary">Enviar</Button>
        <Button type="button" color="primary">adicionar nota</Button>
      </NavbarClassBottom>
    </DivTableBox>
  )
}

