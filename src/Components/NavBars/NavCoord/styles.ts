import styled from 'styled-components'
import { Navmenu } from '../NavTeacher/styles'

type Props = {
    color: string
}

export const NavClass = styled(Navmenu)<Props>`
    background-image: none;
    background-color: ${({ color }) => color};
`
