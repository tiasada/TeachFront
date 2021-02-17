import React, { CSSProperties } from 'react'
import { Colors, colors } from '../../../theme/colors'
import { ButtonRegisters, LoginButton } from './styles'

type Props = {
  children?: string
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  color: Colors
  style?: CSSProperties
}

const Button = ({ color, children, type = 'submit', ...rest }: Props) => {
  return (
    <LoginButton type={type} color={colors[color]} {...rest}>{children}</LoginButton>
  )
}
export const ButtonSecondary = ({ color, children, type = 'submit', ...rest }: Props) => {
  return (
    <ButtonRegisters type={type} color={colors[color]} {...rest}>{children}</ButtonRegisters>
  )
}

export default Button
