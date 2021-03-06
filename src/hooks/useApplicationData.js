import { useState, useEffect } from "react";
import axios from "axios";

const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function useApplicationData(props) {
  const setDay = (day) => setState({ ...state, day });

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  //Our initial useEffect which fetches all data required on initial render.
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      console.log(all);
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  //Our Delete function which when called on makes the API call for deletion from database, updates our number of spots available
  // sets our new state and finally renders our transition if theres an error with our API call.
  function deleteInterview(id, interview, transition) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    axios
      .delete(`/api/appointments/${id}`, {
        data: appointment,
      })
      .then(() => {
        let days = getNumberSpots(appointments);

        setState({
          ...state,
          appointments,
          days,
        });
      })
      .catch((err) => {
        console.log(err);

        transition(ERROR_DELETE, true);
      });
  }

  //Same as above but for booking an interview instead.
  function bookInterview(id, interview, transition) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    axios({
      method: "PUT",
      url: `/api/appointments/${id}`,
      data: appointment,
    })
      .then(() => {
        let days = getNumberSpots(appointments);
        setState({
          ...state,
          appointments,
          days,
        });
      })
      .catch((err) => {
        console.log(err);
        transition(ERROR_SAVE, true);
      });
  }

  //Function which calculates our number of spots available.
  const getNumberSpots = (appointments) => {
    let days = [...state.days];
    let dayIndex = days.findIndex((day) => day.name === state.day);
    if (dayIndex === -1) {
      console.log("Could not update day");
      return days;
    }

    const spotArray = days[dayIndex].appointments.filter(
      (appointmentID) => appointments[appointmentID].interview === null
    ).length;
    days[dayIndex].spots = spotArray;

    return days;
  };

  return {
    state,
    setDay,
    bookInterview,
    deleteInterview,
  };
}
