import React from "react";
import classNames from 'classnames';

import "components/DayListItem.scss";

export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });


  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}<br />{props.spots}</h2> 
      
    </li>
  );
}


