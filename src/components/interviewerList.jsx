import React from "react";
import InterviewerListItem from "components/InterviewerListItem"

import "components/interviewerList.scss"





export default function InterviewerList(props) {
  const { interviewers } = props
  

  const parsedInterviewers = interviewers && interviewers.map(interviewer => <InterviewerListItem key={interviewer.id} {...interviewer} 
    setInterviewer={event => props.setInterviewer(interviewer.id)} selected={props.interviewer=== interviewer.id} avatar={interviewer.avatar}/>)
    return (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">{parsedInterviewers}</ul>
      </section>
    );
  }