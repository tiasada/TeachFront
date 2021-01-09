import styled from 'styled-components'


export const DropStl = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    display: block;
    >div {
        display: block;
    }
  }
`;
export const StlDropdownContent = styled.div`
  display: none;
  position: absolute;
  border-radius: 2.5%;
  background-color: #f6f6f6;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
  right: 0;
`;
