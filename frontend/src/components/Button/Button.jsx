import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFloor,
  updateElevatorID,
  calculateFloorDifference,
  currentFloor,
  elevatorsManipulation,
} from "./ButtonSlice";
import { elevatorURL } from "../../http";

export default function Button(props) {
  const dispatch = useDispatch();
  const elevator = useSelector((state) =>
    state.button.elevators.find(
      (elevator) => elevator.elevatorID === props.elevatorid
    )
  );
  const oldFloor = elevator.floorRequest;

  const checkElevatorObjectExists = async (id) => {
    try {
      const response = await axios.get(`${elevatorURL}/${id}`);
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
    const response = await axios.put(`${elevatorURL}/${id}/`, data);
    return response.data;
  };
  const createObject = async (data) => {
    const response = await axios.post(`${elevatorURL}/`, data);
    return response.data;
  };
  const buttonHandler = async () => {
    const floorRequest = +props.children;
    console.log(oldFloor);
    console.log(floorRequest);
    // dispatch(
    //   elevatorsManipulation({
    //     type: "UPDATE_ELEVATOR_OF",
    //     payload: {
    //       elevatorID: props.elevatorid,
    //       oldFloor: oldFloor,
    //     },
    //   })
    // );

    dispatch(
      elevatorsManipulation({
        type: "UPDATE_ELEVATOR_FR",
        payload: {
          elevatorID: props.elevatorid,
          floorRequest: floorRequest,
        },
      })
    );

    if (floorRequest > oldFloor) {
      for (let i = oldFloor + 1; i <= floorRequest; i++) {
        setTimeout(() => {
          dispatch(
            elevatorsManipulation({
              type: "UPDATE_ELEVATOR_CF",
              payload: { elevatorID: props.elevatorid, currentFloor: i },
            })
          );

          // axios.patch(`${elevator}/${props.elevatorid}/`, {
          //   current_floor: i,
          // });
        }, 800 * i);
      }
    } else {
      for (let j = oldFloor - 1; j >= floorRequest; j--) {
        setTimeout(() => {
          dispatch(
            elevatorsManipulation({
              type: "UPDATE_ELEVATOR_CF",
              payload: {
                elevatorID: props.elevatorid,
                currentFloor: oldFloor - j,
              },
            })
          );
          // axios.patch(`${elevatorURL}/${props.elevatorid}/`, {
          //   current_floor: elevator.oldFloor - j,
          // });
        }, 800 * j);
      }
    }

    // const elevatorObjectExists = await checkElevatorObjectExists(
    //   props.elevatorid
    // );

    // if (elevatorObjectExists) {
    //   const updatedObject = await updateObject(
    //     props.elevatorid,
    //     elevatorObjectData
    //   );
    //   console.log("Object updated:", updatedObject);
    // } else {
    //   const createdObject = await createObject(elevatorObjectData);
    //   console.log("Object created:", createdObject);
    // }
  };
  return (
    <button
      className="elevator-button"
      onClick={buttonHandler}
      elevatorid={props.elevatorid}
    >
      {props.children}
    </button>
  );
}
