import React from 'react'
import  ReactDOM  from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Config from './utils/Config'
import Login from './admin-pages/Login'
import {PrivateRouteNew} from './utils/PrivateRouteNew'
import HomeComponent from './admin-pages/HomeComponent'
import ClientComponent from './admin-pages/ClientComponent'
import ClientDetailComponent from './admin-pages/ClientDetailComponent'
import AdminLogoutComponent from './admin-pages/LogoutComponent'
import AddAppointment from './admin-pages/AddAppointment'
import EditAppointment from './admin-pages/EditAppointment'
import AddAssessment from './admin-pages/AddAssessment'
import EditAssessment from './admin-pages/EditAssessment'
import AuditLog from './admin-pages/AuditLog'
import HomePage from './counselling-pages/HomePage'

import { ClientRoute } from './utils/ClientRoute'
import CounsellingLogin from './counselling-pages/Login'
import Register from './counselling-pages/Register'
import LogoutComponent from './counselling-pages/LogtoutComponent'
import Contact from './counselling-pages/Contact'
import Events from './counselling-pages/Events'
import Services from './counselling-pages/Services'
import Team from './counselling-pages/Team'
import FAQ from './counselling-pages/FAQ'
import About from './counselling-pages/About'
import User from './counselling-pages/User'
import { PrivateClientRoute } from './utils/PrivateClientRoute'

ReactDOM.render(
    <Router>
        <Switch>
            {/* placeholder method for counselling page */}
            <ClientRoute exact path="/" activepage="1" page={HomePage}></ClientRoute>
            <ClientRoute exact path="/counsellinglogin" page={CounsellingLogin}></ClientRoute>
            <ClientRoute exact path="/register" page={Register}></ClientRoute>
            <ClientRoute exact path={Config.logoutPage} page={LogoutComponent}></ClientRoute>
            <ClientRoute exact path="/about" activepage="0" page={About}></ClientRoute>
            <ClientRoute exact path="/services" activepage="0" page={Services}></ClientRoute>
            <ClientRoute exact path="/events" activepage="0" page={Events}></ClientRoute>
            <ClientRoute exact path="/team" activepage="0" page={Team}></ClientRoute>
            <ClientRoute exact path="/contact" activepage="0" page={Contact}></ClientRoute>
            <ClientRoute exact path="/faq" activepage="0" page={FAQ}></ClientRoute>
            <PrivateClientRoute exact path="/user/:user_id" activepage="0" page={User}></PrivateClientRoute>

            {/* admin pages */}
            <Route exact path="/adminlogin" component={Login}></Route>
            <Route exact path={Config.adminLogoutPage} component={AdminLogoutComponent}></Route>
            <PrivateRouteNew exact path="/home" activepage="0" page={HomeComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/client" activepage="1" page={ClientComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/clientdetail/:id" activepage="0" page={ClientDetailComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/addappointment/:id" activepage="0" page={AddAppointment}></PrivateRouteNew>
            <PrivateRouteNew exact path="/editappointment/:client_id/:id" activepage="0" page={EditAppointment}></PrivateRouteNew>
            <PrivateRouteNew exact path="/addassessment/:client_id/:id" activepage="0" page={AddAssessment}></PrivateRouteNew>
            <PrivateRouteNew exact path="/editassessment/:client_id/:id" activepage="0" page={EditAssessment}></PrivateRouteNew>
            <PrivateRouteNew exact path="/auditlog" activepage="3" page={AuditLog}></PrivateRouteNew>
        </Switch>
    </Router>
    , document.getElementById("root"))