import React from 'react'
import { IconMenu } from '../../assets/Images'
import Divbox from '../../Components/DivBox'
import { LoginTitle, MainTitle } from '../../Components/Texts/Titles/styles'
import { DropCont, Dropdnw } from '../../Components/DivBox/Dropdowns'
import { MnBtn } from '../../Ui/Buttons'
import Search from '../../Components/Bars'
import { Navbarmenu } from '../../Components/DivBox/NavBars'
import ClassTable from '../../Components/Tables'
import '../../Components/Tables/styledTable.css'
export const MainPage = () => (
  <main>
    <header role="banner">
        <div style={{padding: "0px 1px 50px 0px"}}>
          <Navbarmenu/>
        </div>        
        <div>
          <LoginTitle>Infem 204</LoginTitle>
        </div>
        <div>
          <Search/>
        </div>
        <div>
          <ClassTable>
            <tr>
              <th className = "coluna-matricula" >Matrícula</th>
              <th className = "coluna-nome">Nome</th>
              <th className = "coluna-nota" >Notas/Boletim</th>
              <th className = "coluna-falta">Faltas</th>
            </tr>
            <tbody>
              <tr>
                <td>4544356651</td>
                <td><a href="/teacher/class/id:/student/id:">Gabrielle Yasmin de Oliveira</a></td>
                <td>9,0</td>
                <td>0</td>
              </tr>
              
              <tr>
                <td>5444151142</td>
                <td>Tiago Sá da Costa</td>
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
                <td>Ana </td>
                <td>9,0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5544544484</td>
                <td>Maria </td>
                <td>9,0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5211245514</td>
                <td>João </td>
                <td>9,0</td>
                <td>1</td>
              </tr>
            </tbody>
          </ClassTable>
        </div>
    </header>
  </main>
)

export default MainPage