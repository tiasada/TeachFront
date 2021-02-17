import React from 'react'
<<<<<<< HEAD
=======
import { NavClassList, NavParentListBottom, NavTeacherListBottom } from './NavCoord'
>>>>>>> 553ddc3c6461be5f971ddd78652d8b0cab8d5fd5
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