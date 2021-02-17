import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navmenu, NavClass } from './styles'
import { NavIcon } from '../../../assets/Images'
import { Colors, colors } from '../../../theme/colors'
import Button from '/ui/Buttons/button'

type Props = {
    children: React.ReactNode
    color: Colors
    onClick?: () => void
}

export const NavbarTeacher = ({ color, children, onClick }: Props) => (
    <Navmenu color={colors[color]} expand="lg">
        <Navmenu.Brand href="/teacher">
            <NavIcon />{' '}
            {children}
        </Navmenu.Brand>
        <Navmenu.Toggle aria-controls="basic-navbar-nav" />
        <Navmenu.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
        </Navmenu.Collapse>
        <Button color='terciary' onClick={onClick}>Logout</Button>
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
