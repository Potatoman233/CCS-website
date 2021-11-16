
//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View
import timeGridPlugin from '@fullcalendar/timegrid';
import React from 'react';

class Schedule extends React.Component {

    render() {
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
                                    console.log(arg.event.title)
                                    let url = "https://calendar.google.com/calendar/r/eventedit?%22"+
                                    "text=My+Event" + "&" +
                                        "dates=20211121T1600/20211121T1700" + "&" +
                                        "text=My+Event" + "&"
                                    console.log(url)
                                    window.open(url, "__blank", 'noopener,noreferrer')
                                }
                            }

                            events={[
                                { title: 'event 1', date: '2021-11-30' },
                                { title: 'CCS appointment', start: "2021-11-15T08:00", end: "2021-11-15T10:00" },
                                { title: 'event 2', date: '2021-08-15' },
                                { title: 'event 2', date: '2020-08-15' },
                                { title: 'event 2', date: '2020-08-15' },
                                { title: 'event 2', date: '2020-08-15' },
                                { title: 'event 2', date: '2020-08-15' }
                            ]}
                        />
                    </div>
                </div></section>
        )
    };
}
export default Schedule;