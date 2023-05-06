import { useState, useEffect } from "react";
import "./App.css";
import Elevator from "./components/Elevator/Elevator";
import { systemConfigUrl } from "./http";

import axios from "axios";

function App() {
  const [elevators, setElevators] = useState();
  const [floors, setfloors] = useState();

  const number_of_elevators = [];

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

  return (
    <>
      <ul className="app-container">
        {[...Array(elevators)].map((_, index) => (
          <Elevator key={index} elevatorid={index + 1} floors={floors} />
        ))}
      </ul>
    </>
  );
}

export default App;
