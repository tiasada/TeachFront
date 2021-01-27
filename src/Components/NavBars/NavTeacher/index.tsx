import React from 'react'
import { Nav, Button, Form, FormControl } from 'react-bootstrap'
import { Navmenu, NavClass } from './styles'
import { NavIcon } from '../../../assets/Images'

export const NavbarTeacher = () => (
    <Navmenu expand="lg">
        <Navmenu.Brand href="/teacher">
            <NavIcon />{' '}
            Teach
        </Navmenu.Brand>
        <Navmenu.Toggle aria-controls="basic-navbar-nav" />
        <Navmenu.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
type NavBottomProps = {
    children: React.ReactNode
}

export const NavbarClassBottom = ({children }: NavBottomProps) => {
    return (
        <NavClass expand="lg">
            {children}
        </NavClass>
    )

}
export default NavbarTeacher