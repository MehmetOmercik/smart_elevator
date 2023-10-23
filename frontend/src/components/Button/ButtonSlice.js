import { createSlice } from "@reduxjs/toolkit";

const buttonInitialState = {
  elevators: [
    {
      elevatorID: 1,
      floorRequest: 0,
      oldFloor: 0,
      currentFloor: 0,
    },
    {
      elevatorID: 2,
      floorRequest: 0,
      oldFloor: 0,
      currentFloor: 0,
    },
  ],
};

export const buttonSlice = createSlice({
  name: "button",
  initialState: buttonInitialState,
  reducers: {
    elevatorsManipulation: (state, action) => {
      switch (action.payload.type) {
        case "RESET_ELEVATORS":
          return {
            ...state,
            elevators: action.payload.payload,
          };
        // case "ADD_ELEVATOR":
        //   return {
        //     ...state,
        //     elevators: [...state.elevators, action.payload.payload],
        //   };
        // case "REMOVE_ELEVATOR":
        //   return {
        //     ...state,
        //     elevators: state.elevators.filter(
        //       (elevator) => elevator.elevatorID !== action.payload.payload
        //     ),
        //   };
        case "UPDATE_ELEVATOR_CF":
          // const elevator = state.elevators.find(
          //   (item) => item.elevatorID === action.payload.payload
          // );
          const { elevatorID: elevatorIDCF, currentFloor } =
            action.payload.payload;
          return {
            ...state,
            elevators: state.elevators.map((elevator) => {
              if (elevator.elevatorID === elevatorIDCF) {
                return {
                  ...elevator,
                  currentFloor: currentFloor,
                };
              }
              return elevator;
            }),
          };

        case "UPDATE_ELEVATOR_OF":
          const { elevatorID: elevatorIDOF, oldFloor } = action.payload.payload;
          return {
            ...state,
            elevators: state.elevators.map((elevator) => {
              if (elevator.elevatorID === elevatorIDOF) {
                return {
                  ...elevator,
                  oldFloor: oldFloor,
                };
              }
              return elevator;
            }),
          };

        case "UPDATE_ELEVATOR_FR":
          const { elevatorID: elevatorIDFR, floorRequest } =
            action.payload.payload;
          return {
            ...state,
            elevators: state.elevators.map((elevator) => {
              if (elevator.elevatorID === elevatorIDFR) {
                return {
                  ...elevator,
                  floorRequest: floorRequest,
                };
              }
              return elevator;
            }),
          };

        default:
          return state;
      }
    },
  },
});

export const { elevatorsManipulation } = buttonSlice.actions;

export default buttonSlice.reducer;
