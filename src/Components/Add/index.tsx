// import React from 'react'
// import { useSetState } from 'react-use'
// import Form from '../Form'
// import { Title } from '../Form/CreateUserForm/styles'
// import { Classroom } from '/api'
// import Tabs from '/ui/Tabs'

// type AddStudentProps = {
//   classrooms: Classroom[]
//   classroom: Classroom
//   setClassroom: () => void
// }
// const Add = () => {
//   return (
//     <Tabs
//       title='Adiconar'
//       tabs={['Aluno na Turma  |', 'Professor na Turma  |', 'Turma a Alguem  |']}
//     >
//       <AddStudent />
//     </Tabs>
//   )
// }
// export default Add

// const AddStudent = ({ classrooms, classroom, setClassroom }: AddStudentProps) => {
//   const [onsubmit, onSubmit] = useSetState()
//   return (
//     <Form onSubmit={onsubmit}>
//       <Title>{props.title}</Title>
//       <select
//         value={classroom}
//         onChange={e => setClassroom(e.target.value)}
//       >
//         <option></option>
//         {classrooms.map(item => (
//           <option key={item.id} value={item.id}>{item.name}</option>
//         ))}
//       </select>
//     </Form>
//   )
// }