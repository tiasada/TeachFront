import React from 'react'
import { NavIconSt, NotStyle } from './styles'
import Img from './TeachNavIcon.png'
import logo from './TeachIcon.png'
import NotImage from './NotFoundPageIcon.png'

export const NavIcon = () => (
    <NavIconSt src= {Img}/>
)
export const Logo = () => (
    <Img src= {logo}/>
)
export const NotFoundImage = () => (
    <NotStyle src={NotImage} />
)
