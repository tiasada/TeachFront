import React from 'react'
import { Navbarmenu } from '../../components/NavBars'
import ClassroomListTable from '../../components/ClassroomListTable'
import { logout } from '/storage'
import { useHistory } from 'react-router-dom'

export const CoordenationHomePage = () => {
  const history = useHistory()
  const handleClick = () => {
    logout()
    history.push('/login')
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
