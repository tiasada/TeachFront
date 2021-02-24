import styled from 'styled-components'

type Props = {
  color: string
  open?: boolean
}

export const Header = styled.div<Props>`
  background-color: ${({ color }) => color};
  padding: 10px;
  border: 2px solid #ddd;
`

export const Wrapper = styled.div<Props>`
  max-width: ${({ open }) => open ? '100%' : '0%'};
  background-color: ${({ color }) => color};
  top: 78px;
  right: 0;
  bottom: 0;
  position: fixed;
  transition: max-width 0.7s ease-out;
  overflow: auto;
`

export const Content = styled.div`
  padding: 20px;
`
