import { render } from "@testing-library/react";
import ElevatorBackground from "./ElevatorBackground";

describe("elevator background tests", () => {
  test("snapshot", () => {
    const elevatorBackground = render(<ElevatorBackground />);
    expect(elevatorBackground).toMatchSnapshot();
  });
  test("elevator background rendering", () => {
    const { getByTestId } = render(<ElevatorBackground />);
    const div = getByTestId("elevator-background");
    expect(div).toBeInTheDocument();
  });
});
