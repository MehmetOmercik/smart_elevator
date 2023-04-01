import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button";
import ControlPanel from "./components/ControlPanel";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<ControlPanel value={1}></ControlPanel>
			<ControlPanel value={2}></ControlPanel>
		</div>
	);
}

export default App;
