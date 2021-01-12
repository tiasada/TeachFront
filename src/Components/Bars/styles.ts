import styled from "styled-components";

export const SearchBar = styled.input`
  padding: 12px 25px;
  width: 200px;
  border: none;
  background-color: #E5E5E5;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  align-items: center;
  background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png');
  background-size: 20px;
  background-position: 2% 40%;
  background-repeat: no-repeat;
  &:placeholder-shown{
    text-align: left;
  }
  
  &:focus {
  background-color: #8AC1D8;
  outline: none;
}
`

export default SearchBar