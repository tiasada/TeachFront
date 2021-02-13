import Button from 'react-bootstrap/esm/Button'
import styled from 'styled-components'

type Props ={
  color: string
}

export const MenuBtn = styled.button<Props>`
  padding: 12px 20px;
  min-width: 100%;
  border: 10px;
  border-radius: 8px;
  background-color: transparent;
  border-color: black;
  display: inline-block;
  color: ${({ color }) => color};
  &:focus {
    background-color: #ddd;
    color: black;
    border-color: black;
    outline: none;
  }
  &:hover {
    background-color: ${({ color }) => color};
    opacity: 0.5;
    outline-color: black;
    outline-width: 4px;
    color: white;
  }
`

export const ClsBtn = styled.button`

  padding: 20px 20px;
  min-width: 20%;
  margin: 4px;
  border: none;
  border-radius: 4px;
  display: inline;
  color: #858585;
  background-color: #ddd;
  &:focus {
    background-color: #D1F6FF;
    outline: none;
  }
  &:hover {
    background-color: lightblue;
    opacity: 0.5;
    outline: black;
    color: inherit;
  }
`
export const LoginButton = styled.button<Props>`
  padding: 12px 20px;
  border-radius: 8px;
  width: 150px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px ;
  display: block;
  background-color: ${({ color }) => color};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:focus {
  background-color: #D1F6FF;
  border: 1px;
  border-color: #0098DB;
}

&:hover {
  background-color: #D1F6FF;
  border-width: 10px;
  border-color: #0098DB;
  outline: none;
}
`
export const ButtonRegisters = styled(Button).attrs({
  color: 'primary'
})`
  margin-top: 16px;
  text-align: 'center'
`
