// import React from 'react'
// import { getData } from '../storage'

// // types of roles
// enum Roles {
//   Teacher = 0,
//   Student = 1,
//   Parent = 2,
//   School = 3
// }

// // geted role
// const userRole = Roles.Student

// // get from localStore
// const useUserData = () => {
//   getData()
// }
// // permit the userby role
// const Permissions = ({ children, roles }: { children: React.ReactNode, roles: Roles[] }) => {
//   const { role } = useUserData()

//   return (
//     <>
//       {roles.includes(role) && children}
//     </>
//   )
// }

// const HomePage = () => {
//   return (
//     <>
//       <Permissions roles={[Roles.School, Roles.Teacher]}>
//         <ClassesList />
//       </Permissions>

//       <Permissions roles={[Roles.Student]}>
//         <UserSomething />
//       </Permissions>
//     </>
//   )
// }

// export default HomePage
