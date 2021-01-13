import React from 'react'
import Login from './Pages/Login'
import Schedule from './Pages/StudentPG/Schedule'
import Main from './Pages/TeachersPages/MainPage'
import Cordein from './Pages/CoordenationPG/studentPage'
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
					<Switch>
						<Route path="/login" component={Login}/>
						<Route path="/schedule" component={Schedule}/>
						<Route path="/teacher" component={Main}/>
						<Route path="/coordenation" component={Cordein}/>

					</Switch>
        </BrowserRouter>
    )
} 

