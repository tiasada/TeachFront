import React from 'react'
import { NavClassList, NavTeacherListBottom } from './NavCoord'
import { NavbarStudent } from './NavStudent'
import { NavbarTeacher } from './NavTeacher'

// teachers pages
export const Navbarmenu = () => (
    <NavbarTeacher color='primary'>Teach</NavbarTeacher>
)

// students pages
export const NavbarStudents = () => (
    <NavbarStudent color='primary'/>
)

// Coordenation pages
export const NavCoordTeachList = () => (
    <NavClassList color='secondary' />
)
export const NavCoordTeacherBottom = () => (
    <NavTeacherListBottom />
)
