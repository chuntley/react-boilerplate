import React from "react";
import { renderWithRouter } from "test/utils";

import Home from "../Home";

it("renders <Home /> page", () => {
  const { getByText } = renderWithRouter(<Home />);
  expect(getByText("Welcome!")).toBeTruthy();
});
