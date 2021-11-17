
//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View
import timeGridPlugin from '@fullcalendar/timegrid';
import React from 'react';
import APIHandler from '../utils/APIHandler';

class Schedule extends React.Component {

    state = {
        errorMessage: "",
        scheduleList: [],
        dataLoaded:false,
    }

    async componentDidMount() {
        var apihandler = new APIHandler()
        var scheduleData = await apihandler.fetchSchedule()
        this.setState({ scheduleList: scheduleData.data.data })
        this.setState({dataLoaded:true})
    }

    render() {
        // custom format date function 
        function toISOLocal (d) {
            var z  = n =>  ('0' + n).slice(-2);
          
            return d.getFullYear() + '-'
                   + z(d.getMonth()+1) + '-' +
                   z(d.getDate()) + 'T' +
                   z(d.getHours()) + ':'  + 
                   z(d.getMinutes()) + ':' +
                   z(d.getSeconds())
        }

        return (
            <section className="content">
                <div className="container-fluid">
                    <h1 style={{ textAlign: "center" }}> Appointment Schedule</h1>
                    <div className="maincontainer">
                        <FullCalendar
                            plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                            }}
                            eventClick={
                                function (arg) {
                                    // format data before redirect to google calendar
                                    const title = arg.event.title.replace(" ", "+")
                                    const startDate = toISOLocal(arg.event.start).replace(/[-:]/gi, "")
                                    const endDate = toISOLocal(arg.event.end).replace(/[-:]/gi, "")
                                    console.log(toISOLocal(arg.event.start).replace(/[-:]/gi, ""))
                                    let url = "https://calendar.google.com/calendar/r/eventedit?"+
                                    "text=" + title + "&" +
                                        "dates=" + startDate +"/" + endDate
                                    console.log(url)
                                    window.open(url, "__blank", 'noopener,noreferrer')
                                }
                            }

                            events={this.state.scheduleList}
                        />
                    </div>
                </div></section>
        )
    };
}
export default Schedule;