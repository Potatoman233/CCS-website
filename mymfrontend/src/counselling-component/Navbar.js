import React from "react"
import { Link } from "react-router-dom"
import AuthHandler from "../utils/AuthHandler"
import { reactLocalStorage } from 'reactjs-localstorage'
import CCSLogo from '../assets/CCSLogo.png'
import TaylorLogo from '../assets/taylors-logo.png'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="justify-content-start">
                        {/* taylors logo */}
                        <Link className="navbar-header" to="/">
                            <img src={TaylorLogo} style={{ width: 120, height: 70}} alt="CCS Logo" />
                        </Link>
                    </div>

                    <div className="justify-content-center">
                        <Link className="navbar-brand" to="/about">
                            <span>About</span>
                        </Link>
                        <Link className="navbar-brand" to="/services">
                            <span>Services</span>
                        </Link>
                        <Link className="navbar-brand" to="/events">
                            <span>Events</span>
                        </Link>

                        <Link className="navbar-brand" to="/team">
                            <span>Team</span>
                        </Link>

                        <Link className="navbar-brand" to="/contact">
                            <span>Contact us</span>
                        </Link>

                        <Link className="navbar-brand" to="/faq">
                            <span>FAQ</span>
                        </Link>
                    </div>

                    <div className="justify-content-end">
                        {AuthHandler.loggedIn() ?
                            <Link className="navbar-brand" to={'/user/' + reactLocalStorage.get("userID")}>
                                <span>Account</span>
                            </Link>
                            :
                            < Link className="navbar-brand" to="/counsellinglogin">
                                <span>Login</span>
                            </Link>
                        }
                    </div>

                    <div className="justify-content-end">

                        <Link className="navbar-header" to="/">
                            <img src={CCSLogo} style={{ width: 60, height: 60, borderRadius: 200 / 4 }} alt="CCS Logo" />
                        </Link>
                    </div>
                </div>
            </nav >
        )
    }
}

export default Navbar

