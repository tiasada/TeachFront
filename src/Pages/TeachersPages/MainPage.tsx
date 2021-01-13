import React from 'react'
import { IconMenu } from '../../Components/Images'
import Divbox from '../../Components/DivBox'
import { LoginTitle, MainTitle } from '../../Components/Texts/Titles/styles'
import { DropCont, Dropdnw } from '../../Components/DivBox/Dropdowns'
import { MnBtn, ClassesButton } from '../../Components/Buttons'
import Search from '../../Components/Bars'
import { DivClasslist } from '../../Components/DivBox/Overflows'
import { Navbarmenu } from '../../Components/DivBox/NavBars'


export const MainPage = () => (
  <main>
    <header role="banner">
      <div ><Navbarmenu/></div>
        {/* <Divbox>
            <MainTitle>Teach</MainTitle>
            <Dropdnw>
             <IconMenu></IconMenu>
             <DropCont><MnBtn>Menu</MnBtn></DropCont>
            </Dropdnw>
        </Divbox> */}
        <div style= {{ width: "auto" }}>
          <LoginTitle>Escola E.E.F.Rubrivira</LoginTitle>
        </div>
        <div>
          <LoginTitle>Suas Turmas</LoginTitle>
          <Search/>
          <DivClasslist>
            <ClassesButton>Turma A</ClassesButton>
            <ClassesButton>Turma B</ClassesButton>
            <ClassesButton>Turma C</ClassesButton>
            <ClassesButton>Turma D</ClassesButton>
            <ClassesButton>Turma E</ClassesButton>
            <ClassesButton>Turma F</ClassesButton>
            <ClassesButton>Turma G</ClassesButton>
            <ClassesButton>Turma H</ClassesButton>
            <ClassesButton>Turma I</ClassesButton>
            <ClassesButton>Turma J</ClassesButton>
            <ClassesButton>Turma K</ClassesButton>
            <ClassesButton>Turma L</ClassesButton>
            <ClassesButton>Turma M</ClassesButton>
            <ClassesButton>Turma N</ClassesButton>
            <ClassesButton>Turma O</ClassesButton>
            <ClassesButton>Turma P</ClassesButton>
            <ClassesButton>Turma Q</ClassesButton>
            <ClassesButton>Turma R</ClassesButton>
            <ClassesButton>Turma S</ClassesButton>
            <ClassesButton>Turma T</ClassesButton>
            <ClassesButton>Turma U</ClassesButton>
            <ClassesButton>Turma V</ClassesButton>
            <ClassesButton>Turma W</ClassesButton>
            <ClassesButton>Turma X</ClassesButton>
            <ClassesButton>Turma Y</ClassesButton>
            <ClassesButton>Turma Z</ClassesButton>
            <ClassesButton>Turma A</ClassesButton>
            <ClassesButton>Turma B</ClassesButton>
            <ClassesButton>Turma C</ClassesButton>
            <ClassesButton>Turma D</ClassesButton>
            <ClassesButton>Turma E</ClassesButton>
            <ClassesButton>Turma F</ClassesButton>
            <ClassesButton>Turma G</ClassesButton>
            <ClassesButton>Turma H</ClassesButton>
            <ClassesButton>Turma I</ClassesButton>
            <ClassesButton>Turma J</ClassesButton>
            <ClassesButton>Turma K</ClassesButton>
            <ClassesButton>Turma L</ClassesButton>
            <ClassesButton>Turma M</ClassesButton>
            <ClassesButton>Turma N</ClassesButton>
            <ClassesButton>Turma O</ClassesButton>
            <ClassesButton>Turma P</ClassesButton>
            <ClassesButton>Turma Q</ClassesButton>
            <ClassesButton>Turma R</ClassesButton>
            <ClassesButton>Turma S</ClassesButton>
            <ClassesButton>Turma T</ClassesButton>
            <ClassesButton>Turma U</ClassesButton>
            <ClassesButton>Turma V</ClassesButton>
            <ClassesButton>Turma W</ClassesButton>
            <ClassesButton>Turma X</ClassesButton>
            <ClassesButton>Turma Y</ClassesButton>
            <ClassesButton>Turma Z</ClassesButton>
          </DivClasslist>
        </div>
    </header>
  </main>
)

export default MainPage