import React from 'react'
import { NavTeacherList, NavTeacherListBottom } from './NavCoord'
import { NavbarStudent } from './NavStudent'
import { NavbarTeacher } from './NavTeacher'

// teachers pages
export const Navbarmenu = () => (
    <NavbarTeacher />   
)

// students pages
export const NavbarStudents = () => (
    <NavbarStudent />   
)

// Coordenation pages
export const NavCoordTeachList = () => (
    <NavTeacherList />
)
export const NavCoordTeacherBottom = () => (
    <NavTeacherListBottom />   
)
