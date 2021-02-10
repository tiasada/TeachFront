import React from 'react'
import { DivBx, DivBxRegister, DivTabBox, DivTabL, DivTabR, ProfileBox } from './styles'
import { Colors, colors } from '/theme/colors'

type Props = {
    color: Colors
    children: React.ReactNode
}

export const Divbox = ({ color, children }: Props) => (
    <DivBx color={colors[color]}>{ children }</DivBx>
)
export const DivboxRegister = ({ color, children }: Props) => (
    <DivBxRegister color={colors[color]}>{ children }</DivBxRegister>
)
export const DivTableBox = ({ children }: Props) => (
    <DivTabBox>{ children }</DivTabBox>
)
// used by zyasmim
export const DivTableRight = ({ children }: Props) => (
    <DivTabR>{ children }</DivTabR>
)
export const DivProfile = ({ children }: Props) => (
    <ProfileBox>{ children }</ProfileBox>
)

export const ImgStudent = ({ children }: Props) => (
    <DivTabL>{ children }</DivTabL>
)

export default Divbox
