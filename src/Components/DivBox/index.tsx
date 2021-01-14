import React from 'react'
import { DivBx, DivTabBox, DivTabL, DivTabR } from './styles'

export const Divbox: React.FC = ({ children }) => (
    <DivBx>{ children }</DivBx>
)

export const DivTableBox: React.FC = ({ children }) => (
    <DivTabBox>{ children }</DivTabBox>
)

export const DivTableRight: React.FC = ({ children }) => (
    <DivTabR>{ children }</DivTabR>
)

export const DivTableLeft: React.FC = ({ children }) => (
    <DivTabL>{ children }</DivTabL>
)


export default Divbox