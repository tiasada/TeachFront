import styled from 'styled-components'

export const MenuBtn = styled.button`

  padding: 12px 20px;
  min-width: 100%;
  border: 2px;
  border-color: black;
  display: block;
  color: #858585;
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