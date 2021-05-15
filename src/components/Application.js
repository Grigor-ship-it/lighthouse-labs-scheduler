import DayList from "components/DayList"
import React, { useState, useEffect } from "react";
import Appointment from "components/Appointment/index"
import axios from 'axios';
import getAppointmentsForDay from "components/helpers/selectors"
import {getInterview, getInterviewersForDay} from "components/helpers/selectors"
import save from "components/Appointment/"
import UseVisualMode from "hooks/useVisualMode"

import "components/Appointment/"
import "components/Application.scss";


// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "5pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 2,
//         name: "Tori Malcolm",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   }
// ];
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const CONFIRM = "CONFIRM"
const SAVING = "SAVING"

export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    
    Promise.all([  
    axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers")
    ])
    .then((all)  => {
      console.log(all)
      setState(prev => ({...prev, days:all[0].data, appointments:all[1].data, interviewers:all[2].data}))
    })
  }, [])

  function deleteInterview(id, interview) {
   
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    axios({
      method: "DELETE",
      url: `/api/appointments/${id}`,
      data: appointment
    }).then(() => {
      
      setState({...state,appointments})     
      
    })    
 }

  function bookInterview(id, interview) {
    
    
  
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    axios({
      method: "PUT",
      url: `/api/appointments/${id}`,
      data: appointment
    }).then(() => {
      
      setState({...state,appointments})     
     
    })    
  }

  // const reset = function() {
  //   axios.get("/api/debug/reset")
  // }
  // reset()

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  const setDay = day => setState({ ...state, day });
  //const setDays = days => setState(prev => ({ ...prev, days }));


  return (
     
    <main className="layout">
      <section className="sidebar">
        <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu"><DayList
  days={state.days}
  day={state.day}
  setDay={setDay}
/></nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        {dailyAppointments && dailyAppointments.map(appointment => {const interview = getInterview(state, appointment.interview); 
          return (<Appointment deleteInterview={deleteInterview} bookInterview={bookInterview} key={appointment.id} id={appointment.id} time={appointment.time} interview={interview} interviewers={dailyInterviewers}/>);})}
        <Appointment key="last" time="6pm" />
      </section>
    </main>
  );
}

