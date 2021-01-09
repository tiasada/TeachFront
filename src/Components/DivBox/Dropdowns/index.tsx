import React from 'react'
import { DropStl, StlDropdownContent } from './styles'

export const Dropdnw: React.FC = ({ children }) => (
    <DropStl>{ children }</DropStl>
)
export const DropCont: React.FC = ({ children }) => (
    <StlDropdownContent>{ children }</StlDropdownContent>
)
export const Dropdnw2: React.FC = ({ children }) => (
    <div>
        <DropStl>{ children }</DropStl>
        <StlDropdownContent/>
    </div>
)
