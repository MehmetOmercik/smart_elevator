import React from "react";
import { SlArrowUpCircle, SlArrowDownCircle } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function FloorIndicator(props) {
	const floorRequest = useSelector((state) => state.button.floor);
	const elevator = useSelector((state) => state.button.elevator);

	return (
		<div className='floorindicator-container'>
			<span>{elevator === props.elevatorid ? floorRequest : 0}</span>
			<SlArrowUpCircle style={{ fontSize: "3rem", color: "gold" }} />
			<SlArrowDownCircle style={{ fontSize: "3rem" }} />
		</div>
	);
}
