import React from 'react'
import { ClassOvFlow, OvFlowSchedule } from './styles'
import { Container, Row } from 'react-bootstrap'

type Props = {
    children: React.ReactNode
    center: boolean
}

export const DivClasslist = ({ children }: Props) => {
  return (
        <ClassOvFlow>
            <Container>
                <Row className="justify-content-center">{children}</Row>
            </Container>
        </ClassOvFlow >
  )
}

export const DivSchedule = ({ children, center = true }: Props) => (
    <OvFlowSchedule>
        <Container>
            <Row className={center ? 'justify-content-center' : ''}>{children}</Row>
        </Container>
    </OvFlowSchedule>
)
