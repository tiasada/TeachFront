import React from 'react'
import useUserData, { Role } from '../hooks/useUserData'
import ClassesPage from './TeachersPages/ClassesPage'
import ClassroomListTable from '/components/ClassroomListTable'

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
        <ClassroomListTable />
      </Permissions>
      <Permissions roles={[Role.Teacher]}>
        <ClassesPage />
      </Permissions>
    </>
  )
}

export default HomePage
