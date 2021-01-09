import styled from "styled-components";

export const SearchBar = styled.input`
  padding: 12px 20px;
  width: 200px;
  border: none;
  border-radius: 40px;
  background-color: #E5E5E5;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: #CFCFCF;
  align-items: center;
  
  &:focus {
  background-color: #8AC1D8;
  outline: none;
}
`

export default SearchBar