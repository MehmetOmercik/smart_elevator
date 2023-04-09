import React from "react";
import Button from "../Button/Button";

export default function ControlPanel(props) {
	const number_of_buttons = [];
	for (let i = 1; i <= props.floors; i++) {
		number_of_buttons.push(
			<li key={i} style={{ listStyle: "none" }}>
				<Button key={i} elevatorid={props.elevatorid}>
					{i}
				</Button>
			</li>
		);
	}
	return <ul className='controlpanel-container'>{number_of_buttons}</ul>;
}
