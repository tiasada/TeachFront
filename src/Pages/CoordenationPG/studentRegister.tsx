import React from 'react'
import CreateUserForm from '../../components/Form/CreateUserForm'
import { Navbarmenu } from '../../components/NavBars'

export const StudentRegistration = () => (
    <main>
        <div style={{ padding: '0px 1px 50px 0px' }}>
            <Navbarmenu />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', marginTop: '50px' }}>
            <CreateUserForm title='Cadastro do Estudante' buttonText='Cadastrar' role='student' />
        </div>
    </main>
)

export default StudentRegistration
