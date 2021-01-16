import React from 'react'
import { Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Navmenu} from './styles'
import Logo from '../../../assets/Images/TeachLogoB.png'

export const Navbarmenu = () => (
    <Navmenu expand="lg">
        <Navmenu.Brand href="#home">
            <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Teach
        </Navmenu.Brand>
        <Navmenu.Toggle aria-controls="basic-navbar-nav" />
        <Navmenu.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/login">Home</Nav.Link>
            <Nav.Link href="/class/:id">Turmas</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Chamadas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Notas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Turmas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Agenda</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navmenu.Collapse>
    </Navmenu>
)
