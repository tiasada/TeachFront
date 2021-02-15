import React from 'react'
import { Navbarmenu } from '../../components/NavBars'
import ClassroomListTable from '../../components/ClassroomListTable'

export const CoordenationHomePage = () => {
  return (
    <>
        <div>
          <Navbarmenu />
        </div>
        <div>
          <ClassroomListTable />
        </div>
    </>
  )
}
export default CoordenationHomePage
