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

	const checkElevatorObjectExists = async (id) => {
		try {
			const response = await axios.get(`${elevator}/${id}`);
			return response.data;
		} catch (error) {
			if (error.response.status === 404) {
				return null;
			} else {
				throw error;
			}
		}
	};
	const updateObject = async (id, data) => {
		const response = await axios.put(`${elevator}/${id}/`, data);
		return response.data;
	};
	const createObject = async (data) => {
		const response = await axios.post(`${elevator}/`, data);
		return response.data;
	};

	const buttonHandler = async () => {
		dispatch(updateFloor(+props.children));
		dispatch(calculateFloorDifference(oldFloor));
		dispatch(updateElevator(props.elevatorid));

		const elevatorObjectData = {
			elevator_id: props.elevatorid,
			floor_request: floorRequest,
			current_floor: floorRequest,
		};

		if (floorRequest > oldFloor) {
			for (let i = oldFloor + 1; i <= floorRequest; i++) {
				setTimeout(() => {
					dispatch(currentFloor(i));
					axios.patch(`${elevator}/${props.elevatorid}/`, {
						current_floor: i,
					});
				}, 800 * i);
			}
		} else if (floorRequest < oldFloor) {
			for (let j = oldFloor - 1; j >= floorRequest; j--) {
				setTimeout(() => {
					dispatch(currentFloor(oldFloor - j));
					axios.patch(`${elevator}/${props.elevatorid}/`, {
						current_floor: oldFloor - j,
					});
				}, 800 * j);
			}
		}
		const elevatorObjectExists = await checkElevatorObjectExists(
			props.elevatorid
		);

		if (elevatorObjectExists) {
			const updatedObject = await updateObject(
				props.elevatorid,
				elevatorObjectData
			);
			console.log("Object updated:", updatedObject);
		} else {
			const createdObject = await createObject(elevatorObjectData);
			console.log("Object created:", createdObject);
		}
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
