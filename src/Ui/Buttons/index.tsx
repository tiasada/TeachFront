import React, { CSSProperties } from 'react'
import { Colors, colors } from '../../theme/colors'
import { ButtonRegisters, ClassButton, PrimaryButton } from './styles'

type Props = {
  children?: string
  type?: 'submit' | 'button' | 'reset'
  onClick?: () => void
  color: Colors
  style?: CSSProperties
}

const Button = ({ color, children, type = 'submit', ...rest }: Props) => {
  return (
    <PrimaryButton type={type} color={colors[color]} {...rest}>{children}</PrimaryButton>
  )
}
export const ButtonRegister = ({ children, type = 'submit', ...rest }: Props) => {
  return (
    <ButtonRegisters type={type} {...rest}>{children}</ButtonRegisters>
  )
}
export const ClassesButton = ({ onClick, color, children, type = 'button', ...rest }: Props) => {
  return (
    <ClassButton onClick={onClick} type={type} color={colors[color]} {...rest}>{children}</ClassButton>
  )
}

export default Button
