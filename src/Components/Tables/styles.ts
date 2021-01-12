import styled from "styled-components";

const ClassTable = styled.table`
  padding: 10px 900px 10px 1px ;
  width: 200px;
  background-color: #E5E5E5;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  display: block;
th, td{
    border-left: 1px sold white;
  }
th{
    vertical-align: left;
    color : red;
    }
td{
    padding: 5px 40px;
}
`
export const cabecalho = styled.th`
    background-color: red;
`
export default ClassTable;