import React from 'react'
import { DivBx, DivTabBox, DivTabL, DivTabR, ProfileBox } from './styles'

export const Divbox: React.FC = ({ children }) => (
    <DivBx>{ children }</DivBx>
)

export const DivTableBox: React.FC = ({ children }) => (
    <DivTabBox>{ children }</DivTabBox>
)
//used by zyasmim
export const DivTableRight: React.FC = ({ children }) => (
    <DivTabR>{ children }</DivTabR>
)
export const DivProfile: React.FC = ({ children }) => (
    <ProfileBox>{ children }</ProfileBox>
)

export const ImgStudent: React.FC = ({ children }) => (
    <DivTabL>{ children }</DivTabL>
)


export default Divbox