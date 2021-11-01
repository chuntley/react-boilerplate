import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "test/utils";

import About from "../About";

it("renders <About /> page", () => {
  const { getByText } = render(<About />);
  expect(getByText("About Page")).toBeTruthy();
  getByText("Current Count: 0");
});

it("clicks button and fires increment counter", () => {
  const { getByText } = render(<About />);
  userEvent.click(getByText("Increment"));
  getByText("Current Count: 1");
});
