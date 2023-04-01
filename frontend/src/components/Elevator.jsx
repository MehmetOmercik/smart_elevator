import React from "react";
import ControlPanel from "./ControlPanel";

export default function Elevator(props) {
	return <ControlPanel elevatorid={props.elevatorid} floors={props.floors} />;
}
