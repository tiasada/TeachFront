import styled from 'styled-components'

export type Display = 'inline' | 'block'

type Props = {
  display: Display
}

const Label = styled.label<Props>`
  margin-top: 12px;
  margin-bottom: 4px;
  display: ${({ display }) => display};
`

export default Label
