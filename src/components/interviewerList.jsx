import React from "react";
import InterviewerListItem from "components/InterviewerListItem"

import "components/interviewerList.scss"





export default function InterviewerList(props) {
  const { interviewers, value, onChange } = props
  

  const parsedInterviewers = interviewers && interviewers.map(interviewer => <InterviewerListItem key={interviewer.id} {...interviewer} 
    setInterviewer={event => onChange(interviewer.id)} selected={value=== interviewer.id} avatar={interviewer.avatar}/>)
    return (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">{parsedInterviewers}</ul>
      </section>
    );
  }