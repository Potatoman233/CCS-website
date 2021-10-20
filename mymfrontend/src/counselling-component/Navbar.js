import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {/* taylors logo */}
                        <Link className="navbar-brand" to="/">
                            <i>Taylor's Logo</i>
                        </Link>
                    </div>

                    <div>
                        <Link className="navbar-brand" to="#">
                            <span>About</span>
                        </Link>
                        <Link className="navbar-brand" to="#">
                            <span>Services</span>
                        </Link>
                        <Link className="navbar-brand" to="#">
                            <span>Events</span>
                        </Link>

                        <Link className="navbar-brand" to="#">
                            <i>CCS logo</i>
                        </Link>

                        <Link className="navbar-brand" to="#">
                            <span>Team</span>
                        </Link>

                        <Link className="navbar-brand" to="#">
                            <span>Contact us</span>
                        </Link>

                        <Link className="navbar-brand" to="#">
                            <span>FAQ</span>
                        </Link>
                    </div>

                    <div className="nav navbar-nav navbar-right ">
                        {/* login btn */}
                        <Link className="navbar-brand" to="/counsellinglogin">
                            <span>Login</span>
                        </Link>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Navbar