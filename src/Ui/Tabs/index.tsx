import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { NavClass } from './styles'
import { DivTableBox } from '/components/DivBox'

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
              // active={currentTab === index}
              <Nav.Item onClick={() => setCurrentTab(index)} key={index}>
                {tabTitle}
              </Nav.Item>
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
