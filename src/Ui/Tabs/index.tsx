import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { NavClass } from './styles'

type Props = {
  children: JSX.Element[]
  tabs: string[]
  title: string
}

const Tabs = ({ children, tabs, title }: Props) => {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <>
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
    </>
  )
}

export default Tabs
