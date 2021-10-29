import React from "react"
import Navbar from "../admin-components/Navbar"
import 'adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css'
import 'adminbsb-materialdesign/plugins/node-waves/waves.css'
import 'adminbsb-materialdesign/plugins/animate-css/animate.css'
import 'adminbsb-materialdesign/css/style.css'
import GoogleFontLoader from 'react-google-font-loader'
import AuthHandler from "../utils/AuthHandler"
import Config from '../utils/Config'
import { Redirect } from "react-router"


class Login extends React.Component {

    state={
        
        username:"",
        password:"",
        btnDisabled:true,
        loginStatus:0,
        errorMessage:"",
    }
    
    saveInputs = (events)=>{
        var key=events.target.name
        // set the values from login form to state variables
        this.setState({[key]:events.target.value})
        // if username and password is not blank, enable btn 
        if(this.state.username !== "" && this.state.password!== ""){
            this.setState({btnDisabled: false})
        }
        else{
            this.setState({btnDisabled: true})
        }
    }

    formSubmit=(events)=>{
        // prevents the browser to refresh when submit
        events.preventDefault()
        console.log(this.state)
        this.setState({loginStatus:1})
        AuthHandler.adminLogin(this.state.username, this.state.password,this.handleAjaxResponse)
    }

    handleAjaxResponse=(data)=>{
        console.log(data)
        if(data.error){
            this.setState({loginStatus:4})
            this.setState({errorMessage:data.message})
        }
        else{
            this.setState({loginStatus:3})
            window.location=Config.homeUrl
        }
    }

    getMessages = () =>{
        if(this.state.loginStatus ===1){
            return ""
        }
        else if(this.state.loginStatus ===2){
            return(
                <div className="alert alert-warning">
                    <strong>Logging in </strong> Please wait...
                </div>
            )
        }else if(this.state.loginStatus ===3){
            return(
                <div className="alert alert-success">
                    <strong>Login success</strong>
                </div>
            )
        }else if(this.state.loginStatus ===4){
            return(
                <div className="alert alert-danger">
                    <strong>{this.state.errorMessage}</strong>
                </div>
            )
        }
    }

    render() {
        // redirect user back to home when logged in

        if(AuthHandler.loggedIn()){
            return <Redirect to={Config.homeUrl} />
        }  
        document.body.className = "login-page"

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
              <div> <Navbar/> </div>
                <div className="login-box">
                    <div className="logo">
                        <a href="#">Admin<b>CCS</b></a>
                    </div>
                    <div className="card">
                        <div className="body">
                            <form id="sign_in" method="POST" onSubmit={this.formSubmit}>
                                <div className="msg">Login as CCS Administrator</div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">person</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="text" 
                                        className="form-control" 
                                        name="username" 
                                        placeholder="Username" 
                                        required autoFocus 
                                        onChange = {this.saveInputs}/>
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
                                        onChange = {this.saveInputs}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 p-t-5">
                                        <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" />
                                        <label form="rememberme">Remember Me</label>
                                    </div>
                                    <div className="col-xs-4">
                                        <button className="btn btn-block bg-pink waves-effect" type="submit" disabled={this.state.btnDisabled}>SIGN IN</button>
                                    </div>
                                </div>
                                <div className="row m-t-15 m-b--20">
                                    <div className="col-xs-6">
                                        <a href="sign-up.html">Register Now!</a>
                                    </div>
                                    <div className="col-xs-6 align-right">
                                        <a href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                </div>
                                {this.getMessages()}
                            </form>
                        </div>     
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

export default Login;