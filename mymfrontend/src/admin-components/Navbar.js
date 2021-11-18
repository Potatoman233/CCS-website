import React from 'react'
import CCSLogo from '../assets/CCSLogo.png'



class Navbar extends React.Component {
    render() {
        document.getElementById("root").className = "theme-green"
        return (
            <nav className="navbar">
                <div className="container-fluid"> 
                    <div className="navbar-header">
                        <img src={CCSLogo} style={{width: 60, height: 60, borderRadius: 250/4}} alt="CCS Logo" /> 
                        
                        <a href="/home" className="bars" onClick={this.props.onBarClick}> </a>    
                    </div> 
                    <a className="navbar-brand" href="/home">Taylor's University Counselling Service</a>
                </div>
            </nav>
        )
    }
}

export default Navbar
