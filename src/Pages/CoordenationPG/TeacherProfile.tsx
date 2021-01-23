import React from 'react'
import { IconMenu } from '../../assets/Images'
import Divbox, { DivProfile } from '../../components/DivBox'
import { MainTitle, Name } from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { Navbarmenu } from '../../components/DivBox/NavBars'
import ClassTable from '../../components/Tables'
import { DivTabBox } from '~/components/DivBox/styles'
import CreateUserForm from '../../components/Form/CreateUserForm'
export const TeacherInfo = () => (
  <main>
    <header role="banner">
        <div style={{padding: "0px 1px 50px 0px"}}>
          <Navbarmenu/>
        </div>    
        <div style = {{textAlign: 'center', marginTop: 30}}>
          <h1>Mario da Silva</h1>
          <h2 style = {{marginTop: 70}}>Dados do professor(a)</h2>
        </div> 
        <div style = {{ marginTop: 110, marginLeft: '10%'}}>
        <img style={{ width: 230 , marginLeft: 200, marginRight: 30}} src= "https://i1.rgstatic.net/ii/profile.image/419546390384642-1477039062102_Q512/Nick_Tregenza.jpg"></img>
          <DivProfile>
              <h3>CPF: 4544356651</h3>
              <h3>Matéria: Matemática</h3>
              <h3>Contatos: (47)9889-75463 - (47)9987-7765</h3>
              <h3>Turmas: 1°, 2°, 3°, 4° e 5° - Matutino e Vespertino</h3>
          </DivProfile>
        </div> 
            
    </header>
  </main>
)

export default TeacherInfo