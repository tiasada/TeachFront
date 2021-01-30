import React from 'react'
import StudentRegister from '/components/Form/StudentRegister'
import { Navbarmenu } from '/components/NavBars'

export const StudentRegistration = () => (
    <main>
        <div style={{ padding: "0px 1px 50px 0px" }}>
            <Navbarmenu />
        </div>
        <div style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center' , height:'500px', marginTop:'50px'}}>
            <StudentRegister title='Cadastro do Estudante' buttonText='cadastrar' title2= 'Cadastro do Responsável' />
        </div>
    </main>
)

export default StudentRegistration