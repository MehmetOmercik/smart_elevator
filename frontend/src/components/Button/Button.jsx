import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
	updateFloor,
	updateElevator,
	calculateFloorDifference,
} from "./ButtonSlice";
import { elevator } from "../../http";

export default function Button(props) {
	const dispatch = useDispatch();
	const oldFloor = useSelector((state) => state.button.floor);
	const floorRequest = +props.children;

	const buttonHandler = () => {
		dispatch(updateFloor(+props.children));
		dispatch(calculateFloorDifference(oldFloor));
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
