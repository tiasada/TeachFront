import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { NavbarClass, NavbarClassBottom } from '../../DivBox/NavBars/NavTeacher'
import { DivTableBox } from '../../DivBox'
import { useToggle } from 'react-use'
import CheckPresence from '../../../Ui/Inputs'

type Student = {
  matricula: string
  name: string
}
type RowProps = {
  student: Student ,
  
}

// const Row = ({student, color }: {student: Student , color : string} ) => {

const Row = ({student }: RowProps ) => {
  
  const [present, setPrecense] = useToggle(false)
  const [reason, setImput] = useState("")

  return(
    <tr >
      <td>{student.matricula}</td>
      <td>{student.name}</td>
      <td style={{ display: "flex" , margin: "4px"}}>
          <CheckPresence value={present} onChange={() => {
            setImput("")
            setPrecense()
          }}/>
          <label style={{margin: "4px"}}>Presença</label>
      </td>
      <td><input disabled={present} style={{marginTop:"8px" ,}}/></td>
    </tr>
  )
}

const studentslist: Student[] = [
    {
      matricula:"12312323121",
      name: "marcos"
    },
    {
      matricula:"234214242342",
      name: "iago"
    },
    {
      matricula:"354234353345",
      name: "guilherme"
    },
    {
      matricula:"4353534523",
      name: "tiago"
    },
    {
      matricula:"53453252323",
      name: "gabrielle"
    }
    ,
    {
      matricula:"kid",
      name: "léo"
    }
  ]
export const TeacherClassCall : React.FC = ({ children }) => (
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
                 ) )}
            </tbody>
        </Table>
        <NavbarClassBottom/>
    </DivTableBox>
)


const RowGrades = ({student }: RowProps ) => {
  
  const [present, setPrecense] = useToggle(false)
  const [reason, setImput] = useState("")

  return(
    <tr >
      <td>{student.matricula}</td>
      <td>{student.name}</td>
      <td><input style={{marginTop:"8px" ,}}/></td>
      <td><input style={{marginTop:"8px" ,}}/></td>
    </tr>
  )
}
export const TeacherClassGrades : React.FC = ({ children }) => (
  <DivTableBox>
      <NavbarClass />
      <Table striped bordered hover size="sm">
          <thead>
              <tr>
                  <th className="w-25" >Matricula</th>
                  <th className="w-100">Nome</th>
                  <th className="w-25">1º Nota</th>
                  <th className="w-25">2º Nota</th>

              </tr>
          </thead>
          <tbody>
              {studentslist.map(item => (
                  <RowGrades student={item} />
               ) )}
          </tbody>
      </Table>
      <NavbarClassBottom/>
  </DivTableBox>
)


