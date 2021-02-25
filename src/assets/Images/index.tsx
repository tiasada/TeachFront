import React from 'react'
import { NavIconSt, NotStyle, StyledLogo } from './styles'
import navIcon from './Teach.png'
import logoImg from './TeachIconTitle.png'
import NotImage from './NotFoundPageIcon.png'

export const NavIcon = () => (
    <NavIconSt src= {navIcon}/>
)
export const NotFoundImage = () => (
    <NotStyle src={NotImage} />
)
export const Logo = () => (
    <StyledLogo src={logoImg} />
)
