import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateFloor, updateElevator } from "./ButtonSlice";
import { elevator } from "../../http";

export default function Button(props) {
	const dispatch = useDispatch();
	const floorRequest = +props.children;

	const buttonHandler = () => {
		dispatch(updateFloor(+props.children));
		dispatch(updateElevator(props.elevatorid));
		axios.put(`${elevator}/${props.elevatorid}/`, {
			floor_request: floorRequest,
		});
	};
	return (
		<button
			className='elevator-button'
			onClick={buttonHandler}
			elevatorid={props.elevatorid}
		>
			{props.children}
		</button>
	);
}
