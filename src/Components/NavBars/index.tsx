import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavbarStudent } from './NavStudent'
import { NavbarTeacher } from './NavTeacher'
import { logout } from '/storage'

type Props = {
  onClick?: () => void
}
// teachers pages
export const Navbarmenu = ({ onClick }: Props) => {
  const history = useHistory()
  const handleClick = () => {
    logout()
    history.push('/login')
  }
  return (
    <NavbarTeacher color='primary' onClick={handleClick}>Teach</NavbarTeacher>
  )
}

// students pages
export const NavbarStudents = () => (
  <NavbarStudent color='primary' />
)
