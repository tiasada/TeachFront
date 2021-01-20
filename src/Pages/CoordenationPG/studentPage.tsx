import React from 'react'
import { IconMenu } from '../../assets/Images'
import Divbox, { DivTableBox, DivTableRight } from '../../Components/DivBox'
import { LoginTitle, MainTitle } from '../../Components/Texts/Titles/styles'
import Search from '../../Components/Bars'
import { Navbarmenu } from '../../Components/DivBox/NavBars'
import ClassTable from '../../Components/Tables'
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
        <DivTableRight>
          <ClassTable>
            <tr>
              <th className= "w-25">Matrícula</th>
              <th className= "w-100"> Nome</th>
              <th className= "w-25">Notas/Boletim</th>
              <th className= "w-25">Faltas</th>
            </tr>
            <tbody>
              <tr>
                <td>4544356651</td>
                <td><a href="/studentprofile">Raielle Samira Cardoso Santana de Jesus</a></td>
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
        </DivTableRight>
    </header>
  </main>
)

export default MainPage