import React from "react";
import DayListItem from "components/DayListItem";

//Our list of days displayed on the left hand side of our app.
export default function DayList(props) {
  const { days } = props;

  const parsedDays =
    days &&
    days.map((day) => (
      <DayListItem
        key={day.id}
        {...day}
        setDay={props.setDay}
        selected={props.day === day.name}
      />
    ));
  return <ul>{parsedDays}</ul>;
}
