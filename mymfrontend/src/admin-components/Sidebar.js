import React from 'react'
import Config from '../utils/Config'
import { Link } from 'react-router-dom'
import { reactLocalStorage } from 'reactjs-localstorage'

const bcrypt = require('bcryptjs')
class Sidebar extends React.Component {

    render() {
        return (
            <section>
                <aside id="leftsidebar" className="sidebar">
                    <div className="user-info">

                        <div className="info-container">
                            <div className="name"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <h2>Esther Chu</h2>
                            </div>

                        </div>
                    </div>
                    <div className="menu">
                        <div className="slimScrollDiv" style={{ position: " relative", overflow: " hidden", width: " auto" }}>
                            <ul className="list" style={{ overflow: "hidden", width: "auto" }}>
                                <li className="header">Main Menu</li>
                                {/* dynamic side bar items */}
                                {Config.sidebarItem.map(
                                    (item) =>
                                        <li key={item.index}
                                            className={item.index === this.props.activepage ?
                                                "active" : ""}>
                                            <Link to={item.url} className="toggled waves-effect waves-block">
                                                <i className="material-icons">{item.icons}</i>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                )}
                                
                                {/* compare is_superuser status to show advanced admin feature */}
                                
                                {reactLocalStorage.get("is_superuser") ? (
                                
                                bcrypt.compareSync ("True", reactLocalStorage.get("is_superuser")) ? 
                                <li className={"3" === this.props.activepage ?"active" : ""} >
                                    <Link to={"/AuditLog"} className="toggled waves-effect waves-block">
                                        <i className="material-icons">assignment</i>
                                        <span>Audit Log</span>
                                    </Link>
                                </li> : "" ) : console.log("")}
                                

                                <li >
                                    <Link to={Config.adminLogoutPage} className="toggled waves-effect waves-block">
                                        <i className="material-icons">input</i>
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul><div className="slimScrollBar" style={{
                                background: "rgba(0, 0, 0, 0.5)",
                                width: "4px", position: "absolute", top: "0px", opacity: "0.4", display: "none",
                                borderRadius: "0px", zIndex: "99", right: "1px", height: "125px"
                            }}></div>

                            <div className="slimScrollRail" style={{
                                width: "4px", height: "100%", position: "absolute",
                                top: "0px", display: "none", borderRadius: "0px", background: "rgb(51, 51, 51)", opacity: "0.2",
                                zIndex: "90", right: "1px"
                            }}></div>
                        </div>
                    </div>
                    <div className="legal">
                        <div className="copyright">
                            Copyright © 2021 <br />Taylor's University <br />DU023(B). All rights reserved<br />CCS Admin
                        </div>
                        <div className="version">
                            <b>Version: </b> 0.1.0
                        </div>
                    </div>
                </aside>
            </section>
        )
    }
}

export default Sidebar
