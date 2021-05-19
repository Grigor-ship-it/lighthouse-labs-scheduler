//Functions which fetches the list of appointments for the specific day.
export default function getAppointmentsForDay(state, day) {
  let finalResult = [];
  let appointmentResult = [];

  for (let element of state.days) {
    if (element.name === day) {
      appointmentResult = [...element.appointments];
    }
  }

  for (let id in state.appointments) {
    if (appointmentResult.includes(Number(id))) {
      finalResult.push(state.appointments[id]);
    }
  }

  return finalResult;
}

//Function which books/saves the appointment.
export function getInterview(state, appointmentID) {
  console.log(Array.isArray(state.interviewers));

  if (appointmentID === null) {
    return null;
  } else {
    let interviewID = appointmentID.interviewer;

    let appointmentObj = {
      student: "",
      interviewer: {},
    };

    appointmentObj.student = appointmentID.student;

    appointmentObj.interviewer = state.interviewers[interviewID];

    return appointmentObj;
  }
}

//Function which fetches the list of interviewers for a specific given day.
export function getInterviewersForDay(state, day) {
  let finalResult = [];
  let interviewerResult = [];

  for (let element of state.days) {
    if (element.name === day) {
      interviewerResult = [...element.interviewers];
    }
  }

  for (let id in state.interviewers) {
    if (interviewerResult.includes(Number(id))) {
      finalResult.push(state.interviewers[id]);
    }
  }

  return finalResult;
}
