import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Login,
  ClassPage,
  Classes,
  CoordenationHomePage,
  Schedule,
  StudentInfo,
  TeacherInfo,
  NotFound,
  Registers,
  Home
} from './pages'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/class/:id" component={ClassPage} />
        <Route path="/teacher" component={Classes} />
        <Route path="/studentprofile" component={StudentInfo} />
        <Route path="/classroomspage" component={CoordenationHomePage} />
        <Route path="/teacherprofile" component={TeacherInfo} />
        <Route path="/registers" component={Registers} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
