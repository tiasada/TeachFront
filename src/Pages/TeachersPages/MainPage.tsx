import React from 'react'
import { IconMenu } from '../../Components/Images'
import Divbox from '../../Components/DivBox'
import { MainTitle } from '../../Components/Texts/Titles/styles'

export const MainPage = () => (
  <main>
    <header role="banner">
        <Divbox>
            <MainTitle>Teach</MainTitle>
            <IconMenu></IconMenu>
        </Divbox>
    </header>
  </main>
)

export default MainPage