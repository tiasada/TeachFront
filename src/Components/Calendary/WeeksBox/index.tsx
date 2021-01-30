import React from 'react'
import { WeekDayDiv, WeekDiv } from './style'
import { Colors, colors } from '/theme/colors'

type Props = {
    color: Colors
    children: string
}

const WeekDayBox = ({ color, children }: Props) => (
    <WeekDayDiv color={colors[color]}>{children}</WeekDayDiv>
)

const Weekbox = () => (
    <WeekDiv>
        <button>d</button>
        <WeekDayBox color='secondary'>Segunda-feira</WeekDayBox>
        <WeekDayBox color='secondary'>Terça-feira</WeekDayBox>
        <WeekDayBox color='secondary'>Quarta-feira</WeekDayBox>
        <WeekDayBox color='secondary'>Quinta-feira</WeekDayBox>
        <WeekDayBox color='secondary'>Sexta-feira</WeekDayBox>
        <button>b</button>
    </WeekDiv>

)
 
export default Weekbox