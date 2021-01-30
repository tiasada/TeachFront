import React from 'react'
import { DayDiv } from './style'
import { Colors, colors } from '/theme/colors'

type Props = {
    color: Colors
}

const Daybox = ({ color }: Props) => (
    <DayDiv color={colors[color]}><h1>1</h1></DayDiv>
)
 
export default Daybox