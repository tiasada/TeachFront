import React from 'react'
import { ScheduleTitle } from '../../Components/Texts/Titles/styles'
import { DivSchedule } from '../../Components/DivBox/Overflows/index'
import { Navbarmenu } from '../../Components/DivBox/NavBars'
import { MonthName } from '../../Components/Texts/styles'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Container } from 'react-bootstrap'


// import { Search } from '../Components/Bars/index'

export const Schedule = () => (
  <main>
    <header role="banner">
      <div style={{marginBottom: '30px'}}><Navbarmenu /></div>
        {/* <Divbox>
            <MainTitle>Teach</MainTitle>
            <Dropdnw>
             <IconMenu></IconMenu>
             <DropCont><MnBtn>Menu</MnBtn></DropCont>
            </Dropdnw>
        </Divbox> */}
        <div style={{marginBottom:'30px'}}>
          <ScheduleTitle>Calendário</ScheduleTitle>
        </div>
        <div>
          <DivSchedule style={{}} center={false}>
            <Container>
              <MonthName style={{marginTop: '50px',
              marginBottom:'30px'}}>Abril</MonthName>
            <Row >
              <Col xs={2}
                style={{border: '1px solid #000000',
                backgroundColor: '#ffffff',
                borderRadius: '3px',
                height: '135px',}}>1 of 2</Col>
              <Col style={{border: '1px solid #000000',
              borderRadius: '3px',}}>2 of 2</Col>
            </Row>
              <Row style={{marginTop: '50px'}}>
                <Col xs={2}
                style={{border: '1px solid #000000',
                backgroundColor: '#ffffff',
                height: '135px',}}>1 of 2</Col>
                <Col style={{border: '1px solid #000000'}}>2 of 2</Col>
              </Row>
            </Container>
          </DivSchedule >
        </div>
    </header>
  </main>
)


export default Schedule