import { render } from "@/utils/rtl-wrapper";
import React from "react";
import { expect, it } from "vitest";

import Home from "@/pages/Home";

it("renders <Home /> page", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Welcome!")).toBeTruthy();
});
