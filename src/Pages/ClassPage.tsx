import React from 'react'
import useUserData, { Role } from '../hooks/useUserData'
import { ClassTitle } from '../components/Texts/Titles/styles'
import { Navbarmenu } from '../components/NavBars'
import ClassroomTable from '../components/ClassroomTable'
import ClassroomTableCoord from '/components/ClassroomTableCoord'

const Permissions = ({ children, roles }: { children: React.ReactNode, roles: Role[] }) => {
  const { role } = useUserData()

  return (
    <>
      {roles.includes(role) && children}
    </>
  )
}

export const ClassPage = () => {
  return (
    <main>
      <header role='banner'>
        <div ><Navbarmenu /></div>
        <>
          <Permissions roles={[Role.School]}>
            <ClassroomTableCoord />
          </Permissions>
          <Permissions roles={[Role.Teacher]}>
            <ClassroomTable />
          </Permissions>
        </>
      </header>
    </main>
  )
}

export default ClassPage
