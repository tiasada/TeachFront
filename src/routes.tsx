import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import{
    Login,
    TeacherMain,
    TeacherStudent,
    TeacherClass ,
    CoordStudent,
    Schedule
} from './Pages'

import{ Home } from './Pages/Home'
import{ About } from './Pages/About'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <Router>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/schedule" component={Schedule}/>
					<Route path="/class/:id" component={TeacherClass}/>
					<Route path="/teacher" component={TeacherMain}>
					</Route>
					<Route path="/coordenation" component={CoordStudent}/>
					<Route path="/home" component={Home}/>
					<Route path="/about" component={About}/>
				</Switch>
        </Router>
    )
} 

