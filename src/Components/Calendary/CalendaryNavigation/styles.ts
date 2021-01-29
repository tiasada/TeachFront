import styled from 'styled-components'
import { Navmenu } from '../../NavBars/NavTeacher/styles'

type Props = {
    color: string
}

export const NavClass = styled(Navmenu)<Props>`
    background-image: none;
    border-radius: none;
    background-color: ${({color}) => color };
`