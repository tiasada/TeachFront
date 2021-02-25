import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Login,
  ClassPage,
  Classes,
  NotFound,
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
        <PrivateRoute path="/class/:id"><ClassPage/></PrivateRoute>
        <PrivateRoute path="/teacher"><Classes/></PrivateRoute>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
