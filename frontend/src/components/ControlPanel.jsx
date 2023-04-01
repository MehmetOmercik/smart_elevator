import React from "react";
import Button from "./Button";

export default function ControlPanel(props) {
	return (
		<div className='controlpanel-container' value={props.value}>
			<Button elevatorid={props.value}>1</Button>
			<Button elevatorid={props.value}>2</Button>
			<Button elevatorid={props.value}>3</Button>
			<Button elevatorid={props.value}>4</Button>
			<Button elevatorid={props.value}>5</Button>
			<Button elevatorid={props.value}>6</Button>
			<Button elevatorid={props.value}>7</Button>
			<Button elevatorid={props.value}>8</Button>
			<Button elevatorid={props.value}>9</Button>
		</div>
	);
}
