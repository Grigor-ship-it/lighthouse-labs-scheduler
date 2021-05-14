
// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   },
//   interviewers: {
//     "1": {  
//       "id": 1,
//       "name": "Sylvia Palmer",
//       "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     }
//   }
// };

export default function getAppointmentsForDay(state, day) {
  
  let finalResult = []
  let appointmentResult = []
  
  for (let element of state.days) {
   if (element.name === day) {
    appointmentResult= [...element.appointments]
   }  
}
  
  for (let id in state.appointments){
    
     if (appointmentResult.includes(Number(id))) {

      finalResult.push(state.appointments[id])
     }
  }


  return finalResult

}

export function getInterview(state, appointmentID) {

  console.log(Array.isArray(state.interviewers))
  
  if (appointmentID === null) {
    
    return null
  } else {

    let interviewID = appointmentID.interviewer

    let appointmentObj = {
      student: "",
       interviewer: {}

    }

  appointmentObj.student = appointmentID.student
  
  appointmentObj.interviewer = state.interviewers[interviewID]

  return appointmentObj
  }
}

export function getInterviewersForDay(state, day) {
  

  let finalResult = []
  let interviewerResult = []
  
  for (let element of state.days) {
   if (element.name === day) {
    interviewerResult= [...element.interviewers]
   }  
}
  
  for (let id in state.interviewers){
    
     if (interviewerResult.includes(Number(id))) {

      finalResult.push(state.interviewers[id])
     }
  }


  return finalResult

}
//getInterview(state, state.appointments["3"].interview)
   

