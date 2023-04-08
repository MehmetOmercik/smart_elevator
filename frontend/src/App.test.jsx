import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

describe("app tests", () => {
	test.skip("App should have numbers", () => {
		render(<App />);
		const elevator = screen.getByText(/elevator/i);
		expect(elevator).toBeInTheDocument();
	});
});
