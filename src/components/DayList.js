import React from "react";
import DayListItem from "components/DayListItem"





export default function DayList(props) {
  const { days } = props



 

  const parsedDays = days && days.map(day => <DayListItem key={day.id} {...day} setDay={props.setDay} selected={props.day === day.name} />)
    return (
      <ul>{parsedDays}</ul>
    );
  }