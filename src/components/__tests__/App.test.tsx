import React from "react";
import { expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../utils/rtl-wrapper";

import App from "../App";

it("can browse to the about page", async () => {
  const { getByText } = renderWithRouter(<App />);
  expect(getByText("Welcome!")).toBeTruthy();
  userEvent.click(getByText("Go to count page"));
  expect(getByText("Count Page")).toBeTruthy();
});
