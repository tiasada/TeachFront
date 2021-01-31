import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navmenu, NavClass } from './styles'
import { NavIcon } from '../../../assets/Images'

type Props = {
    children: React.ReactNode
    color: string
}

export const NavbarTeacher = ({ color, children }: Props) => (
    <Navmenu color={color} expand="lg">
        <Navmenu.Brand href="/teacher">
            <NavIcon />{' '}
            {children}
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

export const NavbarClassBottom = ({ children }: Props) => {
  return (
        <NavClass expand="lg">
            {children}
        </NavClass>
  )
}
export default NavbarTeacher
