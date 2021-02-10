import React from 'react'

import useUserData, { Role } from '../hooks/useUserData'
import CoordenationHomePage from './CoordenationPG/CoordenationHomePage'
import ClassesPage from './TeachersPages/ClassesPage'

// permit the userby role
const Permissions = ({ children, roles }: { children: React.ReactNode, roles: Role[] }) => {
  const { role } = useUserData()

  return (
    <>
      {roles.includes(role) && children}
    </>
  )
}

const HomePage = () => {
  return (
    <>
      <Permissions roles={[Role.School]}>
        <CoordenationHomePage />
      </Permissions>
      <Permissions roles={[Role.Teacher]}>
        <ClassesPage />
      </Permissions>
    </>
  )
}

export default HomePage
