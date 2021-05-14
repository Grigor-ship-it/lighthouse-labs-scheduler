import React from "react";
import Header from "components/Appointment/header"
import Empty from "components/Appointment/empty"
import Show from "components/Appointment/show"
import UseVisualMode from "hooks/useVisualMode"
import Form from "components/Appointment/form"

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const CONFIRM = "CONFIRM"


export default function Appointment(props) {

  
  const {student, interview} = props
  
  

  

  const { mode, transition, back } = UseVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
    return (
      <article className="appointment">
      <Header time={props.time}/>
      {mode === CREATE && <Form interviewers={props.interviewers} onSave={() => transition(CONFIRM)} onCancel={() => back(EMPTY)}/>}
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