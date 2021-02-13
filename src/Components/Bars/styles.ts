import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchBar = styled.input`
  padding: 12px 30px;
  width: 200px;
  border: none;
  border-radius: 40px;
  background-color: ${({ color }) => color};
  margin-bottom: 60px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: 15px;
  display: inline-block;

 
  &:placeholder-shown{
    text-align: left;
  }
  
  &:focus {
  background-color: #8AC1D8;
  outline: none;
}
`

export default SearchBar

export const DivSearch = styled.div`
margin-bottom: 10px;
margin-top: 10px;
flex-direction: row;
text-align: center;
`