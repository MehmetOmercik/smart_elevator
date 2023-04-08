import { useState, useEffect } from "react";
import "./App.css";
import Elevator from "./components/Elevator/Elevator";
import { systemConfigUrl } from "./http";

import axios from "axios";

function App() {
	const [elevators, setElevators] = useState();
	const [floors, setfloors] = useState();

	const number_elevators = [];

	useEffect(() => {
		async function fetchSystemConfig() {
			const response = await axios.get(systemConfigUrl);
			const no_elevators = response.data.no_elevators;
			const no_floors = response.data.no_floors;
			setElevators(no_elevators);
			setfloors(no_floors);
		}
		fetchSystemConfig();
	}, []);

	for (let i = 1; i < elevators + 1; i++) {
		number_elevators.push(
			<Elevator key={i} elevatorid={i} floors={floors} />
		);
	}

	return <div className='App'>{number_elevators}</div>;
}

export default App;
