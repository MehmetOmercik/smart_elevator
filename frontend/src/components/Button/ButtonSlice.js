import { createSlice } from "@reduxjs/toolkit";

const buttonInitialState = { floor: 0, floorDifference: 0, elevator: 0 };

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

		updateElevator: (state, action) => {
			state.elevator = action.payload;
		},
	},
});

export const { updateFloor, updateElevator, calculateFloorDifference } =
	buttonSlice.actions;

export default buttonSlice.reducer;
