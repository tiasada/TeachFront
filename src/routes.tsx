import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Login,
  ClassPage,
  Classes,
  Schedule,
  NotFound,
  Registers,
  Home
} from './pages'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home"><Home/></PrivateRoute>
        <PrivateRoute path="/schedule"><Schedule/></PrivateRoute>
        <PrivateRoute path="/class/:id"><ClassPage/></PrivateRoute>
        <PrivateRoute path="/teacher"><Classes/></PrivateRoute>
        <PrivateRoute path="/registers"><Registers/></PrivateRoute>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
