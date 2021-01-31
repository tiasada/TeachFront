import React from 'react'
import CreateUserForm from '/components/Form/CreateUserForm'
import { Navbarmenu } from '/components/NavBars'

export const TeacherRegistration = () => (
    <main>
        <div style={{ padding: '0px 1px 50px 0px' }}>
            <Navbarmenu />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
            <CreateUserForm title='Cadastro do Professir' buttonText='Cadastrar' role='teacher' />
        </div>
    </main>
)

export default TeacherRegistration
