import React, { useState } from "react";
import InterviewerList from "components/interviewerList.jsx"


import Button from "components/Button"


export default function Form(props) {

const reset = () => {
  setName("")
  setInterviewer(null)
}

const cancel = () => {
  reset()
  
}


const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] =  useState(props.interviewer || null)


 




return(
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        value={name}
        type="text"
        placeholder="Enter Student Name"
        onChange={(event) => setName(event.target.value)}
        /*
          This must be a controlled component
        */
      />
    </form>
    <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer}  />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={() => props.onCancel(cancel())}>Cancel</Button>     
      <Button confirm onClick={() => props.onSave(name, interviewer)} onSubmit={event => event.preventDefault()}>Save</Button>
    </section>
  </section>
</main>
)
}