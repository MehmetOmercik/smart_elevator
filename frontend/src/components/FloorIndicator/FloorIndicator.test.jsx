import { render, screen } from "@testing-library/react";
import FloorIndicator from "./FloorIndicator";
import { renderWithProviders } from "../../test/test-utils";

describe("Floor Indicator tests", () => {
  test("snapshot", () => {
    const floorIndicator = renderWithProviders(<FloorIndicator />);
    expect(floorIndicator).toMatchSnapshot();
  });

  test("elevator name rendering", () => {
    renderWithProviders(<FloorIndicator />);
    const elevatorId = screen.getByText(/Elevator NO:/i);
    expect(elevatorId).toBeInTheDocument();
  });

  test("up arrow rendering", () => {
    const { getByTestId } = renderWithProviders(<FloorIndicator />);
    const upArrow = getByTestId("up-arrow");
    expect(upArrow).toBeVisible();
  });

  test("down arrow rendering", () => {
    const { getByTestId } = renderWithProviders(<FloorIndicator />);
    const downArrow = getByTestId("down-arrow");
    expect(downArrow).toBeInTheDocument();
  });

  test("floor number rendering", () => {
    const { getByTestId } = renderWithProviders(<FloorIndicator />);
    const floorNumber = getByTestId("floor-number");
    expect(floorNumber).toBeInTheDocument();
  });
});
