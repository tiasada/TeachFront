import React from 'react'
import { ClassTitle} from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { TeacherClassGrades } from '../../components/Tables/TableBootsrap'
import { Navbarmenu } from '../../components/DivBox/NavBars'
import { useParams } from 'react-router-dom'

type RouterParams = {
  id: string
}

export const ClassGradesPage = () => {
  let { id } = useParams<RouterParams>();
  
  return(
    <main>
      <header>
        <div ><Navbarmenu /></div>
          <div>
            <ClassTitle>Escola E.E.F.Rubrivira</ClassTitle>
          </div>
          <div>
            <Search/>
            <TeacherClassGrades></TeacherClassGrades>
          </div>
      </header>
    </main>
  )
}

export default ClassGradesPage