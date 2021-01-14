import React from 'react'
import { ClassTitle} from '../../Components/Texts/Titles/styles'
import Search from '../../Components/Bars'
import { DivClasslist } from '../../Components/DivBox/Overflows'
import { TeacherClassTable } from '../../Components/Tables/TableBootsrap'
import { Navbarmenu } from '../../Components/DivBox/NavBars'


export const ClassPage = () => (
  <main>
    <header role="banner">
      <div ><Navbarmenu/></div>
        <div>
          <ClassTitle>Escola E.E.F.Rubrivira</ClassTitle>
        </div>
        <div>
          <ClassTitle>Turma * </ClassTitle>
          <Search/>
          <TeacherClassTable>Turma A</TeacherClassTable>
        </div>
    </header>
  </main>
)

export default ClassPage