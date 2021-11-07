import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="justify-content-start">                      
                        {/* taylors logo */}
                        <Link className="navbar-brand" to="/">
                            <i>Taylor's Logo</i>
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
                        {/* login btn */}
                        <Link className="navbar-brand" to="/counsellinglogin">
                            <span>Login</span>
                        </Link>
                        
                        <Link className="navbar-brand" to="/">
                            <i>CCS logo</i>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
} 

export default Navbar 

