import React, {useEffect} from "react";
import Header from "components/Appointment/header"
import Empty from "components/Appointment/empty"
import Show from "components/Appointment/show"
import UseVisualMode from "hooks/useVisualMode"
import Form from "components/Appointment/form"
import Status from "components/Appointment/status"
import Confirm from "components/Appointment/confirm"
import Error from "components/Appointment/error"



import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const CONFIRM = "CONFIRM"
const SAVING = "SAVING"
const DELETING = "DELETING"
const EDIT = "EDIT"
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"


export default function Appointment(props) {

 

   const { mode, transition, back } = UseVisualMode(
    props.interview ? SHOW : EMPTY
  );

  useEffect(() => {
    props.interview ? transition(SHOW) : transition(EMPTY, true)
  }, [props.interview])

  function save(name, interviewer) {
    transition(SAVING)
    let interview = {
      student: name,
      interviewer
    };
    
     

     
    
    props.bookInterview(props.id,interview,transition)
    
  }

 

  function confirmDelete(name, interviewer) {
   transition(DELETING)
    const interview = {
      student: name,
      interviewer
    };
     
  
   props.deleteInterview(props.id, interview,transition)
   
  }
 
   
    return (
      
      <article className="appointment" data-testid="appointment">
      <Header time={props.time}/>
      {mode === ERROR_SAVE && <Error message={"Error saving appointment."} onClose={() => transition(EMPTY)}/>}
      {mode === ERROR_DELETE && <Error message={"Error deleting appointment."} onClose={() => transition(SHOW, true)}/>}
      {mode === CONFIRM && <Confirm message={"Are you sure you want to delete?"} onCancel={() => back(SHOW)} onConfirm={confirmDelete}/>}
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === DELETING && <Status message={"Deleting"}/>}
      {mode === CREATE && <Form interviewers={props.interviewers} onSave={save} onCancel={() => back(EMPTY)} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} onCancel={() => back()}/>}
      {mode === EDIT && <Form interviewers={props.interviewers} onSave={save} onCancel={() => back(EMPTY)} name={props.interview.student} interviewer={props.interview.interviewer && props.interview.interviewer.id}/>}
{mode === SHOW && (
  <Show
    id={props.id}
    time={props.time}
    student={props.interview.student}
    interviewer={props.interview.interviewer}
    onDelete={() => transition(CONFIRM)}
    onEdit={() => transition(EDIT)}
  />
)}
      </article>
    );
  }