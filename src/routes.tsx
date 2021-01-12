import React from 'react'
import Login from './Pages/Login'
import Schedule from './Pages/Schedule'
import Main from './Pages/TeachersPages/MainPage'
import Larissa from './Pages/CoordenationPG/studentPage'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
					<Switch>
						<Route path="/login" component={Login}/>
						<Route path="/schedule" component={Schedule}/>
						<Route path="/teacher" component={Main}/>
						<Route path="/coordenation" component={Larissa}/>

					</Switch>
        </BrowserRouter>
    )
} 

