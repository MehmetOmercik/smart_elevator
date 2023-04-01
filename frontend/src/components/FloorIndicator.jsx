import React from "react";
import { SlArrowUpCircle, SlArrowDownCircle } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function FloorIndicator(props) {
	const floorRequest = useSelector((state) => state.button.floor);
	const floorDifference = useSelector(
		(state) => state.button.floorDifference
	);
	const elevator = useSelector((state) => state.button.elevator);
	let colorUp;
	let colorDown;

	if (floorDifference > 0) {
		colorUp = "green";
	} else if (floorDifference < 0) {
		colorDown = "red";
	} else {
		colorUp = "";
	}

	return (
		<div className='floorindicator-container'>
			<span>{elevator === props.elevatorid ? floorRequest : 0}</span>
			<SlArrowUpCircle
				color={elevator === props.elevatorid ? colorUp : ""}
				fontSize='3rem'
			/>
			<SlArrowDownCircle
				color={elevator === props.elevatorid ? colorDown : ""}
				fontSize='3rem'
			/>
		</div>
	);
}
