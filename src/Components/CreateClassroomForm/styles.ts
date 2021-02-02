import styled from 'styled-components'
import Button from '/ui/Buttons/button'

export const Title = styled.h1`
  color: black;
  font-size: 24px;
`

export const CreateButton = styled(Button).attrs({
  color: 'primary'
})`
  margin-top: 16px;
`
