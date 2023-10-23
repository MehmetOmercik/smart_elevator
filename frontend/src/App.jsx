import { useState, useEffect } from "react";
import "./App.css";
import Elevator from "./components/Elevator/Elevator";
import { systemConfigUrl } from "./http";

import axios from "axios";
import { elevatorsManipulation } from "./components/Button/ButtonSlice";
import { useDispatch } from "react-redux";

function App() {
  const [elevators, setElevators] = useState();
  const [floors, setfloors] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchSystemConfig() {
      const response = await axios.get(systemConfigUrl);
      const no_elevators = response.data.no_elevators;
      const no_floors = response.data.no_floors;
      setElevators(no_elevators);
      setfloors(no_floors);

      //Used to populate redux with elevator objects representing each one
      const elevatorReduxConfig = new Array(no_elevators)
        .fill()
        .map((_, index) => ({
          elevatorID: index + 1,
          floorRequest: 0,
          oldFloor: 0,
          currentFloor: 0,
        }));
      dispatch(
        elevatorsManipulation({
          type: "RESET_ELEVATORS",
          payload: elevatorReduxConfig,
        })
      );
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
