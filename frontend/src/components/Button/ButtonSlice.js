import { createSlice } from "@reduxjs/toolkit";

const buttonInitialState = {
  elevatorID: 0,
  floor: 0,
  floorDifference: 0,
  currentFloor: 0,
};

export const buttonSlice = createSlice({
  name: "button",
  initialState: buttonInitialState,
  reducers: {
    calculateFloorDifference: (state, action) => {
      state.floorDifference = state.floor - action.payload;
    },

    updateFloor: (state, action) => {
      state.floor = action.payload;
    },

    updateElevatorID: (state, action) => {
      state.elevatorID = action.payload;
    },

    currentFloor: (state, action) => {
      state.currentFloor = action.payload;
    },
  },
});

export const {
  updateFloor,
  updateElevatorID,
  calculateFloorDifference,
  currentFloor,
} = buttonSlice.actions;

export default buttonSlice.reducer;
