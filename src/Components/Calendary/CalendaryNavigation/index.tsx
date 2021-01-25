import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavClass} from './styles'

export const CalendarNav = () => (
    <NavClass expand="lg">
        <NavClass.Brand >
            'Ano: ####'
        </NavClass.Brand>
        <NavClass.Toggle aria-controls="basic-navbar-nav" />
        <NavClass.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="">Previus</Nav.Link>
            <Nav.Link href="">Next</Nav.Link>
        </Nav>
        </NavClass.Collapse>
    </NavClass>
)

export const NavTeacherListBottom = () => (
    <NavClass expand="lg">
        <Nav className="mr-auto">
            <Nav.Link href="/teacherpage">Cadastrar</Nav.Link>
        </Nav>
    </NavClass>
)