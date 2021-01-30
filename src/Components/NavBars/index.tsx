import React from 'react'
import { NavStudentListBottom, NavTeacherList, NavTeacherListBottom } from './NavCoord'
import { NavbarStudent } from './NavStudent'
import { NavbarTeacher } from './NavTeacher'

// teachers pages
export const Navbarmenu = () => (
    <NavbarTeacher color='primary'/>   
)

// students pages
export const NavbarStudents = () => (
    <NavbarStudent color='primary'/>   
)

// Coordenation pages
export const NavCoordTeachList = () => (
    <NavTeacherList color='secondary' />
)
export const NavCoordTeacherBottom = () => (
    <NavTeacherListBottom />   
)
export const NavCoordStudentBottom = () => (
    <NavStudentListBottom />   
)
