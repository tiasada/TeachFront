import React from 'react'
import {  DivTableRight } from '../../components/DivBox'
import { LoginTitle } from '../../components/Texts/Titles/styles'
import Search from '../../components/Bars'
import { Navbarmenu } from '../../components/NavBars'
import ClassTable from '../../components/Tables'
import { NavCoordTeachList, NavCoordTeacherBottom } from '../../components/NavBars'
export const CoordTeacher = () => (
  <main>
    <header role="banner">
        <div style={{padding: "0px 1px 50px 0px"}}>
          <Navbarmenu/>
        </div>        
        <div>
          <LoginTitle>Professores</LoginTitle>
        </div>
        <div>
          <Search color='secondary' placeholder='Search...'/>
        </div>
        <DivTableRight>
            <NavCoordTeachList/>
          <ClassTable>
            <tr>
              <th className= "w-25">CPF</th>
              <th className= "w-100"> Nome</th>
              <th className= "w-25">Matérias Regentes</th>
              <th className= "w-25">Turmas </th>
            </tr>
            <tbody>
              <tr>
                <td>30321622707</td>
                <td><a href="/teacherprofile">Mario da Silva</a></td>
                <td>Matemática</td>
                <td>5</td>
              </tr>
              
              <tr>
                <td>45824114447</td>
                <td>Lucas Costa</td>
                <td>Física</td>
                <td>10</td>
              </tr>
              <tr>
                <td>25554111542</td>
                <td>Thiago da Silva</td>
                <td>Sociologia</td>
                <td>10</td>
              </tr>
              <tr>
                <td>25554511454</td> 
                <td>Ana Maria</td>
                <td>Português</td>
                <td>3</td>
              </tr>
              <tr>
                <td>65552455148</td>
                <td>Angelica Lima</td>
                <td>Inglês</td>
                <td>2</td>
              </tr>
              <tr>
                <td>25514545541</td>
                <td>João Pedro</td>
                <td>Química</td>
                <td>1</td>
              </tr>
            </tbody>
          </ClassTable>
          <NavCoordTeacherBottom />
        </DivTableRight>
    </header>
  </main>
)

export default CoordTeacher