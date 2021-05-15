import React, {useEffect} from "react";
import Header from "components/Appointment/header"
import Empty from "components/Appointment/empty"
import Show from "components/Appointment/show"
import UseVisualMode from "hooks/useVisualMode"
import Form from "components/Appointment/form"
import Status from "components/Appointment/status"

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const CONFIRM = "CONFIRM"
const SAVING = "SAVING"


export default function Appointment(props) {

  
  const {student, interview} = props

   const { mode, transition, back } = UseVisualMode(
    props.interview ? SHOW : EMPTY
  );

  useEffect(() => {
    props.interview ? transition(SHOW) : transition(EMPTY)
  }, [props.interview])

  function save(name, interviewer) {
    transition(SAVING)
    const interview = {
      student: name,
      interviewer
    };
    
    props.bookInterview(props.id,interview)
   
  }

  function deleteInterview(test) {

  }

 
   
    return (
      
      <article className="appointment">
      <Header time={props.time}/>
      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === CREATE && <Form interviewers={props.interviewers} onSave={save} onCancel={() => back(EMPTY)}/>}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} onCancel={() => back()}/>}
{mode === SHOW && (
  <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
    
  />
)}
      </article>
    );
  }