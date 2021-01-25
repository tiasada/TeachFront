import React from 'react'
import { Section } from './styles'
import { LoginTitle, MainTitle, Name, ScheduleTitle } from './Titles/styles'

type Props ={
  children: string
}

export const TextPattern =  ({  children }: Props) => (
  <>
    <LoginTitle>{children}</LoginTitle>
  </>
)
export const TextMain = () => (
  <>
    <MainTitle>Teach</MainTitle>
  </>
)

export const TitleSchedule = () => (
  <>
    <ScheduleTitle>Agenda ano</ScheduleTitle>
  </>
)

export const NameStudent = () => (
    <Name>Agenda ano</Name>

)
