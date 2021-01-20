import { Table } from "react-bootstrap";
import styled from "styled-components";

const ClassTable = styled(Table)`
  /* width: max-content; */
  border-collapse: collapse;
  border-radius: 10px;
  background-color: #E5E5E5;
  margin-left: auto;
  margin-right: auto;
 
th, td{

    border-left: 1px sold white; 
  }
th{
    vertical-align: left;
    color : #0098DB;
    }
td{
    padding: 5px 40px;
}
`
export default ClassTable;
