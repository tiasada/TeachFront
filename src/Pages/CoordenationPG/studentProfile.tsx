import React from 'react'
import { IconMenu } from '../../assets/Images'
import Divbox, { DivProfile } from '../../Components/DivBox'
import { MainTitle, Name } from '../../Components/Texts/Titles/styles'
import Search from '../../Components/Bars'
import { Navbarmenu } from '../../Components/DivBox/NavBars'
import ClassTable from '../../Components/Tables'
import { DivTabBox } from '~/Components/DivBox/styles'
export const StudentInfo = () => (
  <main>
    <header role="banner">
        <div style={{padding: "0px 1px 50px 0px"}}>
          <Navbarmenu/>
        </div>    
        <div style = {{textAlign: 'center', marginTop: 30}}>
          <h1>Neymar da Silva Santos Júnior</h1>
          <h2 style = {{marginTop: 70}}>Dados do aluno(a)</h2>
        </div> 
        <div style = {{ marginTop: 110, marginLeft: '10%'}}>
        <img style={{ width: 230 , marginLeft: 200, marginRight: 30}} src= "https://bookingagentinfo.com/wp-content/uploads/2018/09/Neymar-da-Silva-Santos-J%C3%BAnior-Contact-Information.jpg"></img>
          <DivProfile>
              <h3>Matrícula: 4544356651</h3>
              <h3>Turma: Infem</h3>
              <h3>Sala: 204</h3>
              <h3>Ano: 2°ano</h3>
              <h3>Pais/Responsáveis: Neymar Pae</h3>
              <h3>Contatos: (47)9889-75463 - (47)9987-7765</h3>
          </DivProfile>
        </div>   
            
    </header>
  </main>
)

export default StudentInfo