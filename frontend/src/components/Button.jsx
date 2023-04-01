import React from "react";

export default function Button(props) {
	const buttonHandler = () => {
		console.log({
			buttonNO: +props.children,
			elevatorId: props.elevatorid,
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
