import React from 'react'
import { NavbarStudent } from './NavStudent'
import { NavbarTeacher } from './NavTeacher'

type Props = {
    onClick?: () => void
}
// teachers pages
export const Navbarmenu = ({ onClick }: Props) => (
    <NavbarTeacher color='primary' onClick={onClick}>Teach</NavbarTeacher>
)

// students pages
export const NavbarStudents = () => (
    <NavbarStudent color='primary'/>
)
