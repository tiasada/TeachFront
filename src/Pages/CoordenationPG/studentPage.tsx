import React from 'react'
import { IconMenu } from '../../assets/Images'
import Divbox, { DivTableBox, DivTableRight } from '../../components/DivBox'
import { LoginTitle, MainTitle } from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { Navbarmenu } from '../../components/DivBox/NavBars'
import ClassTable from '../../components/Tables'
import { NavTeacherList } from '../../components/DivBox/NavBars/NavTeacher'

export const MainPage = () => (
  <main>
    <header role="banner">
        <div style={{padding: "0px 1px 50px 0px"}}>
          <Navbarmenu/>
          <th style = {{color: "#727272"}}>professores</th>
        </div>        
        <div>
          <LoginTitle>Infem 204</LoginTitle>
        </div>
        <div>
          <Search/>
        </div>
        <DivTableRight>
          <NavTeacherList />
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
                <td><a href="/studentprofile">Enzo Gabriel JR</a></td>
                <td>9,0</td>
                <td>0</td>
              </tr>
              
              <tr>
                <td>5444151142</td>
                <td><a href="/studentprofile">Tiago Sá da Costa</a></td>
                <td>9,0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5411542515</td>
                <td><a href="/studentprofile">Iago Bernardo Grah</a></td>
                <td>9,0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1544541151</td> 
                <td><a href="/studentprofile">Ana </a></td>
                <td>9,0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5544544484</td>
                <td><a href="/studentprofile">Maria </a></td>
                <td>9,0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>5211245514</td>
                <td><a href="/studentprofile">João </a></td>
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