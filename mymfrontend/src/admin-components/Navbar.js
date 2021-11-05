import React from 'react'
//import user1 from 'adminbsb-materialdesign/images/user1.png'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid"> 
                    <div className="navbar-header">
                                          
                                            <a href="#" className="bars" onClick={this.props.onBarClick}></a>    
                                                                </div> 
                    <a className="navbar-brand" href="#">Taylor's University Counselling Service</a>
                                    </div>
                            </nav>
        )
    }
}

export default Navbar
