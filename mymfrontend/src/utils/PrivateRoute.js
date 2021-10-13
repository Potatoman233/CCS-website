import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthHandler from './AuthHandler'

export var PrivateRoute = ({ component: Component, ...rest }) => {
    // make sure user is logged in to access web page
    console.log({...rest})
    return (
        <Route
            {...rest}
            render={(props) =>
                AuthHandler.loggedIn() ? <Component {...props} /> : <Redirect to='/' />}
        />
    )
}
