import React from 'react'
import { Colors, colors } from '../../../theme/colors'
import { LoginButton, MenuBtn } from './styles'

type Props = {
  children?: string
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  color: Colors
}

const Button = ({ color, children, type = 'submit', ...rest }: Props) => {
  return (
    <LoginButton type={type} color={colors[color]} {...rest}>{children}</LoginButton>
  )
}

export default Button

export const ButtonSecundary = ({ color, children, type = 'submit', ...rest }: Props) => {
  return (
    <MenuBtn type={type} color ={colors[color]} {...rest}>{children}</MenuBtn>
  )
}
