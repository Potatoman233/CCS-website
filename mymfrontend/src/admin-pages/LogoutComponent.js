import React from 'react'
import { Redirect } from 'react-router'
import AuthHandler from '../utils/AuthHandler'

class LogoutComponent extends React.Component{
    render(){
        AuthHandler.logoutAdminUser()
        return <Redirect to="/adminlogin" />
    }
}
export default LogoutComponent
