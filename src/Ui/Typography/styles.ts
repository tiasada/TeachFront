import styled, { css } from 'styled-components'

export type StyledProps = {
  color: string
}

export const H1 = styled.h1<StyledProps>`
  font-size: 32px;
  color: ${({ color }) => color};
`

export const H2 = styled.h2<StyledProps>`
  font-size: 28px;
  color: ${({ color }) => color};
`

export const H3 = styled.h3<StyledProps>`
  font-size: 24px;
  ${({ color }) => css`color: ${color};`};
`

export const Text = styled.p<StyledProps>`
  font-size: 16px;
  ${({ color }) => `color: ${color};`};
`