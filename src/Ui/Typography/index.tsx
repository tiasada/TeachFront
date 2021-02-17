import React from 'react'
import { H1, H2, H3, StyledProps, Text } from './styles'
import { colors, Colors } from '/theme/colors'

type Variants = 'h1' | 'h2' | 'h3' | 'text'

type Props = {
  children: React.ReactNode
  color?: Colors
  variant?: Variants
}

const variants: Record<Variants, React.FunctionComponent<StyledProps>> = {
  h1: H1,
  h2: H2,
  h3: H3,
  text: Text
}

const Typography = ({ children, color = 'black', variant = 'text', ...rest }: Props) => {
  const Component = variants[variant]

  return (
    <Component color={colors[color]}>
      {children}
    </Component>
  )
}

export default Typography
