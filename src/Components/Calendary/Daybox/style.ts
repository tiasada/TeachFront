import styled from 'styled-components'

type Props = {
    color: string
}

export const DayDiv = styled.div<Props>`
width: 80px;
height: 80px;  
margin-left: 25px;
justify-content: center;
align-items: center;
display: flex;
background-color: ${({ color }) => color};
`
