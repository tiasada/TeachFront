import React from 'react'
import Add from '../../components/Add'
import CreateClassroomForm from '../../components/CreateClassroomForm'
import CreateParentForm from '/components/CreateParentForm'
import CreateStudentForm from '/components/CreateStudentForm'
import CreateTeacherForm from '/components/CreateTeacherForm'
import Tabs from '/ui/Tabs'

export const Registers = () => (
  <>
    <Tabs tabs={[
      'Teacher',
      'Student',
      'Parent',
      'Classroom'
    ]}
      title='Registers'
    >
      <CreateTeacherForm title='Cadastro do Professor' buttonText='Cadastrar'/>
      <CreateStudentForm title='Cadastro do Estudante' buttonText='Cadastrar'/>
      <CreateParentForm title='Cadastro do Responsáveis' buttonText='Cadastrar'/>
      <CreateClassroomForm />
    </Tabs>
    <Add />
  </>
)
export default Registers
