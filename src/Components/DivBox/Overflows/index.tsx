import React from 'react'
import { ClassOvFlow, OvFlowSchedule } from './styles'
import { Container, Row} from 'react-bootstrap'

export const DivClasslist: React.FC = ({ children }) => (
    <ClassOvFlow>
        <Container>
            <Row className="justify-content-center">{ children }</Row>
        </Container>
    </ClassOvFlow>
    
)

interface IDivScheduleProps extends React.HTMLAttributes<HTMLElement> {
    center?: boolean
  }
  
export const DivSchedule: React.FC<IDivScheduleProps> = ({ children, center = true }) => (
    <OvFlowSchedule> 
        <Container>
            <Row className={center ? 'justify-content-center' : ''}>{ children }</Row>
        </Container>
    </OvFlowSchedule>
)