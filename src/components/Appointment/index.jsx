import React from "react";
import Header from "components/Appointment/header"
import Empty from "components/Appointment/empty"
import Show from "components/Appointment/show"

import "components/Appointment/styles.scss";

export default function Appointment(props) {

  const {student, interview} = props
  
    return (
      <article className="appointment">
      <Header time={props.time}/>
      {props.interview ? <Show student={interview.student} interviewer={interview.interviewer}/> : <Empty />}
      </article>
    );
  }