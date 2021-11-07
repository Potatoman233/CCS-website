import React from 'react'
import user1 from '../assets/user1.png'



class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid"> 
                    <div className="navbar-header">
                        <img src={user1} style={{width: 60, height: 60, borderRadius: 250/4}}  /> 
                        
                        <a href="#" className="bars" onClick={this.props.onBarClick}></a>    
                    </div> 
                    <a className="navbar-brand" href="#">Taylor's University Counselling Service</a>
                </div>
            </nav>
        )
    }
}

export default Navbar
