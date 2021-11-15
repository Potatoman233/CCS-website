import React from 'react'
import 'adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css'
import 'adminbsb-materialdesign/plugins/node-waves/waves.css'
import 'adminbsb-materialdesign/plugins/animate-css/animate.css'
import 'adminbsb-materialdesign/css/style.css'
import GoogleFontLoader from 'react-google-font-loader'

import AuthHandler from '../utils/AuthHandler'
import Config from '../utils/Config'
import { Redirect } from "react-router"

class Register extends React.Component {
    state = {
        email: "",
        password: "",
        password2: "",
        is_staff: false,
        is_superstaff: false,
        btnDisabled: true,
        loginStatus: 0,
        errorMessage: 0,
    }

    saveInputs = (events) => {
        var key = events.target.name
        // set the values from register form to state variables
        this.setState({ [key]: events.target.value })
        // if email and password is not blank, enable btn 
        if (this.state.email !== "" && this.state.password !== "" && this.state.password2 !== "") {
            this.setState({ btnDisabled: false })
        }
        else {
            this.setState({ btnDisabled: true })
        }
    }

    formSubmit = (events) => {
        // prevents the browser to refresh when submit
        events.preventDefault()
        this.setState({ loginStatus: 1 })
        AuthHandler.register(this.state.email, this.state.password, this.state.password2,
            this.state.is_staff, this.state.is_superstaff, this.handleAjaxResponse)
        
    }

    handleAjaxResponse = (data) => {
        console.log(data)
        if (data.error) {
            this.setState({ loginStatus: 4 })
            this.setState({errorMessage:data.message})
        }
        else {
            this.setState({ loginStatus: 3 })
            // this.props.history.push("/user/"+data.userid)
            AuthHandler.login(this.state.email, this.state.password, this.handleAjaxResponse2)
        }
    }

    handleAjaxResponse2 = (data) => {
        console.log(data)
        if (data.error) {
            this.setState({ loginStatus: 4 })
            this.setState({errorMessage:data.message})
        }
        else {
            this.setState({ loginStatus: 3 })
            this.props.history.push("/user/"+data.userid)
        }
    }

    getMessages = () => {
        if (this.state.loginStatus === 1) {
            return ""
        }
        else if (this.state.loginStatus === 2) {
            return (
                <div className="alert alert-warning">
                    <strong>Registering in </strong> Please wait...
                </div>
            )
        } else if (this.state.loginStatus === 3) {
            return (
                <div className="alert alert-success">
                    <strong>Register success</strong>
                </div>
            )
        } else if (this.state.loginStatus === 4) {
            return (
                <div className="alert alert-danger">
                    <strong>{this.state.errorMessage}</strong>
                </div>
            )
        }
    }

    render() {
        if(AuthHandler.loggedIn()){
            return <Redirect to={Config.counsellingHomeUrl} />
        }

        return (
            <React.Fragment>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Roboto',
                            weights: [400, '700'],
                        },
                    ]}
                    subsets={['latin', 'cyrillic-ext']}
                />

                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Material+Icons'
                        },
                    ]}
                />

                <div className="login-page" style={{backgroundColor:'none'}}>
                    <div className="login-box" style={{ paddingTop: '50px' }}>
                        <div className="logo" >
                            <span href="/" style={{color:'black', fontSize: "36px", 
                            display:" block", width:" 100%", textAlign: "center"}}>Register an account</span>
                        </div>
                        <div className="card">
                            <div className="body">
                                <form id="register" method="POST" onSubmit={this.formSubmit}>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="material-icons">person</i>
                                        </span>
                                        <div className="form-line">
                                            <input type="text"
                                                className="form-control"
                                                name="email"
                                                placeholder="Email"
                                                required autoFocus
                                                onChange={this.saveInputs} />
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="material-icons">lock</i>
                                        </span>
                                        <div className="form-line">
                                            <input type="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="Password"
                                                required
                                                onChange={this.saveInputs} />
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="material-icons">lock</i>
                                        </span>
                                        <div className="form-line">
                                            <input type="password"
                                                className="form-control"
                                                name="password2"
                                                placeholder="Re-enter Password"
                                                required
                                                onChange={this.saveInputs} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <button className="btn btn-block bg-pink waves-effect" 
                                            type="submit" disabled={this.state.btnDisabled}>REGISTER</button>
                                        </div>
                                    </div>
                                    <div className="row m-t-15 m-b--20">
                                        {this.getMessages()}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Register
