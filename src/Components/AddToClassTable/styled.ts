import styled from 'styled-components'

type Props = {
  show: boolean
}

export const AddTCTdiv = styled.div<Props>`
	display: ${({ show }) => show ? 'block' : 'none'};
`
