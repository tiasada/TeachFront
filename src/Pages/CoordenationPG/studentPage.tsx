import React, { useState } from 'react'
import { DivTableRight } from '../../components/DivBox'
import { LoginTitle } from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { Navbarmenu, NavCoordStudentBottom, NavCoordTeachList } from '../../components/NavBars'
import ClassTable from '../../components/Tables'
import { NavStudentListBottom, NavTeacherList } from '../../components/NavBars/NavCoord'
import Modal from '/components/Modal'
import ProfileInfo from '/components/ProfileInfo'
import { StudentTable } from '/components/Tables/TableStudents'

export const MainPage = () => {

  const [showModal, setShowModal] = useState(false)


  return(
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
