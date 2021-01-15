import React from 'react'
import { IconMenu } from '../../assets/Images'
import Divbox from '../../Components/DivBox'
import { LoginTitle, MainTitle } from '../../Components/Texts/Titles/styles'
import { DropCont, Dropdnw } from '../../Components/DivBox/Dropdowns'
import { MnBtn } from '../../Ui/Buttons'
import Search from '../../Components/Bars'
import ClassTable from '../../Components/Tables'
import '../../Components/Tables/styledTable.css'
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
          <LoginTitle>Infem 204</LoginTitle>
        </div>
        <div>
          <Search/>
        </div>
        <div>
          <ClassTable>
            <tr>
              <th className = "coluna-nota">Matrícula</th>
              <th className = "coluna-nome">Nome</th>
              <th className = "coluna-falta" >Notas/Boletim</th>
              <th>Faltas</th>
            </tr>
            <tr>
              <td>4544356651</td>
              <td>Gabrielle Yasmin de Oliveira</td>
              <td>9,0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5444151142</td>
              <td>Thiago da Silva</td>
              <td>9,0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5411542515</td>
              <td>Iago Grah</td>
              <td>9,0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>1544541151</td>
              <td>Guilherme </td>
              <td>9,0</td>
              <td>1</td>
            </tr>
          </ClassTable>
        </div>
    </header>
  </main>
)

export default MainPage