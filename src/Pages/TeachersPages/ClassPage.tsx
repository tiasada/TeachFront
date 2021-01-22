import React from 'react'
import { ClassTitle} from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { TeacherClassCall } from '../../components/Tables/TableBootsrap'
import { Navbarmenu } from '../../components/DivBox/NavBars'
import { useParams } from 'react-router-dom'

type RouterParams = {
  id: string
}

export const ClassPage = () => {
  let { id } = useParams<RouterParams>();
  
  return(
    <main>
      <header role="banner">
        <div ><Navbarmenu /></div>
          <div>
            <ClassTitle>Escola E.E.F.Rubrivira</ClassTitle>
          </div>
          <div>
            <Search/>
            <TeacherClassCall></TeacherClassCall>
          </div>
      </header>
    </main>
  )
}

export default ClassPage