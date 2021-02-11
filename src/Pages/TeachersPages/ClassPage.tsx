import React from 'react'
import { ClassTitle } from '../../components/Texts/Titles/styles'
import { Navbarmenu } from '../../components/NavBars'
import ClassroomTable from '../../components/ClassroomTable'

export const ClassPage = () => {
  return (
    <main>
      <header role='banner'>
        <div ><Navbarmenu /></div>
        <div>
          <p>{location.pathname.slice(6)}</p>
          <ClassTitle>Escola E.E.F.Rubrivira</ClassTitle>
        </div>
          <ClassroomTable />
      </header>
    </main>
  )
}

export default ClassPage
