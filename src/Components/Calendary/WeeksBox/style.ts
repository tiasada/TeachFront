import styled from 'styled-components'

type Props = {
    color: string
}

export const WeekDiv = styled.div`
height: 50px;  
justify-content: center;
align-items: center;
display: block;

`
export const WeekDayDiv = styled.div<Props>`
width: 13%;
height: 50px;  
align-items: center;
justify-content: center;
background-color: ${({ color }) => color};
display: inline-block;
border-right: 2px solid;
border-left: 2px solid;
border-color: white;
display: -webkit-inline-flex;
`
