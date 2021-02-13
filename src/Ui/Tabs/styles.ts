import styled from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap'

type Props = {
  color: string
}
type TabProps = {
  color: string
  active?: boolean
}

export const Navmenu = styled(Navbar) <Props>`
    position: sticky;
    width: 100% ; 
    background-color: ${({ color }) => color};
`
export const NavClass = styled(Navmenu) <Props>`
    background-image: none;
    background-color: ${({ color }) => color};
    display: flex;
    justify-content: space-between;
`
export const TabItem = styled(Nav.Item) <TabProps>`
    background-image: none;
    margin-right: 15px; 
    background-color: ${({ active, color }) => active ? 'rgba(180,180,180,0.3)' : color};
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
`

export const TabDiv = styled.div<Props>`
  position: static;
  width: 80%;
  height: 500px;
  top: 100px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  background: ${({ color }) => color};
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  
`
