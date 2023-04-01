import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../components/Button/ButtonSlice.js";

export const store = configureStore({
	reducer: {
		button: buttonReducer,
	},
});

export default store;
