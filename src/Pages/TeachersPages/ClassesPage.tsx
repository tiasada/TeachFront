import React, { useState } from 'react'
import { ClassTitle } from '../../components/Texts/Titles/styles'
import { ClassesButton } from '../../ui/Buttons'
import Search from '../../components/Bars'
import { DivClasslist } from '../../components/DivBox/Overflows'
import { Navbarmenu } from '../../components/NavBars'
import { useHistory } from 'react-router-dom'
import { getclassrooms } from '/api'

type Classroom = {
  name: string
  subjects: string[]
  subjectsString: string
  students: string[]
  teachers: string[]
  grades: string[]
  classDays: string[]
  id: string
}

export const ClassesPage = () => {
  const history = useHistory()
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  getclassrooms()
    .then(resp => setClassrooms(resp.data))

  function handleClick (id: string) {
    history.push(`/class/${id}`)
  }
  return (
    <main>
      <div >
        <Navbarmenu />
      </div>
      <div>
        <ClassTitle>Escola E.E.F.Rubrivira</ClassTitle>
      </div>
      <div>
        <ClassTitle>Suas Turmas</ClassTitle>
        <Search color='secondary' placeholder='sua mae aquela...' />
        <DivClasslist center>
          {classrooms.map(item => (
            <ClassesButton onClick={() => handleClick(item.id)} key={item.id}>{item.name}</ClassesButton>
          ))}
        </DivClasslist>
      </div>
    </main>
  )
}
export default ClassesPage
