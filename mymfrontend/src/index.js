import React from 'react'
import  ReactDOM  from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Config from './utils/Config'
import Login from './admin-pages/Login'
import {PrivateRouteNew} from './utils/PrivateRouteNew'
import HomeComponent from './admin-pages/HomeComponent'
import ClientComponent from './admin-pages/ClientComponent'
import ClientDetailComponent from './admin-pages/ClientDetailComponent'
import LogoutComponent from './admin-pages/LogoutComponent'
import AddAppointment from './admin-pages/AddAppointment'
import EditAppointment from './admin-pages/EditAppointment'
import AddAssessment from './admin-pages/AddAssessment'
import EditAssessment from './admin-pages/EditAssessment'
import AuditLog from './admin-pages/AuditLog'
import HomePage from './counselling-pages/HomePage'
import CounsellingLogin from './counselling-pages/Login'
import Contact from './counselling-pages/Contact'
import Events from './counselling-pages/Events'
import Services from './counselling-pages/Services'
import Team from './counselling-pages/Team'
import FAQ from './counselling-pages/FAQ'
import { PrivateRoute } from './utils/PrivateRoute'
import About from './counselling-pages/About'

ReactDOM.render(
    <Router>
        <Switch>
            {/* placeholder method for counselling page */}
            <PrivateRoute exact path="/" activepage="1" page={HomePage}></PrivateRoute>
            <PrivateRoute exact path="/counsellinglogin" activepage="0" page={CounsellingLogin}></PrivateRoute>
            <PrivateRoute exact path="/about" activepage="0" page={About}></PrivateRoute>
            <PrivateRoute exact path="/services" activepage="0" page={Services}></PrivateRoute>
            <PrivateRoute exact path="/events" activepage="0" page={Events}></PrivateRoute>
            <PrivateRoute exact path="/team" activepage="0" page={Team}></PrivateRoute>
            <PrivateRoute exact path="/contact" activepage="0" page={Contact}></PrivateRoute>
            <PrivateRoute exact path="/faq" activepage="0" page={FAQ}></PrivateRoute>

            {/* admin pages */}
            <Route exact path="/adminlogin" component={Login}></Route>
            <Route exact path={Config.logoutPage} component={LogoutComponent}></Route>
            <PrivateRouteNew exact path="/home" activepage="0" page={HomeComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/client" activepage="1" page={ClientComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/clientdetail/:id" activepage="0" page={ClientDetailComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/addappointment/:id" activepage="0" page={AddAppointment}></PrivateRouteNew>
            <PrivateRouteNew exact path="/editappointment/:client_id/:id" activepage="0" page={EditAppointment}></PrivateRouteNew>
            <PrivateRouteNew exact path="/addassessment/:client_id/:id" activepage="0" page={AddAssessment}></PrivateRouteNew>
            <PrivateRouteNew exact path="/editassessment/:client_id/:id" activepage="0" page={EditAssessment}></PrivateRouteNew>
            <PrivateRouteNew exact path="/auditlog" activepage="0" page={AuditLog}></PrivateRouteNew>
        </Switch>
    </Router>
    , document.getElementById("root"))