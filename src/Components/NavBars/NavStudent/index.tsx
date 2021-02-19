import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navmenu } from './styles'
import { NavIcon } from '/assets/Images'

type Props = {
    color: string
}

export const NavbarStudent = ({ color }: Props) => (
    <Navmenu expand="lg">
        <Navmenu.Brand href="/student">
            <NavIcon />{' '}
        </Navmenu.Brand>
        <Navmenu.Toggle aria-controls="basic-navbar-nav" />
        <Navmenu.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
        </Navmenu.Collapse>
    </Navmenu>
)
