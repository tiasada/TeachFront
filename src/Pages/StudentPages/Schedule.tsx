import React from 'react'
import { ScheduleTitle } from '../../Components/Texts/Titles/styles'
import { DivSchedule } from '../../Components/DivBox/Overflows/index'
import { Navbarmenu } from '../../Components/DivBox/NavBars'


// import { Search } from '../Components/Bars/index'

export const Schedule = () => (
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
        <div>
          <ScheduleTitle>Calendário</ScheduleTitle>
        </div>
        <div>
          <DivSchedule>
            <ScheduleTitle>asakhfjkashjfjsakjfksaj</ScheduleTitle>
          </DivSchedule>
        </div>
    </header>
  </main>
)


export default Schedule