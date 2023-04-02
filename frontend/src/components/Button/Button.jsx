import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
	updateFloor,
	updateElevator,
	calculateFloorDifference,
	currentFloor,
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
		if (floorRequest > oldFloor) {
			for (let i = oldFloor + 1; i <= floorRequest; i++) {
				setTimeout(() => {
					dispatch(currentFloor(i));
					console.log(i);
				}, 500 * i);
			}
		} else if (floorRequest < oldFloor) {
			// console.log(oldFloor, floorRequest);

			for (let j = oldFloor - 1; j >= floorRequest; j--) {
				setTimeout(() => {
					dispatch(currentFloor(oldFloor - j));
					console.log(oldFloor - j);
				}, 500 * j);
			}
		}
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
