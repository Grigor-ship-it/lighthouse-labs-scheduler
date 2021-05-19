import React, { useState } from "react";
import InterviewerList from "components/interviewerList.jsx";

import Button from "components/Button";
//Form component which is shown when we try to create a new appointment.

export default function Form(props) {
  //Our function which is called when we cancel an appointment creation to reset states.
  const reset = () => {
    setName("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
  };

  const [error, setError] = useState("");
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  //Validate function which wont allow a user to save an empty appointment.
  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(name, interviewer);
  }

  return (
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
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => props.onCancel(cancel())}>
            Cancel
          </Button>
          <Button
            confirm
            onClick={() => validate()}
            onSubmit={(event) => event.preventDefault()}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
