import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/test-utils";
import Elevator from "./Elevator";

describe("Elevator tests", () => {
  test("snapshot test", () => {
    const elevator = renderWithProviders(<Elevator />);
    expect(elevator).toMatchSnapshot();
  });
});
