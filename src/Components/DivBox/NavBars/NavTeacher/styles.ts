import styled from 'styled-components'
import { Navbar} from 'react-bootstrap'

export const Navmenu = styled(Navbar)`
    position: sticky;
    width: 100% ; 
    background-image: linear-gradient(to right, rgba(0,152,219,0.5), rgba(0,152,219,100) , rgba(0,116,166,65) );
`
export const NavClass = styled(Navmenu)`
    background-image: none;
    background-color: #E5E5E5;
`