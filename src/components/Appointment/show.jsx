import React from "react";

//Show component which displays the appropriate information if an appointment is booked.
export default function Show(props) {
  if (!props.interviewer) {
    return null;
  }

  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular">{props.student}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular">{props.interviewer.name}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={() =>
              props.onEdit([props.interviewer.name, props.student])
            }
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={() =>
              props.onDelete([
                props.interviewer.name,
                props.student,
                props.id,
                props.time,
              ])
            }
          />
        </section>
      </section>
    </main>
  );
}
