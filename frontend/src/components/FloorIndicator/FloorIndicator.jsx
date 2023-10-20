import React, { useEffect, useState } from "react";
import { SlArrowUpCircle, SlArrowDownCircle } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function FloorIndicator(props) {
  const floorRequest = useSelector((state) => state.button.floor);
  const floorDifference = useSelector((state) => state.button.floorDifference);
  const currentFloor = useSelector((state) => state.button.currentFloor);
  const oldFloor = floorRequest - floorDifference;
  const elevatorID = useSelector((state) => state.button.elevatorID);
  let colorUp;
  let colorDown;

  if (floorDifference > 0 && currentFloor !== floorRequest) {
    colorUp = "green";
  } else if (floorDifference < 0 && currentFloor !== floorRequest) {
    colorDown = "red";
  } else {
    colorUp = "";
  }

  return (
    <div className="floorindicator-container">
      <p className="floorindicator-container__name">
        Elevator NO: {props.elevatorid}
      </p>
      <span data-testid="floor-number">
        {elevatorID === props.elevatorid ? currentFloor : 0}
      </span>
      <SlArrowUpCircle
        data-testid="up-arrow"
        color={elevatorID === props.elevatorid ? colorUp : ""}
        fontSize="3rem"
      />
      <SlArrowDownCircle
        data-testid="down-arrow"
        color={elevatorID === props.elevatorid ? colorDown : ""}
        fontSize="3rem"
      />
    </div>
  );
}
