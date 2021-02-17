import React from 'react'
import { ClsBtn } from './button/styles'

type Props = {
  children: string,
  onClick: () => void
}

export const ClassesButton = ({ children, onClick, ...rest }: Props) => {
  console.log(rest)
  return (
    <ClsBtn onClick={onClick} {...rest}>{children}</ClsBtn>
  )
}
