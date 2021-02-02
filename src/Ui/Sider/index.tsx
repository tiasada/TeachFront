import React from 'react'
import { Wrapper, Header, Content } from './styles'
import { FontAwesomeIcon } from '/components/Modal/node_modules/@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '/components/Modal/node_modules/@fortawesome/free-solid-svg-icons'
import { colors, Colors } from '/theme/colors'

type Props = {
  open: boolean
  children: React.ReactNode
  onClose: () => void
  color: Colors
}

const Sider = ({ open, onClose, color, children }: Props) => (
  <Wrapper color={colors[color]} open={open}>
    <Header color={colors[color]}>
      <FontAwesomeIcon
        icon={faAngleDoubleRight}
        color='black'
        onClick={onClose}
      />
    </Header>
    <Content>
      {children}
    </Content>
  </Wrapper>
)

export default Sider