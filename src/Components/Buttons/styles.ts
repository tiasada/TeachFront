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