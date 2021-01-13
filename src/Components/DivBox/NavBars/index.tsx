import React from 'react'
import { Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Navmenu} from './styles'

export const Navbarmenu = () => (
    <Navmenu expand="lg">
        <Navmenu.Brand href="#home">Teach</Navmenu.Brand>
        <Navmenu.Toggle aria-controls="basic-navbar-nav" />
        <Navmenu.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Chamadas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Notas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Turmas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Agenda</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Navmenu.Collapse>
    </Navmenu>
)
