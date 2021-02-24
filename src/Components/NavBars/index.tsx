import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useEffectOnce } from 'react-use'
import { NavbarStudent } from './NavStudent'
import { NavbarTeacher } from './NavTeacher'
import useUserData, { Role } from '/hooks/useUserData'
import { logout } from '/storage'

type Props = {
  onClick?: () => void
}
const profiles = {
  [Role.Teacher]: 'Professor',
  [Role.Student]: 'Estudante',
  [Role.Parent]: 'Responsável',
  [Role.School]: 'Coordenação'
}
// teachers pages
export const Navbarmenu = ({ onClick }: Props) => {
  const user = useUserData()
  const history = useHistory()
  const [message, setMessage] = useState('')
  const handleClick = () => {
    logout()
    history.push('/login')
  }
  useEffectOnce(() => {
    setMessage(`Olá, ${profiles[user.role]} `)
  })
  return (
    <NavbarTeacher color='primary' onClick={handleClick} wellcome={message}></NavbarTeacher>
  )
}

// students pages
export const NavbarStudents = () => (
  <NavbarStudent color='primary' />
)
