import React from "react";

//Displayed when deleting or saving an appointment.
export default function Status(props) {
  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold" data-testid="test40">
        {props.message}
      </h1>
    </main>
  );
}
