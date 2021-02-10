import React from 'react'
import { LoginTitle } from '../../components/Texts/Titles/styles'
import { Navbarmenu } from '../../components/NavBars'
import ClassroomListTable from '../../components/ClassroomListTable'

export const CoordenationHomePage = () => {
  return (
    <>
        <div>
          <Navbarmenu />
        </div>
        <div>
          <LoginTitle>Escola E.E.F.Rubrivira</LoginTitle>
        </div>
        <div>
          <ClassroomListTable />
        </div>
    </>
  )
}
export default CoordenationHomePage
