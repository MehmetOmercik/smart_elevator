import React from "react";
import axios from "axios";
import { elevator } from "../http";

export default function Button(props) {
	const buttonHandler = async () => {
		axios.put(`${elevator}/${props.elevatorid}/`, {
			floor_request: +props.children,
		});
		console.log({
			buttonNO: +props.children,
			elevatorid: props.elevatorid,
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
