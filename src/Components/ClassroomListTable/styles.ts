import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

type Props = {
    color: string
}

export const Navmenu = styled(Navbar)<Props>`
    position: sticky;
    width: 100% ; 
    background-color: ${({ color }) => color};
`
export const NavClass = styled(Navmenu)<Props>`
    background-image: none;
    background-color: ${({ color }) => color};
    display: flex;
    justify-content: space-between;
`
export const Tr = styled.tr`
    &:hover {
        transform: scaleY(1.2);
        cursor: pointer;
    }
`
