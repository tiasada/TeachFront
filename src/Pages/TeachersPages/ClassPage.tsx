import React from 'react'
import { ClassTitle } from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { TeacherClassCall } from '../../components/Tables/TableBootsrap'
import { Navbarmenu } from '../../components/NavBars'

export const ClassPage = () => {
  return (
    <main>
      <header role="banner">
        <div ><Navbarmenu /></div>
          <div>
            <ClassTitle>Escola E.E.F.Rubrivira</ClassTitle>
          </div>
          <div>
            <Search color='secondary' placeholder='Search...' />
            <TeacherClassCall />
          </div>
      </header>
    </main>
  )
}

export default ClassPage
