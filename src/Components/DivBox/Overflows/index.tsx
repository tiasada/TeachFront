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
export const DivSchedule: React.FC = ({ children }) => (
    <OvFlowSchedule> 
        <Container>
            <Row className="justify-content-center">{ children }</Row>
        </Container>
    </OvFlowSchedule>
)

