import React from 'react'
import { MenuBtn, ClsBtn } from './button/styles'

export const MnBtn : React.FC = ({ children }) => (
  <MenuBtn>{ children }</MenuBtn>
)

export const ClassesButton : React.FC = ({ children }) => (
  <ClsBtn>{ children }</ClsBtn>
)