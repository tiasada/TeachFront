import React from 'react'
import { ClassOvFlow, OvFlowSchedule } from './styles'
import { Container, Row} from 'react-bootstrap'

export const DivClasslist: React.FC = ({ children }) => (
    <Container ><Row className="justify-content-center">{ children }</Row></Container>
       
)
export const DivSchedule: React.FC = ({ children }) => (
    <OvFlowSchedule>{ children }</OvFlowSchedule>
)

