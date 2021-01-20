import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import{
    Login,
    ClassPage,
	TeacherClass ,
	Classes,
    CoordStudent,
	Schedule,
} from './Pages'

import{ Home } from './Pages/Home'
import{ About } from './Pages/About'
import{ StudentInfo } from './Pages/CoordenationPG/studentProfile'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <Router>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/schedule" component={Schedule}/>
					<Route path="/class/:id" component={ClassPage}/>
					<Route path="/teacher" component={Classes}/>
					<Route path="/studentprofile" component={StudentInfo} />
					<Route path="/coordenation" component={CoordStudent}/>
					<Route path="/home" component={Home}/>
					<Route path="/about" component={About}/>
				</Switch>
        </Router>
    )
} 

