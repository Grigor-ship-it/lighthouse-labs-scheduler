

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




   
   

