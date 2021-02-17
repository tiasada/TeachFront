import React from 'react'
import { Navbarmenu } from '../../components/NavBars'
import ClassroomListTable from '../../components/ClassroomListTable'
import { logout } from '/storage'

export const CoordenationHomePage = () => {
  const handleClick = () => {
    logout()
  }
  return (
    <>
        <div>
          <Navbarmenu onClick={handleClick} />
        </div>
        <div>
          <ClassroomListTable />
        </div>
    </>
  )
}
export default CoordenationHomePage
