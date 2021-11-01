import React from "react";
import { render } from "utils/rtl-wrapper";

import Home from "../Home";

it("renders <Home /> page", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Welcome!")).toBeTruthy();
});
