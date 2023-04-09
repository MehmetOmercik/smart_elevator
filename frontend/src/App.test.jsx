import { render, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./test/test-utils";

describe("app tests", () => {
	test("test if there is more than one elevator", async () => {
		//Used to overwrite fetch function so that it doesnt affect with the db
		window.fetch = vi.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ no_elevators: 2, no_floors: 9 }],
		});
		renderWithProviders(<App />);
		const listOfElevators = await screen.findAllByRole("listitem");
		expect(listOfElevators).not.toHaveLength(0);
	});
});
