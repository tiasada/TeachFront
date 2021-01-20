import React from 'react'
import { IconMenu } from '../../assets/Images'
import Divbox, { DivTableBox, DivTableRight } from '../../Components/DivBox'
import { Name } from '../../Components/Texts/Titles/styles'
import Search from '../../Components/Bars'
import { Navbarmenu } from '../../Components/DivBox/NavBars'
import ClassTable from '../../Components/Tables'
export const StudentInfo = () => (
  <main>
    <header role="banner">
        <div style={{padding: "0px 1px 50px 0px"}}>
          <Navbarmenu/>
        </div>    
        <div>
          <Name>Rielle Samira Cardoso Santana de Jesus</Name>
        </div>    
    </header>
  </main>
)

export default StudentInfo