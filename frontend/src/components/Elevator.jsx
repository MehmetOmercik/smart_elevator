import React from "react";
import ControlPanel from "./ControlPanel";
import ElevatorBackground from "./ElevatorBackground";
import FloorIndicator from "./FloorIndicator";

export default function Elevator(props) {
	return (
		<div className='elevator-container'>
			<FloorIndicator elevatorid={props.elevatorid} />
			<div className='elevator-container__contents'>
				<ElevatorBackground />
				<ControlPanel
					elevatorid={props.elevatorid}
					floors={props.floors}
				/>
			</div>
		</div>
	);
}
