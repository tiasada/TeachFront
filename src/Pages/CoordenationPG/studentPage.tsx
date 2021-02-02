import React from 'react'
import { LoginTitle } from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { Navbarmenu } from '../../components/NavBars'
import { StudentTable } from '/components/Tables/TableStudents'

export const MainPage = () => {
  return (
    <main>
      <header role="banner">
        <div>
          <Navbarmenu />
        </div>
        <div>
          <LoginTitle>Escola E.E.F.Rubrivira</LoginTitle>
        </div>
        <div>
          <Search color='secondary' placeholder='Search...' />
          <StudentTable />
        </div>
      </header>
    </main>
  )
}
export default MainPage
