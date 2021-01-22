import { type } from 'os'
import styled from 'styled-components'

type Props ={
  color:string
}

export const MenuBtn = styled.button<Props>`
  padding: 12px 20px;
  min-width: 100%;
  border: 2px;
  border-color: black;
  display: block;
  color: ${({color}) => color };
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
export const LoginButton = styled.button`
  padding: 12px 20px;
  border-radius: 40px;
  width: 150px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: #858585;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:focus {
  background-color: #D1F6FF;
  outline: none;
}
`