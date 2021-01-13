import React from 'react'
import { ClassOvFlow } from './styles'
import { Container, Row} from 'react-bootstrap'

const DivClasslist: React.FC = ({ children }) => (
    <Container ><Row className="justify-content-center">{ children }</Row></Container>
       
)

export default DivClasslist