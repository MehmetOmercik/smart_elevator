import React from "react";
import Button from "./Button/Button";

export default function ControlPanel(props) {
	const number_buttons = [];
	for (let i = 1; i < props.floors + 1; i++) {
		number_buttons.push(
			<Button key={i} elevatorid={props.elevatorid}>
				{i}
			</Button>
		);
	}
	return <div className='controlpanel-container'>{number_buttons}</div>;
}
