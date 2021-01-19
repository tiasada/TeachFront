import { Table } from "react-bootstrap";
import styled from "styled-components";

const ClassTable = styled(Table)`
  padding: 10px 900px 10px 1px ;
  width: 200px;
  border-radius: 10px;
  background-color: #E5E5E5;
  margin-bottom: 100px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
 
th, td{
    width: 100%;
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
