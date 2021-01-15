import React from 'react'
import { MenuBtn, ClsBtn } from './button/styles'

type Props = {
  children: string,
  // to do tirar nulable
  onClick?: () => void
}
export const MnBtn = ({ children, onClick, ...rest }: Props) => {
  console.log(rest)
  return (
    <MenuBtn onClick={onClick} {...rest}>{children}</MenuBtn>
  )
}

export const ClassesButton = ({ children, onClick, ...rest }: Props) => {
  console.log(rest)
  return (
    <ClsBtn onClick={onClick} {...rest}>{children}</ClsBtn>
  )
}