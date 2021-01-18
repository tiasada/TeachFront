import React from 'react'
import { LoginButton } from './styles'

type Props = {
  children: string
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
}

const Button = ({ children, onClick, type='submit', ...rest }: Props) => {
  return (
    <LoginButton type={type} onClick={onClick} {...rest}>{children}</LoginButton>
  )
}

export default Button