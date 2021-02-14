import styled from 'styled-components'

type Props = {
  open: boolean
}

export const StyledModal = styled.div<Props>`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0,0.4);
`
export const StyledContent = styled.div`
  background-color: #fefefe;
  z-index: 2;
  margin: 15% auto;;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: max-content;
`
export const Overlay = styled.div`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`
