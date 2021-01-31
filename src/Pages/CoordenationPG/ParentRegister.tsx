import React from 'react'
import CreateUserForm from '/components/Form/CreateUserForm'
import { Navbarmenu } from '/components/NavBars'

export const ParentRegistration = () => (
    <main>
        <div style={{ padding: '0px 1px 50px 0px' }}>
            <Navbarmenu />
        </div>
        <div style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', marginTop: '50px' }}>
            <CreateUserForm title='Cadastro do Responsáveis' buttonText='Cadastrar' role= 'parent' />
        </div>
    </main>
)

export default ParentRegistration