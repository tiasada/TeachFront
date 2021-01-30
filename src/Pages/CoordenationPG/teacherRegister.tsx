import React from 'react'
import TeacherRegister from '/components/Form/TeacherRegister'
import { Navbarmenu } from '/components/NavBars'

export const TeacherRegistration = () => (
    <main>
        <div style={{ padding: "0px 1px 50px 0px" }}>
            <Navbarmenu />
        </div>
        <div style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center' , height:'500px'}}>
            <TeacherRegister title='Cadastro do Professor' buttonText='cadastrar'/>
        </div>
    </main>
)

export default TeacherRegistration