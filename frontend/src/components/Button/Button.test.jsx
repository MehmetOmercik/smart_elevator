import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/test-utils";
import Button from "./Button";

describe("Button tests", () => {
  test("snapshot test", () => {
    const button = renderWithProviders(<Button />);
    expect(button).toMatchSnapshot();
  });
});
