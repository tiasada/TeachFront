import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useEffectOnce } from 'react-use'
import { Navmenu } from './styles'
import { NavIcon } from '/assets/Images'
import useUserData, { Role } from '/hooks/useUserData'
import { logout } from '/storage'
import Button from '../../ui/Buttons'

type Props = {
  color: string
}

const profiles = {
  [Role.Teacher]: 'Professor',
  [Role.Student]: 'Estudante',
  [Role.Parent]: 'Responsável',
  [Role.School]: 'Coordenação'
}

export const Navbarmenu = ({ color }: Props) => {
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
    <Navmenu color={color} expand="lg">
      <Navmenu.Brand href="/teacher">
        <NavIcon />
      </Navmenu.Brand>
      <Navmenu.Toggle aria-controls="basic-navbar-nav" />
      <Navmenu.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <h4>{message}</h4>
        </Nav>
      </Navmenu.Collapse>
      <Button color='terciary' onClick={handleClick}>Logout</Button>
    </Navmenu>
  )
}
