import React from 'react'
import Login from './Pages/Login'
import Schedule from './Pages/School'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
					<Switch>
						<Route path="/login" component={Login}/>
						<Route path="/schedule" component={Schedule}/>
					</Switch>
        </BrowserRouter>
    )
} 

