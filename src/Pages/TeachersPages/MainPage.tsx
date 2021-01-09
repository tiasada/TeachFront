import React from 'react'
import { IconMenu } from '../../Components/Images'
import Divbox from '../../Components/DivBox'
import { LoginTitle, MainTitle } from '../../Components/Texts/Titles/styles'
import { DropCont, Dropdnw } from '../../Components/DivBox/Dropdowns'
import { MnBtn } from '../../Components/Buttons'
import Search from '../../Components/Bars'
import DivClasslist from '../../Components/DivBox/Overflows'

export const MainPage = () => (
  <main>
    <header role="banner">
        <Divbox>
            <MainTitle>Teach</MainTitle>
            <Dropdnw>
             <IconMenu></IconMenu>
             <DropCont><MnBtn>Menu</MnBtn></DropCont>
            </Dropdnw>
        </Divbox>
        <div>
          <LoginTitle>Escola E.E.F.Rubrivira</LoginTitle>
        </div>
        <div>
          <Search/>
        </div>
        <DivClasslist>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>Turma</h1>
          <h1>TurmaG</h1>
        </DivClasslist>
    </header>
  </main>
)

export default MainPage