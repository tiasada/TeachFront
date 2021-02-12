import styled from 'styled-components'
import Button from '../../ui/Buttons/button'


export const CreateButton = styled(Button).attrs({
  color: 'primary'
})`
  margin-top: 16px;
`
export const RegisterInput = styled.input`
  padding: 12px 20px;
  width: 200px;
  border: none;
  border-radius: 40px;
  background-color: #E5E5E5;
  margin-bottom: 4px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  cursor:pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:focus {
    background-color: #D1F6FF;
    outline: none;
  }
`
