import React from 'react'
import { StyledModal, StyledContent} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

type Prop ={
  open: boolean
  children: React.ReactNode
  onClose: () => void

}

const Modal = ({open, onClose,children}: Prop) => (
  <StyledModal open={open}>
    <FontAwesomeIcon
        icon={faTimes}
        color='black'
        onClick={onClose}
      />
    <StyledContent>
      {children}
    </StyledContent>
  </StyledModal>
)
export default Modal