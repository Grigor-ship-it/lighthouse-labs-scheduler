import DayList from "components/DayList"
import React from "react";
import Appointment from "components/Appointment/index"
import getAppointmentsForDay from "components/helpers/selectors"
import {getInterview, getInterviewersForDay} from "components/helpers/selectors"
import useApplicationData from "hooks/useApplicationData"




import "components/Appointment/"
import "components/Application.scss";

// const ERROR_SAVE = "ERROR_SAVE"
// const ERROR_DELETE = "ERROR_DELETE"


export default function Application(props) {

  
  
  const {
    state,
    setDay,
    bookInterview,
    deleteInterview
  } = useApplicationData();

  
  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {}
  // });

  // useEffect(() => {
    
  //   Promise.all([  
  //   axios.get("/api/days"),
  //   axios.get("/api/appointments"),
  //   axios.get("/api/interviewers")
  //   ])
  //   .then((all)  => {
  //     console.log(all)
  //     setState(prev => ({...prev, days:all[0].data, appointments:all[1].data, interviewers:all[2].data}))
  //   })
  // }, [])

//   function deleteInterview(id, interview, transition) {
   
    

//     const appointment = {
//       ...state.appointments[id],
//       interview: null
//     };
//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };
//     axios({
//       method: "DELETE",
//       url: `/api/appointments/${id}`,
//       data: appointment
//     }).then(() => {
      
//       setState({...state,appointments})     
      
//     }).catch(err => {
//       console.log(err)
      
//       transition(ERROR_DELETE, true)
//     })
//  }

  // function bookInterview(id, interview, transition) {
    
   
  
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };
    
  //   axios({
  //     method: "PUT",
  //     url: `/api/appointments/${id}`,
  //     data: appointment
  //   }).then(() => {
      
  //     setState({...state,appointments})     
     
  //   }).catch(err => {
  //     console.log(err)
  //     transition(ERROR_SAVE, true)
  //   })
  // }

  // const reset = function() {
  //   axios.get("/api/debug/reset")
  // }
  // reset()

  const interviewers = getInterviewersForDay(state, state.day);

  const appointments = getAppointmentsForDay(state, state.day).map(
    appointment => {
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          interview={getInterview(state, appointment.interview)}
          interviewers={interviewers}
          bookInterview={bookInterview}
          deleteInterview={deleteInterview}
        />
      );
    }
  );
 

  // const setDay = day => setState({ ...state, day });
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
        {appointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}



//{dailyAppointments && dailyAppointments.map(appointment => {const interview = getInterview(state, appointment.interview); 
//  return (<Appointment deleteInterview={deleteInterview} bookInterview={bookInterview} key={appointment.id} id={appointment.id} time={appointment.time} interview={interview} interviewers={dailyInterviewers}/>);})}