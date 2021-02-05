import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Login,
  ClassPage,
  Classes,
  CoordStudent,
  Schedule,
  StudentInfo,
  CoordTeacher,
  TeacherInfo,
  NotFound,
  TeacherRegister,
  StudentRegister,
  ParentRegistration,
  ClassroomRegister,
  ClassTable
} from './Pages'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/class/:id" component={ClassPage} />
        <Route path="/teacher" component={Classes} />
        <Route path="/studentprofile" component={StudentInfo} />
        <Route path="/classpage" component={CoordStudent} />
        <Route path="/teacherpage" component={CoordTeacher} />
        <Route path="/teacherprofile" component={TeacherInfo} />
        <Route path="/teacherregister" component={TeacherRegister} />
        <Route path="/studentregister" component={StudentRegister} />
        <Route path="/classroomregister" component={ClassroomRegister} />
        <Route path="/parentregister" component={ParentRegistration} />
        <Route path="/classtable" component={ClassTable} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
