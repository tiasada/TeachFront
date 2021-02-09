import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import Button from '../Buttons/button'
import { NavClass, TabItem} from './styles'
import { DivTableBox } from '/components/DivBox'
import { Colors, colors} from '/theme/colors'

type Props = {
  children: JSX.Element[]
  tabs: string[]
  title: string
}

const Tabs = ({ children, tabs, title }: Props) => {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <DivTableBox color='primary'>
      <NavClass expand="lg">
        <NavClass.Brand >
          {title}
        </NavClass.Brand>
        <NavClass.Toggle aria-controls="basic-navbar-nav" />
        <NavClass.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {tabs.map((tabTitle, index) => (
              <TabItem active={currentTab === index} onClick={() => setCurrentTab(index)} key={index}>
                {tabTitle}
              </TabItem>
            ))}
          </Nav>
        </NavClass.Collapse>
      </NavClass>
      {children[currentTab]}
      <NavClass color="primary">
      {/* <Button type="button" color="primary">Enviar</Button> */}
    </NavClass>
    </DivTableBox>
  )
}

export default Tabs
