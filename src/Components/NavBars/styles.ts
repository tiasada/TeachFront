import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

type Props = {
    color: string
}

export const Navmenu = styled(Navbar)<Props>`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100% ; 
    background-color: ${({ color }) => color};
`
