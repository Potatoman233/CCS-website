import React from 'react'
import APIHandler from '../utils/APIHandler'

class AuditLog extends React.Component {
    state = {
        errorRes: false,
        errorMessage: "",
        btnMessage: 0,
        sendData: false,
        auditDataList: [],
        dataLoaded: false,
    }

    // this method will work when page is ready
    async componentDidMount() {
        var apihandler = new APIHandler()
        var auditData = await apihandler.fetchAuditLog()
        this.setState({ auditDataList: auditData.data.data })
        console.log(auditData)
        this.setState({ dataLoaded: true })
    }

    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>Audit Log</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                    {/* loading animation */}
                                    {this.state.dataLoaded == false ? (
                                        <div className="text-center">
                                            <div className="preloader pl-size-xl">
                                                <div className="spinner-layer">
                                                    <div className="circle-clipper left">
                                                        <div className="circle"></div>
                                                    </div>
                                                    <div className="circle-clipper right">
                                                        <div className="circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ""}

                                    <h2>
                                        All Audit Logs
                                    </h2>
                                </div>
                                <div className="body table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Events</th>
                                                <th>Date time</th>
                                                <th>Done by</th>
                                                <th>Changed fields</th>
                                                <th>Original</th>
                                                <th>New</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* loop through the list to display audit logs */}
                                            {this.state.auditDataList.map((data) => (
                                                <tr key={data.id} >
                                                    <td>{data.event_type} </td>
                                                    <td>{data.datetime} </td>
                                                    <td>{data.email} </td>
                                                    {/* check if changes field is null, display value if not */}
                                                    {/* limit the string displayed for changed values as well */}
                                                    <td>{data.changed_fields ? (
                                                        Object.keys(data.changed_fields).map((field) =>
                                                            <p> {field}</p>
                                                            )
                                                        )
                                                        : "None"} 
                                                    </td>
                                                    <td>{data.changed_fields ? (
                                                        Object.values(data.changed_fields).map((value) =>
                                                        <p> {value[0].length > 38 ? 
                                                            `${value[0].substring(0, 40)}...` :
                                                            value[0]} </p>
                                                    )
                                                        )
                                                        : "None"} 
                                                    </td>
                                                    <td>{data.changed_fields ? (
                                                        Object.values(data.changed_fields).map((value) =>
                                                        <p> {value[1].length > 38 ? 
                                                            `${value[1].substring(0, 40)}...` :
                                                            value[1]} </p>
                                                    )
                                                        )
                                                        : "None"} 
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AuditLog
