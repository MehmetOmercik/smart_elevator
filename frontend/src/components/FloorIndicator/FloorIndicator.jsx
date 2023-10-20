import React from "react";
import { SlArrowUpCircle, SlArrowDownCircle } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function FloorIndicator(props) {
  const elevator = useSelector((state) =>
    state.button.elevators.find(
      (elevator) => elevator.elevatorID === props.elevatorid
    )
  );

  let colorUp;
  let colorDown;

  if (elevator.floorRequest > elevator.currentFloor) {
    colorUp = "green";
  } else if (elevator.floorRequest < elevator.currentFloor) {
    colorDown = "red";
  } else {
    colorUp = "";
  }

  return (
    <div className="floorindicator-container">
      <p className="floorindicator-container__name">
        Elevator NO: {props.elevatorid}
      </p>
      <span data-testid="floor-number">{elevator?.currentFloor}</span>
      <SlArrowUpCircle
        data-testid="up-arrow"
        color={elevator.elevatorID === props.elevatorid ? colorUp : ""}
        fontSize="3rem"
      />
      <SlArrowDownCircle
        data-testid="down-arrow"
        color={elevator.elevatorID === props.elevatorid ? colorDown : ""}
        fontSize="3rem"
      />
    </div>
  );
}
