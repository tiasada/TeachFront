import React from 'react'
import { LoginTitle } from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { Navbarmenu } from '../../components/NavBars'
import { TableClass } from '/components/Tables/TableClass'

export const ClassTable = () => {
  return (
    <main>
      <header role="banner">
        <div>
          <Navbarmenu />
        </div>
        <div>
          <LoginTitle>Turma A</LoginTitle>
        </div>
        <div>
          <Search color='secondary' placeholder='Search...' />
          <TableClass />
        </div>
      </header>
    </main>
  )
}
export default ClassTable
