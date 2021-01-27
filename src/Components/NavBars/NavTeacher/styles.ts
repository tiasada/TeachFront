import styled from 'styled-components'
import { Navbar} from 'react-bootstrap'
import { Colors, colors } from '/theme/colors'

export const Navmenu = styled(Navbar)`
    position: sticky;
    width: 100% ; 
    background-color: #0098DB;
`
export const NavClass = styled(Navmenu)`
    background-image: none;
    background-color: #E5E5E5;
    display: flex;
    justify-content: space-between;
`