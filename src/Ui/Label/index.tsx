import React from 'react'
import StyledLabel, { Display } from './styles'

type Props = {
  children: string
  display?: Display
}

const Label = ({ children, display = 'block' }: Props) => (
  <StyledLabel display={display}>{children}</StyledLabel>
)

export default Label