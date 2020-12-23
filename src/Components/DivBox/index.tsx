import React from 'react'
import { DivBx } from './styles'

type Props ={
    children: JSX.Element[]
}

const Divbox = ({ children }: Props) => (
    <DivBx>{ children }</DivBx>
)

export default Divbox