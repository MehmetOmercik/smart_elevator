import React from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import ElevatorBackground from "./ElevatorBackground";
import FloorIndicator from "../FloorIndicator/FloorIndicator";

export default function Elevator(props) {
  return (
    <li className="elevator-container">
      <FloorIndicator elevatorid={props.elevatorid} />
      <div className="elevator-container__contents">
        <ElevatorBackground />
        <ControlPanel elevatorid={props.elevatorid} floors={props.floors} />
      </div>
    </li>
  );
}
