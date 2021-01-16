import React from 'react'
import { Table } from 'react-bootstrap'
import { DivTableBox } from '../../DivBox'

export const TeacherClassTable : React.FC = ({ children }) => (
    <DivTableBox>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th className="w-25" >Matricula</th>
                    <th className="w-100">Nome</th>
                    <th className="w-25">Nota1</th>
                    <th className="w-25">Nota2</th>
                    <th className="w-25">Nota3</th>
                    <th className="w-25">Nota4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>112313123</td>
                    <td>Marcos</td>
                    <td>8/10</td>
                    <td>9/10</td>
                    <td>7/10</td>
                    <td>10/10</td>
                </tr>
                <tr>
                    <td>2123123123</td>
                    <td>Guilherme</td>
                    <td>8/10</td>
                    <td>7/10</td>
                    <td>10/10</td>
                    <td>9/10</td>
                </tr>
            </tbody>
        </Table>
    </DivTableBox>
)
export const TeacherClassCall : React.FC = ({ children }) => (
    <DivTableBox>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th className="w-25" >Matricula</th>
                    <th className="w-100">Nome</th>
                    <th className="w-25">Nota1</th>
                    <th className="w-25">Nota2</th>
                    <th className="w-25">Nota3</th>
                    <th className="w-25">Nota4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>112313123</td>
                    <td>Marcos</td>
                    <td>8/10</td>
                    <td>9/10</td>
                    <td>7/10</td>
                    <td>10/10</td>
                </tr>
                <tr>
                    <td>2123123123</td>
                    <td>Guilherme</td>
                    <td>8/10</td>
                    <td>7/10</td>
                    <td>10/10</td>
                    <td>9/10</td>
                </tr>
            </tbody>
        </Table>
    </DivTableBox>
)