import styled from 'styled-components'

type Props = {
  show: boolean
}

export const StudentsTableDiv = styled.div<Props>`
	display: ${({ show }) => show ? 'block' : 'none'};
  width: 100%;
`
