import { createSlice } from "@reduxjs/toolkit";

const buttonInitialState = { floor: 0, elevator: 0 };

export const buttonSlice = createSlice({
	name: "button",
	initialState: buttonInitialState,
	reducers: {
		updateFloor: (state, action) => {
			state.floor = action.payload;
		},

		updateElevator: (state, action) => {
			state.elevator = action.payload;
		},
	},
});

export const { updateFloor, updateElevator } = buttonSlice.actions;
// export const selectCount = (state) => state.counter.value;
export default buttonSlice.reducer;
