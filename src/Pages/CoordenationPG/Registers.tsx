import React from 'react'
import CreateUserForm from '../../components/Form/CreateUserForm'
import Add from '../../components/Add'
import CreateClassroomForm from '../../components/CreateClassroomForm'
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
      <CreateUserForm title='Cadastro do Professor' buttonText='Cadastrar' role='teacher' />
      <CreateUserForm title='Cadastro do Estudante' buttonText='Cadastrar' role='student' />
      <CreateUserForm title='Cadastro do Responsáveis' buttonText='Cadastrar' role='parent' />
      <CreateClassroomForm />
    </Tabs>
    <Add />
  </>
)
export default Registers
