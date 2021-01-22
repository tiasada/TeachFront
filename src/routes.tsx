import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import{
    Login,
    ClassPage,
	Classes,
    CoordStudent,
	Schedule,
	ClassGradesPage,
	StudentInfo
} from './Pages'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <Router>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/schedule" component={Schedule}/>
					<Route path="/class/:id/grades" component={ClassGradesPage}/>
					<Route path="/class/:id" component={ClassPage}/>
					<Route path="/teacher" component={Classes}/>
					<Route path="/studentprofile" component={StudentInfo} />
					<Route path="/coordenation" component={CoordStudent}/>
				</Switch>
        </Router>
    )
} 

