import React from 'react'
import { ClassTitle} from '../../Components/Texts/Titles/styles'
import Search from '../../Components/Bars'
import { TeacherClassCall } from '../../Components/Tables/TableBootsrap'
import { Navbarmenu } from '../../Components/DivBox/NavBars'
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