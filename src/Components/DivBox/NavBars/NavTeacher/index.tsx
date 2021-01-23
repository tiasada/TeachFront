import React from 'react'
import { Nav, Button, Form, FormControl} from 'react-bootstrap'
import { Navmenu, NavClass} from './styles'
import Logo from '../../../../assets/Images/TeachLogoB.png'
import { Colors, colors } from '~/theme/colors'

type Props = {
    type?: 'submit' | 'button' | 'reset'
    color: Colors
  }

export const NavbarTeacher = () => (
    <Navmenu expand="lg">
        <Navmenu.Brand href="/teacher">
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
            {/* <Nav.Link href="/classes">Turmas</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Chamadas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Notas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Turmas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Agenda</NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
        </Navmenu.Collapse>
    </Navmenu>
)

export const NavbarClass = () => (
    <NavClass expand="lg">
        <NavClass.Brand >
            Turma *
        </NavClass.Brand>
        <NavClass.Toggle aria-controls="basic-navbar-nav" />
        <NavClass.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/class/:id">Chamada</Nav.Link>
            <Nav.Link href="/class/:id/grades">Notas</Nav.Link>
        </Nav>
        </NavClass.Collapse>
    </NavClass>
)

export const NavbarClassBottom = () => (
    <NavClass expand="lg">
        <Form >
            <Button type="submit">Submit</Button>
        </Form>
    </NavClass>
)
export default NavbarTeacher

export const NavTeacherList = () => (
    <NavClass expand="lg">
        <NavClass.Brand >
            Turma *
        </NavClass.Brand>
        <NavClass.Toggle aria-controls="basic-navbar-nav" />
        <NavClass.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/teacherpage">Professores</Nav.Link>
            <Nav.Link href="/class/:id/grades">Agenda</Nav.Link>
            <Nav.Link href="/classpage">Turmas</Nav.Link>
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